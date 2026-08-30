"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import { KASHIWAYA_URL, RENTAL_WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export default function StayPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={RENTAL_WHATSAPP_URL}>
        <MessageCircle size={18} /> Book on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Stay in Nagiso</span>
        <h1>
          Sleep in the valley. <em>Better: sleep here twice.</em>
        </h1>
        <p>
          The rides, the rivers and the quiet old highway all start at our
          door — and the post town is at its best in the early morning and
          evening, when the day-trippers are gone. Stay a night to see it;
          stay two to <Link href="/second-day">actually live it</Link>.
        </p>
      </header>

      {/* STAY OPTIONS */}
      <section className="stay-cards">
        {/* KASHIWAYA */}
        <div className="stay-card">
          <div className="stay-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/kashiwaya.jpg"
              alt="Kashiwaya Guesthouse — an old two-storey wooden inn with indigo noren curtains, Nagiso"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/breakfast.jpg"
              alt="Kashiwaya's self-serve breakfast tray with beeswax-wrapped bowls and instructions"
            />
          </div>
          <div className="stay-body">
            <span className="stay-badge">Open now</span>
            <h3>Kashiwaya Guesthouse</h3>
            <p>
              An old wooden guesthouse in Nagiso, run by the same people who
              hand you the e-bikes — so your bags, your bike and your bed are
              all one conversation. Wake up steps from the river and roll
              straight into any of the second-day plans.
            </p>
            <p>
              Rooms and rates live on Kashiwaya&apos;s own site — check dates
              there, then come back and plan the days around it.
            </p>
            <a
              href={KASHIWAYA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="stay-cta"
            >
              Check dates at kashiwaya-inn.com <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* SECOND HOUSE — COMING */}
        <div className="stay-card">
          <div className="stay-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/kitahara.jpg"
              alt="The old house in Kitahara we are restoring into a one-group stay, at dusk"
            />
          </div>
          <div className="stay-body">
            <span className="stay-badge soon">Coming 2027</span>
            <h3>A whole old house, to yourselves</h3>
            <p>
              We&apos;re restoring a second kominka — a traditional wooden
              house — as a private, one-group-per-night stay. Built for
              riders: park the bikes inside, dry your gear by the stove, roll
              out the door onto the valley roads.
            </p>
            <div className="stay-perk">
              <strong>The multi-night deal:</strong> stay consecutive nights
              and the e-bikes are free for the daytime from your second night
              onward. The longer you stay, the more valley you get.
            </div>
            <p>
              Details and opening dates will appear here first — or ask us on
              WhatsApp and we&apos;ll keep you posted.
            </p>
          </div>
        </div>
      </section>

      {/* WHY STAY BAND */}
      <section className="hub-band">
        <div className="hub-band-inner">
          <span className="eyebrow">Why base yourself here</span>
          <h2>
            One bed, three valleys, <em>zero logistics.</em>
          </h2>
          <p>
            A luggage shuttle between the stations and the guesthouse.
            E-bikes at the door. The Yogawa-michi, Kakizore and Atera valleys
            all within a morning&apos;s reach — and someone local to tell you,
            honestly, which one fits tomorrow&apos;s weather.
          </p>
          <Link href="/second-day" className="band-cta">
            Plan your second day <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
