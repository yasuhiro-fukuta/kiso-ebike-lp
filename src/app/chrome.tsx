"use client";

import { useState } from "react";
import Link from "next/link";
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
  PACK_WHATSAPP_URL,
} from "./site";

/** The six services, in menu order. */
const MENU_ITEMS: { href: string; label: string; sub: string }[] = [
  { href: "/rental", label: "E-Bike Rental", sub: "Self-guided rides" },
  { href: "/second-day", label: "Self-Tour Advice", sub: "Your second day in Nagiso" },
  { href: "/stay", label: "Stay", sub: "Kashiwaya & the 2027 house" },
  { href: "/luggage-shuttle", label: "Luggage Shuttle", sub: "Walk or ride hands-free" },
  { href: "/gear", label: "Gear Rental", sub: "Kiso hats, bear kit & more" },
  { href: "/guided", label: "Guided Tour", sub: "Dawn rides & the Kiso River Downhill" },
];

/** Fixed top nav with a hamburger menu, shared by every page. */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="lp-nav">
        <Link href="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-mark.png" alt="" className="brand-mark" />
          Beyond Nakasendo <span>Cycling</span>
        </Link>
        <button
          className="nav-burger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={26} />
        </button>
      </nav>

      {open && (
        <div className="nav-overlay" role="dialog" aria-modal="true">
          <button
            className="nav-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={30} />
          </button>
          <nav className="nav-menu">
            {MENU_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
                <small>{item.sub}</small>
              </Link>
            ))}
          </nav>
          <div className="nav-overlay-foot">
            <Link href="/shodo" onClick={() => setOpen(false)}>
              Shodo Calligraphy
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/** All-in-one day pack banner — shown near the bottom of the rental,
 *  shuttle and gear pages. */
export function AllInOnePack() {
  return (
    <section className="allinone-wrap">
      <div className="allinone">
        <div className="allinone-head">
          <span className="allinone-badge">All-in-One Day Pack</span>
          <div className="allinone-price">
            ¥7,000<span>/person</span>
          </div>
        </div>
        <p className="allinone-lead">
          Everything for a full self-guided day in the valley, in one bundle:
        </p>
        <ul className="allinone-list">
          <li>E-bike × 1</li>
          <li>Bear bell × 1</li>
          <li>Bear spray × 1</li>
          <li>One more gear item of your choice</li>
          <li>Luggage shuttle (up to 2 bags per person)</li>
        </ul>
        <a
          href={PACK_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="allinone-cta"
        >
          <MessageCircle size={16} /> Book the day pack on WhatsApp
        </a>
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
export function SiteFooter() {
  return (
    <footer className="lp-footer">
      <div className="foot-grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-mark.png"
            alt="Beyond Nakasendo Cycling logo — the kanji 奔 (to run free) in brush strokes"
            className="foot-mark"
          />
          <div className="brand">
            Beyond Nakasendo <span>Cycling</span>
          </div>
          <p className="foot-tagline">奔 — &ldquo;Stream.&rdquo;</p>
          <p>
            E-bike rentals and a guided full-day ride through the hidden side
            of the Kiso Valley. Operated by Kashiwaya Guesthouse, Nagiso,
            Nagano.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          {MENU_ITEMS.map((item) => (
            <span key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              <br />
            </span>
          ))}
          <Link href="/shodo">Shodo Calligraphy</Link>
        </div>
        <div>
          <h4>Connect</h4>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram size={16} /> Instagram
          </a>
          <br />
          <a href={SUPPORT_MAILTO}>
            <Mail size={16} /> Email us
          </a>
          <br />
          <a href={PHONE_TEL}>
            <Phone size={16} /> {PHONE}
          </a>
          <br />
          <a href={FEEDBACK_URL} target="_blank" rel="noreferrer">
            <MessageSquare size={16} /> Feedback
          </a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} Beyond Nakasendo Cycling · From Scratch LLC</span>
        <span>Book on WhatsApp · pay on the day, card or cash</span>
      </div>
    </footer>
  );
}
