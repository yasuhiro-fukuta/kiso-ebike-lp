/** ============================================================
 *  ラゲッジバス(中津川〜木曽福島の定時便)の共通データ
 *  英語ページ(/luggage-shuttle)と日本語ページ(/ja/luggage-shuttle)で使う。
 *  料金は「配送料(通る区域ごとに1,500円・1予約ごと)+荷物1個1,500円」(2026-10-10 確定)。
 *  ⚠️ フェーズ1: 受け渡しは各停留所の窓口だけ(宿の玄関には行かない)。
 *     観光案内所との提携が決まったら、その停留所の counter を書き換えて
 *     pending を外す。
 *  ============================================================ */

type T = { en: string; ja: string };

export type Stop = {
  key: string;
  name: T;
  counter: T;
  /** true = partner counter not agreed yet. */
  pending: boolean;
  map: string | null;
};

const INFO_PENDING: T = {
  en: "Station-area tourist information office",
  ja: "駅前の観光案内所",
};

/** Stops from south to north. */
export const STOPS: Stop[] = [
  { key: "nakatsugawa", name: { en: "Nakatsugawa", ja: "中津川" }, counter: INFO_PENDING, pending: true, map: null },
  { key: "magome", name: { en: "Magome", ja: "馬籠" }, counter: { en: "Magome tourist information office", ja: "馬籠観光案内所" }, pending: true, map: null },
  { key: "tsumago", name: { en: "Tsumago", ja: "妻籠" }, counter: { en: "Tsumago tourist information office", ja: "妻籠観光案内所" }, pending: true, map: null },
  {
    key: "nagiso",
    name: { en: "Nagiso", ja: "南木曽" },
    counter: { en: "Izumiya Cafe (in front of the station) or Kashiwaya Guesthouse", ja: "南木曽駅前 イズミヤカフェ、またはゲストハウス柏屋" },
    pending: false,
    map: "https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6",
  },
  {
    key: "nojiri",
    name: { en: "Nojiri", ja: "野尻" },
    counter: { en: "Coffee Katana, in front of Nojiri Station", ja: "野尻駅前 珈琲刀" },
    pending: false,
    map: "https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA",
  },
  { key: "agematsu", name: { en: "Agematsu", ja: "上松" }, counter: INFO_PENDING, pending: true, map: null },
  { key: "kisofukushima", name: { en: "Kiso-Fukushima", ja: "木曽福島" }, counter: INFO_PENDING, pending: true, map: null },
];

/** The four daily runs, in time order. Northbound is the main direction. */
export const RUNS: { no: string; time: string; north: boolean; route: T }[] = [
  { no: "①", time: "9:00–10:00", north: false, route: { en: "Nagiso → Tsumago → Magome → Nakatsugawa", ja: "南木曽 → 妻籠 → 馬籠 → 中津川" } },
  { no: "②", time: "10:00–12:00", north: true, route: { en: "Nakatsugawa → Magome → Tsumago → Nagiso", ja: "中津川 → 馬籠 → 妻籠 → 南木曽" } },
  { no: "③", time: "12:00–14:00", north: true, route: { en: "Nagiso → Nojiri → Agematsu → Kiso-Fukushima", ja: "南木曽 → 野尻 → 上松 → 木曽福島" } },
  { no: "④", time: "14:00–15:00", north: false, route: { en: "Kiso-Fukushima → Agematsu → Nojiri → Nagiso", ja: "木曽福島 → 上松 → 野尻 → 南木曽" } },
];

/** When bags arrive, from the traveller's side. */
export const ARRIVALS: { flow: T; when: T; next?: boolean }[] = [
  { flow: { en: "Magome / Tsumago → Kiso-Fukushima", ja: "馬籠・妻籠 → 木曽福島" }, when: { en: "Same day, around 13:30–14:00", ja: "当日 13:30〜14:00ごろ" } },
  { flow: { en: "Nakatsugawa → Magome / Tsumago / Nagiso", ja: "中津川 → 馬籠・妻籠・南木曽" }, when: { en: "Same day, 10:30–12:00", ja: "当日 10:30〜12:00" } },
  { flow: { en: "Nagiso → Nojiri / Agematsu / Kiso-Fukushima", ja: "南木曽 → 野尻・上松・木曽福島" }, when: { en: "Same day, 12:30–14:00", ja: "当日 12:30〜14:00" } },
  { flow: { en: "Nagiso / Tsumago → Magome / Nakatsugawa", ja: "南木曽・妻籠 → 馬籠・中津川" }, when: { en: "Same day by 10:00 (hand over before 9:00)", ja: "当日10:00まで(9:00前に預ける)" } },
  { flow: { en: "Kiso-Fukushima / Agematsu / Nojiri → Nagiso", ja: "木曽福島・上松・野尻 → 南木曽" }, when: { en: "Same day, 15:00", ja: "当日 15:00" } },
  { flow: { en: "Kiso-Fukushima side → Tsumago / Magome / Nakatsugawa", ja: "木曽福島方面 → 妻籠・馬籠・中津川" }, when: { en: "Next morning (held overnight in Nagiso)", ja: "翌朝(南木曽で一晩預かり)" }, next: true },
];

/** Fare = delivery fee (per booking, ¥1,500 for each zone the bags pass through)
 *  + ¥1,500 per bag. Nagiso is the boundary between the two zones. */
export const ZONE_FEE = 1500;
export const BAG_FEE = 1500;

export const ZONES: { name: T; route: T }[] = [
  { name: { en: "South zone", ja: "南部" }, route: { en: "Nakatsugawa — Magome — Tsumago — Nagiso", ja: "中津川〜馬籠〜妻籠〜南木曽" } },
  { name: { en: "Central zone", ja: "中部" }, route: { en: "Nagiso — Nojiri — Agematsu — Kiso-Fukushima", ja: "南木曽〜野尻〜上松〜木曽福島" } },
];

export const fare = (zones: number, bags: number) => zones * ZONE_FEE + bags * BAG_FEE;
export const yen = (n: number) => `¥${n.toLocaleString("en-US")}`;

/** Worked examples shown on the page. */
export const EXAMPLES: { trip: T; zones: number; bags: number }[] = [
  { trip: { en: "Magome → Kiso-Fukushima", ja: "馬籠 → 木曽福島" }, zones: 2, bags: 1 },
  { trip: { en: "Magome → Kiso-Fukushima", ja: "馬籠 → 木曽福島" }, zones: 2, bags: 2 },
  { trip: { en: "Nagiso → Nojiri", ja: "南木曽 → 野尻" }, zones: 1, bags: 1 },
  { trip: { en: "Nakatsugawa → Tsumago", ja: "中津川 → 妻籠" }, zones: 1, bags: 3 },
];
