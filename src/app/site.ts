/** === CUSTOMIZE HERE ===========================================
 *  Shared site data — update these in one place.
 *  ============================================================= */
export const INSTAGRAM_URL = "https://www.instagram.com/murabito_bikes";
export const SUPPORT_MAILTO = "mailto:ravnicaguild@gmail.com";
export const PHONE = "090-3839-2354";
export const PHONE_TEL = "tel:+819038392354";
export const FEEDBACK_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScWvvhR9DBXR7d-eloSXw_dCQkIAbd32st1o5jQbc6nZxplVQ/viewform?usp=header";
// Google My Maps — embed + viewer
export const MYMAP_EMBED_URL =
  "https://www.google.com/maps/d/embed?mid=1OHpTKOucs5mBSqcEU7T4ILiapXuSkWQ&ehbc=2E312F";
/** Rental bookings now go through WhatsApp — pay on the day, card or cash. */
export const RENTAL_WHATSAPP_URL =
  "https://wa.me/819038392354?text=Hi%21%20I%27d%20like%20to%20book%20an%20e-bike.%20Date%3A%20__%20%2F%20Riders%3A%20__%20%2F%20Route%3A%20__";

/** Kashiwaya guesthouse — independent domain, linked from /stay */
export const KASHIWAYA_URL = "https://kashiwaya-inn.com";

/** ⚠️ TODO: replace with the real Google Business Profile review link
 *  (Google Maps app → your listing → Share → copy link). Used on /rental. */
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/Beyond+Nakasendo+Cycling+Nagiso";

/** === SPECIAL COURSE: Kiso River Downhill (full day, guided only) ===
 *  This flagship books by WhatsApp, not Square.
 *  ⚠️ Confirm the WhatsApp number below matches the business line.
 *  ============================================================= */
export const WHATSAPP_URL =
  "https://wa.me/819038392354?text=Hi%21%20I%27d%20like%20to%20ask%20about%20the%20Kiso%20River%20Downhill%20full-day%20course.";
export const MORNING_WHATSAPP_URL =
  "https://wa.me/819038392354?text=Hi%21%20I%27d%20like%20to%20join%20the%20early%20morning%20cycling%20tour%20%287%E2%80%939%20a.m.%29.%20Date%3A%20__%20%2F%20Riders%3A%20__";
export const SHODO_WHATSAPP_URL =
  "https://wa.me/819038392354?text=Hi%21%20I%27d%20like%20to%20ask%20about%20the%20shodo%20calligraphy%20session.";
export const SPECIAL_MAP_EMBED_URL =
  "https://www.google.com/maps/d/embed?mid=1LgL4RlnePF5JdvpqzADrpsrrW7oTVDE";
export const SPECIAL_MAP_VIEW_URL =
  "https://www.google.com/maps/d/viewer?mid=1LgL4RlnePF5JdvpqzADrpsrrW7oTVDE";

/** Guide team — swap `photo: null` for a real path (e.g. "/assets/guides/yu.jpg")
 *  when the headshots are ready. Two of these guides ride with every group. */
export const GUIDES: {
  name: string;
  nameJa: string;
  tag: string;
  photo: string | null;
  bio: string;
}[] = [
  {
    name: "Yu Katada",
    nameJa: "片田ゆう",
    tag: "Hill climber",
    photo: null,
    bio: "Three years on the road bike and already a hill climber to be reckoned with — she and her husband Kazuhide completed the Kiso-ichi loop (150 km, 2,000 m of climbing) in a single day.",
  },
  {
    name: "Kazuhide Katada",
    nameJa: "片田かずひで",
    tag: "10,000 km a year",
    photo: null,
    bio: "Ten years of road cycling, and the man who pulled his wife Yu into the road-bike world in the first place. An office worker by day whose riding has topped 10,000 km in a single year.",
  },
  {
    name: "Minoru Kono",
    nameJa: "河野穣",
    tag: "Kiso craftsman",
    photo: null,
    bio: "A craftsman of Kiso-hinoki wooden barrels — and a road cyclist who used to commute by bike to his workshop in Agematsu. He knows the roads of Kiso down to the last bend.",
  },
  {
    name: "Takuya Kato",
    nameJa: "加藤拓哉",
    tag: "English-speaking",
    photo: null,
    bio: "A lawyer by trade and a tour guide who knows Kiso so deeply he has even published a paper on the old Kiso Road. Fully fluent in English.",
  },
  {
    name: "Yasuhiro Fukuta",
    nameJa: "福田康宏",
    tag: "Organizer · WFA",
    photo: null,
    bio: "The organizer of this service. He toured Kiso by bicycle, then walked away from his Tokyo salaryman career to move here on his own. Manager of Kashiwaya Guesthouse and certified in Wilderness First Aid (WFA).",
  },
];
