import type { Metadata } from "next";
import { LbSectionView } from "../../lb-pages";

export const metadata: Metadata = {
  title: "使い方・置き場所 — ラゲッジバス中山道",
  description: "4つの手順、荷物の置き場所、預かり料と休業日。",
  alternates: { canonical: "/ja/how", languages: { en: "/how", ja: "/ja/how" } },
};

export default function Page() {
  return <LbSectionView lang="ja" section="how" />;
}
