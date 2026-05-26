import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kiso-ebike-lp.vercel.app"),
  title:
    "Beyond Nakasendo Cycling — Ditch the guidebook. Ride the Kiso Valley like a local.",
  description:
    "Guided e-bike rides off the tourist track in the Kiso Valley, Nagiso. Hidden gorges, river swims, soba in the post town, onsen — the way the locals actually do it.",
  openGraph: {
    title: "Beyond Nakasendo Cycling — Ride the Kiso Valley like a local",
    description:
      "Skip the crowds. Three guided e-bike routes through the hidden side of the Kiso Valley.",
    images: ["/assets/gorge.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,400..600&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
