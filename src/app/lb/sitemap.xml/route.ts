const LB_URL = "https://luggagebusnakasendo.com";

export function GET() {
  const urls = ["/", "/ja", "/book", "/ja/book", "/prices", "/ja/prices", "/how", "/ja/how", "/policy", "/ja/policy", "/faq", "/ja/faq", "/guide/nagiso-to-kiso-fukushima", "/ja/guide/nagiso-to-kiso-fukushima", "/other-services", "/ja/other-services"];
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${LB_URL}${u === "/" ? "" : u}</loc></url>`).join("\n") +
    "\n</urlset>\n";
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
