const LB_URL = "https://luggagebusnakasendo.com";

export function GET() {
  return new Response(`User-Agent: *\nAllow: /\n\nSitemap: ${LB_URL}/sitemap.xml\n`, {
    headers: { "Content-Type": "text/plain" },
  });
}
