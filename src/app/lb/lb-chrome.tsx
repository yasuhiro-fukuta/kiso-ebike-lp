"use client";

/** ラゲッジバスの共通の枠(ヘッダー・フッター・浮きボタン)。
 *  2026-11-26 はなまる配送(全5ページ+CSS)の型を手本に作り直し:
 *   - ヘッダー:固定の細い帯。トップでは最初は透明+白文字、スクロールで和紙色の半透明。ロゴ+メニュー4つ+言語切替
 *   - フッター:墨色の地に生成りの文字。ロゴ+一言+メニュー+運営者情報+問い合わせ先
 *  メニューは4つだけ(2026-11-25 23:11 社長の仕様):トップ/予約する/営業カレンダー/よくある質問。 */
import { useEffect, useState } from "react";
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

/** The site menu (2026-11-25 23:11 社長): 4 items only, on every page including the top. */
export const LB_MENU: { slug: string; t: { en: string; ja: string } }[] = [
  { slug: "", t: { en: "Home", ja: "トップ" } },
  { slug: "book", t: { en: "Book", ja: "予約する" } },
  { slug: "calendar", t: { en: "Calendar", ja: "営業カレンダー" } },
  { slug: "faq", t: { en: "FAQ", ja: "よくある質問" } },
];

function useMenuHref(lang: Lang) {
  const { base } = useLb();
  const ja = lang === "ja";
  return (slug: string) => (slug ? `${base}${ja ? "/ja" : ""}/${slug}` : ja ? `${base}/ja` : base || "/");
}

/** Fixed header bar. `overlay` = sits on the top photo: transparent with white text until you scroll. */
export function LbNav({
  lang = "en",
  current,
  overlay = false,
}: {
  lang?: Lang;
  current?: string;
  overlay?: boolean;
}) {
  const { base } = useLb();
  const ja = lang === "ja";
  const href = useMenuHref(lang);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (!overlay) return;
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [overlay]);
  const clear = overlay && !scrolled;
  const enHref = base || "/";
  const jaHref = `${base}/ja`;
  return (
    <header className={`lbx-head${clear ? " is-clear" : ""}`}>
      <div className="lbx-head-in">
        <Link href={ja ? jaHref : enHref} className="lbx-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-mark.png" alt="" />
          <span>
            Luggage Bus <i>Nakasendo</i>
          </span>
        </Link>
        <nav className="lbx-menu" aria-label={ja ? "メニュー" : "Menu"}>
          {LB_MENU.map((m) => {
            const on = current !== undefined && m.slug === current;
            return (
              <Link key={m.slug || "top"} href={href(m.slug)} className={on ? "on" : undefined} aria-current={on ? "page" : undefined}>
                {m.t[lang]}
              </Link>
            );
          })}
        </nav>
        <div className="lbx-lang">
          <Link href={enHref} className={ja ? "" : "on"}>
            EN
          </Link>
          <span>/</span>
          <Link href={jaHref} className={ja ? "on" : ""}>
            JP
          </Link>
        </div>
      </div>
    </header>
  );
}

export function LbFloat({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="lbx-float"
    >
      {children}
    </a>
  );
}

/** Footer: sumi ground, cream text. Logo + one line + menu + operator + contact. */
export function LbFooter({ lang = "en" }: { lang?: Lang }) {
  const ja = lang === "ja";
  const href = useMenuHref(lang);
  return (
    <footer className="lbx-foot" id="company">
      <div className="lbx-foot-in">
        <div className="lbx-foot-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-mark.png" alt="" />
          <div>
            <div className="lbx-foot-name">
              Luggage Bus <i>Nakasendo</i>
            </div>
            <p className="lbx-foot-tag">{ja ? "手ぶらで、木曽を100％。" : "Hands-free in the Kiso Valley."}</p>
          </div>
        </div>
        <nav className="lbx-foot-menu" aria-label={ja ? "メニュー" : "Menu"}>
          {LB_MENU.map((m) => (
            <Link key={m.slug || "top"} href={href(m.slug)}>
              {m.t[lang]}
            </Link>
          ))}
        </nav>
        <div className="lbx-foot-info">
          <h4>{ja ? "運営者" : "Operator"}</h4>
          <p>
            {ja
              ? "合同会社From Scratch（ゲストハウス柏屋・キソライド）長野県木曽郡南木曽町"
              : "From Scratch LLC (Kashiwaya Guesthouse · Kiso Ride), Nagiso, Nagano"}
          </p>
          <p>{ja ? "JR中央線沿いに、中津川〜奈良井で運行" : "Along the JR Chuo Line, Nakatsugawa to Narai"}</p>
        </div>
        <div className="lbx-foot-info">
          <h4>{ja ? "お問い合わせ" : "Contact"}</h4>
          <div className="lbx-foot-row">
            <a href={ja ? WHATSAPP_URL_JA : WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a href={LINE_URL} target="_blank" rel="noreferrer">
              <LineIcon size={14} /> LINE
            </a>
            <a href={SUPPORT_MAILTO}>
              <Mail size={14} /> {ja ? "メール" : "Email"}
            </a>
            <a href={PHONE_TEL}>
              <Phone size={14} /> {PHONE}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram size={14} /> Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="lbx-foot-bar">
        <span>© {new Date().getFullYear()} From Scratch LLC</span>
        <span className="lbx-foot-links">
          <a href={ja ? `${EBIKE_SITE}/ja/legal` : `${EBIKE_SITE}/legal`}>{ja ? "特定商取引法の表記" : "Legal notice"}</a>
          <a href={ja ? `${EBIKE_SITE}/ja` : EBIKE_SITE}>a Kiso Ride service</a>
        </span>
      </div>
    </footer>
  );
}
