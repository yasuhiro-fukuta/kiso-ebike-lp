"use client";

import {
  MessageCircle,
  CreditCard,
  Footprints,
  PackageCheck,
  MapPin,
  ArrowRight,
  Ban,
  Camera,
} from "lucide-react";
import { WHATSAPP_URL } from "../site";
import { LbNav, LbFooter, LbFloat, EBIKE_SITE, useLb } from "./lb-chrome";
import { LbHowVideo } from "./how-video";
import { LbPlanner } from "./lb-planner";
import { LbInstantSteps, LbTrust, LbArrangements } from "./lb-sections";
import {
  STATIONS, feeText, placeName, RULES, RUNS, ARRIVALS, PRICE_BANDS, EXAMPLES, LINE, OUT_OF_RANGE,
  estimate, posOf, nameOf, yen, DROP_BY, ARRIVE_BY,
} from "../luggage-bus";

const RANGE_EN = LINE.map((a) => a.name.en).join(", ");

export default function LuggageBusPage() {
  const { base } = useLb();
  const otherHref = `${base}/other-services`;
  return (
    <div className="lp">
      <LbNav />

      <LbFloat href={`${EBIKE_SITE}/book?s=luggage`}>
        <MessageCircle size={18} /> Request on WhatsApp
      </LbFloat>

      {/* PAGE HEAD — title, catch copy, photo */}
      <header className="page-head page-head-grid">
        <div>
          <span className="head-badge">Luggage only · no passengers</span>
          <br />
          <span className="eyebrow">Luggage Bus · Nakatsugawa — Narai</span>
          <h1>
            Yes Road, <em>No load.</em>
          </h1>
          <p>
            The Luggage Bus carries your bags along the Nakasendo on fixed
            daily runs, covering {RANGE_EN}. In the morning,
            leave your bags at one of our stations — a luggage drop point
            or a partner inn — and walk on — they&apos;ll be
            waiting at the other end.
          </p>
          <p className="head-note">
            Leave your bags by {DROP_BY} in the morning, and they arrive by {ARRIVE_BY} the
            same day. Choose, pay, and your booking is confirmed on the spot.
          </p>
          <p className="head-note">
            <small>
              From north of Nagiso to Tadachi, Sakashita or Nakatsugawa, bags arrive the
              next day (we still take the booking).
            </small>
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

      <LbPlanner lang="en" />

      <LbInstantSteps lang="en" />

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

      {/* HOW IT DIFFERS */}
      <section className="mini-sec" id="difference">
        <span className="eyebrow">First time here?</span>
        <h2>Fixed times and fixed stops, so you only pick.</h2>
        <p className="drop-note" style={{ marginTop: "-1rem", marginBottom: "1.4rem" }}>
          The Luggage Bus is not a courier where you choose any time and any address. The run times and the drop-off stops are set in advance. You choose a date and your stops, and that is the whole booking.
        </p>
        <div className="lb-table-wrap">
          <table className="lb-table lb-compare">
            <thead>
              <tr>
                <th></th>
                <th>A regular courier</th>
                <th>Luggage Bus</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row">When it moves</th><td>The courier decides, or you pick a window</td><td className="us">Fixed daily runs: leave bags by {DROP_BY}, they arrive by {ARRIVE_BY}</td></tr>
              <tr><th scope="row">Where you drop and collect</th><td>Any address</td><td className="us">Fixed stops: cafés, inns and info offices</td></tr>
              <tr><th scope="row">Booking deadline</th><td>Varies</td><td className="us">23:00 the day before</td></tr>
              <tr><th scope="row">Price</th><td>By size and distance</td><td className="us">One unit price × (bags + 1)</td></tr>
              <tr><th scope="row">Best for</th><td>Exact times and addresses</td><td className="us">Walkers and cyclists with a plan already set</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <LbHowVideo lang="en" />

      {/* TIMETABLE */}
      <section className="mini-sec" id="timetable">
        <span className="eyebrow">Timetable</span>
        <h2>Two loops a day from Nagiso: south to Nakatsugawa, north to Narai.</h2>
        <div className="lb-runs">
          {RUNS.map((r) => (
            <div className={`lb-run${r.north ? " north" : ""}`} key={r.no}>
              <span className="lb-run-dir">
                {r.no} {r.north ? "North loop" : "South loop"}
              </span>
              <span className="lb-run-time">{r.time.en}</span>
              <span className="lb-run-route">{r.route.en}</span>
            </div>
          ))}
        </div>
        <p className="drop-note">
          Leave your bags by {DROP_BY} — see when they arrive below.
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

      {/* HOW IT WORKS (4 steps) */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">How it works</span>
          <h2>Four steps. <em>Then just walk.</em></h2>
          <div className="koma-grid">
            <div className="koma">
              <div className="lb-ph">Screen (placeholder)<br/>Booking box and payment</div>
              <span className="koma-num">1</span>
              <CreditCard size={26} />
              <h3>Book and pay</h3>
              <p>Choose your date, stops and bags in the box above. Paid = booked. For an inn that isn&apos;t listed, or a stop marked &ldquo;by arrangement&rdquo;, send the request on WhatsApp.</p>
            </div>
            <div className="koma">
              <div className="lb-ph">Photo (placeholder)<br/>A photo of your bag</div>
              <span className="koma-num">2</span>
              <Camera size={26} />
              <h3>Send a photo of each bag</h3>
              <p>One photo per bag on WhatsApp. We put the tags on when we collect.</p>
            </div>
            <div className="koma">
              <div className="lb-ph">Photo (placeholder)<br/>Drop at a stop</div>
              <span className="koma-num">3</span>
              <PackageCheck size={26} />
              <h3>Drop off in the morning</h3>
              <p>Leave your bags at your inn&apos;s front desk or entrance, or at your stop, by {DROP_BY} (or the evening before), then set off with nothing on your back.</p>
            </div>
            <div className="koma">
              <div className="lb-ph">Photo (placeholder)<br/>Collect at your next stop</div>
              <span className="koma-num">4</span>
              <Footprints size={26} />
              <h3>Collect at your next stop</h3>
              <p>Your bags arrive by {ARRIVE_BY} the same day (next day from north of Nagiso to Tadachi, Sakashita or Nakatsugawa). Just pick them up when you arrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PEACE OF MIND + CONDITIONS (in one place) */}
      <section className="mini-sec" id="conditions">
        <span className="eyebrow">Peace of mind</span>
        <h2>A registered van, a record of every bag, and real people.</h2>
        <LbTrust lang="en" />
        <h3 className="lb-cond-title">Conditions</h3>
        <ul className="lb-places lb-cond">
          <li>Book by 23:00 the day before.</li>
          <li>Up to 20 bags per run.</li>
          <li>One photo of each bag on WhatsApp.</li>
          <li>We don&apos;t carry cash, passports, valuables, fragile items, medicine or fresh food.</li>
          <li>Cancellation: full refund up to 3 days before; 50% from then until the day before; none on the day.</li>
          <li>No runs on Mondays or from December to March (restarting around 20 March 2027).</li>
        </ul>
      </section>

      {/* WHO IT'S FOR */}
      <section className="mini-sec" id="who">
        <span className="eyebrow">Is it for you?</span>
        <h2>Who it suits.</h2>
        <div className="mini-grid cols2">
          <div className="mini-card lb-way">
            <h3>A good fit</h3>
            <ul className="lb-places">
              <li>Walkers and cyclists going inn to inn without bags</li>
              <li>You can choose your date and stops by the day before</li>
              <li>You travel between {RANGE_EN}</li>
            </ul>
          </div>
          <div className="mini-card lb-way">
            <h3>Not a fit</h3>
            <ul className="lb-places">
              <li>You need an exact time or an exact address</li>
              <li>You travel on a Monday, or from December to March (no runs)</li>
              <li>You want to ride along yourself (bags only)</li>
              <li>You start or end in {OUT_OF_RANGE.map((o) => o.name.en).join(", ")} (<a href={otherHref}>other services</a>)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">Pricing</span>
        <h2>One unit price × (bags + 1).</h2>
        <div className="pricing">
          {PRICE_BANDS.map((b) => (
            <div className="pitem" key={b.name.en}>
              <h4>{b.name.en}</h4>
              <div className="amt">
                {yen(b.unit)}
                <span style={{ fontSize: "0.9rem" }}>/unit</span>
              </div>
              <p>{b.where.en}</p>
            </div>
          ))}
          <p className="pricing-foot">
            Price = unit × (number of bags + 1). The &ldquo;+ 1&rdquo; is the base fare, so each extra bag costs one unit. Both ends in the south: {yen(PRICE_BANDS[0].unit)}. If either end is in the north: {yen(PRICE_BANDS[1].unit)}. Stops marked &ldquo;by arrangement&rdquo; are priced on WhatsApp. The booking box works out the total for you.
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
              {EXAMPLES.map((x) => {
                const e = estimate(posOf(x.from), posOf(x.to), x.bags);
                return (
                  <tr key={`${x.from}-${x.to}-${x.bags}`}>
                    <th scope="row">
                      {nameOf(x.from).en} → {nameOf(x.to).en}
                      {e && <small>{yen(e.unit)} × ({x.bags} + 1)</small>}
                    </th>
                    <td>{x.bags}</td>
                    <td>{e ? yen(e.total) : "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="drop-note">
          The total shows in the booking box before you pay.
        </p>
      </section>

      {/* CANCELLATION */}
      <section className="mini-sec" id="cancel">
        <span className="eyebrow">Cancellation</span>
        <h2>Full refund up to 3 days before.</h2>
        <div className="lb-table-wrap">
          <table className="lb-table lb-compare">
            <thead>
              <tr><th>When you cancel</th><th>Refund</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">3 or more days before</th><td className="us">Full refund</td></tr>
              <tr><th scope="row">From 3 days before until the day before</th><td className="us">50% refund</td></tr>
              <tr><th scope="row">On the day</th><td className="us">No refund</td></tr>
            </tbody>
          </table>
        </div>
        <p className="drop-note">
          If we cannot run (bad weather, a breakdown or illness), you get a full refund.
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
          information office, a cafe or a partner inn (inns are for their
          own guests only). Hand your bags over at one in the morning, pick
          them up at another. Underlined names open the map or website.
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
                        {placeName(pl, "en")}
                      </a>
                    ) : (
                      placeName(pl, "en")
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
                      <small>{placeName(pl, "en")}</small>
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
              <MessageCircle size={20} /> Your inn isn&apos;t listed?
            </h3>
            <p>
              Any inn in {RANGE_EN} works: choose &ldquo;another inn&rdquo; in
              its town and send the request on WhatsApp.
            </p>
          </div>
          <div className="mini-card lb-way">
            <h3>
              <ArrowRight size={20} /> Magome, Tsumago or Ran?
            </h3>
            <p>
              They are outside our route. <a href={otherHref}>See local services that cover them</a>.
            </p>
          </div>
        </div>
      </section>

      <LbArrangements lang="en" />

      {/* FIND YOUR STOP */}
      <section className="mini-sec" id="find-stop">
        <span className="eyebrow">Find your stop</span>
        <h2>Look up your inn or place.</h2>
        <p className="drop-note" style={{ marginTop: "-1rem", marginBottom: "1.2rem" }}>
          In the booking form you pick the area first, then the inn or place in it. If yours is not listed, choose &quot;Another&quot; and write its name.
        </p>
        <div className="lb-table-wrap">
          <table className="lb-table lb-info">
            <thead>
              <tr><th>Inn or place</th><th>Area to choose</th><th>Who can use it</th></tr>
            </thead>
            <tbody>
              {STATIONS.flatMap((s) =>
                s.places.map((pl) => (
                  <tr key={`find-${pl.id}`}>
                    <th scope="row">{pl.name.en}</th>
                    <td>{s.name.en}</td>
                    <td>{pl.guestsOnly ? "Guests only" : "Anyone"}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
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
            No — please book first, by 23:00 the day before. For listed
            stops and inns, your booking is confirmed as soon as you pay in
            the booking box.
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
            <a href={`${EBIKE_SITE}/gear`}>bear spray rental page</a>.
          </p>
        </details>
      </section>

      {/* BOOK */}
      <section className="mini-sec" id="book">
        <span className="eyebrow">Ready?</span>
        <h2>Bags packed? Tell us where they&apos;re going.</h2>
        <div className="pay-row">
          <a href={`${EBIKE_SITE}/book?s=luggage`} className="stay-cta">
            <MessageCircle size={16} /> Request on WhatsApp <ArrowRight size={15} />
          </a>
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

      <LbFooter />
    </div>
  );
}
