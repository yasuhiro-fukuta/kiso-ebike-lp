"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Instagram,
  Mail,
  Phone,
  MessageSquare,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import {
  INSTAGRAM_URL,
  SUPPORT_MAILTO,
  PHONE,
  PHONE_TEL,
  FEEDBACK_URL,
  WHATSAPP_URL,
  WHATSAPP_URL_JA,
  PACK_WHATSAPP_URL,
  PACK_WHATSAPP_URL_JA,
} from "./site";

export type Lang = "en" | "ja";

/** The services, in menu order, per language. */
const MENU_ITEMS: Record<
  Lang,
  { href: string; label: string; sub: string }[]
> = {
  en: [
    { href: "/rental", label: "E-Bike Rental", sub: "Self-guided rides" },
    { href: "/shuttle-ebike", label: "Shuttle E-Bike Package", sub: "One-way, hands-free, ¥7,000" },
    { href: "/second-day", label: "Self-Tour Advice", sub: "Your second day in Nagiso" },
    { href: "/stay", label: "Stay", sub: "Kashiwaya & the 2027 house" },
    { href: "/luggage-shuttle", label: "Luggage Shuttle", sub: "Walk or ride hands-free" },
    { href: "/gear", label: "Gear Rental", sub: "Kiso hats, bear kit & more" },
    { href: "/guided", label: "Guided Tour", sub: "Dawn rides & the Kiso River Downhill" },
  ],
  ja: [
    { href: "/ja/rental", label: "E-bikeレンタル", sub: "セルフガイドで走る" },
    { href: "/ja/shuttle-ebike", label: "Shuttle E-bikeパッケージ", sub: "乗り捨て・手ぶらの全部入り ¥7,000" },
    { href: "/ja/second-day", label: "セルフツアーのすすめ", sub: "南木曽での2日目" },
    { href: "/ja/stay", label: "宿泊", sub: "柏屋と、2027年の一棟貸し" },
    { href: "/ja/luggage-shuttle", label: "手荷物シャトル", sub: "身軽に歩く・走る" },
    { href: "/ja/gear", label: "ギアレンタル", sub: "ヒノキ傘・熊対策ほか" },
    { href: "/ja/guided", label: "ガイドツアー", sub: "早朝ライドと木曽川ダウンヒル" },
  ],
};

const SHODO_HREF: Record<Lang, string> = { en: "/shodo", ja: "/ja/shodo" };
const SHODO_LABEL: Record<Lang, string> = {
  en: "Shodo Calligraphy",
  ja: "書道体験",
};

/** EN ⇄ JA path mapping for the toggle. /atera is a Japanese-only
 *  article: its EN target is the home page. */
function langTargets(pathname: string): { en: string; ja: string; isJa: boolean } {
  if (pathname === "/atera") return { en: "/", ja: "/atera", isJa: true };
  const isJa = pathname === "/ja" || pathname.startsWith("/ja/");
  if (isJa) {
    const en = pathname.replace(/^\/ja/, "") || "/";
    return { en, ja: pathname, isJa };
  }
  return { en: pathname, ja: pathname === "/" ? "/ja" : `/ja${pathname}`, isJa };
}

/** Fixed top nav with a language switch and hamburger menu. */
export function SiteNav({ lang = "en" }: { lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const t = langTargets(pathname);
  const items = MENU_ITEMS[lang];
  return (
    <>
      <nav className="lp-nav">
        <Link
          href={lang === "ja" ? "/ja" : "/"}
          className="brand"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-mark.png" alt="" className="brand-mark" />
          Beyond Nakasendo <span>Cycling</span>
        </Link>
        <div className="nav-right">
          <div className="lang-switch">
            <Link href={t.en} className={t.isJa ? "" : "on"}>
              EN
            </Link>
            <span>/</span>
            <Link href={t.ja} className={t.isJa ? "on" : ""}>
              日本語
            </Link>
          </div>
          <button
            className="nav-burger"
            onClick={() => setOpen(true)}
            aria-label={lang === "ja" ? "メニューを開く" : "Open menu"}
            aria-expanded={open}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="nav-overlay" role="dialog" aria-modal="true">
          <button
            className="nav-close"
            onClick={() => setOpen(false)}
            aria-label={lang === "ja" ? "メニューを閉じる" : "Close menu"}
          >
            <X size={30} />
          </button>
          <nav className="nav-menu">
            {items.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
                <small>{item.sub}</small>
              </Link>
            ))}
          </nav>
          <div className="nav-overlay-foot">
            <Link href={SHODO_HREF[lang]} onClick={() => setOpen(false)}>
              {SHODO_LABEL[lang]}
            </Link>
            <a
              href={lang === "ja" ? WHATSAPP_URL_JA : WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/** Shuttle E-bike Package banner — shown near the bottom of the rental,
 *  shuttle and gear pages. `link` hides the "what is it" link on the
 *  package's own page. */
export function AllInOnePack({
  lang = "en",
  link = true,
}: {
  lang?: Lang;
  link?: boolean;
}) {
  const ja = lang === "ja";
  return (
    <section className="allinone-wrap">
      <div className="allinone">
        <div className="allinone-head">
          <span className="allinone-badge">
            {ja ? "Shuttle E-bikeパッケージ" : "The Shuttle E-Bike Package"}
          </span>
          <div className="allinone-price">
            ¥7,000<span>{ja ? "/人" : "/person"}</span>
          </div>
        </div>
        <p className="allinone-lead">
          {ja
            ? "乗り捨て・手ぶらの走り方、いわゆる「Shuttle E-bike」の全部入り:"
            : "The one-way, hands-free way to ride — the “shuttle e-bike” — in one bundle:"}
        </p>
        <ul className="allinone-list">
          <li>{ja ? "E-bike × 1" : "E-bike × 1"}</li>
          <li>{ja ? "熊鈴 × 1" : "Bear bell × 1"}</li>
          <li>{ja ? "熊スプレー × 1" : "Bear spray × 1"}</li>
          <li>{ja ? "お好きなギアをもう1点" : "One more gear item of your choice"}</li>
          <li>
            {ja
              ? "手荷物シャトル(1人2個まで)"
              : "Luggage shuttle (up to 2 bags per person)"}
          </li>
        </ul>
        <div className="allinone-actions">
          <a
            href={ja ? PACK_WHATSAPP_URL_JA : PACK_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="allinone-cta"
          >
            <MessageCircle size={16} />{" "}
            {ja ? "パッケージをWhatsAppで予約" : "Book the package on WhatsApp"}
          </a>
          {link && (
            <Link
              href={ja ? "/ja/shuttle-ebike" : "/shuttle-ebike"}
              className="allinone-more"
            >
              {ja ? "「Shuttle E-bike」って? →" : "What’s a shuttle e-bike? →"}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/** Floating CTA button — target differs per page. */
export function FloatBook({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="float-book">
      {children}
    </a>
  );
}

/** Footer, shared by every page. */
export function SiteFooter({ lang = "en" }: { lang?: Lang }) {
  const ja = lang === "ja";
  const items = MENU_ITEMS[lang];
  return (
    <footer className="lp-footer">
      <div className="foot-grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-mark.png"
            alt={
              ja
                ? "Beyond Nakasendo Cyclingのロゴ — 筆文字の「奔」"
                : "Beyond Nakasendo Cycling logo — the kanji 奔 (to run free) in brush strokes"
            }
            className="foot-mark"
          />
          <div className="brand">
            Beyond Nakasendo <span>Cycling</span>
          </div>
          <p className="foot-tagline">奔 — &ldquo;Stream.&rdquo;</p>
          <p>
            {ja
              ? "木曽谷の「まだ知られていない側」を走るE-bikeレンタルとガイドライド。長野県南木曽町・ゲストハウス柏屋が運営しています。"
              : "E-bike rentals and a guided full-day ride through the hidden side of the Kiso Valley. Operated by Kashiwaya Guesthouse, Nagiso, Nagano."}
          </p>
        </div>
        <div>
          <h4>{ja ? "メニュー" : "Explore"}</h4>
          {items.map((item) => (
            <span key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              <br />
            </span>
          ))}
          <Link href={SHODO_HREF[lang]}>{SHODO_LABEL[lang]}</Link>
          <br />
          <Link href="/atera">
            {ja ? "阿寺渓谷へは電車&E-bike" : "阿寺渓谷へは電車&E-bike(日本語)"}
          </Link>
        </div>
        <div>
          <h4>{ja ? "お問い合わせ" : "Connect"}</h4>
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
          <br />
          <a href={FEEDBACK_URL} target="_blank" rel="noreferrer">
            <MessageSquare size={16} /> {ja ? "ご意見・ご感想" : "Feedback"}
          </a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} Beyond Nakasendo Cycling · From Scratch LLC</span>
        <span>
          {ja
            ? "WhatsAppで予約 · お支払いは当日(カード/現金)"
            : "Book on WhatsApp · pay on the day, card or cash"}
        </span>
      </div>
    </footer>
  );
}
