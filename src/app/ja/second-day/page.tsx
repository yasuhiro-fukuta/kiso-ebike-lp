"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { RENTAL_WHATSAPP_URL_JA, MYMAP_EMBED_URL } from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

export default function JaSecondDayPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={RENTAL_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">セルフツアーのすすめ · 自分のペースで</span>
        <h1>
          南木曽での<em>「2日目」</em>のための3コース。
        </h1>
        <p>
          昨日は中山道を歩いた。なら今朝9時の電車で帰るのはもったいない。ここに載せたのは、私たちが自分の友人に教えている3つのセルフガイドコースです。どれもスマホでナビできる地図つきで、宿の玄関からそのまま走り出せます。季節と脚力で選んだら、
          <Link href="/ja/rental">E-bikeを借りて</Link>出発してください。
        </p>
      </header>

      {/* THE THREE ROUTES */}
      <section className="tours" id="routes">
        <div className="tours-head">
          <span className="eyebrow">コースを選ぶ</span>
          <h2>3コース。どれも観光ルートから少し外れています。</h2>
          <p>
            いずれも半日(10:00–16:00)。受け渡し地点間の道順は、スマホのルートマップでターンバイターン表示できます。
          </p>
        </div>
        <div className="tour-grid">
          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/tsumago.jpg" alt="夕暮れの妻籠宿の街道" />
              <span className="lvl">やさしい</span>
              <span className="season">春・秋</span>
            </div>
            <div className="body">
              <h3>もういちど、妻籠</h3>
              <div className="route">春・秋がベスト · やさしい</div>
              <p>
                かつての森林鉄道跡は、いまは地元の人しか知らない静かな舗装路。そのまま妻籠宿へつながります。前日の夜、着くのが遅くて宿場を歩き足りなかった人にぴったり。
              </p>
              <div className="price">
                <small>3コースで一番やさしい · 初めての1本に</small>
                <span className="price-note">セルフガイド — E-bike 1台¥4,000</span>
              </div>
              <a href={RENTAL_WHATSAPP_URL_JA} target="_blank" rel="noopener noreferrer" className="card-book">
                このコースで予約 <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/gorge.jpg" alt="エメラルド色の渓谷と岩" />
              <span className="lvl">ふつう</span>
              <span className="season">夏・初冬</span>
            </div>
            <div className="body">
              <h3>天然クーラーと温泉</h3>
              <div className="route">夏・初冬がベスト · ふつう</div>
              <p>
                夏の与川道は美しいけれど暑さが本気。対岸には田んぼ道とやさしい峠、そして2つの滝を結ぶ細い道があります。
                <Link href="/ja/gear">ギアレンタル</Link>
                でラッシュガードを借りて、渓谷に飛び込んで涼んでください。道の終点には温泉。冬はそちらに飛び込んで。
              </p>
              <div className="price">
                <small>夏は川遊び · 冬は温泉</small>
                <span className="price-note">セルフガイド — E-bike 1台¥4,000</span>
              </div>
              <a href={RENTAL_WHATSAPP_URL_JA} target="_blank" rel="noopener noreferrer" className="card-book">
                このコースで予約 <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/challengers.jpg" alt="阿寺川の渓谷の滝" />
              <span className="lvl">きつい</span>
              <span className="season">健脚向け</span>
            </div>
            <div className="body">
              <h3>中山道チャレンジ</h3>
              <div className="route">与川道越え · きつい</div>
              <p>
                中山道全体でもっとも美しい区間と言われる与川道。途中に店はなく、馬籠峠より少し長くて登りも多い、自信のある人向けのコースです。旧道に沿う細い舗装路を走ります。脚に覚えのある方はぜひ。
              </p>
              <div className="price">
                <small>急で長い · 自信のある人向け</small>
                <span className="price-note">セルフガイド — E-bike 1台¥4,000</span>
              </div>
              <a href={RENTAL_WHATSAPP_URL_JA} target="_blank" rel="noopener noreferrer" className="card-book">
                このコースで予約 <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTE MAPS */}
      <section className="routemaps" id="maps">
        <div className="routemaps-inner">
          <span className="eyebrow">道に迷わない</span>
          <h2>ルートマップ</h2>
          <p>
            走るコースはこちらの地図に。スマホで開けば、受け渡し地点間の道順をそのままナビできます。
          </p>
          <div className="map-embed">
            <iframe
              src={MYMAP_EMBED_URL}
              title="木曽谷E-bikeルートマップ"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      {/* WHAT YOU NEED */}
      <section className="hub-band">
        <div className="hub-band-inner">
          <span className="eyebrow">あとは走るだけ</span>
          <h2>
            コースは無料。<em>チケットはE-bike。</em>
          </h2>
          <p>
            E-bikeは1台¥4,000(乗り捨てOK)。熊対策やラッシュガードはギアレンタルで、荷物は手荷物シャトルで。全部まとめるなら1人¥7,000のオールインワンパックが割安です。
          </p>
          <Link href="/ja/rental" className="band-cta">
            E-bikeを借りる <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
