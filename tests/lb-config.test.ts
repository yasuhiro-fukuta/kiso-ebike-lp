/** 補償(固定値)・保険(伏せる)・中津川駅前の預け(環境変数)のテスト。 */
import { test } from "node:test";
import assert from "node:assert/strict";

test("補償は1個10万円・1人15万円、保険は出さない、中津川駅前の預けは設定で出る", () => {
  process.env.NEXT_PUBLIC_LB_INSURANCE_EN = "Test cargo insurance";
  process.env.NEXT_PUBLIC_LB_INSURANCE_JA = "テスト貨物保険";
  process.env.NEXT_PUBLIC_LB_NAKATSUGAWA_DROP = "on";
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const cfg = require("../src/app/lb-config");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const lb = require("../src/app/luggage-bus");
  assert.equal(cfg.LB_COMPENSATION_YEN, 100000);
  assert.equal(cfg.LB_COMPENSATION_PERSON_YEN, 150000);
  assert.equal(cfg.LB_INSURANCE, null);
  assert.ok(lb.RULES.some((r: { title: { en: string } }) => r.title.en === "Compensation"));
  assert.ok(lb.FORM_POINTS.some((x: { place: { id: string } | null }) => x.place?.id === "nakatsugawa-info"));
});

test("中津川駅前の預けが出ているとき:翌日届けの金額は料金表、届く日が月曜なら承認", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const lb = require("../src/app/luggage-bus");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { quoteLb } = require("../src/app/lb-booking");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const rows: [string, string, string, string, number[]][] = require("../src/app/lb-fares.json");
  const label = (id: string) => lb.FORM_POINTS.find((x: { place: { id: string } | null }) => x.place?.id === id).en;
  const NOW = { today: "2027-04-01", tomorrow: "2027-04-02", afterDeadline: false };
  const NONE = new Set<string>();
  const q = quoteLb({ name: "T", date: "2027-04-06", bags: 2, from: label("katana"), to: label("nakatsugawa-info") }, "en", NOW, NONE);
  assert.equal(q.kind, "instant");
  assert.equal(q.nextDay, true);
  assert.equal(q.total, rows.find((r) => r[0] === "野尻駅" && r[1] === "中津川駅")![4][1]);
  // 2027-04-04 は日曜 → 届く日は月曜(運休)
  const q2 = quoteLb({ name: "T", date: "2027-04-04", bags: 1, from: label("katana"), to: label("nakatsugawa-info") }, "en", NOW, NONE);
  assert.equal(q2.kind, "approval");
});
