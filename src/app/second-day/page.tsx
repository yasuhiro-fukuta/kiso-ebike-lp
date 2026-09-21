"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, MYMAP_EMBED_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export default function SecondDayPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={WHATSAPP_URL}>
        <MessageCircle size={18} /> Book on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Self-tour advice · Nagiso, Kiso Valley</span>
        <h1>
          The Nakasendo is <em>the doorway — not the valley.</em>
        </h1>
        <p>
          Most travelers pass straight through: walk Magome to Tsumago,
          sleep once, roll on to Kyoto. But this valley holds far more than
          one trail. Ask the people who first came here as tourists and
          ended up moving here for good — me included — and most will name
          the same two things that hooked them: <b>the river, and
          cycling</b>. So here&apos;s our proposal — day one on foot, day
          two on wheels. Walk the old road as everyone does; then, instead
          of leaving at nine, ride down the river, into the gorges, past
          the post towns the tour buses never reach.
        </p>
      </header>

      {/* THE THREE ROUTES */}
      <section className="tours" id="routes">
        <div className="tours-head">
          <span className="eyebrow">Choose your day</span>
          <h2>Four routes. All a little off the beaten track.</h2>
          <p>
            Every ride is a half day, 10:00–16:00. Open the route map on your
            phone for turn-by-turn directions between our pick-up points.
          </p>
        </div>

        <h3 className="tour-group-title">One way · Nagiso → Nojiri</h3>
        <div className="tour-grid">
          <div className="tour-card">
            <div className="top">
              <div className="img-wanted" style={{ minHeight: 0, height: "100%", borderRadius: 0, border: 0 }}>
                <span className="iw-tag">Photo coming soon</span>
              </div>
              <span className="lvl">Easy</span>
              <span className="season">All seasons</span>
            </div>
            <div className="body">
              <h3>Train Lovers</h3>
              <div className="route">All seasons · Easy</div>
              <p>
                The truly old Nakasendo — the road that predates even the
                Yogawa bypass of around 1761. Paved now, but nearly
                traffic-free and comfortable. It&apos;s also a hidden winter
                favorite of Japan&apos;s railway fans: you ride alongside
                the JR line, and with luck you&apos;ll catch the best shot
                of the Shinano limited express.
              </p>
            </div>
          </div>

          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/gorge.jpg" alt="Emerald gorge with clear river and boulders" />
              <span className="lvl">Moderate</span>
              <span className="season">Summer &amp; Early Winter</span>
            </div>
            <div className="body">
              <h3>Natural AC &amp; Onsen</h3>
              <div className="route">Best in Summer &amp; Early Winter · Moderate</div>
              <p>
                The Yogawa trail is beautiful, but brutal in summer heat. The
                opposite bank has rice paddy roads, an easy pass, and a narrow
                road linking two stunning waterfalls. Grab a rashguard from our{" "}
                <Link href="/gear">gear rental</Link>, then dive into the gorge
                to cool off. There&apos;s an onsen at the end of the road — in
                winter, dive into that instead.
              </p>
            </div>
          </div>

          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/challengers.jpg" alt="Waterfall shower in the Atera river canyon" />
              <span className="lvl">Hard</span>
              <span className="season">For the fit</span>
            </div>
            <div className="body">
              <h3>Nakasendo Challenge</h3>
              <div className="route">Yogawa-trail crossing · Hard</div>
              <p>
                The Yogawa trail, said to be the most beautiful stretch of the
                entire Nakasendo. No shops along the way, slightly longer with
                more elevation than Magome Pass — for confident riders only. We
                ride the narrow paved road that runs alongside this old
                route. For those with the legs for it.
              </p>
            </div>
          </div>
        </div>

        <h3 className="tour-group-title">Loops around Nagiso</h3>
        <div className="tour-grid">
          <div className="tour-card">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/tsumago.jpg" alt="Tsumago post town street at dusk" />
              <span className="lvl">Easy</span>
              <span className="season">Spring &amp; Autumn</span>
            </div>
            <div className="body">
              <h3>Tsumago, Revisited</h3>
              <div className="route">Best in Spring &amp; Autumn · Easy</div>
              <p>
                What used to be a forest-railway line is now a quiet paved road
                only locals know — running straight into Tsumago. Perfect for
                anyone who arrived at the post town too late the night before
                to explore it properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTE MAPS */}
      <section className="routemaps" id="maps">
        <div className="routemaps-inner">
          <span className="eyebrow">Find your way</span>
          <h2>Route maps</h2>
          <p>
            Here are the routes we&apos;ve mapped out. Open any of them on your
            phone for turn-by-turn directions between our pick-up points.
          </p>
          <div className="map-embed">
            <iframe
              src={MYMAP_EMBED_URL}
              title="Kiso Valley e-bike route map"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      {/* WHAT YOU NEED */}
      <section className="hub-band">
        <div className="hub-band-inner">
          <span className="eyebrow">Ready to roll</span>
          <h2>
            The routes are free. <em>The bike is the ticket.</em>
          </h2>
          <p>
            Rent an e-bike (¥4,000 per bike, one-way drops welcome), add bear
            gear or a rashguard from the gear rental, and let the luggage
            shuttle carry your bags while you ride.
          </p>
          <Link href="/rental" className="band-cta">
            Rent an e-bike <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
