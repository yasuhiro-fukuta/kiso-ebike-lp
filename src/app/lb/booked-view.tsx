import { CheckCircle2, Camera, Clock, MessageCircle, Building2 } from "lucide-react";
import { LbNav, LbFooter } from "./lb-chrome";
import { WHATSAPP_URL, WHATSAPP_URL_JA } from "../site";
import { DROP_BY, ARRIVE_BY, CANCEL_POLICY } from "../luggage-bus";

type Lang = "en" | "ja";

/** Shown after Stripe Checkout. Reads the session on the server, so the page only
 *  says "confirmed" when Stripe says the payment went through. */
async function loadSession(id: string | undefined) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || !id || !/^cs_[A-Za-z0-9_]+$/.test(id)) return null;
  const res = await fetch(`https://api.stripe.com/v1/checkout/sessions/${id}`, {
    headers: { Authorization: `Bearer ${key}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export async function BookedView({ lang, sessionId }: { lang: Lang; sessionId?: string }) {
  const ja = lang === "ja";
  const s = await loadSession(sessionId);
  const paid = s?.payment_status === "paid";
  const m = (s?.metadata ?? {}) as Record<string, string>;
  const wa = ja ? WHATSAPP_URL_JA : WHATSAPP_URL;

  return (
    <div className="lp">
      <LbNav lang={lang} />
      <header className="page-head">
        <span className="eyebrow">{ja ? "ご予約" : "Your booking"}</span>
        <h1>
          {paid
            ? ja ? "予約が確定しました。" : "Your booking is confirmed."
            : ja ? "お支払いを確認しています。" : "We're checking your payment."}
        </h1>
        <p>
          {paid
            ? ja
              ? "お支払いありがとうございます。領収書はメールで届きます。"
              : "Thank you for your payment. Your receipt is on its way by email."
            : ja
              ? "確定のお知らせはWhatsAppでお送りします。しばらくしても届かないときは、下のWhatsAppからご連絡ください。"
              : "We'll confirm on WhatsApp. If you don't hear from us soon, message us below."}
        </p>
      </header>

      {paid && (
        <section className="mini-sec">
          <div className="lb-table-wrap">
            <table className="lb-table lb-compare">
              <tbody>
                <tr><th scope="row">{ja ? "日付" : "Date"}</th><td className="us">{m.date}</td></tr>
                <tr><th scope="row">{ja ? "預ける" : "Drop off"}</th><td className="us">{m.from}</td></tr>
                <tr><th scope="row">{ja ? "受け取る" : "Collect"}</th><td className="us">{m.to}</td></tr>
                <tr><th scope="row">{ja ? "個数" : "Bags"}</th><td className="us">{m.bags}</td></tr>
                {m.from_inn_booking_name && (
                  <tr><th scope="row">{ja ? "出発の宿の予約名" : "Departure inn booking name"}</th><td className="us">{m.from_inn_booking_name}</td></tr>
                )}
                {m.to_inn_booking_name && (
                  <tr><th scope="row">{ja ? "届け先の宿の予約名" : "Destination inn booking name"}</th><td className="us">{m.to_inn_booking_name}</td></tr>
                )}
                <tr>
                  <th scope="row">{ja ? "届く時刻" : "Arrives"}</th>
                  <td className="us">
                    {m.delivery === "next_day"
                      ? ja ? `翌日の${ARRIVE_BY}まで` : `By ${ARRIVE_BY} the next day`
                      : ja ? `当日の${ARRIVE_BY}まで` : `By ${ARRIVE_BY} the same day`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="mini-sec">
        <h2>{ja ? "このあとやること。" : "What to do next."}</h2>
        <div className="mini-grid cols2">
          <div className="mini-card lb-way">
            <h3><Camera size={20} /> {ja ? "荷物の写真を送る" : "Send a photo of each bag"}</h3>
            <p>{ja ? "荷物1個につき1枚、WhatsAppで送ってください。" : "One photo per bag, on WhatsApp."}</p>
          </div>
          <div className="mini-card lb-way">
            <h3><Clock size={20} /> {ja ? "当日、駅に預ける" : "Drop off on the day"}</h3>
            <p>
              {ja
                ? `朝${DROP_BY}まで(前日の夕方でも可)に、宿のフロントか玄関、または駅に置いてください。駅の預かり料は現地払いです。`
                : `Leave your bags at your inn's front desk or entrance, or at your stop, by ${DROP_BY} (or the evening before). Station holding fees are paid on the spot.`}
            </p>
          </div>
          <div className="mini-card lb-way">
            <h3><Building2 size={20} /> {ja ? "宿にはこちらから連絡します" : "We'll contact your inns"}</h3>
            <p>
              {ja
                ? "出発と届け先の宿には、こちらから前もって連絡します。お客様から宿へ伝えていただく必要はありません。"
                : "We let the departure and destination inns know ahead of time. You don't need to tell them yourself."}
            </p>
          </div>
        </div>
        <div className="pay-row" style={{ marginTop: "1.2rem" }}>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="stay-cta">
            <MessageCircle size={16} /> {ja ? "WhatsAppで写真を送る" : "Send photos on WhatsApp"}
          </a>
        </div>
        <p className="drop-note">
          <CheckCircle2 size={14} />{" "}
          {ja
            ? `キャンセル:${CANCEL_POLICY.ja}急ぎはWhatsAppでお電話ください(+81 90-3839-2354)。`
            : `Cancellation: ${CANCEL_POLICY.en} Urgent? Call us on WhatsApp: +81 90-3839-2354.`}
        </p>
      </section>

      <LbFooter lang={lang} />
    </div>
  );
}
