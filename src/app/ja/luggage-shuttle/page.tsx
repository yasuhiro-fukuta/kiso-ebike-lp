"use client";

import Link from "next/link";
import { MessageCircle, Backpack, Footprints, Train } from "lucide-react";
import { WHATSAPP_URL_JA } from "../../site";
import { SiteNav, SiteFooter, FloatBook, AllInOnePack } from "../../chrome";

export default function JaLuggageShuttlePage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで相談
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">手荷物シャトル · 南木曽 ↔ 野尻</span>
        <h1>
          旧道は、<em>手ぶらで歩く</em>のがいちばん。
        </h1>
        <p>
          与川道も南木曽まわりのトレイルも、身軽なほど楽しめます。南木曽駅・ゲストハウス柏屋・野尻駅の間で荷物をお運びします。歩いても走っても、向こう側に着いたら荷物が待っている——そういう仕組みです。
        </p>
      </header>

      {/* HOW IT WORKS */}
      <section className="drop-sec">
        <div className="drop-inner">
          <span className="eyebrow">仕組み</span>
          <h2>
            3ステップで、<em>肩ひもゼロ。</em>
          </h2>
          <p>
            谷に沿った当日配送です。朝に荷物を預けて、一日歩くか走るかして、向こう端で受け取るだけ。
          </p>
          <div className="drop-steps">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>預ける</h3>
              <p>南木曽駅・柏屋・野尻駅のいずれかで、出発前の朝に。</p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>身軽に歩く・走る</h3>
              <p>
                与川道を歩くもよし、E-bikeコースを走るもよし。持つのは水とお昼だけ。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>受け取って、次へ</h3>
              <p>
                目的地で荷物が待っています。うちにお泊まりなら、そのまま枕元へ。
              </p>
            </div>
          </div>
          <div className="pricing" style={{ marginTop: "2.2rem" }}>
            <div className="pitem">
              <h4>1個目</h4>
              <div className="amt">¥3,000</div>
              <p>グループ単位・当日中。3地点間ならどこでも。</p>
            </div>
            <div className="pitem">
              <h4>2個目から</h4>
              <div className="amt">
                ¥1,500<span style={{ fontSize: "0.9rem" }}>/個</span>
              </div>
              <p>
                人数ではなくグループ単位で数えます。荷物3個なら合計¥6,000。
              </p>
            </div>
            <div className="pitem">
              <h4>パッケージなら</h4>
              <div className="amt">込み</div>
              <p>
                <Link href="/ja/shuttle-ebike" style={{ color: "var(--gold)" }}>
                  Shuttle E-bikeパッケージ
                </Link>
                (¥7,000/人)には1人2個まで含まれます。
              </p>
            </div>
          </div>
          <p className="drop-note">
            お支払いは当日(カード/現金)。日付・個数・方向をWhatsAppで送っていただければ、受け渡し時刻を折り返します。
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="mini-sec">
        <span className="eyebrow">こんな人に</span>
        <h2>シャトルを使うのは</h2>
        <div className="mini-grid">
          <Link href="/ja/second-day" className="mini-card">
            <h3>
              <Footprints size={20} /> 与川道を歩く人
            </h3>
            <p>
              静かな中山道の迂回路をデイパックひとつで。荷物は野尻で落ち合います。
            </p>
          </Link>
          <Link href="/ja/rental" className="mini-card">
            <h3>
              <Backpack size={20} /> 片道ライドの人
            </h3>
            <p>
              峠越えに荷物を担がない。乗り捨てコースのお供に、またはShuttle E-bikeパッケージで丸ごと。
            </p>
          </Link>
          <Link href="/ja/stay" className="mini-card">
            <h3>
              <Train size={20} /> 電車旅の人
            </h3>
            <p>
              電車で着いて一泊するなら、駅と宿の間の荷物運びもこちらで。
            </p>
          </Link>
        </div>
      </section>

      {/* ALL-IN-ONE PACK */}
      <AllInOnePack lang="ja" />

      <SiteFooter lang="ja" />
    </div>
  );
}
