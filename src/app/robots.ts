import type { MetadataRoute } from "next";

// src/app/robots.ts に置く。
const SITE_URL = "https://kiso-ebike-lp.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // 主要なAI／検索クローラーを明示的に許可（汎用ブロックでの巻き込み防止）
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Google-Extended", // Gemini の学習・参照
          "GPTBot", // ChatGPT
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot", // Perplexity
          "Perplexity-User",
          "ClaudeBot", // Claude
          "Claude-Web",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
