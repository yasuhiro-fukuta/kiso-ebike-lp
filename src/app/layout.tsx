import type { Metadata } from "next";
import "./globals.css";

/** ============================================================
 *  CUSTOMIZE ZONE
 *  ⚠️ name / address / telephone は Googleビジネスプロフィールと
 *     一字一句そろえること（NAP一貫性）。料金は page.tsx と一致させる。
 *  ============================================================ */
const SITE_URL = "https://kiso-ebike-lp.vercel.app";
const TELEPHONE = "+81-90-3839-2354";
const EMAIL = "ravnicaguild@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/murabito_bikes";
const BOOKING_URL =
  "https://app.squareup.com/appointments/book/n5ipgn3swmf0ps/LKFD21FHJ8GJJ/start";
const HERO_IMG = "/assets/gorge.jpg";
const POSTAL_CODE = "399-5301"; // TODO: 郵便番号を確認して確定
// 緯度経度: Googleマップで拠点ピンを右クリック →「座標をコピー」して差し替え
const GEO = { lat: 35.6011, lng: 137.6056 }; // TODO: 正確な座標に置換
/** ========================================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Beyond Nakasendo Cycling — Ditch the guidebook. Ride the Kiso Valley like a local.",
  description:
    "Guided e-bike rides off the tourist track in the Kiso Valley, Nagiso. Hidden gorges, river swims, soba in the post town, onsen — the way the locals actually do it. Half-day guided tours from ¥13,000; self-guided e-bike rental from ¥4,000.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Beyond Nakasendo Cycling",
    title: "Beyond Nakasendo Cycling — Ride the Kiso Valley like a local",
    description:
      "Skip the crowds. Three guided e-bike routes through the hidden side of the Kiso Valley, near Tsumago and Magome.",
    locale: "en_US",
    images: [HERO_IMG],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Nakasendo Cycling — Ride the Kiso Valley like a local",
    description:
      "Half-day guided e-bike tours and rentals through the hidden Kiso Valley, Nagiso.",
    images: [HERO_IMG],
  },
};

/** AI／検索エンジン向けの機械可読データ。
 *  事業者(LocalBusiness) + 商品2種(ガイドツアー / レンタル) + FAQ。 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "SportsActivityLocation"],
      "@id": `${SITE_URL}/#business`,
      name: "Beyond Nakasendo Cycling",
      url: SITE_URL,
      description:
        "Guided half-day e-bike tours and self-guided e-bike rentals through the hidden side of the Kiso Valley in Nagiso, Nagano, near the Nakasendo post towns of Tsumago and Magome. Operated by Kashiwaya Guesthouse (From Scratch LLC).",
      image: `${SITE_URL}${HERO_IMG}`,
      telephone: TELEPHONE,
      email: EMAIL,
      priceRange: "¥4,000–¥17,000",
      currenciesAccepted: "JPY",
      paymentAccepted: "Credit Card",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3993 Yomikaki",
        addressLocality: "Nagiso",
        addressRegion: "Nagano",
        postalCode: POSTAL_CODE,
        addressCountry: "JP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO.lat,
        longitude: GEO.lng,
      },
      areaServed: { "@type": "Place", name: "Kiso Valley, Nagano, Japan" },
      sameAs: [INSTAGRAM_URL],
      parentOrganization: { "@type": "Organization", name: "From Scratch LLC" },
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/#tour` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/#rental` } },
      ],
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#tour`,
      name: "Guided E-Bike Tour (half day)",
      description:
        "A half-day (10:00–16:00) guided e-bike ride with a local through the hidden Kiso Valley. Choose from three routes — Tsumago Revisited (easy), Natural AC & Onsen (moderate, river swim or onsen), and the Nakasendo Challenge (hard). Fat-tire e-bike, helmet, lock, lights, waterproof gear, and a free luggage shuttle between Nagiso Station, Kashiwaya, and Nojiri Station all included. Up to 2 guests.",
      image: `${SITE_URL}${HERO_IMG}`,
      brand: { "@id": `${SITE_URL}/#business` },
      category: "Guided cycling tour",
      offers: [
        {
          "@type": "Offer",
          name: "Guided tour — 1 bike / 1 guest",
          price: "13000",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: BOOKING_URL,
        },
        {
          "@type": "Offer",
          name: "Guided tour — 2 bikes / 2 guests",
          price: "17000",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: BOOKING_URL,
        },
        {
          "@type": "Offer",
          name: "Opening Campaign — guided tour, 1 bike",
          description:
            "Limited-time launch offer: ¥7,000 off a guided tour if you agree to be photographed during the ride and share feedback afterwards. Photos may be used on our website and social media.",
          price: "6000",
          priceCurrency: "JPY",
          availability: "https://schema.org/LimitedAvailability",
          url: BOOKING_URL,
        },
        {
          "@type": "Offer",
          name: "Opening Campaign — guided tour, 2 bikes",
          description:
            "Limited-time launch offer: ¥7,000 off a guided tour (two bikes / two guests) in exchange for photo consent and feedback.",
          price: "10000",
          priceCurrency: "JPY",
          availability: "https://schema.org/LimitedAvailability",
          url: BOOKING_URL,
        },
      ],
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#rental`,
      name: "E-Bike Rental (self-guided)",
      description:
        "Self-guided fat-tire e-bike rental for a half day, with our route maps for turn-by-turn directions between pick-up points. Helmet, lock, and lights included, plus the free luggage shuttle. Up to 2 bikes.",
      image: `${SITE_URL}${HERO_IMG}`,
      brand: { "@id": `${SITE_URL}/#business` },
      category: "Bicycle rental",
      offers: [
        {
          "@type": "Offer",
          name: "E-bike rental — 1 bike",
          price: "4000",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: BOOKING_URL,
        },
        {
          "@type": "Offer",
          name: "E-bike rental — 2 bikes",
          price: "8000",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: BOOKING_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need to be fit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For the Tsumago and Gorge routes, no — the electric motor flattens the climbs, so if you can ride a normal bike on flat ground you'll be fine. The Nakasendo Challenge route has real distance and gradient, so only pick it if you're confident on a bike.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between a guided tour and e-bike rental only?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guided means a local rides the whole route with you, bikes included (¥13,000 for one bike, ¥17,000 for two, up to 2 guests). E-bike only is just the rental (¥4,000 per bike, ¥8,000 for two) and you explore on your own with our route maps. Both include the free luggage shuttle.",
          },
        },
        {
          "@type": "Question",
          name: "Can I do the routes in reverse, or as a loop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Tsumago and Gorge routes can both be ridden in reverse or as a loop — just tell us your preference when you book and the guide will plan around it.",
          },
        },
        {
          "@type": "Question",
          name: "How does the luggage shuttle work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We move your bags between Nagiso Station, Kashiwaya, and Nojiri Station, free with every booking, so you can ride point-to-point without carrying your pack over a pass.",
          },
        },
        {
          "@type": "Question",
          name: "Can I swim or use the onsen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On the Natural AC & Onsen route, yes — bring a swimsuit and towel in summer to dive into the Atera river, or use the onsen near the river mouth in colder months.",
          },
        },
        {
          "@type": "Question",
          name: "Where do tours start and end?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can pick from three points, and your start and end don't need to be the same: Kashiwaya Guesthouse, Nagiso Station, or Nojiri Station.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,400..600&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* AI / 検索エンジン向け構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
