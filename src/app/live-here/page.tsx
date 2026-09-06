"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, PHONE, PHONE_TEL, SUPPORT_MAILTO } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export default function LiveHerePage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={WHATSAPP_URL}>
        <MessageCircle size={18} /> Ask on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">From visitor to villager</span>
        <h1>
          Come for the ride. <em>Stay for the life.</em>
        </h1>
        <p>
          Here&apos;s the part we don&apos;t put on the brochures: the person
          handing you the e-bike arrived in this valley as a traveler too —
          and never quite left. It happens more often than you&apos;d think.
          So if somewhere between the river and the old road you catch
          yourself wondering what living here would feel like, you&apos;re
          not being silly. You&apos;re being early. And we can help with what
          comes next.
        </p>
      </header>

      {/* THE PATHWAY */}
      <section className="drop-sec" id="pathway">
        <div className="drop-inner">
          <span className="eyebrow">The pathway</span>
          <h2>
            Nobody moves to a valley. <em>They return to one.</em>
          </h2>
          <p>
            Every local we know who started as a tourist took roughly the
            same three steps. We&apos;ve simply turned them into a service.
          </p>
          <div className="drop-steps">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>Visit</h3>
              <p>
                Ride the valley, sleep at{" "}
                <Link href="/stay" style={{ color: "var(--gold)" }}>
                  Kashiwaya
                </Link>
                , talk to people. This is the step you might be on right now.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>Come back for a season</h3>
              <p>
                Tourism and farming here run on seasonal hands. Work a
                season, live in our seasonal-worker rental, and find out what
                the valley is like on a Tuesday in the rain.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>Stay for good</h3>
              <p>
                If the season fits, we&apos;ll make the introductions —
                landlords, employers, the town hall, the neighbors. The
                doors here open much faster with a local knocking beside you.
              </p>
            </div>
          </div>
          <p className="drop-note">
            No forms, no program, no fee for the advice — this is a village
            thing, not a product. It starts with a message.
          </p>
        </div>
      </section>

      {/* SEASONAL RENTAL */}
      <section className="mini-sec" id="rental">
        <span className="eyebrow">Seasonal-worker rental</span>
        <h2>A place to live, for the length of a season.</h2>
        <div className="pricing">
          <div className="pitem">
            <h4>What it is</h4>
            <div className="amt">2 houses</div>
            <p>
              Two furnished places in Nagiso — <strong>Aoki</strong> and{" "}
              <strong>Ono</strong> — for people here to work a season.
              Rented by the month, without the paperwork wall that usually
              blocks short-term newcomers.
            </p>
          </div>
          <div className="pitem">
            <h4>Who it&apos;s for</h4>
            <div className="amt">Workers</div>
            <p>
              Seasonal staff in tourism, agriculture and forestry — and
              serious try-before-you-move types who&apos;ve lined up a
              season&apos;s work here.
            </p>
          </div>
          <div className="pitem">
            <h4>Rates &amp; dates</h4>
            <div className="amt">Ask us</div>
            <p>
              Availability moves with the seasons, so message us on WhatsApp
              with your dates and we&apos;ll give you the current rate and
              what&apos;s open.
            </p>
          </div>
        </div>
      </section>

      {/* THE HOUSES */}
      <section className="stay-cards" id="houses">
        <div className="stay-card">
          <div className="stay-photos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/midono101.jpg"
              alt="The Aoki house — a one-storey house with indigo-blue doors and a tiled roof, looking out over the valley"
            />
          </div>
          <div className="stay-body">
            <span className="stay-badge">Seasonal rental</span>
            <h3>Aoki</h3>
            <p>
              The first of the two houses. Furnished and rented by the
              month — photos and details are on their way, and the current
              rate and availability are one WhatsApp message away.
            </p>
          </div>
        </div>

        <div className="stay-card">
          <div className="stay-photos">
            <div className="img-wanted">
              <span className="iw-tag">Photo wanted</span>
              <span className="iw-note">Ono 外観・内観の写真</span>
            </div>
          </div>
          <div className="stay-body">
            <span className="stay-badge">Seasonal rental</span>
            <h3>Ono</h3>
            <p>
              The second house. Same deal: monthly, furnished, no paperwork
              wall. Tell us your season and we&apos;ll tell you which of the
              two fits it better.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="booking" id="book">
        <span className="eyebrow">How to start · via WhatsApp</span>
        <h2>
          One message, <em>a decade early.</em>
        </h2>
        <p>
          Tell us where you are on the path — just curious, hunting for a
          season of work, or ready to look at rooms — and we&apos;ll answer
          honestly, including the unglamorous parts of valley life.
        </p>

        <div className="square-embed">
          <a
            href={WHATSAPP_URL}
            className="booking-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Start the conversation
          </a>
        </div>

        <p className="booking-alt">
          Or call or text <a href={PHONE_TEL}>{PHONE}</a>, or{" "}
          <a href={SUPPORT_MAILTO}>email us</a>.
        </p>
      </section>

      {/* WHY HERE BAND */}
      <section className="hub-band">
        <div className="hub-band-inner">
          <span className="eyebrow">Fair warning</span>
          <h2>
            The valley doesn&apos;t recruit. <em>It keeps.</em>
          </h2>
          <p>
            We won&apos;t sell you a countryside dream — winters are real,
            the last train leaves early, and everyone will know your name by
            Thursday. But if that list reads like a feature list to you,
            start with a visit and see how it sits.
          </p>
          <Link href="/second-day" className="band-cta">
            Spend a proper second day here <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
