"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Instagram,
  BookOpen,
  Mail,
  Phone,
  MessageSquare,
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  Share2,
  Link2,
  Check,
  Twitter,
  Facebook,
} from "lucide-react";
import {
  INSTAGRAM_URL,
  LINE_URL,
  MEDIUM_URL,
  SUPPORT_MAILTO,
  PHONE,
  PHONE_TEL,
  FEEDBACK_URL,
  WHATSAPP_URL,
  WHATSAPP_URL_JA,
} from "./site";

export type Lang = "en" | "ja";

/** The services, in menu order, per language. */
const MENU_ITEMS: Record<
  Lang,
  { href: string; label: string; sub: string }[]
> = {
  en: [
    { href: "/shuttle-ebike", label: "Shuttle E-Bike Package", sub: "One-way, hands-free, ¥7,000" },
    { href: "/rental", label: "E-Bike Rental", sub: "Delivered to you · drop anywhere" },
    { href: "/luggage-shuttle", label: "Luggage Shuttle", sub: "Walk or ride hands-free" },
    { href: "/gear", label: "Gear Rental", sub: "Kiso hats, bear kit & more" },
    { href: "/stay", label: "Stay", sub: "Kashiwaya & the 2027 house" },
    { href: "/second-day", label: "Self-Tour Advice", sub: "Your second day in Nagiso" },
    { href: "/guided", label: "Guided Tours by Locals", sub: "Dawn rides & the Kiso River Downhill" },
  ],
  ja: [
    { href: "/ja/shuttle-ebike", label: "Shuttle E-bikeパッケージ", sub: "乗り捨て・手ぶらの全部入り ¥7,000" },
    { href: "/ja/rental", label: "E-bikeレンタル", sub: "お届け&乗り捨て自由" },
    { href: "/ja/luggage-shuttle", label: "手荷物シャトル", sub: "身軽に歩く・走る" },
    { href: "/ja/gear", label: "ギアレンタル", sub: "ヒノキ傘・熊対策ほか" },
    { href: "/ja/stay", label: "宿泊", sub: "柏屋と、2027年の一棟貸し" },
    { href: "/ja/second-day", label: "セルフツアーのすすめ", sub: "南木曽での2日目" },
    { href: "/ja/guided", label: "住民本気のガイドツアー", sub: "早朝ライドと木曽川ダウンヒル" },
  ],
};

const PLAN_HREF: Record<Lang, string> = { en: "/plan", ja: "/ja/plan" };
const PLAN_LABEL: Record<Lang, string> = {
  en: "3-Night Model Plan",
  ja: "3泊モデルプラン",
};
const SHODO_HREF: Record<Lang, string> = { en: "/shodo", ja: "/ja/shodo" };
const SHODO_LABEL: Record<Lang, string> = {
  en: "Shodo Calligraphy",
  ja: "書道体験",
};
const KAKIZORE_HREF: Record<Lang, string> = {
  en: "/kakizore",
  ja: "/kakizore-train",
};
const KAKIZORE_LABEL: Record<Lang, string> = {
  en: "Kakizore Gorge: Map & Access",
  ja: "電車で柿其渓谷へ——十二兼駅が便利!",
};
const COLUMNS_LABEL: Record<Lang, string> = { en: "Columns", ja: "コラム" };
const CROWDFREE_LABEL: Record<Lang, string> = {
  en: "Crowd-Free Japan: a 26-Day Itinerary",
  ja: "人混み嫌いのための日本旅行旅程(英語)",
};
const KAKIZORE_CAR_LABEL = "車で柿其渓谷へ——天白公園駐車場が便利!";
const SNOWBOARD_LABEL: Record<Lang, string> = {
  en: "Learn in Achi, Graduate in Hakuba",
  ja: "初スノボの冬ルート:阿智で学び、白馬で卒業(英語)",
};
const ATERA_COL_HREF: Record<Lang, string> = { en: "/atera-gorge", ja: "/atera" };
const ATERA_COL_LABEL: Record<Lang, string> = {
  en: "Atera Gorge by Train & E-Bike",
  ja: "阿寺渓谷へは電車&E-bike",
};
const LIVE_HREF: Record<Lang, string> = { en: "/live-here", ja: "/ja/live-here" };
const LIVE_LABEL: Record<Lang, string> = {
  en: "Live in the Valley",
  ja: "谷に住む",
};

/** EN ⇄ JA path mapping for the toggle. /atera is a Japanese-only
 *  article: its EN target is the home page. */
function langTargets(pathname: string): { en: string; ja: string; isJa: boolean } {
  if (pathname === "/atera")
    return { en: "/atera-gorge", ja: "/atera", isJa: true };
  if (pathname === "/atera-gorge")
    return { en: "/atera-gorge", ja: "/atera", isJa: false };
  if (pathname === "/kakizore")
    return { en: "/kakizore", ja: "/kakizore-train", isJa: false };
  if (pathname === "/kakizore-train")
    return { en: "/kakizore", ja: "/kakizore-train", isJa: true };
  if (pathname === "/kakizore-car")
    return { en: "/kakizore", ja: "/kakizore-car", isJa: true };
  if (pathname === "/crowd-free-japan")
    return { en: "/crowd-free-japan", ja: "/ja", isJa: false };
  if (pathname === "/snowboard-route")
    return { en: "/snowboard-route", ja: "/ja", isJa: false };
  const isJa = pathname === "/ja" || pathname.startsWith("/ja/");
  if (isJa) {
    const en = pathname.replace(/^\/ja/, "") || "/";
    return { en, ja: pathname, isJa };
  }
  return { en: pathname, ja: pathname === "/" ? "/ja" : `/ja${pathname}`, isJa };
}

/** Share menu in the top nav: WhatsApp, LINE, X, Facebook, email,
 *  copy link — plus the device share sheet (Instagram etc.) where
 *  the browser supports it. */
function ShareButton({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ja = lang === "ja";

  const info = () => ({
    eu: encodeURIComponent(window.location.href),
    et: encodeURIComponent(document.title),
  });
  const go = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
    setOpen(false);
  };
  const native = async () => {
    try {
      await navigator.share({ title: document.title, url: window.location.href });
    } catch {
      /* user cancelled */
    }
    setOpen(false);
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 1200);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="nav-share">
      <button
        className="nav-burger"
        aria-label={ja ? "このページをシェア" : "Share this page"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Share2 size={20} />
      </button>
      {open &&
        createPortal(
          <div className="share-menu">
          <button onClick={() => { const { eu, et } = info(); go(`https://wa.me/?text=${et}%20${eu}`); }}>
            <MessageCircle size={16} /> WhatsApp
          </button>
          <button onClick={() => { const { eu } = info(); go(`https://social-plugins.line.me/lineit/share?url=${eu}`); }}>
            <LineIcon size={16} /> LINE
          </button>
          <button onClick={() => { const { eu, et } = info(); go(`https://twitter.com/intent/tweet?url=${eu}&text=${et}`); }}>
            <Twitter size={16} /> X
          </button>
          <button onClick={() => { const { eu } = info(); go(`https://www.facebook.com/sharer/sharer.php?u=${eu}`); }}>
            <Facebook size={16} /> Facebook
          </button>
          <button
            onClick={() => {
              const { eu, et } = info();
              window.location.href = `mailto:?subject=${et}&body=${eu}`;
              setOpen(false);
            }}
          >
            <Mail size={16} /> {ja ? "メールで送る" : "Email"}
          </button>
          <button onClick={copy}>
            {copied ? <Check size={16} /> : <Link2 size={16} />}{" "}
            {copied ? (ja ? "コピーしました" : "Copied!") : ja ? "リンクをコピー" : "Copy link"}
          </button>
          {typeof navigator !== "undefined" &&
            typeof navigator.share === "function" && (
              <button onClick={native}>
                <Share2 size={16} /> {ja ? "その他(Instagram等)" : "More (Instagram…)"}
              </button>
            )}
          </div>,
          document.body
        )}
    </div>
  );
}

/** Fixed top nav with a language switch and hamburger menu. */
export function SiteNav({ lang = "en" }: { lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const [colsOpen, setColsOpen] = useState(false);
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
          <ShareButton lang={lang} />
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
            onClick={() => {
              setOpen(true);
              setColsOpen(false);
            }}
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
          {colsOpen && (
            <div className="nav-col-list">
              <Link href={PLAN_HREF[lang]} onClick={() => setOpen(false)}>
                {PLAN_LABEL[lang]}
              </Link>
              <Link href={KAKIZORE_HREF[lang]} onClick={() => setOpen(false)}>
                {KAKIZORE_LABEL[lang]}
              </Link>
              {lang === "ja" && (
                <Link href="/kakizore-car" onClick={() => setOpen(false)}>
                  {KAKIZORE_CAR_LABEL}
                </Link>
              )}
              <Link href="/crowd-free-japan" onClick={() => setOpen(false)}>
                {CROWDFREE_LABEL[lang]}
              </Link>
              <Link href={ATERA_COL_HREF[lang]} onClick={() => setOpen(false)}>
                {ATERA_COL_LABEL[lang]}
              </Link>
              <Link href="/snowboard-route" onClick={() => setOpen(false)}>
                {SNOWBOARD_LABEL[lang]}
              </Link>
            </div>
          )}
          <div className="nav-overlay-foot">
            <button
              type="button"
              className="nav-col-toggle"
              onClick={() => setColsOpen((v) => !v)}
              aria-expanded={colsOpen}
            >
              {COLUMNS_LABEL[lang]}{" "}
              <ChevronDown
                size={15}
                style={colsOpen ? { transform: "rotate(180deg)" } : undefined}
              />
            </button>
            <Link href={SHODO_HREF[lang]} onClick={() => setOpen(false)}>
              {SHODO_LABEL[lang]}
            </Link>
            <Link href={LIVE_HREF[lang]} onClick={() => setOpen(false)}>
              {LIVE_LABEL[lang]}
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
            href={ja ? "/ja/book?s=pack" : "/book?s=pack"}
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
/** Simplified LINE speech-bubble mark (inherits currentColor). */
export function LineIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3C6.48 3 2 6.64 2 11.1c0 2.59 1.5 4.88 3.84 6.36.6.38.4 1.73.26 2.57-.12.73.6.62.98.4.3-.17 2.1-1.26 2.94-1.78.64.1 1.3.15 1.98.15 5.52 0 10-3.64 10-8.1S17.52 3 12 3Zm-4.9 10.08H5.2a.5.5 0 0 1-.5-.5V8.9a.5.5 0 1 1 1 0v3.18h1.4a.5.5 0 1 1 0 1Zm1.9-.5a.5.5 0 1 1-1 0V8.9a.5.5 0 1 1 1 0v3.68Zm4.9 0a.5.5 0 0 1-.9.3l-2-2.73v2.43a.5.5 0 1 1-1 0V8.9a.5.5 0 0 1 .9-.3l2 2.73V8.9a.5.5 0 1 1 1 0v3.68Zm3.9-.5a.5.5 0 0 1 0 1h-1.9a.5.5 0 0 1-.5-.5V8.9a.5.5 0 0 1 .5-.5h1.9a.5.5 0 1 1 0 1h-1.4v.84h1.4a.5.5 0 1 1 0 1h-1.4v.84h1.4Z" />
    </svg>
  );
}

export function FloatBook({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "/";
  const ja =
    pathname === "/ja" ||
    pathname.startsWith("/ja/") ||
    pathname === "/atera" ||
    pathname === "/kakizore-train" ||
    pathname === "/kakizore-car";
  return (
    <>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="float-book float-line"
      >
        <LineIcon size={18} /> {ja ? "LINEで問い合わせ" : "LINE"}
      </a>
      <a
        href={href}
        {...(href.startsWith("/")
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" })}
        className="float-book"
      >
        {children}
      </a>
    </>
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
          <Link href={PLAN_HREF[lang]}>{PLAN_LABEL[lang]}</Link>
          <br />
          <Link href={SHODO_HREF[lang]}>{SHODO_LABEL[lang]}</Link>
          <br />
          <Link href={LIVE_HREF[lang]}>{LIVE_LABEL[lang]}</Link>
          <br />
          <Link href={ja ? "/atera" : "/atera-gorge"}>
            {ja ? "阿寺渓谷へは電車&E-bike" : "Atera Gorge by Train & E-Bike"}
          </Link>
          <br />
          <Link href={KAKIZORE_HREF[lang]}>{KAKIZORE_LABEL[lang]}</Link>
          {ja && (
            <>
              <br />
              <Link href="/kakizore-car">{KAKIZORE_CAR_LABEL}</Link>
            </>
          )}
          <br />
          <Link href="/crowd-free-japan">{CROWDFREE_LABEL[lang]}</Link>
          <br />
          <Link href="/snowboard-route">{SNOWBOARD_LABEL[lang]}</Link>
        </div>
        <div>
          <h4>{ja ? "お問い合わせ" : "Connect"}</h4>
          <a href={MEDIUM_URL} target="_blank" rel="noreferrer">
            <BookOpen size={16} /> {ja ? "Medium(読みもの)" : "Stories on Medium"}
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
