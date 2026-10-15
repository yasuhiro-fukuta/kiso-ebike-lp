import type { Metadata } from "next";
import { LUGGAGE_ALTERNATES, luggageJsonLd } from "../luggage-seo";

export const metadata: Metadata = {
  title:
    "Nakasendo Luggage Transfer, Nagiso to Kiso-Fukushima — Luggage Bus | Beyond Nakasendo Cycling",
  description:
    "Walk the Nakasendo without your bags. The Luggage Bus carries luggage the same day between Nagiso, Nojiri, Suhara, Agematsu and Kiso-Fukushima, one round trip a day. From ¥3,000. Book on WhatsApp.",
  alternates: { canonical: "/luggage-shuttle", languages: LUGGAGE_ALTERNATES },
  openGraph: {
    type: "website",
    url: "https://nakasendo-ebike.com/luggage-shuttle",
    siteName: "Beyond Nakasendo Cycling",
    title: "Nakasendo Luggage Transfer — Luggage Bus, Nagiso to Kiso-Fukushima",
    description:
      "Drop your bags in the morning, walk on, and find them waiting at the next town. Same-day, one round trip a day.",
    locale: "en_US",
    images: ["/assets/shuttle-van.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakasendo Luggage Transfer — Luggage Bus, Nagiso to Kiso-Fukushima",
    description: "Drop your bags in the morning, walk on, and find them waiting at the next town. Same-day, one round trip a day.",
    images: ["/assets/shuttle-van.jpg"],
  },
};

export default function LuggageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(luggageJsonLd("en")) }}
      />
      {children}
    </>
  );
}
