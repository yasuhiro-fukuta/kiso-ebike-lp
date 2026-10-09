"use client";

import Link from "next/link";
import { MessageCircle, CreditCard } from "lucide-react";
import { SQUARE_PAY_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

const GEAR_ITEMS: {
  name: string;
  nameJa: string;
  desc: string;
  price: string;
  photos?: { src: string; alt: string }[];
  wanted?: string;
}[] = [
  {
    name: "Hinoki hat",
    nameJa: "ヒノキ傘",
    desc: "Hands-free cover from sun, rain and snow — a quiet marvel in summer and winter alike. Handmade by a local craftsman, woven from local hinoki cypress.",
    price: "¥500",
    photos: [
      {
        src: "/assets/gear/straw-hat.jpg",
        alt: "The hinoki travel hat — a woven conical hat with brushed calligraphy, on the guesthouse windowsill",
      },
    ],
  },
  {
    name: "Bear spray + bell",
    nameJa: "熊スプレー(熊鈴付き)",
    desc: "The mountains here are bear country. The spray is the serious backup, with a quick how-to briefing at pickup — and every rental comes with a bear bell, so they hear you coming long before you'd ever need it.",
    price: "¥1,500",
    photos: [
      {
        src: "/assets/gear/bear-spray.jpg",
        alt: "Bear defense spray canister standing next to its black belt holster",
      },
      {
        src: "/assets/gear/bear-bell.jpg",
        alt: "The bear bell that comes with every spray rental — a brass bell on a reflective strap with a carabiner",
      },
    ],
  },
  {
    name: "Rashguard",
    nameJa: "ラッシュガード",
    desc: "For the swimming holes of Kakizore and Atera — swim the emerald pools without freezing or burning. Men's and women's sets available.",
    price: "¥2,000",
    photos: [
      {
        src: "/assets/gear/watergear-f.jpg",
        alt: "Women's rashguard set — navy zip-up top, leggings and floral swim shorts",
      },
      {
        src: "/assets/gear/watergear-m.jpg",
        alt: "Men's rashguard set — black long-sleeve top and leggings",
      },
    ],
  },
  {
    name: "Life jacket",
    nameJa: "ライフジャケット",
    desc: "Float easy in the deeper pools. Pairs with the rashguard for a full river day.",
    price: "¥1,000",
    photos: [
      {
        src: "/assets/gear/life-jacket.jpg",
        alt: "The life jacket — a black buoyancy vest with adjustable buckles",
      },
    ],
  },
  {
    name: "Cold-weather set",
    nameJa: "防寒具セット",
    desc: "Insulated layers for riding the valley in the colder months, so the descent stays a pleasure.",
    price: "¥1,000",
    wanted: "冬装備で走っているカット",
  },
];

export default function GearPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href="/book?s=gear">
        <MessageCircle size={18} /> Ask on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Gear rental · Per item, per day</span>
        <h1>
          Borrow the valley&apos;s <em>working wardrobe.</em>
        </h1>
        <p>
          From the woven travel hats that walked this road for centuries to
          the bear spray the mountains quietly require. Each item rents on its
          own — grab exactly what your day needs, at the guesthouse, and pay
          on the day by card or cash. Closed every Monday.
        </p>
      </header>

      {/* ITEMS */}
      <section className="plans" id="items">
        {GEAR_ITEMS.map((item) => (
          <div className="plan" key={item.name}>
            <div>
              <span className="plan-kicker">{item.price} / day</span>
              <h3>{item.name}</h3>
              <div className="plan-ja">{item.nameJa}</div>
              <p>{item.desc}</p>
            </div>
            {item.photos ? (
              <div className={`plan-photos${item.photos.length > 1 ? " duo" : ""}`}>
                {item.photos.map((p) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={p.src} src={p.src} alt={p.alt} />
                ))}
              </div>
            ) : (
              <div className="img-wanted">
                <span className="iw-tag">Photo wanted</span>
                <span className="iw-note">{item.wanted}</span>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* BOOK & PAY */}
      <section className="mini-sec" id="book">
        <span className="eyebrow">Book &amp; pay</span>
        <h2>Message us, then pay online or at the counter.</h2>
        <div className="pay-row">
          <Link href="/book?s=gear" className="stay-cta">
            <MessageCircle size={16} /> Book gear on WhatsApp
          </Link>
          <a
            href={SQUARE_PAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <CreditCard size={16} /> Pay online (Square)
          </a>
          <figure className="pay-qr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/square-pay-qr.png"
              alt="QR code for the Square payment page — scan to pay the gear rental fee"
            />
            <figcaption>or scan to pay</figcaption>
          </figure>
        </div>
        <p className="pay-note" style={{ textAlign: "left", marginLeft: 0 }}>
          Enter the amount on the Square page — cash at the counter is
          welcome too. The Square page is displayed in Japanese (「金額」 is
          the amount field); your browser&apos;s translate function renders
          it in English just fine.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
