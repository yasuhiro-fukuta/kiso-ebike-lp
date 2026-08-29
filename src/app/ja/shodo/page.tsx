"use client";

import Link from "next/link";
import { MessageCircle, CloudRain, Mail } from "lucide-react";
import { SHODO_WHATSAPP_URL_JA, SUPPORT_MAILTO } from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

export default function JaShodoPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={SHODO_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで相談
      </FloatBook>

      {/* HERO */}
      <header className="shodo-hero">
        <span className="shodo-tate" aria-hidden="true">
          墨と筆と、静かな部屋。
        </span>
        <div className="shodo-hero-inner">
          <span className="eyebrow">書道体験 · ゲストハウス柏屋にて</span>
          <h1>
            ハンドルを、<em>筆に持ち替える。</em>
          </h1>
          <p>
            木曽谷はずっと手仕事の谷でした。ヒノキ、漆、そして墨。柏屋の静かな一室で、筆と墨と和紙を前に座り、ひと筆の始まりと曲がりと終わりを習います。経験は不要、道具はすべてこちらで用意します。
          </p>
        </div>
      </header>

      {/* PHOTO */}
      <section className="shodo-photo">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/shodo-class.jpg"
            alt="柏屋の座卓で筆と墨の書道体験をするゲストたち"
          />
          <figcaption>古い宿の一室で。それぞれが自分の一文字を見つけます。</figcaption>
        </figure>
      </section>

      {/* HOW IT FLOWS */}
      <section className="shodo-steps">
        <div className="shodo-steps-head">
          <span className="eyebrow">体験の流れ</span>
          <h2>
            ひとつの机、いっぽんの筆、<em>あなたの一文字。</em>
          </h2>
        </div>
        <div className="shodo-steps-grid">
          <div className="sstep">
            <div className="snum">一</div>
            <h3>席につく</h3>
            <p>
              畳の部屋の座卓に、筆・墨・和紙を用意してあります。筆の持ち方と、墨の振る舞いから始めましょう。
            </p>
          </div>
          <div className="sstep">
            <div className="snum">二</div>
            <h3>ひと筆を探す</h3>
            <p>
              基本の画を練習したら、自分にとって意味のある一文字を選びます。名前でも、言葉でも、願いでも。しっくりくるまで何度でも。
            </p>
          </div>
          <div className="sstep">
            <div className="snum">三</div>
            <h3>持って帰る</h3>
            <p>
              いちばん良く書けた一枚を選んで、お土産に。木曽谷で、墨で、自分の手で書いた一枚です。
            </p>
          </div>
        </div>
      </section>

      {/* PRICE + BOOKING */}
      <section className="shodo-book">
        <div className="shodo-book-inner">
          <div className="shodo-book-text">
            <span className="eyebrow">正直な料金</span>
            <h2>
              段位を取るまで、<em>8割引。</em>
            </h2>
            <p>
              正規料金は4名1グループで¥20,000(±1名につき±15%=¥3,000)。ただ、主宰の私はまだ書道の初段を目指して稽古中です。段位を取るまでの間、全セッションを8割引でご提供します。あなたは体験をまるごと、私は教える練習を。フェアな取引です。
            </p>
            <div className="how-to-book-label">予約方法 · WhatsApp</div>
            <div className="shodo-cta-row">
              <a
                href={SHODO_WHATSAPP_URL_JA}
                target="_blank"
                rel="noopener noreferrer"
                className="special-cta shodo-cta"
              >
                <MessageCircle size={18} /> WhatsAppで相談・予約
              </a>
              <a href={SUPPORT_MAILTO} className="shodo-cta-alt">
                <Mail size={16} /> メールでも
              </a>
            </div>
          </div>
          <div className="shodo-side">
            <div className="shodo-pricecard">
              <div className="from">トライアル価格 · 初段取得まで</div>
              <ul className="price-scale shodo-scale">
                <li>
                  <span>2名</span>
                  <s>¥14,000</s>
                  <b>¥2,800</b>
                </li>
                <li>
                  <span>3名</span>
                  <s>¥17,000</s>
                  <b>¥3,400</b>
                </li>
                <li className="base">
                  <span>4名</span>
                  <s>¥20,000</s>
                  <b>¥4,000</b>
                </li>
                <li>
                  <span>5名</span>
                  <s>¥23,000</s>
                  <b>¥4,600</b>
                </li>
                <li>
                  <span>6名</span>
                  <s>¥26,000</s>
                  <b>¥5,200</b>
                </li>
              </ul>
            </div>
            <div className="shodo-rainy">
              <CloudRain size={22} />
              <p>
                <strong>雨の日プランでもあります。</strong>
                大雨で<Link href="/ja/rental">ライド</Link>
                が危ないときは、予定を屋内に切り替えて、サドルを筆に持ち替えましょう。面倒な取り直しはなしで。
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
