"use client";

/** ラゲッジバスのトップ。
 *  中身と順番は 2026-11-25 23:11 社長の仕様(①〜⑧)。見た目は 2026-11-26 はなまる配送(全5ページ+CSS)の型を手本に作り直し:
 *  写真が主役・明朝の大きな見出し一言・短い文・広い余白・和紙の白/墨/差し色1色(LBNの朱)。
 *   ① 誰がどう嬉しいか(画面いっぱいの写真+見出し+予約ボタン+料金の例へ)  ② 他とどう違うか
 *   ③ 料金の目安(荷物2個の例・3区間)  ④ 配送範囲(JR中央線沿い)  [写真の帯+予約ボタン]
 *   ⑤ 予約から当日まで(番号つき・線でつなぐ。下に動画)  ⑥ 返金  ⑦ 遅延・紛失・盗難(普通の文で短く)  ⑧ 運営者+予約ボタン
 *  金額は表(lb-fares.json)から estimate() で引く。手で書かない。
 *  トップで強調するのは嬉しいことと予約ボタンだけ(2026-11-26 00:30 社長)。上限額・注意書きは強調しない。 */
import Link from "next/link";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { LbNav, LbFloat, LbFooter } from "./lb-chrome";
import { useLbHref } from "./lb-pages";
import { LbHowVideo } from "./how-video";
import {
  DROP_BY,
  ARRIVE_BY,
  CANCEL_POLICY,
  CAMPAIGN_LABEL,
  JR_STATIONS,
  estimate,
  posOf,
  nameOf,
  yen,
  TOP_EXAMPLE_BAGS as EXAMPLE_BAGS,
  TOP_EXAMPLE_ROUTES as EXAMPLE_ROUTES,
} from "../luggage-bus";

type Lang = "en" | "ja";
type T = { en: string; ja: string };

function BookLink({ href, lang, className = "" }: { href: string; lang: Lang; className?: string }) {
  return (
    <Link href={href} className={`lbx-btn lbx-btn-primary ${className}`}>
      {lang === "ja" ? "予約する" : "Book now"} <ArrowRight size={16} />
    </Link>
  );
}

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
    <div className="lp lbx">
      <LbNav lang={lang} current="" overlay />
      <LbFloat href={href("book")}>
        <CalendarCheck size={18} /> {ja ? "予約する" : "Book now"}
      </LbFloat>

      {/* ① 誰がどう嬉しいか */}
      <section className="lbx-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="lbx-hero-bg" src="/assets/lb-hero.jpg" alt="" />
        <div className="lbx-hero-shade" />
        <div className="lbx-hero-in">
          <p className="lbx-eyebrow">{ja ? "木曽路・中山道の手荷物配送" : "Luggage transfer · Kiso Valley, Nakasendo"}</p>
          <h1>
            {ja ? (
              <>
                <span>手荷物から解放されて、</span>
                <span>木曽を100％楽しむ。</span>
              </>
            ) : (
              <>
                <span>Free of your bags.</span>
                <span>Enjoy Kiso 100%.</span>
              </>
            )}
          </h1>
          <p className="lbx-hero-sub">
            {ja
              ? "木曽を旅する人の荷物を、次の宿や駅へ運びます。ハイキングもサイクリングも、手ぶらで思いきり。"
              : "We carry your luggage to your next inn or station, so you can hike and cycle the Kiso Valley hands-free."}
          </p>
          <div className="lbx-hero-cta">
            <BookLink href={href("book")} lang={lang} />
            <a href="#price" className="lbx-btn lbx-btn-ghost">
              {ja ? "料金の例を見る" : "See prices"}
            </a>
          </div>
        </div>
      </section>

      {/* ② 他とどう違うか */}
      <section className="lbx-sec lbx-intro" id="diff">
        <div className="lbx-intro-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="lbx-intro-photo" src="/assets/tour/bridge.jpg" alt={ja ? "木曽川の橋を自転車で渡る" : "Cycling across a bridge in the Kiso Valley"} />
          <div>
            <h2 className="lbx-h2 lbx-left">{ja ? "朝置いて、夕方には次の宿へ。" : "Leave them in the morning. They're there by afternoon."}</h2>
            <dl className="lbx-facts">
              <div>
                <dt>{ja ? "当日配送" : "Same day"}</dt>
                <dd>{ja ? "当日中に次の宿や駅へ届けます。" : "Delivered to your next inn or station the same day."}</dd>
              </div>
              <div>
                <dt>{ja ? "即予約" : "Book at once"}</dt>
                <dd>{ja ? "こちらの返事を待たずに、その場で予約完了。" : "Booked on the spot. No waiting for a reply from us."}</dd>
              </div>
              <div>
                <dt>{ja ? "馬籠・妻籠泊" : "Magome / Tsumago"}</dt>
                <dd>
                  {ja ? "馬籠・妻籠で宿泊される方は、" : "Staying in Magome or Tsumago? "}
                  <Link href={href("other-services")}>{ja ? "こちらの業者がおすすめです" : "these services are a better fit"}</Link>
                  {ja ? "。" : "."}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ③ 料金の目安(荷物2個の例) */}
      <section className="lbx-sec lbx-alt" id="price">
        <header className="lbx-head2">
          <h2 className="lbx-h2">{ja ? "料金の目安" : "Prices"}</h2>
          <p className="lbx-accent">{ja ? `荷物${EXAMPLE_BAGS}個の例` : `Examples for ${EXAMPLE_BAGS} bags`}</p>
        </header>
        <ul className="lbx-fares">
          {EXAMPLE_ROUTES.map((r) => {
            const e = estimate(posOf(r.from), posOf(r.to), EXAMPLE_BAGS);
            return (
              <li key={`${r.from}-${r.to}`} className="lbx-fare">
                <p className="lbx-fare-route">
                  {nameOf(r.from)[lang]} <span aria-hidden="true">→</span> {nameOf(r.to)[lang]}
                </p>
                {e ? (
                  <>
                    <p className="lbx-fare-total">
                      {e.discounted && (
                        <s aria-label={ja ? `定価 ${yen(e.list)}` : `Regular price ${yen(e.list)}`}>{yen(e.list)}</s>
                      )}
                      <strong>{yen(e.total)}</strong>
                    </p>
                    <p className="lbx-fare-per">
                      {ja
                        ? `荷物${EXAMPLE_BAGS}個の合計（1個あたり${yen(Math.round(e.total / EXAMPLE_BAGS))}）`
                        : `Total for ${EXAMPLE_BAGS} bags (${yen(Math.round(e.total / EXAMPLE_BAGS))} per bag)`}
                    </p>
                  </>
                ) : (
                  <p className="lbx-fare-total">—</p>
                )}
              </li>
            );
          })}
        </ul>
        <p className="lbx-small lbx-center">
          {ja ? "これは例です。このほかの区間も運びます。" : "These are examples. We carry between other stops too."}
          <br />
          {ja
            ? `取り消し線が定価、大きい数字が${CAMPAIGN_LABEL.ja}価格です。`
            : `Struck through = regular price; large figure = ${CAMPAIGN_LABEL.en.toLowerCase()} price.`}
        </p>
      </section>

      {/* ④ 配送範囲 */}
      <section className="lbx-sec" id="area">
        <header className="lbx-head2">
          <h2 className="lbx-h2">{ja ? "JR中央線沿いに、中津川〜奈良井" : "Along the JR Chuo Line, Nakatsugawa to Narai"}</h2>
          <p className="lbx-lead">{ja ? "JR中央線の沿線に沿って運行します。" : "We run along the JR Chuo Line, station by station."}</p>
        </header>
        <ol className="lbx-line">
          {JR_STATIONS.map((s) => (
            <li key={s.key}>
              <span>{s.name[lang]}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* 写真の帯 */}
      <section className="lbx-band">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="lbx-band-bg" src="/assets/kisoriver.jpg" alt="" />
        <div className="lbx-band-shade" />
        <div className="lbx-band-in">
          <h2>{ja ? "重い荷物は、先に次の宿へ。" : "Send the heavy bags ahead."}</h2>
          <p>{ja ? "身軽に歩いて、身軽に走る。" : "Walk light. Ride light."}</p>
          <BookLink href={href("book")} lang={lang} />
        </div>
      </section>

      {/* ⑤ 予約から当日まで(下に動画) */}
      <section className="lbx-sec lbx-alt" id="flow">
        <header className="lbx-head2">
          <h2 className="lbx-h2">{ja ? "予約から当日まで" : "From booking to the day"}</h2>
        </header>
        {[
          { h: { en: "Before", ja: "事前" }, steps: before },
          { h: { en: "On the day", ja: "当日" }, steps: onTheDay },
        ].map((g) => (
          <div className="lbx-flow-group" key={g.h.en}>
            <h3>{g.h[lang]}</h3>
            <ol className={`lbx-flow n${g.steps.length}`}>
              {g.steps.map((s, i) => (
                <li key={s.en}>
                  <span className="lbx-flow-i">{String(i + 1).padStart(2, "0")}</span>
                  <strong>{s[lang]}</strong>
                </li>
              ))}
            </ol>
          </div>
        ))}
        <div className="lbx-video">
          <LbHowVideo lang={lang} />
        </div>
      </section>

      {/* ⑥ 返金 ⑦ 遅延・紛失・盗難 */}
      <section className="lbx-sec" id="refund">
        <div className="lbx-two">
          <div>
            <h2 className="lbx-h3">{ja ? "返金（キャンセルポリシー）" : "Refunds (cancellation policy)"}</h2>
            <p className="lbx-text">{CANCEL_POLICY[lang]}</p>
          </div>
          <div id="cover">
            <h2 className="lbx-h3">{ja ? "遅延・紛失・盗難のとき" : "Delay, loss or theft"}</h2>
            <p className="lbx-text">
              {ja ? "万一のときは補償があります。詳しくは" : "If something goes wrong, you are covered. See the "}
              <Link href={href("faq")}>{ja ? "よくある質問" : "FAQ"}</Link>
              {ja ? "へ。" : " for details."}
            </p>
          </div>
        </div>
      </section>

      {/* ⑧ 運営者 + 予約ボタン */}
      <section className="lbx-sec lbx-alt" id="owner">
        <div className="lbx-owner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/lb-operator.jpg" alt={ja ? "運営者 福田康宏" : "Yasuhiro Fukuta, owner"} width={120} height={120} />
          <div>
            <p className="lbx-eyebrow-dark">{ja ? "運営者" : "Who runs it"}</p>
            <h2 className="lbx-h3">{ja ? "福田 康宏（Yakkun）" : "Yasuhiro Fukuta (Yakkun)"}</h2>
            <p className="lbx-text">
              {ja
                ? "合同会社From Scratch 代表。南木曽町でゲストハウス柏屋とE-bikeのキソライドを運営しています。荷物は事業用に登録した車両（黒ナンバー）で運びます。"
                : "Owner of From Scratch LLC. I run Guesthouse Kashiwaya and Kiso Ride e-bikes in Nagiso. Your bags travel in our registered commercial van."}
            </p>
          </div>
        </div>
        <div className="lbx-center lbx-end-cta">
          <BookLink href={href("book")} lang={lang} />
        </div>
      </section>

      <LbFooter lang={lang} />
    </div>
  );
}
