"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Backpack,
  Compass,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL } from "./site";
import { SiteNav, SiteFooter, FloatBook } from "./chrome";

/* eslint-disable @next/next/no-img-element */

export default function Page() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={WHATSAPP_URL}>
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
          E-bikes, local guides and luggage logistics for the quiet side of
          the Kiso Valley, on the old Nakasendo road.
        </p>
        <div className="hero-cta">
          <a href="#start" className="btn-primary">
            Find your way in <ArrowRight size={16} />
          </a>
          <Link href="/explore" className="btn-ghost">
            Exploring the area? Start here
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

      {/* PURPOSE ENTRANCES */}
      <section className="mini-sec" id="start">
        <span className="eyebrow">What brings you to the valley?</span>
        <h2>Three doors in.</h2>
        <div className="entry-grid">
          {/* 12/7撮影後に写真差し替え */}
          <Link href="/guided" className="entry-card">
            <img
              src="/assets/downhill.jpg"
              alt="Guided e-bike tour descending along the Kiso River"
            />
            <div className="entry-body">
              <h3>
                <Compass size={20} /> Join a guided tour
              </h3>
              <p>
                Ride with locals who grew up on these roads — the full-day
                Kiso River Downhill, or a two-hour dawn ride.
              </p>
              <span className="entry-go">
                Guided tours <ArrowRight size={14} />
              </span>
            </div>
          </Link>
          {/* 12/7撮影後に写真差し替え */}
          <Link href="/rental" className="entry-card">
            <img
              src="/assets/riders.jpg"
              alt="A family of four on fat-tire e-bikes in Nagiso"
            />
            <div className="entry-body">
              <h3>
                <Bike size={20} /> Rent an e-bike
              </h3>
              <p>
                Delivered to the spot you choose, dropped off anywhere in
                the area. Self-guided, on quiet valley roads.
              </p>
              <span className="entry-go">
                E-bike rental <ArrowRight size={14} />
              </span>
            </div>
          </Link>
          {/* 12/7撮影後に写真差し替え */}
          <Link href="/luggage-shuttle" className="entry-card">
            <img
              src="/assets/shuttle-van.jpg"
              alt="The luggage shuttle van parked in the Kiso Valley"
            />
            <div className="entry-body">
              <h3>
                <Backpack size={20} /> Have your bags carried
              </h3>
              <p>
                We move your luggage along the valley so you can walk or
                ride empty-handed.
              </p>
              <span className="entry-go">
                Luggage shuttle <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </div>
        <div className="sub-entries">
          <Link href="/stay">
            Stay at Kashiwaya Guesthouse <ArrowRight size={13} />
          </Link>
          <Link href="/plan">
            The 3-night model plan <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* EXPLORE BAND */}
      <section className="hub-band">
        <div className="hub-band-inner">
          <span className="eyebrow">Beyond the ride</span>
          <h2>
            Gorges, routes and <em>local know-how.</em>
          </h2>
          <p>
            Atera&apos;s impossibly blue water, the Kakizore gorge, three
            mapped self-tour routes, calligraphy, gear to borrow — everything
            around the ride lives one level deeper.
          </p>
          <Link href="/explore" className="band-cta">
            Explore the area <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
