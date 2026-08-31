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

export default function JaShuttleEbikePage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={PACK_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Shuttle E-bike · 乗り捨て · 手ぶら</span>
        <h1>
          「Shuttle E-bike」、<em>じわじわ広まってます。</em>
        </h1>
        <p>
          この谷での走り方に、最近呼び名がつき始めました。E-bikeはスタート地点で待っていて、荷物は車で先回り、あなたは木曽谷を一方通行で下るだけ——引き返さない、担がない、段取りしない。それをまとめて
          <strong>「Shuttle E-bike(シャトルEバイク)」</strong>
          と呼んでいます。一度やれば、専用の言葉が要った理由がわかります。
        </p>
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
              <h3>自転車が来る</h3>
              <p>
                E-bikeは柏屋・南木曽駅・野尻駅のうち、あなたの一日が始まる地点で待っています。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>荷物が先に行く</h3>
              <p>
                あなたが走っている間に、荷物は車で谷を下ります。到着地点で合流。パッケージなら1人2個まで。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>一方通行で走る</h3>
              <p>
                マップ付きコースを下流へ。終点で自転車を乗り捨てて、そのまま電車へ——あるいは柏屋の寝床へ。回収はこちらでやります。
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
              E-bike 1台¥4,000、手荷物シャトル1個目¥3,000(2個目から¥1,500・グループ単位)、ギアは1点¥500から。荷物が1個でもあるなら、だいたいパッケージの勝ちです。
            </p>
          </div>
          <div className="pitem">
            <h4>使える地点</h4>
            <div className="amt">3カ所</div>
            <p>
              柏屋・南木曽駅・野尻駅。どこをスタートにしても、ゴールにしても、荷物の受け渡し場所にしてもOK。
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
            ほぼ確実に。自転車(¥4,000)+荷物1個(¥3,000)+ギア1点で、もう¥7,000を超えます。パッケージはそこに熊鈴・熊スプレー・荷物2個目まで乗ってきます。
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
            それが王道です。荷物は<Link href="/ja/stay">柏屋</Link>
            へ先回り、あなたは手ぶらで走って到着。翌朝のライドは玄関先から始まります。
          </p>
        </details>
      </section>

      {/* THE BANNER */}
      <AllInOnePack lang="ja" link={false} />

      <SiteFooter lang="ja" />
    </div>
  );
}
