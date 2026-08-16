"use client";

import Link from "next/link";
import { ArrowRight, Bike, Footprints, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

export default function SecondDayPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={WHATSAPP_URL}>
        <MessageCircle size={18} /> Plan my second day
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">The most important day of your trip</span>
        <h1>
          Your second day in Nagiso — <em>the one most travelers never have.</em>
        </h1>
        <p>
          Here&apos;s the pattern: you walk the Nakasendo over Magome Pass,
          arrive in Nagiso by evening, sleep — and by 9 a.m. you&apos;re on a
          train to Matsumoto or Kyoto. Everyone does it. Everyone misses the
          best part. The valley around Nagiso holds rivers you can swim,
          gorges the color of glass, and an old highway with no crowds at all.
          Below are three ways to spend that second day — on foot or by
          e-bike. Pick one, and let tomorrow be the day you actually meet the
          Kiso Valley.
        </p>
      </header>

      {/* THE THREE PLANS */}
      <section className="plans" id="plans">
        {/* PLAN 1 — YOGAWA-MICHI */}
        <div className="plan">
          <div>
            <span className="plan-kicker">
              Plan one · On foot or by e-bike
            </span>
            <h3>The Yogawa-michi — the Nakasendo without the crowds</h3>
            <div className="plan-ja">与川道 — 中山道の静かな迂回路</div>
            <p>
              Yesterday you shared Magome Pass with every guidebook reader in
              Japan. The Yogawa-michi is the old detour of the same Nakasendo
              — the route travelers took when the main road was impassable —
              and today it is almost empty. Forest, small shrines, mountain
              hamlets, and long views over the valley. It is said to be the
              most beautiful stretch of the entire Nakasendo, and you will
              likely have it to yourself.
            </p>
            <ul className="day-line">
              <li>
                <div className="place">Morning</div>
                <div className="role">
                  Leave your bags with our free luggage shuttle and set out
                  from Nagiso — on foot as the old travelers did, or on the
                  quiet paved road that shadows the trail by e-bike
                </div>
              </li>
              <li>
                <div className="place">Midday</div>
                <div className="role">
                  Picnic lunch on the pass — there are no shops on the route,
                  so we&apos;ll help you pack one
                </div>
              </li>
              <li>
                <div className="place">Afternoon</div>
                <div className="role">
                  Descend to Nojiri Station, collect your bags — or ride back
                  and soak your legs in an onsen
                </div>
              </li>
            </ul>
            <div className="plan-links">
              <Link href="/rental">
                <Bike size={15} /> Ride it self-guided
              </Link>
              <Link href="/luggage-shuttle">
                <Footprints size={15} /> Walk it, we carry your bags
              </Link>
            </div>
          </div>
          <div className="img-wanted">
            <span className="iw-tag">Photo wanted</span>
            <span className="iw-note">
              与川道の森の中の道(木漏れ日・石畳や道標が写っていると◎)/
              尾根から谷を見下ろすカット
            </span>
          </div>
        </div>

        {/* PLAN 2 — KAKIZORE */}
        <div className="plan">
          <div>
            <span className="plan-kicker">Plan two · E-bike + swim</span>
            <h3>Kakizore Gorge — dive into water the color of glass</h3>
            <div className="plan-ja">柿其渓谷 — 泳げるエメラルドの渓谷</div>
            <p>
              A short e-bike ride from Nagiso, up a valley most tourists never
              enter, the Kakizore river runs over pale granite in pools so
              clear they look lit from below. In summer this is the swimming
              hole of your childhood dreams; in cooler months it is a walk
              along water that photographs like the tropics. Waterfalls at the
              top, almost nobody on the path.
            </p>
            <ul className="day-line">
              <li>
                <div className="place">Morning</div>
                <div className="role">
                  Pick up your e-bike at Kashiwaya, borrow a rashguard and
                  life jacket for free, and ride the quiet farm roads up the
                  valley
                </div>
              </li>
              <li>
                <div className="place">Midday</div>
                <div className="role">
                  Walk the gorge path to the falls, swim, dry off on warm
                  granite, repeat
                </div>
              </li>
              <li>
                <div className="place">Afternoon</div>
                <div className="role">
                  Coast back down to Nagiso in time for an early bath and
                  dinner in the post town
                </div>
              </li>
            </ul>
            <div className="plan-links">
              <Link href="/rental">
                <Bike size={15} /> Rent the e-bike
              </Link>
              <Link href="/gear">
                <ArrowRight size={15} /> Borrow swim &amp; safety gear
              </Link>
            </div>
          </div>
          <div className="img-wanted">
            <span className="iw-tag">Photo wanted</span>
            <span className="iw-note">
              柿其渓谷のエメラルドの淵(人が泳いでいる/飛び込みの瞬間だと最高)/
              滝のカット
            </span>
          </div>
        </div>

        {/* PLAN 3 — ATERA */}
        <div className="plan">
          <div>
            <span className="plan-kicker">Plan three · The long e-bike day</span>
            <h3>Atera Valley — the bluest river in the Kiso</h3>
            <div className="plan-ja">阿寺渓谷 — 「阿寺ブルー」の一日</div>
            <p>
              The Atera river is famous — quietly, locally famous — for a
              blue-green so deep that people call it Atera Blue. The valley
              road climbs gently beside pool after pool, each one bluer than
              the last. On an e-bike the climb simply disappears, and the ride
              back down is one long exhale. Pair it with the onsen near the
              river mouth and you have a complete day.
            </p>
            <ul className="day-line">
              <li>
                <div className="place">Morning</div>
                <div className="role">
                  Roll out from Nagiso along the Kiso River to the mouth of
                  the Atera Valley
                </div>
              </li>
              <li>
                <div className="place">Midday</div>
                <div className="role">
                  Ride up the valley, stopping at every pool that demands it —
                  bring a picnic, or dip your feet where the granite shelves
                  into the water
                </div>
              </li>
              <li>
                <div className="place">Afternoon</div>
                <div className="role">
                  Freewheel down, then finish in the onsen before riding the
                  riverside road home
                </div>
              </li>
            </ul>
            <div className="plan-links">
              <Link href="/rental">
                <Bike size={15} /> Rent the e-bike
              </Link>
              <Link href="/guided">
                <ArrowRight size={15} /> Prefer a guided day? See the Downhill
              </Link>
            </div>
          </div>
          <div className="img-wanted">
            <span className="iw-tag">Photo wanted</span>
            <span className="iw-note">
              阿寺ブルーの淵と川沿いの道(e-bikeが写り込んでいると◎)
            </span>
          </div>
        </div>
      </section>

      {/* MAKE IT THREE DAYS */}
      <section className="hub-band">
        <div className="hub-band-inner">
          <span className="eyebrow">And if two days become three</span>
          <h2>
            The valley doesn&apos;t run out. <em>You just ran out of days.</em>
          </h2>
          <p>
            River fishing at Tadachi and Iwakura, easy summit hikes with
            valley views, a hands-on calligraphy session in the old
            guesthouse, and post-town evenings when the day-trippers have all
            gone home. Stay a second night and the town starts to feel like
            yours.
          </p>
          <Link href="/stay" className="band-cta">
            See where to stay <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FAQ — written for people (and AI) actually asking these questions */}
      <section className="faq" id="faq">
        <h2>Second-day questions, answered</h2>
        <details className="faq-item">
          <summary>Is one night really not enough for Nagiso?</summary>
          <p>
            You can sleep here in one night, but you can&apos;t meet the place.
            The post towns show you their best face in the early morning and
            evening — exactly the hours day-trippers miss — and the rivers,
            gorges and the old Yogawa-michi all need daylight. One night gets
            you a bed; two nights get you the valley.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can I really swim in the rivers?</summary>
          <p>
            Yes — in summer the Kakizore and Atera valleys have clear,
            swimmable pools. We lend rashguards and life jackets for free,
            point you to the safe entries, and tell you honestly when the
            water is too high to swim.
          </p>
        </details>
        <details className="faq-item">
          <summary>I can&apos;t drive. Can I reach these valleys without a car?</summary>
          <p>
            That&apos;s exactly what the e-bikes are for. All three plans start
            in Nagiso and run on quiet paved roads — the motor flattens the
            climbs, so the gorges are within easy reach even if you
            haven&apos;t ridden in years.
          </p>
        </details>
        <details className="faq-item">
          <summary>What happens to my luggage while I&apos;m out?</summary>
          <p>
            We shuttle bags between Nagiso Station, Kashiwaya and Nojiri
            Station for free with any ride — and we can hold them for the day
            while you swim or walk. Details on the{" "}
            <Link href="/luggage-shuttle">luggage shuttle page</Link>.
          </p>
        </details>
        <details className="faq-item">
          <summary>What if it rains on my second day?</summary>
          <p>
            Mountain weather happens. If a downpour makes the outdoors
            unpleasant, we move you indoors — a{" "}
            <Link href="/shodo">calligraphy session</Link> at the guesthouse,
            an onsen, and the museums of the post towns. The day is not lost.
          </p>
        </details>
      </section>

      <SiteFooter />
    </div>
  );
}
