"use client";

import Link from "next/link";
import { MessageCircle, CreditCard } from "lucide-react";
import { SQUARE_PAY_URL } from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

/** ついでに借りられるもの(ページの最後でおまけとして紹介)。 */
const EXTRAS: { name: string; price: string; desc: string }[] = [
  { name: "ヒノキ傘", price: "¥500", desc: "日差し・雨・雪よけに。地元の職人が地元の檜で編んだ笠です。" },
  { name: "ライフジャケット", price: "¥1,000", desc: "柿其・阿寺の深い淵でも安心して浮かべます。" },
  { name: "ラッシュガード", price: "¥2,000", desc: "川遊びの冷えと日焼けよけに。男性用・女性用あります。" },
];

export default function JaGearPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href="/ja/book?s=gear">
        <MessageCircle size={18} /> WhatsAppで相談
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">熊スプレーレンタル · 熊鈴付き · 1日1,500円</span>
        <h1>
          ここは<em>熊の山</em>です。
        </h1>
        <p>
          中山道や渓谷を歩く・走るなら、熊スプレーを1本持っていってください。宿で受け取るときに使い方を説明します。お支払いは当日カードか現金で。毎週月曜日は定休です。
        </p>
      </header>

      {/* 熊スプレー */}
      <section className="plans" id="items">
        <div className="plan">
          <div>
            <span className="plan-kicker">¥1,500 / 日</span>
            <h3>熊スプレー(熊鈴付き)</h3>
            <p>
              スプレーは、もしものときの切り札です。熊鈴を1個セットでお付けするので、出番が来る前に音でこちらを知らせられます。専用ホルスター付きで、腰やリュックのベルトにすぐ届く位置に付けられます。
            </p>
          </div>
          <div className="plan-photos duo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/gear/bear-spray.jpg" alt="熊スプレー本体と専用ホルスター" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/gear/bear-bell.jpg"
              alt="スプレーレンタルに付いてくる熊鈴——カラビナと反射ストラップ付きの真鍮ベル"
            />
          </div>
        </div>
      </section>

      {/* おまけ */}
      <section className="mini-sec" id="extras">
        <span className="eyebrow">おまけ</span>
        <h2>ほかにも、こんなものを貸しています。</h2>
        <div className="mini-grid">
          {EXTRAS.map((x) => (
            <div className="mini-card" key={x.name}>
              <h3>
                {x.name} <small>{x.price} / 日</small>
              </h3>
              <p>{x.desc}</p>
            </div>
          ))}
        </div>
        <p className="drop-note">熊スプレーと一緒に、WhatsAppでお申し付けください。</p>
      </section>

      {/* 予約と決済 */}
      <section className="mini-sec" id="book">
        <span className="eyebrow">予約と決済</span>
        <h2>WhatsAppでひとこと、支払いはオンラインか店頭で。</h2>
        <div className="pay-row">
          <Link href="/ja/book?s=gear" className="stay-cta">
            <MessageCircle size={16} /> 熊スプレーをWhatsAppで予約
          </Link>
          <a
            href={SQUARE_PAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <CreditCard size={16} /> オンライン決済(Square)
          </a>
          <figure className="pay-qr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/square-pay-qr.png"
              alt="Square決済ページのQRコード——スキャンでレンタル代を支払えます"
            />
            <figcaption>スキャンでも支払えます</figcaption>
          </figure>
        </div>
        <p className="pay-note" style={{ textAlign: "left", marginLeft: 0 }}>
          金額はSquareのページで入力してください。店頭での現金払いもOK。
        </p>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
