/** ラゲッジバスの料金(料金表の引き当て)・範囲・翌日判定・即時予約の単体テスト。
 *  実行: npm test (tsc で .test-build に書き出してから node --test) */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  LINE,
  OUT_OF_RANGE,
  OTHER_SERVICES,
  FORM_POINTS,
  LB_CHOICE_GROUPS,
  STATIONS,
  RULES,
  RUNS,
  MAX_FARE_BAGS,
  estimate,
  fareYen,
  listFareYen,
  sameTown,
  isNextDay,
  nextIso,
  posOf,
  byArrangement,
  findPoint,
  dateProblem,
  JR_STATIONS,
  jrOf,
  choicesForJr,
  holdNotes,
  HOLD_FEE_RULE,
  NARAI_NOTE,
  PLACES,
  type AreaKey,
} from "../src/app/luggage-bus";
import { quoteLb } from "../src/app/lb-booking";

const p = posOf;

/** The fare table, read straight from the file (not through the code). */
/** [出発, 到着, 定価 1..5個, オープンキャンペーン価格 1..5個] (2026-11-25) */
type Row = [string, string, number[], number[]];
const ROWS: Row[] = JSON.parse(readFileSync(join(__dirname, "..", "..", "src", "app", "lb-fares.json"), "utf8"));
const posByFare = (name: string) => {
  const a = LINE.find((x) => x.fare === name);
  assert.ok(a, `料金表の地点「${name}」がLINEに無い`);
  return a.pos;
};

test("範囲は社長決定(11/21)の12地点で、南から北の順", () => {
  assert.deepEqual(
    LINE.map((a) => a.name.ja),
    ["中津川駅", "坂下", "田立", "南木曽駅", "南木曽", "野尻駅", "野尻", "須原", "上松", "木曽福島", "奈良井駅", "奈良井"],
  );
  assert.deepEqual(
    LINE.map((a) => a.name.en),
    ["Nakatsugawa Station", "Sakashita", "Tadachi", "Nagiso Station", "Nagiso", "Nojiri Station", "Nojiri", "Suhara", "Agematsu", "Kiso-Fukushima", "Narai Station", "Narai"],
  );
  assert.deepEqual(LINE.map((a) => a.pos), LINE.map((_, i) => i));
  // 料金表の地点名と1対1
  assert.deepEqual(LINE.map((a) => a.fare), LINE.map((a) => a.name.ja));
});

test("中津川の宿・宮ノ越・薮原は選択肢と文面に出ない", () => {
  const all = JSON.stringify([FORM_POINTS, LB_CHOICE_GROUPS, STATIONS, RUNS, LINE]);
  for (const w of ["kanoya", "hinataya", "加納屋", "陽屋", "Hinataya", "Kanoya", "宮ノ越", "薮原", "Miyanokoshi", "Yabuhara"])
    assert.ok(!all.includes(w), `${w} が残っている`);
});

test("馬籠・妻籠・蘭は範囲外で、予約の選択肢に出ない", () => {
  assert.deepEqual(OUT_OF_RANGE.map((o) => o.key), ["magome", "tsumago"]);
  const ids = [...FORM_POINTS, ...LB_CHOICE_GROUPS.flatMap((g) => g.points)].map((x) => x.place?.id).filter(Boolean);
  for (const id of ["mugi-house", "fuki-no-mori"]) assert.ok(!ids.includes(id), `${id} は範囲外`);
  assert.ok(!STATIONS.some((s) => (s.area as string) === "ran"));
  assert.deepEqual(OTHER_SERVICES.map((s) => s.url), ["https://magome-luggagetransport.jp/", "https://walklitejapan.com/"]);
});

test("料金表:全126組×1〜5個で、コードの引き当て結果 = lb-fares.json の値", () => {
  assert.equal(ROWS.length, 126);
  let checked = 0;
  for (const [from, to, list, yens] of ROWS) {
    assert.equal(yens.length, 5, `${from}→${to} の個数の列が5でない`);
    assert.equal(list.length, 5, `${from}→${to} の定価の列が5でない`);
    for (let n = 1; n <= 5; n++) {
      const e = estimate(posByFare(from), posByFare(to), n);
      assert.ok(e, `${from}→${to} ${n}個 が金額なし`);
      assert.equal(e.total, yens[n - 1], `${from}→${to} ${n}個`);
      assert.equal(e.list, list[n - 1], `${from}→${to} ${n}個 定価`);
      assert.equal(e.discounted, list[n - 1] > yens[n - 1]);
      assert.equal(fareYen(posByFare(from), posByFare(to), n), yens[n - 1]);
      assert.equal(listFareYen(posByFare(from), posByFare(to), n), list[n - 1]);
      // キャンペーン価格 = 定価×0.8 を千円単位に切り上げ(整数で計算)
      assert.equal(yens[n - 1], Math.ceil((list[n - 1] * 8) / 10000) * 1000, `${from}→${to} ${n}個 CP`);
      assert.ok(yens[n - 1] <= list[n - 1]);
      assert.equal(e.parts.reduce((s, x) => s + x.yen, 0), e.total);
      checked++;
    }
  }
  assert.equal(checked, 126 * 5);
});

test("料金表に無い組 = 同じ町どうし・同一地点だけ。どれも金額なし", () => {
  const inTable = new Set(ROWS.map((r) => `${r[0]}|${r[1]}`));
  const missing: string[] = [];
  for (const a of LINE)
    for (const b of LINE) {
      if (inTable.has(`${a.fare}|${b.fare}`)) continue;
      missing.push(`${a.fare}|${b.fare}`);
      assert.ok(sameTown(a.pos, b.pos), `${a.fare}→${b.fare} は同じ町でないのに表に無い`);
      for (let n = 1; n <= 8; n++) assert.equal(estimate(a.pos, b.pos, n), null, `${a.fare}→${b.fare} ${n}個`);
    }
  assert.equal(missing.length, 12 * 12 - 126);
  for (const [x, y] of [["南木曽", "南木曽駅"], ["南木曽駅", "南木曽"], ["野尻", "野尻駅"], ["野尻駅", "野尻"], ["奈良井", "奈良井駅"], ["奈良井駅", "奈良井"]])
    assert.ok(missing.includes(`${x}|${y}`));
});

test("表に無い個数(0・6個以上・小数)と不明な地点は金額なし", () => {
  assert.equal(MAX_FARE_BAGS, 5);
  for (const n of [0, 6, 7, 8, 1.5, -1]) assert.equal(estimate(p("nagiso-st"), p("nojiri-st"), n), null, `${n}個`);
  assert.equal(estimate(null, p("nojiri"), 1), null);
  assert.equal(estimate(p("nagiso"), null, 1), null);
});

test("要相談の地点は無い(12地点すべて即時確定・料金は表から出る)", () => {
  for (const a of LINE) assert.equal(byArrangement(a.pos), false, a.key);
  assert.ok(estimate(p("nagiso-st"), p("suhara"), 1));
  assert.ok(estimate(p("nagiso-st"), p("narai-st"), 1));
});

test("翌日判定:南木曽より北(野尻駅〜) → 田立・坂下・中津川駅だけ翌日", () => {
  const south: AreaKey[] = ["nakatsugawa", "sakashita", "tadachi"];
  for (const a of LINE)
    for (const b of LINE) {
      const want = a.pos >= p("nojiri-st") && south.includes(b.key);
      assert.equal(isNextDay(a.pos, b.pos), want, `${a.key}→${b.key}`);
    }
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

test("補償は1個10万円・1人15万円、保険は書かない、キャンセルは7日前まで無料・以降100%", () => {
  const all = JSON.stringify(RULES);
  assert.ok(all.includes("¥100,000") && all.includes("¥150,000"));
  assert.ok(all.includes("100,000円") === false);
  assert.ok(!all.includes("30,000"));
  assert.ok(!/insur|保険/i.test(all));
  assert.ok(all.includes("7 days before") && all.includes("7日前"));
  assert.ok(all.includes("100%"));
});

test("運行期間は2027-03-01〜2028-02-29、月曜は運休", () => {
  const NOWX = { today: "2026-11-24", tomorrow: "2026-11-25", afterDeadline: false };
  assert.ok(dateProblem("2027-02-27", [], "en", new Set(), NOWX.today, NOWX.tomorrow, false));
  assert.equal(dateProblem("2027-03-02", [], "en", new Set(), NOWX.today, NOWX.tomorrow, false), null); // 火曜
  assert.ok(dateProblem("2027-03-01", [], "en", new Set(), NOWX.today, NOWX.tomorrow, false)); // 月曜
  assert.equal(dateProblem("2028-02-29", [], "en", new Set(), NOWX.today, NOWX.tomorrow, false), null); // 火曜
  assert.ok(dateProblem("2028-03-01", [], "en", new Set(), NOWX.today, NOWX.tomorrow, false));
  assert.ok(dateProblem("2027-12-15", [], "en", new Set(), NOWX.today, NOWX.tomorrow, false) === null);
});

test("最寄りJR駅から地点をたどれる(9駅で12地点を全部覆う)", () => {
  const areas = JR_STATIONS.flatMap((j) => j.areas).sort();
  assert.deepEqual(areas, LINE.map((a) => a.key).sort());
  for (const j of JR_STATIONS) {
    const ch = choicesForJr(j.key);
    assert.ok(ch.length > 0, j.key);
    for (const c of ch) assert.equal(jrOf(c.en), j.key);
  }
});

/* ---------- quoteLb (即時予約の判定。決済APIもこれで金額を出す) ---------- */
const NOW = { today: "2027-04-01", tomorrow: "2027-04-02", afterDeadline: false };
const NONE = new Set<string>();
const label = (id: string) => FORM_POINTS.find((x) => x.place?.id === id)!.en;
const base = { name: "Test", date: "2027-04-06", bags: 1 }; // 2027-04-06 は火曜

test("一覧の駅どうしは即時予約、金額は料金表の値", () => {
  assert.equal(new Date("2027-04-06T00:00:00").getDay(), 2);
  for (let n = 1; n <= 5; n++) {
    const q = quoteLb({ ...base, bags: n, from: label("izumiya"), to: label("kisofukushima-info") }, "en", NOW, NONE);
    assert.equal(q.kind, "instant");
    if (q.kind === "instant") {
      const row = ROWS.find((r) => r[0] === "南木曽駅" && r[1] === "木曽福島")!;
      assert.equal(q.total, row[3][n - 1]);
      assert.equal(q.nextDay, false);
      assert.equal(q.run, "north");
    }
  }
});

test("6〜8個は即時予約にせずWhatsApp(承認)、9個以上はエラー", () => {
  for (const n of [6, 7, 8])
    assert.equal(quoteLb({ ...base, bags: n, from: label("izumiya"), to: label("kisofukushima-info") }, "en", NOW, NONE).kind, "approval");
  assert.equal(quoteLb({ ...base, bags: 9, from: label("izumiya"), to: label("kisofukushima-info") }, "en", NOW, NONE).kind, "error");
});

test("同じ町どうし(南木曽駅のカフェ ↔ 南木曽の宿)は承らない", () => {
  const q = quoteLb({ ...base, from: label("izumiya"), to: label("kashiwaya"), toBooking: "B" }, "ja", NOW, NONE);
  assert.equal(q.kind, "error");
  if (q.kind === "error") assert.ok(q.message.includes("承っていません"));
});

test("宿が発着のときは予約名が要る", () => {
  const q1 = quoteLb({ ...base, from: label("matarihouse"), to: label("kashiwaya") }, "en", NOW, NONE);
  assert.equal(q1.kind, "error");
  const q2 = quoteLb({ ...base, from: label("matarihouse"), to: label("kashiwaya"), fromBooking: "A", toBooking: "B" }, "en", NOW, NONE);
  assert.equal(q2.kind, "instant");
  if (q2.kind === "instant") {
    assert.equal(q2.nextDay, false);
    assert.equal(q2.total, ROWS.find((r) => r[0] === "木曽福島" && r[1] === "南木曽")![3][0]);
  }
});

test("須原・奈良井・一覧にない宿も即時予約(宿の名前と予約名が要る)", () => {
  assert.equal(quoteLb({ ...base, from: label("izumiya"), to: label("kinoma"), toBooking: "B" }, "en", NOW, NONE).kind, "instant");
  assert.equal(quoteLb({ ...base, from: label("izumiya"), to: label("narai-station") }, "en", NOW, NONE).kind, "instant");
  const other = LB_CHOICE_GROUPS.find((g) => g.area.key === "tadachi")!.points.at(-1)!;
  assert.equal(other.place, null);
  assert.equal(findPoint(other.en)?.pos, p("tadachi"));
  assert.equal(quoteLb({ ...base, from: label("izumiya"), to: other.en }, "en", NOW, NONE).kind, "error");
  assert.equal(quoteLb({ ...base, from: label("izumiya"), to: other.en, toPlace: "Inn X" }, "en", NOW, NONE).kind, "error");
  const q = quoteLb({ ...base, from: label("izumiya"), to: other.en, toPlace: "Inn X", toBooking: "B" }, "en", NOW, NONE);
  assert.equal(q.kind, "instant");
  if (q.kind === "instant") assert.equal(q.total, ROWS.find((r) => r[0] === "南木曽駅" && r[1] === "田立")![3][0]);
});

test("預かり料の注記：預けるときは現地払い、中津川・奈良井・イズミヤの受け取りは無料、奈良井は日またぎ不可(2026-11-25 社長決定)", () => {
  assert.equal(PLACES["nakatsugawa-info"].fee, 700);
  assert.equal(PLACES["narai-station"].fee, 700);
  assert.equal(PLACES.izumiya.fee, 500);
  assert.equal(PLACES.katana.fee, 0);
  assert.match(HOLD_FEE_RULE.ja, /中津川駅700円・奈良井駅700円・南木曽駅前イズミヤ500円・野尻駅前カフェ刀 無料/);
  const pt = (id: string) => FORM_POINTS.find((x) => x.place?.id === id)!;
  // イズミヤで預けて奈良井駅で受け取る：預け500円の注記・受け取り無料・奈良井の注意
  const n1 = holdNotes(pt("izumiya"), pt("narai-station"), "ja");
  assert.equal(n1.length, 3);
  assert.match(n1[0], /¥500/);
  assert.match(n1[1], /奈良井駅荷物預かり所での受け取りは無料/);
  assert.equal(n1[2], NARAI_NOTE.ja);
  // 宿どうし：注記なし
  assert.deepEqual(holdNotes(pt("kashiwaya"), pt("matarihouse"), "en"), []);
  // カフェ刀(0円)で預ける：預かり料の注記なし
  assert.deepEqual(holdNotes(pt("katana"), pt("kashiwaya"), "en"), []);
});

test("宿・駅の一覧スプシ(集配対象＝y)の宿45件が予約の選択肢に出る・waiwaiは外す(2026-11-25)", async () => {
  const { SHEET_INNS } = await import("../src/app/lb-inns");
  assert.equal(SHEET_INNS.length, 45);
  for (const i of SHEET_INNS) {
    const fp = FORM_POINTS.find((x) => x.place?.id === i.id);
    assert.ok(fp, i.name);
    assert.equal(fp!.area, i.area);
    assert.ok(STATIONS.some((s) => s.places.some((pl) => pl.id === i.id)));
  }
  assert.ok(!FORM_POINTS.some((x) => x.place?.id === "waiwai"));
});
