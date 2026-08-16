import type { Metadata } from "next";
import "./globals.css";

/** ============================================================
 *  CUSTOMIZE ZONE
 *  ⚠️ name / address / telephone は Googleビジネスプロフィールと
 *     一字一句そろえること（NAP一貫性）。料金は page.tsx と一致させる。
 *  ============================================================ */
const SITE_URL = "https://nakasendo-ebike.com";
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
    "E-bike rides off the tourist track in the Kiso Valley, Nagiso. Self-guided e-bike rental from ¥4,000, and the guided full-day Kiso River Downhill — 48.9 km with two local guides, ¥80,000 all-in for a group of four.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Beyond Nakasendo Cycling",
    title: "Beyond Nakasendo Cycling — Ride the Kiso Valley like a local",
    description:
      "Skip the crowds. Self-guided e-bike routes and a guided full-day downhill through the hidden side of the Kiso Valley, near Tsumago and Magome.",
    locale: "en_US",
    images: [HERO_IMG],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Nakasendo Cycling — Ride the Kiso Valley like a local",
    description:
      "Self-guided e-bike rentals and a guided full-day downhill through the hidden Kiso Valley, Nagiso.",
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
        "Self-guided e-bike rentals and a guided full-day downhill course through the hidden side of the Kiso Valley in Nagiso, Nagano, near the Nakasendo post towns of Tsumago and Magome. Operated by Kashiwaya Guesthouse (From Scratch LLC).",
      image: `${SITE_URL}${HERO_IMG}`,
      telephone: TELEPHONE,
      email: EMAIL,
      priceRange: "¥2,800–¥104,000",
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
        { "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/#rental` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/#downhill` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/#shodo` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/#shuttle` } },
        { "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/#gearrental` } },
      ],
      employee: { "@id": `${SITE_URL}/#guide` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#guide`,
      name: "Yasuhiro Fukuta",
      alternateName: "Yakkun",
      jobTitle: "Cycling guide",
      worksFor: { "@id": `${SITE_URL}/#business` },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Wilderness First Aid",
        credentialCategory: "certification",
        description:
          "Wilderness First Aid certification covering adult CPR and AED use, relief of foreign-body airway obstruction, and control of severe bleeding. Course ID 37079, valid through 18 February 2029.",
        recognizedBy: {
          "@type": "Organization",
          name: "Wilderness Medical Associates International",
          address: "1 Forest Ave, Portland, ME 04101, USA",
        },
        validThrough: "2029-02-18",
      },
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
      "@type": "Product",
      "@id": `${SITE_URL}/#downhill`,
      name: "Kiso River Downhill (full-day guided e-bike course)",
      description:
        "A full-day, guide-only e-bike descent of the Kiso Valley: 48.9 km from Yabuhara-juku to Nagiso Station, almost all of it downhill (613 m of descent against only 94 m of climbing). The route follows the historic Kiso road past seven of its eleven post towns, from Yabuhara down to Midono, with breakfast in Yabuhara-juku, lunch in Kiso-Fukushima, and a coffee stop at Nojiri Station. Two local guides ride with every group — one leading, one sweeping. Books by WhatsApp.",
      image: `${SITE_URL}/assets/kisogawa.jpg`,
      brand: { "@id": `${SITE_URL}/#business` },
      category: "Guided cycling tour",
      offers: [
        {
          "@type": "Offer",
          name: "Kiso River Downhill — group of 4 (base)",
          description:
            "All-in price for the whole day: two guides and all e-bikes included. ¥80,000 for a group of four; each rider more or fewer moves the total by 15% (¥12,000).",
          price: "80000",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/guided`,
        },
        {
          "@type": "Offer",
          name: "Kiso River Downhill — 2 riders",
          price: "56000",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/guided`,
        },
        {
          "@type": "Offer",
          name: "Kiso River Downhill — 3 riders",
          price: "68000",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/guided`,
        },
        {
          "@type": "Offer",
          name: "Kiso River Downhill — 5 riders",
          price: "92000",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/guided`,
        },
        {
          "@type": "Offer",
          name: "Kiso River Downhill — 6 riders",
          price: "104000",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/guided`,
        },
      ],
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#shodo`,
      name: "Shodo Calligraphy Session (at Kashiwaya Guesthouse)",
      description:
        "A hands-on Japanese calligraphy (shodo) session in a quiet tatami room at Kashiwaya guesthouse in Nagiso: brush, sumi ink, and washi paper provided, no experience needed, and your best sheet goes home with you. Standard price ¥20,000 for a group of four, ±15% (¥3,000) per guest more or fewer — offered at 80% off as a trial price until the host earns his shodan (first dan) rank. Also serves as the rainy-day alternative when a downpour cancels a ride.",
      image: `${SITE_URL}/assets/shodo-class.jpg`,
      brand: { "@id": `${SITE_URL}/#business` },
      category: "Cultural experience",
      offers: [
        {
          "@type": "Offer",
          name: "Shodo session — group of 4 (trial price)",
          description:
            "Trial price at 80% off the ¥20,000 standard rate, until the host earns his shodan rank.",
          price: "4000",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/shodo`,
        },
        {
          "@type": "Offer",
          name: "Shodo session — 2 guests (trial price)",
          price: "2800",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/shodo`,
        },
        {
          "@type": "Offer",
          name: "Shodo session — 6 guests (trial price)",
          price: "5200",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/shodo`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#shuttle`,
      name: "Luggage Shuttle (Nagiso ↔ Kashiwaya ↔ Nojiri)",
      serviceType: "Luggage transfer",
      description:
        "Same-day luggage shuttle between Nagiso Station, Kashiwaya Guesthouse and Nojiri Station, so travelers can walk the Yogawa-michi section of the Nakasendo or ride our one-way e-bike routes hands-free. Free with any e-bike rental or tour; standalone shuttle for walkers arranged via WhatsApp.",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: { "@type": "Place", name: "Nagiso, Kiso Valley, Nagano" },
      url: `${SITE_URL}/luggage-shuttle`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#gearrental`,
      name: "Outdoor Gear Rental",
      serviceType: "Equipment rental",
      description:
        "Rental of traditional woven Kiso travel hats, bear bells and bear spray, rashguards, life jackets and cold-weather layers. Safety and swim gear is free with e-bike rentals and tours; standalone rentals arranged via WhatsApp.",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: { "@type": "Place", name: "Nagiso, Kiso Valley, Nagano" },
      url: `${SITE_URL}/gear`,
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
          name: "Can I hire a guide for the half-day routes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — the three half-day routes are self-guided rentals only (¥4,000 per bike, ¥8,000 for two), ridden with our route maps. Our guides ride on one course: the full-day Kiso River Downhill, where two guides accompany your group. Both options include the free luggage shuttle.",
          },
        },
        {
          "@type": "Question",
          name: "Can I do the routes in reverse, or as a loop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Tsumago and Gorge routes can both be ridden in reverse or as a loop — just tell us your preference when you book and we'll plan the pick-up points around it.",
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
        {
          "@type": "Question",
          name: "Can I ride the Kiso River Downhill course self-guided?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — the full-day Kiso River Downhill is guided only. In a few places a wrong turn drops you onto roads with heavy traffic, so for safety two guides ride the whole 48.9 km route with you — one up front, one at the back.",
          },
        },
        {
          "@type": "Question",
          name: "I'm not confident I can ride 50+ km. Can I still do the Kiso River Downhill?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most likely yes. The 48.9 km course is gentle downhill almost the whole way (613 m of descent against just 94 m of climb), and on the few uphill stretches the high-powered e-bike does the climbing for you. If you can ride a normal bike 10 km on flat ground, you should reach the finish comfortably.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bail out partway through the Kiso River Downhill?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The route shadows the JR line the whole way, so if you feel unwell you can take a train from the nearest station. Lock the bike at the station rack and we collect it afterwards.",
          },
        },
        {
          "@type": "Question",
          name: "What happens to the Kiso River Downhill in bad weather?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rain or snow means we cancel and refund by default. Our e-bikes handle rough conditions well, so if it is light enough not to affect safety or the experience and everyone agrees, we may still run it. If the weather turns mid-ride, we stop there, refund part of the fee, and take the train to the finish.",
          },
        },
        {
          "@type": "Question",
          name: "What about bears on the route?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Kiso has Asiatic black bears, like the rest of these mountains. We hand you a bear bell and bear spray to carry, the lead guide always rides up front, and we run through a what-to-do-if-you-meet-one briefing before setting off.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle summer heat and winter cold on the full-day course?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In summer we lend a rashguard, keep you dousing with water, and break to dip in the valley's river pools. In winter we lend cold-weather gear and stop at footbaths and onsen along the way to warm up.",
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
