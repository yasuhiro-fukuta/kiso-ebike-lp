"use client";

/** ラゲッジバスのトップページ(2026-11-25 15:13 社長指示「はなまる配送のような構成に」)。
 *  1ページで上から: キャッチ+予約 → メニュー → サービス → 運行ルート → 料金(主な区間)
 *  → ご利用の流れ → よくある質問 → 会社概要・お問い合わせ。
 *  構成と並べ方だけを参考にし、文言はうちの事実(luggage-bus.ts・lb-config.ts・site.ts)から作る。
 *  予約・見積・決済・空きカレンダーの部品には触れず、/book などのリンクで渡すだけ。
 *  金額は表(lb-fares.json)から estimate() で引く。手で書かない。 */
import Link from "next/link";
import {
  CalendarCheck,
  Clock,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { LbNav, LbFloat, LbFooter } from "./lb-chrome";
import { BookButton, useLbHref } from "./lb-pages";
import { PriceTag } from "./price-tag";
import {
  LINE,
  DROP_BY,
  ARRIVE_BY,
  OUT_OF_RANGE,
  SEASON_TEXT,
  CANCEL_POLICY,
  COMPENSATION_TEXT,
  HOLD_FEE_RULE,
  NARAI_NOTE,
  MAX_FARE_BAGS,
  estimate,
  posOf,
  nameOf,
  yen,
  type AreaKey,
} from "../luggage-bus";
import { LB_COMPENSATION_YEN } from "../lb-config";

type Lang = "en" | "ja";
type T = { en: string; ja: string };

const FIRST = LINE[0].name;
const LAST = LINE[LINE.length - 1].name;

/** Main routes on the top page (1 bag). Prices are looked up in the fare table. */
const MAIN_ROUTES: { from: AreaKey; to: AreaKey }[] = [
  { from: "nakatsugawa", to: "nagiso-st" },
  { from: "nagiso-st", to: "nojiri-st" },
  { from: "nagiso", to: "kisofukushima" },
  { from: "nakatsugawa", to: "kisofukushima" },
  { from: "kisofukushima", to: "narai" },
];

const MENU: { id: string; t: T }[] = [
  { id: "service", t: { en: "Service", ja: "サービス" } },
  { id: "route", t: { en: "Route", ja: "運行ルート" } },
  { id: "price", t: { en: "Prices", ja: "料金" } },
  { id: "flow", t: { en: "How to use", ja: "ご利用の流れ" } },
  { id: "faq", t: { en: "FAQ", ja: "よくある質問" } },
  { id: "company", t: { en: "About us & contact", ja: "会社概要・問い合わせ" } },
];

function More({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="lb-more">
      {children} <ChevronRight size={14} />
    </Link>
  );
}

export function LbTopView({ lang }: { lang: Lang }) {
  const ja = lang === "ja";
  const href = useLbHref(lang);

  const service: { icon: React.ReactNode; t: T; d: T }[] = [
    {
      icon: <CalendarCheck size={20} />,
      t: { en: "Booked the moment you pay", ja: "払えばその場で予約確定" },
      d: { en: "No quote to wait for.", ja: "見積もりの返事を待ちません。" },
    },
    {
      icon: <Clock size={20} />,
      t: { en: `Out by ${DROP_BY}, there by ${ARRIVE_BY}`, ja: `朝${DROP_BY}までに置けば${ARRIVE_BY}までに届く` },
      d: { en: "To your next stop the same day (a few trips: next day).", ja: "次の宿・駅へ当日。一部の区間は翌日。" },
    },
    {
      icon: <ShieldCheck size={20} />,
      t: { en: `Covered up to ${yen(LB_COMPENSATION_YEN)} a bag`, ja: `1個${yen(LB_COMPENSATION_YEN)}まで補償` },
      d: { en: "Free cancellation up to 7 days before.", ja: "7日前までキャンセル無料。" },
    },
  ];

  const steps: { t: T; d: T }[] = [
    {
      t: { en: "Book and pay", ja: "予約して支払う" },
      d: {
        en: "Card payment = booked. By 23:00 the day before.",
        ja: "カードで払えば確定。前日23時まで。",
      },
    },
    {
      t: { en: "Send bag photos", ja: "荷物の写真を送る" },
      d: { en: "One per bag, on WhatsApp.", ja: "1個につき1枚、WhatsAppで。" },
    },
    {
      t: { en: `Leave bags by ${DROP_BY}`, ja: `朝${DROP_BY}までに置く` },
      d: {
        en: "Inn front desk or entrance, or your stop. At a station, pay its holding fee there.",
        ja: "宿のフロントか玄関、または出発の駅に。駅では預かり料を現地で。",
      },
    },
    {
      t: { en: `Collect by ${ARRIVE_BY}`, ja: `${ARRIVE_BY}までに受け取る` },
      d: {
        en: "At your next stop (from north of Nagiso to the south end: next day). Free at stations.",
        ja: "次の駅・宿で(南木曽より北→田立・坂下・中津川は翌日)。駅での受け取りは無料。",
      },
    },
  ];

  const faq: { q: T; a: T }[] = [
    {
      q: { en: "Can I ride the Luggage Bus?", ja: "ラゲッジバスに乗れますか?" },
      a: {
        en: "No. We carry bags only, never passengers, even for a short hop.",
        ja: "乗れません。運ぶのは荷物だけで、短い区間でも人は乗せられません。",
      },
    },
    { q: { en: "Are there station holding fees?", ja: "駅の預かり料はかかりますか?" }, a: HOLD_FEE_RULE },
    { q: { en: "Can I leave bags overnight at Narai Station?", ja: "奈良井駅に一晩預けられますか?" }, a: NARAI_NOTE },
    { q: { en: "Can I cancel?", ja: "キャンセルはできますか?" }, a: CANCEL_POLICY },
    { q: { en: "What if a bag is lost or damaged?", ja: "荷物がなくなったり壊れたりしたら?" }, a: COMPENSATION_TEXT },
  ];

  return (
    <div className="lp">
      <LbNav lang={lang} />
      <LbFloat href={href("book")}>
        <CalendarCheck size={18} /> {ja ? "予約する" : "Book now"}
      </LbFloat>

      {/* キャッチ + 予約 */}
      <header className="lb-top lb-hero2">
        <span className="head-badge">{ja ? "中山道の手荷物配送" : "Nakasendo luggage transfer"}</span>
        <h1>
          {ja ? (
            <>
              WEBで完結、<em>当日届く。</em>
            </>
          ) : (
            <>
              Book online. <em>Bags arrive the same day.</em>
            </>
          )}
        </h1>
        <p>
          {ja
            ? `${FIRST.ja}〜${LAST.ja}の宿・駅へ、荷物だけを運びます。`
            : `Bags only, between inns and stations from ${FIRST.en} to ${LAST.en}.`}
        </p>
        <BookButton lang={lang} />
      </header>

      {/* メニュー(ページ内の目次) */}
      <nav className="lb-anchor" aria-label={ja ? "目次" : "Contents"}>
        {MENU.map((m) => (
          <a key={m.id} href={`#${m.id}`}>
            {m.t[lang]}
          </a>
        ))}
      </nav>

      {/* サービス */}
      <section className="lb-s" id="service">
        <h2>{ja ? "サービス" : "Our service"}</h2>
        <ul className="lb-feat">
          {service.map((f) => (
            <li key={f.t.en}>
              <span className="lb-feat-icon">{f.icon}</span>
              <span>
                <strong>{f.t[lang]}</strong>
                <small>{f.d[lang]}</small>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 運行ルート */}
      <section className="lb-s" id="route">
        <h2>{ja ? "運行ルート" : "Route"}</h2>
        <ol className="lb-stops">
          {LINE.map((a) => (
            <li key={a.key} className={a.station ? "st" : undefined}>
              {a.name[lang]}
            </li>
          ))}
        </ol>
        <p className="lb-s-note">
          {ja ? `運行：${SEASON_TEXT.ja}。` : `Runs Mar 2027–Feb 2028, closed Mondays.`}{" "}
          {ja
            ? `${OUT_OF_RANGE.map((o) => o.name.ja).join("・")}は対象外です。`
            : `Not ${OUT_OF_RANGE.map((o) => o.name.en).join(" or ")}:`}{" "}
          <Link href={href("other-services")}>{ja ? "ほかの業者のご案内" : "other services"}</Link>
        </p>
        <More href={href("how")}>{ja ? "置き場所を見る" : "Where to leave bags"}</More>
      </section>

      {/* 料金(主な区間) */}
      <section className="lb-s" id="price">
        <h2>{ja ? "料金" : "Prices"}</h2>
        <p className="lb-s-note">
          {ja
            ? `区間と個数(1〜${MAX_FARE_BAGS}個)で決まった料金です。いまはオープンキャンペーン価格(取り消し線が定価)。主な区間・荷物1個：`
            : `A set price by trip and number of bags (1–${MAX_FARE_BAGS}). Opening-campaign prices now (struck-through = regular). Main trips, 1 bag:`}
        </p>
        <table className="lb-fare-mini">
          <tbody>
            {MAIN_ROUTES.map((r) => {
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
        <p className="lb-s-note">{HOLD_FEE_RULE[lang]}</p>
        <div className="lb-s-links">
          <More href={href("book")}>{ja ? "他の区間の見積もり" : "Price any trip"}</More>
          <More href={href("prices")}>{ja ? "全料金・時刻" : "All prices & times"}</More>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="lb-s" id="flow">
        <h2>{ja ? "ご利用の流れ" : "How to use"}</h2>
        <ol className="lb-flow">
          {steps.map((s) => (
            <li key={s.t.en}>
              <strong>{s.t[lang]}</strong>
              <small>{s.d[lang]}</small>
            </li>
          ))}
        </ol>
        <More href={href("policy")}>{ja ? "ご利用のルール・キャンセル" : "Rules and cancellation"}</More>
      </section>

      {/* よくある質問 */}
      <section className="lb-s" id="faq">
        <h2>{ja ? "よくある質問" : "FAQ"}</h2>
        {faq.map((f) => (
          <details key={f.q.en} className="lb-qa">
            <summary>{f.q[lang]}</summary>
            <p>{f.a[lang]}</p>
          </details>
        ))}
        <More href={href("faq")}>{ja ? "質問をもっと見る" : "More questions"}</More>
      </section>

      {/* 会社概要・お問い合わせ = フッター(id="company") */}
      <LbFooter lang={lang} />
    </div>
  );
}
