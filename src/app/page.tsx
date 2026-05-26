"use client";

import {
  ArrowRight,
  Bike,
  MapPin,
  Compass,
  Backpack,
  Instagram,
  Mail,
  Phone,
  MessageSquare,
  Zap,
  Mountain,
  Lightbulb,
  Ruler,
} from "lucide-react";

/** === CUSTOMIZE HERE ===========================================
 *  Real data migrated from the previous site.
 *  Update these in one place.
 *  ============================================================= */
const INSTAGRAM_URL = "https://www.instagram.com/murabito_bikes";
const SUPPORT_MAILTO = "mailto:ravnicaguild@gmail.com";
const PHONE = "090-3839-2354";
const PHONE_TEL = "tel:+819038392354";
const FEEDBACK_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScWvvhR9DBXR7d-eloSXw_dCQkIAbd32st1o5jQbc6nZxplVQ/viewform?usp=header";
// Google My Maps — embed + viewer
const MYMAP_EMBED_URL =
  "https://www.google.com/maps/d/embed?mid=1OHpTKOucs5mBSqcEU7T4ILiapXuSkWQ&ehbc=2E312F";
// Per-route turn-by-turn map links (migrated)
const ROUTE_LINKS = [
  {
    label: "Kakizore Gorge: Hashimotoya (Nagiso) → Atera 2nd parking (Nojiri)",
    href: "https://maps.app.goo.gl/6XpNNFcXNTb9Pm6i9",
  },
  {
    label: "Kakizore Gorge: Atera 2nd parking (Nojiri) → Hashimotoya (Nagiso)",
    href: "https://maps.app.goo.gl/U1iEt4to7VWXvv7h8",
  },
  {
    label: "JR Railway route: Hashimotoya (Nagiso) → Atera 2nd parking (Nojiri)",
    href: "https://maps.app.goo.gl/4Qh5YkT4ba3UvK9C7",
  },
  {
    label: "JR Railway route: Atera 2nd parking (Nojiri) → Hashimotoya (Nagiso)",
    href: "https://maps.app.goo.gl/VBQQUDfFXDdBTW7U8",
  },
] as const;
/** ============================================================= */

export default function Page() {
  return (
    <div className="lp">
      <nav className="lp-nav">
        <div className="brand">
          Beyond Nakasendo <span>Cycling</span>
        </div>
        <div className="nav-links">
          <a href="#tours">Routes</a>
          <a href="#maps">Maps</a>
          <a href="#gear">The Bikes</a>
          <a href="#faq">FAQ</a>
          <a href="#book">Book</a>
        </div>
      </nav>

      <a href="#book" className="float-book">
        <Bike size={18} /> Book a Ride
      </a>

      {/* HERO */}
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <span className="eyebrow hero-eyebrow">
          Nagiso · Kiso Valley · Central Japan
        </span>
        <h1>
          Skip the guidebook. <em>Go play</em> like a local.
        </h1>
        <p className="hero-sub">
          There&apos;s a whole valley the day-trippers never see — hidden
          gorges, old forest railways, river pools you can dive into. We know
          the way. Hop on a quiet e-bike and come find it with us.
        </p>
        <div className="hero-cta">
          <a href="#book" className="btn-primary">
            Book Your Ride <ArrowRight size={16} />
          </a>
          <a href="#tours" className="btn-ghost">
            See the routes
          </a>
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
            Nagiso sits on the old Nakasendo highway, halfway between Kyoto and
            Tokyo. Everyone stops, takes a photo of the post town, and leaves.
            But a few minutes off the route there are emerald gorges, forgotten
            railway paths, and swimming holes that only the people who live here
            know about.
          </p>
          <p>
            We&apos;re not a tour bus. We&apos;re locals who&apos;ll lend you a
            bike, ride alongside you, and show you our favorite corners of the
            valley — at a pace where you can actually feel the place.
          </p>
        </div>
        <div className="intro-visual">
          <span className="vtag">
            Soba in Tsumago, when the day-trippers have gone home
          </span>
        </div>
      </section>

      {/* TOURS */}
      <section className="tours" id="tours">
        <div className="tours-head">
          <span className="eyebrow">Choose your day</span>
          <h2>Three routes. All a little off the beaten track.</h2>
          <p>
            Every ride starts and ends at Kashiwaya, our farmhouse guesthouse.
            Pick by season and how hard you want to push.
          </p>
        </div>
        <div className="tour-grid">
          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/tsumago.jpg" alt="Tsumago post town street at dusk" />
              <span className="lvl">Easy</span>
              <span className="season">Spring &amp; Autumn</span>
            </div>
            <div className="body">
              <h3>Tsumago Revenge Loop</h3>
              <div className="route">
                Kashiwaya → Tsumago → Nagiso Stn · (loop or reverse OK)
              </div>
              <p>
                For anyone who reached Tsumago at dusk and never got to explore
                it properly. We take a locals-only road along an old
                forest-railway line into the post town — wander it after the
                crowds leave — then roll back a different way along the Kiso
                River to the station. Wait for your train at a café nearby, and
                on to the next leg of your trip.
              </p>
              <div className="price">
                ¥5,000<small>/group base&nbsp;&nbsp;+&nbsp;&nbsp;¥5,000/person</small>
                <span className="price-note">Local guide for the whole route · e-bike included</span>
              </div>
              <a href="#book" className="card-book">
                Book this ride <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/gorge.jpg" alt="Emerald gorge with clear river and boulders" />
              <span className="lvl">Moderate</span>
              <span className="season">Summer &amp; Early Winter</span>
            </div>
            <div className="body">
              <h3>Gorge &amp; Onsen</h3>
              <div className="route">
                Kashiwaya → Kakizore → Koiji Pass → Atera → Nojiri Stn · (loop or
                reverse OK)
              </div>
              <p>
                We skip the long, brutal Yogawa climb and cross to the west side
                of the Kiso River instead. Past terraced rice fields, a rest at
                an old farmhouse, then cool off in Kakizore Gorge. Over Koiji
                Pass to the Atera Valley — dive straight into the river in
                summer, or soak in the onsen near the mouth in winter. Finish
                with a café stop by Nojiri Station.
              </p>
              <div className="price">
                ¥5,000<small>/group base&nbsp;&nbsp;+&nbsp;&nbsp;¥5,000/person</small>
                <span className="price-note">Local guide for the whole route · e-bike included</span>
              </div>
              <a href="#book" className="card-book">
                Book this ride <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/ebike.jpg" alt="MOVE fat-tire e-bikes parked at the guesthouse" />
              <span className="lvl">Hard</span>
              <span className="season">For the fit</span>
            </div>
            <div className="body">
              <h3>Challengers</h3>
              <div className="route">
                Tadachi &amp; Iwakura river fishing · Yogawa-michi pass crossing
              </div>
              <p>
                The real local secret, and not for the faint-legged. Serious
                gradient and distance: catch river fish at Tadachi and Iwakura,
                then take on the Yogawa-michi pass on the bike. Completely
                un-touristed terrain that only the people who grew up here know.
                For riders who actually want to earn the views.
              </p>
              <div className="price">
                ¥5,000<small>/group base&nbsp;&nbsp;+&nbsp;&nbsp;¥5,000/person</small>
                <span className="price-note">Local guide for the whole route · e-bike included</span>
              </div>
              <a href="#book" className="card-book">
                Book this ride <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* PRICING */}
        <div className="pricing">
          <div className="pitem">
            <h4>Guided Ride</h4>
            <div className="amt">
              ¥5,000<span style={{ fontSize: "0.9rem" }}>/group</span>
              <span style={{ fontSize: "1.1rem", margin: "0 0.4rem" }}>+</span>
              ¥5,000<span style={{ fontSize: "0.9rem" }}>/person</span>
            </div>
            <p>
              ¥5,000 base fee per group, plus ¥5,000 per person. A local guide
              rides the whole route with you — and your e-bike use is included.
            </p>
          </div>
          <div className="pitem">
            <h4>E-Bike Only</h4>
            <div className="amt">
              ¥4,000<span style={{ fontSize: "0.9rem" }}>/person</span>
            </div>
            <p>Just want the bike? Rent one and explore on your own. No guide fee.</p>
          </div>
          <div className="pitem">
            <h4>Luggage Shuttle</h4>
            <div className="amt">Free</div>
            <p>
              For bike riders: we move your bags between Nagiso Stn ↔ Kashiwaya
              ↔ Nojiri Stn. Ride light.
            </p>
          </div>
          <div className="pricing-foot">
            <strong>Riding with us? Your luggage shuttle is free</strong> —
            bags moved between Nagiso Station, Kashiwaya, and Nojiri Station, so
            you arrive, ride, and leave without lugging your pack over a pass.
          </div>
        </div>

        {/* OPENING CAMPAIGN BANNER */}
        <div className="campaign">
          <div className="campaign-badge">Opening Campaign</div>
          <div className="campaign-body">
            <h3>
              Help us launch — ride a guided tour for <em>80% off.</em>
            </h3>
            <p>
              We&apos;re just getting started. If you&apos;re happy to let us
              photograph the ride and share your feedback afterwards, we&apos;ll
              take 80% off the full price of any guided tour. Limited-time
              launch offer.
            </p>
          </div>
        </div>
      </section>

      {/* ROUTE MAPS (migrated) */}
      <section className="routemaps" id="maps">
        <div className="routemaps-inner">
          <span className="eyebrow">Find your way</span>
          <h2>Route maps</h2>
          <p>
            Riding the e-bike-only option? Here are the routes we&apos;ve mapped
            out. Open any of them on your phone for turn-by-turn directions
            between our pick-up points.
          </p>
          <div className="map-embed">
            <iframe
              src={MYMAP_EMBED_URL}
              title="Kiso Valley e-bike route map"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="route-links">
            {ROUTE_LINKS.map((r) => (
              <a key={r.href} href={r.href} target="_blank" rel="noreferrer">
                <MapPin size={18} />
                <span>{r.label}</span>
              </a>
            ))}
          </div>
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

      {/* VIDEO */}
      <section className="video-sec">
        <span className="eyebrow">Before you ride</span>
        <h2>A 60-second how-to</h2>
        <p>
          New to e-bikes? Here&apos;s a quick look at how to handle them safely
          on our roads. Worth a watch before you arrive.
        </p>
        <div className="video-wrap">
          <iframe
            src="https://www.youtube.com/embed/-9sQwqZJZzE?rel=0&modestbranding=1&playsinline=1"
            title="E-bike usage notes"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* INCLUDED */}
      <section className="included">
        <span className="eyebrow">Every ride includes</span>
        <h2>Show up. We&apos;ve got the rest.</h2>
        <div className="inc-grid">
          <div className="inc-item">
            <div className="icon">
              <Bike size={30} />
            </div>
            <h3>Fat-Tire E-Bike</h3>
            <p>Charged, sized to you, with helmet, lock and lights.</p>
          </div>
          <div className="inc-item">
            <div className="icon">
              <Compass size={30} />
            </div>
            <h3>Local Guide</h3>
            <p>On the guided routes — someone who actually rides these roads.</p>
          </div>
          <div className="inc-item">
            <div className="icon">
              <Backpack size={30} />
            </div>
            <h3>Luggage Shuttle</h3>
            <p>Bags moved between the stations and Kashiwaya, free.</p>
          </div>
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

      {/* BOOKING */}
      <section className="booking" id="book">
        <span className="eyebrow">Reserve your spot</span>
        <h2>
          Book in <em>under two minutes.</em>
        </h2>
        <p>
          Pick a date and route below. Pay securely by card — your spot is
          confirmed instantly, and we&apos;ll email directions to Kashiwaya.
        </p>

        <div className="square-embed">
          {/*
            ════════════════════════════════════════════════════════════
            SQUARE BOOKING EMBED ZONE
            Replace the placeholder block below with your Square embed.
              Square Dashboard → Appointments → Online Booking → Channels
              → "Add your booking flow to an existing site" → Get Started
              → "Create button" (HTML button) OR "Get embed code" (widget)
            In Next.js, a raw Square <script> snippet is cleanest dropped
            into a small client component or via the booking page URL in an
            <iframe>. Hand the snippet to Claude for exact wiring.
            ════════════════════════════════════════════════════════════
          */}
          <div className="square-placeholder">
            <p style={{ opacity: 0.9, marginBottom: "0.8rem" }}>
              Square booking widget loads here.
            </p>
            <code>Paste your Square embed code in this section</code>
          </div>
          <a
            href="https://squareup.com/appointments"
            className="booking-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book &amp; Pay with Square <ArrowRight size={18} />
          </a>
        </div>

        <p className="booking-alt">
          Prefer to talk to a human? Call or text{" "}
          <a href={PHONE_TEL}>{PHONE}</a> or{" "}
          <a href={SUPPORT_MAILTO}>email us</a>.
        </p>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <h2>Good to know</h2>
        <details className="faq-item">
          <summary>Do I need to be fit?</summary>
          <p>
            For the Tsumago and Gorge routes, no — the electric motor flattens
            the climbs, so if you can ride a normal bike on flat ground,
            you&apos;ll be fine. The Challengers route is a different story: it
            has real distance and gradient, so only pick it if you&apos;re
            confident on a bike.
          </p>
        </details>
        <details className="faq-item">
          <summary>What&apos;s the difference between guided and e-bike only?</summary>
          <p>
            Guided means a local rides with you the whole route (¥5,000/person +
            ¥5,000 flat guide fee per group). E-bike only is just the rental
            (¥5,000/person) — you explore on your own with our route maps, no
            guide fee. Both include the free luggage shuttle.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can I do the routes in reverse, or as a loop?</summary>
          <p>
            Yes. The Tsumago and Gorge routes can both be ridden in reverse or as
            a loop — just let us know your preference when you book and the guide
            will plan around it.
          </p>
        </details>
        <details className="faq-item">
          <summary>How does the luggage shuttle work?</summary>
          <p>
            We move your bags between Nagiso Station, Kashiwaya, and Nojiri
            Station, free with every booking. So you can ride point-to-point
            without carrying your pack over a pass.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can I swim or use the onsen?</summary>
          <p>
            On the Gorge &amp; Onsen route, yes — bring a swimsuit and towel in
            summer to dive into the Atera river, or use the onsen near the river
            mouth in colder months.
          </p>
        </details>
        <details className="faq-item">
          <summary>What if it rains?</summary>
          <p>
            Light rain is part of the Kiso experience and we ride through it. If
            conditions are unsafe, we reschedule or refund — no questions asked.
          </p>
        </details>
        <details className="faq-item">
          <summary>Where do we start?</summary>
          <p>
            All rides depart from Kashiwaya Guesthouse in Nagiso (読書4181), about
            10 minutes from Nagiso Station on the JR Chuo Line. Exact directions
            come with your booking confirmation.
          </p>
        </details>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        <div className="foot-grid">
          <div>
            <div className="brand">
              Beyond Nakasendo <span>Cycling</span>
            </div>
            <p>
              Guided e-bike rides through the hidden side of the Kiso Valley.
              Operated by Kashiwaya Guesthouse, Nagiso, Nagano.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#tours">Routes</a>
            <br />
            <a href="#maps">Route maps</a>
            <br />
            <a href="#gear">The Bikes</a>
            <br />
            <a href="#book">Book a Ride</a>
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
    </div>
  );
}
