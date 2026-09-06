"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL_JA, PHONE, PHONE_TEL, SUPPORT_MAILTO } from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

export default function JaLiveHerePage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで相談
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">観光客から、住民へ</span>
        <h1>
          走りに来て、<em>住みついてしまう。</em>
        </h1>
        <p>
          パンフレットには載せない話をひとつ。あなたにE-bikeを手渡しているこの人間も、最初は旅行者としてこの谷に来ました——そして、なんとなく帰りそびれて今に至ります。実は、よくある話なんです。だから、川と旧街道の間のどこかで「ここに住んだらどんな感じだろう」とふと思ってしまったなら、それは変な考えではありません。ちょっと早いだけ。その先は、こちらが手伝えます。
        </p>
      </header>

      {/* THE PATHWAY */}
      <section className="drop-sec" id="pathway">
        <div className="drop-inner">
          <span className="eyebrow">導線</span>
          <h2>
            人は谷に「移住」しない。<em>「帰ってくる」だけ。</em>
          </h2>
          <p>
            観光客から住民になった知り合いは、みんなだいたい同じ3段階を踏んでいます。それをそのまま、サービスにしました。
          </p>
          <div className="drop-steps">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>まず、遊びに来る</h3>
              <p>
                谷を走って、
                <Link href="/ja/stay" style={{ color: "var(--gold)" }}>
                  柏屋
                </Link>
                に泊まって、土地の人間と話す。いまあなたがいるのは、たぶんこの段階です。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>ワンシーズン、戻ってくる</h3>
              <p>
                この谷の観光も農業も、季節の働き手で回っています。ひと季節働いて、シーズナルワーカー向け賃貸に住んで、「雨の火曜日の谷」がどんな顔かを確かめてください。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>そのまま、住む</h3>
              <p>
                季節が肌に合ったら、あとは紹介です。大家さん、働き口、役場、ご近所——地元の人間が隣で戸を叩くと、この谷の扉はずっと早く開きます。
              </p>
            </div>
          </div>
          <p className="drop-note">
            申込書もプログラムも、相談料もありません。これは商品というより、村の営みです。最初の一歩は、メッセージひとつ。
          </p>
        </div>
      </section>

      {/* SEASONAL RENTAL */}
      <section className="mini-sec" id="rental">
        <span className="eyebrow">シーズナルワーカー向け賃貸</span>
        <h2>ひと季節ぶんの、住まい。</h2>
        <div className="pricing">
          <div className="pitem">
            <h4>どんな部屋?</h4>
            <div className="amt">2軒</div>
            <p>
              季節労働で南木曽に来る人のための家具付きの住まいが2軒——
              <strong>Aoki</strong>と<strong>Ono</strong>
              。短期の新参者を阻む例の「契約の壁」なしで、月単位で借りられます。
            </p>
          </div>
          <div className="pitem">
            <h4>誰のため?</h4>
            <div className="amt">働く人</div>
            <p>
              観光・農業・林業の季節スタッフ。それから、ひと季節の仕事を決めて「住む前に試す」つもりの本気の移住検討者。
            </p>
          </div>
          <div className="pitem">
            <h4>家賃と空き</h4>
            <div className="amt">要相談</div>
            <p>
              空き状況は季節で動きます。希望の時期をWhatsAppで送ってもらえれば、いまの家賃と空きをお伝えします。
            </p>
          </div>
        </div>
      </section>

      {/* THE HOUSES */}
      <section className="stay-cards" id="houses">
        <div className="stay-card">
          <div className="stay-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/midono101.jpg"
              alt="Aoki——藍色の戸と瓦屋根の平屋。谷を見下ろす立地"
            />
          </div>
          <div className="stay-body">
            <span className="stay-badge">シーズナル賃貸</span>
            <h3>Aoki</h3>
            <p>
              2軒のうちのひとつ。家具付き・月単位。写真と詳細は近日掲載——いまの家賃と空きは、WhatsAppひと言で答えます。
            </p>
          </div>
        </div>

        <div className="stay-card">
          <div className="stay-photos">
            <div className="img-wanted">
              <span className="iw-tag">写真募集中</span>
              <span className="iw-note">Ono 外観・内観の写真</span>
            </div>
          </div>
          <div className="stay-body">
            <span className="stay-badge">シーズナル賃貸</span>
            <h3>Ono</h3>
            <p>
              もう1軒。条件は同じく、月単位・家具付き・面倒な契約の壁なし。希望の季節を教えてもらえれば、どちらが合うかお伝えします。
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="booking" id="book">
        <span className="eyebrow">はじめかた · WhatsApp</span>
        <h2>
          メッセージひとつ、<em>10年早く。</em>
        </h2>
        <p>
          いまどの段階にいるか教えてください——ただ気になっているだけでも、季節の仕事を探していても、部屋を見に来る気でも。谷暮らしの格好よくない部分も含めて、正直に答えます。
        </p>

        <div className="square-embed">
          <a
            href={WHATSAPP_URL_JA}
            className="booking-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> まず話してみる
          </a>
        </div>

        <p className="booking-alt">
          電話・SMSは <a href={PHONE_TEL}>{PHONE}</a>、
          <a href={SUPPORT_MAILTO}>メール</a>でもどうぞ。
        </p>
      </section>

      {/* WHY HERE BAND */}
      <section className="hub-band">
        <div className="hub-band-inner">
          <span className="eyebrow">正直に言うと</span>
          <h2>
            この谷は勧誘しない。<em>ただ、離さない。</em>
          </h2>
          <p>
            田舎暮らしの夢は売りません。冬は本気だし、終電は早いし、木曜日にはもう全員があなたの名前を知っています。——その並びが「長所リスト」に見えた人は、まず一度、遊びに来てください。
          </p>
          <Link href="/ja/second-day" className="band-cta">
            まずは2日目をちゃんと過ごす <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
