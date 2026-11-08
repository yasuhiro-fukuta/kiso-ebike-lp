import Link from "next/link";
import {
  MessageCircle,
  Truck,
  MapPin,
  Check,
  X,
  ArrowRight,
  Store,
} from "lucide-react";
import { SiteNav, SiteFooter, FloatBook, type Lang } from "../chrome";
import { ShortVideo } from "./short-video";

/**
 * "How it works" — one page for first-time riders:
 * no shop, we deliver, leave it anywhere in the area.
 * Wording and order follow the design canvas (Main.dc.html / Ja.dc.html).
 * Everything marked TBD/［仮］ is a placeholder on purpose — do not fill
 * it with invented numbers or reviews.
 */

type Copy = {
  book: string;
  bookHref: string;
  rideHref: string;
  legalHref: string;
  lbHref: string;
  eyebrow: string;
  h1: string;
  lead: string;
  points: { h: string; p: string }[];
  jump: { href: string; label: string }[];
  videoEyebrow: string;
  videoH2: string;
  videoLead: string;
  videoTitle: string;
  videoSoon: string;
  chapters: { t: string; label: string }[];
  chaptersNote: string;
  cmpH2: string;
  cmpLead: string;
  cmpHead: [string, string];
  cmpRows: [string, string, string][];
  fitH2: string;
  fitYesH: string;
  fitYes: React.ReactNode[];
  fitNoH: string;
  fitNo: React.ReactNode[];
  stepsEyebrow: string;
  stepsH2: string;
  steps: { img: string; h: string; p: React.ReactNode }[];
  areaH2: string;
  areaLead: string;
  areaMap: string;
  spots: { h: string; p: string }[];
  priceH2: string;
  priceUnit: string;
  priceNote: string;
  cancelH2: string;
  cancel: [string, string][];
  fullTerms: string;
  faqH2: string;
  faq: { q: string; a: React.ReactNode }[];
  reviewsH2: string;
  reviews: string[];
  ctaH2: string;
  ctaLead: string;
};

const TBD = (s: string) => <span className="hiw-tbd-inline">{s}</span>;

const COPY: Record<Lang, Copy> = {
  en: {
    book: "Book on WhatsApp",
    bookHref: "/book?s=rental",
    rideHref: "/ride",
    legalHref: "/legal",
    lbHref: "https://luggagebusnakasendo.com",
    eyebrow: "A guide for first-time riders",
    h1: "No shop. We bring the bike to you. Leave it anywhere in the valley.",
    lead: "This is not a rental shop with a counter. You book and pay on your phone, we place the e-bike at your inn or station by 9:00, and when you're done you simply lock it wherever your day ends.",
    points: [
      { h: "No shop, no counter", p: "Everything happens on WhatsApp." },
      { h: "Delivered to you", p: "Ready at your inn or station by 9:00." },
      { h: "One-way, anywhere in the area", p: "No need to come back to the start." },
    ],
    jump: [
      { href: "#steps", label: "How it works" },
      { href: "#area", label: "Drop-off area" },
      { href: "#faq", label: "FAQ" },
      { href: "#book", label: "Book on WhatsApp" },
    ],
    videoEyebrow: "Watch first",
    videoH2: "How it works in one minute",
    videoLead:
      "See the whole day from booking to drop-off: no shop, no counter, no going back.",
    videoTitle: "How Beyond Nakasendo e-bike rental works (1 minute)",
    videoSoon: "Video coming soon",
    chapters: [
      { t: "0:00", label: "Book and pay on WhatsApp" },
      { t: "0:15", label: "Find your bike at your inn" },
      { t: "0:30", label: "Unlock, power on, ride" },
      { t: "0:45", label: "Lock it anywhere, send one photo" },
    ],
    chaptersNote: "[TBD] Timestamps are provisional until the video is ready.",
    cmpH2: "How it differs from a normal bike rental",
    cmpLead:
      "If you have rented bikes before, these are the five things that work differently here.",
    cmpHead: ["A usual rental shop", "Beyond Nakasendo"],
    cmpRows: [
      ["Booking", "Walk in or book on a website", "One WhatsApp message"],
      ["Pick-up", "At the shop counter, with staff", "We place it at your inn or station. No staff on site."],
      ["Unlocking", "Staff hands you a key", "Your lock code arrives by email after the consent form"],
      ["Return", "Back to the same shop before closing", "Lock it anywhere in the area and send one photo"],
      ["Help", "Ask the staff", "Ride guide on your phone; urgent? Call us on WhatsApp"],
    ],
    fitH2: "Who is this for?",
    fitYesH: "A great fit if you…",
    fitYes: [
      "are staying near Tsumago, Nagiso or Nojiri",
      "want to ride one way and not double back",
      "have a phone with WhatsApp and an email address",
      "can ride a bicycle comfortably (the motor helps on hills)",
    ],
    fitNoH: "Not a fit if you…",
    fitNo: [
      "want to rent the same day without booking",
      "need staff to meet you at the bike",
      "plan to ride on a Monday (closed)",
      <>need a bike for a child under {TBD("[TBD] min. height")} cm</>,
    ],
    stepsEyebrow: "How it works",
    stepsH2: "Six steps, all on your phone",
    steps: [
      {
        img: "Illustration: WhatsApp chat",
        h: "Message us on WhatsApp",
        p: "Tell us the date, number of riders and where you are staying. We reply with your booking details and a payment link.",
      },
      {
        img: "Illustration: paying on a phone",
        h: "Pay to confirm",
        p: "Card or PayPay. Your booking is confirmed the moment payment is made.",
      },
      {
        img: "Illustration: consent form + email",
        h: "Sign, get your lock code",
        p: "A short consent form opens right after paying (one per rider). Send it and your lock code arrives by email.",
      },
      {
        img: "Photo: bike parked at an inn",
        h: "Find your bike in the morning",
        p: "By 9:00 we send one message with a photo of the spot, a map pin and your drop-off point.",
      },
      {
        img: "Illustration: riding along the river",
        h: "Unlock and ride",
        p: (
          <>
            Power, assist, gears and lights are explained in the{" "}
            <Link href="/ride">ride guide</Link> (also on the QR sticker on
            the bike). Ride any time 9:00–18:00.
          </>
        ),
      },
      {
        img: "Illustration: locked bike + photo",
        h: "Lock it, send one photo",
        p: "Park anywhere in the drop-off area, lock it, and send us one photo on WhatsApp. That's it. No need to wait for our reply; we collect it in the evening.",
      },
    ],
    areaH2: "Where we deliver, where you can leave it",
    areaLead:
      "Start and finish can be different places. Anywhere between Tsumago and Nojiri works; these are the most common spots.",
    areaMap: "Map: Tsumago – Nagiso – Junikane – Nojiri, with pins",
    spots: [
      { h: "Your inn", p: "Delivery and pick-up within the area" },
      { h: "Nagiso Station (Izumiya café)", p: "Our base. Easy start by train" },
      { h: "Tsumago", p: "Finish here after the river ride" },
      { h: "Nojiri Station", p: "Catch the train onward" },
    ],
    priceH2: "Price",
    priceUnit: "per bike, per day",
    priceNote:
      "Helmet and lock included. Delivery and one-way drop-off included. 9:00–18:00, closed Mondays.",
    cancelH2: "Cancellation",
    cancel: [
      ["3 or more days before", "Full refund"],
      ["1–2 days before", "50% refund"],
      ["On the day (rain included)", "No refund"],
      ["If we cancel (weather, breakdown)", "Full refund"],
    ],
    fullTerms: "Full terms",
    faqH2: "Questions first-timers ask",
    faq: [
      {
        q: "Will someone meet me at the bike?",
        a: "No. The bike is waiting for you with the lock on. The morning message tells you exactly where.",
      },
      {
        q: "Do I have to bring it back to where I started?",
        a: "No. Lock it anywhere in the drop-off area and send a photo. We collect it in the evening.",
      },
      {
        q: "I didn't get my lock code.",
        a: "The code comes by email after the consent form. Check your spam folder, or message us on WhatsApp.",
      },
      {
        q: "What if something goes wrong while riding?",
        a: "Urgent? Call us on WhatsApp: +81 90-3839-2354. For anything else we reply within 6 hours.",
      },
      {
        q: "Can I bring luggage?",
        a: (
          <>
            Ride light and send your bags ahead with our{" "}
            <a href="https://luggagebusnakasendo.com">Luggage Bus</a>.
          </>
        ),
      },
    ],
    reviewsH2: "What riders say",
    reviews: [
      "Google review 1: quote and name",
      "Google review 2: quote and name",
      "Google review 3: quote and name",
    ],
    ctaH2: "Ready? One message is all it takes.",
    ctaLead: "Send the date, number of riders and where you are staying.",
  },

  ja: {
    book: "WhatsAppで予約",
    bookHref: "/ja/book?s=rental",
    rideHref: "/ja/ride",
    legalHref: "/ja/legal",
    lbHref: "https://luggagebusnakasendo.com/ja",
    eyebrow: "はじめてご利用の方へ",
    h1: "お店はありません。自転車はこちらから届けます。乗り終えたら、谷のどこにでも置いて大丈夫です。",
    lead: "窓口のあるレンタル店ではありません。予約と支払いはスマホで完結。朝9時までに宿や駅へE-bikeを置いておきます。乗り終えたら、一日が終わった場所で鍵をかけるだけです。",
    points: [
      { h: "店舗・窓口なし", p: "やり取りはすべてWhatsAppで" },
      { h: "お届けします", p: "朝9時までに宿や駅へ" },
      { h: "エリア内どこでも乗り捨て", p: "出発地点に戻らなくてOK" },
    ],
    jump: [
      { href: "#steps", label: "ご利用の流れ" },
      { href: "#area", label: "乗り捨てエリア" },
      { href: "#faq", label: "よくある質問" },
      { href: "#book", label: "WhatsAppで予約" },
    ],
    videoEyebrow: "まずは動画で",
    videoH2: "1分でわかる使い方",
    videoLead:
      "予約から乗り捨てまで、一日の流れをまとめて見られます。お店も窓口もなく、出発地点に戻る必要もありません。",
    videoTitle: "Beyond Nakasendo E-bikeレンタルの使い方（1分）",
    videoSoon: "動画準備中",
    chapters: [
      { t: "0:00", label: "WhatsAppで予約・支払い" },
      { t: "0:15", label: "宿に置かれた自転車を見つける" },
      { t: "0:30", label: "鍵を開けて電源を入れ、出発" },
      { t: "0:45", label: "どこでも鍵をかけて写真を1枚" },
    ],
    chaptersNote: "［仮］時刻は動画ができるまでの仮のものです。",
    cmpH2: "普通のレンタサイクルとの違い",
    cmpLead: "自転車を借りたことがある方ほど戸惑いやすい、5つの違いです。",
    cmpHead: ["一般的なレンタル店", "Beyond Nakasendo"],
    cmpRows: [
      ["予約", "店頭かWebサイト", "WhatsAppでメッセージ1通"],
      ["受け取り", "店の窓口でスタッフから", "宿や駅に置いておきます（スタッフは立ち会いません）"],
      ["鍵", "スタッフから鍵を受け取る", "同意書を送ると鍵番号がメールで届く"],
      ["返却", "閉店までに同じ店へ", "エリア内のどこかで鍵をかけて写真を1枚送るだけ"],
      ["困ったとき", "スタッフに聞く", "スマホで使い方ガイド。急ぎはWhatsAppで電話"],
    ],
    fitH2: "こんな方に向いています",
    fitYesH: "向いている方",
    fitYes: [
      "妻籠・南木曽・野尻のあたりに泊まる",
      "行ったきりの片道で走りたい",
      "WhatsAppとメールが使えるスマホがある",
      "普通に自転車に乗れる（坂はモーターが助けます）",
    ],
    fitNoH: "向いていない方",
    fitNo: [
      "予約なしで当日すぐ借りたい",
      "受け取りにスタッフの立ち会いが必要",
      "月曜日に乗りたい（定休日）",
      <>身長{TBD("［仮］最低身長")}cm未満のお子さまの分が必要</>,
    ],
    stepsEyebrow: "ご利用の流れ",
    stepsH2: "6ステップ、すべてスマホで",
    steps: [
      {
        img: "イラスト：WhatsAppのやり取り",
        h: "WhatsAppで連絡",
        p: "日付・人数・泊まる場所を送ってください。予約内容と決済リンクをお返しします。",
      },
      {
        img: "イラスト：スマホで支払い",
        h: "支払って予約確定",
        p: "カードかPayPay。決済された時点で予約成立です。",
      },
      {
        img: "イラスト：同意書とメール",
        h: "同意書を送って鍵番号を受け取る",
        p: "支払い後すぐに短い同意書が開きます（お一人1枚）。送ると鍵番号がメールで届きます。",
      },
      {
        img: "写真：宿に置かれた自転車",
        h: "朝、自転車を見つける",
        p: "9時までに、置き場所の写真・地図ピン・返却場所を1通でお送りします。",
      },
      {
        img: "イラスト：川沿いを走る",
        h: "鍵を開けて出発",
        p: (
          <>
            電源・アシスト・変速・ライトは
            <Link href="/ja/ride">使い方ガイド</Link>
            に（自転車のQRシールからも開けます）。9:00〜18:00の間、自由に走れます。
          </>
        ),
      },
      {
        img: "イラスト：施錠した自転車と写真",
        h: "鍵をかけて写真を1枚",
        p: "エリア内に停めて鍵をかけ、写真を1枚WhatsAppで送れば完了。こちらの返信は待たなくて大丈夫です。夕方に回収します。",
      },
    ],
    areaH2: "お届け場所と乗り捨てエリア",
    areaLead:
      "出発と到着は別の場所で大丈夫です。妻籠から野尻までならどこでもOK。よく使われる場所はこちらです。",
    areaMap: "地図：妻籠・南木曽・十二兼・野尻とピン",
    spots: [
      { h: "お泊まりの宿", p: "エリア内ならお届け・回収します" },
      { h: "南木曽駅前（イズミヤカフェ）", p: "拠点。電車で来てそのまま出発" },
      { h: "妻籠宿", p: "川沿いを走ってここでゴール" },
      { h: "野尻駅", p: "そのまま電車で次の町へ" },
    ],
    priceH2: "料金",
    priceUnit: "1台・1日",
    priceNote:
      "ヘルメット・鍵つき。お届けと乗り捨ても料金に含みます。9:00〜18:00、月曜定休。",
    cancelH2: "キャンセル",
    cancel: [
      ["3日前まで", "全額返金"],
      ["2日前〜前日", "半額返金"],
      ["当日（雨天も同じ）", "返金なし"],
      ["こちらの都合・天候で中止", "全額返金"],
    ],
    fullTerms: "詳しい規定",
    faqH2: "はじめての方によくある質問",
    faq: [
      {
        q: "受け取りのときスタッフはいますか？",
        a: "いません。鍵をかけた状態で置いてあります。場所は朝の1通で正確にお知らせします。",
      },
      {
        q: "出発した場所に戻す必要はありますか？",
        a: "ありません。エリア内のどこかで鍵をかけて写真を送ってください。夕方に回収します。",
      },
      {
        q: "鍵番号が届きません",
        a: "同意書を送ったあとにメールで届きます。迷惑メールフォルダを確認するか、WhatsAppでご連絡ください。",
      },
      {
        q: "走っている途中で困ったら？",
        a: "急ぎはWhatsAppで電話してください（+81 90-3839-2354）。それ以外は原則6時間以内に返信します。",
      },
      {
        q: "荷物はどうすれば？",
        a: (
          <>
            身軽に走れるよう、
            <a href="https://luggagebusnakasendo.com/ja">ラゲッジバス</a>
            で次の宿へ先に送れます。
          </>
        ),
      },
    ],
    reviewsH2: "利用した方の声",
    reviews: [
      "Googleの口コミ1：本文とお名前",
      "Googleの口コミ2：本文とお名前",
      "Googleの口コミ3：本文とお名前",
    ],
    ctaH2: "予約はメッセージ1通から",
    ctaLead: "日付・人数・泊まる場所を送ってください。",
  },
};

const POINT_ICONS = [Store, Truck, MapPin];
const PH = (lang: Lang, s: string) => (lang === "ja" ? `［仮］${s}` : `[TBD] ${s}`);

export function HowItWorks({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  return (
    <div className="lp">
      <SiteNav lang={lang} />

      <FloatBook href={c.bookHref}>
        <MessageCircle size={18} /> {c.book}
      </FloatBook>

      {/* 1. ONE LINE: WHAT IT IS */}
      <header className="page-head">
        <span className="eyebrow">{c.eyebrow}</span>
        <h1 style={{ maxWidth: "24ch" }}>{c.h1}</h1>
        <p>{c.lead}</p>
        <div className="hiw-points">
          {c.points.map((pt, i) => {
            const Icon = POINT_ICONS[i];
            return (
              <div className="hiw-point" key={pt.h}>
                <Icon size={20} />
                <div>
                  <b>{pt.h}</b>
                  <span>{pt.p}</span>
                </div>
              </div>
            );
          })}
        </div>
        <nav className="hiw-jump">
          {c.jump.map((j) => (
            <a key={j.href} href={j.href}>
              {j.label}
            </a>
          ))}
        </nav>
      </header>

      {/* 2. ONE-MINUTE VIDEO */}
      <section className="mini-sec" id="video">
        <div className="hiw-video">
          <ShortVideo title={c.videoTitle} soon={c.videoSoon} />
          <div>
            <span className="eyebrow">{c.videoEyebrow}</span>
            <h2 style={{ marginBottom: "0.8rem" }}>{c.videoH2}</h2>
            <p style={{ fontWeight: 300, color: "#3a352d" }}>{c.videoLead}</p>
            <ol className="hiw-chapters">
              {c.chapters.map((ch) => (
                <li key={ch.t}>
                  <time>{ch.t}</time>
                  <span>{ch.label}</span>
                </li>
              ))}
            </ol>
            <p className="hiw-note">{c.chaptersNote}</p>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON */}
      <section className="mini-sec" id="compare">
        <h2 style={{ marginBottom: "0.6rem" }}>{c.cmpH2}</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", marginBottom: "1.6rem" }}>
          {c.cmpLead}
        </p>
        <div className="hiw-table-wrap">
          <table className="hiw-table">
            <thead>
              <tr>
                <th />
                <th>{c.cmpHead[0]}</th>
                <th className="ours">{c.cmpHead[1]}</th>
              </tr>
            </thead>
            <tbody>
              {c.cmpRows.map(([k, usual, ours]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td data-label={c.cmpHead[0]}>{usual}</td>
                  <td className="ours" data-label={c.cmpHead[1]}>{ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. WHO IT'S FOR */}
      <section className="mini-sec" id="fit">
        <h2>{c.fitH2}</h2>
        <div className="hiw-fit">
          <div className="yes">
            <h3>
              <Check size={20} /> {c.fitYesH}
            </h3>
            <ul>
              {c.fitYes.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="no">
            <h3>
              <X size={20} /> {c.fitNoH}
            </h3>
            <ul>
              {c.fitNo.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. SIX STEPS */}
      <section className="mini-sec" id="steps">
        <span className="eyebrow">{c.stepsEyebrow}</span>
        <h2>{c.stepsH2}</h2>
        <div className="hiw-steps">
          {c.steps.map((s, i) => (
            <div className="hiw-step" key={s.h}>
              <div className="hiw-tbd">{PH(lang, s.img)}</div>
              <div className="hiw-step-body">
                <div className="dnum">{i + 1}</div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DELIVERY & DROP-OFF AREA */}
      <section className="mini-sec" id="area">
        <h2 style={{ marginBottom: "0.6rem" }}>{c.areaH2}</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", marginBottom: "1.6rem", maxWidth: "60ch" }}>
          {c.areaLead}
        </p>
        <div className="hiw-area">
          <div className="hiw-tbd">{PH(lang, c.areaMap)}</div>
          <ul className="hiw-spots">
            {c.spots.map((s) => (
              <li key={s.h}>
                <MapPin size={18} />
                <div>
                  <b>{s.h}</b>
                  <span>{s.p}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. PRICE & CANCELLATION */}
      <section className="mini-sec" id="price">
        <div className="hiw-money">
          <div>
            <h3>{c.priceH2}</h3>
            <div className="hiw-price">
              ¥4,000<span>{c.priceUnit}</span>
            </div>
            <p>{c.priceNote}</p>
          </div>
          <div>
            <h3>{c.cancelH2}</h3>
            <ul className="hiw-cancel">
              {c.cancel.map(([when, refund]) => (
                <li key={when}>
                  <span>{when}</span>
                  <span>{refund}</span>
                </li>
              ))}
            </ul>
            <p>
              <Link href={c.legalHref} style={{ whiteSpace: "nowrap" }}>
                {c.fullTerms} <ArrowRight size={13} style={{ verticalAlign: "-2px" }} />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="faq" id="faq">
        <h2>{c.faqH2}</h2>
        {c.faq.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      {/* 9. REVIEWS (placeholders until real Google reviews are picked) */}
      <section className="mini-sec" id="reviews">
        <h2>{c.reviewsH2}</h2>
        <div className="hiw-reviews">
          {c.reviews.map((r) => (
            <div className="hiw-tbd" key={r}>
              {PH(lang, r)}
            </div>
          ))}
        </div>
      </section>

      {/* 10. BOOK */}
      <section className="booking" id="book">
        <h2>{c.ctaH2}</h2>
        <p>{c.ctaLead}</p>
        <div className="square-embed">
          <a href={c.bookHref} className="booking-cta">
            <MessageCircle size={18} /> {c.book}
          </a>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
