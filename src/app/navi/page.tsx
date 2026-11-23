import type { Metadata } from "next";
import Navi from "./navi";

/**
 * 決めた道ナビ（試作）: QR で開く → Start を1回押す → 決めた道だけを走ってもらう。
 * 道データは public/navi/routes.json（scripts/kml-to-navi.py で Google マイマップの KML から作る）。
 * 外部への送信はしない（位置は端末の中だけで使う）。
 */
export const metadata: Metadata = {
  title: "Route Guide | Kiso Ride",
  description: "Stay on the marked roads. An off-route alert for Kiso Ride e-bike riders — no app to install.",
  alternates: { canonical: "/navi" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Navi />;
}
