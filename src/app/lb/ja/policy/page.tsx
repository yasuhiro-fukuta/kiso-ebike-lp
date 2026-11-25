import type { Metadata } from "next";
import { LbSectionView } from "../../lb-pages";

export const metadata: Metadata = {
  title: "キャンセル・補償 — ラゲッジバス中山道",
  description: "7日前までキャンセル無料、補償、ご利用のルール。",
  alternates: { canonical: "/ja/policy", languages: { en: "/policy", ja: "/ja/policy" } },
};

export default function Page() {
  return <LbSectionView lang="ja" section="policy" />;
}
