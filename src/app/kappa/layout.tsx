import type { Metadata } from "next";

// スタッフ用リンク（?k=）を含むページなので検索エンジンに載せない
export const metadata: Metadata = {
  title: "Kappa — Kiso Ride",
  robots: { index: false, follow: false },
};

export default function KappaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
