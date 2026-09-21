"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL_JA, MYMAP_EMBED_URL } from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

export default function JaSecondDayPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">セルフツアーのすすめ · 南木曽・木曽谷</span>
        <h1>
          中山道は、<em>木曽谷の魅力の「入口」です。</em>
        </h1>
        <p>
          中山道は0泊か1泊で「素通り」されがちです。馬籠から妻籠を歩いて、一晩寝て、翌朝には京都へ。でもこの谷の魅力は、一本の街道だけではありません。私を含め、都会からここまで観光に来て、果ては移住までしてしまった人の多くが、この地を知ったきっかけは「川」と「サイクリング」でした。そこで提案です——<b>1日目は歩く、2日目は走る</b>。旧道はみんなと同じように歩いて、翌日は9時に発つ代わりに、E-bikeで川を下り、渓谷に入り、観光バスの来ない宿場を巡ってください。
        </p>
      </header>

      {/* THE THREE ROUTES */}
      <section className="tours" id="routes">
        <div className="tours-head">
          <span className="eyebrow">コースを選ぶ</span>
          <h2>4コース。どれも観光ルートから少し外れています。</h2>
          <p>
            いずれも半日(10:00–16:00)。受け渡し地点間の道順は、スマホのルートマップでターンバイターン表示できます。
          </p>
        </div>

        <h3 className="tour-group-title">南木曽 〜 野尻 片道</h3>
        <div className="tour-grid">
          <div className="tour-card">
            <div className="top">
              <div className="img-wanted" style={{ minHeight: 0, height: "100%", borderRadius: 0, border: 0 }}>
                <span className="iw-tag">写真は近日掲載</span>
              </div>
              <span className="lvl">やさしい</span>
              <span className="season">オールシーズン</span>
            </div>
            <div className="body">
              <h3>鉄道Lovers</h3>
              <div className="route">オールシーズン · やさしい</div>
              <p>
                1761年頃に新中山道・与川道ができる前の、さらに昔の旧中山道です。現在は舗装されていますが、交通量が少なく快適。日本の鉄道オタクの隠れた冬の名所にもなっているコースで、線路と並走しながら、運が良ければ特急しなののベストショットを。
              </p>
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
            </div>
          </div>
        </div>

        <h3 className="tour-group-title">南木曽周辺 周回</h3>
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
            E-bikeは1台¥4,000(乗り捨てOK)。熊対策やラッシュガードはギアレンタルで、荷物は手荷物シャトルで。全部まとめるなら1人¥7,000のShuttle E-bikeパッケージが割安です。
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
