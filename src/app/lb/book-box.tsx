"use client";

import { PriceTag } from "./price-tag";
import { useEffect, useRef, useState } from "react";
import { CreditCard, ShieldCheck } from "lucide-react";
import {
  LB_CHOICE_GROUPS,
  JR_STATIONS,
  jrOf,
  choicesForJr,
  findPoint,
  estimate,
  isNextDay,
  yen,
  ARRIVE_BY,
  DROP_BY,
  SEASON_START,
  SEASON_END,
  CANCEL_POLICY,
  CANCEL_SHORT,
  holdNotes,
} from "../luggage-bus";
import { quoteLb, needsInnBooking, jstNow } from "../lb-booking";
import { LB_COMPENSATION_YEN, LB_COMPENSATION_PERSON_YEN } from "../lb-config";

type Lang = "en" | "ja";

/** Values the range checker hands over ("Book this"). `n` changes on every hand-over. */
export type LbPreset = { from: string; to: string; bags: string; date?: string; n: number };

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

/** First and last day that can be picked: tomorrow (or the season start) to the season end. */
export const lbDateMin = () => {
  const t = jstNow().tomorrow;
  return t > SEASON_START ? t : SEASON_START;
};
export const LB_DATE_MAX = SEASON_END;

/** One end of a trip: first the nearest JR station, then the inn or place there
 *  (2026-11-24 社長: Googleマップとはつながず、最寄りのJR駅名からたどる). */
export function LbStopPicker({
  id,
  lang,
  value,
  onChange,
  extra,
}: {
  id: string;
  lang: Lang;
  value: string;
  onChange: (v: string) => void;
  /** Extra options after the JR stations (e.g. out-of-range towns). */
  extra?: { value: string; label: string }[];
}) {
  const ja = lang === "ja";
  const [jrPick, setJrPick] = useState<string>("");
  const jr = jrOf(value) ?? (extra?.some((x) => x.value === value) ? value : jrPick);
  const choices = jr ? choicesForJr(jr) : [];
  return (
    <div className="lb-stop-picker">
      <select
        id={`${id}-jr`}
        aria-label={ja ? "最寄りのJR駅" : "Nearest JR station"}
        value={jr}
        onChange={(e) => {
          const k = e.target.value;
          setJrPick(k);
          if (extra?.some((x) => x.value === k)) return onChange(k);
          const ch = choicesForJr(k);
          // A single choice (e.g. a station with only "another place") is picked straight away.
          onChange(ch.length === 1 ? ch[0][lang] : "");
        }}
      >
        <option value="">{ja ? "—最寄りのJR駅を選ぶ—" : "— nearest JR station —"}</option>
        <optgroup label={ja ? "JR中央本線(南→北)" : "JR Chuo Line (south → north)"}>
          {JR_STATIONS.map((j) => (
            <option key={j.key} value={j.key}>
              {ja ? `${j.name.ja}駅` : `${j.name.en} Station`}
            </option>
          ))}
        </optgroup>
        {extra && extra.length > 0 && (
          <optgroup label={ja ? "範囲外" : "Not on our route"}>
            {extra.map((x) => (
              <option key={x.value} value={x.value}>
                {x.label}
              </option>
            ))}
          </optgroup>
        )}
      </select>
      {choices.length > 0 && (
        <select id={id} aria-label={ja ? "宿・預け場所" : "Inn or drop point"} value={findPoint(value) ? value : ""} onChange={(e) => onChange(e.target.value)}>
          <option value="">{ja ? "—宿・預け場所を選ぶ—" : "— your inn or drop point —"}</option>
          {choices.map((p) => (
            <option key={p.en} value={p[lang]}>
              {p[lang]}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

/** Booking box at the top of the Luggage Bus page (modelled on Correos Paq Mochila):
 *  pick date, stops and bags → price appears at once → pay and confirm,
 *  2026-11-25 23:20 社長「WhatsApp要らねえだろ」：予約画面にWhatsAppの申し込みは出さない。
 *  ボタンは最初からStripeの支払いボタン1つ(入力が足りないあいだは押せず、足りない項目を一言で出す)。 */
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
  const [agree, setAgree] = useState(false);
  const [paying, setPaying] = useState(false);
  // The server said "not instant after all" (capacity, closed day, etc.): we can't take it on that day.
  const [forceWa, setForceWa] = useState(false);
  const boxRef = useRef<HTMLElement>(null);
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setV({ ...v, [k]: e.target.value });
  const setStop = (k: "from" | "to") => (val: string) => setV((cur) => ({ ...cur, [k]: val }));

  useEffect(() => setForceWa(false), [v.date, v.from, v.to, v.bags]);

  // Hand-over from the range checker: fill the stops and bags, then bring the box into view.
  useEffect(() => {
    if (!preset) return;
    setV((cur) => ({ ...cur, from: preset.from, to: preset.to, bags: preset.bags, date: preset.date || cur.date }));
    boxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [preset]);

  const fp = findPoint(v.from);
  const tp = findPoint(v.to);
  const bags = Number(v.bags);
  const est = estimate(fp?.pos ?? null, tp?.pos ?? null, bags);
  const nextDay = isNextDay(fp?.pos ?? null, tp?.pos ?? null);
  const q = quoteLb(
    {
      name: v.name,
      date: v.date,
      from: v.from,
      to: v.to,
      bags,
      fromBooking: v.fromBooking,
      toBooking: v.toBooking,
      fromPlace: v.fromInn,
      toPlace: v.toInn,
    },
    lang,
  );
  // 2026-11-25: no env switch any more — every instant quote is paid and confirmed on the spot.
  const instant = q.kind === "instant" && !forceWa;
  // What still stops the pay button, in one short line.
  const missing: string | null = instant
    ? agree
      ? null
      : ja ? "上の同意にチェックを入れてください。" : "Please tick the box above to agree."
    : !v.date
      ? ja ? "日付を選んでください。" : "Please choose a date."
      : !fp
        ? ja ? "預ける場所を選んでください。" : "Please choose where you leave your bags."
        : !tp
          ? ja ? "受け取る場所を選んでください。" : "Please choose where you collect them."
          : q.kind === "error"
            ? q.message
            : forceWa
              ? null
              : ja ? "この日は受け付けできません。別の日を選んでください。" : "We can't take this booking on that day. Please choose another date.";
  const fromInnAsk = !!fp && !fp.place && fp.pos !== null;
  const toInnAsk = !!tp && !tp.place && tp.pos !== null;
  const fromBookingAsk = needsInnBooking(v.from);
  const toBookingAsk = needsInnBooking(v.to);

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
          fromPlace: v.fromInn,
          toPlace: v.toInn,
          agree,
        }),
      });
      const j = await res.json().catch(() => ({}));
      if (j.url) {
        window.location.href = j.url;
        return;
      }
      if (j.fallback || j.approval) setForceWa(true);
      setErr(j.error ?? (ja ? "この日は受け付けできません。別の日を選んでください。" : "We can't take this booking on that day. Please choose another date."));
    } catch {
      setErr(ja ? "通信できませんでした。もう一度お試しください。" : "Connection failed. Please try again.");
    }
    setPaying(false);
  };

  return (
    <section className="lb-bookbox" id="book-box" aria-label={ja ? "予約" : "Booking"} ref={boxRef}>
      <h2>{ja ? "日付と駅を選ぶと、金額がすぐ出ます。" : "Pick a date and your stops. See the price at once."}</h2>
      <div className="lb-bookbox-grid">
        <label>
          <span>{ja ? "日付(荷物を置く日)" : "Date (the day you leave your bags)"}</span>
          <input id="lbb-date" type="date" min={lbDateMin()} max={LB_DATE_MAX} value={v.date} onChange={set("date")} />
        </label>
        <label>
          <span>{ja ? "個数" : "Bags"}</span>
          <select id="lbb-bags" value={v.bags} onChange={set("bags")}>
            {["1", "2", "3", "4", "5"].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="wide">
          <span>{ja ? "預ける場所(最寄りのJR駅 → 宿・預け場所)" : "Drop off at (nearest JR station → inn or drop point)"}</span>
          <LbStopPicker id="lbb-from" lang={lang} value={v.from} onChange={setStop("from")} />
        </label>
        {fromInnAsk && (
          <label>
            <span>{ja ? "出発の宿・場所の名前" : "Name of the inn or place you leave from"}</span>
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
          <span>{ja ? "受け取る場所(最寄りのJR駅 → 宿・預け場所)" : "Collect at (nearest JR station → inn or drop point)"}</span>
          <LbStopPicker id="lbb-to" lang={lang} value={v.to} onChange={setStop("to")} />
        </label>
        {toInnAsk && (
          <label>
            <span>{ja ? "届け先の宿・場所の名前" : "Name of the inn or place your bags go to"}</span>
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
        {est ? <PriceTag total={est.total} list={est.list} lang={lang} /> : <strong>—</strong>}
        <span>
          {est
            ? est.parts.map((p) => p[lang]).join(" + ")
            : ja ? "最寄りのJR駅・宿と個数を選ぶと出ます" : "Choose your stations, inns and bags to see the price"}
        </span>
        <small>
          {ja
            ? `朝${DROP_BY}までに置けば、その日の${ARRIVE_BY}までに届きます。`
            : `Leave them by ${DROP_BY}, and they arrive by ${ARRIVE_BY} the same day.`}
        </small>
        {holdNotes(fp, tp, lang).map((t) => (
          <small key={t} className="lb-nextday">
            ※{t}
          </small>
        ))}
        {nextDay && (
          <small className="lb-nextday">
            {ja
              ? "※南木曽より北から田立・坂下・中津川へは、翌日のお届けです(予約は受け付けます)。"
              : "Note: from north of Nagiso to Tadachi, Sakashita or Nakatsugawa, bags arrive the next day (we still take the booking)."}
          </small>
        )}
      </div>

      {err && <p className="book-error" role="alert">{err}</p>}

      <label className="lb-agree">
          <input id="lbb-agree" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />{" "}
          <span>
            {ja ? "キャンセルポリシーと補償に同意します:" : "I agree to the cancellation policy and compensation terms: "}
            {CANCEL_POLICY[lang]}{" "}
            {ja
              ? `補償は荷物1個あたり最大${yen(LB_COMPENSATION_YEN)}、お一人あたり最大${yen(LB_COMPENSATION_PERSON_YEN)}。`
              : `Compensation up to ${yen(LB_COMPENSATION_YEN)} per bag and ${yen(LB_COMPENSATION_PERSON_YEN)} per person.`}
          </span>
        </label>

      <div className="lb-bookbox-actions">
        <button type="button" className="stay-cta book-pay" disabled={paying || !agree || !instant} onClick={pay}>
          <CreditCard size={16} />{" "}
          {paying
            ? ja ? "決済画面を開いています…" : "Opening payment…"
            : instant && est
              ? ja ? `${yen(est.total)}をカードで支払って予約を確定` : `Pay ${yen(est.total)} by card and confirm`
              : ja ? "カードで支払って予約を確定" : "Pay by card and confirm"}
        </button>
      </div>
      {missing && <p className="book-hint">{missing}</p>}
      <p className="lb-bookbox-trust">
        <ShieldCheck size={14} />{" "}
        {ja
          ? `前日23時まで受付 ・ ${CANCEL_SHORT.ja} ・ 補償 1個${yen(LB_COMPENSATION_YEN)}/1人${yen(LB_COMPENSATION_PERSON_YEN)}まで`
          : `Book by 23:00 the day before · ${CANCEL_SHORT.en} · Covered up to ${yen(LB_COMPENSATION_YEN)} per bag / ${yen(LB_COMPENSATION_PERSON_YEN)} per person`}
      </p>
    </section>
  );
}
