import type { Metadata } from "next";
import { LbSectionView } from "../../lb-pages";

export const metadata: Metadata = {
  title: "営業カレンダー — ラゲッジバス中山道",
  description: "ラゲッジバスの営業日：2027年3月〜2028年2月、月曜以外は毎日。",
  alternates: { canonical: "/ja/calendar", languages: { en: "/calendar", ja: "/ja/calendar" } },
};

export default function Page() {
  return <LbSectionView lang="ja" section="calendar" />;
}
