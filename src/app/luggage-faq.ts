/** Luggage Bus FAQ: one source for the visible FAQ on both language pages
 *  and the FAQPage structured data (AEO). Keep answers in plain text so the
 *  JSON-LD matches what visitors read. Prices follow luggage-bus.ts. */
import { BAG_FEE, ZONE_FEE, yen } from "./luggage-bus";

type T = { en: string; ja: string };

export const LUGGAGE_FAQ: { q: T; a: T }[] = [
  {
    q: { en: "How much does the Luggage Bus cost?", ja: "料金はいくらですか?" },
    a: {
      en: `${yen(ZONE_FEE)} for each zone your bags pass through, plus ${yen(BAG_FEE)} per bag. Nagiso to Kiso-Fukushima with one bag is ${yen(ZONE_FEE * 2 + BAG_FEE)}.`,
      ja: `荷物が通る区域ごとに${yen(ZONE_FEE)}、加えて荷物1個につき${yen(BAG_FEE)}です。南木曽から木曽福島まで荷物1個なら${yen(ZONE_FEE * 2 + BAG_FEE)}です。`,
    },
  },
  {
    q: { en: "When does it run?", ja: "いつ運行していますか?" },
    a: {
      en: "One round trip a day, every day except Monday. Northbound leaves Nagiso at 10:00 and reaches Kiso-Fukushima at 11:30; southbound leaves Kiso-Fukushima at 12:00 and reaches Nagiso at 13:30. It is closed from December to March and restarts around 20 March.",
      ja: "月曜以外の毎日、1日1往復です。北行きは南木曽10:00発・木曽福島11:30着、南行きは木曽福島12:00発・南木曽13:30着です。12〜3月は運休で、3月20日ごろ再開します。",
    },
  },
  {
    q: { en: "What can't you carry, and are bags insured?", ja: "運べない物や補償は?" },
    a: {
      en: "We don't carry cash, passports, valuables, fragile items, medicines or perishable food. Each bag is covered up to ¥30,000 by cargo insurance.",
      ja: "現金、パスポート、貴重品、壊れ物、医薬品、生ものは運べません。荷物は1個3万円まで貨物保険で補償します。",
    },
  },
  {
    q: { en: "Can I ride the Luggage Bus?", ja: "ラゲッジバスに乗れますか?" },
    a: {
      en: "No. It carries luggage only — no passengers, not even for a short hop. Between the stops, JR Chuo Line trains and local buses run along the same valley.",
      ja: "乗れません。運ぶのは荷物だけで、短い区間でも人は乗せられません。停留所の間は、JR中央線や路線バスが同じ谷を走っています。",
    },
  },
  {
    q: { en: "Can I just turn up with my bags?", ja: "予約なしで持って行ってもいいですか?" },
    a: {
      en: "No — please book first. We confirm each request on WhatsApp so we know there's room on the run, and the booking is set once you've paid through the link we send.",
      ja: "予約をお願いします。便の空きを確かめるため、WhatsAppで1件ずつ承認しています。お送りするリンクで支払いが済んだら予約確定です。",
    },
  },
  {
    q: { en: "What if I arrive before my bags?", ja: "荷物より先に着いてしまったら?" },
    a: {
      en: "Check the arrival times above. If you get there first, have a coffee or look around while you wait — your bags will be there once the run is through.",
      ja: "上の「荷物が届く時間」をご覧ください。先に着いたら、お茶をしたり町を歩いたりしてお待ちください。便が着いたら荷物を受け取れます。",
    },
  },
];
