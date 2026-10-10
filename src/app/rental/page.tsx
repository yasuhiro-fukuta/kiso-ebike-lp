"use client";

import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Zap,
  Leaf,
  Mountain,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import {
  GOOGLE_MAPS_URL,
  PHONE,
  PHONE_TEL,
  SUPPORT_MAILTO,
} from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export default function RentalPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href="/book?s=rental">
        <MessageCircle size={18} /> Book on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head page-head-grid">
        <div>
          <span className="head-badge">We come to you · Drop off anywhere</span>
          <br />
          <span className="eyebrow">Eco-mobility · Self-guided</span>
          <h1>
            Tour nature by eco-mobility. <em>The valley never hears you coming.</em>
          </h1>
          <p>
            A valley this rich in water, greenery and hydro power has no
            business smelling of exhaust. The e-bike puts electricity behind
            your own legs — and stretches how much of this beautiful valley
            one day can cover. Wondering where to go? Our three mapped
            routes live on the{" "}
            <Link href="/second-day">Self-Tour Advice page</Link>.
          </p>
          <p className="head-note">
            And you don&apos;t come to a shop:{" "}
            <strong>
              we deliver the bikes to the spot you choose anywhere in our
              Tsumago–Nojiri area — your inn, a station, a trailhead — and
              you can finish and leave the bike at any spot in the area,
              too.
            </strong>
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
              <Leaf size={18} /> Zero emissions, near-zero noise — the
              valley stays undisturbed
            </li>
            <li>
              <Zap size={18} /> Powerful pedal-assist for the passes
            </li>
            <li>
              <Mountain size={18} /> Fat tires grip gravel and forest tracks
            </li>
            <li>
              <Lightbulb size={18} /> Helmet, combination lock and lights
              included
            </li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">How it works · All on WhatsApp</span>
          <h2>
            No shop, no counter. <em>Five steps on your phone.</em>
          </h2>
          <p>
            The bike comes to you and stays where you finish. Everything in
            between happens in one WhatsApp chat.
          </p>
          <div className="drop-steps cols5">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>Book by the day before</h3>
              <p>
                Message us on WhatsApp by the day before your ride: the
                date, how many riders, and where you want to start.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>Your bike is waiting</h3>
              <p>
                On the morning of your ride, the bikes are ready at the
                spot you chose. That same morning, we send the how-to and a
                payment link on WhatsApp.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>Pay, get the code</h3>
              <p>
                Once your payment is confirmed, we send the number for the
                combination lock. Unlock and ride.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">4</div>
              <h3>Lock it and send a photo</h3>
              <p>
                Finish at any spot in the area (it doesn&apos;t have to be
                where you started). Lock the bike, take a photo and send
                it to us on WhatsApp.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">5</div>
              <h3>We collect it that night</h3>
              <p>
                That&apos;s the whole return procedure. We pick the bike up
                in the evening.
              </p>
            </div>
          </div>
          <p className="drop-note">
            Delivery and drop-off work anywhere in the Tsumago–Nojiri area:
            your inn, a station, a gorge trailhead.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">Pricing</span>
        <h2>So — how much per bike?</h2>
        <div className="pricing">
          <div className="pitem">
            <h4>E-Bike Rental</h4>
            <div className="amt">
              ¥4,000<span style={{ fontSize: "0.9rem" }}>/bike</span>
            </div>
            <p>
              Self-guided, ¥4,000 per bike. Up to 4 bikes — and one of
              them fits kids, too.
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

      {/* HOW TO BOOK */}
      <section className="booking" id="book">
        <span className="eyebrow">How to book · via WhatsApp</span>
        <h2>
          One message, <em>and the bike is yours.</em>
        </h2>
        <p>
          By the day before your ride, send us your date, number of riders,
          and where you want to start. We&apos;ll confirm your bikes. No
          prepayment: on the morning of your ride we send a payment link on
          WhatsApp, and the lock code follows once it&apos;s paid. Rentals
          rest every Monday.
        </p>

        <div className="square-embed">
          <a
            href="/book?s=rental"
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
          <a href={SUPPORT_MAILTO}>email us</a>.
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
          <summary>Where do I pick up and return the bikes?</summary>
          <p>
            Wherever suits you. We deliver the bikes to the spot you choose
            anywhere in the Tsumago–Nojiri area, and you can leave them at
            any spot in the area when you finish, even somewhere different
            from where you started. Just lock up, send us a photo on
            WhatsApp, and we collect the bike that night. There is no shop
            you have to come back to.
          </p>
        </details>
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
      </section>

      <SiteFooter />
    </div>
  );
}
