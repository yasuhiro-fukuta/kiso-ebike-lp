"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Zap,
  Mountain,
  Lightbulb,
  Ruler,
} from "lucide-react";
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

      {/* TWO WAYS TO RIDE */}
      <section className="ways" id="ways">
        <div className="ways-head">
          <span className="eyebrow">Two ways to ride</span>
          <h2>Rent a bike and roam — or go big with the guides.</h2>
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
              className="way-img"
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
        </div>
      </section>

      {/* GEAR */}
      <section className="gear" id="gear">
        <div className="gear-img" />
        <div className="gear-text">
          <span className="eyebrow">Your ride</span>
          <h2>
            Fat-tire e-bikes that <em>flatten the hills.</em>
          </h2>
          <p>
            Our MOVE fat-tire electric bikes handle gravel, riverbanks, and
            mountain road with ease. The motor does the climbing — you just
            steer and look around.
          </p>
          <ul className="gear-list">
            <li>
              <Zap size={18} /> Powerful pedal-assist for the passes
            </li>
            <li>
              <Mountain size={18} /> Fat tires grip gravel and forest tracks
            </li>
            <li>
              <Lightbulb size={18} /> Helmet, lock and lights included
            </li>
            <li>
              <Ruler size={18} /> Sized to you before you set off
            </li>
          </ul>
        </div>
      </section>

      {/* RAINY DAY PLAN */}
      <section className="rainy" id="rainy">
        <div className="rainy-text">
          <span className="eyebrow">If the rain wins</span>
          <h2>
            Heavy rain? Switch to a <em>calligraphy session.</em>
          </h2>
          <p>
            Mountain weather does what it wants. If a downpour makes riding
            unsafe, we move the day indoors — to a quiet room at Kashiwaya
            guesthouse for a hands-on Japanese calligraphy (shodo) experience.
            Brush, ink, washi paper, and a character to take home.
          </p>
          <p className="rainy-note">
            While I&apos;m still working toward my calligraphy certification,
            this plan is offered at <strong>80% off the standard price.</strong>
          </p>
        </div>
        <div
          className="rainy-img"
          style={{ backgroundImage: "url('/assets/shodo.jpg')" }}
        >
          <span className="img-note">Photo coming soon</span>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
