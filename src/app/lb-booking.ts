/** Luggage Bus: instant booking rules, shared by the range checker, the
 *  booking box (browser) and the checkout API (server). No "use client" here on purpose.
 *
 *  A request is confirmed on payment, with no manual approval, when:
 *  - both ends are stops on our route: a listed place, or "another inn/place"
 *    at a stop with its name written (2026-11-24 社長: 12地点はすべて即時確定),
 *  - the date passes the usual checks (deadline, Mondays, season, closures),
 *    and, for next-day delivery, the delivery day does too,
 *  - 1–5 bags (the fare table has prices for 1–5; 6–8 bags go to WhatsApp),
 *  - the pair of stops is in the fare table (same town: not served),
 *  - for an inn, the name its reservation is under (we tell both inns ahead).
 *  Anything else goes to WhatsApp for approval, as before. */
import {
  findPoint,
  estimate,
  dateProblem,
  byArrangement,
  isNextDay,
  nextIso,
  sameTown,
  MAX_FARE_BAGS,
  type Place,
} from "./luggage-bus";
import { CLOSED_DAYS } from "./closed-days";

type Lang = "en" | "ja";

export const RUN_CAPACITY = 20;

/** Today, tomorrow and whether it's past 23:00 — in Japan time. */
export const jstNow = () => {
  const jst = new Date(Date.now() + 9 * 3600 * 1000);
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: iso(jst),
    tomorrow: iso(new Date(jst.getTime() + 24 * 3600 * 1000)),
    afterDeadline: jst.getUTCHours() >= 23,
  };
};

export type LbInput = {
  name: string;
  date: string;
  from: string;
  to: string;
  bags: number;
  /** Name the reservation at the departure inn is under (inns only). */
  fromBooking?: string;
  /** Name the reservation at the destination inn is under (inns only). */
  toBooking?: string;
  /** Name of the inn/place, when "another inn/place" is chosen. */
  fromPlace?: string;
  toPlace?: string;
};

export type LbQuote =
  | {
      kind: "instant";
      total: number;
      /** Regular (list) price; total is the opening-campaign price we charge. */
      list: number;
      parts: { en: string; ja: string; yen: number }[];
      from: { label: string; place: Place | null; pos: number };
      to: { label: string; place: Place | null; pos: number };
      run: "north" | "south";
      /** Delivered the day after drop-off (north of Nagiso → south of Nagiso). */
      nextDay: boolean;
    }
  | { kind: "approval" }
  | { kind: "error"; message: string };

/** Is this end an inn, so we need the name its reservation is under? */
export const needsInnBooking = (label: string) => {
  const p = findPoint(label);
  return !!p && (!p.place || !!p.place.guestsOnly) && p.pos !== null;
};

type Now = { today: string; tomorrow: string; afterDeadline: boolean };

/** Decide whether a request can be paid and confirmed right away. */
export function quoteLb(input: LbInput, lang: Lang, now: Now = jstNow(), closed: Set<string> = CLOSED_DAYS): LbQuote {
  const ja = lang === "ja";
  const f = findPoint(input.from);
  const t = findPoint(input.to);
  if (!f || !t || f.pos == null || t.pos == null) return { kind: "approval" };
  if (byArrangement(f.pos) || byArrangement(t.pos)) return { kind: "approval" };
  if (!input.name.trim()) return { kind: "error", message: ja ? "氏名を入れてください。" : "Please enter your name." };
  if (!Number.isInteger(input.bags) || input.bags < 1 || input.bags > 8)
    return { kind: "error", message: ja ? "個数を選んでください。" : "Please choose the number of bags." };
  // The fare table has no price for more bags: we arrange it on WhatsApp.
  if (input.bags > MAX_FARE_BAGS) return { kind: "approval" };
  if (sameTown(f.pos, t.pos))
    return {
      kind: "error",
      message: ja ? "預ける駅と受け取る駅が同じ町です。この区間は承っていません。" : "Drop-off and pick-up are in the same town. We don't serve this trip.",
    };
  const problem = dateProblem(input.date, [f.place, t.place], lang, closed, now.today, now.tomorrow, now.afterDeadline);
  if (problem) return { kind: "error", message: problem };
  const nextDay = isNextDay(f.pos, t.pos);
  if (nextDay) {
    // The delivery day must be a running day too; if not, we sort it out on WhatsApp.
    const d2 = nextIso(input.date);
    if (dateProblem(d2, [t.place], lang, closed, now.today, now.tomorrow, false)) return { kind: "approval" };
  }
  const e = estimate(f.pos, t.pos, input.bags);
  // No price in the table: never charge a guessed amount.
  if (!e) return { kind: "approval" };
  if (!f.place && !(input.fromPlace ?? "").trim())
    return {
      kind: "error",
      message: ja ? "出発の宿・場所の名前を入れてください。" : "Please enter the name of the inn or place you leave your bags at.",
    };
  if (!t.place && !(input.toPlace ?? "").trim())
    return {
      kind: "error",
      message: ja ? "届け先の宿・場所の名前を入れてください。" : "Please enter the name of the inn or place your bags go to.",
    };
  if ((!f.place || f.place.guestsOnly) && !(input.fromBooking ?? "").trim())
    return {
      kind: "error",
      message: ja ? "出発の宿の予約名を入れてください(宿にこちらから連絡します)。" : "Please enter the name your booking at the departure inn is under (we let the inn know).",
    };
  if ((!t.place || t.place.guestsOnly) && !(input.toBooking ?? "").trim())
    return {
      kind: "error",
      message: ja ? "届け先の宿の予約名を入れてください(宿にこちらから連絡します)。" : "Please enter the name your booking at the destination inn is under (we let the inn know).",
    };
  return {
    kind: "instant",
    total: e.total,
    list: e.list,
    parts: e.parts,
    from: { label: f[lang], place: f.place, pos: f.pos },
    to: { label: t[lang], place: t.place, pos: t.pos },
    run: t.pos > f.pos ? "north" : "south",
    nextDay,
  };
}
