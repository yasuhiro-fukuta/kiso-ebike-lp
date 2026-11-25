/** Luggage Bus: create a Stripe Checkout session for an instant booking.
 *  The price is computed here on the server (never trusted from the browser),
 *  and each run is capped at RUN_CAPACITY bags, counted from paid bookings in Stripe.
 *  Needs STRIPE_SECRET_KEY (a restricted key: Checkout Sessions write,
 *  PaymentIntents read). Without it the API answers 503 and the form falls back to WhatsApp. */
import { NextResponse, type NextRequest } from "next/server";
import { quoteLb, RUN_CAPACITY } from "../../lb-booking";
import { CANCEL_POLICY } from "../../luggage-bus";

type Lang = "en" | "ja";
const STRIPE = "https://api.stripe.com/v1";
const LB_ORIGIN = "https://luggagebusnakasendo.com";

async function stripe(path: string, key: string, init?: { method?: string; body?: URLSearchParams }) {
  const res = await fetch(`${STRIPE}${path}`, {
    method: init?.method ?? "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      ...(init?.body ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
    body: init?.body,
    cache: "no-store",
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error?.message ?? `Stripe ${res.status}`);
  return json;
}

/** Bags already paid for on this date and run. */
async function bookedBags(key: string, date: string, run: string) {
  const q = `metadata['service']:'luggage_bus' AND metadata['date']:'${date}' AND metadata['run']:'${run}' AND status:'succeeded'`;
  let total = 0;
  let page: string | undefined;
  for (let i = 0; i < 10; i++) {
    const params = new URLSearchParams({ query: q, limit: "100" });
    if (page) params.set("page", page);
    const r = await stripe(`/payment_intents/search?${params}`, key);
    for (const pi of r.data ?? []) total += Number(pi.metadata?.bags ?? 0) || 0;
    if (!r.has_more) break;
    page = r.next_page;
  }
  return total;
}

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return NextResponse.json({ fallback: true }, { status: 503 });

  const body = await req.json().catch(() => ({}));
  const lang: Lang = body.lang === "ja" ? "ja" : "en";
  const ja = lang === "ja";
  const input = {
    name: String(body.name ?? "").slice(0, 80),
    date: String(body.date ?? "").slice(0, 10),
    from: String(body.from ?? ""),
    to: String(body.to ?? ""),
    bags: Number(body.bags ?? 0),
    fromBooking: String(body.fromBooking ?? "").slice(0, 80),
    toBooking: String(body.toBooking ?? "").slice(0, 80),
    fromPlace: String(body.fromPlace ?? "").slice(0, 80),
    toPlace: String(body.toPlace ?? "").slice(0, 80),
  };
  if (body.agree !== true)
    return NextResponse.json(
      { error: ja ? "キャンセルポリシーと補償への同意にチェックを入れてください。" : "Please tick the box to agree to the cancellation policy and compensation terms." },
      { status: 400 },
    );

  const q = quoteLb(input, lang);
  if (q.kind === "approval") return NextResponse.json({ approval: true });
  if (q.kind === "error") return NextResponse.json({ error: q.message }, { status: 400 });

  try {
    const used = await bookedBags(key, input.date, q.run);
    if (used + input.bags > RUN_CAPACITY) {
      return NextResponse.json(
        {
          error: ja
            ? `この日の便は残り${Math.max(0, RUN_CAPACITY - used)}個です。個数を減らすか、別の日を選んでください。`
            : `Only ${Math.max(0, RUN_CAPACITY - used)} bag spaces left on that run. Choose fewer bags or another date.`,
        },
        { status: 409 },
      );
    }

    const host = (req.headers.get("host") ?? "").toLowerCase();
    const onLb = host.includes("luggagebusnakasendo.com");
    const origin = onLb ? LB_ORIGIN : `https://${host}`;
    const base = onLb ? "" : "/lb";
    const jaPath = ja ? "/ja" : "";

    const name = ja
      ? `ラゲッジバス ${input.date} ${q.from.label} → ${q.to.label} 荷物${input.bags}個`
      : `Luggage Bus ${input.date}: ${q.from.label} → ${q.to.label}, ${input.bags} bag${input.bags > 1 ? "s" : ""}`;
    const description =
      q.parts.map((p) => `${p[lang]} ¥${p.yen.toLocaleString("en-US")}`).join(" + ") +
      // Opening campaign (2026-11-25): we charge the campaign price (q.total).
      (q.list > q.total
        ? ja
          ? `(オープンキャンペーン価格・定価 ¥${q.list.toLocaleString("en-US")})`
          : ` (opening campaign price; regular ¥${q.list.toLocaleString("en-US")})`
        : "") +
      (q.nextDay ? (ja ? "(翌日のお届け)" : " (delivered the next day)") : "");
    const meta: Record<string, string> = {
      service: "luggage_bus",
      date: input.date,
      run: q.run,
      from: q.from.label,
      to: q.to.label,
      bags: String(input.bags),
      name: input.name,
      lang,
    };
    // Names the inn reservations are under: we contact both inns ahead (2026-11-20).
    if (input.fromBooking.trim()) meta.from_inn_booking_name = input.fromBooking.trim();
    if (input.toBooking.trim()) meta.to_inn_booking_name = input.toBooking.trim();
    if (input.fromPlace.trim()) meta.from_place_name = input.fromPlace.trim();
    if (input.toPlace.trim()) meta.to_place_name = input.toPlace.trim();
    meta.agreed_cancel_policy = "7d_free_then_100";
    meta.list_price_jpy = String(q.list);
    meta.charged_price_jpy = String(q.total);
    if (q.nextDay) meta.delivery = "next_day";

    const p = new URLSearchParams();
    p.set("mode", "payment");
    p.set("locale", ja ? "ja" : "en");
    p.set("line_items[0][quantity]", "1");
    p.set("line_items[0][price_data][currency]", "jpy");
    p.set("line_items[0][price_data][unit_amount]", String(q.total));
    p.set("line_items[0][price_data][product_data][name]", name);
    p.set("line_items[0][price_data][product_data][description]", description);
    p.set("phone_number_collection[enabled]", "true");
    p.set("expires_at", String(Math.floor(Date.now() / 1000) + 30 * 60));
    p.set(
      "custom_text[submit][message]",
      ja
        ? `お支払いで予約確定です。${CANCEL_POLICY.ja}駅の預かり料は現地払いです。`
        : `Your booking is confirmed when you pay. ${CANCEL_POLICY.en} Station holding fees are paid on the spot.`,
    );
    p.set("success_url", `${origin}${base}${jaPath}/booked?session_id={CHECKOUT_SESSION_ID}`);
    p.set("cancel_url", `${origin}${base}${jaPath}`);
    for (const [k, v] of Object.entries(meta)) {
      p.set(`metadata[${k}]`, v);
      p.set(`payment_intent_data[metadata][${k}]`, v);
    }
    p.set("payment_intent_data[description]", name);

    const session = await stripe("/checkout/sessions", key, { method: "POST", body: p });
    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json(
      { error: ja ? "決済画面を開けませんでした。WhatsAppでお申し込みください。" : "We couldn't open the payment page. Please book on WhatsApp instead.", fallback: true },
      { status: 502 },
    );
  }
}
