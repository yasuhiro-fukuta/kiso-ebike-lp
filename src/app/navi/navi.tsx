"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";

/** ===== 設定 ===== */
const OFF_ROUTE_M = 40; // 道からこれ以上離れたら警告
const AVOID_M = 20; // 走らないでほしい区間にこれ以内まで近づいたら警告
const CONFIRM_FIXES = 2; // 連続で何回外れたら鳴らすか（GPSのぶれ対策）
const BAD_ACCURACY_M = 60; // これより精度が悪い位置では判定しない
const ALERT_EVERY_MS = 4000; // 外れている間の音・振動の間隔
const MAPLIBRE_VER = "4.7.1";
// 地図：OpenFreeMap（無料・APIキー不要・商用可。表示義務: © OpenMapTiles / © OpenStreetMap contributors）
const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";
const DATA_URL = "/navi/routes.json";
const CACHE_KEY = "kisoride-navi-routes-v1";

type LngLat = [number, number];
type Route = { id: number; name: string; color: string; segments: LngLat[][] };
type Data = {
  routes: Route[];
  avoid: { name: string; coords: LngLat[] }[];
  points: { name: string; lng: number; lat: number }[];
};

/** 点 p から折れ線までの最短距離（m）。小さい範囲なので平面近似で十分。 */
function distToLine(p: LngLat, line: LngLat[]): number {
  const kx = 111320 * Math.cos((p[1] * Math.PI) / 180);
  const ky = 110540;
  let best = Infinity;
  for (let i = 0; i < line.length - 1; i++) {
    const ax = (line[i][0] - p[0]) * kx, ay = (line[i][1] - p[1]) * ky;
    const bx = (line[i + 1][0] - p[0]) * kx, by = (line[i + 1][1] - p[1]) * ky;
    const dx = bx - ax, dy = by - ay;
    const L2 = dx * dx + dy * dy;
    const t = L2 ? Math.max(0, Math.min(1, -(ax * dx + ay * dy) / L2)) : 0;
    const d = Math.hypot(ax + t * dx, ay + t * dy);
    if (d < best) best = d;
  }
  if (line.length === 1) best = Math.hypot((line[0][0] - p[0]) * kx, (line[0][1] - p[1]) * ky);
  return best;
}

function loadMapLibre(): Promise<any> {
  const w = window as any;
  if (w.maplibregl) return Promise.resolve(w.maplibregl);
  return new Promise((resolve, reject) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = `https://unpkg.com/maplibre-gl@${MAPLIBRE_VER}/dist/maplibre-gl.css`;
    document.head.appendChild(css);
    const s = document.createElement("script");
    s.src = `https://unpkg.com/maplibre-gl@${MAPLIBRE_VER}/dist/maplibre-gl.js`;
    s.onload = () => resolve(w.maplibregl);
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export default function Navi() {
  const mapDiv = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const marker = useRef<any>(null);
  const audio = useRef<AudioContext | null>(null);
  const wakeLock = useRef<any>(null);
  const offCount = useRef(0);
  const lastAlert = useRef(0);
  const follow = useRef(true);
  const compass = useRef<number | null>(null);
  const gpsHeading = useRef<number | null>(null);
  const lastPos = useRef<LngLat | null>(null);

  const [data, setData] = useState<Data | null>(null);
  const [dataErr, setDataErr] = useState(false);
  const [routeId, setRouteId] = useState<number | "all">("all");
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState<"ok" | "off" | "avoid" | "weak" | "wait">("wait");
  const [distM, setDistM] = useState<number | null>(null);
  const [notes, setNotes] = useState<string[]>([]);
  const [mapFailed, setMapFailed] = useState(false);
  const [following, setFollowing] = useState(true);

  const note = (s: string) => setNotes((n) => (n.includes(s) ? n : [...n, s]));

  /** 道データ：最初に1回読み込んで保持（端末にも控えを置き、電波が無くても使えるように） */
  useEffect(() => {
    const qs = new URLSearchParams(location.search).get("r");
    if (qs !== null && qs !== "" && !isNaN(Number(qs))) setRouteId(Number(qs));
    fetch(DATA_URL)
      .then((r) => r.json())
      .then((d: Data) => {
        setData(d);
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(d)); } catch {}
      })
      .catch(() => {
        try {
          const c = localStorage.getItem(CACHE_KEY);
          if (c) return setData(JSON.parse(c));
        } catch {}
        setDataErr(true);
      });
  }, []);

  const activeLines = useCallback((): LngLat[][] => {
    if (!data) return [];
    const rs = routeId === "all" ? data.routes : data.routes.filter((r) => r.id === routeId);
    return rs.flatMap((r) => r.segments);
  }, [data, routeId]);

  /** 地図の準備 */
  useEffect(() => {
    if (!data || !mapDiv.current || map.current) return;
    let cancelled = false;
    loadMapLibre()
      .then((ml) => {
        if (cancelled || !mapDiv.current) return;
        const m = new ml.Map({
          container: mapDiv.current,
          style: STYLE_URL,
          center: [137.6083, 35.5989], // 南木曽駅
          zoom: 13,
          attributionControl: { compact: true },
        });
        map.current = m;
        m.on("dragstart", () => { follow.current = false; setFollowing(false); });
        m.on("load", () => {
          drawLayers();
          const el = document.createElement("div");
          el.style.cssText =
            "width:22px;height:22px;border-radius:50%;background:#1a73e8;border:3px solid #fff;box-shadow:0 0 0 6px rgba(26,115,232,.25)";
          marker.current = new ml.Marker({ element: el });
        });
      })
      .catch(() => setMapFailed(true));
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const drawLayers = useCallback(() => {
    const m = map.current;
    if (!m || !data || !m.isStyleLoaded()) return;
    const feats = data.routes.map((r) => ({
      type: "Feature",
      properties: { active: routeId === "all" || r.id === routeId ? 1 : 0, color: r.color },
      geometry: { type: "MultiLineString", coordinates: r.segments },
    }));
    const avoid = data.avoid.map((a) => ({
      type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: a.coords },
    }));
    const pts = data.points.map((p) => ({
      type: "Feature", properties: { name: p.name }, geometry: { type: "Point", coordinates: [p.lng, p.lat] },
    }));
    const set = (id: string, fc: any[]) => {
      const src = m.getSource(id);
      const gj = { type: "FeatureCollection", features: fc };
      if (src) src.setData(gj); else m.addSource(id, { type: "geojson", data: gj });
    };
    set("routes", feats); set("avoid", avoid); set("pts", pts);
    if (!m.getLayer("routes-casing")) {
      m.addLayer({ id: "routes-casing", type: "line", source: "routes", filter: ["==", ["get", "active"], 1],
        layout: { "line-cap": "round", "line-join": "round" }, paint: { "line-color": "#ffffff", "line-width": 11 } });
      m.addLayer({ id: "routes-line", type: "line", source: "routes",
        layout: { "line-cap": "round", "line-join": "round" },
        paint: { "line-color": "#0b57d0", "line-width": ["case", ["==", ["get", "active"], 1], 7, 2],
          "line-opacity": ["case", ["==", ["get", "active"], 1], 0.95, 0.35] } });
      m.addLayer({ id: "avoid-line", type: "line", source: "avoid",
        layout: { "line-cap": "round" }, paint: { "line-color": "#d50000", "line-width": 6, "line-dasharray": [1.2, 0.8] } });
      m.addLayer({ id: "pts", type: "circle", source: "pts",
        paint: { "circle-radius": 5, "circle-color": "#5d4037", "circle-stroke-color": "#fff", "circle-stroke-width": 2 } });
    }
    // 選んだコース全体が見えるように
    const lines = activeLines();
    if (lines.length && !started) {
      let w = 180, s = 90, e = -180, n = -90;
      for (const l of lines) for (const [x, y] of l) { w = Math.min(w, x); e = Math.max(e, x); s = Math.min(s, y); n = Math.max(n, y); }
      m.fitBounds([[w, s], [e, n]], { padding: 40, duration: 0 });
    }
  }, [data, routeId, activeLines, started]);

  useEffect(() => { drawLayers(); }, [drawLayers]);

  /** 音（Web Audio。Start を押した時に鳴らせる状態にしておく） */
  const beep = () => {
    const ctx = audio.current;
    if (!ctx) return;
    const t = ctx.currentTime;
    [0, 0.35].forEach((off) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "square"; o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, t + off);
      g.gain.exponentialRampToValueAtTime(0.4, t + off + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + off + 0.25);
      o.connect(g).connect(ctx.destination);
      o.start(t + off); o.stop(t + off + 0.3);
    });
  };
  const alarm = () => {
    const now = Date.now();
    if (now - lastAlert.current < ALERT_EVERY_MS) return;
    lastAlert.current = now;
    beep();
    if ("vibrate" in navigator) navigator.vibrate([400, 150, 400]);
  };

  const heading = (): number | null => gpsHeading.current ?? compass.current;

  const onPosition = (pos: GeolocationPosition) => {
    const p: LngLat = [pos.coords.longitude, pos.coords.latitude];
    lastPos.current = p;
    setNotes((n) => (n.some((x) => x.startsWith("Searching GPS")) ? n.filter((x) => !x.startsWith("Searching GPS")) : n));
    // 進む向き：動いている時はGPSの進行方向、止まっている時はコンパス
    const sp = pos.coords.speed, hd = pos.coords.heading;
    gpsHeading.current = sp != null && sp > 1.5 && hd != null && !isNaN(hd) ? hd : null;

    const m = map.current;
    if (m && marker.current) {
      marker.current.setLngLat(p);
      if (!marker.current._map) marker.current.addTo(m);
      if (follow.current) {
        const h = heading();
        m.easeTo({ center: p, bearing: h ?? 0, zoom: Math.max(m.getZoom(), 16), duration: 600 });
      }
    }

    if (!data) return;
    const d = Math.min(...activeLines().map((l) => distToLine(p, l)));
    setDistM(Math.round(d));
    const nearAvoid = data.avoid.some((a) => distToLine(p, a.coords) < AVOID_M);
    if (pos.coords.accuracy > BAD_ACCURACY_M) { setStatus("weak"); return; }
    if (nearAvoid || d > OFF_ROUTE_M) {
      offCount.current++;
      if (offCount.current >= CONFIRM_FIXES) { setStatus(nearAvoid ? "avoid" : "off"); alarm(); }
    } else {
      offCount.current = 0;
      setStatus("ok");
    }
  };

  const onCompass = (e: any) => {
    let h: number | null = null;
    if (typeof e.webkitCompassHeading === "number") h = e.webkitCompassHeading; // iPhone
    else if (e.absolute && typeof e.alpha === "number") h = 360 - e.alpha; // Android
    if (h == null) return;
    const so = (screen.orientation?.angle ?? 0) as number;
    compass.current = (h + so + 360) % 360;
    const m = map.current;
    if (m && follow.current && gpsHeading.current == null) m.setBearing(compass.current);
  };

  const requestWakeLock = async () => {
    try {
      wakeLock.current = await (navigator as any).wakeLock.request("screen");
    } catch {
      note("Screen may turn off — please keep it on. / 画面を消さないでください");
    }
  };

  /** Start：1回押すだけで 位置情報・向き・画面消灯防止・音 をまとめて許可 */
  const start = async () => {
    setStarted(true);
    try {
      const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
      audio.current = new AC();
      await audio.current!.resume();
      // 無音を一度鳴らして iPhone の音を使える状態にする
      const o = audio.current!.createOscillator(), g = audio.current!.createGain();
      g.gain.value = 0.0001; o.connect(g).connect(audio.current!.destination); o.start(); o.stop(audio.current!.currentTime + 0.05);
    } catch { note("Sound is not available. / 音が出せません"); }

    const DOE = (window as any).DeviceOrientationEvent;
    try {
      if (DOE && typeof DOE.requestPermission === "function") {
        const r = await DOE.requestPermission(); // iPhone はここで許可が要る
        if (r === "granted") window.addEventListener("deviceorientation", onCompass, true);
        else note("Compass not allowed — map shows north up. / 北が上で表示します");
      } else if ("ondeviceorientationabsolute" in window) {
        (window as any).addEventListener("deviceorientationabsolute", onCompass, true);
      } else if (DOE) {
        (window as any).addEventListener("deviceorientation", onCompass, true);
      }
    } catch { note("Compass not available — north up. / 北が上で表示します"); }

    if ("wakeLock" in navigator) {
      await requestWakeLock();
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") requestWakeLock();
      });
    } else note("Please keep the screen on. / 画面を消さないでください（自動で消えない設定に）");

    if (!("vibrate" in navigator)) note("No vibration on this phone — sound and red banner only. / 振動なし（音と赤い帯でお知らせ）");

    if (!navigator.geolocation) { note("Location is not available. / 位置情報が使えません"); return; }
    navigator.geolocation.watchPosition(onPosition, (err) => {
      note(err.code === 1
        ? "Location blocked. Allow it in Settings, then reload. / 設定で位置情報を許可して再読み込み"
        : "Searching GPS… / GPSをさがしています");
    }, { enableHighAccuracy: true, maximumAge: 2000, timeout: 20000 });
  };

  const recenter = () => {
    follow.current = true; setFollowing(true);
    if (lastPos.current && map.current) map.current.easeTo({ center: lastPos.current, bearing: heading() ?? 0, zoom: 16 });
  };

  const banner =
    status === "off" ? { bg: "#d50000", t: "Off route — please return to the marked road", j: "決めた道から外れています。道に戻ってください" }
    : status === "avoid" ? { bg: "#d50000", t: "No-ride section — please turn back", j: "この区間は走らないでください。引き返してください" }
    : status === "weak" ? { bg: "#f9a825", t: "GPS signal is weak", j: "GPSが弱いです" }
    : status === "ok" ? { bg: "#2e7d32", t: "On route", j: "決めた道を走っています" }
    : { bg: "#455a64", t: "Waiting for GPS…", j: "位置をさがしています" };

  const alerting = status === "off" || status === "avoid";

  return (
    <div style={{ position: "fixed", inset: 0, background: "#eef1f4", fontFamily: "system-ui, sans-serif" }}>
      <div ref={mapDiv} style={{ position: "absolute", inset: 0 }} />

      {/* 上の帯（状態） */}
      {started && (
        <div
          role="status"
          aria-live="assertive"
          style={{
            position: "absolute", top: 0, left: 0, right: 0, padding: "14px 16px", color: "#fff",
            background: banner.bg, textAlign: "center", zIndex: 10,
            fontSize: alerting ? 22 : 16, fontWeight: 700, lineHeight: 1.3,
            animation: alerting ? "naviBlink 1s step-start infinite" : undefined,
          }}
        >
          {banner.t}
          <div style={{ fontSize: alerting ? 15 : 12, fontWeight: 500, opacity: 0.95 }}>{banner.j}</div>
          {distM != null && status !== "wait" && (
            <div style={{ fontSize: 12, fontWeight: 400, opacity: 0.9 }}>{distM} m from the marked road / 道まで {distM} m</div>
          )}
        </div>
      )}
      {alerting && (
        <div style={{ position: "absolute", inset: 0, border: "10px solid #d50000", pointerEvents: "none", zIndex: 9 }} />
      )}

      {/* 下：お知らせ・戻るボタン */}
      {started && (
        <div style={{ position: "absolute", left: 12, right: 12, bottom: 28, zIndex: 10, display: "grid", gap: 8 }}>
          {notes.map((n) => (
            <div key={n} style={{ background: "rgba(255,255,255,.95)", borderRadius: 10, padding: "8px 12px", fontSize: 13 }}>{n}</div>
          ))}
          {mapFailed && (
            <div style={{ background: "#fff", borderRadius: 10, padding: "8px 12px", fontSize: 13 }}>
              Map could not load (no signal?). The off-route alert still works. / 地図が読めませんが、外れた時のお知らせは動きます
            </div>
          )}
          {!following && (
            <button onClick={recenter} style={btn("#0b57d0")}>Re-center / 現在地へ</button>
          )}
        </div>
      )}

      {/* Start 画面 */}
      {!started && (
        <div style={{ position: "absolute", inset: 0, zIndex: 20, background: "rgba(16,24,32,.55)", display: "flex", alignItems: "flex-end" }}>
          <div style={{ background: "#fff", width: "100%", borderRadius: "18px 18px 0 0", padding: "20px 16px 28px", maxHeight: "85vh", overflowY: "auto" }}>
            <div style={{ fontSize: 13, color: "#6b5843", fontWeight: 700, letterSpacing: 1 }}>KISO RIDE</div>
            <h1 style={{ fontSize: 22, margin: "4px 0 6px" }}>Stay on the marked roads</h1>
            <p style={{ margin: "0 0 4px", fontSize: 14, color: "#333" }}>
              The blue line is your road. If you leave it, your phone beeps and the screen turns red.
              Red dashed lines: please do not ride there (narrow walking paths, residents).
            </p>
            <p style={{ margin: "0 0 12px", fontSize: 13, color: "#555" }}>
              青い線の道を走ってください。外れると音と赤い画面でお知らせします。赤い点線は走らないでください。
            </p>
            {dataErr && <p style={{ color: "#d50000", fontSize: 14 }}>Could not load the route. Please reload. / 道のデータを読めません。再読み込みしてください</p>}
            {data && (
              <label style={{ display: "block", fontSize: 14, marginBottom: 14 }}>
                Your course / コース
                <select
                  value={String(routeId)}
                  onChange={(e) => setRouteId(e.target.value === "all" ? "all" : Number(e.target.value))}
                  style={{ display: "block", width: "100%", marginTop: 4, padding: 10, fontSize: 16, borderRadius: 8, border: "1px solid #bbb" }}
                >
                  <option value="all">All marked roads / すべての道</option>
                  {data.routes.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
                </select>
              </label>
            )}
            <button onClick={start} disabled={!data} style={{ ...btn("#0b57d0"), fontSize: 22, padding: "16px 0", opacity: data ? 1 : 0.5 }}>
              Start
            </button>
            <p style={{ fontSize: 12, color: "#666", margin: "10px 0 0" }}>
              Tap Start once and allow Location (and Motion on iPhone). Keep this page open while riding.
              Your location stays on your phone — nothing is sent. / 位置情報（iPhoneは「動作と方向」も）を許可してください。位置はどこにも送りません。
            </p>
            <p style={{ fontSize: 12, color: "#b71c1c", margin: "8px 0 0" }}>
              Don&apos;t look at the phone while riding — stop safely first. / 走りながら画面を見ないでください
            </p>
          </div>
        </div>
      )}
      <style>{`@keyframes naviBlink{50%{opacity:.55}} .maplibregl-ctrl-attrib{font-size:10px}`}</style>
    </div>
  );
}

function btn(bg: string): React.CSSProperties {
  return { width: "100%", background: bg, color: "#fff", border: 0, borderRadius: 12, padding: "12px 0", fontSize: 16, fontWeight: 700 };
}
