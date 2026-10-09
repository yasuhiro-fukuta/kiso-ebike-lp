/** ============================================================
 *  ラゲッジバス(中津川〜木曽福島の定時便)の共通データ
 *  英語ページ(/luggage-shuttle)と日本語ページ(/ja/luggage-shuttle)で使う。
 *  ⚠️ 料金はまだ仮。決まったらここを直せば両方のページに反映される。
 *  ============================================================ */

export type Stop = {
  en: string;
  ja: string;
  /** Counter at the stop (null = not decided yet). */
  counter: { en: string; ja: string } | null;
  map: string | null;
  /** Northbound time at this stop. */
  north: string;
  /** Southbound time at this stop (null = en route, no fixed time yet). */
  south: string | null;
};

/** Stops in northbound order. */
export const STOPS: Stop[] = [
  {
    en: "Nakatsugawa",
    ja: "中津川",
    counter: null,
    map: null,
    north: "10:00",
    south: "15:00",
  },
  {
    en: "Nagiso",
    ja: "南木曽",
    counter: { en: "Izumiya Cafe, in front of Nagiso Station", ja: "南木曽駅前 イズミヤカフェ" },
    map: "https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6",
    north: "11:00",
    south: null,
  },
  {
    en: "Nojiri",
    ja: "野尻",
    counter: { en: "Coffee Katana, in front of Nojiri Station", ja: "野尻駅前 珈琲刀" },
    map: "https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA",
    north: "12:00",
    south: null,
  },
  {
    en: "Kiso-Fukushima",
    ja: "木曽福島",
    counter: null,
    map: null,
    north: "13:00",
    south: "13:00",
  },
];

/** Provisional fares, per bag, by the number of sections travelled. */
export const FARES = [
  { sections: 1, yen: 1500, en: "1 section", ja: "1区間", exEn: "e.g. Nagiso → Nojiri", exJa: "例: 南木曽 → 野尻" },
  { sections: 2, yen: 2500, en: "2 sections", ja: "2区間", exEn: "e.g. Nakatsugawa → Nojiri", exJa: "例: 中津川 → 野尻" },
  { sections: 3, yen: 3000, en: "End to end", ja: "通し(3区間)", exEn: "Nakatsugawa ⇄ Kiso-Fukushima", exJa: "中津川 ⇄ 木曽福島" },
];

/** Provisional surcharge for collection / delivery at the inn's door. */
export const DOOR_FEE = 500;

export const yen = (n: number) => `¥${n.toLocaleString("en-US")}`;
