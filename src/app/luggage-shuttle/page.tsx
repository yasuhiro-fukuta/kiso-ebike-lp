"use client";

import Link from "next/link";
import {
  MessageCircle,
  CreditCard,
  Footprints,
  Store,
  PackageCheck,
  Instagram,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  LUGGAGE_WHATSAPP_URL,
  SQUARE_PAY_URL,
  MYMAP_EMBED_URL,
} from "../site";
import { SiteNav, SiteFooter, FloatBook, AllInOnePack } from "../chrome";

const IZUMIYA_IG = "https://www.instagram.com/izumiyacafe";
const KATANA_MAP = "https://maps.app.goo.gl/6VGmpJqCbbSjm5MLA";
const MYMAP_VIEW =
  "https://www.google.com/maps/d/viewer?mid=1UdxxoxfvuLwGjvlmiEC3vyAbExP95b0";

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
      <p className="pay-note">
        Base delivery fee ¥1,500 per group + ¥1,500 per bag. Bear spray with
        bell: ¥1,500 each. Enter the amount on the Square page — cash at the
        counter is welcome too.
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

      {/* PAY — first appearance */}
      <PayBlock />

      {/* HOW IT WORKS */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">How it works</span>
          <h2>
            No reservation. <em>Drop, pay, and go.</em>
          </h2>
          <p>
            Leave your bags at the cafe in front of Nagiso Station and pay by{" "}
            <strong>10:30</strong>, and they&apos;ll arrive at Coffee Katana in
            front of Nojiri Station (on Mondays: the Nojiri station-front
            community hall) by <strong>13:30</strong>. Spend the day hands-free
            on the Nakasendo&apos;s Yogawa-michi, or in the Kakizore and Atera
            gorges.
          </p>

          {/* THE FOUR PANELS */}
          <div className="koma-grid">
            <div className="koma">
              <span className="koma-num">1</span>
              <Store size={26} />
              <h3>Drop</h3>
              <p>
                By 10:30, hand your bags to Izumiya Cafe — right in front of
                Nagiso Station.
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

      {/* THE TWO COUNTERS */}
      <section className="mini-sec" id="counters">
        <span className="eyebrow">The two counters</span>
        <h2>Drop at one cafe, pick up at another.</h2>
        <div className="mini-grid">
          <a
            href={IZUMIYA_IG}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <Instagram size={20} /> Izumiya Cafe Nagiso
            </h3>
            <p>
              The drop-off counter, in front of Nagiso Station. A good coffee
              before the trail, too. Open the Instagram for photos and hours.
            </p>
          </a>
          <a
            href={KATANA_MAP}
            target="_blank"
            rel="noopener noreferrer"
            className="mini-card"
          >
            <h3>
              <MapPin size={20} /> Nojiri Cafe Katana
            </h3>
            <p>
              The pick-up counter, in front of Nojiri Station — reward
              yourself with a cup while you reunite with your bags. On
              Mondays, pick up at the station-front community hall instead.
            </p>
          </a>
        </div>
      </section>

      {/* WHERE YOU'LL GO */}
      <section className="mini-sec" id="routes">
        <span className="eyebrow">Where you&apos;ll go hands-free</span>
        <h2>One quiet old road, two emerald gorges.</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "52ch", marginBottom: "2rem" }}>
          The <strong>Yogawa-michi</strong> is the Nakasendo&apos;s forgotten
          detour between Nagiso and Nojiri — all quiet forest and old stone.
          The <strong>Kakizore and Atera gorges</strong> are where the valley
          keeps its emerald water. All three are on the map below, and the{" "}
          <Link href="/second-day">Self-Tour Advice page</Link> has the full
          route notes.
        </p>
        <div className="map-embed">
          <iframe
            src={MYMAP_EMBED_URL}
            title="Yogawa-michi, Kakizore and Atera on the route map"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <a
          href={MYMAP_VIEW}
          target="_blank"
          rel="noopener noreferrer"
          className="stay-cta"
        >
          Open the map in Google Maps <ExternalLink size={15} />
        </a>
      </section>

      {/* PAY — final appearance */}
      <section className="mini-sec" id="pay">
        <span className="eyebrow">Ready?</span>
        <h2>Bags packed? See you at the counter.</h2>
      </section>
      <PayBlock />

      {/* ALL-IN-ONE PACK */}
      <AllInOnePack />

      <SiteFooter />
    </div>
  );
}
