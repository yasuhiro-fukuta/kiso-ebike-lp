import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  TrainFront,
  Map,
  Brush,
  Shirt,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export const metadata: Metadata = {
  title: "Explore the Area — Nagiso & the Kiso Valley | Beyond Nakasendo Cycling",
  description:
    "Everything to do around Nagiso in the Kiso Valley: the Atera and Kakizore gorges, three mapped self-tour e-bike routes, shodo calligraphy, outdoor gear rental, and our columns for trip planning.",
  alternates: { canonical: "/explore" },
  openGraph: {
    type: "website",
    url: "https://nakasendo-ebike.com/explore",
    siteName: "Beyond Nakasendo Cycling",
    title: "Explore the Area — Nagiso & the Kiso Valley",
    description:
      "Gorges, self-tour routes, calligraphy, gear and local know-how around Nagiso, Kiso Valley.",
    locale: "en_US",
    images: ["/assets/gorge.jpg"],
  },
};

const CARDS = [
  {
    href: "/atera-gorge",
    icon: Waves,
    title: "Atera Gorge",
    desc: "The impossibly blue river locals call “Atera Blue” — how to reach it by train & e-bike, no traffic, no parking queues.",
  },
  {
    href: "/kakizore",
    icon: TrainFront,
    title: "Kakizore Gorge",
    desc: "Emerald pools and a forgotten forest railway. Map & access from Junikane Station.",
  },
  {
    href: "/second-day",
    icon: Map,
    title: "Self-Tour Routes",
    desc: "Three mapped e-bike routes for your second day in Nagiso — gorge, post town, or the full Nakasendo Challenge.",
  },
  {
    href: "/shodo",
    icon: Brush,
    title: "Shodo Calligraphy",
    desc: "Brush, ink and an hour of quiet — a calligraphy experience at the guesthouse.",
  },
  {
    href: "/gear",
    icon: Shirt,
    title: "Gear Rental",
    desc: "Woven Kiso hats, bear bells & spray, swim and winter kit — one item at a time.",
  },
  {
    href: "/crowd-free-japan",
    icon: BookOpen,
    title: "Columns",
    desc: "Longer reads: a 26-day crowd-free Japan itinerary, a first snowboard winter route, and more below.",
  },
];

export default function ExplorePage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={WHATSAPP_URL}>
        <MessageCircle size={18} /> Book on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Nagiso · Kiso Valley</span>
        <h1>
          Explore <em>the area.</em>
        </h1>
        <p>
          Two gorges within a morning&apos;s reach, quiet roads mapped for
          e-bikes, and a few slow pleasures for rainy hours. This page is the
          map of everything around the ride — each link goes one level
          deeper.
        </p>
      </header>

      {/* DIRECTORY */}
      <section className="mini-sec" id="directory">
        <div className="mini-grid">
          {CARDS.map((c) => (
            <Link key={c.href} href={c.href} className="mini-card">
              <h3>
                <c.icon size={20} /> {c.title}
              </h3>
              <p>{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* COLUMN LIST */}
      <section className="mini-sec" id="columns">
        <span className="eyebrow">Columns</span>
        <h2>Longer reads.</h2>
        <div className="sub-entries">
          <Link href="/atera-gorge">Atera Gorge by Train &amp; E-Bike</Link>
          <Link href="/kakizore">Kakizore Gorge: Map &amp; Access</Link>
          <Link href="/second-day">Self-Tour Advice: 3 Mapped Routes</Link>
          <Link href="/crowd-free-japan">Crowd-Free Japan: a 26-Day Itinerary</Link>
          <Link href="/snowboard-route">Learn in Achi, Graduate in Hakuba</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
