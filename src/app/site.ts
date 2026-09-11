/** === CUSTOMIZE HERE ===========================================
 *  Shared site data — update these in one place.
 *  ============================================================= */
export const INSTAGRAM_URL = "https://www.instagram.com/satoyama_guide_yakkun";
export const MEDIUM_URL = "https://medium.com/@ravnicaguild";
/** Google Analytics 4 の測定ID。空文字にすると計測タグごと無効になる。 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-0JECLSEP0Q";
export const SUPPORT_MAILTO = "mailto:ravnicaguild@gmail.com";
export const PHONE = "090-3839-2354";
export const PHONE_TEL = "tel:+819038392354";
export const FEEDBACK_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScWvvhR9DBXR7d-eloSXw_dCQkIAbd32st1o5jQbc6nZxplVQ/viewform?usp=header";
// Google My Maps — embed + viewer
export const MYMAP_EMBED_URL =
  "https://www.google.com/maps/d/embed?mid=1UdxxoxfvuLwGjvlmiEC3vyAbExP95b0&ehbc=2E312F";
/** === WhatsApp links ==========================================
 *  Every booking goes through WhatsApp — pay on the day, card or cash.
 *  Each page opens the chat with its own prefilled template; pages
 *  without a template use the plain link.
 *  ============================================================= */
const WA_NUMBER = "819038392354";
const wa = (text?: string) =>
  text
    ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${WA_NUMBER}`;

/** Plain link — no template (home, stay, self-tour, live-here, nav). */
export const WHATSAPP_URL = wa();
export const WHATSAPP_URL_JA = wa();

/** E-bike rental */
export const RENTAL_WHATSAPP_URL = wa(
  `Hello! I'm interested in renting e-bikes as follows.
Date: __/__/____, 10:00 - 15:00
Bikes (riders 150 cm or taller): __
Bikes (riders under 150 cm): __
Start: Nagiso Station / Kashiwaya / Nojiri Station
Finish: Nagiso Station / Kashiwaya / Nojiri Station
Luggage shuttle from start to finish: __ bags / not needed
Bear-deterrent kit: __ / not needed`
);
export const RENTAL_WHATSAPP_URL_JA = wa(
  `こんにちは。下記内容でE-bikeレンタルを検討しています。
日時:〇年〇月〇日 10:00 - 15:00
台数(身長150センチ以上):〇台
台数(身長150センチ未満):〇台
出発:南木曽駅前/柏屋/野尻駅前
到着:南木曽駅前/柏屋/野尻駅前
出発地点から到着地点までの荷物運び:〇個/不要
クマよけグッズ:〇個/不要`
);

/** Shuttle E-bike Package */
export const PACK_WHATSAPP_URL = wa(
  `Hello! I'm interested in the Shuttle E-Bike Package as follows.
Date: __/__/____, 10:00 - 15:00
Bikes (riders 150 cm or taller): __
Bikes (riders under 150 cm): __
Start: Nagiso Station / Kashiwaya / Nojiri Station
Finish: Nagiso Station / Kashiwaya / Nojiri Station
One extra gear item of choice: hinoki hat / rashguard / life jacket
* The bear-deterrent kit and the luggage shuttle are included.`
);
export const PACK_WHATSAPP_URL_JA = wa(
  `こんにちは。下記内容でE-bikeレンタルを検討しています。
日時:〇年〇月〇日 10:00 - 15:00
台数(身長150センチ以上):〇台
台数(身長150センチ未満):〇台
出発:南木曽駅前/柏屋/野尻駅前
到着:南木曽駅前/柏屋/野尻駅前
希望する追加アイテム1点:檜傘/ラッシュガード/ライフジャケット
※クマよけグッズと荷物運びはセットになっています。`
);

/** Luggage shuttle */
export const LUGGAGE_WHATSAPP_URL = wa(
  `Hello! I'm interested in the luggage shuttle as follows.
Date: __/__/____
From: Nagiso Station / Kashiwaya / Nojiri Station
To: Nagiso Station / Kashiwaya / Nojiri Station
Bags from start to finish: __
Bear-deterrent kit: __ / not needed`
);
export const LUGGAGE_WHATSAPP_URL_JA = wa(
  `こんにちは。下記内容で手荷物シャトル運送を検討しています。
日時:〇年〇月〇日
出発:南木曽駅前/柏屋/野尻駅前
到着:南木曽駅前/柏屋/野尻駅前
出発地点から到着地点までの荷物運び:〇個
クマよけグッズ:〇個/不要`
);

/** Gear rental */
export const GEAR_WHATSAPP_URL = wa(
  `Hello! I'm interested in renting gear as follows.
Date: __/__/____
Start: Nagiso Station / Kashiwaya / Nojiri Station
Finish: Nagiso Station / Kashiwaya / Nojiri Station
Hinoki hat: __ / not needed
Bear-deterrent kit: __ / not needed
Rashguard: __ / not needed
Life jacket: __ / not needed`
);
export const GEAR_WHATSAPP_URL_JA = wa(
  `こんにちは。下記内容でギアレンタルを検討しています。
日時:〇年〇月〇日
出発:南木曽駅前/柏屋/野尻駅前
到着:南木曽駅前/柏屋/野尻駅前
檜傘:〇個/不要
クマよけグッズ:〇個/不要
ラッシュガード:〇個/不要
ライフジャケット:〇個/不要`
);

/** Guided tours (early morning ride / Kiso River Downhill) */
export const GUIDED_WHATSAPP_URL = wa(
  `Hello! I'm interested in joining a guided tour as follows.
Date: __/__/____
Tour: early morning ride / Kiso River Downhill (shodo calligraphy if it rains)
People: __`
);
export const GUIDED_WHATSAPP_URL_JA = wa(
  `こんにちは。下記内容でガイドツアー参加を検討しています。
日時:〇年〇月〇日
ツアー:早朝ライド/木曽川ダウンヒル(雨天時は書道体験)
人数:〇名`
);
export const MORNING_WHATSAPP_URL = GUIDED_WHATSAPP_URL;
export const MORNING_WHATSAPP_URL_JA = GUIDED_WHATSAPP_URL_JA;

/** Shodo calligraphy */
export const SHODO_WHATSAPP_URL = wa(
  `Hello! I'm interested in joining a guided tour as follows.
Date: __/__/____
Tour: shodo calligraphy
People: __`
);
export const SHODO_WHATSAPP_URL_JA = wa(
  `こんにちは。下記内容でガイドツアー参加を検討しています。
日時:〇年〇月〇日
ツアー:書道体験
人数:〇名`
);

/** Square online payment link for the luggage shuttle. */
export const SQUARE_PAY_URL = "https://square.link/u/mKDF9YoV";

/** Kashiwaya guesthouse — independent domain, linked from /stay */
export const KASHIWAYA_URL = "https://kashiwaya-inn.com";

/** ⚠️ TODO: replace with the real Google Business Profile review link
 *  (Google Maps app → your listing → Share → copy link). Used on /rental. */
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/Beyond+Nakasendo+Cycling+Nagiso";

/** Atera gorge article (Japanese) — keeps its own template. */
export const ATERA_WHATSAPP_URL =
  "https://wa.me/819038392354?text=%E9%98%BF%E5%AF%BA%E6%B8%93%E8%B0%B7%E7%94%A8%E3%81%AEE-bike%E3%82%92%E4%BA%88%E7%B4%84%E3%81%97%E3%81%9F%E3%81%84%E3%81%A7%E3%81%99%E3%80%82%E5%B8%8C%E6%9C%9B%E6%97%A5%EF%BC%9A%E3%80%80%E5%8F%B0%E6%95%B0%EF%BC%9A";

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
