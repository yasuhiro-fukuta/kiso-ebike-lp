"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

const GEAR_ITEMS: {
  name: string;
  nameJa: string;
  desc: string;
  price: string;
  wanted: string;
}[] = [
  {
    name: "Kiso woven hat",
    nameJa: "木曽の木笠",
    desc: "The traditional wide travel hat of the Kiso road, woven from local wood. Real shade, real history — and the best photo prop on the Nakasendo.",
    price: "Ask on WhatsApp",
    wanted: "木笠の物撮り+旅人姿で被って歩いているカット",
  },
  {
    name: "Bear bell & bear spray",
    nameJa: "熊鈴・熊スプレー",
    desc: "The mountains here are bear country. A bell and spray set, with a quick briefing on how to use them — free with every ride, rentable on their own for walkers.",
    price: "Free with rides · solo rental: ask",
    wanted: "熊鈴・スプレーのセット物撮り",
  },
  {
    name: "Rashguard & life jacket",
    nameJa: "ラッシュガード・ライフジャケット",
    desc: "For the swimming holes of Kakizore and Atera. Free to borrow with any ride in summer.",
    price: "Free with rides",
    wanted: "川で着用しているカット(柿其の淵など)",
  },
  {
    name: "Cold-weather layers",
    nameJa: "防寒ウェア",
    desc: "Riding the valley in the colder months? We lend insulated layers so the descent stays a pleasure.",
    price: "Free with winter rides",
    wanted: "冬装備で走っているカット",
  },
];

export default function GearPage() {
  return (
    <div className="lp">
      <SiteNav />

      <FloatBook href={WHATSAPP_URL}>
        <MessageCircle size={18} /> Ask on WhatsApp
      </FloatBook>

      {/* PAGE HEAD */}
      <header className="page-head">
        <span className="eyebrow">Gear rental</span>
        <h1>
          Borrow the valley&apos;s <em>working wardrobe.</em>
        </h1>
        <p>
          From the woven travel hats that walked this road for centuries to
          the bear spray the mountains quietly require — most of it free with
          a ride, all of it available on its own. Travel light; we&apos;ve got
          the rest.
        </p>
      </header>

      {/* ITEMS */}
      <section className="plans" id="items">
        {GEAR_ITEMS.map((item) => (
          <div className="plan" key={item.name}>
            <div>
              <span className="plan-kicker">{item.price}</span>
              <h3>{item.name}</h3>
              <div className="plan-ja">{item.nameJa}</div>
              <p>{item.desc}</p>
            </div>
            <div className="img-wanted">
              <span className="iw-tag">Photo wanted</span>
              <span className="iw-note">{item.wanted}</span>
            </div>
          </div>
        ))}
      </section>

      {/* PRICING NOTE */}
      <section className="mini-sec">
        <span className="eyebrow">Pricing</span>
        <h2>Simple rule: riding with us? Mostly free.</h2>
        <p style={{ fontWeight: 300, maxWidth: "58ch", color: "#3a352d" }}>
          Safety and swim gear is included free with e-bike rentals and tours.
          For standalone rentals — the woven hat, or bear gear for a walking
          day on the Yogawa-michi — message us on WhatsApp and we&apos;ll sort
          you out at the guesthouse.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
