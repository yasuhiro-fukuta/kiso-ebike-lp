"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bike,
  BedDouble,
  Backpack,
  Shirt,
  Compass,
  Map,
  MessageCircle,
} from "lucide-react";
import { RENTAL_WHATSAPP_URL } from "./site";
import { SiteNav, SiteFooter, FloatBook } from "./chrome";

const SERVICES = [
  {
    href: "/rental",
    icon: Bike,
    title: "E-Bike Rental",
    desc: "Self-guided rides on quiet valley roads — one-way drops, luggage moved free.",
  },
  {
    href: "/stay",
    icon: BedDouble,
    title: "Stay",
    desc: "Kashiwaya Guesthouse now; a whole kominka to yourselves in 2027.",
  },
  {
    href: "/luggage-shuttle",
    icon: Backpack,
    title: "Luggage Shuttle",
    desc: "Bags moved along the valley so you can walk or ride empty-handed.",
  },
  {
    href: "/gear",
    icon: Shirt,
    title: "Gear Rental",
    desc: "Woven Kiso hats, bear bells & spray, swim and winter kit.",
  },
  {
    href: "/guided",
    icon: Compass,
    title: "Guided Tour",
    desc: "The Kiso River Downhill — a full day down the valley with two guides.",
  },
  {
    href: "/second-day",
    icon: Map,
    title: "Self-Tour Advice",
    desc: "How to spend your second day in Nagiso — written out, on foot or by e-bike.",
  },
];

export default function Page() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={RENTAL_WHATSAPP_URL}>
        <MessageCircle size={18} /> Book on WhatsApp
      </FloatBook>

      {/* HERO */}
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <span className="eyebrow hero-eyebrow">
          Nagiso · Kiso Valley · Central Japan
        </span>
        <h1>
          Slide out of the guidebook. <em>Go play</em> like a local.
        </h1>
        <p className="hero-sub">
          We&apos;re an e-bike outfit in the satoyama hills along the old
          Nakasendo road — and everything a slow traveler needs around the
          ride: beds, bags carried, gear lent, guides who grew up on these
          roads.
        </p>
        <div className="hero-cta">
          <Link href="/rental" className="btn-primary">
            Rent an E-Bike <ArrowRight size={16} />
          </Link>
          <Link href="/second-day" className="btn-ghost">
            Staying a second day? Start here
          </Link>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Kakizore Gorge</span>
          <span>Atera Valley</span>
          <span>Yogawa-michi</span>
          <span>Tsumago Post Town</span>
          <span>Local-only roads</span>
          <span>Kakizore Gorge</span>
          <span>Atera Valley</span>
          <span>Yogawa-michi</span>
          <span>Tsumago Post Town</span>
          <span>Local-only roads</span>
        </div>
      </div>

      {/* INTRO — the overview */}
      <section className="intro">
        <div>
          <span className="eyebrow">Who we are</span>
          <h2>
            An e-bike hub in the <em>satoyama</em>, on the old road between
            Kyoto and Tokyo.
          </h2>
          <p>
            Nagiso sits on the Nakasendo, in the wooded hills the Japanese
            call satoyama — the half-wild country between village and
            mountain. Everyone passes through; almost nobody stays to play.
            That&apos;s the gap we fill.
          </p>
          <p>
            Quiet e-bikes are the key that opens this valley, and around them
            we&apos;ve built the rest of the toolkit: a guesthouse to sleep
            in, a shuttle for your bags, gear to borrow, guides to ride with,
            and honest advice for going alone. Pick what you need below.
          </p>
        </div>
        <div className="intro-visual"></div>
      </section>

      {/* SERVICE DIRECTORY */}
      <section className="mini-sec" id="services">
        <span className="eyebrow">What we do</span>
        <h2>Six ways in.</h2>
        <div className="mini-grid">
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className="mini-card">
              <h3>
                <s.icon size={20} /> {s.title}
              </h3>
              <p>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
