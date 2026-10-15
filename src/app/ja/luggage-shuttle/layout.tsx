import type { Metadata } from "next";
import { LUGGAGE_ALTERNATES, luggageJsonLd } from "../../luggage-seo";

export const metadata: Metadata = {
  title: "中山道の手荷物配送 南木曽〜木曽福島 — ラゲッジバス | Beyond Nakasendo Cycling",
  description:
    "荷物を預けて、中山道を手ぶらで歩く。ラゲッジバスは南木曽・野尻・須原・上松・木曽福島を1日1往復し、当日中に荷物を届けます。3,000円から。予約はWhatsAppで。",
  alternates: { canonical: "/ja/luggage-shuttle", languages: LUGGAGE_ALTERNATES },
  openGraph: {
    type: "website",
    url: "https://nakasendo-ebike.com/ja/luggage-shuttle",
    siteName: "Beyond Nakasendo Cycling",
    title: "中山道の手荷物配送 — ラゲッジバス(南木曽〜木曽福島)",
    description: "朝に荷物を預けて歩けば、次の町で荷物が待っています。当日配送、1日1往復。",
    locale: "ja_JP",
    images: ["/assets/shuttle-van.jpg"],
  },
};

export default function JaLuggageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(luggageJsonLd("ja")) }}
      />
      {children}
    </>
  );
}
