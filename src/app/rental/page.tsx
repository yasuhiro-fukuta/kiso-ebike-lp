"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Compass,
  Backpack,
  Umbrella,
} from "lucide-react";
import {
  SQUARE_BOOKING_URL,
  MYMAP_EMBED_URL,
  PHONE,
  PHONE_TEL,
  SUPPORT_MAILTO,
} from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export default function RentalPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={SQUARE_BOOKING_URL}>
        <Bike size={18} /> Book a Ride
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head page-head-grid">
        <div>
          <span className="eyebrow">Self-guided · Half day · 10:00–16:00</span>
          <h1>
            Rent an e-bike. <em>The valley is yours.</em>
          </h1>
          <p>
            Three mapped routes, all a little off the beaten track. We hand you
            a charged fat-tire e-bike and our route maps, shuttle your luggage
            for free, and you explore at your own pace. These routes are
            self-guided only — if you want to ride with our guides, that&apos;s
            the <Link href="/guided">full-day Kiso River Downhill</Link>.
          </p>
        </div>
        <figure className="page-head-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/riders.jpg"
            alt="A family of four on fat-tire e-bikes, ready to roll out through the village streets of Nagiso"
          />
          <figcaption>Rolling out from Kashiwaya, bound for the valley</figcaption>
        </figure>
      </header>

      {/* TOURS */}
      <section className="tours" id="tours">
        <div className="tours-head">
          <span className="eyebrow">Choose your day</span>
          <h2>Three routes. Pick by season and how hard you want to push.</h2>
          <p>
            Every rental is a half day, 10:00–16:00. Open the route map on your
            phone for turn-by-turn directions between our pick-up points.
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
                <span className="price-note">Self-guided rental — ¥4,000 per bike</span>
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
                <span className="price-note">Self-guided rental — ¥4,000 per bike</span>
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
                route. For those with the legs for it.
              </p>
              <div className="price">
                <small>Steep &amp; long · for confident riders only</small>
                <span className="price-note">Self-guided rental — ¥4,000 per bike</span>
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
              Half day, self-guided. ¥4,000 for one bike, ¥8,000 for two. Up to
              2 bikes.
            </p>
          </div>
          <div className="pitem">
            <h4>Route Maps</h4>
            <div className="amt">Free</div>
            <p>
              Turn-by-turn Google Maps routes for all three rides, on your
              phone — plus local tips before you set off.
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
      </section>

      {/* ROUTE MAPS */}
      <section className="routemaps" id="maps">
        <div className="routemaps-inner">
          <span className="eyebrow">Find your way</span>
          <h2>Route maps</h2>
          <p>
            Here are the routes we&apos;ve mapped out. Open any of them on your
            phone for turn-by-turn directions between our pick-up points.
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
        <span className="eyebrow">Every rental includes</span>
        <h2>Show up. We&apos;ve got the rest.</h2>
        <div className="inc-grid">
          <div className="inc-item">
            <div className="icon">
              <Compass size={30} />
            </div>
            <h3>Route Maps &amp; Local Tips</h3>
            <p>Turn-by-turn maps for all three routes, on your phone.</p>
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

      {/* BOOKING */}
      <section className="booking" id="book">
        <span className="eyebrow">Reserve your bike</span>
        <h2>
          Book in <em>under two minutes.</em>
        </h2>
        <p>
          Pick a date below. Pay securely by card — your bike is confirmed
          instantly, and we&apos;ll email directions to Kashiwaya.
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
            you&apos;ll be fine. The Nakasendo Challenge is a different story:
            it has real distance and gradient, so only pick it if you&apos;re
            confident on a bike.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can I add a guide to these routes?</summary>
          <p>
            No — these three routes are self-guided only. Our guides ride on
            one course: the <Link href="/guided">full-day Kiso River
            Downhill</Link>, where two of them accompany your group down the
            whole valley.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can I do the routes in reverse, or as a loop?</summary>
          <p>
            Yes. The Tsumago and Gorge routes can both be ridden in reverse or
            as a loop — just let us know your preference when you book and
            we&apos;ll plan the pick-up points around it.
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

      <SiteFooter />
    </div>
  );
}
