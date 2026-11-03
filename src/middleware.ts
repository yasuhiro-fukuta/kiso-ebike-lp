import { NextResponse, type NextRequest } from "next/server";

const LB_HOSTS = new Set(["luggagebusnakasendo.com", "www.luggagebusnakasendo.com"]);
const LB_ORIGIN = "https://luggagebusnakasendo.com";
const EBIKE = "https://nakasendo-ebike.com";

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").toLowerCase().split(":")[0];
  const { pathname, search } = req.nextUrl;

  if (LB_HOSTS.has(host)) {
    if (host.startsWith("www.")) {
      return NextResponse.redirect(`${LB_ORIGIN}${pathname}${search}`, 308);
    }
    if (pathname === "/lb" || pathname.startsWith("/lb/")) {
      const rest = pathname.slice(3) || "/";
      return NextResponse.redirect(`${LB_ORIGIN}${rest}${search}`, 308);
    }
    const map: Record<string, string> = {
      "/": "/lb",
      "/ja": "/lb/ja",
      "/sitemap.xml": "/lb/sitemap.xml",
      "/robots.txt": "/lb/robots.txt",
    };
    const target = map[pathname];
    if (target) {
      const url = req.nextUrl.clone();
      url.pathname = target;
      return NextResponse.rewrite(url);
    }
    // Anything else belongs to the main e-bike site.
    return NextResponse.redirect(`${EBIKE}${pathname}${search}`, 307);
  }

  // Production e-bike host: /lb is only for the LB domain (previews keep it for review).
  if ((pathname === "/lb" || pathname.startsWith("/lb/")) && process.env.VERCEL_ENV === "production") {
    const url = req.nextUrl.clone();
    url.pathname = "/404";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|assets/).*)"],
};
