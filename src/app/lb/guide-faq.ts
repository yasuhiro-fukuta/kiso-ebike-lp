import { yen, estimate, posOf, unitPrice, DROP_BY, ARRIVE_BY } from "../luggage-bus";

type Lang = "en" | "ja";

/** FAQ for the Nagiso → Kiso-Fukushima guide (page + FAQPage JSON-LD).
 *  Prices come from luggage-bus.ts so they never drift from the fare table. */
const N = posOf("nagiso");
const K = posOf("kisofukushima");
const one = estimate(N, K, 1)?.total ?? 0;
const unit = unitPrice(N, K) ?? 0;

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
      a: `${yen(one)}: the unit price ${yen(unit)} × (1 bag + 1). Each extra bag adds ${yen(unit)}.`,
    },
    {
      q: "When do I need to book?",
      a: "By 23:00 the day before. Your booking is confirmed as soon as you pay.",
    },
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
      a: `${yen(one)}です。単価${yen(unit)}×(1個+1)で計算します。荷物が1個増えるごとに${yen(unit)}です。`,
    },
    {
      q: "いつまでに申し込めばいいですか?",
      a: "前日23時までです。支払った時点で予約確定です。",
    },
    {
      q: "ラゲッジバスに人も乗れますか?",
      a: "乗れません。運ぶのは荷物だけです。ご自身は徒歩・自転車、またはJR中央線や路線バスで移動してください。",
    },
  ],
};
