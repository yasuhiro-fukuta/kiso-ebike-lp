import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "キソライド｜中山道・妻籠〜野尻のE-bikeレンタル — 中山道の里山を、E-bikeで走る。",
  description:
    "長野県南木曽町・中山道沿いの里山を走るE-bikeレンタル(¥4,000〜)、早朝ガイドツアー、「中山道の宿場7つを、E-bikeで1日」の木曽川ダウンヒル(ガイド専用)、手荷物シャトル、ギアレンタル、宿泊。予約はWhatsApp、お支払いはご予約時(カード・PayPay)。",
  openGraph: {
    title: "キソライド｜中山道・妻籠〜野尻のE-bikeレンタル — 中山道の里山を、E-bikeで走る。",
    description:
      "南木曽のE-bikeレンタルとガイドライド。柿其渓谷・阿寺渓谷・与川道へ、地元の道で。",
    locale: "ja_JP",
  },
};

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
