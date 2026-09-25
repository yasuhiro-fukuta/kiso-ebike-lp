import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ExternalLink, Car, TrainFront } from "lucide-react";
import {
  KAKIZORE_WHATSAPP_URL,
  MYMAP_EMBED_URL,
  MYMAP_VIEW_URL,
} from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export const metadata: Metadata = {
  title:
    "Kakizore Gorge Map & Access — Parking, Train and E-bike | Beyond Nakasendo Cycling",
  description:
    "Kakizore Gorge map and access guide: the gorge has no large parking lot, so park at Tenpaku Park in Nagiso or take the train to Junikane Station, and cover the last stretch on a reserved e-bike. Emerald water in the Kiso Valley, Nagano, Japan.",
  alternates: { canonical: "/kakizore" },
  openGraph: {
    type: "article",
    url: "https://nakasendo-ebike.com/kakizore",
    siteName: "Beyond Nakasendo Cycling",
    title: "Kakizore Gorge Map & Access — Parking, Train and E-bike",
    description:
      "Where to park, which station to use, and how a reserved e-bike solves Kakizore's tiny-parking problem.",
    locale: "en_US",
    images: ["/assets/eyecatch.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kakizore Gorge Map & Access — Parking, Train and E-bike",
  inLanguage: "en",
  about:
    "How to access Kakizore Gorge in Nagiso, Japan: map, parking at Tenpaku Park, Junikane Station, and reserved e-bike rental",
  author: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  publisher: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  mainEntityOfPage: "https://nakasendo-ebike.com/kakizore",
};

export default function KakizorePage() {
  return (
    <div className="lp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      <FloatBook href={KAKIZORE_WHATSAPP_URL}>
        <MessageCircle size={18} /> Reserve on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Access column · Kakizore Gorge · 柿其渓谷</span>
        <h1>
          Kakizore Gorge: <em>map &amp; access, solved.</em>
        </h1>
        <p>
          Kakizore Gorge is the Kiso Valley&apos;s other emerald gorge — the
          quiet neighbor of famous Atera, with the same unreal blue-green
          water and a forest path to the Ushigataki waterfall. The only
          puzzle is getting in: the lanes are narrow and{" "}
          <strong>the gorge has no large parking lot</strong>. Here is the
          Kakizore map, and the access plan that skips the problem entirely.
        </p>
      </header>

      {/* THE MAP */}
      <section className="mini-sec" id="map">
        <span className="eyebrow">Kakizore map</span>
        <h2>The gorge, the trails, and both pick-up points.</h2>
        <div className="map-embed">
          <iframe
            src={MYMAP_EMBED_URL}
            title="Kakizore Gorge access map — Nagiso, Junikane and the gorge"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <a
          href={MYMAP_VIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="stay-cta"
        >
          Open the map in Google Maps <ExternalLink size={15} />
        </a>
      </section>

      {/* THE TWO WAYS IN */}
      <section className="mini-sec" id="access">
        <span className="eyebrow">Access</span>
        <h2>Two ways in — both end on an e-bike.</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "56ch", marginBottom: "2rem" }}>
          Instead of hunting for a space at the gorge, leave the car or the
          train where parking and platforms are easy, and let a reserved
          e-bike carry you the last stretch. The climb toward the gorge is
          the motor&apos;s job, not yours.
        </p>
        <div className="mini-grid cols2">
          <div className="mini-card">
            <h3>
              <Car size={20} /> Coming by car
            </h3>
            <p>
              Park at the <strong>Tenpaku Park parking lot</strong> in
              Nagiso — a large lot near Nagiso Station and the Momosuke
              Bridge. Your reserved e-bike is waiting there, and the narrow
              lanes to the gorge stop being your problem.
            </p>
          </div>
          <div className="mini-card">
            <h3>
              <TrainFront size={20} /> Coming by train
            </h3>
            <p>
              Take a JR Chuo Line local train to{" "}
              <strong>Junikane Station</strong> — the closest station to the
              gorge, one stop into the quiet. We hand your reserved e-bike
              over right at the station.
            </p>
          </div>
        </div>
      </section>

      {/* RESERVE */}
      <div className="pay-sec">
        <div className="pay-notify">
          <p>
            <strong>
              Reservation only — e-bikes are ¥4,000 a day, and we confirm
              your pick-up point and time on WhatsApp in English.
            </strong>
          </p>
          <a
            href={KAKIZORE_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <MessageCircle size={16} /> Reserve e-bikes for Kakizore
          </a>
        </div>
        <p className="pay-note">
          These are bear mountains: add a{" "}
          <Link href="/gear" style={{ color: "inherit" }}>
            bear spray (¥1,500, bell included)
          </Link>{" "}
          to the reservation. Pay on the day, card or cash.
        </p>
      </div>

      {/* MORE */}
      <section className="mini-sec" id="more">
        <span className="eyebrow">While you&apos;re here</span>
        <h2>Kakizore is one day. The valley holds three.</h2>
        <Link href="/plan" className="stay-cta">
          See the 3-night model plan <ExternalLink size={15} />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
