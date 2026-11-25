import type { Metadata } from "next";
import { LbSectionView } from "../../lb-pages";

export const metadata: Metadata = {
  title: "予約する — ラゲッジバス中山道",
  description: "駅と個数を選ぶと料金がすぐ出て、支払えばその場で予約確定。",
  alternates: { canonical: "/ja/book", languages: { en: "/book", ja: "/ja/book" } },
};

export default function Page() {
  return <LbSectionView lang="ja" section="book" />;
}
