"use client";

import Link from "next/link";
import {
  MessageCircle,
  CreditCard,
  Footprints,
  PackageCheck,
  MapPin,
  ArrowRight,
  Ban,
  Send,
} from "lucide-react";
import { WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";
import { STATIONS, feeText, RULES, RUNS, ARRIVALS, ZONES, ZONE_FEE, BAG_FEE, EXTENSION_FEE, EXAMPLES, fare, yen } from "../luggage-bus";

export default function LuggageBusPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href="/book?s=luggage">
        <MessageCircle size={18} /> Request on WhatsApp
      </FloatBook>

      {/* PAGE HEAD — title, catch copy, photo */}
      <header className="page-head page-head-grid">
        <div>
          <span className="head-badge">Luggage only · no passengers</span>
          <br />
          <span className="eyebrow">Luggage Bus · Nagiso — Kiso-Fukushima</span>
          <h1>
            Yes Road, <em>No load.</em>
          </h1>
          <p>
            The Luggage Bus carries your bags along the Nakasendo on a fixed
            daily timetable, stopping at Nagiso, Nojiri, Agematsu and
            Kiso-Fukushima. In the morning,
            leave your bags at one of our stations — a luggage drop point
            or a partner inn — and walk on — they&apos;ll be
            waiting at the other end.
          </p>
          <p className="head-note">
            Nagiso to Kiso-Fukushima, the same day: bags
            arrive around 11:30, before check-in. Booking required — request on
            WhatsApp and we confirm.
          </p>
        </div>
        <figure className="page-head-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/shuttle-van.jpg"
            alt="The Luggage Bus van with its tailgate up, suitcases and a backpack loaded for the run along the valley"
          />
          <figcaption>Bags only — the van carries no passengers</figcaption>
        </figure>
      </header>

      {/* LUGGAGE ONLY */}
      <section className="mini-sec lb-notice-sec">
        <div className="lb-notice">
          <Ban size={26} />
          <div>
            <strong>Luggage only. The Luggage Bus does not carry people.</strong>
            <p>
              It&apos;s called a bus because it keeps a timetable — but only
              your bags ride it. Please plan to walk, ride, or take the train
              or a local bus yourself.
            </p>
          </div>
        </div>
      </section>

      {/* TIMETABLE */}
      <section className="mini-sec" id="timetable">
        <span className="eyebrow">Timetable</span>
        <h2>One round trip a day, Nagiso to Kiso-Fukushima and back.</h2>
        <div className="lb-runs">
          {RUNS.map((r) => (
            <div className={`lb-run${r.north ? " north" : ""}`} key={r.no}>
              <span className="lb-run-dir">
                {r.no} {r.north ? "Northbound" : "Southbound"}
              </span>
              <span className="lb-run-time">{r.time}</span>
              <span className="lb-run-route">{r.route.en}</span>
            </div>
          ))}
        </div>
        <p className="drop-note">
          Times are still being finalised and may change — see when your
          bags arrive below.
        </p>

        <h3 className="lb-sub">When your bags arrive</h3>
        <div className="lb-table-wrap">
          <table className="lb-table">
            <thead>
              <tr>
                <th>From → to</th>
                <th>Arrives</th>
              </tr>
            </thead>
            <tbody>
              {ARRIVALS.map((a) => (
                <tr key={a.flow.en} className={a.next ? "next" : undefined}>
                  <th scope="row">{a.flow.en}</th>
                  <td>{a.when.en}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">How to book</span>
          <h2>
            Ask on WhatsApp, <em>we confirm, you pay.</em>
          </h2>
          <p>
            Every bag needs a confirmed booking — we can&apos;t take bags
            without one. Send your request on WhatsApp; we check there&apos;s
            space on the run and reply with a payment link.
          </p>

          <div className="koma-grid">
            <div className="koma">
              <span className="koma-num">1</span>
              <Send size={26} />
              <h3>Request</h3>
              <p>
                Message us on WhatsApp: date, from and to (a station, or your
                inn), and number of bags.
              </p>
            </div>
            <div className="koma">
              <span className="koma-num">2</span>
              <CreditCard size={26} />
              <h3>Confirm &amp; pay</h3>
              <p>
                We confirm and send a Square payment link. Paid = booked.
              </p>
            </div>
            <div className="koma">
              <span className="koma-num">3</span>
              <PackageCheck size={26} />
              <h3>Hand over</h3>
              <p>
                Leave your bags at your starting station (a drop point or
                partner inn), then walk on.
              </p>
            </div>
            <div className="koma">
              <span className="koma-num">4</span>
              <Footprints size={26} />
              <h3>Pick up</h3>
              <p>
                Collect them at your destination station after the run
                arrives.
              </p>
            </div>
          </div>

          <p className="drop-note">
            Hikers usually set out around 8–9 in the morning, before the bus
            passes. That&apos;s fine — the station holds your bags until it
            arrives. Hand your bags in at least 10 minutes before the run
            passes (or the evening before).
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">Pricing</span>
        <h2>Delivery fee + ¥1,500 per bag.</h2>
        <div className="pricing">
          {ZONES.map((z) => (
            <div className="pitem" key={z.name.en}>
              <h4>{z.name.en}</h4>
              <div className="amt">
                {yen(ZONE_FEE)}
                <span style={{ fontSize: "0.9rem" }}>/booking</span>
              </div>
              <p>{z.route.en}</p>
            </div>
          ))}
          <div className="pitem">
            <h4>Per bag</h4>
            <div className="amt">
              +{yen(BAG_FEE)}
              <span style={{ fontSize: "0.9rem" }}>/bag</span>
            </div>
            <p>The same wherever it goes.</p>
          </div>
          <p className="pricing-foot">
            The delivery fee is ¥1,500 per booking (the route runs Nagiso to Kiso-Fukushima). Going beyond the route — south to Nakatsugawa, Tsumago or Magome, or north to Narai — is by arrangement and adds ¥1,500 for each further zone. The booking form works out an estimate for you.
          </p>
        </div>

        <h3 className="lb-sub">Examples</h3>
        <div className="lb-table-wrap">
          <table className="lb-table">
            <thead>
              <tr>
                <th>Trip</th>
                <th>Bags</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {EXAMPLES.map((x) => (
                <tr key={`${x.trip.en}-${x.bags}`}>
                  <th scope="row">
                    {x.trip.en}
                    <small>
                      Delivery {yen(x.zones * ZONE_FEE)} + {yen(BAG_FEE)} × {x.bags}
                    </small>
                  </th>
                  <td>{x.bags}</td>
                  <td>{yen(fare(x.zones, x.bags))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="drop-note">
          The total is in our confirmation on WhatsApp, with the payment link.
        </p>
      </section>

      {/* BOOKING RULES */}
      <section className="mini-sec" id="rules">
        <span className="eyebrow">Booking rules</span>
        <h2>Before you book.</h2>
        <ul className="itin-list lb-rules">
          {RULES.map((r) => (
            <li key={r.title.en}>
              <b>{r.title.en}</b>
              {r.body.en}
            </li>
          ))}
        </ul>
      </section>

      {/* THE STATIONS */}
      <section className="mini-sec" id="stops">
        <span className="eyebrow">The stations</span>
        <h2>Where your bags change hands.</h2>
        <p className="drop-note" style={{ marginTop: "-1rem", marginBottom: "1.6rem" }}>
          Each &ldquo;station&rdquo; is a place that holds luggage — a tourist
          information office, a cafe or a partner guesthouse. Hand your bags
          over at one in the morning, pick them up at another. Underlined
          names open the map.
        </p>
        <div className="mini-grid">
          {STATIONS.map((s) => (
            <div key={s.area} className="mini-card lb-way">
              <h3>
                <MapPin size={20} /> {s.name.en}
              </h3>
              <ul className="lb-places">
                {s.places.map((pl) => (
                  <li key={pl.name.en}>
                    {pl.map ? (
                      <a href={pl.map} target="_blank" rel="noopener noreferrer">
                        {pl.name.en}
                      </a>
                    ) : (
                      pl.name.en
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h3 className="lb-sub">Holding fees and closing days</h3>
        <div className="lb-table-wrap">
          <table className="lb-table lb-info">
            <thead>
              <tr>
                <th>Station</th>
                <th>Holding fee (paid on the spot)</th>
                <th>Closed</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              {STATIONS.flatMap((s) =>
                s.places.map((pl) => (
                  <tr key={pl.id}>
                    <th scope="row">
                      {s.name.en}
                      <small>{pl.name.en}</small>
                    </th>
                    <td>{feeText(pl, "en")}</td>
                    <td>{pl.closed.en}</td>
                    <td>{pl.hours ? pl.hours.en : "—"}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
        <p className="drop-note">
          Some stations charge a small holding fee, paid to them directly. Closing days for the tourist offices come from tourism websites and may be out of date — we confirm everything when we approve your booking.
        </p>
        <div className="mini-grid cols2" style={{ marginTop: "1.2rem" }}>
          <div className="mini-card lb-way">
            <h3>
              <MessageCircle size={20} /> Somewhere not listed?
            </h3>
            <p>
              Staying at an inn in Magome or Tsumago, or starting somewhere else?
              Ask on WhatsApp and we&apos;ll work out where to meet your
              bags.
            </p>
          </div>
          <div className="mini-card lb-way">
            <h3>
              <ArrowRight size={20} /> Beyond the route
            </h3>
            <p>
              Past either end of the route can be arranged on WhatsApp:
              +{yen(EXTENSION_FEE)} for each further zone.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <h2>Questions</h2>
        <details className="faq-item">
          <summary>Can I ride the Luggage Bus?</summary>
          <p>
            No. It carries luggage only — no passengers, not even for a
            short hop. Between the stops, JR Chuo Line trains and local
            buses run along the same valley.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can I just turn up with my bags?</summary>
          <p>
            No — please book first. We confirm each request on WhatsApp so
            we know there&apos;s room on the run, and the booking is set
            once you&apos;ve paid through the link we send.
          </p>
        </details>
        <details className="faq-item">
          <summary>What if I arrive before my bags?</summary>
          <p>
            Check the arrival times above. If you get there first, have a
            coffee or look around while you wait — your bags will be there
            once the run is through.
          </p>
        </details>
        <details className="faq-item">
          <summary>Need bear spray too?</summary>
          <p>
            Bear spray and other gear are on the{" "}
            <Link href="/gear">gear rental page</Link>.
          </p>
        </details>
      </section>

      {/* BOOK */}
      <section className="mini-sec" id="book">
        <span className="eyebrow">Ready?</span>
        <h2>Bags packed? Tell us where they&apos;re going.</h2>
        <div className="pay-row">
          <Link href="/book?s=luggage" className="stay-cta">
            <MessageCircle size={16} /> Request on WhatsApp <ArrowRight size={15} />
          </Link>
        </div>
        <p className="drop-note">
          Just a question?{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Message us on WhatsApp
          </a>
          . The Square payment page we send is in Japanese (「金額」 is the
          amount); your browser&apos;s translate function handles it fine.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
