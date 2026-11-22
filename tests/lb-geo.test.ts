/** ラゲッジバス:Googleマップのリンク/座標からの地点判定・名前の候補・プリセット・短縮リンクAPIの単体テスト。 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { LINE, fareYen, posOf, findPoint, FORM_POINTS, AREA_OTHER_POINTS } from "../src/app/luggage-bus";
import {
  AREA_GEO,
  OUT_GEO,
  MAX_KM,
  extractLatLng,
  shortMapLink,
  judgeLatLng,
  searchStops,
  normName,
  pointFor,
  distanceKm,
  mapsUrl,
} from "../src/app/lb-geo";
import { LB_TRIP_PRESETS, presetPoint } from "../src/app/lb-presets";
import { resolveShortLink } from "../src/app/lb-maplink";

const near = (a: { lat: number; lng: number } | null, lat: number, lng: number) => {
  assert.ok(a, "座標が取れていない");
  assert.ok(Math.abs(a.lat - lat) < 1e-6 && Math.abs(a.lng - lng) < 1e-6, `${JSON.stringify(a)} != ${lat},${lng}`);
};

test("URLから座標:!3d!4d(ピン)を @(地図の中心)より優先", () => {
  near(
    extractLatLng(
      "https://www.google.com/maps/place/Izumiya+Cafe/@35.5984703,137.6053621,17z/data=!3m1!4b1!4m6!3m5!1s0x601cc79f9308aebd:0x9cbc89b0703965be!8m2!3d35.5984703!4d137.607937!16s",
    ),
    35.5984703,
    137.607937,
  );
});

test("URLから座標:?q= / query= / ll= / %2C", () => {
  near(extractLatLng("https://maps.google.com/?q=35.6720159,137.6365512"), 35.6720159, 137.6365512);
  near(extractLatLng("https://www.google.com/maps/search/?api=1&query=35.8442823%2C137.6931053"), 35.8442823, 137.6931053);
  near(extractLatLng("https://maps.google.com/maps?ll=35.969107,137.8155605&z=16"), 35.969107, 137.8155605);
});

test("URLから座標:/place/緯度,経度 ・ /search/緯度,+経度 ・ @のみ", () => {
  near(extractLatLng("https://www.google.com/maps/place/35.599249,137.608337/data=!4m6"), 35.599249, 137.608337);
  near(extractLatLng("https://www.google.com/maps/search/35.6084929,+137.6114687?entry=tts"), 35.6084929, 137.6114687);
  near(extractLatLng("https://www.google.com/maps/@35.6953128,137.6869567,15z"), 35.6953128, 137.6869567);
});

test("文字だけの座標と、読めない入力", () => {
  near(extractLatLng("35.6084929, 137.6114687"), 35.6084929, 137.6114687);
  near(extractLatLng("35.6084929 137.6114687"), 35.6084929, 137.6114687);
  assert.equal(extractLatLng("https://www.google.com/maps/place/Guesthouse+Waku/data=!4m2!3m1!1s0x601cc7"), null);
  assert.equal(extractLatLng("Kashiwaya"), null);
  assert.equal(extractLatLng("123.4, 999.9"), null);
});

test("代表座標は12地点すべてにある", () => {
  for (const a of LINE) assert.ok(AREA_GEO[a.key], `${a.key} の座標が無い`);
});

test("最寄り地点の判定:各地点の代表座標はその地点になる", () => {
  for (const a of LINE) {
    const j = judgeLatLng(AREA_GEO[a.key]);
    assert.equal(j.kind, "area");
    if (j.kind === "area") assert.equal(j.area, a.key, `${a.key} が ${j.area} と判定された`);
  }
});

test("最寄り地点の判定:柏屋の座標は柏屋(一覧の宿)", () => {
  const j = judgeLatLng({ lat: 35.6084929, lng: 137.6114687 });
  assert.equal(j.kind, "area");
  if (j.kind === "area") {
    assert.equal(j.area, "nagiso");
    assert.equal(j.placeId, "kashiwaya");
    assert.equal(pointFor(j.area, j.placeId).place?.id, "kashiwaya");
  }
  // 少し離れた木曽福島の宿(一覧に無い) → 木曽福島の「その他の宿」
  const k = judgeLatLng({ lat: 35.8405, lng: 137.6905 });
  assert.equal(k.kind, "area");
  if (k.kind === "area") {
    assert.equal(k.area, "kisofukushima");
    assert.equal(pointFor(k.area, k.placeId).place, null);
  }
});

test("範囲外の判定:馬籠・妻籠・蘭は範囲外、遠い場所は対象外", () => {
  for (const o of OUT_GEO) {
    const j = judgeLatLng(o);
    assert.equal(j.kind, "out", `${o.key} が範囲外にならない`);
    if (j.kind === "out") assert.equal(j.key, o.key);
  }
  // 東京駅
  const t = judgeLatLng({ lat: 35.681236, lng: 139.767125 });
  assert.equal(t.kind, "far");
  // 木曽福島から北へ約7km(宮ノ越のあたり。範囲外にした)
  const m = judgeLatLng({ lat: 35.9065, lng: 137.7255 });
  assert.equal(m.kind, "far");
  if (m.kind === "far") assert.ok(m.km > MAX_KM);
});

test("距離とGoogleマップのURL", () => {
  const d = distanceKm(AREA_GEO["nagiso-st"], AREA_GEO.nagiso);
  assert.ok(d > 0.5 && d < 2, `南木曽駅〜南木曽 ${d}km`);
  assert.equal(mapsUrl({ lat: 35.5, lng: 137.5 }), "https://www.google.com/maps/search/?api=1&query=35.5,137.5");
});

test("名前の候補:英語・日本語・かな・ローマ字の揺れ", () => {
  const first = (q: string) => searchStops(q)[0];
  assert.equal(first("kashiwaya")?.point?.place?.id, "kashiwaya");
  assert.equal(first("柏屋")?.point?.place?.id, "kashiwaya");
  assert.equal(first("カシワヤ")?.point?.place?.id, "kashiwaya");
  assert.equal(first("ｋａｓｈｉｗａｙａ")?.point?.place?.id, "kashiwaya");
  assert.equal(first("Nagiso Station")?.point?.area, "nagiso-st");
  assert.equal(first("nagiso")?.point?.area, "nagiso");
  assert.equal(first("南木曽駅")?.point?.area, "nagiso-st");
  assert.equal(first("Kiso Fukushima")?.point?.area, "kisofukushima");
  assert.equal(first("kisofukushima")?.point?.area, "kisofukushima");
  assert.equal(first("narai-juku")?.point?.area, "narai");
  assert.equal(first("奈良井宿")?.point?.area, "narai");
  assert.equal(first("Tsumago")?.out, "tsumago");
  assert.equal(first("まごめ")?.out, "magome");
  assert.equal(first("Waku")?.point?.place?.id, "waku");
  assert.equal(first("南木曽駅前のカフェ")?.point?.area, "nagiso-st");
  assert.deepEqual(searchStops("n"), []);
  assert.equal(normName("Kiso-Fukushima"), normName("kiso fukushima"));
});

test("駅の名前は駅の預け場所、町の名前は「その他の宿」", () => {
  const st = searchStops("Nagiso Station")[0];
  assert.equal(st.point?.place?.id, "izumiya");
  const town = searchStops("Suhara")[0];
  assert.equal(town.point?.place, null);
  assert.equal(town.point?.area, "suhara");
  // どの候補も予約の選択肢として引ける
  for (const q of ["kashiwaya", "nojiri", "narai", "agematsu", "sakashita", "tadachi", "nakatsugawa"]) {
    const h = searchStops(q)[0];
    assert.ok(h?.point, q);
    assert.equal(findPoint(h.point!.en)?.pos, h.point!.pos);
    assert.equal(findPoint(h.point!.ja)?.pos, h.point!.pos);
  }
});

test("プリセット:3〜5本、すべて表に金額のある区間(1個)、選択肢として引ける", () => {
  assert.ok(LB_TRIP_PRESETS.length >= 3 && LB_TRIP_PRESETS.length <= 5);
  for (const p of LB_TRIP_PRESETS) {
    assert.ok(p.legs.length >= 1);
    p.legs.forEach((l, i) => {
      assert.equal(l.day, i, `${p.id}: 日の並び`);
      const yen = fareYen(posOf(l.from.area), posOf(l.to.area), 1);
      assert.ok(typeof yen === "number" && yen > 0, `${p.id}: ${l.from.area}→${l.to.area} に金額が無い`);
      for (const e of [l.from, l.to]) {
        const fp = presetPoint(e);
        assert.ok(FORM_POINTS.includes(fp) || AREA_OTHER_POINTS.includes(fp));
        assert.equal(fp.area, e.area);
        if (e.place) assert.equal(fp.place?.id, e.place, `${p.id}: ${e.place} が一覧に無い`);
        assert.equal(findPoint(fp.ja)?.pos, posOf(e.area));
      }
      if (i > 0) assert.deepEqual(l.from, p.legs[i - 1].to, `${p.id}: 前の日の到着と次の日の出発が違う`);
    });
  }
});

test("短縮リンク:許可リストのホストだけ", () => {
  assert.equal(shortMapLink("https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6"), "https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6");
  assert.equal(shortMapLink("https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6?g_st=ac"), "https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6");
  assert.equal(shortMapLink("https://goo.gl/maps/S6XA5BNduChYeL9S7"), "https://goo.gl/maps/S6XA5BNduChYeL9S7");
  for (const bad of [
    "https://goo.gl/abc123",
    "https://evil.example.com/maps.app.goo.gl/x",
    "https://maps.app.goo.gl.evil.com/abc",
    "https://user:pw@maps.app.goo.gl/abc",
    "https://maps.app.goo.gl:8080/abc",
    "http://169.254.169.254/latest/meta-data",
    "http://localhost:3000/api",
    "file:///etc/passwd",
    "https://www.google.com/maps/place/x",
    "not a url",
  ])
    assert.equal(shortMapLink(bad), null, bad);
});

test("短縮リンクAPI:許可リスト外は取りに行かない。許可ホストはリダイレクト先から座標", async () => {
  const calls: string[] = [];
  const fake = async (url: string, init: RequestInit) => {
    calls.push(url);
    assert.equal(init.redirect, "manual");
    return {
      status: 302,
      headers: new Headers({
        location: "https://www.google.com/maps/place/x/@35.1,137.1,17z/data=!8m2!3d35.6720159!4d137.6365512",
      }),
      body: null,
    };
  };
  const bad = await resolveShortLink("http://169.254.169.254/latest/meta-data", fake);
  assert.deepEqual(bad, { ok: false, error: "not-allowed" });
  const bad2 = await resolveShortLink("https://example.com/maps/abc", fake);
  assert.deepEqual(bad2, { ok: false, error: "not-allowed" });
  assert.equal(calls.length, 0, "許可リスト外へ取りに行った");
  const ok = await resolveShortLink("https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA", fake);
  assert.deepEqual(ok, { ok: true, lat: 35.6720159, lng: 137.6365512 });
  assert.deepEqual(calls, ["https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA"]);
  // 座標の無い行き先・リダイレクトでない応答
  const noCoords = await resolveShortLink("https://maps.app.goo.gl/PdnuaBaziu99LA5i6", async () => ({
    status: 302,
    headers: new Headers({ location: "https://www.google.com/maps/place/guesthouse+waku/data=!4m2!3m1!1s0x601cc7" }),
    body: null,
  }));
  assert.deepEqual(noCoords, { ok: false, error: "no-coords" });
  const noRedirect = await resolveShortLink("https://maps.app.goo.gl/abcdef", async () => ({ status: 200, headers: new Headers(), body: null }));
  assert.deepEqual(noRedirect, { ok: false, error: "no-redirect" });
  const failed = await resolveShortLink("https://maps.app.goo.gl/abcdef", async () => {
    throw new Error("timeout");
  });
  assert.deepEqual(failed, { ok: false, error: "failed" });
});
