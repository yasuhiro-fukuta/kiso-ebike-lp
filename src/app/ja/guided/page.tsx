"use client";

import {
  MessageCircle,
  ShieldCheck,
  HeartPulse,
  Droplet,
  Wind,
} from "lucide-react";
import {
  WHATSAPP_URL_JA,
  MORNING_WHATSAPP_URL_JA,
  SPECIAL_MAP_EMBED_URL,
  SPECIAL_MAP_VIEW_URL,
} from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

/** 早朝ツアーの四季。写真が来たら photo にパスを入れる。 */
const MORNING_SEASONS: {
  season: string;
  photo: string | null;
  alt: string;
  wanted: string;
}[] = [
  { season: "春", photo: null, alt: "桜並木の道を走る早朝ライド", wanted: "春:桜並木の道(朝日+花びら)" },
  { season: "夏", photo: null, alt: "朝の岩倉川", wanted: "夏:岩倉川(朝の川面・緑)" },
  { season: "秋", photo: null, alt: "秋の田んぼ道", wanted: "秋:田んぼ道(稲穂・朝靄)" },
  { season: "冬", photo: null, alt: "雪の林道", wanted: "冬:雪の林道(轍・静けさ)" },
];

export default function JaGuidedPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで相談
      </FloatBook>

      {/* 早朝サイクリングツアー */}
      <header className="page-head page-head-grid" id="morning">
        <div>
          <span className="eyebrow">ガイドツアー · 7:00–9:00 · 2時間</span>
          <h1>
            早朝サイクリングツアー — <em>朝ごはんの前に、谷をひとりじめ。</em>
          </h1>
          <p>
            朝7時の宿場町にいるのは、住民と、川霧と、あなただけ。南木曽の路地と川沿いの道を、一日でいちばん柔らかい光の中でゆっくり2時間走ります。9時には戻るので、朝食にもチェックアウトにも間に合う。ガイドツアー入門に最適な、このサイトでいちばん美しい2時間です。
          </p>
        </div>
        <div className="seasons-grid">
          {MORNING_SEASONS.map((s) =>
            s.photo ? (
              <figure className="season-cell" key={s.season}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.photo} alt={s.alt} />
                <figcaption className="season-tag">{s.season}</figcaption>
              </figure>
            ) : (
              <div className="season-cell img-wanted" key={s.season}>
                <span className="season-tag">{s.season}</span>
                <span className="iw-note">{s.wanted}</span>
              </div>
            )
          )}
        </div>
      </header>

      <section className="morning-extras">
        <div className="pricing">
          <div className="pitem">
            <h4>ガイド料</h4>
            <div className="amt">
              ¥4,000<span style={{ fontSize: "0.9rem" }}>/グループ</span>
            </div>
            <p>地元ガイド1名が7:00–9:00、グループ全体をご案内。</p>
          </div>
          <div className="pitem">
            <h4>E-bike</h4>
            <div className="amt">
              ¥2,000<span style={{ fontSize: "0.9rem" }}>/人</span>
            </div>
            <p>バイク込みの1人あたり料金。2人なら合計¥8,000、4人で¥12,000。</p>
          </div>
          <div className="pitem">
            <h4>柏屋宿泊者</h4>
            <div className="amt">¥0</div>
            <p>柏屋にお泊まりなら、ガイド代もバイク代も無料。</p>
          </div>
        </div>

        <div className="campaign">
          <div className="campaign-badge">柏屋宿泊者特典</div>
          <div className="campaign-body">
            <h3>
              柏屋に泊まれば、<em>このツアーは無料。</em>
            </h3>
            <p>
              ゲストハウス柏屋の宿泊者は、早朝ツアーにガイド代・バイク代ともに¥0で参加できます。起きて、走って、朝ごはんが冷める前に帰ってくる。前日の夜に一声かけてください。
            </p>
          </div>
        </div>

        <div className="morning-cta-row">
          <a
            href={MORNING_WHATSAPP_URL_JA}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <MessageCircle size={16} /> 早朝ツアーをWhatsAppで予約
          </a>
          <span className="morning-cta-note">
            お支払いは当日(カード/現金)。柏屋宿泊者はチェックイン時に一言どうぞ。
          </span>
        </div>
      </section>

      {/* 木曽川ダウンヒル(近日公開) */}
      <section className="special" id="downhill">
        <div className="special-inner">
          <div className="special-head">
            <span className="eyebrow">ガイドツアー · 1日</span>
            <span className="special-badge">近日公開</span>
            <h2>
              木曽川ダウンヒル — <em>世界一快適な50km。</em>
            </h2>
            <p className="special-lead">
              <b>藪原宿から南木曽駅まで48.9km、ほぼ全部が下り。</b>
              木曽川の源流近くから出発し、山の沢が一本の大河に育っていくのを追いかけながら、木曽路の宿場を7つ(藪原から三留野まで)つないで、長くゆるやかに下っていきます。藪原で朝食、木曽福島で昼食、野尻駅でコーヒー休憩、夕方の光の中で南木曽にゴール。全行程を地元ガイドが何度も走り込み、いちばん美しく、快適で、安全なラインを選び抜きました。
              <b>各グループにガイド2名</b>——先頭がラインを引き、しんがりが見守ります。
            </p>
          </div>

          <div className="special-stats">
            <div className="sstat">
              <div className="num">
                48.9<small>&nbsp;km</small>
              </div>
              <div className="lbl">総距離</div>
            </div>
            <div className="sstat">
              <div className="num">
                ↓613<small>&nbsp;m</small>
              </div>
              <div className="lbl">下り · 登りは94mだけ</div>
            </div>
            <div className="sstat">
              <div className="num">7</div>
              <div className="lbl">通過する宿場</div>
            </div>
            <div className="sstat">
              <div className="num">2</div>
              <div className="lbl">各グループのガイド数</div>
            </div>
          </div>

          <div className="special-map">
            <h3 className="special-sec-title">コース</h3>
            <div className="map-frame">
              <iframe
                src={SPECIAL_MAP_EMBED_URL}
                title="木曽川ダウンヒル ルートマップ"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <p className="map-cap">
              藪原から南木曽まで、48.9kmの全ライン。{" "}
              <a href={SPECIAL_MAP_VIEW_URL} target="_blank" rel="noopener noreferrer">
                Googleマップで開く →
              </a>
            </p>
          </div>

          <div className="special-guides">
            <h3>誰と走るのか</h3>
            <p className="guides-lead">
              このツアーは、一年を通じてこの道を走り込んでいる地域の自転車チームがご案内します。各グループにガイド2名——先頭と、しんがり。メンバーの正式紹介はローンチ時に公開します。
            </p>
          </div>

          <div className="special-body">
            <div className="special-day">
              <h3>一日の流れ</h3>
              <ul className="day-line">
                <li>
                  <div className="place">藪原宿</div>
                  <div className="role">宿場で朝食、そして出発</div>
                </li>
                <li>
                  <div className="place">木曽福島</div>
                  <div className="role">昼食。だいたい中間地点</div>
                </li>
                <li>
                  <div className="place">野尻駅</div>
                  <div className="role">コーヒー休憩で脚を伸ばす</div>
                </li>
                <li>
                  <div className="place">
                    南木曽駅 <span className="alt">409 m</span>
                  </div>
                  <div className="role">夕方の光の中でゴール</div>
                </li>
              </ul>
            </div>

            <div className="special-price">
              <div className="from">4名1グループ · 全部込み</div>
              <div className="amt">¥80,000</div>
              <p className="breakdown">
                ガイド2名とE-bike全台込みの一日料金。4名で¥80,000を基準に、±1名につき15%(¥12,000)増減します。
              </p>
              <ul className="price-scale">
                <li>
                  <span>2名</span>
                  <b>¥56,000</b>
                </li>
                <li>
                  <span>3名</span>
                  <b>¥68,000</b>
                </li>
                <li className="base">
                  <span>4名</span>
                  <b>¥80,000</b>
                </li>
                <li>
                  <span>5名</span>
                  <b>¥92,000</b>
                </li>
                <li>
                  <span>6名</span>
                  <b>¥104,000</b>
                </li>
              </ul>
              <div className="how-to-book-label">近日公開</div>
              <a
                href={WHATSAPP_URL_JA}
                target="_blank"
                rel="noopener noreferrer"
                className="special-cta"
              >
                <MessageCircle size={18} /> 発売したらWhatsAppでお知らせ
              </a>
              <p className="special-cta-note">
                催行日はまだ公開前です。WhatsAppでメッセージをいただければ、最初の日程が出た瞬間にお知らせします。
              </p>
            </div>
          </div>

          <div className="special-faq">
            <h3>参加前に知っておきたいこと</h3>
            <details className="sfaq">
              <summary>セルフガイドで走れますか?</summary>
              <p>
                いいえ、このコースはガイド付き限定です。数カ所、曲がり損ねると交通量の多い道に出てしまう場所があります。安全のため、全行程をガイド2名(先頭としんがり)が伴走します。
              </p>
            </details>
            <details className="sfaq">
              <summary>50kmも走れる自信がありません。</summary>
              <p>
                50km近いと聞くと上級者向けに思えますよね。でもほぼ全区間がゆるい下りで、数少ない登りはハイパワーのE-bikeが肩代わりします。平地で10km走れる人なら、笑顔でゴールできます。自分を見くびらないでください。
              </p>
            </details>
            <details className="sfaq">
              <summary>途中でリタイアできますか?</summary>
              <p>
                できます。コースはずっとJR中央線に沿っているので、体調が優れなければ最寄り駅から電車でどうぞ。バイクは駅の駐輪場に停めてもらえれば、あとで回収します。
              </p>
            </details>
            <details className="sfaq">
              <summary>悪天候のときは?</summary>
              <p>
                雨や雪の場合は原則中止・返金です。ただしうちのE-bikeは多少の悪路に強いので、安全と体験に響かない程度で、参加者全員が走りたい場合は催行することもあります。途中で天候が崩れたらそこで中止し、一部を返金して、電車でゴールへ向かいます。
              </p>
            </details>
            <details className="sfaq">
              <summary>熊は出ますか?</summary>
              <p>
                この山域の常として、木曽にもツキノワグマはいます。熊鈴と熊スプレーをお渡しし、先頭は必ずリードガイドが走り、出発前に「出会ったらどうするか」のブリーフィングを行います。
              </p>
            </details>
            <details className="sfaq">
              <summary>夏の暑さ・冬の寒さは?</summary>
              <p>
                夏はラッシュガードを貸し出し、こまめに水をかぶり、川の淵で泳いで休憩します。冬は防寒着を貸し出し、道中の足湯や温泉で温まりながら走ります。
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 野外救命資格 */}
      <section className="guide" id="wfa">
        <div className="guide-inner">
          <div className="guide-text">
            <span className="eyebrow">
              <ShieldCheck size={15} /> ライドの安全について
            </span>
            <h2>
              山の中では、ガイドが最初の救助者。やっくんは<em>その訓練を受けています。</em>
            </h2>
            <p>
              やっくん(福田)は Wilderness Medical Associates International
              の野外救命資格(WFA)保持者。遠征隊や山岳救助チームが頼るのと同じトレーニングです。谷の奥では救急車が遠い。だから、着くまでの「つなぎ」になれるよう備えています。
            </p>
            <ul className="guide-skills">
              <li>
                <HeartPulse size={18} /> 成人CPRとAEDの使用
              </li>
              <li>
                <Wind size={18} /> 気道異物の除去
              </li>
              <li>
                <Droplet size={18} /> 重度出血のコントロール
              </li>
            </ul>
            <p className="guide-consent">
              ライドへの参加により、緊急時にはこの資格の範囲で、救急隊到着までの応急処置を行うことに同意いただいたものとします。
            </p>
          </div>

          <div className="guide-proof">
            <div className="cert-stack">
              <div className="cert cert-front">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/WFA1.jpg"
                  alt="福田康宏のWilderness First Aid認定カード(Wilderness Medical Associates International発行、2029年2月18日まで有効、Course ID 37079)"
                />
              </div>
              <div className="cert cert-back">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/WFA2.jpg"
                  alt="認定カードの裏面(プログラム規約と有効期限)"
                />
              </div>
            </div>
            <div className="cert-cap">
              Wilderness First Aid · Wilderness Medical Associates Int&apos;l ·
              Course ID 37079 · 2029年2月まで有効
            </div>
          </div>
        </div>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
