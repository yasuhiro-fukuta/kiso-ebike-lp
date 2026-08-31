"use client";

import Link from "next/link";
import { MessageCircle, Backpack, Footprints, Train } from "lucide-react";
import { WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook, AllInOnePack } from "../chrome";

export default function LuggageShuttlePage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={WHATSAPP_URL}>
        <MessageCircle size={18} /> Ask on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Luggage shuttle · Nagiso ↔ Nojiri</span>
        <h1>
          Walk the old road <em>with empty hands.</em>
        </h1>
        <p>
          The Yogawa-michi and the trails around Nagiso are best walked light.
          We move your bags between Nagiso Station, Kashiwaya Guesthouse and
          Nojiri Station, so you can cross on foot — or ride — and find your
          luggage waiting at the other end.
        </p>
      </header>

      {/* HOW IT WORKS */}
      <section className="drop-sec">
        <div className="drop-inner">
          <span className="eyebrow">How it works</span>
          <h2>
            Three steps, <em>zero backpack straps.</em>
          </h2>
          <p>
            Same-day shuttle along the valley. Hand your bags over in the
            morning, walk or ride the day, pick them up at the far end.
          </p>
          <div className="drop-steps">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>Drop your bags</h3>
              <p>
                At Nagiso Station, Kashiwaya, or Nojiri Station — in the
                morning, before you set out.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>Walk or ride free</h3>
              <p>
                Cross the Yogawa-michi on foot, or take the e-bike routes —
                carrying nothing but water and lunch.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>Collect &amp; continue</h3>
              <p>
                Your bags are waiting at your destination — or at your bed for
                the night, if you&apos;re staying with us.
              </p>
            </div>
          </div>
          <div className="pricing" style={{ marginTop: "2.2rem" }}>
            <div className="pitem">
              <h4>First bag</h4>
              <div className="amt">¥3,000</div>
              <p>Per group, same-day, between any of the three points.</p>
            </div>
            <div className="pitem">
              <h4>From the 2nd bag</h4>
              <div className="amt">
                ¥1,500<span style={{ fontSize: "0.9rem" }}>/bag</span>
              </div>
              <p>
                Counted per group, not per person — so three bags come to
                ¥6,000 total.
              </p>
            </div>
            <div className="pitem">
              <h4>In the package</h4>
              <div className="amt">Included</div>
              <p>
                The <Link href="/shuttle-ebike" style={{ color: "var(--gold)" }}>Shuttle E-Bike Package</Link>{" "}
                (¥7,000/person) covers up to 2 bags per person.
              </p>
            </div>
          </div>
          <p className="drop-note">
            Pay on the day, card or cash. Message us on WhatsApp with your
            date, bag count and direction, and we&apos;ll confirm the handover
            times.
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="mini-sec">
        <span className="eyebrow">Made for</span>
        <h2>Who uses the shuttle</h2>
        <div className="mini-grid">
          <Link href="/second-day" className="mini-card">
            <h3>
              <Footprints size={20} /> Yogawa-michi walkers
            </h3>
            <p>
              Cross the quiet Nakasendo detour with day-pack only — bags meet
              you in Nojiri.
            </p>
          </Link>
          <Link href="/rental" className="mini-card">
            <h3>
              <Backpack size={20} /> Point-to-point riders
            </h3>
            <p>
              Ride our one-way routes without hauling your pack over a pass —
              or bundle it into the Shuttle E-Bike Package.
            </p>
          </Link>
          <Link href="/stay" className="mini-card">
            <h3>
              <Train size={20} /> Through-travelers
            </h3>
            <p>
              Arriving by train, staying the night? We move bags between
              station and guesthouse.
            </p>
          </Link>
        </div>
      </section>

      {/* ALL-IN-ONE PACK */}
      <AllInOnePack />

      <SiteFooter />
    </div>
  );
}
