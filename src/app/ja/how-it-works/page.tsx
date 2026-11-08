import type { Metadata } from "next";
import { HowItWorks } from "../../how-it-works/how-it-works";

export const metadata: Metadata = {
  title: "ご利用の流れ — お店のないE-bikeレンタル | Beyond Nakasendo Cycling",
  description:
    "はじめての方へ。店舗・窓口はありません。WhatsAppで予約・支払い、朝9時までに宿や駅へE-bikeをお届け。乗り終えたら妻籠〜野尻のどこでも鍵をかけて乗り捨て。1台1日¥4,000。",
  alternates: { canonical: "/ja/how-it-works", languages: { en: "/how-it-works" } },
};

export default function JaHowItWorksPage() {
  return <HowItWorks lang="ja" />;
}
