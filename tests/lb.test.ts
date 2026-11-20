/** ラゲッジバスの料金・範囲・翌日判定・即時予約の単体テスト。
 *  実行: npm test (tsc で .test-build に書き出してから node --test) */
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  LINE,
  OUT_OF_RANGE,
  OTHER_SERVICES,
  FARE_ZONE,
  FORM_POINTS,
  LB_CHOICE_GROUPS,
  STATIONS,
  RULES,
  UNIT_SOUTH,
  UNIT_NORTH,
  unitPrice,
  estimate,
  isNextDay,
  nextIso,
  posOf,
  byArrangement,
  findPoint,
  type AreaKey,
} from "../src/app/luggage-bus";
import { quoteLb } from "../src/app/lb-booking";

const p = posOf;

test("範囲は社長決定(11/19)の11地点で、南から北の順", () => {
  assert.deepEqual(
    LINE.map((a) => a.key),
    ["nakatsugawa", "sakashita", "tadachi", "nagiso", "nojiri", "suhara", "agematsu", "kisofukushima", "miyanokoshi", "yabuhara", "narai"],
  );
});

test("馬籠・妻籠・蘭は範囲外で、予約の選択肢に出ない", () => {
  assert.deepEqual(OUT_OF_RANGE.map((o) => o.key), ["magome", "tsumago", "ran"]);
  const ids = [...FORM_POINTS, ...LB_CHOICE_GROUPS.flatMap((g) => g.points)].map((x) => x.place?.id).filter(Boolean);
  for (const id of ["mugi-house", "fuki-no-mori"]) assert.ok(!ids.includes(id), `${id} は範囲外`);
  assert.ok(!STATIONS.some((s) => (s.area as string) === "ran"));
  assert.deepEqual(OTHER_SERVICES.map((s) => s.url), ["https://magome-luggagetransport.jp/", "https://walklitejapan.com/"]);
});

test("単価:南部内1,500円、北部が絡むと2,000円、未決定の地点はnull", () => {
  assert.equal(UNIT_SOUTH, 1500);
  assert.equal(UNIT_NORTH, 2000);
  assert.equal(unitPrice(p("nagiso"), p("nojiri")), UNIT_SOUTH);
  assert.equal(unitPrice(p("nakatsugawa"), p("nagiso")), UNIT_SOUTH);
  assert.equal(unitPrice(p("sakashita"), p("tadachi")), UNIT_SOUTH);
  assert.equal(unitPrice(p("nagiso"), p("kisofukushima")), UNIT_NORTH);
  assert.equal(unitPrice(p("kisofukushima"), p("nakatsugawa")), UNIT_NORTH);
  assert.equal(unitPrice(p("agematsu"), p("kisofukushima")), UNIT_NORTH);
  for (const k of ["suhara", "miyanokoshi", "yabuhara", "narai"] as AreaKey[]) {
    assert.equal(FARE_ZONE[k], null);
    assert.equal(unitPrice(p("nagiso"), p(k)), null);
    assert.ok(byArrangement(p(k)));
  }
});

test("料金 = 単価 ×(個数 + 1)", () => {
  assert.equal(estimate(p("nagiso"), p("nojiri"), 1)?.total, 3000);
  assert.equal(estimate(p("nagiso"), p("nojiri"), 2)?.total, 4500);
  assert.equal(estimate(p("nagiso"), p("nojiri"), 3)?.total, 6000);
  assert.equal(estimate(p("nakatsugawa"), p("kisofukushima"), 1)?.total, 4000);
  assert.equal(estimate(p("nakatsugawa"), p("kisofukushima"), 3)?.total, 8000);
  // すべての組み合わせで式どおり、内訳の合計も一致
  for (const a of LINE)
    for (const b of LINE)
      for (let n = 1; n <= 8; n++) {
        const e = estimate(a.pos, b.pos, n);
        const u = unitPrice(a.pos, b.pos);
        if (a.pos === b.pos || u === null) {
          assert.equal(e, null);
          continue;
        }
        assert.ok(e);
        assert.equal(e.total, u * (n + 1));
        assert.equal(e.parts.reduce((s, x) => s + x.yen, 0), e.total);
      }
});

test("料金を出さないとき:同じ町・個数0・不明な地点", () => {
  assert.equal(estimate(p("nagiso"), p("nagiso"), 1), null);
  assert.equal(estimate(p("nagiso"), p("nojiri"), 0), null);
  assert.equal(estimate(null, p("nojiri"), 1), null);
  assert.equal(estimate(p("nagiso"), p("nojiri"), 1.5), null);
});

test("翌日判定:南木曽より北 → 田立・坂下・中津川だけ翌日", () => {
  assert.equal(isNextDay(p("nojiri"), p("tadachi")), true);
  assert.equal(isNextDay(p("kisofukushima"), p("nakatsugawa")), true);
  assert.equal(isNextDay(p("narai"), p("sakashita")), true);
  assert.equal(isNextDay(p("nagiso"), p("tadachi")), false);
  assert.equal(isNextDay(p("nagiso"), p("nakatsugawa")), false);
  assert.equal(isNextDay(p("tadachi"), p("kisofukushima")), false);
  assert.equal(isNextDay(p("nojiri"), p("nagiso")), false);
  assert.equal(isNextDay(p("kisofukushima"), p("nojiri")), false);
});

test("翌日の日付", () => {
  assert.equal(nextIso("2027-04-30"), "2027-05-01");
  assert.equal(nextIso("2027-12-31"), "2028-01-01");
  assert.equal(nextIso("2028-02-28"), "2028-02-29");
});

test("中津川駅前(特産館)の預けは既定で選択肢に出ない", () => {
  assert.ok(!FORM_POINTS.some((x) => x.place?.id === "nakatsugawa-info"));
  assert.ok(!STATIONS.some((s) => s.places.some((pl) => pl.id === "nakatsugawa-info")));
});

test("補償の金額が未設定のあいだ、ルールに補償の行が出ない", () => {
  assert.ok(!RULES.some((r) => r.title.en === "Compensation"));
  assert.ok(!JSON.stringify(RULES).includes("30,000"));
  assert.ok(!JSON.stringify(RULES).includes("insur"));
});

/* ---------- quoteLb (即時予約の判定) ---------- */
const NOW = { today: "2027-04-01", tomorrow: "2027-04-02", afterDeadline: false };
const NONE = new Set<string>();
const label = (id: string) => FORM_POINTS.find((x) => x.place?.id === id)!.en;
const base = { name: "Test", date: "2027-04-06", bags: 1 }; // 2027-04-06 は火曜

test("一覧の駅どうしは即時予約、料金はコードの式", () => {
  assert.equal(new Date("2027-04-06T00:00:00").getDay(), 2);
  const q = quoteLb({ ...base, from: label("izumiya"), to: label("kisofukushima-info") }, "en", NOW, NONE);
  assert.equal(q.kind, "instant");
  if (q.kind === "instant") {
    assert.equal(q.total, estimate(p("nagiso"), p("kisofukushima"), 1)!.total);
    assert.equal(q.nextDay, false);
    assert.equal(q.run, "north");
  }
});

test("宿が発着のときは予約名が要る", () => {
  const q1 = quoteLb({ ...base, from: label("waiwai"), to: label("kanoya") }, "en", NOW, NONE);
  assert.equal(q1.kind, "error");
  const q2 = quoteLb({ ...base, from: label("waiwai"), to: label("kanoya"), fromBooking: "A", toBooking: "B" }, "en", NOW, NONE);
  assert.equal(q2.kind, "instant");
  if (q2.kind === "instant") {
    assert.equal(q2.nextDay, true);
    assert.equal(q2.total, 4000);
  }
});

test("要相談の地点・一覧にない宿はWhatsApp(承認)", () => {
  assert.equal(quoteLb({ ...base, from: label("izumiya"), to: label("kinoma"), toBooking: "B" }, "en", NOW, NONE).kind, "approval");
  assert.equal(quoteLb({ ...base, from: label("izumiya"), to: label("narai-station") }, "en", NOW, NONE).kind, "approval");
  const other = LB_CHOICE_GROUPS.find((g) => g.area.key === "tadachi")!.points.at(-1)!;
  assert.equal(other.place, null);
  assert.equal(findPoint(other.en)?.pos, p("tadachi"));
  assert.equal(quoteLb({ ...base, from: label("izumiya"), to: other.en }, "en", NOW, NONE).kind, "approval");
});

test("翌日届けの届く日が運休日(月曜)なら承認に回す", () => {
  // 2027-04-04 は日曜 → 翌日は月曜
  const q = quoteLb(
    { ...base, date: "2027-04-04", from: label("katana"), to: label("kanoya"), toBooking: "B" },
    "en",
    NOW,
    NONE,
  );
  assert.equal(q.kind, "approval");
});
