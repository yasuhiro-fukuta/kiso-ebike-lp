/** ============================================================
 *  ラゲッジバス:よくある行程のひな型(プリセット)。
 *  範囲チェッカーの上にボタンで出し、選ぶと区間・日付の並び・個数1が入る(お客様が直せる)。
 *  文言と区間はここだけ直せばよい。料金は書かない(料金表 lb-fares.json から引く)。
 *  区間は配送ルート3本・12地点の範囲内だけ。
 *  ※すべて「仮」(2026-11-22 社長室の作業役が作成。社長が決める)。
 *  ============================================================ */
import type { AreaKey, FormPoint } from "./luggage-bus";
import { pointFor } from "./lb-geo";

type T = { en: string; ja: string };

/** 区間の端:地点(area)と、一覧の場所・宿(place = PLACES の id。無ければ「その他の宿・場所」)。 */
export type PresetEnd = { area: AreaKey; place?: string };
/** day = 何日目か(0 = 最初の日)。 */
export type PresetLeg = { from: PresetEnd; to: PresetEnd; day: number };
export type TripPreset = { id: string; title: T; note: T; legs: PresetLeg[] };

export const LB_TRIP_PRESETS: TripPreset[] = [
  // 仮
  {
    id: "nagiso-nojiri",
    title: { en: "Nagiso Station → Nojiri Station", ja: "南木曽駅 → 野尻駅" },
    note: { en: "1 day · walk the valley north", ja: "1日・谷を北へ歩く" },
    legs: [{ from: { area: "nagiso-st", place: "izumiya" }, to: { area: "nojiri-st", place: "katana" }, day: 0 }],
  },
  // 仮
  {
    id: "nakatsugawa-nagiso",
    title: { en: "Nakatsugawa Station → your inn in Nagiso", ja: "中津川駅 → 南木曽の宿" },
    note: { en: "1 day · walk Magome and Tsumago bag-free", ja: "1日・手ぶらで馬籠・妻籠を歩く" },
    legs: [{ from: { area: "nakatsugawa" }, to: { area: "nagiso" }, day: 0 }],
  },
  // 仮
  {
    id: "nagiso-kisofukushima",
    title: { en: "Nagiso → Kiso-Fukushima", ja: "南木曽の宿 → 木曽福島" },
    note: { en: "1 day · go north by train, bags follow", ja: "1日・電車で北へ、荷物は後から" },
    legs: [{ from: { area: "nagiso" }, to: { area: "kisofukushima" }, day: 0 }],
  },
  // 仮
  {
    id: "kisofukushima-narai",
    title: { en: "Kiso-Fukushima → Narai", ja: "木曽福島 → 奈良井" },
    note: { en: "1 day · Narai is by arrangement", ja: "1日・奈良井は要相談" },
    legs: [{ from: { area: "kisofukushima" }, to: { area: "narai" }, day: 0 }],
  },
  // 仮
  {
    id: "nakatsugawa-nagiso-nojiri",
    title: { en: "Nakatsugawa → Nagiso → Nojiri", ja: "中津川駅 → 南木曽 → 野尻" },
    note: { en: "2 days · one booking per day", ja: "2日・1日ずつ予約" },
    legs: [
      { from: { area: "nakatsugawa" }, to: { area: "nagiso" }, day: 0 },
      { from: { area: "nagiso" }, to: { area: "nojiri" }, day: 1 },
    ],
  },
];

/** プリセットの端を、予約の選択肢に変える。 */
export const presetPoint = (e: PresetEnd): FormPoint => pointFor(e.area, e.place ?? null);
