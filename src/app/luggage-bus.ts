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

/** A place where bags change hands. `fee` = luggage-holding fee per bag,
 *  paid on the spot (null = still being checked). `rule` = known closures used
 *  by the booking form's date check (null = not known yet). Closure info for
 *  the tourist offices comes from tourism sites and is approximate. */
export type Place = {
  id: string;
  name: T;
  map: string | null;
  fee: number | null;
  hours: T | null;
  closed: T;
  rule: { weekdays: number[]; periods: [string, string][] } | null;
};

const UNKNOWN: T = { en: "Being checked", ja: "確認中" };
const YEAR_END: [string, string] = ["12-29", "01-03"];

export const PLACES: Record<string, Place> = {
  "nakatsugawa-info": {
    id: "nakatsugawa-info",
    name: { en: "Nakatsugawa tourist information office", ja: "中津川観光案内所" },
    map: null,
    fee: null,
    hours: { en: "8:30–18:00", ja: "8:30〜18:00" },
    closed: { en: "New Year holidays (approx. Dec 29–Jan 3)", ja: "年末年始(12/29〜1/3目安)" },
    rule: { weekdays: [], periods: [YEAR_END] },
  },
  "magome-info": {
    id: "magome-info",
    name: { en: "Magome tourist information office", ja: "馬籠観光案内所" },
    map: null,
    fee: null,
    hours: { en: "8:30–17:00 (winter 9:00–17:00)", ja: "8:30〜17:00(冬は9:00〜17:00)" },
    closed: { en: "New Year holidays (approx. Dec 29–Jan 3)", ja: "年末年始(12/29〜1/3目安)" },
    rule: { weekdays: [], periods: [YEAR_END] },
  },
  "tsumago-info": {
    id: "tsumago-info",
    name: { en: "Tsumago tourist information office", ja: "妻籠観光案内所" },
    map: null,
    fee: null,
    hours: { en: "8:30–17:00", ja: "8:30〜17:00" },
    closed: UNKNOWN,
    rule: null,
  },
  izumiya: {
    id: "izumiya",
    name: { en: "Cafe Izumiya, in front of Nagiso Station", ja: "カフェイズミヤ(南木曽駅前)" },
    map: "https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6",
    fee: 500,
    hours: null,
    closed: UNKNOWN,
    rule: null,
  },
  kashiwaya: {
    id: "kashiwaya",
    name: { en: "Guesthouse Kashiwaya Inn", ja: "ゲストハウス柏屋Inn" },
    map: null,
    fee: 0,
    hours: null,
    closed: UNKNOWN,
    rule: null,
  },
  waku: {
    id: "waku",
    name: { en: "Guesthouse Waku Nagiso", ja: "ゲストハウスWaku南木曽" },
    map: "https://maps.app.goo.gl/PdnuaBaziu99LA5i6",
    fee: 0,
    hours: null,
    closed: UNKNOWN,
    rule: null,
  },
  yuian: {
    id: "yuian",
    name: { en: "Guesthouse Yuian", ja: "ゲストハウス結い庵" },
    map: null,
    fee: 0,
    hours: null,
    closed: UNKNOWN,
    rule: null,
  },
  katana: {
    id: "katana",
    name: { en: "Cafe Katana, in front of Nojiri Station", ja: "カフェ刀(野尻駅前)" },
    map: "https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA",
    fee: 0,
    hours: null,
    closed: UNKNOWN,
    rule: null,
  },
  "agematsu-info": {
    id: "agematsu-info",
    name: { en: "Agematsu tourist information office", ja: "上松観光案内所" },
    map: null,
    fee: null,
    hours: { en: "9:00–17:00", ja: "9:00〜17:00" },
    closed: {
      en: "Closed late November to early April (approx. Nov 21–Apr 10); open daily in season",
      ja: "11月下旬〜4月上旬は休業(11/21〜4/10目安)。期間中は無休",
    },
    rule: { weekdays: [], periods: [["11-21", "04-10"]] },
  },
  "kisofukushima-info": {
    id: "kisofukushima-info",
    name: { en: "Kiso-Fukushima tourist information office", ja: "木曽福島観光案内所" },
    map: null,
    fee: null,
    hours: { en: "8:30–17:30", ja: "8:30〜17:30" },
    closed: { en: "Open daily (to be confirmed)", ja: "無休(要確認)" },
    rule: { weekdays: [], periods: [] },
  },
  "ena-info": { id: "ena-info", name: { en: "Ena tourist information office", ja: "恵那観光案内所" }, map: null, fee: null, hours: null, closed: UNKNOWN, rule: null },
  "narai-info": { id: "narai-info", name: { en: "Narai tourist information office", ja: "奈良井観光案内所" }, map: null, fee: null, hours: null, closed: UNKNOWN, rule: null },
  "matsumoto-info": { id: "matsumoto-info", name: { en: "Matsumoto tourist information office", ja: "松本観光案内所" }, map: null, fee: null, hours: null, closed: UNKNOWN, rule: null },
};

/** "Stations" shown on the page: the luggage drop points and partner inns,
 *  grouped by town. Ena, Narai and Matsumoto are booking-form choices only. */
export const STATIONS: { area: string; name: T; places: Place[] }[] = [
  { area: "nakatsugawa", name: { en: "Nakatsugawa stop", ja: "中津川駅" }, places: [PLACES["nakatsugawa-info"]] },
  { area: "magome", name: { en: "Magome stop", ja: "馬籠駅" }, places: [PLACES["magome-info"]] },
  { area: "tsumago", name: { en: "Tsumago stop", ja: "妻籠駅" }, places: [PLACES["tsumago-info"]] },
  { area: "nagiso", name: { en: "Nagiso stop", ja: "南木曽駅" }, places: [PLACES.izumiya, PLACES.kashiwaya, PLACES.waku, PLACES.yuian] },
  { area: "nojiri", name: { en: "Nojiri stop", ja: "野尻駅" }, places: [PLACES.katana] },
  { area: "agematsu", name: { en: "Agematsu stop", ja: "上松駅" }, places: [PLACES["agematsu-info"]] },
  { area: "kisofukushima", name: { en: "Kiso-Fukushima stop", ja: "木曽福島駅" }, places: [PLACES["kisofukushima-info"]] },
];

export const feeText = (fee: number | null, lang: "en" | "ja") =>
  fee === null ? UNKNOWN[lang] : fee === 0 ? (lang === "ja" ? "無料" : "Free") : yen(fee);

/** Is the place known to be closed on this date (ISO yyyy-mm-dd)? */
export function placeClosed(place: Place, iso: string) {
  if (!place.rule || !iso) return false;
  const d = new Date(`${iso}T00:00:00`);
  if (place.rule.weekdays.includes(d.getDay())) return true;
  const md = iso.slice(5);
  return place.rule.periods.some(([a, b]) => (a <= b ? md >= a && md <= b : md >= a || md <= b));
}

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

/** Extension beyond the route, by arrangement: ¥1,500 for each further
 *  zone (Ena side, Narai, Matsumoto). Shown on the page only in general terms;
 *  the extension stations appear only as booking-form choices. */
export const EXTENSION_FEE = 1500;

export const fare = (zones: number, bags: number) => zones * ZONE_FEE + bags * BAG_FEE;
export const yen = (n: number) => `¥${n.toLocaleString("en-US")}`;

/** All fare zones along the line, south to north. Positions:
 *  0 Ena, 1 Nakatsugawa, 2 Magome, 3 Tsumago, 4 Nagiso, 5 Nojiri,
 *  6 Agematsu, 7 Kiso-Fukushima, 8 Narai, 9 Matsumoto.
 *  A zone's toll (¥1,500) is charged when the bags pass through it. */
const FARE_ZONES: { from: number; to: number; en: string; ja: string }[] = [
  { from: 0, to: 1, en: "South extension zone", ja: "延伸南部通行料" },
  { from: 1, to: 4, en: "South zone", ja: "南部通行料" },
  { from: 4, to: 7, en: "Central zone", ja: "中部通行料" },
  { from: 7, to: 8, en: "North zone", ja: "北部通行料" },
  { from: 8, to: 9, en: "North extension zone", ja: "延伸北部通行料" },
];

/** Booking-form choices with their position on the line; null = no
 *  automatic estimate. Ena, Narai and Matsumoto are form-only (not listed
 *  as stations on the page). */
const NAGISO = 4;
export const FORM_POINTS: { en: string; ja: string; pos: number | null; place: Place | null }[] = [
  { en: "Ena tourist information office", ja: "恵那観光案内所", pos: 0, place: PLACES["ena-info"] },
  { en: "Nakatsugawa stop (tourist information office)", ja: "中津川駅(中津川観光案内所)", pos: 1, place: PLACES["nakatsugawa-info"] },
  { en: "Magome stop (tourist information office)", ja: "馬籠駅(馬籠観光案内所)", pos: 2, place: PLACES["magome-info"] },
  { en: "Tsumago stop (tourist information office)", ja: "妻籠駅(妻籠観光案内所)", pos: 3, place: PLACES["tsumago-info"] },
  { en: "Nagiso stop (Cafe Izumiya)", ja: "南木曽駅(カフェイズミヤ)", pos: NAGISO, place: PLACES.izumiya },
  { en: "Nagiso stop (Guesthouse Kashiwaya Inn)", ja: "南木曽駅(ゲストハウス柏屋Inn)", pos: NAGISO, place: PLACES.kashiwaya },
  { en: "Nagiso stop (Guesthouse Waku Nagiso)", ja: "南木曽駅(ゲストハウスWaku南木曽)", pos: NAGISO, place: PLACES.waku },
  { en: "Nagiso stop (Guesthouse Yuian)", ja: "南木曽駅(ゲストハウス結い庵)", pos: NAGISO, place: PLACES.yuian },
  { en: "Nojiri stop (Cafe Katana)", ja: "野尻駅(カフェ刀)", pos: 5, place: PLACES.katana },
  { en: "Agematsu stop (tourist information office)", ja: "上松駅(上松観光案内所)", pos: 6, place: PLACES["agematsu-info"] },
  { en: "Kiso-Fukushima stop (tourist information office)", ja: "木曽福島駅(木曽福島観光案内所)", pos: 7, place: PLACES["kisofukushima-info"] },
  { en: "Narai tourist information office", ja: "奈良井観光案内所", pos: 8, place: PLACES["narai-info"] },
  { en: "Matsumoto tourist information office (not taking bookings yet)", ja: "松本観光案内所(当面受付なし)", pos: 9, place: PLACES["matsumoto-info"] },
  { en: "Another inn or place (details in chat)", ja: "その他の宿・場所(チャットで相談)", pos: null, place: null },
];

/** Estimated fare: ¥1,500 for each zone passed + ¥1,500 per bag. null when
 *  it can't be worked out (unknown place, or start and end in one town). */
export function estimate(from: number | null, to: number | null, bags: number) {
  if (from === null || to === null || from === to || bags < 1) return null;
  const lo = Math.min(from, to);
  const hi = Math.max(from, to);
  const parts: { en: string; ja: string; yen: number }[] = FARE_ZONES.filter(
    (z) => lo < z.to && hi > z.from,
  ).map((z) => ({ en: z.en, ja: z.ja, yen: ZONE_FEE }));
  parts.push({ en: `${bags} bag${bags > 1 ? "s" : ""}`, ja: `荷物${bags}個`, yen: BAG_FEE * bags });
  return { total: parts.reduce((n, p) => n + p.yen, 0), parts };
}

/** Worked examples shown on the page. */
export const EXAMPLES: { trip: T; zones: number; bags: number }[] = [
  { trip: { en: "Magome → Kiso-Fukushima", ja: "馬籠 → 木曽福島" }, zones: 2, bags: 1 },
  { trip: { en: "Magome → Kiso-Fukushima", ja: "馬籠 → 木曽福島" }, zones: 2, bags: 2 },
  { trip: { en: "Nagiso → Nojiri", ja: "南木曽 → 野尻" }, zones: 1, bags: 1 },
  { trip: { en: "Nakatsugawa → Tsumago", ja: "中津川 → 妻籠" }, zones: 1, bags: 3 },
];

/** Booking-date check for the form: requests close at 21:00 the day before
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
      ? "申し込みは前日21時までです。明日以降の日付を選んでください。"
      : "Requests close at 21:00 the day before. Please choose tomorrow or later.";
  if (iso === tomorrow && afterDeadline)
    return ja
      ? "明日の分の申し込みは締め切りました(前日21時まで)。明後日以降の日付を選んでください。"
      : "Requests for tomorrow closed at 21:00. Please choose the day after tomorrow or later.";
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
    title: { en: "Request by 21:00 the day before", ja: "申し込みは前日21時まで" },
    body: {
      en: "We approve requests together every evening after 21:00. We reply on WhatsApp in the morning (until 8:45), 15:00–16:00 and after 21:00 — the rest of the day we're driving.",
      ja: "承認は毎晩21時台にまとめて行います。WhatsAppに返信できるのは、朝(〜8:45)、15:00〜16:00、21:00以降です。それ以外の時間は運転中です。",
    },
  },
  {
    title: { en: "Pay by 8:00 on the day", ja: "支払いは当日8:00まで" },
    body: {
      en: "Your booking is confirmed once you've paid through the link we send. Bags without a paid booking are not carried.",
      ja: "お送りする決済リンクで支払いが済んだ時点で予約確定です。支払いのない荷物は運びません。",
    },
  },
  {
    title: { en: "Label your bags", ja: "荷物に名札を" },
    body: {
      en: "Attach a paper tag to each bag with your booking name and destination. We explain how in the approval message.",
      ja: "荷物ごとに、予約名と行き先を書いた紙を付けてください。書き方は承認メッセージでご案内します。",
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
      en: "Full refund if you cancel by 21:00 the day before; no refund after that. If we cancel (bad weather, a breakdown or illness), you get a full refund.",
      ja: "前日21時までの取り消しは全額返金、それ以降は返金なしです。運休・天候・車の故障・体調不良などこちらの都合のときは全額返金します。",
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
  {
    title: { en: "Compensation", ja: "補償" },
    body: {
      en: "Up to ¥30,000 per bag, covered by cargo insurance.",
      ja: "1個3万円まで。貨物保険に入っています。",
    },
  },
  {
    title: { en: "Space on each run", ja: "1便あたりの上限" },
    body: {
      en: "Up to 20 bags and 8 stops per run. Trips beyond the route are limited to one a day.",
      ja: "1便につき荷物20個、止まる場所8か所までです。区間外への延長は1日1件までです。",
    },
  },
  {
    title: { en: "Season", ja: "運行期間" },
    body: {
      en: "Closed every Monday, and from December to March. We restart around 20 March 2027. The Agematsu stop can't be used from late November to early April (approx. 21 Nov–10 Apr), while its tourist office is closed.",
      ja: "毎週月曜と、12〜3月は運休です。2027年3月20日ごろに再開します。上松駅は、観光案内所が休業する11月下旬〜4月上旬(11/21〜4/10目安)は使えません。",
    },
  },
];

/** Winter break: no runs from 1 Dec to 19 Mar (restart around 20 Mar). */
export const inWinterBreak = (iso: string) => {
  const md = iso.slice(5);
  return md >= "12-01" || md < "03-20";
};
