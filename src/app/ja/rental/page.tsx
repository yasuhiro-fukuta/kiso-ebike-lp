"use client";

import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Compass,
  Backpack,
  Bike,
  Zap,
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
          <span className="eyebrow">セルフガイド · 半日 · 10:00–16:00</span>
          <h1>
            E-bikeを借りて、<em>谷をまるごと。</em>
          </h1>
          <p>
            充電済みのファットタイヤE-bikeをお渡しします。荷物は必要なら別便で谷の先へ。あとは自分のペースで走るだけ。どこへ行くか迷ったら、おすすめ3コースを載せた
            <Link href="/ja/second-day">セルフツアーのすすめ</Link>
            へ。ガイドと走りたい方は
            <Link href="/ja/guided">ガイドツアー</Link>をどうぞ。
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
        <h2>シンプルに、1台いくら。</h2>
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
          <div className="pitem">
            <h4>手荷物シャトル</h4>
            <div className="amt">
              ¥3,000<span style={{ fontSize: "0.9rem" }}>/1個目</span>
            </div>
            <p>
              2個目からは1個¥1,500(グループ単位)。下のオールインワンパックなら込みです。
            </p>
          </div>
        </div>
      </section>

      {/* ONE-WAY DROP */}
      <section className="drop-sec" id="one-way">
        <div className="drop-inner">
          <span className="eyebrow">乗り捨て(片道ドロップ)</span>
          <h2>
            片道で走りきる。<em>引き返さない。</em>
          </h2>
          <p>
            ふつうのレンタサイクルは「借りた場所に返す」が前提。うちは違います。ある地点で借りて、別の地点で返す。谷を一方向にまるごと味わってください。段取りはこちらの仕事です。
          </p>
          <div className="drop-steps">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>受け取る</h3>
              <p>
                ゲストハウス柏屋・南木曽駅・野尻駅のいずれかで受け取り。コースに合わせてどうぞ。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>片道で走る</h3>
              <p>
                ルートマップに沿って谷を下るだけ。手荷物シャトルを付ければ、荷物は別便で先回りします。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>返して、そのまま</h3>
              <p>
                3地点のどこで返してもOK。そのまま電車へ、または柏屋のお布団へ。回収はこちらでやります。
              </p>
            </div>
          </div>
          <p className="drop-note">
            出発地と到着地は別々で構いません。手荷物シャトル(1個目¥3,000、2個目から¥1,500・グループ単位)を予約時に伝えてもらえれば、受け渡しを組んでおきます。
          </p>
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

      {/* INCLUDED */}
      <section className="included">
        <span className="eyebrow">レンタルに含まれるもの</span>
        <h2>手ぶらでどうぞ。あとはこちらで。</h2>
        <div className="inc-grid">
          <div className="inc-item">
            <div className="icon">
              <Bike size={30} />
            </div>
            <h3>ヘルメット・鍵・ライト</h3>
            <p>出発前に体に合わせて調整。追加料金なし。</p>
          </div>
          <div className="inc-item">
            <div className="icon">
              <Compass size={30} />
            </div>
            <h3>ルートマップと地元情報</h3>
            <p>3コースの道順をスマホでナビ。見どころも口頭で。</p>
          </div>
          <div className="inc-item">
            <div className="icon">
              <Backpack size={30} />
            </div>
            <h3>乗り捨て無料</h3>
            <p>出発地と返却地が違ってもOK。追加料金はありません。</p>
          </div>
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
        <details className="faq-item">
          <summary>逆回り・周回はできますか?</summary>
          <p>
            できます。妻籠コースと渓谷コースは逆回りも周回もOK。予約時に伝えていただければ、受け渡し地点をそのように組みます。
          </p>
        </details>
        <details className="faq-item">
          <summary>手荷物シャトルの仕組みは?</summary>
          <p>
            南木曽駅・柏屋・野尻駅の間で荷物を運びます。1個目¥3,000、2個目から¥1,500(グループ単位)。オールインワン・デイパックなら1人2個まで込みです。
          </p>
        </details>
        <details className="faq-item">
          <summary>どこから出発してどこで終わる?</summary>
          <p>
            ①ゲストハウス柏屋、②南木曽駅、③野尻駅の3地点から選べます。出発地と到着地は同じでなくて構いません。
          </p>
        </details>
      </section>

      {/* ALL-IN-ONE PACK */}
      <AllInOnePack lang="ja" />

      <SiteFooter lang="ja" />
    </div>
  );
}
