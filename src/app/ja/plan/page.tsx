"use client";

import Link from "next/link";
import {
  MessageCircle,
  Train,
  UtensilsCrossed,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import {
  PLAN_WHATSAPP_URL_JA,
  MEALS_FORM_URL,
  KASHIWAYA_URL,
} from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

export default function JaPlanPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={PLAN_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> プランを送る
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <div>
          <span className="eyebrow">モデルプラン · 南木曽をベースキャンプに</span>
          <h1>
            南木曽、<em>3泊。</em>
          </h1>
          <p>
            長めの日本旅行、この谷には何泊分の価値があるのか?——地元の正直な答えは「3泊」です。ベッドは3晩とも柏屋、荷造りのやり直しはゼロ。そして毎日ちがう入り方で谷へ:歩いて、E-bikeで、電車で。
          </p>
        </div>
        <figure className="page-head-visual hero-wide">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/kashiwaya.jpg"
            alt="ゲストハウス柏屋——藍色ののれんがかかる木造二階建ての古い宿(南木曽)"
          />
          <figcaption>
            ベースキャンプは柏屋。中山道沿いの古い宿です。
          </figcaption>
        </figure>
      </header>

      {/* GETTING HERE */}
      <section className="mini-sec" id="access">
        <span className="eyebrow">アクセス</span>
        <h2>
          <Train size={26} style={{ verticalAlign: "-0.12em" }} />{" "}
          名古屋から電車で約1時間。
        </h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "56ch", marginBottom: "1rem" }}>
          東京・京都からは、まず新幹線で名古屋へ。名古屋からは
          <strong>特急しなのが1日4本、南木曽まで直通</strong>
          ——所要約1時間、南木曽着は8:00/11:00/16:00/20:43です。
        </p>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "56ch" }}>
          それ以外の時間帯は、特急または快速で中津川駅まで行き、普通列車に乗り換え。中津川から南木曽は約20分です。
        </p>
      </section>

      {/* THE THREE DAYS */}
      <section className="plans" id="days">
        <div className="plan">
          <div>
            <span className="plan-kicker">1日目 · 歩く</span>
            <h3>中山道を、手ぶらで</h3>
            <div className="plan-ja">The Nakasendo, hands-free</div>
            <p>
              朝、南木曽駅前のイズミヤカフェに荷物を預ければ、
              <Link href="/ja/luggage-shuttle">手荷物シャトル</Link>
              が先回りして運びます。
              <Link href="/ja/gear">檜傘</Link>
              を借りて、時間が止まった宿場・妻籠へ。脚が残っていれば峠を越えて馬籠方面まで。夜は宿に戻って、特別な日の鍋を(要事前予約・下記)。
            </p>
          </div>
          <div className="plan-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/tsumago.jpg"
              alt="妻籠宿の通りに面した縁台でのざる蕎麦"
            />
          </div>
        </div>

        <div className="plan">
          <div>
            <span className="plan-kicker">2日目 · E-bikeで</span>
            <h3>阿寺渓谷、エメラルドの一日</h3>
            <div className="plan-ja">Atera Gorge by e-bike</div>
            <p>
              <Link href="/ja/rental">E-bike</Link>
              (¥4,000/日)を借りて、鈴付きの
              <Link href="/ja/gear">熊スプレー</Link>
              を腰に、谷を下って阿寺渓谷へ。加工したみたいなエメラルドブルーですが、加工していません。暖かい季節は泳げます。涼しい季節は、旅いちばんの写真スポット。帰り道の登りは、E-bikeが無かったことにしてくれます。
            </p>
          </div>
          <div className="plan-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/tour/atera.jpg"
              alt="錆びた森林鉄道の橋の下に広がる、阿寺渓谷の信じがたい青"
            />
          </div>
        </div>

        <div className="plan">
          <div>
            <span className="plan-kicker">3日目 · 電車で</span>
            <h3>谷をさかのぼって奈良井宿へ</h3>
            <div className="plan-ja">Narai-juku by train</div>
            <p>
              脚を休める日。JR中央本線で谷をさかのぼり、中山道でも屈指の保存状態を誇る宿場・奈良井宿へ。昨日隣を走ったあの川の、源流近くに続く長い木造の町並みです。もうひと走りしたければ、朝食前に2時間の
              <Link href="/ja/guided#morning">早朝ガイドツアー</Link>
              (7:00–9:00)がちょうど収まります。
            </p>
          </div>
          <div className="img-wanted">
            <span className="iw-tag">写真は近日掲載</span>
            <span className="iw-note">奈良井宿の町並み</span>
          </div>
        </div>
      </section>

      {/* THE BASE — rooms & meals */}
      <section className="mini-sec" id="base">
        <span className="eyebrow">部屋と食事</span>
        <h2>ベッドひとつ、食卓ひとつ、3泊。</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "56ch", marginBottom: "1rem" }}>
          部屋の予約は柏屋の公式サイトから。空き状況は季節によりますが、
          <strong>夏と冬は3連泊が取りやすい</strong>時期です。
        </p>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "56ch", marginBottom: "2rem" }}>
          食事は、特別な日の鍋の夕食と、お茶漬けの朝ごはん。注文フォームから事前予約して、お支払いは当日です。写真と詳細は
          <Link href="/ja/stay">宿泊ページ</Link>へ。
        </p>
        <div className="pay-row">
          <a
            href={KASHIWAYA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            kashiwaya-inn.comで部屋を予約 <ExternalLink size={15} />
          </a>
          <a
            href={MEALS_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <UtensilsCrossed size={15} /> 食事を予約——注文フォーム
          </a>
        </div>
      </section>

      {/* ONE MESSAGE */}
      <div className="pay-sec">
        <div className="pay-notify">
          <p>
            <strong>
              準備ができたら、部屋以外はぜんぶWhatsApp1通でOK。日程・E-bikeの日・荷物・ギア・ツアー——ひとつのスレッドでまとめて確定します。
            </strong>
          </p>
          <a
            href={PLAN_WHATSAPP_URL_JA}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <MessageCircle size={16} /> WhatsAppでプランをまるごと送る
          </a>
        </div>
        <p className="pay-note">
          部屋は上の柏屋サイト、食事は注文フォームから。決めきれないところは空欄のまま送ってください——人間が答えます。
        </p>
      </div>

      {/* MORE IDEAS */}
      <section className="mini-sec" id="more">
        <span className="eyebrow">もっと長く滞在するなら</span>
        <h2>この谷は、3日では回りきれません。</h2>
        <Link href="/ja/second-day" className="stay-cta">
          セルフツアーのコースを見る <ArrowRight size={15} />
        </Link>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
