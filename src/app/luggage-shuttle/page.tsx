"use client";

import Link from "next/link";
import {
  MessageCircle,
  CreditCard,
  Footprints,
  Store,
  PackageCheck,
  MapPin,
  ArrowRight,
} from "lucide-react";
import {
  LUGGAGE_WHATSAPP_URL,
  LUGGAGE_SEND_WHATSAPP_URL,
  SPRAY_SEND_WHATSAPP_URL,
  SQUARE_PAY_URL,
} from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";
import { ShuttleCalendar } from "../shuttle-calendar";

const IZUMIYA_MAP = "https://maps.app.goo.gl/cCfrFcvGZXbGeBFM6";
const KATANA_MAP = "https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA";
const HALL_MAP = "https://maps.app.goo.gl/PJDk8kvmz6Xxa9Dd8";
const WAKU_MAP = "https://maps.app.goo.gl/PdnuaBaziu99LA5i6";

/** Payment button + QR — shown top and bottom of the page. */
function PayBlock() {
  return (
    <div className="pay-sec">
      <div className="pay-row pay-row-center">
        <a
          href={SQUARE_PAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="stay-cta"
        >
          <CreditCard size={16} /> Pay the shuttle fee online (Square)
        </a>
        <figure className="pay-qr">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/square-pay-qr.png"
            alt="QR code for the Square payment page — scan to pay the shuttle fee"
          />
          <figcaption>or scan to pay</figcaption>
        </figure>
      </div>
      <div className="pay-notify">
        <p>
          <strong>
            Once you&apos;ve paid, send us on WhatsApp: ① your name ② number
            of bags ③ where the bags start ④ where to deliver them.
          </strong>
        </p>
        <a
          href={LUGGAGE_SEND_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="stay-cta"
        >
          <MessageCircle size={16} /> Send the details on WhatsApp
        </a>
        <div className="pay-alt">
          <p>
            <strong>Bear spray only, no bags?</strong> That works — pay the
            spray fee through the same link or QR, then send us your name,
            number of bottles, and the pick-up and return points.
          </p>
          <a
            href={SPRAY_SEND_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <MessageCircle size={16} /> WhatsApp for spray-only rental
          </a>
        </div>
      </div>
      <p className="pay-note">
        Enter the amount on the Square page — cash at the counter is welcome
        too. Note that the Square payment page is displayed in Japanese
        (「金額」 is the amount field); your browser&apos;s translate
        function renders it in English just fine.
      </p>
    </div>
  );
}

export default function LuggageShuttlePage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={LUGGAGE_WHATSAPP_URL}>
        <MessageCircle size={18} /> Ask on WhatsApp
      </FloatBook>

      {/* PAGE HEAD — title, catch copy, photo */}
      <header className="page-head page-head-grid">
        <div>
          <span className="head-badge">Same-day OK — no reservation</span>
          <br />
          <span className="eyebrow">Shuttle Baggage Service · Nagiso — Nojiri</span>
          <h1>
            Yes Road, <em>No load.</em>
          </h1>
          <p>
            We carry your bags, station to station. Hand them to a cafe in
            the morning, walk the Nakasendo&apos;s Yogawa-michi or swim the
            gorges hands-free, and they&apos;ll be waiting at the other end
            of the valley by early afternoon.
          </p>
          <p className="head-note">
            Gear rentals such as bear spray also need no reservation when
            you rent at Izumiya Cafe (Nagiso Station) and return at Coffee
            Katana (Nojiri Station) — see the{" "}
            <Link href="/gear">gear rental page</Link>.
          </p>
        </div>
        <figure className="page-head-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/shuttle-van.jpg"
            alt="The shuttle van with its tailgate up, suitcases and a backpack loaded for the run down the valley"
          />
          <figcaption>Bags in, tailgate down — they&apos;ll beat you there</figcaption>
        </figure>
      </header>

      {/* PRICING */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">Pricing</span>
        <h2>One base fee, then count your bags.</h2>
        <div className="pricing">
          <div className="pitem">
            <h4>Base fee</h4>
            <div className="amt">
              ¥1,500<span style={{ fontSize: "0.9rem" }}>/group</span>
            </div>
            <p>
              Per group, same-day, between any of our points from Tsumago to
              Nojiri.
            </p>
          </div>
          <div className="pitem">
            <h4>Per bag</h4>
            <div className="amt">
              +¥1,500<span style={{ fontSize: "0.9rem" }}>/bag</span>
            </div>
            <p>
              Counted per group, not per person — so three bags come to
              ¥6,000 total.
            </p>
          </div>
          <div className="pitem">
            <h4>Bear spray</h4>
            <div className="amt">
              ¥1,500<span style={{ fontSize: "0.9rem" }}>/bottle</span>
            </div>
            <p>
              Bell included, no base fee — pick it up in Nagiso, hand it back
              in Nojiri. Spray-only rentals, with no bags to send, are just
              as welcome.
            </p>
          </div>
        </div>
      </section>

      {/* PAY — first appearance */}
      <PayBlock />

      {/* OPERATING CALENDAR */}
      <section className="cal-sec" id="calendar">
        <span className="eyebrow" style={{ display: "block", textAlign: "center", marginBottom: "1.2rem" }}>
          Operating days
        </span>
        <ShuttleCalendar lang="en" />
      </section>

      {/* HOW IT WORKS */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">How it works</span>
          <h2>
            No reservation. <em>Drop, pay, and go.</em>
          </h2>
          <p>
            By <strong>10:30</strong>, no booking needed: hand your bags in
            at Nagiso Station (Izumiya Cafe) or at Guesthouse WAKU, and
            they&apos;ll be at Nojiri Station (Coffee Katana*) by{" "}
            <strong>13:30</strong>. Spend the day
            hands-free on the Nakasendo&apos;s Yogawa-michi, or in the
            Kakizore and Atera gorges.
            <br />
            <small>* On Mondays, bags are held at the Nojiri station-front
            community hall instead.</small>
          </p>

          {/* THE FOUR PANELS */}
          <div className="koma-grid">
            <div className="koma">
              <span className="koma-num">1</span>
              <Store size={26} />
              <h3>Drop</h3>
              <p>
                By 10:30, hand your bags to Izumiya Cafe in front of Nagiso
                Station — or to Guesthouse WAKU.
              </p>
            </div>
            <div className="koma">
              <span className="koma-num">2</span>
              <CreditCard size={26} />
              <h3>Pay</h3>
              <p>
                Settle up on the spot: scan the Square QR, or pay by card or
                cash.
              </p>
            </div>
            <div className="koma">
              <span className="koma-num">3</span>
              <Footprints size={26} />
              <h3>Roam</h3>
              <p>
                Walk the Yogawa-michi, or swim the Kakizore and Atera gorges.
                Zero shoulder straps.
              </p>
            </div>
            <div className="koma">
              <span className="koma-num">4</span>
              <PackageCheck size={26} />
              <h3>Pick up</h3>
              <p>
                From 13:30, collect your bags at Coffee Katana by Nojiri
                Station (Mondays: the community hall).
              </p>
            </div>
          </div>

          <p className="drop-note">
            Other directions or points — Tsumago, Junikane, or a Nojiri →
            Nagiso run — are no problem: just message us on WhatsApp and
            we&apos;ll set it up.
          </p>
        </div>
      </section>

      {/* THE COUNTERS */}
      <section className="mini-sec" id="counters">
        <span className="eyebrow">The counters</span>
        <h2>Drop at one counter, pick up at another.</h2>
        <div className="mini-grid cols2">
          <a
            href={IZUMIYA_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <MapPin size={20} /> Izumiya Cafe Nagiso · drop-off
            </h3>
            <p>
              The main drop-off counter, in front of Nagiso Station. A good
              coffee before the trail, too. Tap for the map.
            </p>
          </a>
          <a
            href={WAKU_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <MapPin size={20} /> Guesthouse WAKU · drop-off
            </h3>
            <p>
              Bags left at Guesthouse WAKU also travel down to Coffee Katana
              (Mondays: the community hall). Tap for the map.
            </p>
          </a>
          <a
            href={KATANA_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <MapPin size={20} /> Nojiri Cafe Katana · pick-up
            </h3>
            <p>
              The pick-up counter, in front of Nojiri Station — reward
              yourself with a cup while you reunite with your bags.
            </p>
          </a>
          <a
            href={HALL_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <MapPin size={20} /> Community Hall · pick-up (Mondays)
            </h3>
            <p>
              Coffee Katana rests on Mondays, so Monday pickups move here —
              still right in front of Nojiri Station. Tap for the map.
            </p>
          </a>
        </div>
      </section>

      {/* WHERE YOU'LL GO */}
      <section className="mini-sec" id="routes">
        <span className="eyebrow">Where you&apos;ll go hands-free</span>
        <h2>Wondering where the day should take you?</h2>
        <Link href="/second-day" className="stay-cta">
          Read our Self-Tour Advice <ArrowRight size={15} />
        </Link>
      </section>

      {/* PAY — final appearance */}
      <section className="mini-sec" id="pay">
        <span className="eyebrow">Ready?</span>
        <h2>Bags packed? See you at the counter.</h2>
      </section>
      <PayBlock />

      <SiteFooter />
    </div>
  );
}
