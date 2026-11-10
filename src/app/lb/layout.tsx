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

export default function LbLayout({ children }: { children: React.ReactNode }) {
  return children;
}
