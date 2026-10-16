import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, ExternalLink } from "lucide-react";
import {
  WHATSAPP_URL,
  MYMAP_EMBED_URL,
  MYMAP_VIEW_URL,
  HEART_MAP_EMBED_URL,
  HEART_MAP_VIEW_URL,
} from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export const metadata: Metadata = {
  title:
    "Self-Tour Advice: 5 Mapped E-Bike Routes in Nagiso | Beyond Nakasendo Cycling",
  description:
    "How to spend your second day in Nagiso, Kiso Valley: five self-guided e-bike routes with turn-by-turn Google Maps — a railway-side old road, a gorge-and-onsen ride, the Yogawa Nakasendo Challenge, a quiet back road into Tsumago, and the heart-shaped Sakashita–Magome Challenge.",
  alternates: { canonical: "/second-day" },
  openGraph: {
    type: "article",
    url: "https://nakasendo-ebike.com/second-day",
    siteName: "Beyond Nakasendo Cycling",
    title: "Self-Tour Advice: 5 Mapped E-Bike Routes in Nagiso",
    description:
      "Day one on foot, day two on wheels: five self-guided e-bike routes through the quiet side of the Kiso Valley, each drawn on Google My Maps.",
    locale: "en_US",
    images: ["/assets/gorge.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Self-Tour Advice: 5 Mapped E-Bike Routes in Nagiso",
  inLanguage: "en",
  about:
    "Five self-guided e-bike routes around Nagiso in the Kiso Valley, with route maps and seasonal advice",
  author: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  publisher: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  mainEntityOfPage: "https://nakasendo-ebike.com/second-day",
};

/** Line colors matching each course on the My Map below. */
const LINE = {
  train: "#6d4c41", // brown
  onsen: "#2fa8e0", // light blue
  challenge: "#e0568f", // pink
  tsumago: "#1e6b30", // green
  heart: "#d32f2f", // red (own map)
};

export default function SecondDayPage() {
  return (
    <div className="lp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      <FloatBook href={WHATSAPP_URL}>
        <MessageCircle size={18} /> Book on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Column · Self-tour advice · Nagiso, Kiso Valley</span>
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
          <h2>Five routes. All a little off the beaten track.</h2>
          <p>
            Open the route map on your
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
              <div className="map-line">
                <i style={{ background: LINE.train }} /> The brown line on
                the map below
              </div>
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
              <div className="map-line">
                <i style={{ background: LINE.onsen }} /> The light-blue line
                on the map below
              </div>
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
              <div className="map-line">
                <i style={{ background: LINE.challenge }} /> The pink line on
                the map below
              </div>
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
              <div className="map-line">
                <i style={{ background: LINE.tsumago }} /> The green line on
                the map below
              </div>
              <p>
                What used to be a forest-railway line is now a quiet paved road
                only locals know — running straight into Tsumago. Perfect for
                anyone who arrived at the post town too late the night before
                to explore it properly.
              </p>
            </div>
          </div>
        </div>

        <h3 className="tour-group-title">Heart-shaped loop · Nagiso → Nakatsugawa → Nagiso</h3>
        <div className="tour-grid">
          <div className="tour-card">
            <div className="top">
              <div className="img-wanted" style={{ minHeight: 0, height: "100%", borderRadius: 0, border: 0 }}>
                <span className="iw-tag">Photo coming soon</span>
              </div>
              <span className="lvl">Hard</span>
              <span className="season">Spring to Autumn</span>
            </div>
            <div className="body">
              <h3>Sakashita–Magome Challenge</h3>
              <div className="route">Heart-shaped loop · approx. 55 km · Hard</div>
              <div className="map-line">
                <i style={{ background: LINE.heart }} /> The red line on the
                heart map below
              </div>
              <p>
                Drawn on the map, this loop is a heart. Roll gently downhill
                from Nagiso through Sakashita all the way to Nakatsugawa,
                passing Naegi Castle ruins and a local ramen stop on the way.
                Then turn back northeast, climb through Magome post town and
                over Magome Pass on the old Nakasendo, dropping into Tsumago
                and home to Nagiso. Only want
                the downhill? Leave the bike at Nakatsugawa Station and take
                the train back — about 30 km, mostly descending.
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
            The first four courses above are drawn on this map in their own colors (the Sakashita–Magome Challenge has its own map below) — match
            the line tag on each card to the line on the map. Open it on
            your phone for turn-by-turn directions between our pick-up
            points.
          </p>
          <div className="map-legend">
            <span>
              <i style={{ background: LINE.train }} /> Train Lovers
            </span>
            <span>
              <i style={{ background: LINE.onsen }} /> Natural AC &amp; Onsen
            </span>
            <span>
              <i style={{ background: LINE.challenge }} /> Nakasendo
              Challenge
            </span>
            <span>
              <i style={{ background: LINE.tsumago }} /> Tsumago, Revisited
            </span>
          </div>
          <div className="map-embed">
            <iframe
              src={MYMAP_EMBED_URL}
              title="Kiso Valley e-bike route map"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <a
            href={MYMAP_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
            style={{ marginTop: "1.4rem" }}
          >
            Open the map in Google Maps <ExternalLink size={15} />
          </a>

          <h3 className="tour-group-title" style={{ marginTop: "2.4rem" }}>
            Sakashita–Magome Challenge (heart loop)
          </h3>
          <div className="map-embed">
            <iframe
              src={HEART_MAP_EMBED_URL}
              title="Sakashita–Magome Challenge route map"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <a
            href={HEART_MAP_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
            style={{ marginTop: "1.4rem" }}
          >
            Open the heart loop in Google Maps <ExternalLink size={15} />
          </a>
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
