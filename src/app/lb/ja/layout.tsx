import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ラゲッジバス中山道 — 南木曽⇄木曽福島・荷物専用シャトル",
  description:
    "中山道の南木曽・野尻・須原・上松・木曽福島を結ぶ荷物専用シャトル。手ぶらで歩く・走る旅へ。予約はWhatsApp。",
  alternates: {
    canonical: "/ja",
    languages: { en: "/", ja: "/ja" },
  },
  openGraph: {
    title: "ラゲッジバス中山道 — 荷物だけ、先に宿へ。",
    description: "南木曽⇄木曽福島の荷物専用シャトル。手ぶらで中山道を。",
    url: "https://luggagebusnakasendo.com/ja",
    siteName: "ラゲッジバス中山道",
    locale: "ja_JP",
    type: "website",
  },
};

export default function LbJaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
