"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bike,
  BedDouble,
  Backpack,
  Shirt,
  Compass,
  Map,
  MessageCircle,
} from "lucide-react";
import { RENTAL_WHATSAPP_URL_JA } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

const SERVICES = [
  {
    href: "/ja/rental",
    icon: Bike,
    title: "E-bikeレンタル",
    desc: "静かな谷の道をセルフガイドで。乗り捨てOK、手荷物は別便で運べます。",
  },
  {
    href: "/ja/second-day",
    icon: Map,
    title: "セルフツアーのすすめ",
    desc: "南木曽での「2日目」の過ごし方。おすすめ3コースを地図つきで公開中。",
  },
  {
    href: "/ja/stay",
    icon: BedDouble,
    title: "宿泊",
    desc: "いまはゲストハウス柏屋。2027年には一棟貸しの古民家も。",
  },
  {
    href: "/ja/luggage-shuttle",
    icon: Backpack,
    title: "手荷物シャトル",
    desc: "駅と宿の間で荷物を運びます。歩きも走りも、手ぶらで。",
  },
  {
    href: "/ja/gear",
    icon: Shirt,
    title: "ギアレンタル",
    desc: "ヒノキ傘、熊鈴・熊スプレー、川遊びや冬の装備まで1点から。",
  },
  {
    href: "/ja/guided",
    icon: Compass,
    title: "ガイドツアー",
    desc: "朝7時からの早朝2時間ライド。木曽川ダウンヒルは近日公開。",
  },
];

export default function JaHomePage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={RENTAL_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* HERO */}
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <span className="eyebrow hero-eyebrow">長野県南木曽町 · 木曽谷 · 中山道</span>
        <h1>
          ガイドブックの外へ。<em>地元の遊び方</em>で。
        </h1>
        <p className="hero-sub">
          日帰り客が素通りしていく谷には、隠れた渓谷、森林鉄道の跡、飛び込める川の淵があります。私たちは中山道沿いの里山でE-bikeを軸に、宿・荷物・道具・ガイドまでそろえた「旅の道具箱」を営んでいます。
        </p>
        <div className="hero-cta">
          <Link href="/ja/rental" className="btn-primary">
            E-bikeを借りる <ArrowRight size={16} />
          </Link>
          <Link href="/ja/second-day" className="btn-ghost">
            2日目の過ごし方はこちら
          </Link>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          <span>柿其渓谷</span>
          <span>阿寺渓谷</span>
          <span>与川道</span>
          <span>妻籠宿</span>
          <span>地元しか知らない道</span>
          <span>柿其渓谷</span>
          <span>阿寺渓谷</span>
          <span>与川道</span>
          <span>妻籠宿</span>
          <span>地元しか知らない道</span>
        </div>
      </div>

      {/* INTRO */}
      <section className="intro">
        <div>
          <span className="eyebrow">私たちについて</span>
          <h2>
            京都と江戸を結ぶ旧街道、その<em>里山</em>のE-bike拠点。
          </h2>
          <p>
            南木曽は中山道の宿場町。妻籠・馬籠を目指して誰もが通り過ぎていきますが、本当にいい場所は幹線から数分外れたところにあります。エメラルドの渓谷、忘れられた鉄道跡、地元の人だけが知る泳ぎ場。
          </p>
          <p>
            静かなE-bikeはこの谷を開ける鍵。その周りに、泊まる宿、荷物を運ぶシャトル、借りられる道具、一緒に走るガイド、そして一人で行く人への正直なアドバイスを揃えました。必要なものを下から選んでください。
          </p>
        </div>
        <div className="intro-visual"></div>
      </section>

      {/* SERVICE DIRECTORY */}
      <section className="mini-sec" id="services">
        <span className="eyebrow">できること</span>
        <h2>入口は6つ。</h2>
        <div className="mini-grid">
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className="mini-card">
              <h3>
                <s.icon size={20} /> {s.title}
              </h3>
              <p>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
