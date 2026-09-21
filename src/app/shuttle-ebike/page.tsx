"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  PACK_WHATSAPP_URL,
  PHONE,
  PHONE_TEL,
  SUPPORT_MAILTO,
} from "../site";
import { SiteNav, SiteFooter, FloatBook, AllInOnePack } from "../chrome";

const IZUMIYA_MAP = "https://maps.app.goo.gl/4nDgY2TvN6cYh5fQA";
const KATANA_MAP = "https://maps.app.goo.gl/qYoin6P4mrkmbs4v9";
const DONGURI_MAP = "https://maps.app.goo.gl/SS9hxF9WcvB4iQqdA";

export default function ShuttleEbikePage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={PACK_WHATSAPP_URL}>
        <MessageCircle size={18} /> Book on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head page-head-grid">
        <div>
          <span className="eyebrow">Shuttle E-Bike · One-way · Hands-free</span>
          <h1>
            The Shuttle E-bike — <em>a new proposal.</em>
          </h1>
          <p>
            It started with a simple thought: what if the shuttle bus were an
            e-bike? Drop your bags at the start and pick up an e-bike;
            return the bike at the finish and pick up your bags. String that
            between Nagiso Station and Nojiri Station — with the old
            Nakasendo, the Yogawa road and the gorge lanes running in
            between — and an ordinary transfer turns into the best part of
            the day. We named it the <strong>Shuttle E-bike</strong>.
          </p>
        </div>
        <figure className="page-head-visual poster">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/shuttle-ebike-poster.jpg"
            alt="Free from weight — the Beyond Nakasendo Cycling shuttle e-bike poster: drop your bags, pick up an e-bike, ride light; we deliver them at your destination"
          />
          <figcaption>The poster you&apos;ll spot around the valley</figcaption>
        </figure>
      </header>

      {/* HOW IT WORKS */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">What the word means</span>
          <h2>
            Bike delivered. Bags ahead. <em>You just ride.</em>
          </h2>
          <p>
            Three services fused into one smooth day — that&apos;s the whole
            trick of it.
          </p>
          <div className="drop-steps">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>Swap your load</h3>
              <p>
                At Izumiya Cafe, right by Nagiso Station, hand over your bags
                and pick up your e-bike.{" "}
                <a href={IZUMIYA_MAP} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
                  Izumiya on the map
                </a>
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>Ride hands-free</h3>
              <p>
                The old Nakasendo, the Yogawa road, the Kakizore and Atera
                gorges — pick the route that fits your level (
                <Link href="/second-day" style={{ color: "var(--gold)" }}>details here</Link>
                ). While you ride, your bags travel to the finish by midday.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>Collect at the finish</h3>
              <p>
                Drop the bike at Nojiri Station and collect your bags at Cafe
                Katana in front of the station (Mondays: Cafe Donguri).
                Enjoy a coffee while you wait for your train.{" "}
                <a href={KATANA_MAP} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
                  Katana
                </a>
                {" · "}
                <a href={DONGURI_MAP} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>
                  Donguri
                </a>
              </p>
            </div>
          </div>
          <p className="drop-note">
            Start and end points never need to match. Pick a route on the{" "}
            <Link href="/second-day" style={{ color: "var(--gold)" }}>
              Self-Tour Advice page
            </Link>{" "}
            and we&apos;ll set the handovers up around it.
          </p>
        </div>
      </section>

      {/* THE PACKAGE */}
      <section className="mini-sec" id="package">
        <span className="eyebrow">The package</span>
        <h2>One price, and the valley runs itself.</h2>
        <div className="pricing">
          <div className="pitem">
            <h4>Shuttle E-Bike Package</h4>
            <div className="amt">
              ¥7,000<span style={{ fontSize: "0.9rem" }}>/person</span>
            </div>
            <p>
              E-bike, bear bell, bear spray, one more gear item of your
              choice, and the luggage shuttle (up to 2 bags per person). The
              full shuttle e-bike day, one line on WhatsApp.
            </p>
          </div>
          <div className="pitem">
            <h4>Or à la carte</h4>
            <div className="amt">
              ¥4,000<span style={{ fontSize: "0.9rem" }}>+</span>
            </div>
            <p>
              E-bike ¥4,000 per bike, luggage shuttle ¥1,500 base per group
              plus ¥1,500 per bag, gear from ¥500 per item. The package
              usually wins from one bag up.
            </p>
          </div>
          <div className="pitem">
            <h4>Where it runs</h4>
            <div className="amt">4 areas</div>
            <p>
              Tsumago, Nagiso (Kashiwaya or the station), Junikane and
              Nojiri — any of them can be your start, your finish, or both
              bag handovers.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="booking" id="book">
        <span className="eyebrow">How to book · via WhatsApp</span>
        <h2>
          Say the word, <em>and the day is set.</em>
        </h2>
        <p>
          Message us your date, your group size, and where you&apos;re
          starting — we&apos;ll line up the bikes, the bags, and the pick-up
          points. No prepayment: you pay on the day, by card or cash.
        </p>

        <div className="square-embed">
          <a
            href={PACK_WHATSAPP_URL}
            className="booking-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Book the package on WhatsApp
          </a>
        </div>

        <p className="booking-alt">
          Prefer to talk to a human? Call or text{" "}
          <a href={PHONE_TEL}>{PHONE}</a> or <a href={SUPPORT_MAILTO}>email us</a>.
        </p>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <h2>Good to know</h2>
        <details className="faq-item">
          <summary>Is the package actually cheaper?</summary>
          <p>
            Almost always, yes. A bike (¥4,000), one bag with the base fee (¥3,000) and
            one gear item already pass ¥7,000 — and the package adds the bear
            bell, the bear spray, and a second bag on top.
          </p>
        </details>
        <details className="faq-item">
          <summary>Which routes does it work with?</summary>
          <p>
            All three self-guided routes on the{" "}
            <Link href="/second-day">Self-Tour Advice page</Link> — ridden
            forward, in reverse, or as a loop. Tell us your plan and we&apos;ll
            place the bikes and bags around it.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can we mix it with a stay?</summary>
          <p>
            Sometimes, yes — starting or finishing at your inn is possible
            depending on where it is. Ask us on WhatsApp.
          </p>
        </details>
      </section>

      {/* THE BANNER — same one that sends people here */}
      <AllInOnePack link={false} />

      <SiteFooter />
    </div>
  );
}
