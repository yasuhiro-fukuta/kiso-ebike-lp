"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

/** Other things we lend, mentioned at the end as a bonus. */
const EXTRAS: { name: string; price: string; desc: string }[] = [
  { name: "Hinoki hat", price: "¥500", desc: "Hands-free cover from sun, rain and snow, woven from local hinoki cypress by a local craftsman." },
  { name: "Life jacket", price: "¥1,000", desc: "Float with confidence in the deep pools of Kakizore and Atera." },
  { name: "Rashguard", price: "¥2,000", desc: "Against the river's chill and the sun. Men's and women's sizes." },
];

export default function GearPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href="/book?s=gear">
        <MessageCircle size={18} /> Ask on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Bear spray rental · Bell included · ¥1,500 a day</span>
        <h1>
          A <em>safety charm</em> for the trail.
        </h1>
        <p>
          If you&apos;re walking the Nakasendo or heading into the gorges,
          take a can of bear spray with you. We show you how to use it when
          you pick it up at the guesthouse. Book on WhatsApp first; card
          payment by link. Closed every Monday.
        </p>
      </header>

      {/* BEAR SPRAY */}
      <section className="plans" id="items">
        <div className="plan">
          <div>
            <span className="plan-kicker">¥1,500 / day</span>
            <h3>Bear spray, with a bear bell</h3>
            <div className="plan-ja">熊スプレー(熊鈴付き)</div>
            <p>
              The spray is your last resort. Every rental comes with a bear
              bell, so the mountain hears you coming long before it&apos;s
              needed. The holster clips to your belt or pack strap, within
              easy reach.
            </p>
          </div>
          <div className="plan-photos duo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/gear/bear-spray.jpg" alt="A can of bear spray in its holster" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/gear/bear-bell.jpg"
              alt="The bear bell that comes with every spray rental — a brass bell with a carabiner and reflective strap"
            />
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section className="mini-sec" id="extras">
        <span className="eyebrow">While you&apos;re at it</span>
        <h2>We lend a few other things, too.</h2>
        <div className="mini-grid">
          {EXTRAS.map((x) => (
            <div className="mini-card" key={x.name}>
              <h3>
                {x.name} <small>{x.price} / day</small>
              </h3>
              <p>{x.desc}</p>
            </div>
          ))}
        </div>
        <p className="drop-note">Just add them to your bear spray request on WhatsApp.</p>
      </section>

      {/* BOOK & PAY */}
      <section className="mini-sec" id="book">
        <span className="eyebrow">Book &amp; pay</span>
        <h2>Message us on WhatsApp — we confirm, then send a payment link.</h2>
        <div className="pay-row">
          <Link href="/book?s=gear" className="stay-cta">
            <MessageCircle size={16} /> Book bear spray on WhatsApp
          </Link>
        </div>
        <p className="pay-note" style={{ textAlign: "left", marginLeft: 0 }}>
          Once we confirm, we send a card payment link on WhatsApp. No walk-ins,
          no cash — booking first, please.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
