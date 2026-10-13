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
          An unhurried trip, <em>for two.</em>
        </h1>
        <p className="hero-sub">Moving with the river and the clouds.</p>
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
        <span className="eyebrow">What kind of day will it be?</span>
        <h2>Three doors into the valley.</h2>
        <div className="entry-grid">
          {/* 12/7撮影後に写真差し替え */}
          <Link href="/guided" className="entry-card">
            <img
              src="/assets/guide-point.jpg"
              alt="A local guide points out the next stop to a rider at a forest bridge"
            />
            <div className="entry-body">
              <h3>
                <Compass size={20} /> Join a guided tour
              </h3>
              <p>
                A private full-day ride down the Kiso River — your group,
                one local guide, and every photo stop worth making.
              </p>
              <span className="entry-go">
                Guided tours <ArrowRight size={14} />
              </span>
            </div>
          </Link>
          {/* 12/7撮影後に写真差し替え */}
          <Link href="/rental" className="entry-card">
            <img
              src="/assets/tour/paddies.jpg"
              alt="A rider stops on a quiet lane to photograph golden rice paddies in Nagiso"
            />
            <div className="entry-body">
              <h3>
                <Bike size={20} /> Rent an e-bike
              </h3>
              <p>
                Delivered to your inn, dropped off wherever the day ends.
                Quiet roads, emerald water, your own pace.
              </p>
              <span className="entry-go">
                E-bike rental <ArrowRight size={14} />
              </span>
            </div>
          </Link>
          {/* 12/7撮影後に写真差し替え */}
          <Link href="/luggage-shuttle" className="entry-card">
            <img
              src="/assets/tsumago.jpg"
              alt="Zaru soba on a table along the old post-town street of Tsumago"
            />
            <div className="entry-body">
              <h3>
                <Backpack size={20} /> Have your bags carried
              </h3>
              <p>
                Walk the old Nakasendo hand in hand — not hand on suitcase.
                Your bags travel ahead and wait for you.
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
