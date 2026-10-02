"use client";

import Link from "next/link";
import {
  MessageCircle,
  Train,
  UtensilsCrossed,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import {
  PLAN_WHATSAPP_URL,
  MEALS_FORM_URL,
  KASHIWAYA_URL,
} from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

const NARAI_MAP = "https://goo.gl/maps/S6XA5BNduChYeL9S7?g_st=ac";

export default function PlanPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={PLAN_WHATSAPP_URL}>
        <MessageCircle size={18} /> Send my plan
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <div>
          <span className="eyebrow">Model itinerary · Nagiso as your base camp</span>
          <h1>
            Three nights <em>in Nagiso.</em>
          </h1>
          <p>
            Planning a longer trip through Japan and wondering how many
            nights this valley deserves? Our honest, local answer: three.
            One bed at Kashiwaya the whole time, zero repacking — and a
            different way into the valley each day: on foot, by e-bike, by
            train.
          </p>
        </div>
        <figure className="page-head-visual hero-wide">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/kashiwaya.jpg"
            alt="Kashiwaya Guesthouse — an old two-storey wooden inn with indigo noren curtains, Nagiso"
          />
          <figcaption>
            Your base camp: Kashiwaya, an old inn on the Nakasendo itself.
          </figcaption>
        </figure>
      </header>

      {/* GETTING HERE */}
      <section className="mini-sec" id="access">
        <span className="eyebrow">
          Getting here
        </span>
        <h2>
          <Train size={26} style={{ verticalAlign: "-0.12em" }} /> About an
          hour from Nagoya by rail.
        </h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "56ch", marginBottom: "1rem" }}>
          From Tokyo or Kyoto, take the Shinkansen to Nagoya first. From
          Nagoya, four <strong>Shinano limited expresses a day run direct
          to Nagiso</strong> — about one hour, arriving at 8:00, 11:00,
          16:00 and 20:43.
        </p>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "56ch" }}>
          At other times, take a limited express or rapid train to
          Nakatsugawa and change to a local train — Nakatsugawa to Nagiso
          is about 20 minutes.
        </p>
      </section>

      {/* THE THREE DAYS */}
      <section className="plans" id="days">
        <div className="plan">
          <div>
            <span className="plan-kicker">Day 1 · On foot</span>
            <h3>The Nakasendo, hands-free</h3>
            <div className="plan-ja">中山道を歩く</div>
            <p>
              Hand your bags to Izumiya Cafe by Nagiso Station in the
              morning — the <Link href="/luggage-shuttle">luggage
              shuttle</Link> runs them ahead while you walk. Borrow a{" "}
              <Link href="/gear">hinoki hat</Link> for the sun and take the
              old road to Tsumago, the post town that time skipped — and on
              over the pass toward Magome if your legs ask for more.
              Evening: the special-day hotpot back at the guesthouse
              (reserve ahead, below).
            </p>
          </div>
          <div className="plan-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/tsumago.jpg"
              alt="A zaru soba lunch on a bench along the preserved wooden street of Tsumago post town"
            />
          </div>
        </div>

        <div className="plan">
          <div>
            <span className="plan-kicker">Day 2 · By e-bike</span>
            <h3>Atera Gorge, the emerald day</h3>
            <div className="plan-ja">E-bikeで阿寺渓谷へ</div>
            <p>
              Rent an <Link href="/rental">e-bike</Link> (¥4,000/day), clip
              on the <Link href="/gear">bear spray</Link> — bell included —
              and ride down the valley to the Atera Gorge, where the water
              turns an emerald blue that looks edited. It isn&apos;t. Swim
              in the warm months; in the cooler ones it&apos;s the photo
              stop of your whole trip. The e-bike makes the way back a
              non-event.
            </p>
          </div>
          <div className="plan-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/tour/atera.jpg"
              alt="The impossibly blue water of the Atera Gorge beneath a rusted old forest-railway bridge"
            />
          </div>
        </div>

        <div className="plan">
          <div>
            <span className="plan-kicker">Day 3 · By train</span>
            <h3>Up the valley to Narai-juku</h3>
            <div className="plan-ja">電車で奈良井宿へ</div>
            <p>
              A rest day for the legs. Ride the JR Chuo Line up the valley
              to Narai-juku, one of the best-preserved post towns on the
              whole Nakasendo — a long wooden street near the source of the
              same river you rode beside yesterday. Want one more ride
              first? The two-hour{" "}
              <Link href="/guided#morning">early-morning guided tour</Link>{" "}
              (7:00–9:00) fits neatly before breakfast.
            </p>
            <a
              href={NARAI_MAP}
              target="_blank"
              rel="noopener noreferrer"
              className="stay-cta"
              style={{ marginTop: "1rem" }}
            >
              Torii Trail &amp; Narai — open the map <ExternalLink size={15} />
            </a>
          </div>
          <div className="img-wanted">
            <span className="iw-tag">Photo coming soon</span>
            <span className="iw-note">奈良井宿の町並み</span>
          </div>
        </div>
      </section>

      {/* THE BASE — rooms & meals */}
      <section className="mini-sec" id="base">
        <span className="eyebrow">Rooms &amp; meals</span>
        <h2>One bed, one table, three nights.</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "56ch", marginBottom: "1rem" }}>
          Rooms book directly on Kashiwaya&apos;s own site. Availability
          varies with the season — <strong>summer and winter are usually
          the easiest times to find three straight nights.</strong>
        </p>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "56ch", marginBottom: "2rem" }}>
          Meals are the guesthouse&apos;s special-day hotpot dinner and the
          ochazuke breakfast — reserved ahead through the order form, paid
          on the day. Photos and details are on the{" "}
          <Link href="/stay">Stay page</Link>.
        </p>
        <div className="pay-row">
          <a
            href={KASHIWAYA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            Book rooms at kashiwaya-inn.com <ExternalLink size={15} />
          </a>
          <a
            href={MEALS_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <UtensilsCrossed size={15} /> Reserve meals — order form
          </a>
        </div>
      </section>

      {/* ONE MESSAGE */}
      <div className="pay-sec">
        <div className="pay-notify">
          <p>
            <strong>
              Ready? Everything except the room fits in one WhatsApp
              message: dates, e-bike days, luggage, gear and tours — we
              reply in English, and confirm it all in one thread.
            </strong>
          </p>
          <a
            href={PLAN_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <MessageCircle size={16} /> Send the whole plan on WhatsApp
          </a>
        </div>
        <p className="pay-note">
          Rooms book on Kashiwaya&apos;s site above; meals go through the
          order form. Not sure about something? Send the message half-filled
          — a human answers.
        </p>
      </div>

      {/* MORE IDEAS */}
      <section className="mini-sec" id="more">
        <span className="eyebrow">Staying longer?</span>
        <h2>The valley holds more days than three.</h2>
        <Link href="/second-day" className="stay-cta">
          See the self-tour routes <ArrowRight size={15} />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
