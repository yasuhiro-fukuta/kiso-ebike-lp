"use client";

import {
  MessageCircle,
  ShieldCheck,
  HeartPulse,
  Droplet,
  Wind,
} from "lucide-react";
import {
  WHATSAPP_URL,
  MORNING_WHATSAPP_URL,
  SPECIAL_MAP_EMBED_URL,
  SPECIAL_MAP_VIEW_URL,
} from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

/** The morning tour, by season. Swap `photo: null` for a real path
 *  (e.g. "/assets/morning/spring.jpg") as each shot comes in. */
const MORNING_SEASONS: {
  season: string;
  photo: string | null;
  alt: string;
  wanted: string;
}[] = [
  {
    season: "Spring",
    photo: "/assets/morning/spring.jpg",
    alt: "Riding a lane of cherry blossoms at dawn in Nagiso",
    wanted: "春:桜並木の道(朝日+花びら)",
  },
  {
    season: "Summer",
    photo: "/assets/morning/summer.jpg",
    alt: "The Iwakura river in early summer morning light",
    wanted: "夏:岩倉川(朝の川面・緑)",
  },
  {
    season: "Autumn",
    photo: "/assets/morning/autumn.jpg",
    alt: "Golden rice paddies along the morning route in autumn",
    wanted: "秋:田んぼ道(稲穂・朝靄)",
  },
  {
    season: "Winter",
    photo: "/assets/morning/winter.jpg",
    alt: "A snowy forest road on the winter morning ride",
    wanted: "冬:雪の林道(轍・静けさ)",
  },
];

export default function GuidedPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={WHATSAPP_URL}>
        <MessageCircle size={18} /> Ask on WhatsApp
      </FloatBook>

      {/* EARLY MORNING CYCLING TOUR */}
      <header className="page-head page-head-grid" id="morning">
        <div>
          <span className="eyebrow">Guided tour · 7:00–9:00 · 2 hours</span>
          <h1>
            The Early Morning Tour — <em>own the valley before breakfast.</em>
          </h1>
          <p>
            At seven in the morning the post town belongs to the residents,
            the river mist, and you. This is a slow two-hour guided loop
            through Nagiso&apos;s lanes and riverside roads in the softest
            light of the day — and you&apos;re back by nine, in time for
            breakfast and checkout. The easiest way to try a guided ride, and
            the prettiest two hours on this whole site.
          </p>
        </div>
        <div className="seasons-grid">
          {MORNING_SEASONS.map((s) =>
            s.photo ? (
              <figure className="season-cell" key={s.season}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.photo} alt={s.alt} />
                <figcaption className="season-tag">{s.season}</figcaption>
              </figure>
            ) : (
              <div className="season-cell img-wanted" key={s.season}>
                <span className="season-tag">{s.season}</span>
                <span className="iw-note">{s.wanted}</span>
              </div>
            )
          )}
        </div>
      </header>

      <section className="morning-extras">
        <div className="pricing">
          <div className="pitem">
            <h4>Guide</h4>
            <div className="amt">
              ¥4,000<span style={{ fontSize: "0.9rem" }}>/group</span>
            </div>
            <p>One local guide for your whole group, 7:00–9:00.</p>
          </div>
          <div className="pitem">
            <h4>E-Bike</h4>
            <div className="amt">
              ¥2,000<span style={{ fontSize: "0.9rem" }}>/rider</span>
            </div>
            <p>
              Per person, bike included — so two riders come to ¥8,000, four
              to ¥12,000.
            </p>
          </div>
          <div className="pitem">
            <h4>Kashiwaya guests</h4>
            <div className="amt">¥0</div>
            <p>Staying at Kashiwaya? Guide and bikes are both free.</p>
          </div>
        </div>

        <div className="campaign">
          <div className="campaign-badge">Kashiwaya Guests</div>
          <div className="campaign-body">
            <h3>
              Sleep at Kashiwaya, and this one&apos;s <em>on the house.</em>
            </h3>
            <p>
              Guests of Kashiwaya Guesthouse join the morning tour for free —
              no guide fee, no bike fee. Wake up, roll out, and be back before
              your breakfast goes cold. Just tell us the night before.
            </p>
          </div>
        </div>

        <div className="morning-cta-row">
          <a
            href={MORNING_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <MessageCircle size={16} /> Book the morning tour on WhatsApp
          </a>
          <span className="morning-cta-note">
            Pay on the day — card or cash. Kashiwaya guests: just mention it
            at check-in.
          </span>
        </div>
      </section>

      {/* SPECIAL COURSE — Kiso River Downhill (full day · guided only) */}
      <section className="special" id="downhill">
        <div className="special-inner">
          {/* 1 — OVERVIEW */}
          <div className="special-head">
            <span className="eyebrow">Guided tour · Full day</span>
            <span className="special-badge">Coming soon</span>
            <h2>
              The Kiso River Downhill — <em>the most comfortable 50 km in the world.</em>
            </h2>
            <p className="special-lead">
              <b>
                48.9&nbsp;km, Yabuhara-juku to Nagiso Station, almost all of it
                downhill.
              </b>{" "}
              You set off high in the valley, near the headwaters of the Kiso
              River, and follow the water as it grows from a mountain stream
              into a full river — rolling past seven of the Kiso road&apos;s old
              post towns (from Yabuhara down to Midono) on one long and gentle
              descent. Breakfast in Yabuhara, lunch in Kiso-Fukushima, a coffee stop at Nojiri Station,
              and a finish line at Nagiso as the light goes long. Every metre has
              been ridden and re-ridden by a local guide to find the most
              beautiful, the most comfortable, and the safest line down the
              valley — and <b>two guides ride with every group</b>, one setting
              the line up front and one sweeping at the back.
            </p>
          </div>

          <div className="special-stats">
            <div className="sstat">
              <div className="num">
                48.9<small>&nbsp;km</small>
              </div>
              <div className="lbl">Total distance</div>
            </div>
            <div className="sstat">
              <div className="num">
                ↓613<small>&nbsp;m</small>
              </div>
              <div className="lbl">Descent · only ↑94 m up</div>
            </div>
            <div className="sstat">
              <div className="num">7</div>
              <div className="lbl">Kiso post towns</div>
            </div>
            <div className="sstat">
              <div className="num">2</div>
              <div className="lbl">Guides with every group</div>
            </div>
          </div>

          {/* 2 — THE COURSE */}
          <div className="special-map">
            <h3 className="special-sec-title">The course</h3>
            <div className="map-frame">
              <iframe
                src={SPECIAL_MAP_EMBED_URL}
                title="Kiso River Downhill — full route map"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <p className="map-cap">
              The full 48.9&nbsp;km line, Yabuhara to Nagiso.{" "}
              <a
                href={SPECIAL_MAP_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the route in Google Maps →
              </a>
            </p>
          </div>

          {/* 3 — THE GUIDES */}
          <div className="special-guides">
            <h3>Who rides with you</h3>
            <p className="guides-lead">
              The tour is led by a team of local cyclists who ride these roads
              all year round — two guides with every group, one setting the
              line up front and one sweeping at the back. Full team
              introductions coming with the launch.
            </p>
          </div>

          {/* 4 — SCHEDULE · 5 — PRICE & HOW TO BOOK */}
          <div className="special-body">
            <div className="special-day">
              <h3>How the day runs</h3>
              <ul className="day-line">
                <li>
                  <div className="place">
                    Yabuhara-juku
                  </div>
                  <div className="role">
                    Breakfast in the post town, then roll out
                  </div>
                </li>
                <li>
                  <div className="place">Kiso-Fukushima</div>
                  <div className="role">Lunch, roughly the halfway mark</div>
                </li>
                <li>
                  <div className="place">Nojiri Station</div>
                  <div className="role">A coffee stop to stretch the legs</div>
                </li>
                <li>
                  <div className="place">
                    Nagiso Station <span className="alt">409 m</span>
                  </div>
                  <div className="role">Finish line as the light goes long</div>
                </li>
              </ul>
            </div>

            <div className="special-price">
              <div className="from">Group of four · all-in</div>
              <div className="amt">¥80,000</div>
              <p className="breakdown">
                One price for the whole day — two guides and every e-bike
                included. ¥80,000 is the base for a group of four; each rider
                more or fewer moves the total by 15% (¥12,000).
              </p>
              <ul className="price-scale">
                <li>
                  <span>2 riders</span>
                  <b>¥56,000</b>
                </li>
                <li>
                  <span>3 riders</span>
                  <b>¥68,000</b>
                </li>
                <li className="base">
                  <span>4 riders</span>
                  <b>¥80,000</b>
                </li>
                <li>
                  <span>5 riders</span>
                  <b>¥92,000</b>
                </li>
                <li>
                  <span>6 riders</span>
                  <b>¥104,000</b>
                </li>
              </ul>
              <div className="how-to-book-label">Coming soon</div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="special-cta"
              >
                <MessageCircle size={18} /> Get notified on WhatsApp
              </a>
              <p className="special-cta-note">
                Dates aren&apos;t open yet. Message us on WhatsApp and
                we&apos;ll let you know the moment the first departures go on
                sale.
              </p>
            </div>
          </div>

          {/* special-course FAQ */}
          <div className="special-faq">
            <h3>Before you commit</h3>
            <details className="sfaq">
              <summary>Can I ride this one self-guided?</summary>
              <p>
                No — this course is guided only. In a few places, one wrong turn
                drops you onto roads with heavy traffic. To keep the day safe,
                two guides ride the whole route with you — one up front, one at
                the back.
              </p>
            </details>
            <details className="sfaq">
              <summary>I&apos;m not sure I can ride 50+ km.</summary>
              <p>
                Nearly 50 km sounds like an expert distance, we know. But it&apos;s
                gentle downhill almost the entire way, and on the few uphill
                stretches the high-powered e-bike does the climbing for you. If
                you can ride a normal bike 10 km on flat ground, you&apos;ll
                reach the finish smiling. This is your chance to surprise
                yourself.
              </p>
            </details>
            <details className="sfaq">
              <summary>Can I bail out partway?</summary>
              <p>
                Yes. The route shadows the JR line the whole way, so if
                you&apos;re not feeling well you can step off and take a train
                from the nearest station. Just lock the bike at the station rack
                and we&apos;ll collect it afterwards.
              </p>
            </details>
            <details className="sfaq">
              <summary>What happens in bad weather?</summary>
              <p>
                Rain or snow means we cancel and refund by default. Our e-bikes
                handle rough conditions well, though — so if it&apos;s light
                enough not to affect safety or the experience, and everyone&apos;s
                happy to ride, we may still run it. If the weather turns mid-ride,
                we stop there, refund part of the fee, and take the train to the
                finish.
              </p>
            </details>
            <details className="sfaq">
              <summary>What about bears?</summary>
              <p>
                Like everywhere in these mountains, the Kiso has Asiatic black
                bears. We hand you a bear bell and bear spray to carry, your lead
                guide always rides up front, and we run through a
                what-to-do-if-you-meet-one briefing before we set off.
              </p>
            </details>
            <details className="sfaq">
              <summary>How do you handle summer heat and winter cold?</summary>
              <p>
                In summer we lend you a rashguard, keep you dousing with water,
                and break to dip in the valley&apos;s river pools. In winter we
                lend cold-weather gear and stop at footbaths and onsen along the
                way to warm back up.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* GUIDE — Wilderness First Aid credential */}
      <section className="guide" id="wfa">
        <div className="guide-inner">
          <div className="guide-text">
            <span className="eyebrow">
              <ShieldCheck size={15} /> Safety on the ride
            </span>
            <h2>
              Out here, your guide is the first responder — and Yakkun&apos;s{" "}
              <em>trained for it.</em>
            </h2>
            <p>
              Yakkun is certified in Wilderness First Aid by Wilderness Medical
              Associates International — the same training that expedition crews
              and mountain-rescue teams rely on. Deep in the valley an ambulance
              can be a long way off, so he&apos;s trained to be the help until it
              arrives.
            </p>
            <ul className="guide-skills">
              <li>
                <HeartPulse size={18} /> Adult CPR and AED use
              </li>
              <li>
                <Wind size={18} /> Clearing an obstructed airway
              </li>
              <li>
                <Droplet size={18} /> Controlling severe bleeding (hemorrhage
                control)
              </li>
            </ul>
            <p className="guide-consent">
              By joining a ride, you agree that if an emergency happens, Yakkun
              may give first aid in line with this certification until
              professional care reaches us.
            </p>
          </div>

          <div className="guide-proof">
            <div className="cert-stack">
              <div className="cert cert-front">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/WFA1.jpg"
                  alt="Wilderness First Aid certification card for Yasuhiro Fukuta, issued by Wilderness Medical Associates International, valid through 18 February 2029, Course ID 37079"
                />
              </div>
              <div className="cert cert-back">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/WFA2.jpg"
                  alt="Reverse of the Wilderness Medical Associates certification card, showing programme terms and validity"
                />
              </div>
            </div>
            <div className="cert-cap">
              Wilderness First Aid · Wilderness Medical Associates Int&apos;l ·
              Course ID 37079 · valid through Feb 2029
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
