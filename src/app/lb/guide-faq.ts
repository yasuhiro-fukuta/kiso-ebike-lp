import { fare, yen, BAG_FEE, ZONE_FEE } from "../luggage-bus";

type Lang = "en" | "ja";

/** FAQ for the Nagiso → Kiso-Fukushima guide (page + FAQPage JSON-LD).
 *  Prices come from luggage-bus.ts so they never drift from the fare table. */
export const GUIDE_FAQ: Record<Lang, { q: string; a: string }[]> = {
  en: [
    {
      q: "Can I send my bags from Nagiso to Kiso-Fukushima on the same day?",
      a: "Yes. Leave your bags at your inn's front desk or entrance by 9:00, and they'll be delivered to your next destination in Kiso-Fukushima by 15:00 the same day.",
    },
    {
      q: "How much does it cost to send one bag from Nagiso to Kiso-Fukushima?",
      a: `${yen(fare(2, 1))}: two fare zones (${yen(ZONE_FEE)} each) plus ${yen(BAG_FEE)} for the bag. Each extra bag is ${yen(BAG_FEE)}.`,
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
      a: "送れます。朝9時までに宿のフロントまたは玄関に荷物を置いておけば、その日の15時までに木曽福島の次の目的地に配達されます。",
    },
    {
      q: "南木曽から木曽福島まで、荷物1個はいくらですか?",
      a: `${yen(fare(2, 1))}です。配送料(区域2つ×${yen(ZONE_FEE)})と荷物1個${yen(BAG_FEE)}の合計です。2個目からは1個につき${yen(BAG_FEE)}です。`,
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

