import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { PHONE, PHONE_TEL, MYMAP_VIEW_URL, WHATSAPP_URL_JA } from "../../site";
import { SiteNav, SiteFooter } from "../../chrome";

/**
 * 当日ガイド：セルフガイドのお客様が当日必要なことを1ページに。
 * WhatsAppの返信（6時間以内）を待たずに自己解決できるようにする。
 * 予約メッセージと各自転車のQRシールからリンク。
 */
export const metadata: Metadata = {
  title: "ご利用当日ガイド | Beyond Nakasendo Cycling",
  description:
    "E-bikeご利用当日に必要なことを1ページに。鍵の開け方、サドル、電源とアシスト、ギア、スマホホルダー、返却、困ったとき。",
  alternates: { canonical: "/ja/ride", languages: { en: "/ride" } },
  robots: { index: false, follow: true },
};

const STEPS: { h: string; p: string; img?: string; alt?: string; link?: { href: string; label: string } }[] = [
  {
    h: "自転車を見つける",
    p: "当日朝のメッセージの場所（写真と地図ピン付き）に置いてあります。ヘルメットと鍵も一緒です。",
  },
  {
    h: "鍵を開ける",
    p: "ナンバーロックを、メールで届いた番号（決済後の同意書を送ると届きます）に合わせて引き抜きます。鍵は最後に使うので持っておいてください。",
  },
  {
    h: "サドルを合わせる",
    p: "サドル下のレバーを開き、ペダルが一番下のとき脚がほぼ伸びる高さにして、レバーをしっかり閉めます。",
  },
  {
    h: "電源を入れる",
    p: "左手ハンドルのアシストスイッチ、その下の端にある小さな電源ボタン（⏻）を、表示が点くまで長押しします。",
    img: "/assets/ride/power.jpg",
    alt: "左手ハンドルのアシストスイッチと、下端の電源ボタン",
  },
  {
    h: "アシストの強さ",
    p: "同じスイッチの＋で強く、−で弱く。集落内は弱め、登りは強めに。−ボタンの右の小さいボタンで、フロントライトを常にオンにしてください。",
    img: "/assets/ride/assist.jpg",
    alt: "アシストスイッチの＋と−",
  },
  {
    h: "ギア",
    p: "変速は右手ハンドルの7段ギア。目盛りの1がいちばん軽く（登り用）、7がいちばん速いギアです。坂の途中ではなく、登る前・止まる前に変えるのがコツです。",
    img: "/assets/ride/gears.jpg",
    alt: "右手ハンドルのシマノ7段変速レバー（目盛り1〜7）",
  },
  {
    h: "スマホホルダー",
    p: "ハンドルにスマホホルダーがあります。地図や動画に。アームを開いてスマホを入れ、挟んで閉じます。ルートは出発前に設定し、走行中は操作しないでください。",
    link: { href: MYMAP_VIEW_URL, label: "コースのマイマップを開く" },
    img: "/assets/ride/phone-holder.jpg",
    alt: "ハンドルに付いたスマホホルダー",
  },
  {
    h: "ブレーキを確かめて出発",
    p: "走り出す前に前後のブレーキを一度握って確認。日本は左側通行です。",
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "バッテリーが切れた",
    a: "普通の自転車として走れます（少し重くなります）。平地ではアシストを弱めると長持ちします。",
  },
  {
    q: "どこを走ればいい？",
    a: "Googleマップ付きの3つのルートをセルフツアーのページに載せています。",
  },
  {
    q: "別の場所で返してもいい？",
    a: "はい。妻籠〜野尻のエリア内ならどこでも大丈夫です。写真を送るときに場所を書いてください。",
  },
  {
    q: "荷物はどうなる？",
    a: "荷物運びをご予約の方は、荷物はそのまま宿へ。当日夕方〜夜に届くので、待たなくて大丈夫です。",
  },
  {
    q: "9時より早く・18時より遅く使える？",
    a: "ご利用時間は原則9:00〜18:00です。予約時にご相談いただいていれば前後も大丈夫です。",
  },
];

export default function RideGuidePageJa() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <header className="page-head">
        <span className="eyebrow">ご利用当日ガイド · これ1ページで完結</span>
        <h1>
          当日は、<em>返信を待たずに走れます。</em>
        </h1>
        <p>
          WhatsAppの返信は6時間以内です。当日必要なことはこのページに全部あるので、ブックマークしておいてください。緊急時はお電話を。
        </p>
        <p className="head-note">
          <strong>
            緊急（事故・けが・故障・紛失）：{" "}
            <a href={PHONE_TEL}>
              <Phone size={15} /> {PHONE}
            </a>
          </strong>
        </p>
      </header>

      <section className="drop-sec" id="start">
        <div className="drop-inner">
          <span className="eyebrow">出発</span>
          <h2>
            8ステップ、<em>5分ほどです。</em>
          </h2>
          <div className="drop-steps">
            {STEPS.map((s, i) => (
              <div className="drop-step" key={s.h}>
                <div className="dnum">{i + 1}</div>
                {s.img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.img}
                    alt={s.alt ?? ""}
                    loading="lazy"
                    style={{ width: "100%", borderRadius: 10, margin: "0.6rem 0", aspectRatio: "4 / 3", objectFit: "cover" }}
                  />
                )}
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                {s.link && (
                  <p>
                    <a href={s.link.href} target="_blank" rel="noopener noreferrer">
                      <MapPin size={14} /> {s.link.label}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video-sec">
        <span className="eyebrow">60秒</span>
        <h2>出発前にひと目</h2>
        <div className="video-wrap">
          <iframe
            src="https://www.youtube.com/embed/-9sQwqZJZzE?rel=0&modestbranding=1&playsinline=1"
            title="E-bikeの注意点"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="drop-sec" id="finish">
        <div className="drop-inner">
          <span className="eyebrow">返却</span>
          <h2>
            3ステップで、<em>おしまい。</em>
          </h2>
          <div className="drop-steps">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>停める</h3>
              <p>
                当日朝のメッセージの返却場所、または妻籠〜野尻のエリア内のどこでも。道路をふさがない場所に。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>鍵をかける</h3>
              <p>
                ナンバーロックをかけてダイヤルを回し、ヘルメットは自転車に残してください。
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>写真を1枚送る</h3>
              <p>
                鍵をかけた自転車の写真をWhatsAppで送ってください。
                <strong>これで完了です。こちらの返信を待つ必要はありません。</strong>
                自転車は夕方以降に回収します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <h2>困ったとき</h2>
        {FAQ.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <p>
              {f.a}
              {f.q === "どこを走ればいい？" && (
                <>
                  {" "}
                  <Link href="/ja/second-day">
                    <MapPin size={14} /> ルートを開く
                  </Link>
                </>
              )}
            </p>
          </details>
        ))}
        <p className="booking-alt">
          急ぎでなければ{" "}
          <a href={WHATSAPP_URL_JA}>
            <MessageCircle size={15} /> WhatsApp
          </a>
          （6時間以内に返信）。急ぎはお電話 <a href={PHONE_TEL}>{PHONE}</a>。English{" "}
          <Link href="/ride">here</Link>
        </p>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
