"use client";

import Link from "next/link";
import { ArrowRight, Bike } from "lucide-react";
import { SQUARE_BOOKING_URL } from "./site";
import { SiteNav, SiteFooter, FloatBook } from "./chrome";

export default function Page() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={SQUARE_BOOKING_URL}>
        <Bike size={18} /> Book a Ride
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
          There&apos;s a whole valley the day-trippers never see — hidden
          gorges, old forest railways, river pools you can dive into. We know
          the way. Hop on a quiet e-bike and come find it with us.
        </p>
        <div className="hero-cta">
          <Link href="/rental" className="btn-primary">
            Rent an E-Bike <ArrowRight size={16} />
          </Link>
          <Link href="/guided" className="btn-ghost">
            Or join the guided downhill
          </Link>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Kakizore Gorge</span>
          <span>Atera Valley</span>
          <span>Koiji Pass</span>
          <span>Tsumago Post Town</span>
          <span>Local-only roads</span>
          <span>Kakizore Gorge</span>
          <span>Atera Valley</span>
          <span>Koiji Pass</span>
          <span>Tsumago Post Town</span>
          <span>Local-only roads</span>
        </div>
      </div>

      {/* INTRO */}
      <section className="intro">
        <div>
          <span className="eyebrow">The idea</span>
          <h2>
            Most people <em>pass through</em> the Kiso Valley. The good stuff is
            just off the main road.
          </h2>
          <p>
            Nagiso sits on the old Nakasendo post road, halfway between Kyoto and
            Tokyo. Everyone stops, takes a photo of the post town, and leaves.
            But a few minutes off the route there are emerald gorges, forgotten
            railway paths, and swimming holes that only the people who live here
            know about.
          </p>
          <p>
            We&apos;re not a tour bus. We&apos;re locals who&apos;ll lend you a
            bike, hand you our favorite routes, and — on the big one — ride
            alongside you down the whole valley.
          </p>
        </div>
        <div className="intro-visual"></div>
      </section>

      {/* THREE SERVICES */}
      <section className="ways" id="ways">
        <div className="ways-head">
          <span className="eyebrow">What we offer</span>
          <h2>Three ways to spend a day in Nagiso.</h2>
        </div>
        <div className="ways-grid">
          <Link href="/rental" className="way-card">
            <div
              className="way-img"
              style={{ backgroundImage: "url('/assets/tsumago.jpg')" }}
            />
            <div className="way-body">
              <span className="way-kicker">Self-guided · Half day</span>
              <h3>E-Bike Rental</h3>
              <p>
                Three mapped half-day routes around Nagiso — post towns, gorges,
                waterfalls and onsen. You ride at your own pace with our route
                maps; we shuttle your luggage for free.
              </p>
              <div className="way-price">
                ¥4,000 <small>/ bike</small>
              </div>
              <span className="way-cta">
                See routes &amp; pricing <ArrowRight size={15} />
              </span>
            </div>
          </Link>

          <Link href="/guided" className="way-card way-card-dark">
            <div
              className="way-img way-img-contain"
              style={{ backgroundImage: "url('/assets/downhill.jpg')" }}
            />
            <div className="way-body">
              <span className="way-kicker">Guided · Full day</span>
              <h3>The Kiso River Downhill</h3>
              <p>
                Our flagship: 54.5 km from Narai-juku down the whole valley,
                almost all of it descent, with two local guides riding with
                your group all day. E-bikes included.
              </p>
              <div className="way-price">
                ¥80,000 <small>/ group of 4 · all-in</small>
              </div>
              <span className="way-cta">
                Meet the course <ArrowRight size={15} />
              </span>
            </div>
          </Link>

          <Link href="/shodo" className="way-card">
            <div
              className="way-img"
              style={{ backgroundImage: "url('/assets/shodo-class.jpg')" }}
            />
            <div className="way-body">
              <span className="way-kicker">Culture · At Kashiwaya</span>
              <h3>Shodo Calligraphy</h3>
              <p>
                Brush, sumi ink, and washi paper in a quiet tatami room at the
                guesthouse. Learn the strokes, write a character that&apos;s
                yours, and take it home. Also our rainy-day plan.
              </p>
              <div className="way-price">
                ¥4,000 <small>/ group of 4 · 80% off trial price</small>
              </div>
              <span className="way-cta">
                See the session <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
