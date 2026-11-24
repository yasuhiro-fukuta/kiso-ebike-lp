/** ============================================================
 *  ラゲッジバス:「宿・駅の名前」から地点を探す(Googleマップとのつなぎは
 *  2026-11-24 社長決定でやめた。お客様には最寄りのJR駅名からたどってもらう)。
 *  ブラウザとサーバーの両方で使う。
 *  ============================================================ */

import { LINE, FORM_POINTS, AREA_OTHER_POINTS, OUT_OF_RANGE, type AreaKey, type FormPoint } from "./luggage-bus";

type T = { en: string; ja: string };

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
  tsumago: ["妻籠", "妻籠宿", "つまご", "Tsumago", "Tsumago-juku", "蘭", "あららぎ", "Araragi", "Mugi House", "富貴の森", "Fuki no Mori"],
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
