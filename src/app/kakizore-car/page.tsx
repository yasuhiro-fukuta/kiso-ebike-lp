import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { KAKIZORE_CAR_WHATSAPP_URL_JA } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export const metadata: Metadata = {
  title:
    "車で柿其渓谷に行くには、天白公園駐車場が便利!|Beyond Nakasendo Cycling",
  description:
    "泳ぐのに最適な美しい柿其渓谷、最大の弱点は駐車場が少ないこと。地元民の提案は、南木曽駅近く・天白公園の広大な駐車場に停めて、そこからE-bikeで片道40分。木曽谷の西側は西日が差さず涼しく、快適です。帰りは桃介橋を渡って駅前のカフェへ。",
  alternates: { canonical: "/kakizore-car" },
  openGraph: {
    type: "article",
    url: "https://nakasendo-ebike.com/kakizore-car",
    siteName: "Beyond Nakasendo Cycling",
    title: "車で柿其渓谷に行くには、天白公園駐車場が便利!",
    description:
      "駐車場が少ない柿其渓谷へは、天白公園の広大な駐車場+E-bikeで。片道40分、風を切る快適な移動。",
    locale: "ja_JP",
    images: ["/assets/gorge.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "車で柿其渓谷に行くには、天白公園駐車場が便利!",
  inLanguage: "ja",
  about: "柿其渓谷への車(天白公園駐車場)とE-bikeでのアクセス方法",
  author: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  publisher: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  mainEntityOfPage: "https://nakasendo-ebike.com/kakizore-car",
};

export default function KakizoreCarPage() {
  return (
    <div className="lp" lang="ja">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav lang="ja" />

      <FloatBook href={KAKIZORE_CAR_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> E-bikeを予約
      </FloatBook>

      {/* HERO */}
      <header className="atera-hero">
        <div className="atera-hero-inner">
          <span className="eyebrow">日本語ガイド · 柿其渓谷 · 木曽</span>
          <h1>
            車で柿其渓谷へは、<em>天白公園駐車場</em>が便利!
          </h1>
          <p>
            阿寺渓谷と並んで、年々暑くなる夏の定番になってきた柿其渓谷。インスタの通りとても美しく、泳ぐのに最適なのですが——最大の弱点は、駐車場が少ないことです。
          </p>
        </div>
      </header>

      <main className="atera-body">
        <div className="atera-ph">[ 写真:柿其渓谷で泳ぐ ]</div>

        <h2>そこで、地元民からの提案です。</h2>
        <p>
          お隣の最寄り駅・南木曽駅の近く、<strong>天白公園には広大な駐車場</strong>があります。渓谷まで少し距離はありますが、ここに停めて、E-bikeを予約して乗ってみてください。
        </p>
        <p>
          事前に予約しておくと、<strong>駐車場にE-bikeが設置してあります</strong>。着いたらLINEでひとこと連絡——その場で決済して、操作方法と開錠方法を聞くことができます。
        </p>
        <p>
          <strong>片道40分ほどの、風を切って進む楽しい移動体験</strong>になります。
        </p>

        <div className="atera-note">
          木曽谷の<strong>西側は、東側と違って西日が差さないため涼しく、快適</strong>です。天白公園も、柿其渓谷も、その道中も——すべて西側にあります。
        </div>

        <div className="atera-ph">[ 写真:天白公園駐車場とE-bike ]</div>

        <h2>帰りは、戻して、施錠して、写真1枚。</h2>
        <p>
          柿其渓谷からE-bikeで天白公園まで戻り、乗り捨てして施錠。
          <strong>LINEで写真を送ったら完了</strong>です。
        </p>
        <p>
          時間があれば、天白公園からつづく巨大な木造の橋・<strong>桃介橋</strong>を渡って、駅前のカフェでゆっくりしていってください。
        </p>

        <div className="atera-note">
          E-bikeは<strong>ご予約制</strong>(1台4,000円/日)です。事前に、ご希望日と台数をお送りください。受け取り・乗り捨てはどちらも天白公園駐車場です。
        </div>

        <div className="atera-cta-row">
          <a
            href={KAKIZORE_CAR_WHATSAPP_URL_JA}
            target="_blank"
            rel="noopener noreferrer"
            className="special-cta"
          >
            <MessageCircle size={18} /> E-bikeを予約する
          </a>
        </div>
      </main>

      <SiteFooter lang="ja" />
    </div>
  );
}
