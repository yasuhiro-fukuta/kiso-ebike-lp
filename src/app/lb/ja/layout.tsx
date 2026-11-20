import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ラゲッジバス中山道 — 中津川⇄奈良井・荷物専用シャトル",
  description:
    "中山道の中津川〜奈良井を結ぶ荷物専用シャトル。朝9時までに置けば、その日の16時までに次の宿へ。選んで払えば、その場で予約確定。",
  alternates: {
    canonical: "/ja",
    languages: { en: "/", ja: "/ja" },
  },
  openGraph: {
    title: "ラゲッジバス中山道 — 荷物だけ、先に宿へ。",
    description: "中津川⇄奈良井の荷物専用シャトル。手ぶらで中山道を。",
    url: "https://luggagebusnakasendo.com/ja",
    siteName: "ラゲッジバス中山道",
    locale: "ja_JP",
    type: "website",
  },
};

export default function LbJaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
