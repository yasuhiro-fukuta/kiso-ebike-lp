"use client";

import Link from "next/link";
import { MessageCircle, CreditCard } from "lucide-react";
import { SQUARE_PAY_URL } from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

const GEAR_ITEMS: {
  name: string;
  price: string;
  desc: string;
  photos?: { src: string; alt: string }[];
  wanted?: string;
}[] = [
  {
    name: "ヒノキ傘",
    price: "¥500",
    desc: "手ぶらで日差し除け・雨よけ・雪よけができる、夏も冬も優れもの。地元の職人お手製、地元の檜で編み込まれています。",
    photos: [
      {
        src: "/assets/gear/straw-hat.jpg",
        alt: "ヒノキ傘——墨書きの入った編み笠",
      },
    ],
  },
  {
    name: "熊スプレー(熊鈴付き)",
    price: "¥1,500",
    desc: "ここは熊の山です。スプレーはもしもの時の切り札——受け取り時に使い方を説明します。さらに熊鈴を1個セットでお付けするので、出番が来る前に音でこちらを知らせられます。",
    photos: [
      {
        src: "/assets/gear/bear-spray.jpg",
        alt: "熊スプレー本体と専用ホルスター",
      },
      {
        src: "/assets/gear/bear-bell.jpg",
        alt: "スプレーレンタルに付いてくる熊鈴——カラビナと反射ストラップ付きの真鍮ベル",
      },
    ],
  },
  {
    name: "ラッシュガード",
    price: "¥2,000",
    desc: "柿其・阿寺の泳ぎ場のお供に。冷えと日焼けを気にせずエメラルドの淵へ。男性用・女性用あります。",
    photos: [
      {
        src: "/assets/gear/watergear-f.jpg",
        alt: "女性用ラッシュガードセット——ネイビーのジップアップ、レギンス、花柄ショーツ",
      },
      {
        src: "/assets/gear/watergear-m.jpg",
        alt: "男性用ラッシュガードセット——黒の長袖トップスとレギンス",
      },
    ],
  },
  {
    name: "ライフジャケット",
    price: "¥1,000",
    desc: "深い淵でも安心して浮かべます。ラッシュガードと合わせて川遊びフル装備に。",
    photos: [
      {
        src: "/assets/gear/life-jacket.jpg",
        alt: "ライフジャケット——バックル調整式の黒いフローティングベスト",
      },
    ],
  },
  {
    name: "防寒具セット",
    price: "¥1,000",
    desc: "寒い季節のライドに。下りが最後まで気持ちいいままでいられる保温レイヤーです。",
    wanted: "冬装備で走っているカット",
  },
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
        <span className="eyebrow">ギアレンタル · 1点単位 · 1日料金</span>
        <h1>
          この谷の<em>仕事着</em>、貸します。
        </h1>
        <p>
          何百年もこの道を歩いてきた編み笠から、山が静かに要求してくる熊スプレーまで。どれも1点から借りられます。その日に必要なものだけを宿で受け取って、お支払いは当日カードか現金で。毎週月曜日は定休です。
        </p>
      </header>

      {/* ITEMS */}
      <section className="plans" id="items">
        {GEAR_ITEMS.map((item) => (
          <div className="plan" key={item.name}>
            <div>
              <span className="plan-kicker">{item.price} / 日</span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
            {item.photos ? (
              <div className={`plan-photos${item.photos.length > 1 ? " duo" : ""}`}>
                {item.photos.map((p) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={p.src} src={p.src} alt={p.alt} />
                ))}
              </div>
            ) : (
              <div className="img-wanted">
                <span className="iw-tag">写真募集中</span>
                <span className="iw-note">{item.wanted}</span>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ALL-IN-ONE PACK */}
      {/* 予約と決済 */}
      <section className="mini-sec" id="book">
        <span className="eyebrow">予約と決済</span>
        <h2>WhatsAppでひとこと、支払いはオンラインか店頭で。</h2>
        <div className="pay-row">
          <Link href="/ja/book?s=gear" className="stay-cta">
            <MessageCircle size={16} /> ギアをWhatsAppで予約
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
              alt="Square決済ページのQRコード——スキャンでギアレンタル代を支払えます"
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
