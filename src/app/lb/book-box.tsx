"use client";

import { useEffect, useRef, useState } from "react";
import { CreditCard, MessageCircle, ShieldCheck } from "lucide-react";
import { LB_CHOICE_GROUPS, findPoint, estimate, isNextDay, yen, ARRIVE_BY, DROP_BY } from "../luggage-bus";
import { quoteLb, needsInnBooking } from "../lb-booking";
import { LB_COMPENSATION_YEN } from "../lb-config";
import { wa } from "../site";

type Lang = "en" | "ja";

/** Values the range checker hands over ("Book this"). `n` changes on every hand-over. */
export type LbPreset = { from: string; to: string; bags: string; n: number };

/** The stops of the booking box and the range checker: one list, grouped by town. */
export function LbStopOptions({ lang }: { lang: Lang }) {
  return (
    <>
      {LB_CHOICE_GROUPS.map((g) => (
        <optgroup key={g.area.key} label={g.area.name[lang]}>
          {g.points.map((p) => (
            <option key={p.en} value={p[lang]}>
              {p[lang]}
            </option>
          ))}
        </optgroup>
      ))}
    </>
  );
}

/** Booking box at the top of the Luggage Bus page (modelled on Correos Paq Mochila):
 *  pick date, stops and bags → price appears at once → pay and confirm,
 *  or send the request on WhatsApp when it needs our approval. */
export function LbBookBox({ lang, preset }: { lang: Lang; preset?: LbPreset | null }) {
  const ja = lang === "ja";
  const [v, setV] = useState({
    name: "",
    date: "",
    from: "",
    to: "",
    bags: "1",
    fromBooking: "",
    toBooking: "",
    fromInn: "",
    toInn: "",
  });
  const [err, setErr] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);
  const boxRef = useRef<HTMLElement>(null);
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setV({ ...v, [k]: e.target.value });

  // Hand-over from the range checker: fill the stops and bags, then bring the box into view.
  useEffect(() => {
    if (!preset) return;
    setV((cur) => ({ ...cur, from: preset.from, to: preset.to, bags: preset.bags }));
    boxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [preset]);

  const fp = findPoint(v.from);
  const tp = findPoint(v.to);
  const bags = Number(v.bags);
  const est = estimate(fp?.pos ?? null, tp?.pos ?? null, bags);
  const nextDay = isNextDay(fp?.pos ?? null, tp?.pos ?? null);
  const q = quoteLb(
    { name: v.name, date: v.date, from: v.from, to: v.to, bags, fromBooking: v.fromBooking, toBooking: v.toBooking },
    lang,
  );
  const instant = q.kind === "instant" && process.env.NEXT_PUBLIC_LB_INSTANT === "1";
  const fromInnAsk = !!fp && !fp.place && fp.pos !== null;
  const toInnAsk = !!tp && !tp.place && tp.pos !== null;
  const fromBookingAsk = needsInnBooking(v.from);
  const toBookingAsk = needsInnBooking(v.to);

  const innLine = (label: string, inn: string, booking: string, ja: boolean) =>
    [label, inn && (ja ? `宿名:${inn}` : `inn: ${inn}`), booking && (ja ? `予約名:${booking}` : `booking name: ${booking}`)]
      .filter(Boolean)
      .join(" / ");
  const message = ja
    ? `こんにちは。ラゲッジバスの予約を申し込みます。\n氏名:${v.name || "〇"}\n日付:${v.date || "〇"}\n預ける場所:${innLine(v.from || "〇", v.fromInn, v.fromBooking, true)}\n受け取る場所:${innLine(v.to || "〇", v.toInn, v.toBooking, true)}\n個数:${bags}個\n概算金額:${est ? yen(est.total) : "要相談"}${nextDay ? "\n※翌日のお届けの区間です。" : ""}\n※荷物の写真を1個につき1枚送ります。`
    : `Hello! I'd like to book the Luggage Bus.\nName: ${v.name || "__"}\nDate: ${v.date || "__"}\nDrop off: ${innLine(v.from || "__", v.fromInn, v.fromBooking, false)}\nCollect: ${innLine(v.to || "__", v.toInn, v.toBooking, false)}\nBags: ${bags}\nEstimate: ${est ? yen(est.total) : "to be confirmed"}${nextDay ? "\n(This route is delivered the next day.)" : ""}\nI'll send one photo of each bag.`;

  const pay = async () => {
    setErr(null);
    setPaying(true);
    try {
      const res = await fetch("/api/lb-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          name: v.name,
          date: v.date,
          from: v.from,
          to: v.to,
          bags,
          fromBooking: v.fromBooking,
          toBooking: v.toBooking,
        }),
      });
      const j = await res.json().catch(() => ({}));
      if (j.url) {
        window.location.href = j.url;
        return;
      }
      setErr(j.error ?? (ja ? "この内容はWhatsAppでお申し込みください。" : "Please send this request on WhatsApp."));
    } catch {
      setErr(ja ? "通信できませんでした。WhatsAppでお申し込みください。" : "Connection failed. Please book on WhatsApp.");
    }
    setPaying(false);
  };

  return (
    <section className="lb-bookbox" id="book-box" aria-label={ja ? "予約" : "Booking"} ref={boxRef}>
      <h2>{ja ? "日付と駅を選ぶと、金額がすぐ出ます。" : "Pick a date and your stops. See the price at once."}</h2>
      <div className="lb-bookbox-grid">
        <label>
          <span>{ja ? "日付(荷物を置く日)" : "Date (the day you leave your bags)"}</span>
          <input id="lbb-date" type="date" value={v.date} onChange={set("date")} />
        </label>
        <label>
          <span>{ja ? "個数" : "Bags"}</span>
          <select id="lbb-bags" value={v.bags} onChange={set("bags")}>
            {["1", "2", "3", "4", "5", "6", "7", "8"].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="wide">
          <span>{ja ? "預ける駅・宿" : "Drop off at"}</span>
          <select id="lbb-from" value={v.from} onChange={set("from")}>
            <option value="">{ja ? "—選択—" : "— choose —"}</option>
            <LbStopOptions lang={lang} />
          </select>
        </label>
        {fromInnAsk && (
          <label>
            <span>{ja ? "出発の宿の名前" : "Name of the departure inn"}</span>
            <input id="lbb-from-inn" type="text" value={v.fromInn} onChange={set("fromInn")} />
          </label>
        )}
        {fromBookingAsk && (
          <label>
            <span>{ja ? "出発の宿の予約名" : "Name on the departure inn booking"}</span>
            <input id="lbb-from-booking" type="text" value={v.fromBooking} onChange={set("fromBooking")} />
          </label>
        )}
        <label className="wide">
          <span>{ja ? "受け取る駅・宿" : "Collect at"}</span>
          <select id="lbb-to" value={v.to} onChange={set("to")}>
            <option value="">{ja ? "—選択—" : "— choose —"}</option>
            <LbStopOptions lang={lang} />
          </select>
        </label>
        {toInnAsk && (
          <label>
            <span>{ja ? "届け先の宿の名前" : "Name of the destination inn"}</span>
            <input id="lbb-to-inn" type="text" value={v.toInn} onChange={set("toInn")} />
          </label>
        )}
        {toBookingAsk && (
          <label>
            <span>{ja ? "届け先の宿の予約名" : "Name on the destination inn booking"}</span>
            <input id="lbb-to-booking" type="text" value={v.toBooking} onChange={set("toBooking")} />
          </label>
        )}
        <label className="wide">
          <span>{ja ? "氏名" : "Your name"}</span>
          <input id="lbb-name" type="text" value={v.name} onChange={set("name")} autoComplete="name" />
        </label>
      </div>
      {(fromBookingAsk || toBookingAsk) && (
        <p className="book-hint">
          {ja
            ? "宿の予約名は、こちらから宿へ事前に連絡するために使います。"
            : "We use the inn booking names to let both inns know ahead of time."}
        </p>
      )}

      <div className="lb-bookbox-price">
        <strong>{est ? yen(est.total) : "—"}</strong>
        <span>
          {est
            ? est.parts.map((p) => `${p[lang]} ${yen(p.yen)}`).join(" + ")
            : ja ? "駅と個数を選ぶと出ます(要相談の地点はWhatsAppで)" : "Choose your stops and bags (stops by arrangement: on WhatsApp)"}
        </span>
        <small>
          {ja
            ? `朝${DROP_BY}までに置けば、その日の${ARRIVE_BY}までに届きます。駅の預かり料(宿は無料)は現地払いです。`
            : `Leave them by ${DROP_BY}, and they arrive by ${ARRIVE_BY} the same day. Station holding fees (free at inns) are paid on the spot.`}
        </small>
        {nextDay && (
          <small className="lb-nextday">
            {ja
              ? "※南木曽より北から田立・坂下・中津川へは、翌日のお届けです(予約は受け付けます)。"
              : "Note: from north of Nagiso to Tadachi, Sakashita or Nakatsugawa, bags arrive the next day (we still take the booking)."}
          </small>
        )}
      </div>

      {err && <p className="book-error" role="alert">{err}</p>}
      {q.kind === "error" && v.date && v.from && v.to && <p className="book-hint">{q.message}</p>}

      <div className="lb-bookbox-actions">
        {instant ? (
          <button type="button" className="stay-cta book-pay" disabled={paying} onClick={pay}>
            <CreditCard size={16} />{" "}
            {paying
              ? ja ? "決済画面を開いています…" : "Opening payment…"
              : ja ? `${est ? yen(est.total) : ""}を支払って予約を確定` : `Pay ${est ? yen(est.total) : ""} and confirm`}
          </button>
        ) : (
          <a href={wa(message)} target="_blank" rel="noopener noreferrer" className="stay-cta">
            <MessageCircle size={16} /> {ja ? "この内容でWhatsAppから申し込む" : "Send this request on WhatsApp"}
          </a>
        )}
      </div>
      <p className="lb-bookbox-trust">
        <ShieldCheck size={14} />{" "}
        {ja
          ? `前日23時まで受付 ・ 3日前まで全額返金${LB_COMPENSATION_YEN !== null ? ` ・ 荷物1個${yen(LB_COMPENSATION_YEN)}まで補償` : ""}`
          : `Book by 23:00 the day before · Full refund up to 3 days before${LB_COMPENSATION_YEN !== null ? ` · Each bag covered up to ${yen(LB_COMPENSATION_YEN)}` : ""}`}
      </p>
    </section>
  );
}
