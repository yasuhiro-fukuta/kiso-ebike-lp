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
  LUGGAGE_SEND_WHATSAPP_URL_JA,
  SQUARE_PAY_URL,
  MYMAP_EMBED_URL,
} from "../../site";
import { SiteNav, SiteFooter, FloatBook, AllInOnePack } from "../../chrome";
import { ShuttleCalendar } from "../../shuttle-calendar";

const IZUMIYA_IG = "https://www.instagram.com/izumiyacafe";
const KATANA_MAP = "https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA";
const HALL_MAP = "https://maps.app.goo.gl/PJDk8kvmz6Xxa9Dd8";
const WAKU_MAP = "https://maps.app.goo.gl/PdnuaBaziu99LA5i6";
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
      <div className="pay-notify">
        <p>
          <strong>
            支払いしたらWhatsAppで、①氏名 ②個数 ③発送場所 ④受取場所
            を送ってください。
          </strong>
        </p>
        <a
          href={LUGGAGE_SEND_WHATSAPP_URL_JA}
          target="_blank"
          rel="noopener noreferrer"
          className="stay-cta"
        >
          <MessageCircle size={16} /> WhatsAppで送る
        </a>
      </div>
      <p className="pay-note">
        金額はSquareのページで入力してください。店頭での現金払いもOK。
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
          <span className="eyebrow">手荷物シャトル · NAGISO — NOJIRI</span>
          <h1>
            Yes Road, <em>No load.</em>
          </h1>
          <p>
            荷物は駅から駅へ、私たちが運びます。朝、駅前のカフェに預けたら、中山道・与川道も渓谷も手ぶらで。昼過ぎには谷の向こうで荷物が待っています。
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

      {/* 料金 */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">料金</span>
        <h2>基本送料に、バッグの数を足すだけ。</h2>
        <div className="pricing">
          <div className="pitem">
            <h4>基本送料</h4>
            <div className="amt">
              ¥1,500<span style={{ fontSize: "0.9rem" }}>/グループ</span>
            </div>
            <p>グループ単位・当日中。妻籠〜野尻の各拠点間ならどこでも。</p>
          </div>
          <div className="pitem">
            <h4>バッグ1個につき</h4>
            <div className="amt">
              +¥1,500<span style={{ fontSize: "0.9rem" }}>/個</span>
            </div>
            <p>
              人数ではなくグループ単位で数えます。荷物3個なら合計¥6,000。
            </p>
          </div>
          <div className="pitem">
            <h4>熊スプレー</h4>
            <div className="amt">
              ¥1,500<span style={{ fontSize: "0.9rem" }}>/個</span>
            </div>
            <p>
              鈴付き・基本送料なし。南木曽で借りて、野尻で返却できます。
            </p>
          </div>
        </div>
      </section>

      {/* 決済——1回目 */}
      <PayBlock />

      {/* 営業日カレンダー */}
      <section className="cal-sec" id="calendar">
        <span className="eyebrow" style={{ display: "block", textAlign: "center", marginBottom: "1.2rem" }}>
          営業日カレンダー
        </span>
        <ShuttleCalendar lang="ja" />
      </section>

      {/* 仕組み */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">仕組み</span>
          <h2>
            予約不要。<em>預けて、払って、出発。</em>
          </h2>
          <p>
            <strong>10:30まで</strong>に、予約なしで、南木曽駅前(イズミヤカフェ)またはゲストハウスWAKUへ荷物を持ち込むだけ。
            <strong>13:30まで</strong>
            に野尻駅前(コーヒー刀※)に届きます。手ぶらで中山道・与川道や、柿其渓谷、阿寺渓谷を楽しみましょう。
            <br />
            <small>※月曜日は野尻駅前公民館で荷物をお預かりします。</small>
          </p>

          {/* 4コマ */}
          <div className="koma-grid">
            <div className="koma">
              <span className="koma-num">1</span>
              <Store size={26} />
              <h3>預ける</h3>
              <p>
                10:30までに、南木曽駅前のカフェ・イズミヤか、ゲストハウスWAKUへ荷物を持ち込み。
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
        <span className="eyebrow">窓口はこちら</span>
        <h2>預ける窓口、受け取る窓口。</h2>
        <div className="mini-grid cols2">
          <a
            href={IZUMIYA_IG}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <Instagram size={20} /> Izumiya Cafe Nagiso · 預け
            </h3>
            <p>
              メインの預け窓口。南木曽駅の目の前です。出発前の一杯にもどうぞ。写真と営業時間はInstagramへ。
            </p>
          </a>
          <a
            href={WAKU_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <MapPin size={20} /> ゲストハウスWAKU · 預け
            </h3>
            <p>
              こちらからも預けられます。WAKUに預けた荷物も、コーヒー刀(月曜は公民館)へお届け。地図はこちら。
            </p>
          </a>
          <a
            href={KATANA_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <MapPin size={20} /> コーヒー刀 · 受け取り
            </h3>
            <p>
              受け取り窓口。野尻駅の目の前——荷物との再会はコーヒー片手に。地図はこちら。
            </p>
          </a>
          <a
            href={HALL_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <MapPin size={20} /> 野尻駅前公民館 · 受け取り(月曜)
            </h3>
            <p>
              コーヒー刀が定休日の月曜は、受け取りはこちらで。同じく野尻駅の目の前です。タップで地図が開きます。
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
