import type { MetadataRoute } from "next";

const SITE_URL = "https://nakasendo-ebike.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/rental`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/guided`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/shodo`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
