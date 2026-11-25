"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Mail, Phone, Instagram } from "lucide-react";
import {
  LINE_URL,
  SUPPORT_MAILTO,
  PHONE,
  PHONE_TEL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
  WHATSAPP_URL_JA,
} from "../site";
import { LineIcon } from "../chrome";

/** Main e-bike site (absolute: this LP also lives on its own domain). */
export const EBIKE_SITE = "https://nakasendo-ebike.com";

type Lang = "en" | "ja";

/** On the preview/staging host the LP lives under /lb; on its own domain
 *  the middleware rewrites "/" → /lb, so paths carry no prefix. */
export function useLb(): { base: string; isJa: boolean } {
  const pathname = usePathname() ?? "/";
  const base = pathname === "/lb" || pathname.startsWith("/lb/") ? "/lb" : "";
  const rest = base ? pathname.slice(base.length) || "/" : pathname;
  const isJa = rest === "/ja" || rest.startsWith("/ja/");
  return { base, isJa };
}

export function LbNav({ lang = "en" }: { lang?: Lang }) {
  const { base } = useLb();
  const ja = lang === "ja";
  const enHref = base || "/";
  const jaHref = `${base}/ja`;
  return (
    <nav className="lp-nav">
      <Link
        href={ja ? jaHref : enHref}
        className="brand"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo-mark.png" alt="" className="brand-mark" />
        Luggage Bus <span>Nakasendo</span>
      </Link>
      <div className="nav-right">
        <div className="lang-switch">
          <Link href={enHref} className={ja ? "" : "on"}>
            EN
          </Link>
          <span>/</span>
          <Link href={jaHref} className={ja ? "on" : ""}>
            日本語
          </Link>
        </div>
      </div>
    </nav>
  );
}

/** The site menu (2026-11-25 23:02 社長): 4 items only, on every page including the top. */
export const LB_MENU: { slug: string; t: { en: string; ja: string } }[] = [
  { slug: "", t: { en: "Home", ja: "トップ" } },
  { slug: "book", t: { en: "Book", ja: "予約する" } },
  { slug: "calendar", t: { en: "Calendar", ja: "運行カレンダー" } },
  { slug: "faq", t: { en: "FAQ", ja: "よくある質問" } },
];

export function LbMenu({ lang = "en", current = "" }: { lang?: Lang; current?: string }) {
  const { base } = useLb();
  const ja = lang === "ja";
  const href = (slug: string) => (slug ? `${base}${ja ? "/ja" : ""}/${slug}` : ja ? `${base}/ja` : base || "/");
  return (
    <nav className="lb-mainmenu" aria-label={ja ? "メニュー" : "Menu"}>
      {LB_MENU.map((m) => (
        <Link
          key={m.slug || "top"}
          href={href(m.slug)}
          className={m.slug === current ? "on" : undefined}
          aria-current={m.slug === current ? "page" : undefined}
        >
          {m.t[lang]}
        </Link>
      ))}
    </nav>
  );
}

export function LbFloat({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const { isJa } = useLb();
  return (
    <>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="float-book float-line"
      >
        <LineIcon size={18} /> {isJa ? "LINEで問い合わせ" : "LINE"}
      </a>
      <a
        href={href}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="float-book"
      >
        {children}
      </a>
    </>
  );
}

/** Footer, kept short (2026-11-25): brand, operator, contact and related links in a few lines. */
export function LbFooter({ lang = "en" }: { lang?: Lang }) {
  const ja = lang === "ja";
  return (
    <footer className="lp-footer lb-foot" id="company">
      <div className="lb-foot-in">
        <div className="lb-foot-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-mark.png" alt="" className="foot-mark" />
          <div>
            <div className="brand">
              Luggage Bus <span>Nakasendo</span>
            </div>
            <a className="lb-endorse" href={ja ? `${EBIKE_SITE}/ja` : EBIKE_SITE}>
              a Kiso Ride service
            </a>
          </div>
        </div>
        <h4 className="lb-foot-h">{ja ? "会社概要・お問い合わせ" : "About us & contact"}</h4>
        <p>
          {ja
            ? "JR中央線沿いに、中津川〜奈良井。運営：ゲストハウス柏屋(合同会社From Scratch)・長野県南木曽町"
            : "Along the JR Chuo Line, Nakatsugawa to Narai. Operated by Kashiwaya Guesthouse (From Scratch LLC), Nagiso, Nagano."}
        </p>
        <div className="lb-foot-row">
          <a href={ja ? WHATSAPP_URL_JA : WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={15} /> WhatsApp
          </a>
          <a href={LINE_URL} target="_blank" rel="noreferrer">
            <LineIcon size={15} /> LINE
          </a>
          <a href={SUPPORT_MAILTO}>
            <Mail size={15} /> {ja ? "メール" : "Email"}
          </a>
          <a href={PHONE_TEL}>
            <Phone size={15} /> {PHONE}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram size={15} /> Instagram
          </a>
        </div>
        <div className="lb-foot-row small">
          <a href={ja ? `${EBIKE_SITE}/ja` : EBIKE_SITE}>Kiso Ride</a>
          <a href={ja ? `${EBIKE_SITE}/ja/rental` : `${EBIKE_SITE}/rental`}>{ja ? "E-bikeレンタル" : "E-Bike Rental"}</a>
          <a href={ja ? `${EBIKE_SITE}/ja/guided` : `${EBIKE_SITE}/guided`}>{ja ? "ガイドツアー" : "Guided Tours"}</a>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} From Scratch LLC</span>
          <span>{ja ? "オンラインで申し込み · お支払いで予約確定" : "Book online · confirmed when you pay"}</span>
        </div>
      </div>
    </footer>
  );
}
