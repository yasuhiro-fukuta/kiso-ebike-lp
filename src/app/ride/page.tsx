import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter } from "../chrome";

/**
 * Ride-day guide: everything a self-guided rider needs on the day,
 * so nothing has to wait for a WhatsApp reply (we answer within 6 hours).
 * Linked from the booking message and the QR sticker on every bike.
 */
export const metadata: Metadata = {
  title: "Ride-Day Guide | Beyond Nakasendo Cycling",
  description:
    "Everything for your e-bike day in one page: unlocking, saddle, power and assist, gears, phone holder, return and what to do if something goes wrong.",
  alternates: { canonical: "/ride", languages: { ja: "/ja/ride" } },
  robots: { index: false, follow: true },
};

const STEPS: { h: string; p: string; img?: string; alt?: string }[] = [
  {
    h: "Find your bike",
    p: "It is parked at the spot in your morning message (photo and map pin included). Helmet and lock are with the bike.",
  },
  {
    h: "Unlock",
    p: "Turn the dials of the number lock to the code in your email (it arrives after you pay and send the consent form), then pull it open. Keep the lock with you — you need it at the end.",
  },
  {
    h: "Set the saddle",
    p: "Open the lever under the saddle, set the height so your leg is almost straight at the bottom of the pedal, and close the lever firmly.",
  },
  {
    h: "Power on",
    p: "The assist remote is on the left handle. Press and hold the small power button (⏻) on its lower edge until the display lights up.",
    img: "/assets/ride/power.jpg",
    alt: "Assist remote on the left handle, with the power button on its lower edge",
  },
  {
    h: "Assist level",
    p: "On the same remote: + for more help, − for less. Start low on village streets, go higher on climbs.",
    img: "/assets/ride/assist.jpg",
    alt: "The + and − buttons of the assist remote",
  },
  {
    h: "Gears",
    p: "The 7-speed gear changer is on the right handle, and the dial shows your gear: 1 is the lightest (for climbs), 7 the fastest. Shift before a climb or before you stop, not halfway up the hill.",
    img: "/assets/ride/gears.jpg",
    alt: "Shimano 7-speed gear changer on the right handle, dial showing 1 to 7",
  },
  {
    h: "Phone holder",
    p: "The phone holder is on the handlebar, for maps and videos. Open the arms, set your phone in, and squeeze them closed. Set your route before you start, and don't touch the phone while riding.",
    img: "/assets/ride/phone-holder.jpg",
    alt: "Phone holder mounted on the handlebar",
  },
  {
    h: "Check the brakes, then go",
    p: "Squeeze both brakes once before you roll. In Japan we ride on the left side of the road.",
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "The battery ran out",
    a: "The bike still rides like a normal bicycle, just heavier. Turn assist to a lower level to save battery on the flat.",
  },
  {
    q: "Where should I ride?",
    a: "Three mapped routes with Google Maps links are on the Self-Tour Advice page.",
  },
  {
    q: "Can I finish somewhere else?",
    a: "Yes — anywhere in the Tsumago–Nojiri area. Just tell us the place when you send the photo.",
  },
  {
    q: "What about my luggage?",
    a: "If you booked the luggage shuttle, your bags go straight to your inn — they arrive that evening. No need to wait for them.",
  },
  {
    q: "Can I ride before 9:00 or after 18:00?",
    a: "Standard hours are 9:00–18:00. Earlier or later is fine if you arranged it with us when booking.",
  },
];

export default function RideGuidePage() {
  return (
    <div className="lp">
      <SiteNav />

      <header className="page-head">
        <span className="eyebrow">Ride-day guide · Everything in one page</span>
        <h1>
          Your e-bike day, <em>no waiting needed.</em>
        </h1>
        <p>
          We answer WhatsApp within 6 hours, so everything you need today is
          on this page. Bookmark it. In an emergency, call us.
        </p>
        <p className="head-note">
          <strong>
            Urgent (accident, injury, bike broken, lost):{" "}
            <a href={PHONE_TEL}>
              <Phone size={15} /> {PHONE}
            </a>
          </strong>
        </p>
      </header>

      <section className="drop-sec" id="start">
        <div className="drop-inner">
          <span className="eyebrow">Start</span>
          <h2>
            Eight steps, <em>about five minutes.</em>
          </h2>
          <div className="drop-steps">
            {STEPS.map((s, i) => (
              <div className="drop-step" key={s.h}>
                <div className="dnum">{i + 1}</div>
                {s.img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.img}
                    alt={s.alt ?? ""}
                    loading="lazy"
                    style={{ width: "100%", borderRadius: 10, margin: "0.6rem 0", aspectRatio: "4 / 3", objectFit: "cover" }}
                  />
                )}
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video-sec">
        <span className="eyebrow">60 seconds</span>
        <h2>Watch before you roll</h2>
        <div className="video-wrap">
          <iframe
            src="https://www.youtube.com/embed/-9sQwqZJZzE?rel=0&modestbranding=1&playsinline=1"
            title="E-bike usage notes"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="drop-sec" id="finish">
        <div className="drop-inner">
          <span className="eyebrow">Finish</span>
          <h2>
            Three steps, <em>and you&apos;re done.</em>
          </h2>
          <div className="drop-steps">
            <div className="drop-step">
              <div className="dnum">1</div>
              <h3>Park</h3>
              <p>
                At the drop-off spot in your morning message, or anywhere in
                the Tsumago–Nojiri area. Keep it off the road.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">2</div>
              <h3>Lock</h3>
              <p>
                Lock the bike with the number lock, scramble the dials, and
                leave the helmet with the bike.
              </p>
            </div>
            <div className="drop-step">
              <div className="dnum">3</div>
              <h3>Send one photo</h3>
              <p>
                Send a photo of the locked bike on WhatsApp.{" "}
                <strong>That&apos;s it — you don&apos;t need to wait for our
                reply.</strong>{" "}
                We collect the bike that evening.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <h2>If something comes up</h2>
        {FAQ.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <p>
              {f.a}
              {f.q === "Where should I ride?" && (
                <>
                  {" "}
                  <Link href="/second-day">
                    <MapPin size={14} /> Open the routes
                  </Link>
                </>
              )}
            </p>
          </details>
        ))}
        <p className="booking-alt">
          Not urgent? <a href={WHATSAPP_URL}><MessageCircle size={15} /> WhatsApp us</a>{" "}
          — we reply within 6 hours. Urgent? Call{" "}
          <a href={PHONE_TEL}>{PHONE}</a>. 日本語は <Link href="/ja/ride">こちら</Link>
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
