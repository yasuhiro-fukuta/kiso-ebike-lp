"use client";

import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Zap,
  Leaf,
  Mountain,
  Lightbulb,
  MessageCircle,
  Ruler,
} from "lucide-react";
import {
  RENTAL_WHATSAPP_URL_JA,
  GOOGLE_MAPS_URL,
  PHONE,
  PHONE_TEL,
  SUPPORT_MAILTO,
} from "../../site";
import { SiteNav, SiteFooter, FloatBook, AllInOnePack } from "../../chrome";

export default function JaRentalPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={RENTAL_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head page-head-grid">
        <div>
          <span className="eyebrow">エコモビリティ · セルフガイド · 半日 · 10:00–16:00</span>
          <h1>
            E-bikeという<em>エコモビリティ</em>で、自然をめぐる。
          </h1>
          <p>
            水力発電量が豊富な、水と緑の豊かな谷に、排気ガスは似合いません。あなたの足を電気の力でアシストし、美しい谷の一日の周遊面積を増やします。どこへ行くか迷ったら、おすすめ3コースを載せた
            <Link href="/ja/second-day">セルフツアーのすすめ</Link>へ。
          </p>
        </div>
        <figure className="page-head-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/riders.jpg"
            alt="ファットタイヤE-bikeで出発前の家族4人(南木曽の集落の道)"
          />
          <figcaption>柏屋から谷へ、出発前のひとコマ</figcaption>
        </figure>
      </header>

      {/* THE BIKES */}
      <section className="gear" id="gear">
        <div className="gear-img" />
        <div className="gear-text">
          <span className="eyebrow">バイクについて</span>
          <h2>
            坂を<em>平らにする</em>ファットタイヤE-bike。
          </h2>
          <p>
            MOVE社のファットタイヤ電動アシスト。砂利道も川沿いも山道も余裕です。登りはモーターの仕事。あなたはハンドルを握って、景色を見ていてください。
          </p>
          <ul className="gear-list">
            <li>
              <Leaf size={18} /> 排気ゼロ・騒音ほぼゼロ——谷の静けさを乱さない
            </li>
            <li>
              <Zap size={18} /> 峠もこなす強力アシスト
            </li>
            <li>
              <Mountain size={18} /> 砂利や林道をつかむ極太タイヤ
            </li>
            <li>
              <Lightbulb size={18} /> ヘルメット・鍵・ライト付き
            </li>
            <li>
              <Ruler size={18} /> 出発前に体格に合わせて調整
            </li>
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">料金</span>
        <h2>1台おいくら?</h2>
        <div className="pricing">
          <div className="pitem">
            <h4>E-bikeレンタル</h4>
            <div className="amt">
              ¥4,000<span style={{ fontSize: "0.9rem" }}>/台</span>
            </div>
            <p>半日・セルフガイド。1台¥4,000、2台¥8,000。最大2台まで。</p>
          </div>
          <div className="pitem">
            <h4>ルートマップ</h4>
            <div className="amt">無料</div>
            <p>
              3コース分のGoogleマップ経路をスマホでご案内 —{" "}
              <Link href="/ja/second-day" style={{ color: "var(--gold)" }}>
                セルフツアーのすすめ
              </Link>
              へ。
            </p>
          </div>
</div>
      </section>

      {/* ONE-WAY DROP → Shuttle E-bike package */}
      <section className="mini-sec" id="one-way" style={{ textAlign: "center" }}>
        <p style={{ fontWeight: 300, color: "#3a352d", marginBottom: "1.2rem" }}>
          手ぶらで、乗り捨てで、片道だけ走りたい?
        </p>
        <Link href="/ja/shuttle-ebike" className="stay-cta">
          Shuttle E-bikeパッケージへ <ArrowRight size={15} />
        </Link>
      </section>

      {/* VIDEO */}
      <section className="video-sec">
        <span className="eyebrow">乗る前に</span>
        <h2>60秒の乗り方ガイド</h2>
        <p>
          E-bikeが初めての方へ。この道での安全な扱い方を1分でまとめました。お越しの前にどうぞ。
        </p>
        <div className="video-wrap">
          <iframe
            src="https://www.youtube.com/embed/-9sQwqZJZzE?rel=0&modestbranding=1&playsinline=1"
            title="E-bikeの乗り方"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="booking" id="book">
        <span className="eyebrow">予約方法 · WhatsApp</span>
        <h2>
          メッセージひとつで、<em>バイクはあなたのもの。</em>
        </h2>
        <p>
          日付・人数・走りたいコースを送ってください。台数と集合場所を折り返します。事前決済はなし。当日、受け取り時にカードか現金でお支払いください。
        </p>

        <div className="square-embed">
          <a
            href={RENTAL_WHATSAPP_URL_JA}
            className="booking-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> WhatsAppで予約
          </a>
        </div>

        <p className="booking-alt">
          電話派の方は <a href={PHONE_TEL}>{PHONE}</a> または{" "}
          <a href={SUPPORT_MAILTO}>メール</a>でも。お支払いは当日、カード・現金どちらでも。
        </p>
      </section>

      {/* REVIEW ASK */}
      <section style={{ padding: "clamp(3rem, 6vw, 4rem) clamp(1.5rem, 5vw, 4rem) 0" }}>
        <div className="review-ask">
          <Camera size={28} />
          <p>
            <strong>いいライドでしたか?</strong>
            一番のお礼は、Googleマップへの写真投稿です。次の旅人は、あなたの一枚からうちを見つけます。今日の1枚で十分です。
          </p>
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
            Googleマップに写真を投稿 <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <h2>よくある質問</h2>
        <details className="faq-item">
          <summary>体力に自信がなくても大丈夫?</summary>
          <p>
            妻籠コースと渓谷コースなら大丈夫。電動アシストが登りを平らにしてくれるので、平地で自転車に乗れれば走りきれます。「中山道チャレンジ」だけは距離も勾配も本物なので、脚に覚えのある方向けです。
          </p>
        </details>
        <details className="faq-item">
          <summary>このコースにガイドは付けられますか?</summary>
          <p>
            いいえ、3コースはセルフガイド専用です。ガイド付きをご希望なら
            <Link href="/ja/guided">ガイドツアーのページ</Link>をご覧ください。
          </p>
        </details>
      </section>

      {/* ALL-IN-ONE PACK */}
      <AllInOnePack lang="ja" />

      <SiteFooter lang="ja" />
    </div>
  );
}
