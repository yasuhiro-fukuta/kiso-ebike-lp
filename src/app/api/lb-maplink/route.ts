/** Luggage Bus: Googleマップの短縮リンクから座標を取り出す。
 *  POST { url } → { ok: true, lat, lng } / { ok: false, error }。
 *  許可リストのホスト(maps.app.goo.gl・goo.gl/maps)だけ、リダイレクト先を1回だけ取る(lb-maplink.ts)。
 *  有料API・環境変数は使わない。 */
import { NextResponse, type NextRequest } from "next/server";
import { resolveShortLink } from "../../lb-maplink";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const url = String(body?.url ?? "").slice(0, 300);
  const r = await resolveShortLink(url);
  return NextResponse.json(r, { status: r.ok ? 200 : r.error === "not-allowed" ? 400 : 422 });
}
