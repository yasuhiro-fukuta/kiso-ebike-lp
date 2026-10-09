"use client";

import Link from "next/link";
import {
  MessageCircle,
  CreditCard,
  Footprints,
  PackageCheck,
  MapPin,
  ArrowRight,
  BedDouble,
  Clock,
  Ban,
  CalendarCheck,
} from "lucide-react";
import { SQUARE_PAY_URL, WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";
import { ShuttleCalendar } from "../shuttle-calendar";
import { STOPS, FARES, DOOR_FEE, yen } from "../luggage-bus";

export default function LuggageBusPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href="/book?s=luggage">
        <MessageCircle size={18} /> Book on WhatsApp
      </FloatBook>

      {/* PAGE HEAD — title, catch copy, photo */}
      <header className="page-head page-head-grid">
        <div>
          <span className="head-badge">Luggage only · no passengers</span>
          <br />
          <span className="eyebrow">Luggage Bus · Nakatsugawa — Kiso-Fukushima</span>
          <h1>
            Yes Road, <em>No load.</em>
          </h1>
          <p>
            The Luggage Bus runs your bags up and down the Kiso Valley on a
            fixed timetable, once a day each way: Nakatsugawa, Nagiso,
            Nojiri, Kiso-Fukushima. Book ahead and we collect from your
            inn&apos;s door and deliver to the next one. No booking? Just
            meet the bus at a stop.
          </p>
          <p className="head-note">
            Northbound, bags reach Kiso-Fukushima by 13:00 — well before
            check-in.
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
        <h2>One run north, one run south, every operating day.</h2>
        <div className="lb-table-wrap">
          <table className="lb-table">
            <thead>
              <tr>
                <th>Stop</th>
                <th>Northbound ↑</th>
                <th>Southbound ↓</th>
              </tr>
            </thead>
            <tbody>
              {[...STOPS].reverse().map((s) => (
                <tr key={s.en}>
                  <th scope="row">
                    {s.en}
                    {s.counter && <small>{s.counter.en}</small>}
                  </th>
                  <td>
                    {s.north}
                    {s.en === "Kiso-Fukushima" && <small>arrive</small>}
                    {s.en === "Nakatsugawa" && <small>depart</small>}
                  </td>
                  <td>
                    {s.south ?? "en route"}
                    {s.en === "Kiso-Fukushima" && <small>depart</small>}
                    {s.en === "Nakatsugawa" && <small>arrive by</small>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="drop-note">
          Northbound runs 10:00–13:00 and southbound 13:00–15:00. Southbound
          times at Nojiri and Nagiso depend on the day&apos;s pick-ups — we
          confirm yours on WhatsApp. Magome and Tsumago are not on the
          route (see below).
        </p>
      </section>

      {/* TWO WAYS TO SEND */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">Two ways to send</span>
          <h2>
            Book ahead, <em>or just walk up.</em>
          </h2>
          <div className="mini-grid cols2">
            <div className="mini-card lb-way">
              <h3>
                <BedDouble size={20} /> Booked · door to door
              </h3>
              <p>
                Tell us your inns and dates on WhatsApp. Leave your bags at
                the front desk when you set out; the bus collects them on
                its run and delivers to your next inn. Booked bags get their
                space first. Pay in advance by card.
              </p>
            </div>
            <div className="mini-card lb-way">
              <h3>
                <Clock size={20} /> Walk-up · at a stop
              </h3>
              <p>
                No booking needed: bring your bags to a stop counter before
                the bus is due, and pick them up at the counter of your
                destination stop. Carried when there&apos;s room — booked bags
                go first in the busy season. Pay at the counter, cash or QR.
              </p>
            </div>
          </div>

          {/* THE FOUR PANELS */}
          <div className="koma-grid">
            <div className="koma">
              <span className="koma-num">1</span>
              <CalendarCheck size={26} />
              <h3>Book or show up</h3>
              <p>
                Book on WhatsApp for inn-to-inn, or simply head to a stop.
              </p>
            </div>
            <div className="koma">
              <span className="koma-num">2</span>
              <PackageCheck size={26} />
              <h3>Hand over</h3>
              <p>
                At your inn&apos;s front desk in the morning, or at the stop
                counter before the bus is due.
              </p>
            </div>
            <div className="koma">
              <span className="koma-num">3</span>
              <Footprints size={26} />
              <h3>Walk</h3>
              <p>
                The Nakasendo, the gorges, the valley — with nothing on your
                shoulders.
              </p>
            </div>
            <div className="koma">
              <span className="koma-num">4</span>
              <MapPin size={26} />
              <h3>Reunite</h3>
              <p>
                Your bags wait at your next inn, or at the destination stop
                after the bus has been through.
              </p>
            </div>
          </div>

          <p className="drop-note">
            Hikers usually leave around 8–9 in the morning, before the bus
            passes. That&apos;s fine — the inn or the stop counter holds your
            bags until it arrives.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">Pricing (provisional)</span>
        <h2>Per bag, by how far it travels.</h2>
        <div className="pricing">
          {FARES.map((f) => (
            <div className="pitem" key={f.sections}>
              <h4>{f.en}</h4>
              <div className="amt">
                {yen(f.yen)}
                <span style={{ fontSize: "0.9rem" }}>/bag</span>
              </div>
              <p>{f.exEn}</p>
            </div>
          ))}
          <p className="pricing-foot">
            Collection from or delivery to an inn&apos;s door:{" "}
            <strong>+{yen(DOOR_FEE)}</strong>. A section is one hop between
            neighbouring stops (Nakatsugawa — Nagiso — Nojiri —
            Kiso-Fukushima).
          </p>
        </div>
        <p className="drop-note">
          These fares are provisional and may change before the season
          starts. The price we confirm on WhatsApp is the one you pay.
        </p>
      </section>

      {/* OPERATING CALENDAR */}
      <section className="cal-sec" id="calendar">
        <span className="eyebrow" style={{ display: "block", textAlign: "center", marginBottom: "1.2rem" }}>
          Operating days
        </span>
        <ShuttleCalendar lang="en" />
      </section>

      {/* THE STOPS */}
      <section className="mini-sec" id="stops">
        <span className="eyebrow">The stops</span>
        <h2>Four stops along the old Nakasendo.</h2>
        <div className="mini-grid cols2">
          {STOPS.map((s) => {
            const body = (
              <>
                <h3>
                  <MapPin size={20} /> {s.en}
                </h3>
                <p>
                  {s.counter
                    ? `${s.counter.en}. Tap for the map.`
                    : "Station-area counter to be announced. Booked bags are collected from your inn."}
                </p>
              </>
            );
            return s.map ? (
              <a
                key={s.en}
                href={s.map}
                target="_blank"
                rel="noopener noreferrer"
                className="mini-card"
              >
                {body}
              </a>
            ) : (
              <div key={s.en} className="mini-card lb-way">
                {body}
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <h2>Questions</h2>
        <details className="faq-item">
          <summary>Can I ride the Luggage Bus?</summary>
          <p>
            No. It carries luggage only — no passengers, not even for a
            short hop. Between the stops, JR Chuo Line trains run along the
            same valley.
          </p>
        </details>
        <details className="faq-item">
          <summary>I&apos;m staying in Magome or Tsumago.</summary>
          <p>
            Magome and Tsumago are not on our route. The tourist information
            office runs its own luggage service between the two; from
            Tsumago, bring your bags to our Nagiso stop (Izumiya Cafe) to
            send them further north. Message us and we&apos;ll help you
            plan it.
          </p>
        </details>
        <details className="faq-item">
          <summary>What if I arrive before my bags?</summary>
          <p>
            Bags reach each stop around the times in the timetable. If you
            get there first, have a coffee at the counter while you wait —
            or book door to door and they&apos;ll simply be waiting at your
            inn.
          </p>
        </details>
        <details className="faq-item">
          <summary>How many bags can I send?</summary>
          <p>
            Booked bags are loaded first; walk-up bags go on when
            there&apos;s room. For a big group or unusual items, message us
            before you book.
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

      {/* BOOK & PAY */}
      <section className="mini-sec" id="book">
        <span className="eyebrow">Ready?</span>
        <h2>Bags packed? Tell us where they&apos;re going.</h2>
        <div className="pay-row">
          <Link href="/book?s=luggage" className="stay-cta">
            <MessageCircle size={16} /> Book on WhatsApp <ArrowRight size={15} />
          </Link>
          <a
            href={SQUARE_PAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <CreditCard size={16} /> Pay online (Square)
          </a>
        </div>
        <p className="drop-note">
          Questions first?{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Message us on WhatsApp
          </a>
          . The Square payment page is in Japanese (「金額」 is the amount);
          your browser&apos;s translate function handles it fine.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
