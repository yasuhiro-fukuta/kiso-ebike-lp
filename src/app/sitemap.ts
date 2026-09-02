import type { MetadataRoute } from "next";

const SITE_URL = "https://nakasendo-ebike.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/rental`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/shuttle-ebike`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/guided`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/second-day`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/stay`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/luggage-shuttle`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/gear`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/shodo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/live-here`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/atera`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/ja`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ja/rental`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/ja/shuttle-ebike`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/ja/second-day`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/ja/guided`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/ja/stay`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/ja/luggage-shuttle`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/ja/gear`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/ja/shodo`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/ja/live-here`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
