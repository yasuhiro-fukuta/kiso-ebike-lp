/** Googleマップの短縮リンク(maps.app.goo.gl / goo.gl/maps)の行き先を1回だけ取り、
 *  座標を取り出す。/api/lb-maplink が使う(テストのため fetch を差し替えられる)。
 *
 *  SSRF対策:
 *  - 許可リストのホスト(SHORT_LINK_HOSTS)以外へは取りに行かない。
 *  - リダイレクトは追わない(redirect: "manual")。Location ヘッダーを読むだけ。
 *  - 本文は読まない。タイムアウトは短め(TIMEOUT_MS)。
 *  - 有料APIは使わない。 */
import { shortMapLink, extractLatLng, type LatLng } from "./lb-geo";

export const TIMEOUT_MS = 4000;

export type MapLinkResult =
  | { ok: true; lat: number; lng: number }
  | { ok: false; error: "not-allowed" | "no-redirect" | "no-coords" | "failed" };

type FetchLike = (url: string, init: RequestInit) => Promise<Pick<Response, "status" | "headers" | "body">>;

export async function resolveShortLink(input: string, fetchImpl: FetchLike = fetch): Promise<MapLinkResult> {
  const url = shortMapLink(input);
  if (!url) return { ok: false, error: "not-allowed" };
  try {
    const res = await fetchImpl(url, {
      method: "GET",
      redirect: "manual",
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { "User-Agent": "Mozilla/5.0 (luggage-bus map link check)" },
    });
    // 本文は読まずに捨てる
    try {
      await res.body?.cancel();
    } catch {
      /* 無視 */
    }
    const loc = res.headers.get("location");
    if (res.status < 300 || res.status >= 400 || !loc) return { ok: false, error: "no-redirect" };
    const p: LatLng | null = extractLatLng(loc);
    if (!p) return { ok: false, error: "no-coords" };
    return { ok: true, lat: p.lat, lng: p.lng };
  } catch {
    return { ok: false, error: "failed" };
  }
}
