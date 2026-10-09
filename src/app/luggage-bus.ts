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
 *  hands, grouped by town. Add a place when a new partner signs up. */
export const STATIONS: {
  area: string;
  name: T;
  places: { name: T; map: string | null }[];
}[] = [
  {
    area: "nakatsugawa",
    name: { en: "Nakatsugawa stop", ja: "中津川駅" },
    places: [
      { name: { en: "Nakatsugawa tourist information office", ja: "中津川観光案内所" }, map: null },
    ],
  },
  {
    area: "magome",
    name: { en: "Magome stop", ja: "馬籠駅" },
    places: [
      { name: { en: "Magome tourist information office", ja: "馬籠観光案内所" }, map: null },
    ],
  },
  {
    area: "tsumago",
    name: { en: "Tsumago stop", ja: "妻籠駅" },
    places: [
      { name: { en: "Tsumago tourist information office", ja: "妻籠観光案内所" }, map: null },
    ],
  },
  {
    area: "nagiso",
    name: { en: "Nagiso stop", ja: "南木曽駅" },
    places: [
      { name: { en: "Cafe Izumiya, in front of Nagiso Station", ja: "カフェイズミヤ(南木曽駅前)" }, map: "https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6" },
      { name: { en: "Guesthouse Kashiwaya Inn", ja: "ゲストハウス柏屋Inn" }, map: null },
      { name: { en: "Guesthouse Waku Nagiso", ja: "ゲストハウスWaku南木曽" }, map: "https://maps.app.goo.gl/PdnuaBaziu99LA5i6" },
      { name: { en: "Guesthouse Yuian", ja: "ゲストハウス結い庵" }, map: null },
    ],
  },
  {
    area: "nojiri",
    name: { en: "Nojiri stop", ja: "野尻駅" },
    places: [
      { name: { en: "Cafe Katana, in front of Nojiri Station", ja: "カフェ刀(野尻駅前)" }, map: "https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA" },
    ],
  },
  {
    area: "agematsu",
    name: { en: "Agematsu stop", ja: "上松駅" },
    places: [
      { name: { en: "Agematsu tourist information office", ja: "上松観光案内所" }, map: null },
    ],
  },
  {
    area: "kisofukushima",
    name: { en: "Kiso-Fukushima stop", ja: "木曽福島駅" },
    places: [
      { name: { en: "Kiso-Fukushima tourist information office", ja: "木曽福島観光案内所" }, map: null },
    ],
  },
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

/** Extension beyond the route: Ena tourist information office adds the
 *  south extension toll, Narai tourist information office the north one
 *  (+¥1,500 each). Other places beyond the route are by arrangement. */
export const EXTENSION_FEE = 1500;

export const fare = (zones: number, bags: number, ext = 0) =>
  zones * ZONE_FEE + bags * BAG_FEE + ext * EXTENSION_FEE;
export const yen = (n: number) => `¥${n.toLocaleString("en-US")}`;

/** Booking-form choices, with their position on the line for the estimate:
 *  -1 Ena (south extension), 0 Nakatsugawa … 3 Nagiso … 6 Kiso-Fukushima,
 *  7 Narai (north extension); null = no automatic estimate. */
const NAGISO = 3;
export const FORM_POINTS: { en: string; ja: string; pos: number | null }[] = [
  { en: "Ena tourist information office (south extension)", ja: "恵那観光案内所(延伸・南)", pos: -1 },
  { en: "Nakatsugawa stop (tourist information office)", ja: "中津川駅(中津川観光案内所)", pos: 0 },
  { en: "Magome stop (tourist information office)", ja: "馬籠駅(馬籠観光案内所)", pos: 1 },
  { en: "Tsumago stop (tourist information office)", ja: "妻籠駅(妻籠観光案内所)", pos: 2 },
  { en: "Nagiso stop (Cafe Izumiya)", ja: "南木曽駅(カフェイズミヤ)", pos: NAGISO },
  { en: "Nagiso stop (Guesthouse Kashiwaya Inn)", ja: "南木曽駅(ゲストハウス柏屋Inn)", pos: NAGISO },
  { en: "Nagiso stop (Guesthouse Waku Nagiso)", ja: "南木曽駅(ゲストハウスWaku南木曽)", pos: NAGISO },
  { en: "Nagiso stop (Guesthouse Yuian)", ja: "南木曽駅(ゲストハウス結い庵)", pos: NAGISO },
  { en: "Nojiri stop (Cafe Katana)", ja: "野尻駅(カフェ刀)", pos: 4 },
  { en: "Agematsu stop (tourist information office)", ja: "上松駅(上松観光案内所)", pos: 5 },
  { en: "Kiso-Fukushima stop (tourist information office)", ja: "木曽福島駅(木曽福島観光案内所)", pos: 6 },
  { en: "Narai tourist information office (north extension)", ja: "奈良井観光案内所(延伸・北)", pos: 7 },
  { en: "Another inn or place (details in chat)", ja: "その他の宿・場所(チャットで相談)", pos: null },
];

/** Estimated fare between two line positions: ¥1,500 for each zone passed
 *  (south: Nakatsugawa–Nagiso, central: Nagiso–Kiso-Fukushima), ¥1,500 for
 *  each extension (Ena / Narai), plus ¥1,500 per bag. null when it can't be
 *  worked out (unknown place, or start and end in the same town). */
export function estimate(from: number | null, to: number | null, bags: number) {
  if (from === null || to === null || from === to || bags < 1) return null;
  const lo = Math.min(from, to);
  const hi = Math.max(from, to);
  const parts: { en: string; ja: string; yen: number }[] = [];
  if (lo < 0) parts.push({ en: "South extension (Ena)", ja: "延伸南部通行料(恵那)", yen: EXTENSION_FEE });
  if (lo < NAGISO) parts.push({ en: "South zone", ja: "南部通行料", yen: ZONE_FEE });
  if (hi > NAGISO) parts.push({ en: "Central zone", ja: "中部通行料", yen: ZONE_FEE });
  if (hi > 6) parts.push({ en: "North extension (Narai)", ja: "延伸北部通行料(奈良井)", yen: EXTENSION_FEE });
  parts.push({ en: `${bags} bag${bags > 1 ? "s" : ""}`, ja: `荷物${bags}個`, yen: BAG_FEE * bags });
  return { total: parts.reduce((n, p) => n + p.yen, 0), parts };
}

/** Worked examples shown on the page. */
export const EXAMPLES: { trip: T; zones: number; bags: number; ext?: number }[] = [
  { trip: { en: "Magome → Kiso-Fukushima", ja: "馬籠 → 木曽福島" }, zones: 2, bags: 1 },
  { trip: { en: "Magome → Kiso-Fukushima", ja: "馬籠 → 木曽福島" }, zones: 2, bags: 2 },
  { trip: { en: "Nagiso → Nojiri", ja: "南木曽 → 野尻" }, zones: 1, bags: 1 },
  { trip: { en: "Nakatsugawa → Tsumago", ja: "中津川 → 妻籠" }, zones: 1, bags: 3 },
  { trip: { en: "Ena → Kiso-Fukushima", ja: "恵那 → 木曽福島" }, zones: 2, bags: 1, ext: 1 },
  { trip: { en: "Ena → Narai", ja: "恵那 → 奈良井" }, zones: 2, bags: 1, ext: 2 },
];
