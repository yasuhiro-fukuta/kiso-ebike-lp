"use client";

import Link from "next/link";
import {
  MessageCircle,
  CreditCard,
  Footprints,
  Store,
  PackageCheck,
  Instagram,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  LUGGAGE_WHATSAPP_URL_JA,
  SQUARE_PAY_URL,
  MYMAP_EMBED_URL,
} from "../../site";
import { SiteNav, SiteFooter, FloatBook, AllInOnePack } from "../../chrome";

const IZUMIYA_IG = "https://www.instagram.com/izumiyacafe";
const KATANA_MAP = "https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA";
const MYMAP_VIEW =
  "https://www.google.com/maps/d/viewer?mid=1UdxxoxfvuLwGjvlmiEC3vyAbExP95b0";

/** 決済ボタン+QR——ページ上部と最下部の2カ所に出す。 */
function PayBlock() {
  return (
    <div className="pay-sec">
      <div className="pay-row pay-row-center">
        <a
          href={SQUARE_PAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="stay-cta"
        >
          <CreditCard size={16} /> シャトル料金をオンライン決済(Square)
        </a>
        <figure className="pay-qr">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/square-pay-qr.png"
            alt="Square決済ページのQRコード——スキャンでシャトル料金を支払えます"
          />
          <figcaption>スキャンでも支払えます</figcaption>
        </figure>
      </div>
      <p className="pay-note">
        基本送料 ¥1,500/グループ+荷物1個につき ¥1,500/個。鈴つき熊スプレー
        ¥1,500/個。金額はSquareのページで入力してください。店頭での現金払いもOK。
      </p>
    </div>
  );
}

export default function JaLuggageShuttlePage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={LUGGAGE_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで相談
      </FloatBook>

      {/* PAGE HEAD——タイトル・キャッチコピー・写真 */}
      <header className="page-head page-head-grid">
        <div>
          <span className="eyebrow">手荷物シャトル · 南木曽 → 野尻</span>
          <h1>
            旧道は、<em>手ぶらで歩く</em>のがいちばん。
          </h1>
          <p>
            与川道も、南木曽まわりの渓谷も、身軽なほど楽しめます。朝、駅前のカフェに荷物を預ければ、昼過ぎには谷の向こうで荷物が待っています。
          </p>
        </div>
        <figure className="page-head-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/shuttle-van.jpg"
            alt="シャトル便のバン。スーツケースとバックパックを積み込んで谷を下ります"
          />
          <figcaption>積んだら出発。荷物のほうが先に着きます</figcaption>
        </figure>
      </header>

      {/* 決済——1回目 */}
      <PayBlock />

      {/* 仕組み */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">仕組み</span>
          <h2>
            予約不要。<em>預けて、払って、出発。</em>
          </h2>
          <p>
            <strong>10:30まで</strong>
            に南木曽駅前のカフェに荷物を預けてお会計をすれば、
            <strong>13:30まで</strong>
            に荷物が野尻駅前のコーヒー刀(月曜日は野尻駅前公民館)に届きます。手ぶらで中山道・与川道や、柿其渓谷、阿寺渓谷を楽しみましょう。
          </p>

          {/* 4コマ */}
          <div className="koma-grid">
            <div className="koma">
              <span className="koma-num">1</span>
              <Store size={26} />
              <h3>預ける</h3>
              <p>
                10:30までに、南木曽駅前のカフェ・イズミヤへ荷物を持ち込み。
              </p>
            </div>
            <div className="koma">
              <span className="koma-num">2</span>
              <CreditCard size={26} />
              <h3>支払う</h3>
              <p>その場でお会計。SquareのQRでも、カード・現金でも。</p>
            </div>
            <div className="koma">
              <span className="koma-num">3</span>
              <Footprints size={26} />
              <h3>遊ぶ</h3>
              <p>与川道を歩く。柿其・阿寺で泳ぐ。肩ひもはゼロ。</p>
            </div>
            <div className="koma">
              <span className="koma-num">4</span>
              <PackageCheck size={26} />
              <h3>受け取る</h3>
              <p>
                13:30以降、野尻駅前のコーヒー刀で受け取り(月曜は駅前公民館)。
              </p>
            </div>
          </div>

          <p className="drop-note">
            逆方向(野尻→南木曽)や、妻籠・十二兼の発着もOK。WhatsAppでひと言もらえれば手配します。
          </p>
        </div>
      </section>

      {/* 預ける店・受け取る店 */}
      <section className="mini-sec" id="counters">
        <span className="eyebrow">窓口はこの2軒</span>
        <h2>預けるカフェ、受け取るカフェ。</h2>
        <div className="mini-grid">
          <a
            href={IZUMIYA_IG}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <Instagram size={20} /> Izumiya Cafe Nagiso
            </h3>
            <p>
              預け窓口。南木曽駅の目の前です。出発前の一杯にもどうぞ。写真と営業時間はInstagramへ。
            </p>
          </a>
          <a
            href={KATANA_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <MapPin size={20} /> コーヒー刀(野尻駅前)
            </h3>
            <p>
              受け取り窓口。野尻駅の目の前——荷物との再会はコーヒー片手に。月曜日は駅前公民館での受け取りになります。地図はこちら。
            </p>
          </a>
        </div>
      </section>

      {/* 手ぶらで行く先 */}
      <section className="mini-sec" id="routes">
        <span className="eyebrow">手ぶらで行く先</span>
        <h2>静かな旧道ひとつ、エメラルドの渓谷ふたつ。</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "52ch", marginBottom: "2rem" }}>
          <strong>与川道</strong>
          は南木曽と野尻をつなぐ中山道の忘れられた迂回路。森と石畳の静かな道です。
          <strong>柿其渓谷・阿寺渓谷</strong>
          は、この谷がエメラルドの水を隠している場所。3つとも下の地図に載せてあります。コースの詳しい解説は
          <Link href="/ja/second-day">セルフツアーのすすめ</Link>へ。
        </p>
        <div className="map-embed">
          <iframe
            src={MYMAP_EMBED_URL}
            title="与川道・柿其・阿寺のルートマップ"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <a
          href={MYMAP_VIEW}
          target="_blank"
          rel="noopener noreferrer"
          className="stay-cta"
        >
          Googleマップで地図を開く <ExternalLink size={15} />
        </a>
      </section>

      {/* 決済——2回目 */}
      <section className="mini-sec" id="pay">
        <span className="eyebrow">準備はいい?</span>
        <h2>荷物をまとめたら、駅前のカフェで。</h2>
      </section>
      <PayBlock />

      {/* ALL-IN-ONE PACK */}
      <AllInOnePack lang="ja" />

      <SiteFooter lang="ja" />
    </div>
  );
}
