/** 設定値(環境変数)が入ったときだけ補償・保険・中津川駅前の預けが出ることのテスト。 */
import { test } from "node:test";
import assert from "node:assert/strict";

test("設定値が入ると補償・保険・中津川駅前の預けが出る", () => {
  process.env.NEXT_PUBLIC_LB_COMPENSATION_YEN = "12345";
  process.env.NEXT_PUBLIC_LB_INSURANCE_EN = "Test cargo insurance";
  process.env.NEXT_PUBLIC_LB_INSURANCE_JA = "テスト貨物保険";
  process.env.NEXT_PUBLIC_LB_NAKATSUGAWA_DROP = "on";
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const cfg = require("../src/app/lb-config");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const lb = require("../src/app/luggage-bus");
  assert.equal(cfg.LB_COMPENSATION_YEN, 12345);
  assert.deepEqual(cfg.LB_INSURANCE, { en: "Test cargo insurance", ja: "テスト貨物保険" });
  assert.ok(lb.RULES.some((r: { title: { en: string } }) => r.title.en === "Compensation"));
  assert.ok(lb.FORM_POINTS.some((x: { place: { id: string } | null }) => x.place?.id === "nakatsugawa-info"));
});

