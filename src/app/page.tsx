"use client";

import {
  ArrowRight,
  Bike,
  Compass,
  Backpack,
  Umbrella,
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
/** ============================================================= */
const SQUARE_BOOKING_URL =
  "https://app.squareup.com/appointments/book/n5ipgn3swmf0ps/LKFD21FHJ8GJJ/start";
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

      <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="float-book">
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
          Slide out of the guidebook. <em>Go play</em> like a local.
        </h1>
        <p className="hero-sub">
          There&apos;s a whole valley the day-trippers never see — hidden
          gorges, old forest railways, river pools you can dive into. We know
          the way. Hop on a quiet e-bike and come find it with us.
        </p>
        <div className="hero-cta">
          <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
        <div className="intro-visual"></div>
      </section>

      {/* TOURS */}
      <section className="tours" id="tours">
        <div className="tours-head">
          <span className="eyebrow">Choose your day</span>
          <h2>Three routes. All a little off the beaten track.</h2>
          <p>
            Every ride is a half day, 10:00–16:00. Pick by season and how hard
            you want to push.
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
              <h3>Tsumago, Revisited</h3>
              <div className="route">Best in Spring &amp; Autumn · Easy</div>
              <p>
                What used to be a forest-railway line is now a quiet paved road
                only locals know — running straight into Tsumago. Perfect for
                anyone who arrived at the post town too late the night before
                to explore it properly.
              </p>
              <div className="price">
                <small>Easiest of the three · great for a first ride</small>
                <span className="price-note">Available as a rental or a guided tour — see pricing below</span>
              </div>
              <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="card-book">
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
              <h3>Natural AC &amp; Onsen</h3>
              <div className="route">Best in Summer &amp; Early Winter · Moderate</div>
              <p>
                The Yogawa trail is beautiful, but brutal in summer heat. The
                opposite bank has rice paddy roads, an easy pass, and a narrow
                road linking two stunning waterfalls. Borrow a rashguard for
                free, then dive into the gorge to cool off. There&apos;s an
                onsen at the end of the road — in winter, dive into that
                instead.
              </p>
              <div className="price">
                <small>River swims in summer · onsen in winter</small>
                <span className="price-note">Available as a rental or a guided tour — see pricing below</span>
              </div>
              <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="card-book">
                Book this ride <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/challengers.jpg" alt="Waterfall shower in the Atera river canyon" />
              <span className="lvl">Hard</span>
              <span className="season">For the fit</span>
            </div>
            <div className="body">
              <h3>Nakasendo Challenge</h3>
              <div className="route">Yogawa-trail crossing · Hard</div>
              <p>
                The Yogawa trail, said to be the most beautiful stretch of the
                entire Nakasendo. No shops along the way, slightly longer with
                more elevation than Magome Pass — for confident riders only. We
                ride the narrow paved road that runs alongside this old
                highway. For those with the legs for it.
              </p>
              <div className="price">
                <small>Steep &amp; long · for confident riders only</small>
                <span className="price-note">Available as a rental or a guided tour — see pricing below</span>
              </div>
              <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="card-book">
                Book this ride <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* PRICING */}
        <div className="pricing">
          <div className="pitem">
            <h4>E-Bike Rental</h4>
            <div className="amt">
              ¥4,000<span style={{ fontSize: "0.9rem" }}>/bike</span>
            </div>
            <p>
              Self-guided with our route maps. ¥4,000 for one bike, ¥8,000 for
              two. Up to 2 bikes.
            </p>
          </div>
          <div className="pitem">
            <h4>Add a Local Guide</h4>
            <div className="amt">
              +¥9,000<span style={{ fontSize: "0.9rem" }}>/group</span>
            </div>
            <p>
              Add a local guide to your rental for the whole half day. So it&apos;s
              ¥13,000 with one bike, ¥17,000 with two — up to 2 guests.
            </p>
          </div>
          <div className="pitem">
            <h4>Luggage Shuttle</h4>
            <div className="amt">Free</div>
            <p>
              For bike riders: we move your bags between Nagiso Stn ↔ Kashiwaya
              ↔ Nojiri Stn. Ride light.
            </p>
          </div>
        </div>

        {/* OPENING CAMPAIGN BANNER */}
        <div className="campaign">
          <div className="campaign-badge">Opening Campaign</div>
          <div className="campaign-body">
            <h3>
              Help us launch — <em>¥7,000 off</em> any guided tour.
            </h3>
            <p>
              We&apos;re just getting started. If you&apos;re happy to be
              photographed during the ride and share your feedback afterwards,
              we&apos;ll take ¥7,000 off — so a guided tour is just ¥6,000 with
              one bike or ¥10,000 with two. Photos may be used on our website
              and social media. Limited-time launch offer.
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
          <div className="inc-item">
            <div className="icon">
              <Umbrella size={30} />
            </div>
            <h3>Waterproof Gear</h3>
            <p>Rashguards, life jackets, and bear bells — free to borrow.</p>
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
          <a
            href={SQUARE_BOOKING_URL}
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
            Guided means a local rides with you the whole route, bikes
            included (¥13,000 for one bike, ¥17,000 for two, up to 2 guests).
            E-bike only is just the rental (¥4,000 per bike, ¥8,000 for two) —
            you explore on your own with our route maps. Both include the free
            luggage shuttle.
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
          <summary>Where do we start &amp; end?</summary>
          <p>
            You can pick from three points, and your start and end don&apos;t
            need to be the same: ① Kashiwaya Guesthouse, ② Nagiso Station, or
            ③ Nojiri Station.
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
