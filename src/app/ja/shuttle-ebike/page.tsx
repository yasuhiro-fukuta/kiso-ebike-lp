"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  PACK_WHATSAPP_URL_JA,
  PHONE,
  PHONE_TEL,
  SUPPORT_MAILTO,
} from "../../site";
import { SiteNav, SiteFooter, FloatBook, AllInOnePack } from "../../chrome";

const IZUMIYA_MAP = "https://maps.app.goo.gl/4nDgY2TvN6cYh5fQA";
const KATANA_MAP = "https://maps.app.goo.gl/qYoin6P4mrkmbs4v9";
const DONGURI_MAP = "https://maps.app.goo.gl/SS9hxF9WcvB4iQqdA";

export default function JaShuttleEbikePage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={PACK_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head page-head-grid">
        <div>
          <span className="eyebrow">Shuttle E-bike · 乗り捨て · 手ぶら</span>
          <h1>
            「Shuttle E-bike」、<em>新しい提案です。</em>
          </h1>
          <p>
            「シャトルバスをE-bikeでやったら、快適で楽しいんじゃないか?」——こんなアイデアから始めました。スタート地点で荷物を預けて、E-bikeを受け取る。ゴール地点でE-bikeを返して、荷物を受け取る。渓谷沿いの道や中山道など、美しい道がいくつも通る南木曽駅前〜野尻駅前をつないだら、とても快適で楽しい移動体験になりました。名付けて「Shuttle E-bike」。
          </p>
        </div>
        <figure className="page-head-visual poster">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/shuttle-ebike-poster.jpg"
            alt="FREE FROM WEIGHT——Shuttle E-bikeのポスター。荷物を預けて、E-bikeを受け取って、身軽に走る。荷物は目的地までお届け"
          />
          <figcaption>谷のどこかで見かけるはずのポスター</figcaption>
        </figure>
      </header>

      {/* HOW IT WORKS */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">言葉の中身</span>
          <h2>
            自転車は出張、荷物は先回り。<em>あなたは走るだけ。</em>
          </h2>
          <p>
            3つのサービスをひとつの滑らかな一日に溶かした——それがこの言葉のからくりです。
          </p>
          <div className="drop-steps">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>装備を入れ替える</h3>
              <p>
                南木曽駅前のカフェ「Izumiya」で荷物を預けて、E-bikeを受け取ります。{" "}
                <a href={IZUMIYA_MAP} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
                  Izumiyaの地図
                </a>
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>手ぶらで走る</h3>
              <p>
                旧中山道、新中山道・与川道、柿其・阿寺渓谷など、レベルに合わせてお好みのルートで。詳しくは
                <Link href="/ja/second-day" style={{ color: "var(--gold)" }}>こちら</Link>
                。あなたが走っている間に、荷物はお昼にゴールへ運ばれます。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>ゴールで荷物を受け取る</h3>
              <p>
                野尻駅前で乗り捨てて、駅前のカフェ「Katana」で荷物を受け取り(月曜日はカフェどんぐり)。電車を待つ間、ぜひコーヒーを。{" "}
                <a href={KATANA_MAP} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
                  Katana
                </a>
                {" · "}
                <a href={DONGURI_MAP} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
                  どんぐり
                </a>
              </p>
            </div>
          </div>
          <p className="drop-note">
            スタートとゴールは一致しなくてOK。コースは
            <Link href="/ja/second-day" style={{ color: "var(--gold)" }}>
              セルフツアーのすすめ
            </Link>
            から選んでもらえれば、受け渡しはこちらで組みます。
          </p>
        </div>
      </section>

      {/* THE PACKAGE */}
      <section className="mini-sec" id="package">
        <span className="eyebrow">パッケージ</span>
        <h2>ひとつの料金で、谷が勝手に回りだす。</h2>
        <div className="pricing">
          <div className="pitem">
            <h4>Shuttle E-bikeパッケージ</h4>
            <div className="amt">
              ¥7,000<span style={{ fontSize: "0.9rem" }}>/人</span>
            </div>
            <p>
              E-bike、熊鈴、熊スプレー、お好きなギア1点、手荷物シャトル(1人2個まで)。Shuttle
              E-bikeの一日まるごと、WhatsAppひと言で。
            </p>
          </div>
          <div className="pitem">
            <h4>単品で組むなら</h4>
            <div className="amt">
              ¥4,000<span style={{ fontSize: "0.9rem" }}>〜</span>
            </div>
            <p>
              E-bike 1台¥4,000、手荷物シャトルは基本送料¥1,500/グループ+1個¥1,500、ギアは1点¥500から。荷物が1個でもあるなら、だいたいパッケージの勝ちです。
            </p>
          </div>
          <div className="pitem">
            <h4>使えるエリア</h4>
            <div className="amt">4エリア</div>
            <p>
              妻籠・南木曽(柏屋/駅)・十二兼・野尻。どこをスタートにしても、ゴールにしても、荷物の受け渡し場所にしてもOK。
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="booking" id="book">
        <span className="eyebrow">予約方法 · WhatsApp</span>
        <h2>
          ひと言で、<em>一日が組み上がる。</em>
        </h2>
        <p>
          日付・人数・スタート地点を送ってください。自転車と荷物と受け渡し地点、こちらで並べます。事前決済なし——お支払いは当日、カードか現金で。
        </p>

        <div className="square-embed">
          <a
            href={PACK_WHATSAPP_URL_JA}
            className="booking-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> パッケージをWhatsAppで予約
          </a>
        </div>

        <p className="booking-alt">
          電話派の方は <a href={PHONE_TEL}>{PHONE}</a> か
          <a href={SUPPORT_MAILTO}>メール</a>でもどうぞ。
        </p>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <h2>よくある質問</h2>
        <details className="faq-item">
          <summary>パッケージ、本当にお得ですか?</summary>
          <p>
            ほぼ確実に。自転車(¥4,000)+荷物1個(送料込み¥3,000)+ギア1点で、もう¥7,000を超えます。パッケージはそこに熊鈴・熊スプレー・荷物2個目まで乗ってきます。
          </p>
        </details>
        <details className="faq-item">
          <summary>どのコースで使えますか?</summary>
          <p>
            <Link href="/ja/second-day">セルフツアーのすすめ</Link>
            の3コースすべてで。順走でも逆走でも周回でも、計画を教えてもらえれば自転車と荷物をそこに合わせて配置します。
          </p>
        </details>
        <details className="faq-item">
          <summary>宿泊と組み合わせられますか?</summary>
          <p>
            出発または到着を宿泊予定の宿にすることは、場所によっては可能です。WhatsAppでご相談ください。
          </p>
        </details>
      </section>

      {/* THE BANNER */}
      <AllInOnePack lang="ja" link={false} />

      <SiteFooter lang="ja" />
    </div>
  );
}
