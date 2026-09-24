"use client";

import Link from "next/link";
import {
  MessageCircle,
  ShieldCheck,
  HeartPulse,
  Droplet,
  Wind,
  Luggage,
  Headphones,
} from "lucide-react";
import {
  GUIDED_WHATSAPP_URL_JA,
  MORNING_WHATSAPP_URL_JA,
  SPECIAL_MAP_EMBED_URL,
  SPECIAL_MAP_VIEW_URL,
} from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";

/** 早朝ツアーの四季写真。 */
const MORNING_SEASONS: {
  season: string;
  photo: string | null;
  alt: string;
  wanted: string;
}[] = [
  {
    season: "春",
    photo: "/assets/morning/spring.jpg",
    alt: "夜明けの桜並木を走る(南木曽)",
    wanted: "春:桜並木の道(朝日+花びら)",
  },
  {
    season: "夏",
    photo: "/assets/morning/summer.jpg",
    alt: "初夏の朝の岩倉川",
    wanted: "夏:岩倉川(朝の川面・緑)",
  },
  {
    season: "秋",
    photo: "/assets/morning/autumn.jpg",
    alt: "秋の朝、稲穂の田んぼ道",
    wanted: "秋:田んぼ道(稲穂・朝靄)",
  },
  {
    season: "冬",
    photo: "/assets/morning/winter.jpg",
    alt: "冬の朝の雪の林道",
    wanted: "冬:雪の林道(轍・静けさ)",
  },
];

export default function JaGuidedPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={GUIDED_WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* HERO——木曽川ダウンヒル */}
      <header className="page-head">
        <div>
          <span className="eyebrow">ガイドライド · 木曽谷</span>
          <h1>
            木曽川ダウンヒル——<em>日本一快適な50kmを作っています。</em>
          </h1>
          <p>
            藪原から南木曽まで約50km、そのほとんどが下り坂。英語の有人サポート付きで地元ガイドが並走し、サポートカーが一日を影から支え、荷物はあなたが走っている間に宿へ届きます。距離は下から選べます:定番のフル50km、気軽なハーフ25km、そして近日公開の
            <em>木曽イチ</em>100km。
          </p>
        </div>
        <figure className="page-head-visual hero-wide">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/kisoriver.jpg"
            alt="木曽川沿いの静かな舗装路を走るライダー。両岸に緑の山"
          />
          <figcaption>木曽川が、最後までずっと隣にいます。</figcaption>
        </figure>
      </header>

      {/* WHY US */}
      <section className="mini-sec" id="why">
        <span className="eyebrow">選ばれる理由</span>
        <h2>このツアーが違うところ</h2>
        <p
          style={{
            fontWeight: 300,
            color: "#3a352d",
            maxWidth: "52ch",
            marginBottom: "2rem",
          }}
        >
          最初のお客様が「Game-changing」と言ってくれたのは、この部分でした:
        </p>
        <div className="mini-grid">
          <div className="mini-card">
            <h3>
              <MessageCircle size={20} /> WhatsApp対応
            </h3>
            <p>予約や質問も、スタッフが英語で直接対応します。</p>
          </div>
          <div className="mini-card">
            <h3>
              <Headphones size={20} /> 英語対応
            </h3>
            <p>
              走行中もインカム&グループ通話で、ガイド+お客様+通訳オペレーターがつながり、会話がスムーズに流れます。
            </p>
          </div>
          <div className="mini-card">
            <h3>
              <Luggage size={20} /> 荷物運びは標準装備
            </h3>
            <p>
              出発地で預ければ、宿で待っています。オプションではなくパッケージ込み。
            </p>
          </div>
        </div>
      </section>

      {/* レベルで選ぶ */}
      <section className="tours" id="levels">
        <div className="tours-head">
          <span className="eyebrow">レベルで選ぶ</span>
          <h2>谷の下り方は、3つ。</h2>
          <p>
            どのコースもワンパッケージ:並走ガイド+サポートドライバー兼英語オペレーター+E-bike+荷物の宿への搬送込み。
          </p>
        </div>
        <div className="tour-grid">
          {/* A */}
          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/tour/paddies.jpg"
                alt="金色の稲穂の脇、E-bikeにまたがったまま写真を撮るライダー"
              />
              <span className="lvl">ミドル</span>
              <span className="season">販売中</span>
            </div>
            <div className="body">
              <h3>A · 木曽川ダウンヒル</h3>
              <div className="route">藪原 → 南木曽 · 48.9km · 1日</div>
              <p>
                定番のフルコース。7つの宿場、上松のうなぎ昼食、阿寺渓谷への寄り道、夕方の光の中のゴール。詳細はこの下に。
              </p>
              <div className="price">
                <small>ガイド・ドライバー・バイク・荷物運び込み</small>
                <span className="price-note">
                  ¥40,000/4名 · 1名±で±15% · いまオープンキャンペーンで総額半額
                </span>
              </div>
              <a
                href={GUIDED_WHATSAPP_URL_JA}
                target="_blank"
                rel="noopener noreferrer"
                className="card-book"
              >
                WhatsAppで予約 <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* B */}
          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/tour/bridge.jpg"
                alt="木曽川にかかる赤い鉄橋を渡るライダー"
              />
              <span className="lvl">ライト</span>
              <span className="season">販売中</span>
            </div>
            <div className="body">
              <h3>B · ハーフダウンヒル</h3>
              <div className="route">木曽福島 → 南木曽 · 約25km · 半日</div>
              <p>
                同じ川を、半分の距離で。関所の町・木曽福島から、谷のいちばん穏やかな区間だけを下ります。初めての方も家族連れも。
              </p>
              <div className="price">
                <small>ガイド・ドライバー・バイク・荷物運び込み</small>
                <span className="price-note">料金はWhatsAppでご相談</span>
              </div>
              <a
                href={GUIDED_WHATSAPP_URL_JA}
                target="_blank"
                rel="noopener noreferrer"
                className="card-book"
              >
                WhatsAppで予約 <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* C */}
          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/tour/tunnel.jpg"
                alt="谷の一本道でトンネルの入口を通過するライダー"
              />
              <span className="lvl">チャレンジ</span>
              <span className="season">近日公開</span>
            </div>
            <div className="body">
              <h3>C · 木曽イチ Kiso-ichi</h3>
              <div className="route">木曽をめぐる約100km · 早朝発〜夕刻着</div>
              <p>
                伊那谷を登り、峠を越えて木曽へ戻り、ダウンヒルをまるごと走って帰ってくる約100km。あわいち、びわいち——次に名を連ねるのは木曽イチです。最初の走者になりませんか。
              </p>
              <div className="price">
                <small>ロードバイク経験者向け</small>
                <span className="price-note">近日公開</span>
              </div>
              <a
                href={GUIDED_WHATSAPP_URL_JA}
                target="_blank"
                rel="noopener noreferrer"
                className="card-book"
              >
                公開通知をWhatsAppで受け取る <MessageCircle size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* コースA詳細 */}
      <section className="special" id="downhill">
        <div className="special-inner">
          <div className="special-head">
            <span className="eyebrow">コースA · 1日 · ガイド専用</span>
            <span className="special-badge">予約受付中</span>
            <h2>
              木曽川ダウンヒル、<em>くわしく。</em>
            </h2>
            <p className="special-lead">
              <b>藪原宿から南木曽駅まで48.9km、ほぼすべて下り。</b>
              木曽川の源流近くから出発し、山の沢が一本の大河に育っていくのを追いかけながら、旧中山道の宿場を7つつないで、長くゆるやかに下っていきます。
              <b>地元ガイドが並走し</b>
              、サポートドライバー兼英語オペレーターが荷物を積んで一日を車で伴走します。
            </p>
          </div>

          <figure className="special-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/tour/paddies.jpg"
              alt="金色の稲穂の脇、E-bikeにまたがったまま写真を撮るライダー"
            />
            <figcaption>
              稲穂と青空の道——思わず止まって、カメラを構える瞬間。
            </figcaption>
          </figure>

          <div className="special-stats">
            <div className="sstat">
              <div className="num">
                48.9<small>&nbsp;km</small>
              </div>
              <div className="lbl">総距離</div>
            </div>
            <div className="sstat">
              <div className="num">
                ↓521<small>&nbsp;m</small>
              </div>
              <div className="lbl">藪原駅930m → 南木曽駅409m</div>
            </div>
            <div className="sstat">
              <div className="num">7</div>
              <div className="lbl">木曽の宿場</div>
            </div>
            <div className="sstat">
              <div className="num">2</div>
              <div className="lbl">ガイド+英語オペレーターの2名体制</div>
            </div>
          </div>

          <div className="special-map">
            <h3 className="special-sec-title">コース</h3>
            <div className="map-frame">
              <iframe
                src={SPECIAL_MAP_EMBED_URL}
                title="木曽川ダウンヒル——全ルートマップ"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <p className="map-cap">
              藪原から南木曽までの48.9km。{" "}
              <a
                href={SPECIAL_MAP_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Googleマップでルートを開く →
              </a>
            </p>
          </div>

          <div className="special-guides">
            <h3>一緒に走るのは</h3>
            <p className="guides-lead">
              一年中この道を走っている地域のサイクリストチーム。各グループにガイド1名+サポートドライバー兼英語オペレーター1名。走りながら、宿場ごとの物語をガイドがインカムでひとこと添えていきます。
            </p>
          </div>

          <div className="special-body">
            <div className="special-day">
              <h3>一日の流れ</h3>
              <ul className="day-line">
                <li>
                  <div className="place">
                    藪原宿 · 9:30 <span className="alt">930 m</span>
                  </div>
                  <div className="role">
                    コーヒーバー薮原に集合(駅から徒歩10分)。鳥居峠の分水嶺の下、木曽川が始まる宿場から出発
                  </div>
                </li>
                <li>
                  <div className="place">宮ノ越宿</div>
                  <div className="role">
                    木曽義仲と巴御前のふるさと。巴淵に立ち寄り
                  </div>
                </li>
                <li>
                  <div className="place">木曽福島宿</div>
                  <div className="role">
                    天下の四大関所の町。コーヒーと木曽もなかで一服
                  </div>
                </li>
                <li>
                  <div className="place">上松宿 · 12:00ごろ</div>
                  <div className="role">
                    伊勢神宮を建て替える木曽ヒノキの町。うなぎの昼食
                  </div>
                </li>
                <li>
                  <div className="place">須原宿</div>
                  <div className="role">静かな宿場でひと休み</div>
                </li>
                <li>
                  <div className="place">野尻 → 阿寺渓谷</div>
                  <div className="role">
                    みんなが覚えて帰る寄り道。白い花崗岩とエメラルドの水
                  </div>
                </li>
                <li>
                  <div className="place">
                    南木曽 · 16:00ごろ <span className="alt">409 m</span>
                  </div>
                  <div className="role">
                    線路沿いの静かな道でゴールのイズミヤカフェへ。電車までコーヒー、あるいは柏屋の寝床へ
                  </div>
                </li>
              </ul>
            </div>

            <div className="special-price">
              <div className="from">4名1グループ · 全部込み</div>
              <div className="amt">
                <s className="amt-old">¥40,000</s>¥20,000
              </div>
              <p className="campaign-line">
                オープンキャンペーン中——いまなら総額から半額。
              </p>
              <p className="breakdown">
                一日まるごとワンプライス。通常は4名で¥40,000を基準に、1名増減ごとに15%(¥6,000)上下。いまはそこからさらに半額です。
              </p>
              <ul className="price-included">
                <li>並走する地元ガイド</li>
                <li>荷物を積んで伴走するサポートドライバー兼英語オペレーター</li>
                <li>ハイパワーのファットタイヤE-bike(ヘルメット付き)</li>
                <li>荷物は出発地からあなたの宿へ搬送</li>
              </ul>
              <ul className="price-scale">
                <li>
                  <span>2名</span>
                  <b>
                    <s>¥28,000</s> ¥14,000
                  </b>
                </li>
                <li>
                  <span>3名</span>
                  <b>
                    <s>¥34,000</s> ¥17,000
                  </b>
                </li>
                <li className="base">
                  <span>4名</span>
                  <b>
                    <s>¥40,000</s> ¥20,000
                  </b>
                </li>
                <li>
                  <span>5名</span>
                  <b>
                    <s>¥46,000</s> ¥23,000
                  </b>
                </li>
                <li>
                  <span>6名</span>
                  <b>
                    <s>¥52,000</s> ¥26,000
                  </b>
                </li>
              </ul>
              <div className="how-to-book-label">予約方法</div>
              <a
                href={GUIDED_WHATSAPP_URL_JA}
                target="_blank"
                rel="noopener noreferrer"
                className="special-cta"
              >
                <MessageCircle size={18} /> WhatsAppで予約
              </a>
              <p className="special-cta-note">
                日付と人数を送ってください。お支払いは当日、カードか現金で。(予約不要の
                <Link href="/ja/luggage-shuttle" style={{ color: "inherit" }}>
                  手荷物シャトル(南木曽⇄野尻)
                </Link>
                は別サービスです——ガイドツアーの日は、荷物運びは最初からパッケージに入っています。)
              </p>
            </div>
          </div>

          <div className="special-faq">
            <h3>参加前に</h3>
            <details className="sfaq">
              <summary>セルフガイドで走れますか?</summary>
              <p>
                いいえ——このコースはガイド専用です。数カ所、一本道を間違えると交通量の多い道に出てしまうポイントがあります。安全のため、ガイドが全行程を一緒に走り、サポートカーが伴走します。
              </p>
            </details>
            <details className="sfaq">
              <summary>50km も走れる自信がありません。</summary>
              <p>
                50km近くと聞くと上級者の距離に思えますよね。でもほぼ全区間がゆるやかな下りで、わずかな登りはハイパワーE-bikeが代わりに漕いでくれます。平地で10km走れるなら、笑顔でゴールできます。それでも不安なら——そのためのコースBです。
              </p>
            </details>
            <details className="sfaq">
              <summary>途中でリタイアできますか?</summary>
              <p>
                できます。ルートはずっとJR中央本線に沿っているので、体調が優れなければ最寄り駅から電車でゴールへ。自転車は駅の駐輪ラックに施錠しておいてもらえれば、後で回収します。
              </p>
            </details>
            <details className="sfaq">
              <summary>悪天候の場合は?</summary>
              <p>
                雨や雪の場合は原則中止・返金です。ただ、うちのE-bikeは悪条件に強いので、安全と体験に影響しない程度の空模様で、全員が走りたければ催行することもあります。走行中に天候が崩れたら、その場で中断して一部返金し、電車でゴールへ向かいます。
              </p>
            </details>
            <details className="sfaq">
              <summary>熊は大丈夫ですか?</summary>
              <p>
                この山域の常として、木曽にもツキノワグマはいます。熊鈴と熊スプレーをお渡しし、先頭は必ずリードガイドが走り、出発前に「出会ったらどうするか」のブリーフィングを行います。
              </p>
            </details>
            <details className="sfaq">
              <summary>夏の暑さ、冬の寒さは?</summary>
              <p>
                夏はラッシュガードを貸し出し、こまめな水分補給と、谷の淵での水浴び休憩をはさみます。冬は防寒具を貸し出し、道中の足湯や温泉で温まりながら走ります。
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 初回ツアーより */}
      <section className="mini-sec" id="gallery">
        <span className="eyebrow">初回ツアーより</span>
        <h2>ここの写真は、ぜんぶ実際のツアーで撮ったもの。</h2>
        <div className="seasons-grid" style={{ marginTop: "2rem" }}>
          <figure className="season-cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/tour/dango.jpg" alt="宿場の古い店先で団子を買うライダーたち" />
            <figcaption className="season-tag">団子休憩</figcaption>
          </figure>
          <figure className="season-cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/tour/locals.jpg" alt="笑顔の地元の店主と記念写真を撮る2人のライダー" />
            <figcaption className="season-tag">道中の出会い</figcaption>
          </figure>
          <figure className="season-cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/tour/paddies.jpg" alt="青空の下、金色の田んぼの脇を走る" />
            <figcaption className="season-tag">稲穂の道</figcaption>
          </figure>
          <figure className="season-cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/tour/swim.jpg" alt="阿寺渓谷のエメラルドの淵を見下ろす花崗岩の上" />
            <figcaption className="season-tag">阿寺ブルー</figcaption>
          </figure>
        </div>
      </section>

      {/* 早朝ツアー */}
      <section className="page-head page-head-grid" id="morning">
        <div>
          <span className="eyebrow">こちらもどうぞ · 7:00–9:00 · 2時間</span>
          <h2 className="head-sub">
            早朝サイクリングツアー——<em>朝食前の谷を独り占め。</em>
          </h2>
          <p>
            朝7時の宿場町は、住民と川霧と、あなたのもの。一日でいちばん柔らかい光の中を、南木曽の路地と川沿いをゆっくり2時間走るガイドツアーです。9時には戻れるので、朝食にもチェックアウトにも間に合います。ガイドライドの入門編に。
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
      </section>

      <section className="morning-extras">
        <div className="seasons-grid seasons-row3">
          <figure className="season-cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/morning/bridge.jpg" alt="朝の光の中、桃介橋を自転車を押して渡る" />
            <figcaption className="season-tag">桃介橋</figcaption>
          </figure>
          <figure className="season-cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/morning/stream.jpg" alt="朝の沢——花崗岩を白く流れ落ちる水" />
            <figcaption className="season-tag">朝の沢</figcaption>
          </figure>
          <figure className="season-cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/morning/paddies.jpg" alt="棚田を見下ろして立ち止まるライダー" />
            <figcaption className="season-tag">棚田の朝</figcaption>
          </figure>
        </div>
        <div className="pricing">
          <div className="pitem">
            <h4>ガイド料</h4>
            <div className="amt">
              ¥4,000<span style={{ fontSize: "0.9rem" }}>/グループ</span>
            </div>
            <p>グループにつき地元ガイド1名、7:00–9:00。</p>
          </div>
          <div className="pitem">
            <h4>E-bike</h4>
            <div className="amt">
              ¥2,000<span style={{ fontSize: "0.9rem" }}>/人</span>
            </div>
            <p>
              1人あたり、バイク込み。2人なら合計¥8,000、4人なら¥12,000。
            </p>
          </div>
          <div className="pitem">
            <h4>柏屋宿泊者</h4>
            <div className="amt">¥0</div>
            <p>柏屋にお泊まりなら、ガイド料もバイク代も無料。</p>
          </div>
        </div>

        <div className="campaign">
          <div className="campaign-badge">柏屋宿泊者</div>
          <div className="campaign-body">
            <h3>
              柏屋に泊まれば、これは<em>宿のおごり。</em>
            </h3>
            <p>
              ゲストハウス柏屋のお客様は早朝ツアー無料——ガイド料もバイク代もかかりません。起きて、走って、朝食が冷める前に戻る。前日の夜にひとこと言ってもらえればOKです。
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
            お支払いは当日(カード/現金)。柏屋のお客様はチェックイン時にひとことどうぞ。
          </span>
        </div>
      </section>

      {/* WFA */}
      <section className="guide" id="wfa">
        <div className="guide-inner">
          <div className="guide-text">
            <span className="eyebrow">
              <ShieldCheck size={15} /> ライドの安全
            </span>
            <h2>
              ここでは、ガイドが最初の救助者。ヤックンは<em>その訓練を受けています。</em>
            </h2>
            <p>
              ヤックンはWilderness Medical Associates Internationalの野外救急法(WFA)認定を受けています。遠征隊や山岳救助チームが頼るのと同じトレーニングです。谷の奥では救急車が遠い——だから、到着するまでの「助け」になるための訓練です。
            </p>
            <ul className="guide-skills">
              <li>
                <HeartPulse size={18} /> 成人CPRとAEDの使用
              </li>
              <li>
                <Wind size={18} /> 気道異物の除去
              </li>
              <li>
                <Droplet size={18} /> 重度出血のコントロール(止血法)
              </li>
            </ul>
            <p className="guide-consent">
              ライドへの参加をもって、緊急時にヤックンがこの認定に沿った応急処置を専門的医療の到着まで行うことに同意いただいたものとします。
            </p>
          </div>

          <div className="guide-proof">
            <div className="cert-stack">
              <div className="cert cert-front">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/WFA1.jpg"
                  alt="福田康宏のWilderness First Aid認定証(Wilderness Medical Associates International発行、2029年2月18日まで有効、Course ID 37079)"
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
