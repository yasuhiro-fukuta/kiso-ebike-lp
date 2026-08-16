"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Backpack,
  Brush,
  Shirt,
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
            bike, carry your bags, find you a bed, and — on the big one — ride
            alongside you down the whole valley.
          </p>
        </div>
        <div className="intro-visual"></div>
      </section>

      {/* FILM SLOT (strategy: one pro riding film at the top of the LP) */}
      <section className="mini-sec" id="film">
        <span className="eyebrow">Sixty seconds of the valley</span>
        <h2>The ride, before you ride it.</h2>
        <div className="img-wanted" style={{ aspectRatio: "16 / 9", minHeight: 0 }}>
          <span className="iw-tag">Video wanted</span>
          <span className="iw-note">
            プロ撮影の走行映像1本(四季の風景+走行シーン、60〜90秒、
            音声なしでも成立する画)をここに埋め込み
          </span>
        </div>
      </section>

      {/* RIDE — the flagship */}
      <section className="ways" id="ways">
        <div className="ways-head">
          <span className="eyebrow">The flagship · Ride</span>
          <h2>Two ways to ride the valley.</h2>
        </div>
        <div className="ways-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
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
                Our flagship: 48.9 km from Yabuhara-juku down the whole valley,
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

      {/* SECOND DAY HUB */}
      <section className="hub-band" id="second-day">
        <div className="hub-band-inner">
          <span className="eyebrow">The most important day of your trip</span>
          <h2>
            Crossed Magome Pass yesterday? <em>Tomorrow is the best day.</em>
          </h2>
          <p>
            Everyone sleeps in Nagiso and leaves at nine the next morning —
            right before the valley gets good. Swimmable gorges, the crowd-free
            old Nakasendo, the bluest river in the Kiso: we wrote down exactly
            how to spend that second day, on foot or by e-bike.
          </p>
          <Link href="/second-day" className="band-cta">
            Plan your second day <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* STAY */}
      <section className="mini-sec" id="stay">
        <span className="eyebrow">Stay</span>
        <h2>The rides start at our front door.</h2>
        <div className="stay-card">
          <div className="img-wanted">
            <span className="iw-tag">Photo wanted</span>
            <span className="iw-note">
              柏屋の外観(夕方・灯りの点いた時間帯が理想)
            </span>
          </div>
          <div className="stay-body">
            <span className="stay-badge">Kashiwaya Guesthouse · Nagiso</span>
            <h3>Sleep where the bikes live.</h3>
            <p>
              Our old wooden guesthouse in Nagiso is the base for everything on
              this site — bikes, bags and beds in one conversation. A second
              kominka, rented whole, opens in 2027 with free bikes for
              multi-night guests.
            </p>
            <Link href="/stay" className="stay-cta">
              See where to stay <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* MORE SERVICES */}
      <section className="mini-sec" id="services">
        <span className="eyebrow">And the rest of the kit</span>
        <h2>Small services that make the valley easy.</h2>
        <div className="mini-grid">
          <Link href="/luggage-shuttle" className="mini-card">
            <h3>
              <Backpack size={20} /> Luggage Shuttle
            </h3>
            <p>
              Bags moved between Nagiso, Kashiwaya and Nojiri — walk or ride
              empty-handed.
            </p>
          </Link>
          <Link href="/gear" className="mini-card">
            <h3>
              <Shirt size={20} /> Gear Rental
            </h3>
            <p>
              Woven Kiso hats, bear bells &amp; spray, swim and winter gear —
              mostly free with rides.
            </p>
          </Link>
          <Link href="/shodo" className="mini-card">
            <h3>
              <Brush size={20} /> Shodo Calligraphy
            </h3>
            <p>
              Brush, ink and washi in the old guesthouse — and our official
              rainy-day plan.
            </p>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
