/** ============================================================
 *  ラゲッジバス(南木曽〜木曽福島の定時便)の共通データ
 *  英語ページ(/luggage-shuttle)と日本語ページ(/ja/luggage-shuttle)で使う。
 *  料金は「配送料(通る区域ごとに1,500円・1予約ごと)+荷物1個1,500円」。
 *  区域は南部(南木曽〜野尻〜須原)と中部(須原〜上松〜木曽福島)(2026-10-13 Yakkun)。
 *  荷物の預け場所と提携宿を「◯◯駅」として STATIONS に載せる。
 *  載っていない場所はWhatsAppで応相談。中津川(南部延伸)・奈良井(北部延伸)も
 *  要相談の駅として載せ、それぞれ+1,500円。宿の駅は宿泊者のみ。
 *  ============================================================ */

type T = { en: string; ja: string };

/** Areas on the route, south to north. */
export const AREAS: { key: string; name: T }[] = [
  { key: "nagiso", name: { en: "Nagiso", ja: "南木曽" } },
  { key: "nojiri", name: { en: "Nojiri", ja: "野尻" } },
  { key: "suhara", name: { en: "Suhara", ja: "須原" } },
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
    map: "https://maps.app.goo.gl/M8cV3g36kLX3gEui9",
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
    name: { en: "Agematsu tourist information office", ja: "上松観光案内所" },
    map: "https://maps.app.goo.gl/Q5qGqWxXsFNxJGzZ9",
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
  "narai-station": { id: "narai-station", name: { en: "Narai Station luggage storage", ja: "奈良井駅荷物預かり所" }, map: "https://maps.app.goo.gl/ESeFTVPg2nDrmjG19", fee: 700, hours: null, closed: UNKNOWN, rule: null },
};

/** "Stations" shown on the page: the luggage drop points and partner inns,
 *  grouped by town. Nakatsugawa and Narai are extensions, by arrangement. */
export const STATIONS: { area: string; name: T; places: Place[] }[] = [
  { area: "nakatsugawa", name: { en: "Nakatsugawa stop (by arrangement)", ja: "中津川駅(要相談)" }, places: [PLACES["nakatsugawa-info"]] },
  { area: "nagiso", name: { en: "Nagiso stop", ja: "南木曽駅" }, places: [PLACES.izumiya, PLACES.kashiwaya, PLACES.waku, PLACES.yuian] },
  { area: "nojiri", name: { en: "Nojiri stop", ja: "野尻駅" }, places: [PLACES.katana] },
  { area: "suhara", name: { en: "Suhara stop", ja: "須原駅" }, places: [PLACES.kinoma] },
  { area: "agematsu", name: { en: "Agematsu stop", ja: "上松駅" }, places: [PLACES["agematsu-info"]] },
  { area: "kisofukushima", name: { en: "Kiso-Fukushima stop", ja: "木曽福島駅" }, places: [PLACES["kisofukushima-info"]] },
  { area: "narai", name: { en: "Narai stop (by arrangement)", ja: "奈良井駅(要相談)" }, places: [PLACES["narai-station"]] },
];

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

/** The daily runs, in time order: one round trip (fixed by Yakkun 2026-10-11). */
export const RUNS: { no: string; time: string; north: boolean; route: T }[] = [
  { no: "①", time: "10:00–11:30", north: true, route: { en: "Nagiso → Nojiri → Suhara → Agematsu → Kiso-Fukushima", ja: "南木曽 → 野尻 → 須原 → 上松 → 木曽福島" } },
  { no: "②", time: "12:00–13:30", north: false, route: { en: "Kiso-Fukushima → Agematsu → Suhara → Nojiri → Nagiso", ja: "木曽福島 → 上松 → 須原 → 野尻 → 南木曽" } },
];

/** When bags arrive, from the traveller's side. */
export const ARRIVALS: { flow: T; when: T; next?: boolean }[] = [
  { flow: { en: "Nagiso → Nojiri / Suhara / Agematsu / Kiso-Fukushima", ja: "南木曽 → 野尻・須原・上松・木曽福島" }, when: { en: "Same day, 10:30–11:30", ja: "当日 10:30〜11:30" } },
  { flow: { en: "Kiso-Fukushima / Agematsu / Suhara / Nojiri → Nagiso", ja: "木曽福島・上松・須原・野尻 → 南木曽" }, when: { en: "Same day, by 13:30", ja: "当日 13:30まで" } },
];

/** Fare = delivery fee (per booking, ¥1,500 for each zone the bags pass through)
 *  + ¥1,500 per bag. Two zones: south (Nagiso–Suhara), central (Suhara–Kiso-Fukushima). */
export const ZONE_FEE = 1500;
export const BAG_FEE = 1500;

export const ZONES: { name: T; route: T }[] = [
  { name: { en: "South zone", ja: "南部" }, route: { en: "Nagiso — Nojiri — Suhara", ja: "南木曽〜野尻〜須原" } },
  { name: { en: "Central zone", ja: "中部" }, route: { en: "Suhara — Agematsu — Kiso-Fukushima", ja: "須原〜上松〜木曽福島" } },
];

/** Extension beyond the route, by arrangement: ¥1,500 each for
 *  Nakatsugawa (south) and Narai (north). */
export const EXTENSION_FEE = 1500;

export const fare = (zones: number, bags: number) => zones * ZONE_FEE + bags * BAG_FEE;
export const yen = (n: number) => `¥${n.toLocaleString("en-US")}`;

/** All fare zones along the line, south to north. Positions:
 *  0 Nakatsugawa, 1 Nagiso, 2 Nojiri, 3 Suhara, 4 Agematsu, 5 Kiso-Fukushima,
 *  6 Narai. A zone's toll (¥1,500) is charged when the bags pass through it. */
const FARE_ZONES: { from: number; to: number; en: string; ja: string }[] = [
  { from: 0, to: 1, en: "South extension", ja: "南部延伸" },
  { from: 1, to: 3, en: "South zone", ja: "南部通行料" },
  { from: 3, to: 5, en: "Central zone", ja: "中部通行料" },
  { from: 5, to: 6, en: "North extension", ja: "北部延伸" },
];

/** Booking-form choices with their position on the line; null = no
 *  automatic estimate. */
const NAGISO = 1;
export const FORM_POINTS: { en: string; ja: string; pos: number | null; place: Place | null }[] = [
  { en: "South extension: Nakatsugawa, Nigiwai Tokusankan (by arrangement)", ja: "南部延伸:中津川駅 にぎわい特産館(要相談)", pos: 0, place: PLACES["nakatsugawa-info"] },
  { en: "Nagiso stop (Cafe Izumiya)", ja: "南木曽駅(カフェイズミヤ)", pos: NAGISO, place: PLACES.izumiya },
  { en: "Nagiso stop (Guesthouse Kashiwaya Inn, guests only)", ja: "南木曽駅(ゲストハウス柏屋Inn ※宿泊者のみ)", pos: NAGISO, place: PLACES.kashiwaya },
  { en: "Nagiso stop (Guesthouse Waku Nagiso, guests only)", ja: "南木曽駅(ゲストハウスWaku南木曽 ※宿泊者のみ)", pos: NAGISO, place: PLACES.waku },
  { en: "Nagiso stop (Guesthouse Yuian, guests only)", ja: "南木曽駅(ゲストハウス結い庵 ※宿泊者のみ)", pos: NAGISO, place: PLACES.yuian },
  { en: "Nojiri stop (Cafe Katana)", ja: "野尻駅(カフェ刀)", pos: 2, place: PLACES.katana },
  { en: "Suhara stop (Guesthouse Kinoma, guests only)", ja: "須原駅(ゲストハウスKinoma ※宿泊者のみ)", pos: 3, place: PLACES.kinoma },
  { en: "Agematsu stop (tourist information office)", ja: "上松駅(上松観光案内所)", pos: 4, place: PLACES["agematsu-info"] },
  { en: "Kiso-Fukushima stop (tourist information office)", ja: "木曽福島駅(木曽福島観光案内所)", pos: 5, place: PLACES["kisofukushima-info"] },
  { en: "North extension: Narai Station luggage storage (by arrangement)", ja: "北部延伸:奈良井駅荷物預かり所(要相談)", pos: 6, place: PLACES["narai-station"] },
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
  { trip: { en: "Nagiso → Nojiri", ja: "南木曽 → 野尻" }, zones: 1, bags: 1 },
  { trip: { en: "Nagiso → Kiso-Fukushima", ja: "南木曽 → 木曽福島" }, zones: 2, bags: 1 },
  { trip: { en: "Nagiso → Kiso-Fukushima", ja: "南木曽 → 木曽福島" }, zones: 2, bags: 2 },
  { trip: { en: "Nakatsugawa (extension) → Kiso-Fukushima", ja: "中津川(延長) → 木曽福島" }, zones: 3, bags: 1 },
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
      en: "We approve requests together every evening after 21:00. We reply on WhatsApp in the morning (until 8:45), 13:30–16:00 and after 21:00 — the rest of the day we're driving.",
      ja: "承認は毎晩21時台にまとめて行います。WhatsAppに返信できるのは、朝(〜8:45)、13:30〜16:00、21:00以降です。それ以外の時間は運転中です。",
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
