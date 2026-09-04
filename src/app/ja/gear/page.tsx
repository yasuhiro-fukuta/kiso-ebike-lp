"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL_JA } from "../../site";
import { SiteNav, SiteFooter, FloatBook, AllInOnePack } from "../../chrome";

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
    desc: "木曽路を何百年も歩いてきた、旅人の編み笠。本物の日陰と本物の歴史——そして中山道でいちばんの写真小道具です。",
    photos: [
      {
        src: "/assets/gear/straw-hat.jpg",
        alt: "ヒノキ傘——墨書きの入った編み笠",
      },
    ],
  },
  {
    name: "熊鈴セット",
    price: "¥500",
    desc: "ここは熊の山です。鈴の音でこちらの存在を先に知らせるのが、いちばんの対策。",
    photos: [
      {
        src: "/assets/gear/bear-bell.jpg",
        alt: "熊鈴——カラビナと反射ストラップ付きの真鍮ベル。バッグにすぐ付けられます",
      },
    ],
  },
  {
    name: "熊スプレー",
    price: "¥2,000",
    desc: "もしもの時の切り札。受け取り時に使い方を説明します。与川道を歩く人、静かな谷へ走る人に。",
    photos: [
      {
        src: "/assets/gear/bear-spray.jpg",
        alt: "熊スプレー本体と専用ホルスター",
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

      <FloatBook href={WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで相談
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">ギアレンタル · 1点単位 · 1日料金</span>
        <h1>
          この谷の<em>仕事着</em>、貸します。
        </h1>
        <p>
          何百年もこの道を歩いてきた編み笠から、山が静かに要求してくる熊スプレーまで。どれも1点から借りられます。その日に必要なものだけを宿で受け取って、お支払いは当日カードか現金で。
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
      <AllInOnePack lang="ja" />

      <SiteFooter lang="ja" />
    </div>
  );
}
