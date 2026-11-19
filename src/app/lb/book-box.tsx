"use client";

import { useState } from "react";
import { CreditCard, MessageCircle, ShieldCheck } from "lucide-react";
import { FORM_POINTS, estimate, yen } from "../luggage-bus";
import { quoteLb } from "../lb-booking";
import { wa } from "../site";

type Lang = "en" | "ja";

/** Booking box at the top of the Luggage Bus page (modelled on Correos Paq Mochila):
 *  pick date, stops and bags → price appears at once → pay and confirm,
 *  or send the request on WhatsApp when it needs our approval. */
export function LbBookBox({ lang }: { lang: Lang }) {
  const ja = lang === "ja";
  const [v, setV] = useState({ name: "", date: "", from: "", to: "", bags: "1" });
  const [err, setErr] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setV({ ...v, [k]: e.target.value });

  const fp = FORM_POINTS.find((p) => p[lang] === v.from);
  const tp = FORM_POINTS.find((p) => p[lang] === v.to);
  const bags = Number(v.bags);
  const est = estimate(fp?.pos ?? null, tp?.pos ?? null, bags);
  const q = quoteLb({ name: v.name, date: v.date, from: v.from, to: v.to, bags }, lang);
  const instant = q.kind === "instant" && process.env.NEXT_PUBLIC_LB_INSTANT === "1";

  const message = ja
    ? `こんにちは。ラゲッジバスの予約を申し込みます。\n氏名:${v.name || "〇"}\n日付:${v.date || "〇"}\n預ける場所:${v.from || "〇"}\n受け取る場所:${v.to || "〇"}\n個数:${bags}個\n概算金額:${est ? yen(est.total) : "要相談"}\n※荷物の写真を1個につき1枚送ります。`
    : `Hello! I'd like to book the Luggage Bus.\nName: ${v.name || "__"}\nDate: ${v.date || "__"}\nDrop off: ${v.from || "__"}\nCollect: ${v.to || "__"}\nBags: ${bags}\nEstimate: ${est ? yen(est.total) : "to be confirmed"}\nI'll send one photo of each bag.`;

  const pay = async () => {
    setErr(null);
    setPaying(true);
    try {
      const res = await fetch("/api/lb-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, ...v, bags }),
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
    <section className="lb-bookbox" id="book-box" aria-label={ja ? "予約" : "Booking"}>
      <h2>{ja ? "日付と駅を選ぶと、金額がすぐ出ます。" : "Pick a date and your stops. See the price at once."}</h2>
      <div className="lb-bookbox-grid">
        <label>
          <span>{ja ? "日付" : "Date"}</span>
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
            {FORM_POINTS.map((p) => (
              <option key={p.en} value={p[lang]}>{p[lang]}</option>
            ))}
          </select>
        </label>
        <label className="wide">
          <span>{ja ? "受け取る駅・宿" : "Collect at"}</span>
          <select id="lbb-to" value={v.to} onChange={set("to")}>
            <option value="">{ja ? "—選択—" : "— choose —"}</option>
            {FORM_POINTS.map((p) => (
              <option key={p.en} value={p[lang]}>{p[lang]}</option>
            ))}
          </select>
        </label>
        <label className="wide">
          <span>{ja ? "氏名" : "Your name"}</span>
          <input id="lbb-name" type="text" value={v.name} onChange={set("name")} autoComplete="name" />
        </label>
      </div>

      <div className="lb-bookbox-price">
        <strong>{est ? yen(est.total) : "—"}</strong>
        <span>
          {est
            ? est.parts.map((p) => `${p[lang]} ${yen(p.yen)}`).join(" + ")
            : ja ? "駅と個数を選ぶと出ます" : "Choose your stops and bags"}
        </span>
        <small>{ja ? "駅の預かり料(宿は無料)は現地払いです。" : "Station holding fees (free at inns) are paid on the spot."}</small>
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
          ? "前日23時まで受付 ・ 3日前まで全額返金 ・ 荷物1個3万円まで補償"
          : "Book by 23:00 the day before · Full refund up to 3 days before · Each bag covered up to ¥30,000"}
      </p>
    </section>
  );
}
