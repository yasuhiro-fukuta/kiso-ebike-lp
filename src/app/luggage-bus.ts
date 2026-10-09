/** ============================================================
 *  ラゲッジバス(中津川〜木曽福島の定時便)の共通データ
 *  英語ページ(/luggage-shuttle)と日本語ページ(/ja/luggage-shuttle)で使う。
 *  料金は「配送料(通る区域ごとに1,500円・1予約ごと)+荷物1個1,500円」(2026-10-10 確定)。
 *  荷物の預け場所と提携宿を「◯◯駅」として STATIONS に載せる。
 *  載っていない場所、区間外への延長(恵那・奈良井など)はWhatsAppで応相談。
 *  ============================================================ */

type T = { en: string; ja: string };

/** Areas on the route, south to north. */
export const AREAS: { key: string; name: T }[] = [
  { key: "nakatsugawa", name: { en: "Nakatsugawa", ja: "中津川" } },
  { key: "magome", name: { en: "Magome", ja: "馬籠" } },
  { key: "tsumago", name: { en: "Tsumago", ja: "妻籠" } },
  { key: "nagiso", name: { en: "Nagiso", ja: "南木曽" } },
  { key: "nojiri", name: { en: "Nojiri", ja: "野尻" } },
  { key: "agematsu", name: { en: "Agematsu", ja: "上松" } },
  { key: "kisofukushima", name: { en: "Kiso-Fukushima", ja: "木曽福島" } },
];

/** "Stations": the luggage drop points and partner inns where bags change
 *  hands. Add a row here when a new partner signs up. */
export const STATIONS: { area: string; name: T; place: T; map: string | null }[] = [
  {
    area: "nagiso",
    name: { en: "Izumiya stop", ja: "イズミヤ駅" },
    place: { en: "Izumiya Cafe, in front of Nagiso Station", ja: "イズミヤカフェ(南木曽駅前)" },
    map: "https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6",
  },
  {
    area: "nagiso",
    name: { en: "Kashiwaya stop", ja: "柏屋駅" },
    place: { en: "Kashiwaya Guesthouse, Nagiso", ja: "ゲストハウス柏屋(南木曽)" },
    map: null,
  },
  {
    area: "nagiso",
    name: { en: "WAKU stop", ja: "WAKU駅" },
    place: { en: "Guesthouse WAKU, Nagiso", ja: "ゲストハウスWAKU(南木曽)" },
    map: "https://maps.app.goo.gl/PdnuaBaziu99LA5i6",
  },
  {
    area: "nojiri",
    name: { en: "Katana stop", ja: "刀駅" },
    place: { en: "Coffee Katana, in front of Nojiri Station", ja: "珈琲刀(野尻駅前)" },
    map: "https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA",
  },
];

/** Areas on the route with no station listed yet (ask on WhatsApp). */
export const AREAS_WITHOUT_STATION = AREAS.filter((a) => !STATIONS.some((s) => s.area === a.key));

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

/** Extension beyond the route (Ena, Narai…), by arrangement:
 *  +¥1,500 for extending the start, +¥1,500 for extending the end. */
export const EXTENSION_FEE = 1500;

export const fare = (zones: number, bags: number, ext = 0) =>
  zones * ZONE_FEE + bags * BAG_FEE + ext * EXTENSION_FEE;
export const yen = (n: number) => `¥${n.toLocaleString("en-US")}`;

/** Worked examples shown on the page. */
export const EXAMPLES: { trip: T; zones: number; bags: number; ext?: number }[] = [
  { trip: { en: "Magome → Kiso-Fukushima", ja: "馬籠 → 木曽福島" }, zones: 2, bags: 1 },
  { trip: { en: "Magome → Kiso-Fukushima", ja: "馬籠 → 木曽福島" }, zones: 2, bags: 2 },
  { trip: { en: "Nagiso → Nojiri", ja: "南木曽 → 野尻" }, zones: 1, bags: 1 },
  { trip: { en: "Nakatsugawa → Tsumago", ja: "中津川 → 妻籠" }, zones: 1, bags: 3 },
  { trip: { en: "Ena → Kiso-Fukushima (start extended)", ja: "恵那 → 木曽福島(出発地を延長)" }, zones: 2, bags: 1, ext: 1 },
];
