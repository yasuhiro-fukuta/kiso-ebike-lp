import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export const metadata: Metadata = {
  title:
    "Learn in Achi, Graduate in Hakuba — A Winter Route for First-Time Snowboarders | Beyond Nakasendo Cycling",
  description:
    "A winter route through Nagano for people who have never touched a snowboard: learn on the quiet beginner slopes of Heavens Sonohara from Hirugami Onsen, rest your legs walking the snowy Nakasendo from Magome to Tsumago with a night at Kashiwaya, then graduate to Hakuba, Nozawa or Akakura powder.",
  alternates: { canonical: "/snowboard-route" },
  openGraph: {
    type: "article",
    url: "https://nakasendo-ebike.com/snowboard-route",
    siteName: "Beyond Nakasendo Cycling",
    title: "Learn in Achi, Graduate in Hakuba — A Winter Route for First-Time Snowboarders",
    description:
      "Start small in southern Nagano, rest on the snowy Nakasendo, and save the famous powder for the end — when you can actually enjoy it.",
    locale: "en_US",
    images: ["/assets/eyecatch.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Learn in Achi, Graduate in Hakuba — A Winter Route for First-Time Snowboarders",
  inLanguage: "en",
  about:
    "A Nagano winter itinerary for first-time snowboarders: Heavens Sonohara from Hirugami Onsen, a rest day on the snowy Nakasendo at Kashiwaya in Nagiso, then Hakuba, Nozawa or Akakura",
  author: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  publisher: { "@type": "Organization", name: "Beyond Nakasendo Cycling" },
  mainEntityOfPage: "https://nakasendo-ebike.com/snowboard-route",
};

const STAGES: { d: string; text: string; ours?: boolean }[] = [
  {
    d: "Stage 1 · 1 night",
    text: "Hirugami Onsen — arrive from Centrair by bus, onsen evening.",
  },
  {
    d: "Stage 1 · 3 nights",
    text: "Hirugami Onsen — learn at Heavens Sonohara, stargazing at night.",
  },
  {
    d: "Stage 2 · 1 night",
    text: "Kashiwaya, Nagiso — walk Magome to Tsumago in the snow.",
    ours: true,
  },
  {
    d: "Stage 3 · 3 nights",
    text: "Hakuba, Nozawa or Akakura — ride big-resort powder.",
  },
  {
    d: "Stage 3 · 1 night",
    text: "Togakushi — shrine forest, soba, onsen.",
  },
  {
    d: "Stage 3 · a few nights",
    text: "Tokyo — city time before your flight.",
  },
];

export default function SnowboardRoutePage() {
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
        <span className="eyebrow">Column · a winter route for first-timers</span>
        <h1>
          Learn in Achi, <em>graduate in Hakuba.</em>
        </h1>
        <p>
          If you have never stood on a snowboard, Hakuba and Nozawa are the
          wrong place to begin. They are world-class resorts built for
          people who already ride, and their size is the problem: dozens of
          lifts, branching runs, and a real chance of ending up at the top
          of a slope you cannot get down.
        </p>
      </header>

      {/* WHY */}
      <section className="mini-sec" id="why">
        <span className="eyebrow">The idea</span>
        <h2>Don&apos;t start where the experts ski.</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch" }}>
          First-timers need something different: gentle slopes that are
          neither flat nor steep, wide runs with room to fall, a view from
          top to bottom so you never get lost, and fewer people. So this
          route starts small, in a quiet corner of southern Nagano, and
          saves the famous powder for the end of the trip, when you can
          actually enjoy it.
        </p>
      </section>

      {/* STAGE 1 */}
      <section className="mini-sec" id="stage1">
        <span className="eyebrow">Stage 1 · 4 nights</span>
        <h2>Learn in Achi.</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch", marginBottom: "1rem" }}>
          Fly into Chubu Centrair, head to Nagoya, and take the Meitetsu
          highway bus from the Meitetsu Bus Center straight to Hirugami
          Onsen. No car, no transfers in the mountains: in under two hours
          you are soaking in a hot spring known for water so smooth it
          feels like lotion.
        </p>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch", marginBottom: "1rem" }}>
          Your classroom is Heavens Sonohara, a short shuttle ride from the
          onsen town (book the shuttle online). Two things make it ideal
          for beginners. Snowboarding has been fully open here only since
          the 2025–26 season, so it is not yet crowded with riders. And you
          reach the slopes by gondola, which means you can sit down with
          your board on your lap instead of fighting a fast chairlift on
          day one.
        </p>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch" }}>
          Spend three days on the gentle beginner run, take a lesson, fall
          a lot, and go home to the onsen every afternoon. At night, ride
          the same gondola back up for a stargazing tour. Achi Village
          calls itself the place with the best starry sky in Japan, and on
          a clear winter night it is hard to argue.
        </p>
      </section>

      {/* STAGE 2 */}
      <section className="mini-sec" id="stage2">
        <span className="eyebrow">Stage 2 · 1 night</span>
        <h2>Rest your legs on the old Nakasendo.</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch", marginBottom: "1rem" }}>
          After three days of falling, your body will want a break. This is
          where <Link href="/stay">Kashiwaya</Link>, our 140-year-old
          guesthouse in Nagiso, comes in. Ask us about a pickup from
          Hirugami: we take your suitcase and board, and you travel light.
        </p>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch", marginBottom: "1rem" }}>
          Drop your bags at Kashiwaya, slip a pair of spikes over your
          sneakers and walk the Nakasendo from Magome to Tsumago. In summer
          this is one of Japan&apos;s busiest trails. In winter it is
          quiet, with snow on the stone paths, smoke from farmhouse
          chimneys, and post towns that look the way they did two centuries
          ago.
        </p>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch" }}>
          Finish in Tsumago and spend the night at Kashiwaya, where your
          bags are waiting. Your riding muscles get a rest, different ones
          get a workout, and you see a side of Japan that no ski resort can
          show you.
        </p>
      </section>

      {/* STAGE 3 */}
      <section className="mini-sec" id="stage3">
        <span className="eyebrow">Stage 3 · 4 nights, then Tokyo</span>
        <h2>Graduate in the big leagues.</h2>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch", marginBottom: "1rem" }}>
          From Nagiso or nearby Nakatsugawa, take the Shinano limited
          express to Nagano Station and pick your graduation stage: Hakuba,
          Nozawa Onsen, or Akakura. Now you can link your turns, so the
          endless runs that would have scared you a week ago become the
          reward. Spend three nights riding real Nagano powder.
        </p>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch", marginBottom: "1rem" }}>
          On your last mountain night, stop at Togakushi. It is an old
          shrine village in the forest above Nagano, famous for its soba
          noodles and its cedar-lined path through the snow. A quiet onsen
          evening here is the perfect cool-down.
        </p>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch" }}>
          Then take the shinkansen to Tokyo for a few nights before your
          flight home. You arrived as someone who had never touched a
          snowboard. You leave having ridden some of the most famous powder
          in the world.
        </p>
      </section>

      {/* AT A GLANCE */}
      <section className="mini-sec" id="glance">
        <span className="eyebrow">The route at a glance</span>
        <h2>Eleven nights, three stages.</h2>
        <ul className="itin-list">
          {STAGES.map((s) => (
            <li key={s.d + s.text} className={s.ours ? "ours" : undefined}>
              <b>{s.d}</b>
              {s.text}
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: 300, color: "#3a352d", maxWidth: "60ch", marginTop: "1.6rem", fontSize: "0.9rem" }}>
          The gold night is ours — the rest-day hinge between learning and
          graduating.
        </p>
      </section>

      {/* TIPS */}
      <section className="mini-sec" id="tips">
        <span className="eyebrow">Before you go</span>
        <h2>A few tips.</h2>
        <ul className="itin-list">
          <li>
            <b>Book the buses early.</b>The Nagoya–Hirugami highway bus
            runs only a few times a day, and the Hirugami–Sonohara shuttle
            needs an online booking.
          </li>
          <li>
            <b>Travel light.</b>Rent your board and boots at Heavens
            Sonohara, and let us hold your big luggage while you walk the
            Nakasendo.
          </li>
          <li>
            <b>Bring cheap spikes.</b>Slip-on spikes for sneakers are all
            you need for the winter Nakasendo; no hiking boots required.
          </li>
          <li>
            <b>Go midweek in January or February.</b>The snow is reliable
            and the beginner slopes are at their quietest.
          </li>
        </ul>
      </section>

      {/* OUR STAGE */}
      <div className="pay-sec">
        <div className="pay-notify">
          <p>
            <strong>
              Stage 2 runs through our house. Message us on WhatsApp for
              the Hirugami pickup, the luggage holding, and your night at
              Kashiwaya — we reply in English.
            </strong>
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <MessageCircle size={16} /> Plan the Nakasendo day on WhatsApp
          </a>
        </div>
        <p className="pay-note">
          Winter is also when Kashiwaya is easiest to book — the{" "}
          <Link href="/plan" style={{ color: "inherit" }}>
            3-night model plan
          </Link>{" "}
          shows what the valley holds in the green months.
        </p>
      </div>

      {/* MORE */}
      <section className="mini-sec" id="more">
        <span className="eyebrow">More columns</span>
        <h2>More ways to skip the crowds.</h2>
        <Link href="/crowd-free-japan" className="stay-cta">
          Crowd-Free Japan: a 26-Day Itinerary <ArrowRight size={15} />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
