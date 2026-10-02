import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { KAKIZORE_WHATSAPP_URL_JA } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export const metadata: Metadata = {
  title:
    "電車で柿其渓谷に行くには、十二兼駅が便利!|Beyond Nakasendo Cycling",
  description:
    "阿寺ブルーと並び称される「柿其グリーン」へ、電車とE-bikeで。最寄りの無人駅・十二兼駅からは徒歩1時間の登り坂——予約制のE-bikeなら快適な30分に。駅前で受け取り、WhatsAppで決済・開錠、乗り捨ては十二兼駅でも野尻駅でもOK。",
  alternates: { canonical: "/kakizore-train" },
  openGraph: {
    type: "article",
    url: "https://nakasendo-ebike.com/kakizore-train",
    siteName: "Beyond Nakasendo Cycling",
    title: "電車で柿其渓谷に行くには、十二兼駅が便利!",
    description:
      "柿其グリーンへ、電車とE-bikeで。十二兼駅から徒歩1時間の登りが、快適な30分に。",
    locale: "ja_JP",
    images: ["/assets/gorge.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "電車で柿其渓谷に行くには、十二兼駅が便利!",
  inLanguage: "ja",
  about: "柿其渓谷への電車(十二兼駅)とE-bikeでのアクセス方法",
  author: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  publisher: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  mainEntityOfPage: "https://nakasendo-ebike.com/kakizore-train",
};

export default function KakizoreTrainPage() {
  return (
    <div className="lp" lang="ja">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav lang="ja" />

      <FloatBook href={KAKIZORE_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* HERO */}
      <header className="atera-hero">
        <div className="atera-hero-inner">
          <span className="eyebrow">日本語ガイド · 柿其渓谷 · 木曽</span>
          <h1>
            電車で柿其渓谷へは、<em>十二兼駅</em>が便利!
          </h1>
          <p>
            年々暑くなる、夏の日本旅行。阿寺渓谷と並んで近年有名になりつつあるのが、お隣の渓谷・柿其です。阿寺渓谷が「阿寺ブルー」と呼ばれるように、柿其渓谷は「柿其グリーン」と呼ばれます。
          </p>
        </div>
      </header>

      <main className="atera-body">
        <div className="atera-ph">[ 写真:柿其グリーンの淵 ]</div>

        <h2>最寄りは、無人駅の十二兼駅。ただし——</h2>
        <p>
          最寄り駅はJR中央本線・十二兼駅。小さな無人駅です。ここから渓谷までは、
          <strong>歩くと1時間の登り坂</strong>が待っています。
        </p>

        <h2>そこで、E-bikeを予約しておきましょう。</h2>
        <p>
          事前に予約しておくと、<strong>駅を降りたところにE-bikeが設置してあります</strong>。着いたらWhatsAppでひとこと連絡——その場で決済して、操作方法と開錠方法を聞くことができます。
        </p>
        <p>
          <strong>
            徒歩1時間の上り坂は、電動アシスト付きの快適な30分の移動に変わります!
          </strong>
        </p>

        <div className="atera-ph">[ 写真:十二兼駅とE-bike ]</div>

        <h2>帰りは、下って、施錠して、写真1枚。</h2>
        <p>
          柿其渓谷を楽しんだら、道を下って十二兼駅へ。自転車を降りて施錠し、
          <strong>写真をWhatsAppで送ったら完了</strong>。そのまま電車で次の目的地へどうぞ。
        </p>

        <h2>余力があれば、阿寺渓谷へ足のばし。</h2>
        <p>
          小さな峠を越えれば阿寺渓谷にも行けます。グリーンとブルー、
          <strong>色の違いを見比べる</strong>のがこのエリアの贅沢。阿寺渓谷のふもとには日帰り温泉もあり、最寄りの野尻駅の近くには素敵なカフェが2軒あります。詳しくは
          <Link href="/atera">阿寺渓谷の記事</Link>へ。
        </p>
        <p>
          <strong>乗り捨ては、野尻駅でもOKです。</strong>
        </p>

        <div className="atera-note">
          E-bikeは<strong>ご予約制</strong>(1台4,000円/日)です。WhatsAppから事前に、ご希望日と台数、乗り捨て場所(十二兼駅/野尻駅)をお送りください。
        </div>

        <div className="atera-cta-row">
          <a
            href={KAKIZORE_WHATSAPP_URL_JA}
            target="_blank"
            rel="noopener noreferrer"
            className="special-cta"
          >
            <MessageCircle size={18} /> WhatsAppで予約する
          </a>
        </div>
      </main>

      <SiteFooter lang="ja" />
    </div>
  );
}
