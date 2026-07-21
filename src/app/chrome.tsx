"use client";

import Link from "next/link";
import { Instagram, Mail, Phone, MessageSquare } from "lucide-react";
import {
  INSTAGRAM_URL,
  SUPPORT_MAILTO,
  PHONE,
  PHONE_TEL,
  FEEDBACK_URL,
} from "./site";

/** Fixed top nav, shared by every page. */
export function SiteNav() {
  return (
    <nav className="lp-nav">
      <Link href="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo-mark.png" alt="" className="brand-mark" />
        Beyond Nakasendo <span>Cycling</span>
      </Link>
      <div className="nav-links">
        <Link href="/rental">E-Bike Rental</Link>
        <Link href="/guided">Guided Tour</Link>
        <Link href="/shodo">Shodo</Link>
        <Link href="/rental#book">Book</Link>
      </div>
    </nav>
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
          <Link href="/rental">E-Bike Rental</Link>
          <br />
          <Link href="/guided">Guided Tour</Link>
          <br />
          <Link href="/shodo">Shodo Calligraphy</Link>
          <br />
          <Link href="/rental#gear">The Bikes</Link>
          <br />
          <Link href="/rental#book">Book a Ride</Link>
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
        <span>Secure payment by Square</span>
      </div>
    </footer>
  );
}
