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
} from "lucide-react";
import {
  GOOGLE_MAPS_URL,
  PHONE,
  PHONE_TEL,
  SUPPORT_MAILTO,
} from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

export default function JaRentalPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href="/ja/book?s=rental">
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head page-head-grid">
        <div>
          <span className="head-badge">お届けします · 乗り捨て自由</span>
          <br />
          <span className="eyebrow">エコモビリティ · セルフガイド</span>
          <h1>
            E-bikeという<em>エコモビリティ</em>で、自然をめぐる。
          </h1>
          <p>
            水力発電量が豊富な、水と緑の豊かな谷に、排気ガスは似合いません。あなたの足を電気の力でアシストし、美しい谷の一日の周遊面積を増やします。どこへ行くか迷ったら、おすすめ3コースを載せた
            <Link href="/ja/second-day">セルフツアーのすすめ</Link>へ。
          </p>
          <p className="head-note">
            店舗に来てもらう必要はありません。
            <strong>
              妻籠〜野尻のエリア内なら、宿でも駅でも渓谷の入口でも、ご希望の場所にバイクをお届け。走り終えたら、エリア内の好きな場所で乗り捨てできます。
            </strong>
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
              <Lightbulb size={18} /> ヘルメット・ナンバーロック・ライト付き
            </li>
          </ul>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">ご利用の流れ · やりとりはWhatsApp</span>
          <h2>
            店舗もカウンターもなし。<em>スマホだけで5ステップ。</em>
          </h2>
          <p>
            バイクのほうがあなたの場所に来て、ゴールした場所で待っています。その間のやりとりは、すべてWhatsAppで完結します。
          </p>
          <div className="drop-steps cols5">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>前日までに予約</h3>
              <p>
                ご利用の前日までに、WhatsAppで日付・人数・出発したい場所を送ってください。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>当日朝、自転車をご用意</h3>
              <p>
                ご利用当日の朝、指定の場所に自転車を用意しておきます。同じく当日の朝、利用方法と決済リンクがWhatsAppに届きます。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>決済後に鍵番号</h3>
              <p>
                決済を確認したら、ナンバーロックの鍵番号をお伝えします。鍵を外して出発です。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">4</div>
              <h3>施錠して写真を送信</h3>
              <p>
                走り終えたら、指定した場所（出発地と違っていてもOK）に施錠して、写真を撮ってWhatsAppで送ってください。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">5</div>
              <h3>当日夜に回収</h3>
              <p>
                返却手続きはこれで全部です。自転車は当日の夜にこちらで回収します。
              </p>
            </div>
          </div>
          <p className="drop-note">
            お届け・乗り捨ては妻籠〜野尻のエリア内ならどこでも。宿でも、駅前でも、渓谷の入口でも。
          </p>
        </div>
      </section>

      <section className="mini-sec" id="pricing">
        <span className="eyebrow">料金</span>
        <h2>1台おいくら?</h2>
        <div className="pricing">
          <div className="pitem">
            <h4>E-bikeレンタル</h4>
            <div className="amt">
              ¥4,000<span style={{ fontSize: "0.9rem" }}>/台</span>
            </div>
            <p>セルフガイド、1台¥4,000。最大4台まで——うち1台は子供も乗れる自転車です。</p>
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
          ご利用の前日までに、日付・人数・出発したい場所を送ってください。台数を確認して折り返します。事前決済はなし。当日の朝にWhatsAppで決済リンクをお送りし、決済を確認したら鍵番号をお伝えします。毎週月曜日は定休です。
        </p>

        <div className="square-embed">
          <a
            href="/ja/book?s=rental"
            className="booking-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> WhatsAppで予約
          </a>
        </div>

        <p className="booking-alt">
          電話派の方は <a href={PHONE_TEL}>{PHONE}</a> または{" "}
          <a href={SUPPORT_MAILTO}>メール</a>でも。
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
          <summary>受け取り・返却はどこで?</summary>
          <p>
            お好きな場所で。妻籠〜野尻のエリア内ならご希望の場所にお届けします。走り終えたら、エリア内の好きな場所（出発地と違ってもOK）に施錠して、写真をWhatsAppで送ってください。当日の夜に回収します。戻ってこなければいけない店舗はありません。
          </p>
        </details>
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
      <SiteFooter lang="ja" />
    </div>
  );
}
