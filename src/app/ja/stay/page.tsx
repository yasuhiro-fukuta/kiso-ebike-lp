"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import { KASHIWAYA_URL, RENTAL_WHATSAPP_URL_JA } from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

export default function JaStayPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={RENTAL_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">南木曽に泊まる</span>
        <h1>
          谷で眠る。<em>できれば、二晩。</em>
        </h1>
        <p>
          ライドも川も旧街道も、すべて宿の玄関先から始まります。そして宿場町がいちばん美しいのは、日帰り客の消えた朝と夕方。一晩泊まれば景色が見え、二晩泊まれば
          <Link href="/ja/second-day">この谷の暮らし</Link>が見えてきます。
        </p>
      </header>

      {/* STAY OPTIONS */}
      <section className="stay-cards">
        <div className="stay-card">
          <div className="stay-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/kashiwaya.jpg" alt="ゲストハウス柏屋の外観(藍色の暖簾のかかる木造二階建)" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/breakfast.jpg" alt="柏屋の朝食セット(蜜蝋ラップのかかった椀と説明カード)" />
          </div>
          <div className="stay-body">
            <span className="stay-badge">営業中</span>
            <h3>ゲストハウス柏屋</h3>
            <p>
              南木曽の木造の古い宿。E-bikeを手渡すのと同じ人間が宿も守っているので、荷物も自転車も寝床も、会話ひとつで片づきます。川まで歩いてすぐ。朝起きたら、そのまま2日目のコースへ。
            </p>
            <p>
              客室と料金は柏屋のサイトへ。日程を確かめたら、ここに戻って旅程を組んでください。
            </p>
            <a
              href={KASHIWAYA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="stay-cta"
            >
              kashiwaya-inn.com で空室を見る <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <div className="stay-card">
          <div className="stay-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/kitahara.jpg" alt="改修予定の北原の古民家(夕暮れのパノラマ)" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/kitahara2.jpg" alt="北原の古民家の玄関先——谷と集落を見下ろす眺め" />
          </div>
          <div className="stay-body">
            <span className="stay-badge soon">2027年オープン予定</span>
            <h3>古民家を、一棟まるごと。</h3>
            <p>
              2軒目の古民家を、一日一組の一棟貸しとして改修中です。設計思想は「自転車乗りのための宿」。バイクは土間へ、濡れた装備はストーブの前へ、朝は玄関からそのまま谷の道へ。
            </p>
            <div className="stay-perk">
              <strong>連泊特典:</strong>
              連泊のお客様は、2泊目以降の日中のE-bike利用が無料。長く居るほど、谷は近くなる。
            </div>
            <p>
              詳細とオープン日はこのページで最初に告知します。WhatsAppで一報いただければ、続報をお送りします。
            </p>
          </div>
        </div>
      </section>

      {/* WHY STAY BAND */}
      <section className="hub-band">
        <div className="hub-band-inner">
          <span className="eyebrow">ここを拠点にする理由</span>
          <h2>
            寝床ひとつ、渓谷みっつ、<em>段取りゼロ。</em>
          </h2>
          <p>
            駅と宿の間の手荷物シャトル。玄関先のE-bike。与川道も柿其も阿寺も午前中に届く距離。そして「明日の天気ならどの谷か」を正直に教える地元の人間。
          </p>
          <Link href="/ja/second-day" className="band-cta">
            2日目の計画を立てる <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
