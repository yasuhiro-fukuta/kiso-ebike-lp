import type { Metadata } from "next";
import { GuideNagisoKf } from "../../guide-nagiso-kf";
import { GUIDE_FAQ } from "../../guide-faq";

export const metadata: Metadata = {
  title: "Nagiso to Kiso-Fukushima luggage transfer — same-day, bags only | Luggage Bus Nakasendo",
  description: "Send your bags along the Nakasendo from Nagiso to Kiso-Fukushima the same day. Leave your bags at your inn by 9:00; delivered by 15:00. From ¥4,500 for one bag. Book by 23:00 the day before.",
  alternates: {
    canonical: "/guide/nagiso-to-kiso-fukushima",
    languages: { en: "/guide/nagiso-to-kiso-fukushima", ja: "/ja/guide/nagiso-to-kiso-fukushima" },
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GUIDE_FAQ.en.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function GuideEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <GuideNagisoKf lang="en" />
    </>
  );
}
