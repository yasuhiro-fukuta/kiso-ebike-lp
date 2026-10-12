import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  TrainFront,
  Car,
  Brush,
  Shirt,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL_JA } from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

export const metadata: Metadata = {
  title: "周辺を楽しむ — 南木曽・木曽谷の遊び方 | Beyond Nakasendo Cycling",
  description:
    "南木曽・木曽谷の周辺の楽しみ方をまとめたページ。阿寺渓谷・柿其渓谷へのアクセス、E-bikeセルフツアーのおすすめ3コース、書道体験、アウトドアギアレンタル、旅の計画に役立つコラム。",
  alternates: { canonical: "/ja/explore" },
  openGraph: {
    type: "website",
    url: "https://nakasendo-ebike.com/ja/explore",
    siteName: "Beyond Nakasendo Cycling",
    title: "周辺を楽しむ — 南木曽・木曽谷の遊び方",
    description:
      "阿寺渓谷、柿其渓谷、セルフツアー3コース、書道体験、ギアレンタル。南木曽の周辺の楽しみ方はここから。",
    locale: "ja_JP",
    images: ["/assets/gorge.jpg"],
  },
};

const CARDS = [
  {
    href: "/atera",
    icon: Waves,
    title: "阿寺渓谷",
    desc: "「阿寺ブルー」と呼ばれる奇跡の青い川へ。渋滞も駐車場待ちもなしの、電車&E-bikeでの行き方。",
  },
  {
    href: "/kakizore-train",
    icon: TrainFront,
    title: "柿其渓谷(電車で)",
    desc: "エメラルドの淵と森林鉄道の跡。十二兼駅からのアクセスと地図。",
  },
  {
    href: "/kakizore-car",
    icon: Car,
    title: "柿其渓谷(車で)",
    desc: "車派の方はこちら。天白公園駐車場からの歩き方。",
  },
  {
    href: "/ja/shodo",
    icon: Brush,
    title: "書道体験",
    desc: "筆と墨と、静かな1時間。宿でできる書道体験です。",
  },
  {
    href: "/ja/gear",
    icon: Shirt,
    title: "ギアレンタル",
    desc: "ヒノキ傘、熊鈴・熊スプレー、川遊びや冬の装備まで1点から。",
  },
];

export default function JaExplorePage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">南木曽 · 木曽谷</span>
        <h1>
          周辺を<em>楽しむ。</em>
        </h1>
        <p>
          午前中に届く距離にふたつの渓谷。E-bike向けに地図化した静かな道。雨の日のための、ゆっくりした楽しみも。このページは「走る」の周りにあるすべての地図です——各リンクの先に、一段深い案内があります。
        </p>
      </header>

      {/* DIRECTORY */}
      <section className="mini-sec" id="directory">
        <div className="mini-grid">
          {CARDS.map((c) => (
            <Link key={c.href} href={c.href} className="mini-card">
              <h3>
                <c.icon size={20} /> {c.title}
              </h3>
              <p>{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* コラム一覧 */}
      <section className="mini-sec" id="columns">
        <span className="eyebrow">コラム</span>
        <h2>読みもの。</h2>
        <div className="sub-entries">
          <Link href="/atera">阿寺渓谷へは電車&amp;E-bike</Link>
          <Link href="/kakizore-train">電車で柿其渓谷へ——十二兼駅が便利!</Link>
          <Link href="/kakizore-car">車で柿其渓谷へ——天白公園駐車場が便利!</Link>
          <Link href="/ja/second-day">セルフツアーのすすめ——おすすめ4コース</Link>
          <Link href="/crowd-free-japan">人混み嫌いのための日本旅行旅程(英語)</Link>
          <Link href="/snowboard-route">初スノボの冬ルート:阿智で学び、白馬で卒業(英語)</Link>
        </div>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
