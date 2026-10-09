/** ============================================================
 *  ラゲッジバス(中津川〜木曽福島の定時便)の共通データ
 *  英語ページ(/luggage-shuttle)と日本語ページ(/ja/luggage-shuttle)で使う。
 *  料金は「配送料(通る区域ごとに1,500円・1予約ごと)+荷物1個1,500円」(2026-10-10 確定)。
 *  停留所は「◯◯駅」として載せる。受け渡しは駅周辺の宿、または荷物を
 *  預けられる場所(カフェ・観光案内所など)。場所は予約の承認時に伝える。
 *  提携先が増えたら known に足す。
 *  ============================================================ */

type T = { en: string; ja: string };

export type Stop = {
  key: string;
  /** Short name, used in routes. */
  name: T;
  /** How the stop is listed: the station (or the post town for Magome / Tsumago). */
  station: T;
  /** Handover places we already work with near the station, if any. */
  known: T | null;
  map: string | null;
};

/** Stops from south to north. Bags are handed over at an inn or a place
 *  that holds luggage (cafe, tourist office) around each station; the exact
 *  place is confirmed when the booking is approved. */
export const STOPS: Stop[] = [
  { key: "nakatsugawa", name: { en: "Nakatsugawa", ja: "中津川" }, station: { en: "Nakatsugawa Station", ja: "中津川駅" }, known: null, map: null },
  { key: "magome", name: { en: "Magome", ja: "馬籠" }, station: { en: "Magome-juku", ja: "馬籠宿" }, known: null, map: null },
  { key: "tsumago", name: { en: "Tsumago", ja: "妻籠" }, station: { en: "Tsumago-juku", ja: "妻籠宿" }, known: null, map: null },
  {
    key: "nagiso",
    name: { en: "Nagiso", ja: "南木曽" },
    station: { en: "Nagiso Station", ja: "南木曽駅" },
    known: { en: "Izumiya Cafe in front of the station, Kashiwaya Guesthouse", ja: "駅前のイズミヤカフェ、ゲストハウス柏屋" },
    map: "https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6",
  },
  {
    key: "nojiri",
    name: { en: "Nojiri", ja: "野尻" },
    station: { en: "Nojiri Station", ja: "野尻駅" },
    known: { en: "Coffee Katana in front of the station", ja: "駅前の珈琲刀" },
    map: "https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA",
  },
  { key: "agematsu", name: { en: "Agematsu", ja: "上松" }, station: { en: "Agematsu Station", ja: "上松駅" }, known: null, map: null },
  { key: "kisofukushima", name: { en: "Kiso-Fukushima", ja: "木曽福島" }, station: { en: "Kiso-Fukushima Station", ja: "木曽福島駅" }, known: null, map: null },
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
