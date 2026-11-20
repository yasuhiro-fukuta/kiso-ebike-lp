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
  sameTown,
  isNextDay,
  nextIso,
  posOf,
  byArrangement,
  findPoint,
  type AreaKey,
} from "../src/app/luggage-bus";
import { quoteLb } from "../src/app/lb-booking";

const p = posOf;

/** The fare table, read straight from the file (not through the code). */
type Row = [string, string, string, string, number[]];
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
  assert.deepEqual(OUT_OF_RANGE.map((o) => o.key), ["magome", "tsumago", "ran"]);
  const ids = [...FORM_POINTS, ...LB_CHOICE_GROUPS.flatMap((g) => g.points)].map((x) => x.place?.id).filter(Boolean);
  for (const id of ["mugi-house", "fuki-no-mori"]) assert.ok(!ids.includes(id), `${id} は範囲外`);
  assert.ok(!STATIONS.some((s) => (s.area as string) === "ran"));
  assert.deepEqual(OTHER_SERVICES.map((s) => s.url), ["https://magome-luggagetransport.jp/", "https://walklitejapan.com/"]);
});

test("料金表:全126組×1〜5個で、コードの引き当て結果 = lb-fares.json の値", () => {
  assert.equal(ROWS.length, 126);
  let checked = 0;
  for (const [from, to, , , yens] of ROWS) {
    assert.equal(yens.length, 5, `${from}→${to} の個数の列が5でない`);
    for (let n = 1; n <= 5; n++) {
      const e = estimate(posByFare(from), posByFare(to), n);
      assert.ok(e, `${from}→${to} ${n}個 が金額なし`);
      assert.equal(e.total, yens[n - 1], `${from}→${to} ${n}個`);
      assert.equal(fareYen(posByFare(from), posByFare(to), n), yens[n - 1]);
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

test("要相談の地点は須原・奈良井駅・奈良井(料金は表から出る)", () => {
  for (const a of LINE) assert.equal(byArrangement(a.pos), ["suhara", "narai-st", "narai"].includes(a.key), a.key);
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

test("補償の金額が未設定のあいだ、ルールに補償の行が出ない", () => {
  assert.ok(!RULES.some((r) => r.title.en === "Compensation"));
  assert.ok(!JSON.stringify(RULES).includes("30,000"));
  assert.ok(!JSON.stringify(RULES).includes("insur"));
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
      assert.equal(q.total, row[4][n - 1]);
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
  const q1 = quoteLb({ ...base, from: label("waiwai"), to: label("kashiwaya") }, "en", NOW, NONE);
  assert.equal(q1.kind, "error");
  const q2 = quoteLb({ ...base, from: label("waiwai"), to: label("kashiwaya"), fromBooking: "A", toBooking: "B" }, "en", NOW, NONE);
  assert.equal(q2.kind, "instant");
  if (q2.kind === "instant") {
    assert.equal(q2.nextDay, false);
    assert.equal(q2.total, ROWS.find((r) => r[0] === "木曽福島" && r[1] === "南木曽")![4][0]);
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
