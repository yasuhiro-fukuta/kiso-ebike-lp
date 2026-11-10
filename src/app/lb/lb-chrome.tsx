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
function useLb(): { base: string; isJa: boolean } {
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
      <a href={href} target="_blank" rel="noopener noreferrer" className="float-book">
        {children}
      </a>
    </>
  );
}

export function LbFooter({ lang = "en" }: { lang?: Lang }) {
  const ja = lang === "ja";
  return (
    <footer className="lp-footer">
      <div className="foot-grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-mark.png" alt="" className="foot-mark" />
          <div className="brand">
            Luggage Bus <span>Nakasendo</span>
          </div>
          <p>
            {ja
              ? "南木曽〜木曽福島の宿へ、荷物だけを運ぶバス。長野県南木曽町・ゲストハウス柏屋(From Scratch LLC)が運営しています。"
              : "A bags-only shuttle between Nagiso and Kiso-Fukushima. Operated by Kashiwaya Guesthouse (From Scratch LLC), Nagiso, Nagano."}
          </p>
        </div>
        <div>
          <h4>{ja ? "関連サービス" : "Also from us"}</h4>
          <a href={ja ? `${EBIKE_SITE}/ja` : EBIKE_SITE}>
            Kiso Ride
          </a>
          <br />
          <a href={ja ? `${EBIKE_SITE}/ja/rental` : `${EBIKE_SITE}/rental`}>
            {ja ? "E-bikeレンタル" : "E-Bike Rental"}
          </a>
          <br />
          <a href={ja ? `${EBIKE_SITE}/ja/guided` : `${EBIKE_SITE}/guided`}>
            {ja ? "ガイドツアー" : "Guided Tours"}
          </a>
        </div>
        <div>
          <h4>{ja ? "お問い合わせ" : "Connect"}</h4>
          <a href={ja ? WHATSAPP_URL_JA : WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <br />
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram size={16} /> Instagram
          </a>
          <br />
          <a href={SUPPORT_MAILTO}>
            <Mail size={16} /> {ja ? "メールで相談" : "Email us"}
          </a>
          <br />
          <a href={PHONE_TEL}>
            <Phone size={16} /> {PHONE}
          </a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} From Scratch LLC</span>
        <span>
          {ja ? "WhatsAppで予約 · お支払いは当日" : "Book on WhatsApp · pay on the day"}
        </span>
      </div>
    </footer>
  );
}
