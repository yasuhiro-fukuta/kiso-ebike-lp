"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, MapPin, Clock, Wallet, ArrowRight } from "lucide-react";
import {
  OUT_OF_RANGE,
  findPoint,
  estimate,
  byArrangement,
  isNextDay,
  dropPlaceText,
  yen,
  ARRIVE_BY,
  DROP_BY,
} from "../luggage-bus";
import { LbBookBox, LbStopOptions, type LbPreset } from "./book-box";
import { useLb } from "./lb-chrome";

type Lang = "en" | "ja";
const OUT = "out:";

/** Range checker (top of the page) + booking box, sharing one list of stops
 *  and one price function. "Book this" hands the choice over to the box. */
export function LbPlanner({ lang }: { lang: Lang }) {
  const [preset, setPreset] = useState<LbPreset | null>(null);
  return (
    <>
      <LbRangeChecker lang={lang} onBook={(p) => setPreset({ ...p, n: Date.now() })} />
      <LbBookBox lang={lang} preset={preset} />
    </>
  );
}

function EndSelect({ id, lang, value, onChange }: { id: string; lang: Lang; value: string; onChange: (v: string) => void }) {
  const ja = lang === "ja";
  return (
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">{ja ? "—宿または駅を選ぶ—" : "— choose your inn or station —"}</option>
      <LbStopOptions lang={lang} />
      <optgroup label={ja ? "範囲外" : "Not on our route"}>
        {OUT_OF_RANGE.map((o) => (
          <option key={o.key} value={`${OUT}${o.key}`}>
            {o.name[lang]}
          </option>
        ))}
      </optgroup>
    </select>
  );
}

export function LbRangeChecker({ lang, onBook }: { lang: Lang; onBook: (p: Omit<LbPreset, "n">) => void }) {
  const ja = lang === "ja";
  const { base } = useLb();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [bags, setBags] = useState("1");

  const fp = findPoint(from);
  const tp = findPoint(to);
  const outside = [from, to].filter((x) => x.startsWith(OUT)).map((x) => OUT_OF_RANGE.find((o) => `${OUT}${o.key}` === x)!);
  const both = !!fp && !!tp;
  const sameTown = both && fp!.pos === tp!.pos;
  const est = both ? estimate(fp!.pos, tp!.pos, Number(bags)) : null;
  const arrange = both && (byArrangement(fp!.pos) || byArrangement(tp!.pos));
  const nextDay = both && isNextDay(fp!.pos, tp!.pos);
  const otherHref = `${base}${ja ? "/ja" : ""}/other-services`;

  return (
    <section className="lb-bookbox lb-checker" id="range-check" aria-label={ja ? "範囲チェッカー" : "Range checker"}>
      <h2>{ja ? "あなたの宿や駅は範囲内? すぐ分かります。" : "Is your inn or station on our route? Check in seconds."}</h2>
      <div className="lb-bookbox-grid">
        <label className="wide">
          <span>{ja ? "出発(今夜の宿 または 乗る駅)" : "From (tonight's inn, or the station you leave from)"}</span>
          <EndSelect id="lbc-from" lang={lang} value={from} onChange={setFrom} />
        </label>
        <label className="wide">
          <span>{ja ? "到着(次の宿 または 降りる駅)" : "To (your next inn, or the station you arrive at)"}</span>
          <EndSelect id="lbc-to" lang={lang} value={to} onChange={setTo} />
        </label>
        <label>
          <span>{ja ? "個数" : "Bags"}</span>
          <select id="lbc-bags" value={bags} onChange={(e) => setBags(e.target.value)}>
            {["1", "2", "3", "4", "5", "6", "7", "8"].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>

      {outside.length > 0 && (
        <div className="lb-check-result out" role="status">
          <p>
            <XCircle size={18} />{" "}
            <strong>
              {ja
                ? `${outside.map((o) => o.name.ja).join("・")}は範囲外です。`
                : `${outside.map((o) => o.name.en).join(" and ")} ${outside.length > 1 ? "are" : "is"} not on our route.`}
            </strong>
          </p>
          <p>
            <a href={otherHref}>
              {ja ? "馬籠・妻籠・蘭に対応している他のサービスを見る" : "See local services that cover Magome, Tsumago and Ran"} <ArrowRight size={14} />
            </a>
          </p>
        </div>
      )}

      {outside.length === 0 && both && (
        <div className="lb-check-result" role="status">
          {sameTown ? (
            <p>
              <CheckCircle2 size={18} />{" "}
              {ja
                ? "どちらも範囲内ですが、同じ町の中です。WhatsAppでご相談ください。"
                : "Both are on our route, but in the same town. Please ask us on WhatsApp."}
            </p>
          ) : (
            <>
              <p>
                <CheckCircle2 size={18} /> <strong>{ja ? "範囲内です。" : "Yes, we cover this trip."}</strong>
              </p>
              <p>
                <MapPin size={16} /> <b>{ja ? "荷物を置く場所:" : "Where to leave your bags: "}</b>
                {dropPlaceText(fp!, lang)}
              </p>
              <p>
                <Clock size={16} /> <b>{ja ? "届く時刻:" : "When they arrive: "}</b>
                {nextDay
                  ? ja ? `翌日の${ARRIVE_BY}までに届きます。` : `By ${ARRIVE_BY} the next day.`
                  : ja
                    ? `朝${DROP_BY}までに置いていただければ、その日の${ARRIVE_BY}までに届きます。`
                    : `Leave them by ${DROP_BY} in the morning, and they arrive by ${ARRIVE_BY} the same day.`}
              </p>
              {nextDay && (
                <p className="lb-nextday">
                  <small>
                    {ja
                      ? "※南木曽より北から田立・坂下・中津川へは、翌日のお届けです(予約は受け付けます)。"
                      : "From north of Nagiso to Tadachi, Sakashita or Nakatsugawa, bags arrive the next day. We still take the booking."}
                  </small>
                </p>
              )}
              <p>
                <Wallet size={16} /> <b>{ja ? "料金:" : "Price: "}</b>
                {est
                  ? `${yen(est.total)} (${est.parts.map((p) => `${p[lang]} ${yen(p.yen)}`).join(" + ")})`
                  : arrange
                    ? ja ? "この地点の料金は要相談です(WhatsAppでお伝えします)。" : "Price for this stop is by arrangement — we'll tell you on WhatsApp."
                    : "—"}
              </p>
              <div className="lb-bookbox-actions">
                <button type="button" className="stay-cta" onClick={() => onBook({ from, to, bags })}>
                  {ja ? "このまま予約する" : "Book this"} <ArrowRight size={15} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
