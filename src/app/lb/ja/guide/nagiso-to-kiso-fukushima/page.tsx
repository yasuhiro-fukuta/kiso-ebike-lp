import type { Metadata } from "next";
import { GuideNagisoKf } from "../../../guide-nagiso-kf";
import { GUIDE_FAQ } from "../../../guide-faq";

export const metadata: Metadata = {
  title: "南木曽から木曽福島へ荷物を当日配送 — 荷物専用バス | ラゲッジバス中山道",
  description: "中山道の南木曽から木曽福島へ、荷物を当日中に宿へ。朝預けて10:30〜11:30に到着。荷物1個4,500円から。前日23時まで申し込み。",
  alternates: {
    canonical: "/ja/guide/nagiso-to-kiso-fukushima",
    languages: { en: "/guide/nagiso-to-kiso-fukushima", ja: "/ja/guide/nagiso-to-kiso-fukushima" },
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GUIDE_FAQ.ja.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function GuideJa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <GuideNagisoKf lang="ja" />
    </>
  );
}
