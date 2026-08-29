import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ATERA_WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "阿寺渓谷へは、電車&E-bikeがおすすめ!|Beyond Nakasendo Cycling",
  description:
    "奇跡の蒼い川・阿寺渓谷(長野県大桑村)へ、渋滞・駐車場待ちなしで行く方法。野尻駅からE-bikeで坂を楽々登って、阿寺ブルーへダイブ。東京・名古屋からの電車アクセスとE-bikeの予約方法をご紹介します。",
  alternates: { canonical: "/atera" },
  openGraph: {
    type: "article",
    url: "https://nakasendo-ebike.com/atera",
    siteName: "Beyond Nakasendo Cycling",
    title: "阿寺渓谷へは、電車&E-bikeがおすすめ!",
    description:
      "奇跡の蒼い川・阿寺渓谷へ、渋滞・駐車場待ちなしで。野尻駅からE-bikeで楽々アクセス。",
    locale: "ja_JP",
    images: ["/assets/gorge.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "阿寺渓谷へは、電車&E-bikeがおすすめ!",
  inLanguage: "ja",
  about: "阿寺渓谷への電車とE-bikeでのアクセス方法",
  author: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  publisher: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  mainEntityOfPage: "https://nakasendo-ebike.com/atera",
};

export default function AteraPage() {
  return (
    <div className="lp" lang="ja">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav lang="ja" />

      <FloatBook href={ATERA_WHATSAPP_URL}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* HERO */}
      <header className="atera-hero">
        <div className="atera-hero-inner">
          <span className="eyebrow">日本語ガイド · 阿寺渓谷 · 木曽</span>
          <h1>
            阿寺渓谷へは、<em>電車&E-bike</em>がおすすめ!
          </h1>
          <p>
            奇跡の蒼い川、阿寺渓谷。「阿寺ブルー」と呼ばれる透きとおった流れを
            ひと目見ようと、年々訪れる人が増えています。
          </p>
        </div>
      </header>

      <main className="atera-body">
        <div className="atera-ph">[ 写真:夏の渋滞・満車の駐車場 ]</div>

        <p>
          ただ、人気の代償もあります。
          <strong>夏の週末やお盆は、麓への道が渋滞し、駐車場もパンパン</strong>。
          せっかくの清流の前に、車の列に並ぶことになりかねません。
        </p>

        <h2>おすすめは、電車とE-bike!</h2>
        <p>最寄りはJR中央本線・野尻駅。各方面からのアクセスはこちらです。</p>
        <ul>
          <li>
            <strong>東京から</strong> — 新宿から特急で塩尻へ、塩尻から
            各駅停車で野尻まで。
            <br />
            <small>
              ※塩尻では駅舎内で塩尻ワインが楽しめます。乗り換え時間もお楽しみに。
            </small>
          </li>
          <li>
            <strong>大阪・名古屋から</strong> — 名古屋駅から特急しなので
            中津川へ、中津川から各駅停車で野尻駅まで。
          </li>
        </ul>

        <div className="atera-note">
          歩くとなかなか大変です — 渓谷内の名所・狸ヶ淵までは、麓の駐車場から
          <strong>登り徒歩30分</strong>。さらに野尻駅から麓までが
          <strong>徒歩40分</strong>。タクシーも、なかなかつかまりません。
        </div>

        <h2>そこでE-bike!</h2>

        <figure>
          <img
            src="/assets/ebike.jpg"
            alt="電動アシストのE-bike"
            loading="lazy"
            decoding="async"
          />
          <figcaption>電動アシストで坂も楽々のE-bike</figcaption>
        </figure>

        <p>野尻駅で受け取って、橋を越え、坂を楽々登り——</p>

        <figure>
          <img
            src="/assets/riders.jpg"
            alt="E-bikeで木曽の集落を走る"
            loading="lazy"
            decoding="async"
          />
          <figcaption>集落を抜けて渓谷へ。上り坂もアシストにおまかせ</figcaption>
        </figure>

        <p>そのまま阿寺渓谷にダイブ!</p>

        <div className="atera-ph">[ 写真:阿寺ブルーを楽しむ ]</div>

        <h2>帰りも、ゆったり</h2>
        <p>泳いだあとは、麓の着替えスペースで着替えて——</p>

        <figure>
          <img
            src="/assets/atera-so.jpg"
            alt="麓のあてら荘に停めたE-bike"
            loading="lazy"
            decoding="async"
          />
          <figcaption>麓にはあてら荘(日帰り温泉・水曜定休)も</figcaption>
        </figure>

        <p>
          駅近くのおしゃれなカフェで、2時間に1本の電車をゆっくり待ちます。
          この「待ち時間」まで含めて、いい一日になるのが電車旅のいいところ。
        </p>
        <p>
          <strong>
            車や人混みのストレスなしに阿寺渓谷を楽しみたい方、ぜひこちらを
            おすすめします!
          </strong>
        </p>

        <div className="atera-note">
          E-bikeは<strong>ご予約制</strong>(1台4,000円/日)です。WhatsAppから
          <strong>前日まで</strong>に、ご希望日と台数をお送りください。
          野尻駅での受け渡しもご相談いただけます。
        </div>

        <div className="atera-cta-row">
          <a
            href={ATERA_WHATSAPP_URL}
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
