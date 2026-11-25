"use client";

/** ラゲッジバスのページ構成(2026-11-25 23:02 社長のダメ出しで作り直し)。
 *  メニューは トップ/予約する/営業カレンダー/よくある質問 の4つだけ(lb-chrome の LbMenu)。
 *  旧 /prices /how /policy は消して /faq へリダイレクト。中身(料金の例・届く時間・置き場所・
 *  キャンセル・補償・ルール)は「よくある質問」に入れた。範囲外の方へ(/other-services)はメニューに出さない。 */
import Link from "next/link";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { LbNav, LbMenu, LbFooter, LbFloat, useLb } from "./lb-chrome";
import { LbPlanner } from "./lb-planner";
import { LbServiceCalendar } from "./lb-sections";
import * as En from "./parts-en";
import * as Ja from "./parts-ja";

type Lang = "en" | "ja";
export type LbSection = "book" | "calendar" | "faq";

type T = { en: string; ja: string };

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
      <CalendarCheck size={18} /> {lang === "ja" ? "予約する（返事を待たずに予約完了）" : "Book now (booked at once, no waiting for a reply)"}{" "}
      <ArrowRight size={16} />
    </Link>
  );
}

const HEAD: Record<LbSection, T> = {
  book: { en: "Book", ja: "予約する" },
  calendar: { en: "Service calendar", ja: "営業カレンダー" },
  faq: { en: "FAQ", ja: "よくある質問" },
};

function Body({ lang, section }: { lang: Lang; section: LbSection }) {
  const J = lang === "ja";
  switch (section) {
    case "book":
      return <LbPlanner lang={lang} />;
    case "calendar":
      return <LbServiceCalendar lang={lang} />;
    case "faq": {
      const more: { t: T; body: React.ReactNode }[] = [
        { t: { en: "Prices (examples)", ja: "料金の例" }, body: J ? <Ja.JaPricing /> : <En.EnPricing /> },
        { t: { en: "Route and when bags arrive", ja: "ルートと荷物が届く時間" }, body: J ? <Ja.JaTimetable /> : <En.EnTimetable /> },
        { t: { en: "Where to leave and collect bags", ja: "荷物を預ける・受け取る場所" }, body: J ? <Ja.JaStations /> : <En.EnStations /> },
        { t: { en: "Cancellation", ja: "キャンセル" }, body: J ? <Ja.JaCancel /> : <En.EnCancel /> },
        { t: { en: "Peace of mind and conditions", ja: "安心して預けるために・ご利用の条件" }, body: J ? <Ja.JaConditions /> : <En.EnConditions /> },
        { t: { en: "Rules", ja: "ご利用のルール" }, body: J ? <Ja.JaRules /> : <En.EnRules /> },
      ];
      return (
        <>
          {J ? <Ja.JaFaq /> : <En.EnFaq />}
          <div className="lb-faq-more">
            {more.map((m) => (
              <details key={m.t.en}>
                <summary>{m.t[lang]}</summary>
                {m.body}
              </details>
            ))}
          </div>
        </>
      );
    }
  }
}

export function LbSectionView({ lang, section }: { lang: Lang; section: LbSection }) {
  const ja = lang === "ja";
  const href = useLbHref(lang);
  return (
    <div className="lp">
      <LbNav lang={lang} />
      <LbMenu lang={lang} current={section} />
      {section !== "book" && (
        <LbFloat href={href("book")}>
          <CalendarCheck size={18} /> {ja ? "予約する" : "Book now"}
        </LbFloat>
      )}
      <header className="lb-sub-head">
        <h1>{HEAD[section][lang]}</h1>
      </header>

      <Body lang={lang} section={section} />

      {section !== "book" && (
        <section className="mini-sec lb-end-cta">
          <BookButton lang={lang} />
        </section>
      )}

      <LbFooter lang={lang} />
    </div>
  );
}
