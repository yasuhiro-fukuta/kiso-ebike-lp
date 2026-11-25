"use client";

import { PriceTag } from "./price-tag";
import { useState } from "react";
import { CheckCircle2, XCircle, MapPin, Clock, Wallet, ArrowRight, Search, Plus, Trash2 } from "lucide-react";
import {
  OUT_OF_RANGE, HIKE_TIP,
  findPoint,
  estimate,
  isNextDay,
  nextIso,
  sameTown as isSameTown,
  areaAt,
  MAX_FARE_BAGS,
  dropPlaceText,
  yen,
  ARRIVE_BY,
  DROP_BY,
} from "../luggage-bus";
import { searchStops, type SearchEntry } from "../lb-names";
import { LB_TRIP_PRESETS, presetPoint, type TripPreset } from "../lb-presets";
import { LbBookBox, LbStopPicker, lbDateMin, LB_DATE_MAX, type LbPreset } from "./book-box";
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

/** One end of a trip: pick the nearest JR station, then the inn or drop point there.
 *  Typing an inn or station name is a shortcut (no Google Maps — 2026-11-24 社長). */
function EndPicker({
  id,
  lang,
  label,
  value,
  onChange,
}: {
  id: string;
  lang: Lang;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const ja = lang === "ja";
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const hits: SearchEntry[] = open ? searchStops(q) : [];

  const pick = (e: SearchEntry) => {
    onChange(e.point ? e.point[lang] : `${OUT}${e.out}`);
    setQ(e.label[lang]);
    setOpen(false);
  };

  const fp = findPoint(value);
  const area = fp ? areaAt(fp.pos) : null;

  return (
    <div className="lb-end">
      <span className="lb-end-label">{label}</span>
      <LbStopPicker
        id={id}
        lang={lang}
        value={value}
        onChange={onChange}
        extra={OUT_OF_RANGE.map((o) => ({ value: `${OUT}${o.key}`, label: o.name[lang] }))}
      />
      <div className="lb-finder">
        <Search size={16} aria-hidden />
        <input
          id={`${id}-name`}
          type="text"
          inputMode="search"
          autoComplete="off"
          role="combobox"
          aria-expanded={hits.length > 0}
          aria-controls={`${id}-list`}
          placeholder={ja ? "または宿・駅の名前で探す" : "or search by inn or station name"}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            e.preventDefault();
            if (hits[0]) pick(hits[0]);
          }}
        />
      </div>
      {hits.length > 0 && (
        <ul className="lb-suggest" id={`${id}-list`} role="listbox">
          {hits.map((h) => (
            <li key={`${h.label.en}|${h.point?.en ?? h.out}`} role="option" aria-selected={false}>
              <button type="button" onClick={() => pick(h)}>
                <b>{h.label[lang]}</b>
                <small>
                  {h.point
                    ? ja
                      ? `${areaAt(h.point.pos)?.name.ja ?? ""}として見積もり`
                      : `priced as ${areaAt(h.point.pos)?.name.en ?? ""}`
                    : ja
                      ? "範囲外"
                      : "not on our route"}
                </small>
              </button>
            </li>
          ))}
        </ul>
      )}
      {open && q.trim().length >= 2 && hits.length === 0 && (
        <p className="book-hint">
          {ja
            ? "見つかりません。宿の最寄りのJR駅を上で選び、「その他の宿」を選んでください。"
            : "No match. Choose your inn's nearest JR station above, then \"another inn\"."}
        </p>
      )}
      {area && (
        <p className="lb-judge" role="status">
          <CheckCircle2 size={15} />{" "}
          {ja ? (
            <>
              <b>{area.name.ja}</b>として見積もります。
            </>
          ) : (
            <>
              Priced as <b>{area.name.en}</b>.
            </>
          )}
        </p>
      )}
    </div>
  );
}

type Leg = { from: string; to: string };

/** Result of one leg: range, where to leave the bags, when they arrive, the price. */
function LegResult({
  lang,
  leg,
  bags,
  date,
  onBook,
}: {
  lang: Lang;
  leg: Leg;
  bags: string;
  date: string;
  onBook: (p: Omit<LbPreset, "n">) => void;
}) {
  const ja = lang === "ja";
  const { base } = useLb();
  const fp = findPoint(leg.from);
  const tp = findPoint(leg.to);
  const outside = [leg.from, leg.to]
    .filter((x) => x.startsWith(OUT))
    .map((x) => OUT_OF_RANGE.find((o) => `${OUT}${o.key}` === x))
    .filter((o): o is (typeof OUT_OF_RANGE)[number] => !!o);
  const both = !!fp && !!tp;
  const sameTown = both && isSameTown(fp!.pos, tp!.pos);
  const est = both ? estimate(fp!.pos, tp!.pos, Number(bags)) : null;
  const manyBags = Number(bags) > MAX_FARE_BAGS;
  const nextDay = both && isNextDay(fp!.pos, tp!.pos);
  const otherHref = `${base}${ja ? "/ja" : ""}/other-services`;

  if (outside.length > 0)
    return (
      <div className="lb-check-result out" role="status">
        <p>
          <XCircle size={18} />{" "}
          <strong>
            {ja
              ? `${outside.map((o) => o.name.ja).join("・")}は範囲外です。`
              : `${outside.map((o) => o.name.en).join(" and ")} ${outside.length > 1 ? "are" : "is"} not on our route.`}
          </strong>
        </p>
        <p>{HIKE_TIP.hike[ja ? "ja" : "en"]}</p>
        <p>
          {HIKE_TIP.inn[ja ? "ja" : "en"]}{" "}
          <a href={otherHref}>
            {ja ? "馬籠・妻籠に対応している業者を見る" : "See local services that cover Magome and Tsumago"} <ArrowRight size={14} />
          </a>
        </p>
      </div>
    );
  if (!both) return null;
  return (
    <div className="lb-check-result" role="status">
      {sameTown ? (
        <p>
          <XCircle size={18} />{" "}
          <strong>
            {ja ? "同じ町の中の区間です。この区間は承っていません。" : "Both ends are in the same town. We don't serve this trip."}
          </strong>
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
              ? <><PriceTag total={est.total} list={est.list} lang={lang} /> ({est.parts.map((p) => p[lang]).join(" + ")})</>
              : manyBags
                ? ja ? `${MAX_FARE_BAGS + 1}個以上はWhatsAppでお問い合わせください。` : `For ${MAX_FARE_BAGS + 1} or more bags, please ask us on WhatsApp.`
                : "—"}
          </p>
          <div className="lb-bookbox-actions">
            <button type="button" className="stay-cta" onClick={() => onBook({ from: leg.from, to: leg.to, bags, date })}>
              {ja ? "このまま予約する" : "Book this"} <ArrowRight size={15} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const addDays = (iso: string, n: number) => {
  let d = iso;
  for (let i = 0; i < n; i++) d = nextIso(d);
  return d;
};

export function LbRangeChecker({ lang, onBook }: { lang: Lang; onBook: (p: Omit<LbPreset, "n">) => void }) {
  const ja = lang === "ja";
  const [legs, setLegs] = useState<Leg[]>([{ from: "", to: "" }]);
  const [date, setDate] = useState("");
  const [bags, setBags] = useState("1");
  const [presetId, setPresetId] = useState<string | null>(null);
  // Re-mount the pickers when a preset is applied, so their typed text resets.
  const [gen, setGen] = useState(0);

  const applyPreset = (p: TripPreset) => {
    const sorted = [...p.legs].sort((a, b) => a.day - b.day);
    setLegs(sorted.map((l) => ({ from: presetPoint(l.from)[lang], to: presetPoint(l.to)[lang] })));
    setBags("1");
    setPresetId(p.id);
    setGen((g) => g + 1);
  };
  const setLeg = (i: number, k: keyof Leg) => (v: string) =>
    setLegs((cur) => cur.map((l, j) => (j === i ? { ...l, [k]: v } : j === i + 1 && k === "to" && !l.from ? { ...l, from: v } : l)));
  const addLeg = () => setLegs((cur) => [...cur, { from: cur[cur.length - 1]?.to ?? "", to: "" }]);
  const removeLeg = (i: number) => setLegs((cur) => (cur.length > 1 ? cur.filter((_, j) => j !== i) : cur));

  const totals = legs.map((l) => {
    const f = findPoint(l.from);
    const t = findPoint(l.to);
    return f && t ? estimate(f.pos, t.pos, Number(bags))?.total ?? null : null;
  });
  const allPriced = legs.length > 1 && totals.every((x) => x !== null);

  return (
    <section className="lb-bookbox lb-checker" id="range-check" aria-label={ja ? "範囲チェッカー" : "Range checker"}>
      <h2>{ja ? "あなたの宿や駅は範囲内? すぐ分かります。" : "Is your inn or station on our route? Check in seconds."}</h2>

      <div className="lb-presets" role="group" aria-label={ja ? "よくある行程" : "Common trips"}>
        <p className="lb-presets-title">{ja ? "よくある行程から選んで、直すだけ:" : "Start from a common trip, then adjust:"}</p>
        <div className="lb-presets-row">
          {LB_TRIP_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`lb-preset${presetId === p.id ? " on" : ""}`}
              aria-pressed={presetId === p.id}
              onClick={() => applyPreset(p)}
            >
              <b>{p.title[lang]}</b>
              <small>{p.note[lang]}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="lb-bookbox-grid">
        <label>
          <span>{ja ? (legs.length > 1 ? "1日目の日付" : "日付(荷物を置く日)") : legs.length > 1 ? "Date of day 1" : "Date (the day you leave your bags)"}</span>
          <input id="lbc-date" type="date" min={lbDateMin()} max={LB_DATE_MAX} value={date} onChange={(e) => setDate(e.target.value)} />
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

      {legs.map((leg, i) => {
        const legDate = date ? addDays(date, i) : "";
        return (
          <div className="lb-leg" key={`${gen}-${i}`}>
            {legs.length > 1 && (
              <div className="lb-leg-head">
                <b>
                  {ja ? `${i + 1}日目` : `Day ${i + 1}`}
                  {legDate ? ` · ${legDate}` : ""}
                </b>
                <button type="button" className="lb-leg-remove" onClick={() => removeLeg(i)} aria-label={ja ? "この日を消す" : "Remove this day"}>
                  <Trash2 size={14} /> {ja ? "消す" : "Remove"}
                </button>
              </div>
            )}
            <div className="lb-leg-ends">
              <EndPicker
                id={`lbc-from-${i}`}
                lang={lang}
                label={ja ? "出発(今夜の宿 または 乗る駅)" : "From (tonight's inn, or the station you leave from)"}
                value={leg.from}
                onChange={setLeg(i, "from")}
              />
              <EndPicker
                id={`lbc-to-${i}`}
                lang={lang}
                label={ja ? "到着(次の宿 または 降りる駅)" : "To (your next inn, or the station you arrive at)"}
                value={leg.to}
                onChange={setLeg(i, "to")}
              />
            </div>
            <LegResult lang={lang} leg={leg} bags={bags} date={legDate} onBook={onBook} />
          </div>
        );
      })}

      <div className="lb-leg-add">
        <button type="button" className="lb-preset" onClick={addLeg}>
          <Plus size={14} /> {ja ? "次の日の区間を足す" : "Add the next day"}
        </button>
        {allPriced && (
          <p>
            <Wallet size={16} />{" "}
            <b>
              {ja ? `${legs.length}日分の合計:` : `Total for ${legs.length} days: `}
              {yen(totals.reduce<number>((s, x) => s + (x ?? 0), 0))}
            </b>{" "}
            <small>{ja ? "(予約と支払いは1日ずつです)" : "(you book and pay one day at a time)"}</small>
          </p>
        )}
      </div>
    </section>
  );
}
