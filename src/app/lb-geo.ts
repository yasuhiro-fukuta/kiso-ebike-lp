/** ============================================================
 *  ラゲッジバス:「宿・駅の名前」「Googleマップのリンク/座標」から地点を判定する。
 *  有料API(Google Places・Geocoding)は使わない。ブラウザとサーバーの両方で使う。
 *
 *  - 名前:既存の PLACES(宿・預け場所)と12地点の駅・宿場を候補にし、
 *    英語・日本語・かな・ローマ字の揺れを少し吸収して絞り込む。
 *  - 座標:URLから取り出し、12地点の代表座標まで一番近い地点を判定する。
 *    範囲外(馬籠・妻籠・蘭)の代表座標の方が近いとき、または最寄りの地点から
 *    MAX_KM より遠いときは地点を決めない(金額を出さない)。
 *  - 短縮リンク(maps.app.goo.gl・goo.gl/maps)はブラウザでは開けないので、
 *    /api/lb-maplink がリダイレクト先を1回だけ取りに行く(許可リストのホストだけ)。
 *  ============================================================ */

import { LINE, FORM_POINTS, AREA_OTHER_POINTS, OUT_OF_RANGE, type AreaKey, type FormPoint } from "./luggage-bus";

type T = { en: string; ja: string };
export type LatLng = { lat: number; lng: number };

/** 最寄りの地点からこれより遠ければ「対象外」(km)。2026-11-22 社長室の目安。 */
export const MAX_KM = 5;
/** 一覧の宿からこの距離以内なら、その宿を選んだことにする(km)。 */
export const INN_MATCH_KM = 0.15;

/* ---------- 代表座標 ----------
 * 出所:
 *  [repo]  = リポジトリ内の Google マップ短縮リンク(luggage-bus.ts の PLACES の map、
 *            または kashiwaya-lp の柏屋の地図リンク)を開いたときのピン(!3d/!4d)の座標。
 *  [要確認] = リポジトリに無いので OpenStreetMap(Nominatim)の検索結果を置いた。社長が地図で確かめる。
 */
export const AREA_GEO: Record<AreaKey, LatLng & { src: string }> = {
  nakatsugawa: { lat: 35.5011121, lng: 137.5037892, src: "repo: にぎわい特産館(中津川駅前) PLACES.nakatsugawa-info" },
  sakashita: { lat: 35.5746826, lng: 137.5310907, src: "要確認: OSM「坂下駅」" },
  tadachi: { lat: 35.5881746, lng: 137.5491768, src: "要確認: OSM「田立駅」" },
  "nagiso-st": { lat: 35.5984703, lng: 137.607937, src: "repo: カフェイズミヤ(南木曽駅前) PLACES.izumiya" },
  nagiso: { lat: 35.6084929, lng: 137.6114687, src: "repo: 柏屋(kashiwaya-lp の地図リンク)" },
  "nojiri-st": { lat: 35.6720159, lng: 137.6365512, src: "repo: カフェ刀(野尻駅前) PLACES.katana" },
  nojiri: { lat: 35.6696779, lng: 137.6340129, src: "要確認: OSM「野尻宿」" },
  suhara: { lat: 35.6953128, lng: 137.689537, src: "repo: 民宿すはら PLACES.minshuku-suhara" },
  agematsu: { lat: 35.7838508, lng: 137.6935329, src: "repo: 上松町観光情報センター PLACES.agematsu-info" },
  kisofukushima: { lat: 35.8442823, lng: 137.6931053, src: "repo: 木曽福島観光案内所 PLACES.kisofukushima-info" },
  "narai-st": { lat: 35.969107, lng: 137.8155605, src: "repo: 奈良井駅 PLACES.narai-station" },
  narai: { lat: 35.9645503, lng: 137.8104271, src: "要確認: OSM「奈良井宿」" },
};

/** 範囲外(他社のご案内)の代表座標。こちらの方が近ければ範囲外にする。 */
export const OUT_GEO: { key: string; lat: number; lng: number; src: string }[] = [
  { key: "magome", lat: 35.5268445, lng: 137.5677219, src: "要確認: OSM「馬籠宿」" },
  { key: "tsumago", lat: 35.5769907, lng: 137.595421, src: "要確認: OSM「妻籠宿」" },
  { key: "ran", lat: 35.5622229, lng: 137.623437, src: "repo: Mugi House by Nagi Stay(蘭) PLACES.mugi-house" },
  { key: "ran", lat: 35.5663816, lng: 137.6686461, src: "repo: ホテル富貴の森(蘭) PLACES.fuki-no-mori" },
];

/** 一覧の宿の座標(リポジトリ内の地図リンクのピン)。この近くなら、その宿を選ぶ。 */
export const INN_GEO: Record<string, LatLng> = {
  kashiwaya: { lat: 35.6084929, lng: 137.6114687 },
  "minshuku-suhara": { lat: 35.6953128, lng: 137.689537 },
  waiwai: { lat: 35.8466837, lng: 137.6938578 },
};

/* ---------- 距離 ---------- */

export function distanceKm(a: LatLng, b: LatLng) {
  const R = 6371;
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** 地点の座標を Google マップで開く URL(検索URL。APIキー不要)。 */
export const mapsUrl = (p: LatLng) => `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`;

/* ---------- URL・文字から座標を取り出す ---------- */

const okLatLng = (lat: number, lng: number) =>
  Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180 && !(lat === 0 && lng === 0);

const NUM = String.raw`(-?\d{1,3}(?:\.\d+)?)`;

/** Googleマップのリンクや「35.6, 137.6」から座標を取り出す。取れなければ null。
 *  読める形(優先順):
 *   1. .../data=...!3d35.59!4d137.60 (場所のピン)
 *   2. ?q=35.59,137.60 / query= / ll= / center= / destination= / daddr=
 *   3. /place/35.59,137.60 ・ /search/35.59,+137.60 ・ /dir//35.59,137.60
 *   4. /@35.59,137.60,17z (地図の中心)
 *   5. 文字だけの「35.59, 137.60」「35.59 137.60」 */
export function extractLatLng(text: string): LatLng | null {
  if (!text) return null;
  let s = text.trim();
  try {
    s = decodeURIComponent(s.replace(/\+/g, " "));
  } catch {
    /* そのまま */
  }
  const tries: RegExp[] = [
    new RegExp(String.raw`!3d${NUM}!4d${NUM}`),
    new RegExp(String.raw`[?&](?:q|query|ll|sll|center|destination|daddr|saddr)=(?:loc:)?\s*${NUM}\s*,\s*${NUM}`),
    new RegExp(String.raw`/(?:place|search|dir)/(?:[^/]*/)?\s*${NUM}\s*,\s*${NUM}`),
    new RegExp(String.raw`@${NUM},${NUM}`),
    new RegExp(String.raw`^${NUM}\s*[, ]\s*${NUM}$`),
  ];
  for (const re of tries) {
    const m = s.match(re);
    if (m) {
      const lat = Number(m[1]);
      const lng = Number(m[2]);
      if (okLatLng(lat, lng)) return { lat, lng };
    }
  }
  return null;
}

/** 短縮リンクとして取りに行ってよいホスト(これ以外へは取りに行かない=SSRF対策)。 */
export const SHORT_LINK_HOSTS = ["maps.app.goo.gl", "goo.gl"];

/** 短縮リンクなら正規化したURLを返す(許可リストのホスト・https・goo.gl は /maps/ だけ)。違えば null。 */
export function shortMapLink(text: string): string | null {
  let u: URL;
  try {
    u = new URL(text.trim());
  } catch {
    return null;
  }
  if (u.protocol !== "https:" && u.protocol !== "http:") return null;
  if (u.username || u.password || u.port) return null;
  const host = u.hostname.toLowerCase();
  if (!SHORT_LINK_HOSTS.includes(host)) return null;
  if (host === "goo.gl" && !u.pathname.startsWith("/maps/")) return null;
  if (!/^\/[A-Za-z0-9/_-]{3,80}$/.test(u.pathname)) return null;
  return `https://${host}${u.pathname}`;
}

/** 入力が Google マップのリンクらしいか(座標の取り出しを試すか)。 */
export const looksLikeMapInput = (text: string) =>
  /^https?:\/\//i.test(text.trim()) || /^-?\d{1,3}\.\d+\s*[, ]\s*-?\d{1,3}\.\d+$/.test(text.trim());

/* ---------- 座標 → 地点 ---------- */

export type Judge =
  | { kind: "area"; area: AreaKey; km: number; placeId: string | null }
  | { kind: "out"; key: string; km: number }
  | { kind: "far"; km: number };

/** 座標から地点を判定する。 */
export function judgeLatLng(p: LatLng): Judge {
  let best: { area: AreaKey; km: number } | null = null;
  for (const a of LINE) {
    const km = distanceKm(p, AREA_GEO[a.key]);
    if (!best || km < best.km) best = { area: a.key, km };
  }
  let out: { key: string; km: number } | null = null;
  for (const o of OUT_GEO) {
    const km = distanceKm(p, o);
    if (!out || km < out.km) out = { key: o.key, km };
  }
  if (out && best && out.km < best.km && out.km <= MAX_KM) return { kind: "out", key: out.key, km: out.km };
  if (!best || best.km > MAX_KM) return { kind: "far", km: best ? best.km : Infinity };
  // 一覧の宿のすぐ近くなら、その宿(即時予約できる)
  for (const [id, g] of Object.entries(INN_GEO)) {
    if (distanceKm(p, g) <= INN_MATCH_KM) {
      const fp = FORM_POINTS.find((x) => x.place?.id === id);
      if (fp?.area) return { kind: "area", area: fp.area, km: distanceKm(p, AREA_GEO[fp.area]), placeId: id };
    }
  }
  return { kind: "area", area: best.area, km: best.km, placeId: null };
}

/** 地点(と宿)に当たる選択肢。宿の指定が無ければ、その地点の「その他の宿・場所」。 */
export function pointFor(area: AreaKey, placeId: string | null = null): FormPoint {
  if (placeId) {
    const fp = FORM_POINTS.find((x) => x.place?.id === placeId && x.area === area);
    if (fp) return fp;
  }
  return AREA_OTHER_POINTS.find((x) => x.area === area)!;
}

/** 駅の名前で探したとき:その駅の預け場所(宿でない一覧の場所)があればそれ、無ければ「その他の場所」。 */
export function stationPoint(area: AreaKey): FormPoint {
  const fp = FORM_POINTS.find((x) => x.area === area && x.place && !x.place.guestsOnly);
  return fp ?? pointFor(area);
}

/* ---------- 名前で探す ---------- */

/** 比べるための正規化:全角半角・大文字小文字・アクセント・カタカナ/ひらがな・
 *  記号と空白・ローマ字の長音(ou/oo/uu)の揺れを吸収する。 */
export function normName(s: string) {
  let t = s.normalize("NFKC").toLowerCase();
  t = t.normalize("NFD").replace(/[̀-ͯ]/g, "");
  t = t.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
  t = t.normalize("NFC");
  t = t.replace(/[\s\-‐–—_.,'’"・()（）\[\]［］、。:：/]/g, "");
  t = t.replace(/ou/g, "o").replace(/oo/g, "o").replace(/uu/g, "u");
  return t;
}

export type SearchEntry = {
  /** 候補に出す名前 */
  label: T;
  /** 探すときの別名(何語でもよい) */
  keys: string[];
  /** 選んだときの選択肢(範囲外なら null) */
  point: FormPoint | null;
  /** 範囲外のとき OUT_OF_RANGE の key */
  out?: string;
};

/** 地点ごとの別名(駅・宿場・町)。駅の名前は駅の預け場所へ、町の名前は「その他の宿」へ。 */
const AREA_ALIASES: Record<AreaKey, string[]> = {
  nakatsugawa: ["中津川", "中津川駅", "なかつがわ", "Nakatsugawa", "Nakatsugawa Station", "Nakatsugawa eki"],
  sakashita: ["坂下", "坂下駅", "さかした", "Sakashita", "Sakashita Station"],
  tadachi: ["田立", "田立駅", "ただち", "Tadachi", "Tadachi Station"],
  "nagiso-st": ["南木曽駅", "なぎそえき", "Nagiso Station", "Nagiso eki", "三留野", "Midono"],
  nagiso: ["南木曽", "なぎそ", "Nagiso", "読書", "よみかき", "Yomikaki"],
  "nojiri-st": ["野尻駅", "のじりえき", "Nojiri Station", "Nojiri eki"],
  nojiri: ["野尻", "野尻宿", "のじり", "Nojiri", "Nojiri-juku"],
  suhara: ["須原", "須原駅", "須原宿", "すはら", "Suhara", "Suhara Station", "Suhara-juku"],
  agematsu: ["上松", "上松駅", "あげまつ", "Agematsu", "Agematsu Station", "寝覚の床", "Nezame"],
  kisofukushima: ["木曽福島", "木曽福島駅", "福島宿", "きそふくしま", "Kiso-Fukushima", "Kiso Fukushima Station", "Kisofukushima", "木曽町"],
  "narai-st": ["奈良井駅", "ならいえき", "Narai Station", "Narai eki"],
  narai: ["奈良井", "奈良井宿", "ならい", "Narai", "Narai-juku"],
};

/** 一覧の場所・宿の別名。 */
const PLACE_ALIASES: Record<string, string[]> = {
  "nakatsugawa-info": ["にぎわい特産館", "Nigiwai Tokusankan", "中津川観光案内所"],
  izumiya: ["イズミヤ", "いずみや", "Izumiya", "Cafe Izumiya"],
  kashiwaya: ["柏屋", "かしわや", "Kashiwaya", "Kashiwaya Inn"],
  waku: ["Waku", "わく", "Waku Nagiso"],
  yuian: ["結い庵", "ゆいあん", "Yuian", "Yui-an"],
  katana: ["刀", "カフェ刀", "珈琲刀", "かたな", "Katana", "Cafe Katana"],
  kinoma: ["Kinoma", "きのま"],
  "minshuku-suhara": ["民宿すはら", "Minshuku Suhara"],
  "agematsu-info": ["上松町観光情報センター", "Agematsu tourist information"],
  "kisofukushima-info": ["木曽福島観光案内所", "Kiso-Fukushima tourist information"],
  waiwai: ["waiwai", "わいわい", "HOTEL waiwai yakiso", "yakiso"],
  matarihouse: ["matari", "matarihouse", "またり", "マタリハウス", "Matari House"],
  "narai-station": ["奈良井駅荷物預かり所", "Narai Station luggage storage"],
};

const OUT_ALIASES: Record<string, string[]> = {
  magome: ["馬籠", "馬籠宿", "まごめ", "Magome", "Magome-juku"],
  tsumago: ["妻籠", "妻籠宿", "つまご", "Tsumago", "Tsumago-juku"],
  ran: ["蘭", "あららぎ", "Araragi", "Ran", "Mugi House", "富貴の森", "Fuki no Mori"],
};

/** 名前で探す候補の一覧(一覧の宿・場所 → 駅 → 町 → 範囲外)。 */
export const SEARCH_ENTRIES: SearchEntry[] = [
  ...FORM_POINTS.filter((p) => p.place && p.area).map((p) => ({
    label: { en: p.place!.name.en, ja: p.place!.name.ja },
    keys: [p.place!.name.en, p.place!.name.ja, ...(PLACE_ALIASES[p.place!.id] ?? [])],
    point: p,
  })),
  ...LINE.map((a) => ({
    label: a.name,
    keys: [a.name.en, a.name.ja, ...AREA_ALIASES[a.key]],
    point: a.station ? stationPoint(a.key) : pointFor(a.key),
  })),
  ...OUT_OF_RANGE.map((o) => ({ label: o.name, keys: [o.name.en, o.name.ja, ...(OUT_ALIASES[o.key] ?? [])], point: null, out: o.key })),
];

const isAscii = (s: string) => /^[\x00-\x7f]*$/.test(s);

/** 名前で候補を探す(良い順、最大 limit 件)。2文字未満は探さない(漢字1文字は完全一致だけ)。 */
export function searchStops(query: string, limit = 8): SearchEntry[] {
  const q = normName(query);
  if (!q || (q.length < 2 && isAscii(q))) return [];
  const scored: { e: SearchEntry; score: number; i: number }[] = [];
  SEARCH_ENTRIES.forEach((e, i) => {
    let best = Infinity;
    for (const raw of e.keys) {
      const k = normName(raw);
      if (!k) continue;
      let s = Infinity;
      if (k === q) s = 0;
      else if (k.startsWith(q)) s = 1 + (k.length - q.length) / 100;
      else if (q.length >= 2 && k.includes(q)) s = 2 + (k.length - q.length) / 100;
      // 長い入力の中に別名が入っている(例「南木曽駅前のカフェ」)。短いローマ字の別名は誤爆するので除く
      else if (q.includes(k) && (isAscii(k) ? k.length >= 4 : k.length >= 2)) s = 3 - k.length / 100;
      if (s < best) best = s;
    }
    if (best < Infinity) scored.push({ e, score: best, i });
  });
  scored.sort((a, b) => a.score - b.score || a.i - b.i);
  const seen = new Set<string>();
  const res: SearchEntry[] = [];
  for (const s of scored) {
    const id = s.e.point ? s.e.point.en : `out:${s.e.out}`;
    if (seen.has(id + s.e.label.en)) continue;
    seen.add(id + s.e.label.en);
    res.push(s.e);
    if (res.length >= limit) break;
  }
  return res;
}
