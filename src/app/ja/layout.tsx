import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond Nakasendo Cycling — 中山道の里山を、E-bikeで走る。",
  description:
    "長野県南木曽町・中山道沿いの里山を走るE-bikeレンタル(¥4,000〜)、早朝ガイドツアー、手荷物シャトル、ギアレンタル、宿泊。木曽川ダウンヒルは近日公開。予約はWhatsApp、お支払いは当日(カード/現金)。",
  openGraph: {
    title: "Beyond Nakasendo Cycling — 中山道の里山を、E-bikeで走る。",
    description:
      "南木曽のE-bikeレンタルとガイドライド。柿其渓谷・阿寺渓谷・与川道へ、地元の道で。",
    locale: "ja_JP",
  },
};

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
