import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ATERA_EN_WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title:
    "Atera Gorge by Train & E-Bike — Skip the Traffic | Beyond Nakasendo Cycling",
  description:
    "The best way to reach the Atera Gorge (Okuwa, Nagano) and its miraculous 'Atera Blue' water: no traffic jams, no parking queues. Take the JR Chuo Line to Nojiri Station, let an e-bike do the climb, and dive in. Train access from Tokyo, Nagoya and Osaka plus how to reserve.",
  alternates: { canonical: "/atera-gorge" },
  openGraph: {
    type: "article",
    url: "https://nakasendo-ebike.com/atera-gorge",
    siteName: "Beyond Nakasendo Cycling",
    title: "Atera Gorge by Train & E-Bike — Skip the Traffic",
    description:
      "Reach the miraculous blue water of the Atera Gorge with no traffic and no parking stress: train to Nojiri Station, then an e-bike up the hill.",
    locale: "en_US",
    images: ["/assets/gorge.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Atera Gorge by Train & E-Bike — Skip the Traffic",
  inLanguage: "en",
  about:
    "How to access the Atera Gorge in the Kiso Valley by train and e-bike from Nojiri Station",
  author: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  publisher: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  mainEntityOfPage: "https://nakasendo-ebike.com/atera-gorge",
};

export default function AteraGorgePage() {
  return (
    <div className="lp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      <FloatBook href={ATERA_EN_WHATSAPP_URL}>
        <MessageCircle size={18} /> Reserve on WhatsApp
      </FloatBook>

      {/* HERO */}
      <header className="atera-hero">
        <div className="atera-hero-inner">
          <span className="eyebrow">Access guide · Atera Gorge · Kiso</span>
          <h1>
            Atera Gorge: come by <em>train &amp; e-bike!</em>
          </h1>
          <p>
            A miraculously blue river — locals call the transparent current
            &ldquo;Atera Blue&rdquo;, and every year more people come to see
            it with their own eyes.
          </p>
        </div>
      </header>

      <main className="atera-body">
        <div className="atera-ph">
          [ Photo: the summer traffic jam and the full car park ]
        </div>

        <p>
          Popularity has a price, though.{" "}
          <strong>
            On summer weekends and during the Obon holidays, the road to the
            gorge jams up and the car parks overflow
          </strong>{" "}
          — you can end up queueing in traffic right in front of the clear
          water you came for.
        </p>

        <h2>Our recommendation: train and e-bike!</h2>
        <p>
          The nearest station is Nojiri, on the JR Chuo Main Line. Getting
          there:
        </p>
        <ul>
          <li>
            <strong>From Tokyo</strong> — limited express from Shinjuku to
            Shiojiri, then a local train down to Nojiri.
            <br />
            <small>
              * At Shiojiri you can taste local Shiojiri wine right inside
              the station building — enjoy the transfer time too.
            </small>
          </li>
          <li>
            <strong>From Osaka &amp; Nagoya</strong> — the Shinano limited
            express from Nagoya Station to Nakatsugawa, then a local train
            to Nojiri.
          </li>
        </ul>

        <div className="atera-note">
          On foot it&apos;s a real slog — the famous Tanuki-ga-buchi pool
          inside the gorge is a{" "}
          <strong>30-minute uphill walk from the car park at the foot</strong>
          , and Nojiri Station to the foot is{" "}
          <strong>another 40 minutes on foot</strong>. Taxis are hard to
          catch out here, too.
        </div>

        <h2>Enter the e-bike!</h2>

        <figure>
          <img
            src="/assets/ebike.jpg"
            alt="A pedal-assist e-bike"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Electric assist makes the hills feel flat
          </figcaption>
        </figure>

        <p>
          Pick it up at Nojiri Station, cross the bridge, float up the climb —
        </p>

        <figure>
          <img
            src="/assets/riders.jpg"
            alt="Riding e-bikes through a Kiso hamlet"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Through the hamlet and up to the gorge — the assist handles the
            uphill
          </figcaption>
        </figure>

        <p>— and dive straight into the Atera Gorge!</p>

        <div className="atera-ph">[ Photo: enjoying the Atera Blue ]</div>

        <h2>The way back is easy, too</h2>
        <p>
          After your swim, change at the changing space at the foot of the
          gorge —
        </p>

        <figure>
          <img
            src="/assets/atera-so.jpg"
            alt="An e-bike parked at Atera-so at the foot of the gorge"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Atera-so at the foot offers day-use onsen baths (closed
            Wednesdays)
          </figcaption>
        </figure>

        <p>
          — then wait for the train (one every two hours) over a slow coffee
          at the stylish cafe near the station. That waiting time is part of
          what makes a train trip good.
        </p>
        <p>
          <strong>
            If you want the Atera Gorge without the driving and the crowds,
            this is the way we genuinely recommend!
          </strong>
        </p>

        <div className="atera-note">
          E-bikes are <strong>reservation only</strong> (¥4,000 per bike per
          day). Message us on WhatsApp{" "}
          <strong>by the day before</strong> with your date and number of
          bikes — hand-over at Nojiri Station can be arranged.
        </div>

        <div className="atera-cta-row">
          <a
            href={ATERA_EN_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="special-cta"
          >
            <MessageCircle size={18} /> Reserve on WhatsApp
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
