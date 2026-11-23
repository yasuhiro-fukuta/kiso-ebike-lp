#!/usr/bin/env python3
"""Googleマイマップ(KML) → /navi 用の道データ public/navi/routes.json を作る。

使い方:
  curl -L -o route.kml "https://www.google.com/maps/d/kml?mid=1UdxxoxfvuLwGjvlmiEC3vyAbExP95b0&forcekml=1"
  python3 scripts/kml-to-navi.py route.kml > public/navi/routes.json

ルール:
  - レイヤ（フォルダ）ごと、または「original path」レイヤ内の同名の線ごとに1コースにまとめる。
  - 名前（線またはレイヤ）に NO RIDE / AVOID / 走行禁止 / 通行禁止 を含む線は「走らないでほしい区間」(赤)。
  - AVOID_NAMES に書いた名前も赤にする（マイマップ側で直すまでの仮）。
"""
import sys, json, math, re
import xml.etree.ElementTree as ET

NS = {"k": "http://www.opengis.net/kml/2.2"}
AVOID_RE = re.compile(r"no\s*ride|avoid|走行禁止|通行禁止", re.I)
# 仮：歩行者の多い中山道の歩道は自転車で走らない（社長がマイマップで確定するまでの仮置き）
AVOID_NAMES = {"Accurate Nakasendo Walkroute"}
SKIP_FOLDERS = {"無題のレイヤ"}
# 表示名の手直し（長い・無題の名前）
NAME_FIX = {
    "ライン 28": "Morning round",
    "日本、〒508-0006 岐阜県中津川市落合落合川駅 から 岐阜県中津川市太田町２丁目１ 中津川駅 へのルート": "Ochiai → Naegi → Iwamura → Nakatsugawa",
}
TOL_M = 4.0  # 間引きの許容誤差（m）


def parse_coords(text):
    out = []
    for tok in text.split():
        p = tok.split(",")
        out.append([round(float(p[0]), 6), round(float(p[1]), 6)])
    return out


def xy(p, lat0):
    return (p[0] * 111320 * math.cos(math.radians(lat0)), p[1] * 110540)


def rdp(pts, tol):
    if len(pts) < 3:
        return pts
    lat0 = pts[0][1]
    P = [xy(p, lat0) for p in pts]
    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        a, b = stack.pop()
        ax, ay = P[a]; bx, by = P[b]
        dx, dy = bx - ax, by - ay
        L2 = dx * dx + dy * dy or 1e-9
        best, bi = -1, -1
        for i in range(a + 1, b):
            px, py = P[i]
            t = max(0, min(1, ((px - ax) * dx + (py - ay) * dy) / L2))
            d = math.hypot(px - ax - t * dx, py - ay - t * dy)
            if d > best:
                best, bi = d, i
        if best > tol:
            keep[bi] = True
            stack += [(a, bi), (bi, b)]
    return [p for p, k in zip(pts, keep) if k]


def color_of(style):
    m = re.search(r"line-([0-9A-Fa-f]{6})", style or "")
    return "#" + m.group(1) if m else "#1267FF"


def main(path):
    root = ET.parse(path).getroot()
    routes, avoid, points = {}, [], []
    for f in root.iter("{%s}Folder" % NS["k"]):
        fname = (f.findtext("k:name", namespaces=NS) or "").strip()
        if fname in SKIP_FOLDERS:
            continue
        per_line = fname == "original path"
        fname = NAME_FIX.get(fname, fname)
        for pm in f.findall("k:Placemark", NS):
            name = (pm.findtext("k:name", namespaces=NS) or "").strip()
            name = NAME_FIX.get(name, name)
            style = pm.findtext("k:styleUrl", namespaces=NS)
            ls = pm.find(".//k:LineString/k:coordinates", NS)
            pt = pm.find(".//k:Point/k:coordinates", NS)
            if ls is not None:
                seg = rdp(parse_coords(ls.text), TOL_M)
                if AVOID_RE.search(name) or AVOID_RE.search(fname) or name in AVOID_NAMES:
                    avoid.append({"name": name, "coords": seg})
                    continue
                key = name if per_line else fname
                r = routes.setdefault(key, {"name": key, "color": color_of(style), "segments": []})
                r["segments"].append(seg)
            elif pt is not None:
                c = parse_coords(pt.text)[0]
                label = re.sub(r"^(日本、)?(〒[\d-]+ )?(長野県|岐阜県)\S*?(南木曽町|大桑村|中津川市|恵那市)", "", name).strip() or name
                points.append({"name": label, "lng": c[0], "lat": c[1], "route": None if per_line else fname})
    # 同じ地点の重複を除く
    seen, uniq = set(), []
    for p in points:
        k = (p["name"], round(p["lng"], 4), round(p["lat"], 4))
        if k not in seen:
            seen.add(k); uniq.append(p)
    out = {
        "source": "Google My Maps mid=1UdxxoxfvuLwGjvlmiEC3vyAbExP95b0",
        "routes": [dict(r, id=i) for i, r in enumerate(routes.values())],
        "avoid": avoid,
        "points": uniq,
    }
    json.dump(out, sys.stdout, ensure_ascii=False, separators=(",", ":"))


if __name__ == "__main__":
    main(sys.argv[1])
