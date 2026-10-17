/** Structured data for the Luggage Bus pages: the service itself plus its
 *  questions, so search engines and AI answers can quote route, price and rules. */
import { LUGGAGE_FAQ } from "./luggage-faq";
import { BAG_FEE, ZONE_FEE } from "./luggage-bus";

const SITE_URL = "https://nakasendo-ebike.com";

export const LUGGAGE_ALTERNATES = {
  en: "/luggage-shuttle",
  ja: "/ja/luggage-shuttle",
  "x-default": "/luggage-shuttle",
};

export function luggageJsonLd(lang: "en" | "ja") {
  const path = lang === "ja" ? "/ja/luggage-shuttle" : "/luggage-shuttle";
  const url = `${SITE_URL}${path}`;
  const ja = lang === "ja";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // This page's own node, tied to the site-wide Service in the root
        // layout (@id /#shuttle); it adds the page-language name and the offer.
        "@type": "Service",
        "@id": `${url}#service`,
        isRelatedTo: { "@id": `${SITE_URL}/#shuttle` },
        name: ja ? "ラゲッジバス(中山道の手荷物配送)" : "Luggage Bus — Nakasendo luggage transfer",
        serviceType: ja ? "手荷物配送" : "Luggage transfer",
        description: ja
          ? "中山道の南木曽〜野尻〜須原〜上松〜木曽福島を1日1往復する手荷物配送。朝に駅前の預け先や提携宿に荷物を預けて歩けば、当日中に次の町へ届きます。予約制(WhatsApp)。"
          : "Same-day luggage transfer along the Nakasendo between Nagiso, Nojiri, Suhara, Agematsu and Kiso-Fukushima, one round trip a day. Drop your bags in the morning and walk on; they arrive the same day. Booking required on WhatsApp.",
        url,
        inLanguage: lang,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: ["Nagiso", "Nojiri", "Suhara", "Agematsu", "Kiso-Fukushima"].map((name) => ({
          "@type": "Place",
          name,
        })),
        offers: {
          "@type": "Offer",
          priceCurrency: "JPY",
          price: ZONE_FEE * 2 + BAG_FEE,
          description: ja
            ? "通る区域ごとに1,500円+荷物1個1,500円(例:南木曽→木曽福島 荷物1個 4,500円)"
            : "¥1,500 per zone passed + ¥1,500 per bag (e.g. Nagiso → Kiso-Fukushima, one bag: ¥4,500)",
          url,
        },
      },
      // A WebPage holding the questions, not a second FAQPage: the root
      // layout already emits a site-wide FAQPage on every page.
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        inLanguage: lang,
        about: { "@id": `${url}#service` },
        mainEntity: LUGGAGE_FAQ.map((f) => ({
          "@type": "Question",
          name: f.q[lang],
          acceptedAnswer: { "@type": "Answer", text: f.a[lang] },
        })),
      },
    ],
  };
}
