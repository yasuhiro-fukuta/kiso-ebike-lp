import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export const metadata: Metadata = {
  title:
    "A 26-Day Japan Itinerary for People Who Hate Crowds | Beyond Nakasendo Cycling",
  description:
    "A local's 26-day Japan itinerary for crowd-averse travelers: in and out of Chubu Centrair, a figure-eight around a Nagoya guesthouse base, onsen towns, the Nakasendo on foot and by e-bike, and only as much Tokyo as you actually need.",
  alternates: { canonical: "/crowd-free-japan" },
  openGraph: {
    type: "article",
    url: "https://nakasendo-ebike.com/crowd-free-japan",
    siteName: "Beyond Nakasendo Cycling",
    title: "A 26-Day Japan Itinerary for People Who Hate Crowds",
    description:
      "Adventure and discovery, not queues: a figure-eight route around Nagoya, designed by a rural-Japan traveler who moved to the Kiso Valley.",
    locale: "en_US",
    images: ["/assets/eyecatch.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A 26-Day Japan Itinerary for People Who Hate Crowds",
  inLanguage: "en",
  about:
    "A 26-day off-the-beaten-path Japan itinerary based in Nagoya, including the Nakasendo, Kiso Valley, onsen towns and the Japan Alps",
  author: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  publisher: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  mainEntityOfPage: "https://nakasendo-ebike.com/crowd-free-japan",
};

const DAYS: { d: string; text: React.ReactNode; ours?: boolean }[] = [
  {
    d: "Day 1",
    text: "Land at Chubu Centrair International Airport. Sleep at the airport hotel — no heroics on arrival day.",
  },
  {
    d: "Day 2",
    text: "Meitetsu μSKY to Nagoya Station, JR to Ozone. Check in at Fukuchan House, a small guesthouse — dinner and conversation with the master at a local izakaya. Leave a chunk of your luggage here: this is your base.",
  },
  {
    d: "Day 3",
    text: "Traveling light now. Back through Nagoya Station and up to Gero Onsen. A night at Suimeikan.",
  },
  {
    d: "Day 4",
    text: "Gero to Takayama. Hida beef and local sake, done properly. Stay at the Green Hotel.",
  },
  {
    d: "Day 5",
    text: "Bus from Takayama to see Shirakawa-go, then onward to Kanazawa.",
  },
  { d: "Day 6", text: "Awara Onsen." },
  { d: "Days 7–8", text: "Kyoto." },
  { d: "Days 9–10", text: "Osaka." },
  { d: "Day 11", text: "Koyasan." },
  { d: "Day 12", text: "Nara." },
  { d: "Day 13", text: "Ise Grand Shrine." },
  {
    d: "Days 14–15",
    text: "Return to Fukuchan House for a breather. Swap the luggage — laundry, repack, reset.",
  },
  {
    d: "Day 16",
    text: (
      <>
        JR to Nakatsugawa, bus to Magome, then walk the Nakasendo over the
        pass through Tsumago to Nagiso. Sleep in Nagiso.
      </>
    ),
    ours: true,
  },
  {
    d: "Day 17",
    text: (
      <>
        E-bike from Nagiso to Nojiri with your bags carried ahead — that is
        exactly what our{" "}
        <Link href="/shuttle-ebike">Shuttle E-Bike Package</Link> does — then
        catch the train up to Yabuhara.
      </>
    ),
    ours: true,
  },
  {
    d: "Day 18",
    text: (
      <>
        Walk the Torii Pass from Yabuhara Station, take your time in
        Narai-juku, walk on through Kiso-Hirasawa and Niekawa-juku with its
        old checkpoint, and after lunch ride the train to Matsumoto.
      </>
    ),
    ours: true,
  },
  {
    d: "Day 19",
    text: "Matsumoto Castle in the morning, bus to Kamikochi for the afternoon, back to Matsumoto for one more night.",
  },
  {
    d: "Day 20",
    text: "Matsumoto to Nagano. Zenkoji temple, and a night in the temple town.",
  },
  { d: "Days 21–23", text: "Shinkansen to Tokyo." },
  {
    d: "Day 24",
    text: "Shinkansen back to Nagoya. One more night at Fukuchan House.",
  },
  {
    d: "Day 25",
    text: "Collect the rest of your luggage at Fukuchan House. Sleep at Centrair.",
  },
  { d: "Day 26", text: "Fly home." },
];

export default function CrowdFreeJapanPage() {
  return (
    <div className="lp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      <FloatBook href={WHATSAPP_URL}>
        <MessageCircle size={18} /> Ask on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Column · a personal itinerary</span>
        <h1>
          Japan, for people who <em>hate crowds.</em>
        </h1>
        <p>
          What is tourism, really? My answer: stepping outside your daily
          orbit, reaching somewhere that still has its authenticity — and
          being able to come home. Is a trip to Japan like that today? Not
          always. Every so often I hear it from visitors:{" "}
          <em>&ldquo;I didn&apos;t fly across the world to look at other
          tourists.&rdquo;</em>
        </p>
      </header>

      {/* THE ESSAY */}
      <section className="mini-sec" id="why">
        <span className="eyebrow">The idea</span>
        <h2>Adventure and discovery, not queues.</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch", marginBottom: "1rem" }}>
          Not the ready-made attractions that big capital builds to absorb
          tourists by the busload — but places that aren&apos;t in the
          travel magazines, found by yourself, bicycle to bicycle, and the
          encounters waiting there. With safety and a baseline of comfort
          secured, the further you get from the everyday, the better. I was
          a traveler myself, and rural Japan was all I ever traveled — for
          exactly this reason.
        </p>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch" }}>
          So I asked myself: if I lived overseas and were planning a trip to
          Japan, what would I actually draw up? I went back to first
          principles and designed a 26-day journey.
        </p>
      </section>

      {/* THE CONCEPT */}
      <section className="mini-sec" id="concept">
        <span className="eyebrow">The concept</span>
        <h2>A figure eight around Nagoya.</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch" }}>
          Fly in and out of Chubu Centrair, and travel east and west of
          Nagoya in a figure-eight. Your luggage lives at a small guesthouse
          in Nagoya, and you swap its contents each time the loop brings you
          back — so you travel light, always. Every leg picks the route and
          mode that gets the most out of public transport.
        </p>
      </section>

      {/* THE 26 DAYS */}
      <section className="mini-sec" id="days">
        <span className="eyebrow">The 26 days</span>
        <h2>The itinerary, day by day.</h2>
        <ul className="itin-list">
          {DAYS.map((day) => (
            <li key={day.d} className={day.ours ? "ours" : undefined}>
              <b>{day.d}</b>
              {day.text}
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch", marginTop: "1.6rem", fontSize: "0.9rem" }}>
          The gold days are our home valley — the quiet heart of the whole
          route.
        </p>
      </section>

      {/* OUR DAYS */}
      <div className="pay-sec">
        <div className="pay-notify">
          <p>
            <strong>
              Days 16–18 are where we live. The walk from Magome, the
              hands-free e-bike leg to Nojiri, the Torii Pass to Narai — we
              run the bikes, the luggage and the beds for exactly this
              stretch.
            </strong>
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <MessageCircle size={16} /> Plan your Kiso days on WhatsApp
          </a>
        </div>
        <p className="pay-note">
          Staying longer in the valley instead? The{" "}
          <Link href="/plan" style={{ color: "inherit" }}>
            3-night model plan
          </Link>{" "}
          slows these three days down to a walking pace.
        </p>
      </div>

      {/* MORE */}
      <section className="mini-sec" id="more">
        <span className="eyebrow">More columns</span>
        <h2>Keep reading, keep leaving the crowds.</h2>
        <Link href="/kakizore" className="stay-cta">
          Kakizore Gorge: Map &amp; Access <ArrowRight size={15} />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
