/** Luggage Bus: instant booking rules, shared by the booking form (browser)
 *  and the checkout API (server). No "use client" here on purpose.
 *
 *  A request is confirmed on payment, with no manual approval, when:
 *  - both ends are listed stations or partner inns (not "another place"),
 *  - the date passes the usual checks (deadline, Mondays, winter, closures),
 *  - 1–8 bags.
 *  Anything else goes to WhatsApp for approval, as before. */
import { FORM_POINTS, estimate, dateProblem, type Place } from "./luggage-bus";
import { CLOSED_DAYS } from "./closed-days";

type Lang = "en" | "ja";

export const RUN_CAPACITY = 20;
const NAGISO_POS = 1;

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

const point = (label: string) => FORM_POINTS.find((p) => p.en === label || p.ja === label) ?? null;

export type LbInput = { name: string; date: string; from: string; to: string; bags: number };

export type LbQuote =
  | {
      kind: "instant";
      total: number;
      parts: { en: string; ja: string; yen: number }[];
      from: { label: string; place: Place; pos: number };
      to: { label: string; place: Place; pos: number };
      run: "north" | "south";
    }
  | { kind: "approval" }
  | { kind: "error"; message: string };

/** Decide whether a request can be paid and confirmed right away. */
export function quoteLb(input: LbInput, lang: Lang): LbQuote {
  const ja = lang === "ja";
  const f = point(input.from);
  const t = point(input.to);
  if (!f?.place || !t?.place || f.pos == null || t.pos == null) return { kind: "approval" };
  if (!input.name.trim()) return { kind: "error", message: ja ? "氏名を入れてください。" : "Please enter your name." };
  if (!Number.isInteger(input.bags) || input.bags < 1 || input.bags > 8)
    return { kind: "error", message: ja ? "個数を選んでください。" : "Please choose the number of bags." };
  // The daily loop runs south (Nakatsugawa) first, then north (Narai), so bags
  // picked up north of Nagiso can't reach Tadachi / Sakashita / Nakatsugawa the same day.
  if (f.pos > NAGISO_POS && t.pos < NAGISO_POS)
    return {
      kind: "error",
      message: ja
        ? "南木曽より北から田立・坂下・中津川へは、当日配送できない区間です。"
        : "We can't deliver from north of Nagiso to Tadachi, Sakashita or Nakatsugawa on the same day.",
    };
  const n = jstNow();
  const problem = dateProblem(input.date, [f.place, t.place], lang, CLOSED_DAYS, n.today, n.tomorrow, n.afterDeadline);
  if (problem) return { kind: "error", message: problem };
  const e = estimate(f.pos, t.pos, input.bags);
  if (!e)
    return {
      kind: "error",
      message: ja ? "預ける駅と受け取る駅が同じ町です。別の駅を選んでください。" : "Drop-off and pick-up are in the same town. Please choose another stop.",
    };
  return {
    kind: "instant",
    total: e.total,
    parts: e.parts,
    from: { label: f[lang], place: f.place, pos: f.pos },
    to: { label: t[lang], place: t.place, pos: t.pos },
    run: t.pos > f.pos ? "north" : "south",
  };
}
