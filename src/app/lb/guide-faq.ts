import { yen, estimate, posOf, DROP_BY, ARRIVE_BY, CANCEL_POLICY, COMPENSATION_TEXT } from "../luggage-bus";

type Lang = "en" | "ja";

/** FAQ for the Nagiso → Kiso-Fukushima guide (page + FAQPage JSON-LD).
 *  Prices are looked up in the fare table (luggage-bus.ts), never typed.
 *  Nagiso = the Nagiso Station stop (Cafe Izumiya). */
const N = posOf("nagiso-st");
const K = posOf("kisofukushima");
const one = estimate(N, K, 1)?.total ?? 0;
const two = estimate(N, K, 2)?.total ?? 0;

/** Lowest price for one bag on this section (for the page description). */
export const GUIDE_FROM_PRICE = one;

export const GUIDE_FAQ: Record<Lang, { q: string; a: string }[]> = {
  en: [
    {
      q: "Can I send my bags from Nagiso to Kiso-Fukushima on the same day?",
      a: `Yes. Leave your bags by ${DROP_BY} in the morning and they reach Kiso-Fukushima by ${ARRIVE_BY} the same day.`,
    },
    {
      q: "How much does it cost to send one bag from Nagiso to Kiso-Fukushima?",
      a: `${yen(one)} for one bag, ${yen(two)} for two.`,
    },
    {
      q: "When do I need to book?",
      a: "By 23:00 the day before. Your booking is confirmed as soon as you pay.",
    },
    { q: "Can I cancel?", a: CANCEL_POLICY.en },
    { q: "What if a bag is lost or damaged?", a: COMPENSATION_TEXT.en },
    {
      q: "Can I ride the Luggage Bus too?",
      a: "No. It carries bags only. Walk, cycle, or take the JR Chuo Line or a local bus along the same valley.",
    },
  ],
  ja: [
    {
      q: "南木曽から木曽福島へ、当日中に荷物を送れますか?",
      a: `送れます。朝${DROP_BY}までに置いていただければ、その日の${ARRIVE_BY}までに木曽福島に届きます。`,
    },
    {
      q: "南木曽から木曽福島まで、荷物1個はいくらですか?",
      a: `1個${yen(one)}、2個${yen(two)}です。`,
    },
    {
      q: "いつまでに申し込めばいいですか?",
      a: "前日23時までです。支払った時点で予約確定です。",
    },
    { q: "キャンセルはできますか?", a: CANCEL_POLICY.ja },
    { q: "荷物がなくなったり壊れたりしたら?", a: COMPENSATION_TEXT.ja },
    {
      q: "ラゲッジバスに人も乗れますか?",
      a: "乗れません。運ぶのは荷物だけです。ご自身は徒歩・自転車、またはJR中央線や路線バスで移動してください。",
    },
  ],
};
