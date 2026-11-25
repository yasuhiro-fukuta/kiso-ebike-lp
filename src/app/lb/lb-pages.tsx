"use client";

/** ラゲッジバスのページ構成(2026-11-25 社長の依頼B・C、カメラマン森さんの指摘)。
 *  トップ = 短いキャッチ + 大きなカード型の目次。詳しい説明はカードから専用ページへ。
 *  ページ: /book(予約) /prices(料金・範囲) /how(使い方・置き場所) /policy(キャンセル・補償) /faq /other-services
 *  中身の文・数字は分割前のトップページから移しただけ(parts-en.tsx / parts-ja.tsx)。 */
import Link from "next/link";
import {
  CalendarCheck,
  JapaneseYen,
  Route,
  ShieldCheck,
  CircleHelp,
  Signpost,
  ArrowRight,
} from "lucide-react";
import { LbNav, LbFooter, LbFloat, useLb } from "./lb-chrome";
import { LbPlanner } from "./lb-planner";
import { LbHowVideo } from "./how-video";
import { LbInstantSteps, LbArrangements, LbServiceCalendar } from "./lb-sections";
import * as En from "./parts-en";
import * as Ja from "./parts-ja";
import { DROP_BY, ARRIVE_BY, yen, LINE } from "../luggage-bus";
import { LB_COMPENSATION_YEN } from "../lb-config";

type Lang = "en" | "ja";
export type LbSection = "book" | "prices" | "how" | "policy" | "faq";

type T = { en: string; ja: string };
type Card = { slug: LbSection | "other-services"; icon: React.ReactNode; title: T; text: T };

const FIRST = LINE[0].name;
const LAST = LINE[LINE.length - 1].name;

export const LB_CARDS: Card[] = [
  {
    slug: "book",
    icon: <CalendarCheck size={26} />,
    title: { en: "Book now", ja: "予約する" },
    text: {
      en: "Pick your stops and bags, pay — confirmed on the spot.",
      ja: "駅と個数を選んで支払えば、その場で予約確定。",
    },
  },
  {
    slug: "prices",
    icon: <JapaneseYen size={26} />,
    title: { en: "Prices & route", ja: "料金・範囲" },
    text: {
      en: `${FIRST.en} to ${LAST.en}. A set price per trip.`,
      ja: `${FIRST.ja}〜${LAST.ja}。区間と個数で決まった料金。`,
    },
  },
  {
    slug: "how",
    icon: <Route size={26} />,
    title: { en: "How it works", ja: "使い方・置き場所" },
    text: {
      en: `Leave bags by ${DROP_BY}, collect by ${ARRIVE_BY}. Where to leave them.`,
      ja: `朝${DROP_BY}までに置けば${ARRIVE_BY}までに届く。置き場所も。`,
    },
  },
  {
    slug: "policy",
    icon: <ShieldCheck size={26} />,
    title: { en: "Cancellation & cover", ja: "キャンセル・補償" },
    text: {
      en: `Free cancellation up to 7 days before. Covered up to ${yen(LB_COMPENSATION_YEN)} per bag.`,
      ja: `7日前までキャンセル無料。補償は1個${yen(LB_COMPENSATION_YEN)}まで。`,
    },
  },
  {
    slug: "faq",
    icon: <CircleHelp size={26} />,
    title: { en: "FAQ", ja: "よくある質問" },
    text: { en: "Riding along, turning up, lost bags…", ja: "人は乗れる? 予約なしは? 紛失したら?" },
  },
  {
    slug: "other-services",
    icon: <Signpost size={26} />,
    title: { en: "Magome or Tsumago?", ja: "範囲外の方へ" },
    text: { en: "Outside our route: services that cover them.", ja: "馬籠・妻籠は対象外。ほかの業者のご案内。" },
  },
];

/** Paths: on the preview host everything sits under /lb; on the LB domain at the root. */
export function useLbHref(lang: Lang) {
  const { base } = useLb();
  const ja = lang === "ja";
  return (slug: string) => (slug ? `${base}${ja ? "/ja" : ""}/${slug}` : ja ? `${base}/ja` : base || "/");
}

/** Book button that sits above everything else. */
export function BookButton({ lang }: { lang: Lang }) {
  const href = useLbHref(lang);
  return (
    <Link href={href("book")} className="stay-cta lb-book-btn">
      <CalendarCheck size={18} /> {lang === "ja" ? "予約する(料金がすぐ出ます)" : "Book now — see the price at once"}{" "}
      <ArrowRight size={16} />
    </Link>
  );
}

const HEAD: Record<LbSection, { eyebrow: T; title: T }> = {
  book: {
    eyebrow: { en: "Book", ja: "予約する" },
    title: { en: "Choose, pay, and you're booked.", ja: "選んで、払えば、その場で確定。" },
  },
  prices: {
    eyebrow: { en: "Prices & route", ja: "料金・範囲" },
    title: { en: "Where we go, and what it costs.", ja: "運ぶ範囲と料金。" },
  },
  how: {
    eyebrow: { en: "How it works", ja: "使い方・置き場所" },
    title: { en: "Leave your bags, walk on.", ja: "荷物を置いて、手ぶらで歩く。" },
  },
  policy: {
    eyebrow: { en: "Cancellation & cover", ja: "キャンセル・補償" },
    title: { en: "Cancellation, compensation and rules.", ja: "キャンセル・補償・ご利用のルール。" },
  },
  faq: {
    eyebrow: { en: "FAQ", ja: "よくある質問" },
    title: { en: "Questions.", ja: "よくある質問。" },
  },
};

/** Tabs between the pages (the same list as the top cards). */
function LbTabs({ lang, current }: { lang: Lang; current: string }) {
  const href = useLbHref(lang);
  return (
    <nav className="lb-tabs" aria-label={lang === "ja" ? "ページ" : "Pages"}>
      <Link href={href("")}>{lang === "ja" ? "トップ" : "Home"}</Link>
      {LB_CARDS.map((c) => (
        <Link key={c.slug} href={href(c.slug)} className={c.slug === current ? "on" : undefined} aria-current={c.slug === current ? "page" : undefined}>
          {c.title[lang]}
        </Link>
      ))}
    </nav>
  );
}

function Body({ lang, section }: { lang: Lang; section: LbSection }) {
  const J = lang === "ja";
  switch (section) {
    case "book":
      return (
        <>
          <LbPlanner lang={lang} />
          <LbInstantSteps lang={lang} />
        </>
      );
    case "prices":
      return (
        <>
          {J ? <Ja.JaPricing /> : <En.EnPricing />}
          {J ? <Ja.JaTimetable /> : <En.EnTimetable />}
          <LbServiceCalendar lang={lang} />
          {J ? <Ja.JaFindStop /> : <En.EnFindStop />}
        </>
      );
    case "how":
      return (
        <>
          {J ? <Ja.JaHowSteps /> : <En.EnHowSteps />}
          {J ? <Ja.JaNotice /> : <En.EnNotice />}
          <LbHowVideo lang={lang} />
          {J ? <Ja.JaStations /> : <En.EnStations />}
          <LbArrangements lang={lang} />
          {J ? <Ja.JaDifference /> : <En.EnDifference />}
        </>
      );
    case "policy":
      return (
        <>
          {J ? <Ja.JaCancel /> : <En.EnCancel />}
          {J ? <Ja.JaConditions /> : <En.EnConditions />}
          {J ? <Ja.JaRules /> : <En.EnRules />}
          {J ? <Ja.JaWho /> : <En.EnWho />}
        </>
      );
    case "faq":
      return J ? <Ja.JaFaq /> : <En.EnFaq />;
  }
}

export function LbSectionView({ lang, section }: { lang: Lang; section: LbSection }) {
  const ja = lang === "ja";
  const href = useLbHref(lang);
  const h = HEAD[section];
  return (
    <div className="lp">
      <LbNav lang={lang} />
      {section !== "book" && (
        <LbFloat href={href("book")}>
          <CalendarCheck size={18} /> {ja ? "予約する" : "Book now"}
        </LbFloat>
      )}
      <LbTabs lang={lang} current={section} />
      <header className="lb-sub-head">
        <span className="eyebrow">{h.eyebrow[lang]}</span>
        <h1>{h.title[lang]}</h1>
      </header>

      <Body lang={lang} section={section} />

      {section !== "book" && (
        <section className="mini-sec lb-end-cta">
          <BookButton lang={lang} />
          <p className="drop-note">
            <Link href={href("")}>{ja ? "← トップ(目次)へ戻る" : "← Back to the contents"}</Link>
          </p>
        </section>
      )}

      <LbFooter lang={lang} />
    </div>
  );
}
