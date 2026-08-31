"use client";

import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Compass,
  Backpack,
  Bike,
  Zap,
  Mountain,
  Lightbulb,
  MessageCircle,
  Ruler,
} from "lucide-react";
import {
  RENTAL_WHATSAPP_URL,
  GOOGLE_MAPS_URL,
  PHONE,
  PHONE_TEL,
  SUPPORT_MAILTO,
} from "../site";
import { SiteNav, SiteFooter, FloatBook, AllInOnePack } from "../chrome";

export default function RentalPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={RENTAL_WHATSAPP_URL}>
        <MessageCircle size={18} /> Book on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head page-head-grid">
        <div>
          <span className="eyebrow">Self-guided · Half day · 10:00–16:00</span>
          <h1>
            Rent an e-bike. <em>The valley is yours.</em>
          </h1>
          <p>
            We hand you a charged fat-tire e-bike, move your luggage down
            the valley if you need it, and you explore at your own pace. Wondering where to go?
            Our three mapped routes live on the{" "}
            <Link href="/second-day">Self-Tour Advice page</Link> — and if you
            want to ride with a guide, there&apos;s the{" "}
            <Link href="/guided">guided tour</Link>.
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

      {/* THE BIKES */}
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

      {/* PRICING */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">Pricing</span>
        <h2>Simple: one bike, one price.</h2>
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
              Turn-by-turn Google Maps routes for all three rides — see the{" "}
              <Link href="/second-day" style={{ color: "var(--gold)" }}>
                Self-Tour Advice
              </Link>{" "}
              page.
            </p>
          </div>
          <div className="pitem">
            <h4>Luggage Shuttle</h4>
            <div className="amt">
              ¥3,000<span style={{ fontSize: "0.9rem" }}>/first bag</span>
            </div>
            <p>
              Then ¥1,500 per extra bag, counted per group — or included in
              the All-in-One Day Pack below.
            </p>
          </div>
        </div>
      </section>

      {/* ONE-WAY DROP */}
      <section className="drop-sec" id="one-way">
        <div className="drop-inner">
          <span className="eyebrow">The one-way drop</span>
          <h2>
            Ride point-to-point. <em>Never double back.</em>
          </h2>
          <p>
            Most rental bikes chain you to a round trip. Ours don&apos;t: pick
            up at one point, drop off at another, and let the valley unroll in
            one direction while we handle the logistics.
          </p>
          <div className="drop-steps">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>Pick up</h3>
              <p>
                Collect your e-bike at Kashiwaya Guesthouse, Nagiso Station, or
                Nojiri Station — whichever fits your route.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>Ride one way</h3>
              <p>
                Follow the route maps down the valley. Add the luggage
                shuttle and your bags travel separately, meeting you at the
                far end.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>Drop &amp; go</h3>
              <p>
                Leave the bike at any of the three points and walk straight to
                your train — or to your bed at Kashiwaya. We collect the bikes.
              </p>
            </div>
          </div>
          <p className="drop-note">
            Start and end points don&apos;t need to match. Add the luggage
            shuttle (¥3,000 for the first bag, ¥1,500 from the second, per
            group) when you book and we&apos;ll set the handover up around it.
          </p>
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
        <figure className="inc-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/gear/helmet.jpg"
            alt="A matte-black cycling helmet on the guesthouse counter, fitted before every ride"
          />
          <figcaption>Your helmet — fitted to you at pickup, no extra charge</figcaption>
        </figure>
        <div className="inc-grid">
          <div className="inc-item">
            <div className="icon">
              <Bike size={30} />
            </div>
            <h3>Helmet, Lock &amp; Lights</h3>
            <p>Fitted to you before you set off, at no extra charge.</p>
          </div>
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
            <h3>One-Way Drops</h3>
            <p>Start and end at different points — no extra charge.</p>
          </div>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="booking" id="book">
        <span className="eyebrow">How to book · via WhatsApp</span>
        <h2>
          One message, <em>and the bike is yours.</em>
        </h2>
        <p>
          Send us your date, number of riders, and which route you fancy —
          we&apos;ll confirm your bikes and where to meet. No prepayment:
          you pay on the day, at pickup, by card or cash.
        </p>

        <div className="square-embed">
          <a
            href={RENTAL_WHATSAPP_URL}
            className="booking-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Book on WhatsApp
          </a>
        </div>

        <p className="booking-alt">
          Prefer to talk to a human? Call or text{" "}
          <a href={PHONE_TEL}>{PHONE}</a> or{" "}
          <a href={SUPPORT_MAILTO}>email us</a>. Payment on the day —
          credit card or cash both welcome.
        </p>
      </section>

      {/* REVIEW ASK — feeds the Google Maps listing (MEO) */}
      <section style={{ padding: "clamp(3rem, 6vw, 4rem) clamp(1.5rem, 5vw, 4rem) 0" }}>
        <div className="review-ask">
          <Camera size={28} />
          <p>
            <strong>Loved the ride?</strong> The single best way to thank us is
            a photo on Google Maps — travelers like you find us through the
            pictures riders post. One shot from today&apos;s ride is plenty.
          </p>
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
            Post a photo on Google Maps <ArrowRight size={15} />
          </a>
        </div>
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
            No — these routes are self-guided only. If you&apos;d like a
            guided experience, see the <Link href="/guided">guided tour
            page</Link>.
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
            Station — ¥3,000 for the first bag and ¥1,500 from the second,
            counted per group. It&apos;s included (up to 2 bags per person) in
            the All-in-One Day Pack.
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

      {/* ALL-IN-ONE PACK */}
      <AllInOnePack />

      <SiteFooter />
    </div>
  );
}
