"use client";

/* ページごとに分けた本文(2026-11-25 トップを目次にした分割)。中身・数字は分割前の page.tsx からそのまま移した。 */
import { PriceTag } from "./price-tag";
import { MessageCircle, CreditCard, Footprints, PackageCheck, MapPin, ArrowRight, Ban, Camera } from "lucide-react";
import { EBIKE_SITE, useLb } from "./lb-chrome";
import { LbTrust } from "./lb-sections";
import {
  STATIONS, feeText, placeName, RULES, RUNS, ARRIVALS, EXAMPLES, LINE, OUT_OF_RANGE,
  estimate, posOf, nameOf, DROP_BY, ARRIVE_BY, MAX_FARE_BAGS, CANCEL_POLICY, COMPENSATION_TEXT, SEASON_TEXT,
  HOLD_FEE_RULE, NARAI_NOTE,
} from "../luggage-bus";

const RANGE_EN = LINE.map((a) => a.name.en).join(", ");

export function EnNotice() {
  return (
    <>
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
    </>
  );
}

export function EnDifference() {
  return (
    <>
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
                <tr><th scope="row">Price</th><td>By size and distance</td><td className="us">A set price for your two stops and number of bags</td></tr>
                <tr><th scope="row">Best for</th><td>Exact times and addresses</td><td className="us">Walkers and cyclists with a plan already set</td></tr>
              </tbody>
            </table>
          </div>
        </section>
    </>
  );
}

export function EnTimetable() {
  return (
    <>
        {/* TIMETABLE */}
        <section className="mini-sec" id="timetable">
          <span className="eyebrow">Timetable</span>
          <h2>Our routes, from Nakatsugawa Station to Narai.</h2>
          <div className="lb-runs">
            {RUNS.map((r) => (
              <div className={`lb-run${r.north ? " north" : ""}`} key={r.no}>
                <span className="lb-run-dir">
                  {r.no} {r.dir.en}
                </span>
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
    </>
  );
}

export function EnHowSteps() {
  return (
    <>
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
                <p>Choose your date, your nearest JR stations and your inns or drop points in the booking box. Paid = booked, anywhere on our route. Inn not listed? Choose &ldquo;another inn&rdquo; and write its name.</p>
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
    </>
  );
}

export function EnConditions() {
  return (
    <>
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
            <li>Cancellation: {CANCEL_POLICY.en}</li>
            <li>Compensation: {COMPENSATION_TEXT.en}</li>
            <li>We run {SEASON_TEXT.en}.</li>
          </ul>
        </section>
    </>
  );
}

export function EnWho() {
  const { base } = useLb();
  const otherHref = `${base}/other-services`;
  return (
    <>
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
                <li>You travel on a Monday (no runs), or outside March 2027 – February 2028</li>
                <li>You want to ride along yourself (bags only)</li>
                <li>You start or end in {OUT_OF_RANGE.map((o) => o.name.en).join(", ")} (<a href={otherHref}>other services</a>)</li>
              </ul>
            </div>
          </div>
        </section>
    </>
  );
}

export function EnPricing() {
  return (
    <>
        {/* PRICING */}
        <section className="mini-sec" id="pricing">
          <span className="eyebrow">Pricing</span>
          <h2>Set by your stops and number of bags.</h2>
          <div className="pricing">
            <p className="pricing-foot">
              Each trip has a set price for 1 to {MAX_FARE_BAGS} bags. Pick your stops in the range checker or the booking box and the price shows at once. For {MAX_FARE_BAGS + 1} or more bags, please ask us on WhatsApp.
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
                      </th>
                      <td>{x.bags}</td>
                      <td>{e ? <PriceTag total={e.total} list={e.list} lang="en" /> : "—"}</td>
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
    </>
  );
}

export function EnCancel() {
  return (
    <>
        {/* CANCELLATION */}
        <section className="mini-sec" id="cancel">
          <span className="eyebrow">Cancellation</span>
          <h2>Free cancellation up to 7 days before.</h2>
          <div className="lb-table-wrap">
            <table className="lb-table lb-compare">
              <thead>
                <tr><th>When you cancel</th><th>Refund</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">7 or more days before</th><td className="us">Free (full refund)</td></tr>
                <tr><th scope="row">From 6 days before, including the day</th><td className="us">100% charged (no refund)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="drop-note">
            If we cannot run (bad weather, a breakdown or illness), you get a full refund.
          </p>
        </section>
    </>
  );
}

export function EnRules() {
  return (
    <>
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
    </>
  );
}

export function EnStations() {
  const { base } = useLb();
  const otherHref = `${base}/other-services`;
  return (
    <>
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
                  <th>Holding fee when you drop off (paid there)</th>
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
            {HOLD_FEE_RULE.en}
            <br />
            {NARAI_NOTE.en}
            <br />
            Closing days for the tourist offices come from tourism websites and may be out of date; if your drop point turns out to be closed, we contact you before the day.
          </p>
          <div className="mini-grid cols2" style={{ marginTop: "1.2rem" }}>
            <div className="mini-card lb-way">
              <h3>
                <MessageCircle size={20} /> Your inn isn&apos;t listed?
              </h3>
              <p>
                Any inn in {RANGE_EN} works: pick its nearest JR station, choose
                &ldquo;another inn&rdquo;, write its name, and pay — confirmed on the spot.
              </p>
            </div>
            <div className="mini-card lb-way">
              <h3>
                <ArrowRight size={20} /> Magome or Tsumago?
              </h3>
              <p>
                They are outside our route. <a href={otherHref}>See local services that cover them</a>.
              </p>
            </div>
          </div>
        </section>
    </>
  );
}

export function EnFindStop() {
  return (
    <>
        {/* FIND YOUR STOP */}
        <section className="mini-sec" id="find-stop">
          <span className="eyebrow">Find your stop</span>
          <h2>Look up your inn or place.</h2>
          <p className="drop-note" style={{ marginTop: "-1rem", marginBottom: "1.2rem" }}>
            In the booking box you pick your nearest JR station first, then the inn or place there. If yours is not listed, choose &quot;another inn&quot; and write its name.
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
    </>
  );
}

export function EnFaq() {
  return (
    <>
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
              No — please book first, by 23:00 the day before. Anywhere on
              our route, your booking is confirmed as soon as you pay in the
              booking box.
            </p>
          </details>
          <details className="faq-item">
            <summary>Are there station holding fees?</summary>
            <p>{HOLD_FEE_RULE.en}</p>
          </details>
          <details className="faq-item">
            <summary>Can I leave bags overnight at Narai Station?</summary>
            <p>{NARAI_NOTE.en}</p>
          </details>
          <details className="faq-item">
            <summary>Can I cancel?</summary>
            <p>{CANCEL_POLICY.en}</p>
          </details>
          <details className="faq-item">
            <summary>What if a bag is lost or damaged?</summary>
            <p>{COMPENSATION_TEXT.en}</p>
          </details>
          <details className="faq-item">
            <summary>What if I arrive before my bags?</summary>
            <p>
              See “When your bags arrive” further down this page. If you get there first, have a
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
    </>
  );
}
