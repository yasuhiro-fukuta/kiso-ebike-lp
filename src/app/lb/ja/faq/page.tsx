import type { Metadata } from "next";
import { LbSectionView } from "../../lb-pages";

export const metadata: Metadata = {
  title: "よくある質問 — ラゲッジバス中山道",
  description: "ラゲッジバスのよくある質問。",
  alternates: { canonical: "/ja/faq", languages: { en: "/faq", ja: "/ja/faq" } },
};

export default function Page() {
  return <LbSectionView lang="ja" section="faq" />;
}
