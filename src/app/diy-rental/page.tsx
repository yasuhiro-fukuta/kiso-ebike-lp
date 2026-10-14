import type { Metadata } from "next";
import { Mail, Phone, ImageIcon } from "lucide-react";
import { SiteNav, SiteFooter, LineIcon } from "../chrome";
import { LINE_URL, SUPPORT_MAILTO, PHONE, PHONE_TEL } from "../site";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "【月1.5万円／一軒家】住みながら自分で直せる家|長野県南木曽町・DIY型賃貸",
  description:
    "JR南木曽駅から徒歩15分の一戸建て、月1.5万円。住める2部屋＋水回りあり、残り2〜3部屋は自由にDIY。原状回復不要、将来買い取ることもできます。移住を考えていて、地域と一緒に暮らせる方を一組だけ募集しています。",
  alternates: { canonical: "/diy-rental" },
  openGraph: {
    type: "website",
    url: "https://nakasendo-ebike.com/diy-rental",
    siteName: "Beyond Nakasendo Cycling",
    title: "【月1.5万円／一軒家】住みながら自分で直せる家(南木曽町・DIY可)",
    description:
      "南木曽駅徒歩15分の一戸建て。柱と構造以外はDIY自由・原状回復なし・買取可。入居者を一組募集中。",
    locale: "ja_JP",
  },
};

/** === 募集条件 ================================================
 *  【仮】と付いた項目は未確定。決まったらここを書き換える。
 *  ============================================================= */
const TERMS: { label: string; value: string; tentative?: boolean }[] = [
  { label: "家賃", value: "月1.5万円" },
  { label: "敷金・礼金", value: "敷金1か月(1.5万円)・礼金なし" },
  { label: "駐車場", value: "1台分あり" },
  { label: "入居可能日", value: "即入居可" },
  { label: "ペット", value: "ご相談", tentative: true },
  { label: "場所", value: "長野県木曽郡南木曽町、JR中央西線 南木曽駅から徒歩15分" },
  { label: "建物", value: "一戸建て。すぐ住める2部屋＋リノベ途中の2〜3部屋" },
  { label: "水回り", value: "キッチン、簡易水洗トイレ、灯油ボイラーの風呂(そのまま使えます)" },
];

/** 写真の差し替え枠。src を入れると写真が表示される
 *  (例: "/assets/diy-rental/exterior.jpg")。 */
const PHOTOS: { src?: string; caption: string }[] = [
  { caption: "外観" },
  { caption: "住める部屋" },
  { caption: "キッチン" },
  { caption: "風呂と灯油ボイラー" },
  { caption: "リノベ中の部屋 — ここを好きにできる" },
  { caption: "家の前の道と周りの景色" },
];

export default function DiyRentalPage() {
  return (
    <div className="lp" lang="ja">
      <SiteNav lang="ja" />

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">入居者募集 · 長野県南木曽町 · DIY可</span>
        <h1>
          月1.5万円の一軒家。<em>住みながら自分で直せて、気に入ったら買えます。</em>
        </h1>
        <p>
          中山道の宿場町、南木曽。JR南木曽駅から歩いて15分の一戸建てを、一組だけにお貸しします。住める2部屋と、そのまま使える水回りがあり、残りの2〜3部屋はあなたの手で仕上げる家です。
        </p>
      </header>

      {/* PHOTOS (差し替え用の枠) */}
      <section className="mini-sec">
        <div className="diyr-photos">
          {PHOTOS.map((p) => (
            <figure key={p.caption} className="diyr-photo">
              {p.src ? (
                <img src={p.src} alt={p.caption} />
              ) : (
                <div className="diyr-photo-ph" aria-hidden="true">
                  <ImageIcon size={28} />
                  <span>写真準備中</span>
                </div>
              )}
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* NOW / LATER */}
      <section className="mini-sec">
        <span className="eyebrow">この家のいま</span>
        <h2>半分は住める。半分は、これから。</h2>
        <div className="diyr-two">
          <div>
            <h3>今すぐ住めるところ</h3>
            <ul>
              <li>居室2部屋</li>
              <li>キッチン、トイレ(簡易水洗)、風呂(灯油ボイラー)はそのまま使えます</li>
            </ul>
          </div>
          <div>
            <h3>これから作るところ</h3>
            <ul>
              <li>リノベ途中の部屋が2〜3部屋</li>
              <li>工房、アトリエ、書斎、宿。どう使うかはあなた次第です</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DIY RULES */}
      <section className="hub-band">
        <div className="hub-band-inner">
          <span className="eyebrow">DIYの条件</span>
          <h2>
            柱と構造以外は、<em>ぜんぶ自由。</em>
          </h2>
          <ul className="diyr-rules">
            <li>柱と構造以外は自由に手を入れられます</li>
            <li>退去時の原状回復は不要です(故意・重大な過失を除く)</li>
            <li>入居時に決めた価格で、将来この家を買い取る権利があります</li>
            <li>ご自身で付けた設備は、退去時に買い取りを求めない約束です</li>
          </ul>
        </div>
      </section>

      {/* TERMS */}
      <section className="mini-sec">
        <span className="eyebrow">募集条件</span>
        <h2>条件</h2>
        <dl className="diyr-terms">
          {TERMS.map((t) => (
            <div key={t.label}>
              <dt>{t.label}</dt>
              <dd>
                {t.value}
                {t.tentative && <span className="diyr-tbd">仮</span>}
              </dd>
            </div>
          ))}
        </dl>
        <p className="diyr-note">
          南木曽の冬は冷え込み、水道が凍ることもあります。暖房と凍結対策、灯油の買い方、車の要否などは、見学のときに正直にお話しします。
        </p>
      </section>

      {/* WHO */}
      <section className="mini-sec">
        <span className="eyebrow">こんな方を待っています</span>
        <h2>地域と一緒に暮らせる方へ。</h2>
        <ul className="diyr-list">
          <li>南木曽や木曽への移住を考えている方</li>
          <li>自分の手で家を直すのが好きな方</li>
          <li>地区の草刈りや清掃、行事に参加し、地域の暮らしを大事にしてくれる方</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="hub-band">
        <div className="hub-band-inner">
          <span className="eyebrow">見学・お問い合わせ</span>
          <h2>
            見学は、<em>大家がご案内します。</em>
          </h2>
          <p>
            大家は近所に住んでいるので、見学はいつでもご案内できます。まずはお気軽に、どんな暮らしをしたいか、入居したい時期、何人で住むかを教えてください。
          </p>
          <div className="diyr-contact">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="band-cta"
            >
              <LineIcon size={16} /> LINEで問い合わせ
            </a>
            <a
              href={`${SUPPORT_MAILTO}?subject=${encodeURIComponent("南木曽 DIY型賃貸の見学希望")}`}
              className="band-cta"
            >
              <Mail size={16} /> メールで問い合わせ
            </a>
            <a href={PHONE_TEL} className="band-cta">
              <Phone size={16} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
