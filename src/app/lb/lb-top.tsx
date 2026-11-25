"use client";

/** ラゲッジバスのトップ(2026-11-25 23:02 社長のダメ出しで作り直し)。
 *  上に共通メニュー4つ(トップ/予約する/運行カレンダー/よくある質問)。
 *  トップに載せるのは次の7つと使い方の動画だけ。ページ内目次・チラ見せ・「詳しくはこちら」は置かない。
 *   ① 誰がどう嬉しいか + 予約ボタン  ② 料金の例(3区間・1個)  ③ 配送範囲(JR中央線沿い)
 *   ④ 予約から当日まで  ⑤ 返金(キャンセルポリシー)  ⑥ 遅延・紛失・盗難(補償限度額)  ⑦ 運営者(顔)
 *  金額は表(lb-fares.json)から estimate() で引く。手で書かない。預かり料はトップに書かない。 */
import Link from "next/link";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { LbNav, LbMenu, LbFloat, LbFooter } from "./lb-chrome";
import { useLbHref } from "./lb-pages";
import { LbHowVideo } from "./how-video";
import { PriceTag } from "./price-tag";
import {
  DROP_BY,
  ARRIVE_BY,
  CANCEL_POLICY,
  COMPENSATION_TEXT,
  JR_STATIONS,
  estimate,
  posOf,
  nameOf,
  yen,
  type AreaKey,
} from "../luggage-bus";
import { LB_COMPENSATION_YEN } from "../lb-config";

type Lang = "en" | "ja";
type T = { en: string; ja: string };

/** 料金の例(社長指定の3区間・荷物1個)。金額は表から引く。 */
const EXAMPLE_ROUTES: { from: AreaKey; to: AreaKey }[] = [
  { from: "nakatsugawa", to: "nagiso-st" },
  { from: "nakatsugawa", to: "kisofukushima" },
  { from: "kisofukushima", to: "narai" },
];

export function LbTopView({ lang }: { lang: Lang }) {
  const ja = lang === "ja";
  const href = useLbHref(lang);

  const before: T[] = [
    { en: "Check which dates are open", ja: "日付の空きを調べる" },
    { en: "Enter where from and where to", ja: "どこからどこへを入れる" },
    { en: "Pay by card", ja: "カードで払う" },
    { en: "Booked", ja: "予約完了" },
  ];
  const onTheDay: T[] = [
    { en: "Take a photo of your bags and send it", ja: "荷物の写真を撮って送る" },
    { en: `Leave your bags by ${DROP_BY}`, ja: `${DROP_BY}までに荷物を置く` },
    { en: `They arrive by ${ARRIVE_BY}`, ja: `${ARRIVE_BY}までに届く` },
  ];

  return (
    <div className="lp">
      <LbNav lang={lang} />
      <LbMenu lang={lang} current="" />
      <LbFloat href={href("book")}>
        <CalendarCheck size={18} /> {ja ? "予約する" : "Book now"}
      </LbFloat>

      {/* ① 誰がどう嬉しいか */}
      <header className="lb-top lb-hero2">
        <span className="head-badge">{ja ? "木曽路・中山道の手荷物配送" : "Luggage transfer on the Nakasendo, Kiso Valley"}</span>
        <h1>
          {ja ? (
            <>
              手荷物から解放されて、<em>木曽を100％楽しむ。</em>
            </>
          ) : (
            <>
              Free of your bags. <em>Enjoy Kiso 100%.</em>
            </>
          )}
        </h1>
        <p>
          {ja
            ? "木曽を旅する人の荷物を、次の宿へ運びます。ハイキングもサイクリングも、手ぶらで思いきり。"
            : "We carry your luggage to your next inn, so you can hike and cycle the Kiso Valley hands-free."}
        </p>
        <Link href={href("book")} className="stay-cta lb-book-btn">
          <CalendarCheck size={18} /> {ja ? "予約する（返事を待たずに予約完了）" : "Book now (booked at once, no waiting for a reply)"}{" "}
          <ArrowRight size={16} />
        </Link>
      </header>

      {/* 使い方の動画 */}
      <div className="lb-top-video">
        <LbHowVideo lang={lang} />
      </div>

      {/* ② 料金の例 */}
      <section className="lb-s" id="price">
        <h2>
          <span className="lb-ex-label">{ja ? "例" : "e.g."}</span>
          {ja ? "料金の例（荷物1個）" : "Example prices (1 bag)"}
        </h2>
        <table className="lb-fare-mini">
          <tbody>
            {EXAMPLE_ROUTES.map((r) => {
              const e = estimate(posOf(r.from), posOf(r.to), 1);
              return (
                <tr key={`${r.from}-${r.to}`}>
                  <th scope="row">
                    {nameOf(r.from)[lang]} <span aria-hidden="true">→</span> {nameOf(r.to)[lang]}
                  </th>
                  <td>{e ? <PriceTag total={e.total} list={e.list} lang={lang} /> : "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lb-s-note lb-ex-note">
          {ja
            ? "これは例です。このほかの区間も運びます。取り消し線が定価、太字がオープンキャンペーン価格です。"
            : "These are examples. We carry between other stops too. Struck through = regular price; bold = opening-campaign price."}
        </p>
      </section>

      {/* ③ 配送範囲 */}
      <section className="lb-s" id="area">
        <h2>{ja ? "配送範囲：JR中央線沿いに、中津川〜奈良井" : "Where: along the JR Chuo Line, Nakatsugawa to Narai"}</h2>
        <p className="lb-s-note">
          {ja ? "JR中央線の沿線に沿って運行します。" : "We run along the JR Chuo Line, station by station."}
        </p>
        <ul className="lb-jr">
          {JR_STATIONS.map((s) => (
            <li key={s.key}>{s.name[lang]}</li>
          ))}
        </ul>
        <p className="lb-s-note">
          {ja ? "馬籠・妻籠に宿泊の方は、" : "Staying in Magome or Tsumago? "}
          <Link href={href("other-services")}>{ja ? "こちらの業者がおすすめです" : "these services are a better fit"}</Link>
          {ja ? "。" : "."}
        </p>
      </section>

      {/* ④ 予約から当日まで */}
      <section className="lb-s" id="flow">
        <h2>{ja ? "予約から当日まで" : "From booking to the day"}</h2>
        <div className="lb-days">
          <div>
            <h3>{ja ? "事前" : "Before"}</h3>
            <ol className="lb-flow">
              {before.map((s) => (
                <li key={s.en}>
                  <strong>{s[lang]}</strong>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3>{ja ? "当日" : "On the day"}</h3>
            <ol className="lb-flow">
              {onTheDay.map((s) => (
                <li key={s.en}>
                  <strong>{s[lang]}</strong>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ⑤ 返金 */}
      <section className="lb-s" id="refund">
        <h2>{ja ? "返金（キャンセルポリシー）" : "Refunds (cancellation policy)"}</h2>
        <p className="lb-s-note">{CANCEL_POLICY[lang]}</p>
      </section>

      {/* ⑥ 遅延・紛失・盗難 */}
      <section className="lb-s" id="cover">
        <h2>{ja ? "遅延・紛失・盗難のとき" : "Delay, loss or theft"}</h2>
        <p className="lb-big">
          {ja
            ? `補償限度額 1個${yen(LB_COMPENSATION_YEN)}まで`
            : `Covered up to ${yen(LB_COMPENSATION_YEN)} per bag`}
        </p>
        <p className="lb-s-note">
          {COMPENSATION_TEXT[lang]}
        </p>
      </section>

      {/* ⑦ 運営者 */}
      <section className="lb-s" id="owner">
        <h2>{ja ? "運営者" : "Who runs it"}</h2>
        <div className="lb-owner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/lb-operator.jpg" alt={ja ? "運営者 福田康宏" : "Yasuhiro Fukuta, owner"} width={104} height={104} />
          <div>
            <strong>{ja ? "福田 康宏（Yakkun）" : "Yasuhiro Fukuta (Yakkun)"}</strong>
            <p>
              {ja
                ? "合同会社From Scratch 代表。南木曽町でゲストハウス柏屋とE-bikeのキソライドを運営しています。荷物は事業用に登録した車両（黒ナンバー）で運びます。"
                : "Owner of From Scratch LLC. I run Guesthouse Kashiwaya and Kiso Ride e-bikes in Nagiso. Your bags travel in our registered commercial van."}{" "}
              <a href={ja ? "https://nakasendo-ebike.com/ja/legal" : "https://nakasendo-ebike.com/legal"}>
                {ja ? "特定商取引法の表記" : "Legal notice"}
              </a>
            </p>
          </div>
        </div>
      </section>

      <LbFooter lang={lang} />
    </div>
  );
}
