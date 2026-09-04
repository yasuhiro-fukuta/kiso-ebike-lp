"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../site";
import { SiteNav, SiteFooter, FloatBook, AllInOnePack } from "../chrome";

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
    desc: "The traditional wide travel hat of the Kiso road, woven from local hinoki cypress. Real shade, real history — and the best photo prop on the Nakasendo.",
    price: "¥500",
    photos: [
      {
        src: "/assets/gear/straw-hat.jpg",
        alt: "The hinoki travel hat — a woven conical hat with brushed calligraphy, on the guesthouse windowsill",
      },
    ],
  },
  {
    name: "Bear bell set",
    nameJa: "熊鈴セット",
    desc: "The mountains here are bear country — a bell on your bag lets them hear you coming, which is exactly what you want.",
    price: "¥500",
    photos: [
      {
        src: "/assets/gear/bear-bell.jpg",
        alt: "The bear bell — a brass bell on a reflective strap with a carabiner, ready to clip to your bag",
      },
    ],
  },
  {
    name: "Bear spray",
    nameJa: "熊スプレー",
    desc: "The serious backup, with a quick how-to briefing when you pick it up. For walkers on the Yogawa-michi and riders heading up the quiet valleys.",
    price: "¥2,000",
    photos: [
      {
        src: "/assets/gear/bear-spray.jpg",
        alt: "Bear defense spray canister standing next to its black belt holster",
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

      <FloatBook href={WHATSAPP_URL}>
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
          on the day by card or cash.
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

      {/* ALL-IN-ONE PACK */}
      <AllInOnePack />

      <SiteFooter />
    </div>
  );
}
