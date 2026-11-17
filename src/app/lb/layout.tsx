import type { Metadata } from "next";

const LB_URL = "https://luggagebusnakasendo.com";

export const metadata: Metadata = {
  metadataBase: new URL(LB_URL),
  // ラゲッジバスは別ブランドなので、E-bike（キソライド）のアイコンではなく従来のアイコンを使う
  icons: {
    icon: "/assets/lb-icon.png",
    apple: "/assets/lb-apple-icon.png",
  },
  title: "Luggage Bus Nakasendo — bags-only shuttle, Nagiso ⇄ Kiso-Fukushima",
  description:
    "A luggage-only shuttle along the Nakasendo: Nagiso, Nojiri, Suhara, Agematsu and Kiso-Fukushima. Walk or ride bag-free — your bags go ahead to your inn. Book on WhatsApp.",
  alternates: {
    canonical: "/",
    languages: { en: "/", ja: "/ja" },
  },
  openGraph: {
    title: "Luggage Bus Nakasendo — Yes Road, No load.",
    description:
      "Bags-only shuttle between Nagiso and Kiso-Fukushima. Walk the Nakasendo without the weight.",
    url: LB_URL,
    siteName: "Luggage Bus Nakasendo",
    locale: "en_US",
    type: "website",
  },
};

/** Who we are, for search engines and AI answers. No street address:
 *  the service is listed by area (decided 2026-11-17). */
const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luggage Bus Nakasendo",
  alternateName: "ラゲッジバス中山道",
  serviceType: "Luggage transfer (bags only)",
  url: LB_URL,
  description:
    "A bags-only shuttle on the Nakasendo. Fixed daily runs between Nagiso and Kiso-Fukushima; drop your bags at a stop in the morning and collect them at your next stop the same day.",
  provider: {
    "@type": "Organization",
    name: "From Scratch LLC",
    brand: { "@type": "Brand", name: "Kiso Ride" },
    url: "https://nakasendo-ebike.com",
  },
  areaServed: ["Nakatsugawa", "Nagiso", "Nojiri", "Suhara", "Agematsu", "Kiso-Fukushima", "Narai"].map((n) => ({
    "@type": "Place",
    name: `${n}, Nagano, Japan`,
  })),
  availableLanguage: ["en", "ja"],
};

export default function LbLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      {children}
    </>
  );
}
