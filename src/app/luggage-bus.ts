/** ============================================================
 *  ラゲッジバス(中津川駅〜奈良井の定時便)の共通データ
 *  荷物運びLP(/lb, /lb/ja = luggagebusnakasendo.com)・範囲チェッカー・
 *  予約ボックス・予約フォーム・決済APIがすべてここを読む(二重管理しない)。
 *
 *  範囲(2026-11-21 社長決定):南→北に 中津川駅・坂下・田立・南木曽駅・南木曽・
 *  野尻駅・野尻・須原・上松・木曽福島・奈良井駅・奈良井 の12地点。
 *  中津川は駅のみ(宿は扱わない)。宮ノ越・薮原は範囲外にした。
 *  馬籠・妻籠・蘭は範囲外 → 他社のご案内。
 *  料金(2026-11-21 社長決定):式ではなく料金表 lb-fares.json の引き当てだけ。
 *  表は [出発, 到着, 元表の出発, 元表の到着, [1個..5個の円]] の126組(プログラムで
 *  生成し、元のスプレッドシートと全行一致を確認済み)。コードで計算・補完・丸めしない。
 *  表に無い組(同じ町どうし)と、表に無い個数(6個以上)は金額を出さない。
 *  ※運賃料金の変更届を出す前に、この料金を本番に出さないこと。
 *  届く時刻(2026-11-20 社長決定):朝9時までに置けば、その日の16時までに届く。
 *  南木曽より北 → 南木曽より南(田立・坂下・中津川駅)は翌日届け。
 *  ============================================================ */

import { LB_NAKATSUGAWA_DROP, LB_COMPENSATION_YEN, LB_INSURANCE } from "./lb-config";
import FARE_ROWS from "./lb-fares.json";

type T = { en: string; ja: string };

/** A place where bags change hands. `fee` = luggage-holding fee per bag,
 *  paid on the spot (null = still being checked). `rule` = known closures used
 *  by the booking form's date check (null = not known yet). Closure info for
 *  the tourist offices comes from tourism sites and is approximate. */
export type Place = {
  id: string;
  name: T;
  map: string | null;
  fee: number | null;
  /** Extra holding conditions (e.g. overnight), shown after the fee. */
  feeNote?: T;
  /** The office doesn't hold bags for other companies. */
  noHolding?: boolean;
  /** An inn: only its own guests can use it as a station. */
  guestsOnly?: boolean;
  hours: T | null;
  closed: T;
  rule: { weekdays: number[]; periods: [string, string][] } | null;
};

const UNKNOWN: T = { en: "Being checked", ja: "確認中" };
const YEAR_END: [string, string] = ["12-29", "01-03"];

export const PLACES: Record<string, Place> = {
  "nakatsugawa-info": {
    id: "nakatsugawa-info",
    name: { en: "Nigiwai Tokusankan (Nakatsugawa tourist information office)", ja: "にぎわい特産館(中津川観光案内所)" },
    map: "https://maps.app.goo.gl/qMcJnvY2bVrjN46a9",
    fee: 700,
    hours: { en: "8:30–18:00", ja: "8:30〜18:00" },
    closed: { en: "New Year holidays (approx. Dec 29–Jan 3)", ja: "年末年始(12/29〜1/3目安)" },
    rule: { weekdays: [], periods: [YEAR_END] },
  },
  izumiya: {
    id: "izumiya",
    name: { en: "Cafe Izumiya, in front of Nagiso Station", ja: "カフェイズミヤ(南木曽駅前)" },
    map: "https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6",
    fee: 500,
    hours: { en: "8:30–17:00", ja: "8:30〜17:00" },
    closed: { en: "Closed December–February; open daily in season", ja: "12月〜2月休業。期間中は無休" },
    rule: { weekdays: [], periods: [["12-01", "02-29"]] },
  },
  kashiwaya: {
    id: "kashiwaya",
    name: { en: "Guesthouse Kashiwaya Inn", ja: "ゲストハウス柏屋Inn" },
    map: "https://kashiwaya-inn.com/",
    fee: 0,
    guestsOnly: true,
    hours: null,
    closed: { en: "Closed December–February", ja: "12月〜2月休業" },
    rule: { weekdays: [], periods: [["12-01", "02-29"]] },
  },
  waku: {
    id: "waku",
    name: { en: "Guesthouse Waku Nagiso", ja: "ゲストハウスWaku南木曽" },
    map: "https://maps.app.goo.gl/PdnuaBaziu99LA5i6",
    fee: 0,
    guestsOnly: true,
    hours: null,
    closed: { en: "—", ja: "—" },
    rule: null,
  },
  yuian: {
    id: "yuian",
    name: { en: "Guesthouse Yuian", ja: "ゲストハウス結い庵" },
    map: "https://folk-lore.com/",
    fee: 0,
    guestsOnly: true,
    hours: null,
    closed: { en: "—", ja: "—" },
    rule: null,
  },
  katana: {
    id: "katana",
    name: { en: "Cafe Katana, in front of Nojiri Station", ja: "カフェ刀(野尻駅前)" },
    map: "https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA",
    fee: 0,
    hours: { en: "9:00–17:00", ja: "9:00〜17:00" },
    closed: { en: "Closed December–February", ja: "12月〜2月休業" },
    rule: { weekdays: [], periods: [["12-01", "02-29"]] },
  },
  kinoma: {
    id: "kinoma",
    name: { en: "Guesthouse Kinoma", ja: "ゲストハウスKinoma" },
    map: "https://kinoma.space/",
    fee: 0,
    guestsOnly: true,
    hours: null,
    closed: { en: "—", ja: "—" },
    rule: null,
  },
  "agematsu-info": {
    id: "agematsu-info",
    name: { en: "Agematsu Town Tourist Information Center", ja: "上松町観光情報センター" },
    map: "https://maps.app.goo.gl/cWZhSeWSVGoMC6Lf6",
    fee: 0,
    feeNote: { en: "same day only, no overnight holding", ja: "当日中のみ。日をまたぐ預かりは不可" },
    hours: { en: "9:00–17:00", ja: "9:00〜17:00" },
    closed: {
      en: "Closed from late November to mid-March (approx. Nov 25–Mar 15); open daily in season",
      ja: "11月末〜3月半ばは休業(11/25〜3/15目安)。期間中は無休",
    },
    rule: { weekdays: [], periods: [["11-25", "03-15"]] },
  },
  "kisofukushima-info": {
    id: "kisofukushima-info",
    name: { en: "Kiso-Fukushima tourist information office", ja: "木曽福島観光案内所" },
    map: "https://maps.app.goo.gl/ZMd1AgaeyR9q2uBe7",
    fee: 300,
    feeNote: { en: "paid in advance; ¥600 if held overnight", ja: "前払い。日をまたぐと600円" },
    hours: { en: "8:30–17:30", ja: "8:30〜17:30" },
    closed: { en: "Open daily (to be confirmed)", ja: "無休(要確認)" },
    rule: { weekdays: [], periods: [] },
  },
  "mugi-house": {
    id: "mugi-house",
    name: { en: "Mugi House by Nagi Stay", ja: "Mugi House by Nagi Stay" },
    map: "https://maps.app.goo.gl/TANiHXd4GY8o8hJR6",
    fee: 0,
    guestsOnly: true,
    hours: null,
    closed: { en: "—", ja: "—" },
    rule: null,
  },
  "fuki-no-mori": {
    id: "fuki-no-mori",
    name: { en: "Hotel Fuki no Mori", ja: "ホテル富貴の森" },
    map: "https://maps.app.goo.gl/cft5Up5iQjYXxUix5",
    fee: 0,
    guestsOnly: true,
    hours: null,
    closed: { en: "—", ja: "—" },
    rule: null,
  },
  "minshuku-suhara": {
    id: "minshuku-suhara",
    name: { en: "Minshuku Suhara", ja: "民宿すはら" },
    map: "https://maps.app.goo.gl/2ppJkN3mSBiNNiZs6",
    fee: 0,
    guestsOnly: true,
    hours: null,
    closed: { en: "—", ja: "—" },
    rule: null,
  },
  "waiwai": {
    id: "waiwai",
    name: { en: "HOTEL waiwai yakiso", ja: "HOTEL waiwai yakiso" },
    map: "https://maps.app.goo.gl/Xxr6c2gGERLHo26u8",
    fee: 0,
    guestsOnly: true,
    hours: null,
    closed: { en: "—", ja: "—" },
    rule: null,
  },
  "matarihouse": {
    id: "matarihouse",
    name: { en: "Matari House (room-only inn)", ja: "素泊宿matarihouse" },
    map: "https://www.matarihouse.com/",
    fee: 0,
    guestsOnly: true,
    hours: null,
    closed: { en: "—", ja: "—" },
    rule: null,
  },
  "narai-station": { id: "narai-station", name: { en: "Narai Station luggage storage", ja: "奈良井駅荷物預かり所" }, map: "https://maps.app.goo.gl/ESeFTVPg2nDrmjG19", fee: 700, hours: null, closed: UNKNOWN, rule: null },
};

/** The stops on the line, south to north. `pos` is the order on the line.
 *  `town`: stops in the same town (a station and the town around it) are not
 *  served between each other. `fare`: the stop's name in the fare table
 *  (lb-fares.json). Places (stations, inns) belong to one stop. */
export type AreaKey =
  | "nakatsugawa"
  | "sakashita"
  | "tadachi"
  | "nagiso-st"
  | "nagiso"
  | "nojiri-st"
  | "nojiri"
  | "suhara"
  | "agematsu"
  | "kisofukushima"
  | "narai-st"
  | "narai";

export const LINE: { key: AreaKey; pos: number; name: T; town: string; fare: string; station: boolean }[] = [
  { key: "nakatsugawa", pos: 0, name: { en: "Nakatsugawa Station", ja: "中津川駅" }, town: "nakatsugawa", fare: "中津川駅", station: true },
  { key: "sakashita", pos: 1, name: { en: "Sakashita", ja: "坂下" }, town: "sakashita", fare: "坂下", station: false },
  { key: "tadachi", pos: 2, name: { en: "Tadachi", ja: "田立" }, town: "tadachi", fare: "田立", station: false },
  { key: "nagiso-st", pos: 3, name: { en: "Nagiso Station", ja: "南木曽駅" }, town: "nagiso", fare: "南木曽駅", station: true },
  { key: "nagiso", pos: 4, name: { en: "Nagiso", ja: "南木曽" }, town: "nagiso", fare: "南木曽", station: false },
  { key: "nojiri-st", pos: 5, name: { en: "Nojiri Station", ja: "野尻駅" }, town: "nojiri", fare: "野尻駅", station: true },
  { key: "nojiri", pos: 6, name: { en: "Nojiri", ja: "野尻" }, town: "nojiri", fare: "野尻", station: false },
  { key: "suhara", pos: 7, name: { en: "Suhara", ja: "須原" }, town: "suhara", fare: "須原", station: false },
  { key: "agematsu", pos: 8, name: { en: "Agematsu", ja: "上松" }, town: "agematsu", fare: "上松", station: false },
  { key: "kisofukushima", pos: 9, name: { en: "Kiso-Fukushima", ja: "木曽福島" }, town: "kisofukushima", fare: "木曽福島", station: false },
  { key: "narai-st", pos: 10, name: { en: "Narai Station", ja: "奈良井駅" }, town: "narai", fare: "奈良井駅", station: true },
  { key: "narai", pos: 11, name: { en: "Narai", ja: "奈良井" }, town: "narai", fare: "奈良井", station: false },
];

/** Kept for older imports: the stops on the line. */
export const AREAS = LINE;

export const areaAt = (pos: number | null) => (pos === null ? null : LINE.find((a) => a.pos === pos) ?? null);
export const posOf = (k: AreaKey) => LINE.find((a) => a.key === k)!.pos;
export const nameOf = (k: AreaKey) => LINE.find((a) => a.key === k)!.name;

/** Nagiso Station (southern end of Nagiso) and Nagiso (northern end). */
export const NAGISO_POS = posOf("nagiso-st");
export const NAGISO_NORTH_POS = posOf("nagiso");

/** Both ends in the same town (e.g. Nagiso Station and Nagiso): not served. */
export const sameTown = (from: number | null, to: number | null) => {
  const a = areaAt(from);
  const b = areaAt(to);
  return !!a && !!b && a.town === b.town;
};

/** Not served: these go to the "other services" page. */
export const OUT_OF_RANGE: { key: string; name: T }[] = [
  { key: "magome", name: { en: "Magome", ja: "馬籠" } },
  { key: "tsumago", name: { en: "Tsumago", ja: "妻籠" } },
  { key: "ran", name: { en: "Araragi (Ran)", ja: "蘭" } },
];

/** Other luggage services we point to for Magome, Tsumago and Ran
 *  (2026-11-20 社長: NLTS と Walk Lite。Magome Base は載せない). */
export const OTHER_SERVICES: { name: string; url: string }[] = [
  { name: "NLTS (Nakasendo Luggage Transfer Service)", url: "https://magome-luggagetransport.jp/" },
  { name: "Walk Lite Japan", url: "https://walklitejapan.com/" },
];

/* ---------- Fare (looked up in the fare table, never computed) ---------- */

/** One row of lb-fares.json: from, to, source-sheet from, source-sheet to,
 *  yen for 1..5 bags. */
export type FareRow = [string, string, string, string, number[]];
export const FARE_TABLE = FARE_ROWS as unknown as FareRow[];

/** The table has prices for 1 to this many bags. More bags: ask on WhatsApp. */
export const MAX_FARE_BAGS = 5;

const FARE_MAP = new Map<string, number[]>(FARE_TABLE.map((r) => [`${r[0]}|${r[1]}`, r[4]]));

/** Stops still booked by arrangement on WhatsApp (not instant), as before
 *  the fare table: Suhara and Narai. Their price comes from the table too. */
export const BY_ARRANGEMENT: AreaKey[] = ["suhara", "narai-st", "narai"];

export const byArrangement = (pos: number | null) => {
  const a = areaAt(pos);
  return !!a && BY_ARRANGEMENT.includes(a.key);
};
/** Positions that need arrangement (for the request form's note). */
export const EXT_POS: number[] = LINE.filter((a) => BY_ARRANGEMENT.includes(a.key)).map((a) => a.pos);

/** Fare in yen from the table, or null when the table has no price
 *  (unknown stop, same town, a pair not in the table, or bags not 1–5). */
export function fareYen(from: number | null, to: number | null, bags: number): number | null {
  const a = areaAt(from);
  const b = areaAt(to);
  if (!a || !b || a.town === b.town) return null;
  if (!Number.isInteger(bags) || bags < 1 || bags > MAX_FARE_BAGS) return null;
  const row = FARE_MAP.get(`${a.fare}|${b.fare}`);
  const v = row?.[bags - 1];
  return typeof v === "number" ? v : null;
}

/** Fare for a trip, from the table. null when there is no price.
 *  `parts` = one line (the bags) for display and the Stripe description. */
export function estimate(from: number | null, to: number | null, bags: number) {
  const total = fareYen(from, to, bags);
  if (total === null) return null;
  const parts: { en: string; ja: string; yen: number }[] = [
    { en: `${bags} bag${bags > 1 ? "s" : ""}`, ja: `荷物${bags}個`, yen: total },
  ];
  return { total, parts };
}

export const yen = (n: number) => `¥${n.toLocaleString("en-US")}`;

/** Examples shown on the page (prices looked up in the table, never typed). */
export const EXAMPLES: { from: AreaKey; to: AreaKey; bags: number }[] = [
  { from: "nagiso-st", to: "nojiri-st", bags: 1 },
  { from: "nakatsugawa", to: "nagiso-st", bags: 2 },
  { from: "nagiso", to: "kisofukushima", bags: 1 },
  { from: "nakatsugawa", to: "kisofukushima", bags: 3 },
];

/* ---------- When bags arrive ---------- */

/** Drop-off and arrival times (2026-11-20 社長決定). */
export const DROP_BY = "9:00";
export const ARRIVE_BY = "16:00";

/** From north of Nagiso (Nojiri Station and beyond) to south of Nagiso
 *  (Tadachi, Sakashita, Nakatsugawa Station): we take the booking and deliver
 *  the next day. Nagiso Station and Nagiso count as Nagiso. */
export const isNextDay = (from: number | null, to: number | null) =>
  from !== null && to !== null && from > NAGISO_NORTH_POS && to < NAGISO_POS;

/** The day after an ISO date (yyyy-mm-dd). */
export const nextIso = (iso: string) => {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
};

const SOUTH_OF_NAGISO = LINE.filter((a) => a.pos < NAGISO_POS).map((a) => a.name);

/** When bags arrive, from the traveller's side. */
export const ARRIVALS: { flow: T; when: T; next?: boolean }[] = [
  {
    flow: { en: "Any stop → any other stop", ja: "どの地点 → ほかの地点" },
    when: { en: `Same day, by ${ARRIVE_BY} (leave them by ${DROP_BY})`, ja: `当日 ${ARRIVE_BY}まで(${DROP_BY}までに置く)` },
  },
  {
    flow: {
      en: `North of Nagiso → ${SOUTH_OF_NAGISO.map((n) => n.en).join(" / ")}`,
      ja: `南木曽より北 → ${SOUTH_OF_NAGISO.map((n) => n.ja).join("・")}`,
    },
    when: { en: `Next day, by ${ARRIVE_BY} (we still take the booking)`, ja: `翌日 ${ARRIVE_BY}まで(予約は受け付けます)` },
    next: true,
  },
];

/** Delivery routes (2026-11-21 社長決定). Clock times aren't fixed yet,
 *  so only the order of the stops is shown. */
export const RUNS: { no: string; dir: T; north: boolean; route: T }[] = [
  {
    no: "①",
    dir: { en: "South", ja: "南回り" },
    north: false,
    route: {
      en: "Nagiso → Tadachi → Sakashita → Nakatsugawa Station",
      ja: "南木曽 → 田立 → 坂下 → 中津川駅",
    },
  },
  {
    no: "②",
    dir: { en: "Northbound", ja: "北行き" },
    north: true,
    route: {
      en: "Nakatsugawa Station → Sakashita → Tadachi → Nagiso / Nagiso Station → Nojiri / Nojiri Station → Suhara → Agematsu → Kiso-Fukushima → Narai / Narai Station",
      ja: "中津川駅 → 坂下 → 田立 → 南木曽・南木曽駅 → 野尻・野尻駅 → 須原 → 上松 → 木曽福島 → 奈良井・奈良井駅",
    },
  },
  {
    no: "③",
    dir: { en: "Southbound", ja: "南行き" },
    north: false,
    route: {
      en: "Narai → Kiso-Fukushima → Agematsu → Suhara → Nojiri / Nojiri Station → Nagiso / Nagiso Station",
      ja: "奈良井 → 木曽福島 → 上松 → 須原 → 野尻・野尻駅 → 南木曽・南木曽駅",
    },
  },
];

/* ---------- Stations (drop points and partner inns) ---------- */

const showNakatsugawaDrop = LB_NAKATSUGAWA_DROP === "on";

/** "Stations" shown on the page: the luggage drop points and partner inns,
 *  grouped by town. Towns with no listed place yet are left out here; the
 *  range checker still offers "another inn" there. */
export const STATIONS: { area: AreaKey; name: T; places: Place[] }[] = (
  [
    {
      area: "nakatsugawa",
      name: { en: "Nakatsugawa Station stop", ja: "中津川駅" },
      places: showNakatsugawaDrop ? [PLACES["nakatsugawa-info"]] : [],
    },
    { area: "nagiso-st", name: { en: "Nagiso Station stop", ja: "南木曽駅" }, places: [PLACES.izumiya] },
    { area: "nagiso", name: { en: "Nagiso stop (inns)", ja: "南木曽(宿)" }, places: [PLACES.kashiwaya, PLACES.waku, PLACES.yuian] },
    { area: "nojiri-st", name: { en: "Nojiri Station stop", ja: "野尻駅" }, places: [PLACES.katana] },
    { area: "suhara", name: { en: "Suhara stop (by arrangement)", ja: "須原駅(要相談)" }, places: [PLACES.kinoma, PLACES["minshuku-suhara"]] },
    { area: "agematsu", name: { en: "Agematsu stop", ja: "上松駅" }, places: [PLACES["agematsu-info"]] },
    { area: "kisofukushima", name: { en: "Kiso-Fukushima stop", ja: "木曽福島駅" }, places: [PLACES["kisofukushima-info"], PLACES.waiwai, PLACES.matarihouse] },
    { area: "narai-st", name: { en: "Narai Station stop (by arrangement)", ja: "奈良井駅(要相談)" }, places: [PLACES["narai-station"]] },
  ] as { area: AreaKey; name: T; places: Place[] }[]
).filter((s) => s.places.length > 0);

/** A place's name, with "guests only" for the inns. */
export const placeName = (pl: Place, lang: "en" | "ja") =>
  pl.name[lang] + (pl.guestsOnly ? (lang === "ja" ? " ※宿泊者のみ" : " · guests only") : "");

export const feeText = (pl: Place, lang: "en" | "ja") => {
  if (pl.noHolding)
    return lang === "ja" ? "預かり不可(受け渡し方法は確認中。チャットでご相談ください)" : "No holding (how to hand over is being sorted out; ask in chat)";
  const base =
    pl.fee === null ? UNKNOWN[lang] : pl.fee === 0 ? (lang === "ja" ? "無料" : "Free") : yen(pl.fee) + (lang === "ja" ? "/個" : " / bag");
  if (!pl.feeNote) return base;
  return lang === "ja" ? `${base}(${pl.feeNote.ja})` : `${base} (${pl.feeNote.en})`;
};

/** Is the place known to be closed on this date (ISO yyyy-mm-dd)? */
export function placeClosed(place: Place, iso: string) {
  if (!place.rule || !iso) return false;
  const d = new Date(`${iso}T00:00:00`);
  if (place.rule.weekdays.includes(d.getDay())) return true;
  const md = iso.slice(5);
  return place.rule.periods.some(([a, b]) => (a <= b ? md >= a && md <= b : md >= a || md <= b));
}

/* ---------- Booking choices ---------- */

export type FormPoint = { en: string; ja: string; pos: number | null; place: Place | null; area?: AreaKey };

const P = (area: AreaKey, en: string, ja: string, place: Place): FormPoint => ({
  en,
  ja,
  pos: posOf(area),
  place,
  area,
});

/** Booking-form choices with their position on the line; null = no
 *  automatic estimate. Labels of places already bookable before are kept as
 *  they were (bookings in Stripe carry them); only the former extensions
 *  (Nakatsugawa, Narai) were renamed. */
export const FORM_POINTS: FormPoint[] = [
  ...(showNakatsugawaDrop
    ? [P("nakatsugawa", "Nakatsugawa stop (Nigiwai Tokusankan)", "中津川駅(にぎわい特産館)", PLACES["nakatsugawa-info"])]
    : []),
  P("nagiso-st", "Nagiso stop (Cafe Izumiya)", "南木曽駅(カフェイズミヤ)", PLACES.izumiya),
  P("nagiso", "Nagiso stop (Guesthouse Kashiwaya Inn, guests only)", "南木曽駅(ゲストハウス柏屋Inn ※宿泊者のみ)", PLACES.kashiwaya),
  P("nagiso", "Nagiso stop (Guesthouse Waku Nagiso, guests only)", "南木曽駅(ゲストハウスWaku南木曽 ※宿泊者のみ)", PLACES.waku),
  P("nagiso", "Nagiso stop (Guesthouse Yuian, guests only)", "南木曽駅(ゲストハウス結い庵 ※宿泊者のみ)", PLACES.yuian),
  P("nojiri-st", "Nojiri stop (Cafe Katana)", "野尻駅(カフェ刀)", PLACES.katana),
  P("suhara", "Suhara stop (Guesthouse Kinoma, guests only)", "須原駅(ゲストハウスKinoma ※宿泊者のみ)", PLACES.kinoma),
  P("suhara", "Suhara stop (Minshuku Suhara, guests only)", "須原駅(民宿すはら ※宿泊者のみ)", PLACES["minshuku-suhara"]),
  P("agematsu", "Agematsu stop (tourist information office)", "上松駅(上松町観光情報センター)", PLACES["agematsu-info"]),
  P("kisofukushima", "Kiso-Fukushima stop (tourist information office)", "木曽福島駅(木曽福島観光案内所)", PLACES["kisofukushima-info"]),
  P("kisofukushima", "Kiso-Fukushima stop (HOTEL waiwai yakiso, guests only)", "木曽福島駅(HOTEL waiwai yakiso ※宿泊者のみ)", PLACES["waiwai"]),
  P("kisofukushima", "Kiso-Fukushima stop (Matari House, guests only)", "木曽福島駅(素泊宿matarihouse ※宿泊者のみ)", PLACES["matarihouse"]),
  P("narai-st", "Narai stop (Narai Station luggage storage, by arrangement)", "奈良井駅(奈良井駅荷物預かり所・要相談)", PLACES["narai-station"]),
  { en: "Another inn or place (details in chat)", ja: "その他の宿・場所(チャットで相談)", pos: null, place: null },
];

/** "Another inn/place at <stop>": for every stop on the line, so a traveller
 *  whose inn isn't listed can still check the range and the price. */
export const AREA_OTHER_POINTS: FormPoint[] = LINE.map((a) => ({
  en: a.station ? `${a.name.en}: another place (details in chat)` : `${a.name.en}: another inn (not listed)`,
  ja: a.station ? `${a.name.ja}:その他の場所(チャットで相談)` : `${a.name.ja}:その他の宿(一覧にない宿)`,
  pos: a.pos,
  place: null,
  area: a.key,
}));

/** Every choice of the range checker and the booking box, grouped by stop,
 *  south to north: the listed places, then "another inn/place". One list for both. */
export const LB_CHOICE_GROUPS: { area: (typeof LINE)[number]; points: FormPoint[] }[] = LINE.map((a) => ({
  area: a,
  points: [...FORM_POINTS.filter((p) => p.area === a.key), AREA_OTHER_POINTS.find((p) => p.area === a.key)!],
}));

/** Find a choice by its label (either language). */
export const findPoint = (label: string): FormPoint | null =>
  FORM_POINTS.find((p) => p.en === label || p.ja === label) ??
  AREA_OTHER_POINTS.find((p) => p.en === label || p.ja === label) ??
  null;

/** Booking form step 1: the area (a town on the line, south to north). */
export const FORM_AREAS: { key: string; pos: number; name: T }[] = LINE.map((a) => ({
  key: a.key,
  pos: a.pos,
  name: BY_ARRANGEMENT.includes(a.key)
    ? { en: `${a.name.en} (by arrangement)`, ja: `${a.name.ja}(要相談)` }
    : a.name,
}));

/** Last choice in every area: an inn or place not on the list, named in the free-text box. */
export const FORM_OTHER: T = {
  en: "Another inn or place in this area (write its name below)",
  ja: "このエリアのその他の宿・場所(下に名前を書く)",
};

/** Step 2: the stations and inns of one area (pulldown), plus the free-text choice. */
export const formSpots = (areaLabel: string, lang: "en" | "ja"): string[] => {
  const a = FORM_AREAS.find((x) => x.name.en === areaLabel || x.name.ja === areaLabel);
  if (!a) return [];
  return [
    ...FORM_POINTS.filter((p) => p.pos === a.pos && p.place).map((p) => p[lang]),
    FORM_OTHER[lang],
  ];
};

/** Position on the line for a chosen area. */
export const formAreaPos = (areaLabel: string): number | null =>
  FORM_AREAS.find((x) => x.name.en === areaLabel || x.name.ja === areaLabel)?.pos ?? null;

/** Where to leave the bags, for one end of the trip. */
export const dropPlaceText = (pt: FormPoint, lang: "en" | "ja") => {
  const ja = lang === "ja";
  if (pt.place && !pt.place.guestsOnly)
    return ja
      ? `${pt.place.name.ja}に、朝${DROP_BY}までに預けてください(預かり料:${feeText(pt.place, "ja")})。`
      : `Leave them at ${pt.place.name.en} by ${DROP_BY} (holding fee: ${feeText(pt.place, "en")}).`;
  return ja
    ? `お泊まりの宿のフロントか玄関に、朝${DROP_BY}までに置いてください。`
    : `Leave them at your inn's front desk or entrance by ${DROP_BY}.`;
};

/** Booking-date check for the form: requests close at 23:00 the day before
 *  (Japan time), no runs on Mondays, the calendar's extra closing days or in
 *  the winter break, and neither station may be on a known closing day.
 *  Returns an error message, or null when OK. */
export function dateProblem(
  iso: string,
  places: (Place | null)[],
  lang: "en" | "ja",
  busClosed: Set<string>,
  today: string,
  tomorrow: string,
  afterDeadline: boolean,
) {
  const ja = lang === "ja";
  if (!iso) return ja ? "日付を選んでください。" : "Please choose a date.";
  if (iso <= today)
    return ja
      ? "申し込みは前日23時までです。明日以降の日付を選んでください。電話・WhatsAppで予約済みの方は、お送りした決済リンクからお支払いください。"
      : "Requests close at 23:00 the day before. Please choose tomorrow or later. Already booked by phone or WhatsApp? Please pay with the payment link we sent you.";
  if (iso === tomorrow && afterDeadline)
    return ja
      ? "明日の分の申し込みは締め切りました(前日23時まで)。明後日以降の日付を選んでください。電話・WhatsAppで予約済みの方は、お送りした決済リンクからお支払いください。"
      : "Requests for tomorrow closed at 23:00. Please choose the day after tomorrow or later. Already booked by phone or WhatsApp? Please pay with the payment link we sent you.";
  if (inWinterBreak(iso))
    return ja
      ? "12〜3月は運休です(3月20日ごろ再開)。別の日を選んでください。"
      : "The Luggage Bus is closed from December to March (restarting around 20 March). Please pick another date.";
  const d = new Date(`${iso}T00:00:00`);
  if (d.getDay() === 1 || busClosed.has(iso))
    return ja
      ? "その日はラゲッジバスの運休日です(毎週月曜と臨時休業日)。別の日を選んでください。"
      : "The Luggage Bus doesn't run that day (closed every Monday and on extra closing days). Please pick another date.";
  const shut = places.filter((p): p is Place => !!p && placeClosed(p, iso));
  if (shut.length)
    return ja
      ? `${shut.map((p) => p.name.ja).join("・")}はその日が定休日(${shut.map((p) => p.closed.ja).join(" / ")})です。別の日か別の駅を選んでください。`
      : `${shut.map((p) => p.name.en).join(" and ")} ${shut.length > 1 ? "are" : "is"} closed that day (${shut.map((p) => p.closed.en).join(" / ")}). Please pick another date or station.`;
  return null;
}

/** Booking rules (decided 2026-10-10, "for now"). */
export const RULES: { title: T; body: T }[] = [
  {
    title: { en: "Book by 23:00 the day before", ja: "申し込みは前日23時まで" },
    body: {
      en: "Listed stops and inns: pay in the booking box and your booking is confirmed at once, no waiting. An inn that isn't listed, or a stop marked \"by arrangement\": send the request on WhatsApp and we reply with a payment link. We reply on WhatsApp in the morning (until 8:45), 13:30–16:00 and after 21:00 — the rest of the day we're driving.",
      ja: "一覧にある駅・宿なら、予約ボックスで支払った時点で確定します(承認待ちなし)。一覧にない宿や「要相談」の地点はWhatsAppで受け付け、決済リンクをお送りします。WhatsAppに返信できるのは、朝(〜8:45)、13:30〜16:00、21:00以降です。それ以外の時間は運転中です。",
    },
  },
  {
    title: { en: "Pay by 8:00 on the day", ja: "支払いは当日8:00まで" },
    body: {
      en: "Your booking is confirmed once you've paid. Bags without a paid booking are not carried.",
      ja: "支払いが済んだ時点で予約確定です。支払いのない荷物は運びません。",
    },
  },
  {
    title: { en: "Send a photo of each bag", ja: "荷物の写真を送ってください" },
    body: {
      en: "Send us one photo per bag on WhatsApp. We attach a tag to each bag when we collect it.",
      ja: "荷物1個につき1枚、写真をWhatsAppで送ってください。タグは回収のときにこちらで付けます。",
    },
  },
  {
    title: { en: "Bags not at the stop", ja: "荷物が駅にないとき" },
    body: {
      en: "If your bags aren't at the stop when the run passes, we wait up to 5 minutes. After that we leave without them, and there is no refund.",
      ja: "便が通る時刻に荷物が駅にない場合は、最大5分待ちます。それでも来なければ運ばず、返金はありません。",
    },
  },
  {
    title: { en: "Cancellations", ja: "取り消し・返金" },
    body: {
      en: "Full refund if you cancel 3 or more days before; 50% refund if you cancel 1–2 days before; no refund on the day (rain included). If we cancel (bad weather, a breakdown or illness), you get a full refund.",
      ja: "利用日の3日前までの取り消しは全額返金、3日前を過ぎてから前日までは半額返金、当日は返金なし（雨天でも同じ）です。運休・天候・車の故障・体調不良などこちらの都合のときは全額返金します。",
    },
  },
  {
    title: { en: "Bad weather", ja: "悪天候のとき" },
    body: {
      en: "If a snow or heavy-rain warning is in force at 21:00 the day before, we cancel that day's runs and tell you on WhatsApp.",
      ja: "前日21時の時点で雪か大雨の警報が出ていれば運休し、WhatsAppでお知らせします。",
    },
  },
  {
    title: { en: "What we don't carry", ja: "運ばない物" },
    body: {
      en: "Cash, passports, valuables, fragile items, medicines and perishable food.",
      ja: "現金、パスポート、貴重品、壊れ物、医薬品、生もの。",
    },
  },
  // 補償・保険は lb-config の値が入ったときだけ出す(2026-11-20 社長:金額・保険は未決定)。
  ...(LB_COMPENSATION_YEN !== null
    ? [
        {
          title: { en: "Compensation", ja: "補償" },
          body: {
            en: `We compensate up to ${yen(LB_COMPENSATION_YEN)} per bag.${LB_INSURANCE ? ` Insurance: ${LB_INSURANCE.en}.` : ""}`,
            ja: `当社が1個${yen(LB_COMPENSATION_YEN)}まで補償します。${LB_INSURANCE ? `保険:${LB_INSURANCE.ja}。` : ""}`,
          },
        },
      ]
    : []),
  {
    title: { en: "Space on each run", ja: "1便あたりの上限" },
    body: {
      en: "Up to 20 bags and 8 stops per run. Stops marked \"by arrangement\" are limited to one booking a day.",
      ja: "1便につき荷物20個、止まる場所8か所までです。「要相談」の地点は1日1件までです。",
    },
  },
  {
    title: { en: "Season", ja: "運行期間" },
    body: {
      en: "Closed every Monday, and from December to March. We restart around 20 March 2027. The Agematsu stop can't be used from late November to mid-March (approx. 25 Nov–15 Mar), while its tourist office is closed.",
      ja: "毎週月曜と、12〜3月は運休です。2027年3月20日ごろに再開します。上松駅は、観光案内所が休業する11月末〜3月半ば(11/25〜3/15目安)は使えません。",
    },
  },
];

/** Winter break: no runs from 1 Dec to 19 Mar (restart around 20 Mar). */
export const inWinterBreak = (iso: string) => {
  const md = iso.slice(5);
  return md >= "12-01" || md < "03-20";
};
