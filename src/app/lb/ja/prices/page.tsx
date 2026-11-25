import type { Metadata } from "next";
import { LbSectionView } from "../../lb-pages";

export const metadata: Metadata = {
  title: "料金・範囲 — ラゲッジバス中山道",
  description: "中津川駅〜奈良井の地点・時刻・運行カレンダー・料金。",
  alternates: { canonical: "/ja/prices", languages: { en: "/prices", ja: "/ja/prices" } },
};

export default function Page() {
  return <LbSectionView lang="ja" section="prices" />;
}
