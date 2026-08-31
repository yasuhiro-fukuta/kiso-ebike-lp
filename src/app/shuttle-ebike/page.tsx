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

export default function ShuttleEbikePage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={PACK_WHATSAPP_URL}>
        <MessageCircle size={18} /> Book on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Shuttle E-Bike · One-way · Hands-free</span>
        <h1>
          The shuttle e-bike. <em>Word&apos;s getting around.</em>
        </h1>
        <p>
          There&apos;s a name catching on for the way people ride this valley
          now: the e-bike waits where you start, your bags travel ahead by
          car, and you ride one way down the Kiso — no doubling back, no
          carrying, no logistics. Around here it&apos;s called the{" "}
          <strong>shuttle e-bike</strong>. Once you&apos;ve tried it,
          you&apos;ll see why it needed its own word.
        </p>
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
              <h3>The bike comes to you</h3>
              <p>
                Your e-bike is waiting at Kashiwaya Guesthouse, Nagiso
                Station, or Nojiri Station — whichever point your day starts
                from.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>Your bags go ahead</h3>
              <p>
                We shuttle your luggage down the valley by car while you
                ride. It&apos;s waiting at the far end — up to 2 bags per
                person in the package.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>You ride one way</h3>
              <p>
                Follow any of the mapped routes downstream, drop the bike at
                the end point, and walk straight to your train — or your bed
                at Kashiwaya. We collect the bikes.
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
              E-bike ¥4,000 per bike, luggage shuttle ¥3,000 for the first
              bag (¥1,500 from the second, per group), gear from ¥500 per
              item. The package usually wins from one bag up.
            </p>
          </div>
          <div className="pitem">
            <h4>Where it runs</h4>
            <div className="amt">3 points</div>
            <p>
              Kashiwaya Guesthouse, Nagiso Station, and Nojiri Station — any
              of them can be your start, your finish, or both bag handovers.
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
            Almost always, yes. A bike (¥4,000), the first bag (¥3,000) and
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
            That&apos;s the classic move: bags shuttle to{" "}
            <Link href="/stay">Kashiwaya</Link>, you ride in hands-free, and
            tomorrow&apos;s ride starts at the front door.
          </p>
        </details>
      </section>

      {/* THE BANNER — same one that sends people here */}
      <AllInOnePack link={false} />

      <SiteFooter />
    </div>
  );
}
