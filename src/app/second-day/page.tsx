"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { RENTAL_WHATSAPP_URL, MYMAP_EMBED_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export default function SecondDayPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={RENTAL_WHATSAPP_URL}>
        <MessageCircle size={18} /> Book on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Self-tour advice · Ride at your own pace</span>
        <h1>
          Three routes for <em>your second day in Nagiso.</em>
        </h1>
        <p>
          You walked the Nakasendo yesterday; don&apos;t leave at nine this
          morning. These are the three self-guided rides we hand our own
          friends — each mapped turn-by-turn for your phone, each reachable
          straight from the guesthouse door. Pick by season and by how hard
          you want to push, then <Link href="/rental">grab an e-bike</Link>{" "}
          and go.
        </p>
      </header>

      {/* THE THREE ROUTES */}
      <section className="tours" id="routes">
        <div className="tours-head">
          <span className="eyebrow">Choose your day</span>
          <h2>Three routes. All a little off the beaten track.</h2>
          <p>
            Every ride is a half day, 10:00–16:00. Open the route map on your
            phone for turn-by-turn directions between our pick-up points.
          </p>
        </div>
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
              <div className="price">
                <small>Easiest of the three · great for a first ride</small>
                <span className="price-note">Self-guided — e-bike ¥4,000 per bike</span>
              </div>
              <a href={RENTAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card-book">
                Book this ride <ArrowRight size={15} />
              </a>
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
              <div className="price">
                <small>River swims in summer · onsen in winter</small>
                <span className="price-note">Self-guided — e-bike ¥4,000 per bike</span>
              </div>
              <a href={RENTAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card-book">
                Book this ride <ArrowRight size={15} />
              </a>
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
              <div className="price">
                <small>Steep &amp; long · for confident riders only</small>
                <span className="price-note">Self-guided — e-bike ¥4,000 per bike</span>
              </div>
              <a href={RENTAL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="card-book">
                Book this ride <ArrowRight size={15} />
              </a>
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
