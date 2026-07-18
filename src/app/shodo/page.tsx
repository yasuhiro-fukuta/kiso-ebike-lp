"use client";

import Link from "next/link";
import { MessageCircle, CloudRain, Mail } from "lucide-react";
import { SHODO_WHATSAPP_URL, SUPPORT_MAILTO } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export default function ShodoPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={SHODO_WHATSAPP_URL}>
        <MessageCircle size={18} /> Ask on WhatsApp
      </FloatBook>

      {/* HERO — paper & ink */}
      <header className="shodo-hero">
        <span className="shodo-tate" aria-hidden="true">
          墨と筆と、静かな部屋。
        </span>
        <div className="shodo-hero-inner">
          <span className="eyebrow">Shodo · Japanese calligraphy · At Kashiwaya</span>
          <h1>
            Trade the handlebars for a <em>brush.</em>
          </h1>
          <p>
            The Kiso Valley has always been a place of craft — hinoki wood, lacquer,
            ink. In a quiet room at Kashiwaya guesthouse, you sit down at a low
            table with brush, sumi ink, and washi paper, and learn how a stroke
            starts, turns, and ends. No experience needed, and everything is
            provided.
          </p>
        </div>
      </header>

      {/* PHOTO */}
      <section className="shodo-photo">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/shodo-class.jpg"
            alt="Guests practicing Japanese calligraphy with brush and ink around a low table at Kashiwaya guesthouse"
          />
          <figcaption>
            A session in the old guesthouse — everyone finds their character.
          </figcaption>
        </figure>
      </section>

      {/* HOW IT FLOWS */}
      <section className="shodo-steps">
        <div className="shodo-steps-head">
          <span className="eyebrow">How a session flows</span>
          <h2>
            One table, one brush, <em>one character that&apos;s yours.</em>
          </h2>
        </div>
        <div className="shodo-steps-grid">
          <div className="sstep">
            <div className="snum">一</div>
            <h3>Settle in</h3>
            <p>
              A low table in a quiet tatami room, with brush, ink, and washi
              paper laid out for you. We start with how to hold the brush and
              how the ink behaves.
            </p>
          </div>
          <div className="sstep">
            <div className="snum">二</div>
            <h3>Find your stroke</h3>
            <p>
              Practice the basic strokes, then choose a character that means
              something to you — your name, a word, a wish — and write it again
              and again until it feels like yours.
            </p>
          </div>
          <div className="sstep">
            <div className="snum">三</div>
            <h3>Take it home</h3>
            <p>
              Pick your best sheet. It goes home with you — a souvenir you made
              yourself, in ink, in the Kiso Valley.
            </p>
          </div>
        </div>
      </section>

      {/* PRICE + BOOKING */}
      <section className="shodo-book">
        <div className="shodo-book-inner">
          <div className="shodo-book-text">
            <span className="eyebrow">Honest pricing</span>
            <h2>
              80% off, <em>while I earn my license.</em>
            </h2>
            <p>
              I&apos;m still working toward my calligraphy certification — so
              until it&apos;s in hand, every session is offered at 80% off the
              standard price. You get the full experience; I get the practice
              teaching it. Fair trade.
            </p>
            <div className="shodo-cta-row">
              <a
                href={SHODO_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="special-cta shodo-cta"
              >
                <MessageCircle size={18} /> Ask &amp; book on WhatsApp
              </a>
              <a href={SUPPORT_MAILTO} className="shodo-cta-alt">
                <Mail size={16} /> or email us
              </a>
            </div>
          </div>
          <div className="shodo-rainy">
            <CloudRain size={22} />
            <p>
              <strong>This is also our rainy-day plan.</strong> If a downpour
              makes <Link href="/rental">riding</Link> unsafe, we move your day
              indoors and swap the saddle for a brush — no rebooking hassle.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
