"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { wa } from "./site";
import { FORM_POINTS, estimate, yen } from "./luggage-bus";
import { SiteNav, SiteFooter } from "./chrome";

type Lang = "en" | "ja";

/** One form field. `opt: true` = optional count ("not needed" when blank). */
type Field = {
  k: string;
  label: { en: string; ja: string };
  type: "date" | "text" | "count" | "select";
  options?: { en: string[]; ja: string[] };
  opt?: boolean;
};

type Service = {
  title: { en: string; ja: string };
  fields: Field[];
  build: (lang: Lang, g: (k: string) => string, est: string) => string;
  /** Optional price estimate from the raw field values (shown and sent). */
  estimate?: (lang: Lang, v: Record<string, string>) => { total: string; detail: string } | null;
};

/** The five standard start/finish points. */
const POINTS = {
  en: [
    "Tsumago",
    "Nagiso Station",
    "Kashiwaya",
    "Junikane Station",
    "Nojiri Station",
    "Other spot in the area (details in chat)",
  ],
  ja: [
    "妻籠",
    "南木曽駅前",
    "柏屋",
    "十二兼駅前",
    "野尻駅前",
    "その他(エリア内の希望場所・チャットで相談)",
  ],
};
/** Luggage counters (drop-off / pick-up / return points). */
const COUNTERS = {
  en: [
    "nagiso station izumiya cafe",
    "guesthouse Kashiwaya Inn",
    "guesthouse Waku nagiso",
    "nojiri station cafe katana",
  ],
  ja: ["南木曽駅前 イズミヤカフェ", "ゲストハウス柏屋", "ゲストハウスWAKU", "野尻駅前 カフェ刀"],
};

/** Luggage Bus stations and extensions (positions live in luggage-bus.ts). */
const LB_POINTS = {
  en: FORM_POINTS.map((p) => p.en),
  ja: FORM_POINTS.map((p) => p.ja),
};
const lbPos = (label: string) => FORM_POINTS.find((p) => p.en === label || p.ja === label)?.pos ?? null;

const fDate = (lang: Lang, iso: string) => {
  if (!iso) return lang === "ja" ? "〇年〇月〇日" : "__/__/____";
  const [y, m, d] = iso.split("-");
  return lang === "ja" ? `${y}年${Number(m)}月${Number(d)}日` : `${d}/${m}/${y}`;
};

const SERVICES: Record<string, Service> = {
  rental: {
    title: { en: "E-Bike Rental", ja: "E-bikeレンタル" },
    fields: [
      { k: "date", label: { en: "Date", ja: "日付" }, type: "date" },
      { k: "tall", label: { en: "Bikes (riders 150 cm or taller)", ja: "台数(身長150センチ以上)" }, type: "count" },
      { k: "short", label: { en: "Bikes (riders under 150 cm)", ja: "台数(身長150センチ未満)" }, type: "count", opt: true },
      { k: "start", label: { en: "Start", ja: "出発" }, type: "select", options: POINTS },
      { k: "finish", label: { en: "Finish", ja: "到着" }, type: "select", options: POINTS },
      { k: "bags", label: { en: "Luggage shuttle (bags)", ja: "荷物運び(個数)" }, type: "count", opt: true },
      { k: "bear", label: { en: "Bear-deterrent kit", ja: "クマよけグッズ" }, type: "count", opt: true },
    ],
    build: (l, g) =>
      l === "ja"
        ? `こんにちは。下記内容でE-bikeレンタルを検討しています。\n日時:${g("date")}\n台数(身長150センチ以上):${g("tall")}台\n台数(身長150センチ未満):${g("short")}\n出発:${g("start")}\n到着:${g("finish")}\n出発地点から到着地点までの荷物運び:${g("bags")}\nクマよけグッズ:${g("bear")}`
        : `Hello! I'm interested in renting e-bikes as follows.\nDate: ${g("date")}\nBikes (riders 150 cm or taller): ${g("tall")}\nBikes (riders under 150 cm): ${g("short")}\nStart: ${g("start")}\nFinish: ${g("finish")}\nLuggage shuttle from start to finish: ${g("bags")} bags\nBear-deterrent kit: ${g("bear")}`,
  },
  pack: {
    title: { en: "Shuttle E-Bike Package", ja: "Shuttle E-bikeパッケージ" },
    fields: [
      { k: "date", label: { en: "Date", ja: "日付" }, type: "date" },
      { k: "tall", label: { en: "Bikes (riders 150 cm or taller)", ja: "台数(身長150センチ以上)" }, type: "count" },
      { k: "short", label: { en: "Bikes (riders under 150 cm)", ja: "台数(身長150センチ未満)" }, type: "count", opt: true },
      { k: "start", label: { en: "Start", ja: "出発" }, type: "select", options: POINTS },
      { k: "finish", label: { en: "Finish", ja: "到着" }, type: "select", options: POINTS },
      {
        k: "gear",
        label: { en: "One extra gear item of choice", ja: "希望する追加アイテム1点" },
        type: "select",
        options: { en: ["hinoki hat", "rashguard", "life jacket"], ja: ["檜傘", "ラッシュガード", "ライフジャケット"] },
      },
    ],
    build: (l, g) =>
      l === "ja"
        ? `こんにちは。下記内容でShuttle E-bikeパッケージを検討しています。\n日時:${g("date")}\n台数(身長150センチ以上):${g("tall")}台\n台数(身長150センチ未満):${g("short")}\n出発:${g("start")}\n到着:${g("finish")}\n希望する追加アイテム1点:${g("gear")}\n※クマよけグッズと荷物運びはセットになっています。`
        : `Hello! I'm interested in the Shuttle E-Bike Package as follows.\nDate: ${g("date")}\nBikes (riders 150 cm or taller): ${g("tall")}\nBikes (riders under 150 cm): ${g("short")}\nStart: ${g("start")}\nFinish: ${g("finish")}\nOne extra gear item of choice: ${g("gear")}\n* The bear-deterrent kit and the luggage shuttle are included.`,
  },
  luggage: {
    title: { en: "Luggage Bus — booking request", ja: "ラゲッジバス(予約の申し込み)" },
    fields: [
      { k: "name", label: { en: "Name", ja: "氏名" }, type: "text" },
      { k: "date", label: { en: "Date", ja: "日付" }, type: "date" },
      { k: "from", label: { en: "Hand over at", ja: "預ける駅" }, type: "select", options: LB_POINTS },
      { k: "to", label: { en: "Pick up at", ja: "受け取る駅" }, type: "select", options: LB_POINTS },
      { k: "inns", label: { en: "Inn or place (if not a station)", ja: "宿・場所の名前(駅以外の場合)" }, type: "text", opt: true },
      { k: "bags", label: { en: "Bags", ja: "個数" }, type: "count" },
    ],
    estimate: (l, v) => {
      const e = estimate(lbPos(v.from ?? ""), lbPos(v.to ?? ""), Number(v.bags ?? 0));
      if (!e) return null;
      return { total: yen(e.total), detail: e.parts.map((p) => `${p[l]} ${yen(p.yen)}`).join(" + ") };
    },
    build: (l, g, est) =>
      l === "ja"
        ? `こんにちは。下記内容でラゲッジバスの予約を申し込みます。\n氏名:${g("name")}\n日時:${g("date")}\n預ける駅:${g("from")}\n受け取る駅:${g("to")}\n宿・場所:${g("inns")}\n個数:${g("bags")}個\n概算金額:${est}`
        : `Hello! I'd like to request a Luggage Bus booking.\nName: ${g("name")}\nDate: ${g("date")}\nHand over at: ${g("from")}\nPick up at: ${g("to")}\nInn or place: ${g("inns")}\nBags: ${g("bags")}\nEstimate: ${est}`,
  },
  "luggage-send": {
    title: { en: "Luggage Bus — after payment", ja: "ラゲッジバス(支払い後の連絡)" },
    fields: [
      { k: "name", label: { en: "Name", ja: "氏名" }, type: "text" },
      { k: "num", label: { en: "Number of bags", ja: "個数" }, type: "count" },
      { k: "from", label: { en: "Depart from", ja: "預ける場所" }, type: "select", options: LB_POINTS },
      { k: "to", label: { en: "Arrive at", ja: "受け取る場所" }, type: "select", options: LB_POINTS },
    ],
    build: (l, g) =>
      l === "ja"
        ? `①氏名:${g("name")}\n②個数:${g("num")}\n③預ける場所:${g("from")}\n④受け取る場所:${g("to")}`
        : `①name is ${g("name")}\n②number is ${g("num")}\n③depart from ${g("from")}\n④arrive at ${g("to")}`,
  },
  spray: {
    title: { en: "Bear Spray Rental (no bags)", ja: "熊スプレーのみレンタル" },
    fields: [
      { k: "name", label: { en: "Name", ja: "氏名" }, type: "text" },
      { k: "num", label: { en: "Bottles", ja: "本数" }, type: "count" },
      { k: "from", label: { en: "Pick up at", ja: "受取場所" }, type: "select", options: COUNTERS },
      { k: "to", label: { en: "Return at", ja: "返却場所" }, type: "select", options: COUNTERS },
    ],
    build: (l, g) =>
      l === "ja"
        ? `熊スプレーのみレンタル(荷物運びなし)\n①氏名:${g("name")}\n②本数:${g("num")}\n③受取場所:${g("from")}\n④返却場所:${g("to")}`
        : `Bear spray rental only (no bags)\n①name is ${g("name")}\n②number of bottles is ${g("num")}\n③pick up at ${g("from")}\n④return at ${g("to")}`,
  },
  gear: {
    title: { en: "Gear Rental", ja: "ギアレンタル" },
    fields: [
      { k: "date", label: { en: "Date", ja: "日付" }, type: "date" },
      { k: "start", label: { en: "Start", ja: "出発" }, type: "select", options: POINTS },
      { k: "finish", label: { en: "Finish", ja: "到着" }, type: "select", options: POINTS },
      { k: "hat", label: { en: "Hinoki hat", ja: "檜傘" }, type: "count", opt: true },
      { k: "bear", label: { en: "Bear-deterrent kit", ja: "クマよけグッズ" }, type: "count", opt: true },
      { k: "rash", label: { en: "Rashguard", ja: "ラッシュガード" }, type: "count", opt: true },
      { k: "life", label: { en: "Life jacket", ja: "ライフジャケット" }, type: "count", opt: true },
    ],
    build: (l, g) =>
      l === "ja"
        ? `こんにちは。下記内容でギアレンタルを検討しています。\n日時:${g("date")}\n出発:${g("start")}\n到着:${g("finish")}\n檜傘:${g("hat")}\nクマよけグッズ:${g("bear")}\nラッシュガード:${g("rash")}\nライフジャケット:${g("life")}`
        : `Hello! I'm interested in renting gear as follows.\nDate: ${g("date")}\nStart: ${g("start")}\nFinish: ${g("finish")}\nHinoki hat: ${g("hat")}\nBear-deterrent kit: ${g("bear")}\nRashguard: ${g("rash")}\nLife jacket: ${g("life")}`,
  },
  guided: {
    title: { en: "Guided Tours", ja: "ガイドツアー" },
    fields: [
      { k: "date", label: { en: "Date", ja: "日付" }, type: "date" },
      {
        k: "tour",
        label: { en: "Tour", ja: "ツアー" },
        type: "select",
        options: {
          en: ["Kiso River Downhill (shodo calligraphy if it rains)", "early morning ride"],
          ja: ["木曽川ダウンヒル(雨天時は書道体験)", "早朝ライド"],
        },
      },
      { k: "people", label: { en: "People", ja: "人数" }, type: "count" },
    ],
    build: (l, g) =>
      l === "ja"
        ? `こんにちは。下記内容でガイドツアー参加を検討しています。\n日時:${g("date")}\nツアー:${g("tour")}\n人数:${g("people")}名`
        : `Hello! I'm interested in joining a guided tour as follows.\nDate: ${g("date")}\nTour: ${g("tour")}\nPeople: ${g("people")}`,
  },
  shodo: {
    title: { en: "Shodo Calligraphy", ja: "書道体験" },
    fields: [
      { k: "date", label: { en: "Date", ja: "日付" }, type: "date" },
      { k: "people", label: { en: "People", ja: "人数" }, type: "count" },
    ],
    build: (l, g) =>
      l === "ja"
        ? `こんにちは。下記内容でガイドツアー参加を検討しています。\n日時:${g("date")}\nツアー:書道体験\n人数:${g("people")}名`
        : `Hello! I'm interested in joining a guided tour as follows.\nDate: ${g("date")}\nTour: shodo calligraphy\nPeople: ${g("people")}`,
  },
  plan: {
    title: { en: "Plan Your Stay (one message)", ja: "滞在まるごとプラン" },
    fields: [
      { k: "from", label: { en: "Arrive", ja: "到着日" }, type: "date" },
      { k: "to", label: { en: "Leave", ja: "出発日" }, type: "date" },
      { k: "people", label: { en: "People", ja: "人数" }, type: "count" },
      { k: "dinner", label: { en: "Dinners at Kashiwaya", ja: "柏屋での夕食(回数)" }, type: "count", opt: true },
      { k: "breakfast", label: { en: "Breakfasts at Kashiwaya", ja: "柏屋での朝食(回数)" }, type: "count", opt: true },
      { k: "bikes", label: { en: "E-bikes", ja: "E-bike台数" }, type: "count", opt: true },
      { k: "bikedate", label: { en: "E-bike day", ja: "E-bikeの日" }, type: "date" },
      { k: "bags", label: { en: "Luggage shuttle (bags)", ja: "手荷物シャトル(個数)" }, type: "count", opt: true },
      {
        k: "tour",
        label: { en: "Guided tour", ja: "ガイドツアー" },
        type: "select",
        options: {
          en: ["not needed", "Kiso River Downhill", "early morning ride"],
          ja: ["不要", "木曽川ダウンヒル", "早朝ライド"],
        },
      },
    ],
    build: (l, g) =>
      l === "ja"
        ? `こんにちは。下記内容で南木曽滞在を計画しています。\n日程:${g("from")}〜${g("to")}\n人数:${g("people")}名\n宿泊:柏屋(部屋はkashiwaya-inn.comで予約します)\n柏屋での食事:夕食${g("dinner")}/朝食${g("breakfast")}\nE-bikeレンタル:${g("bikedate")}に${g("bikes")}\n手荷物シャトル:${g("bags")}\nガイドツアー:${g("tour")}`
        : `Hello! I'm planning a Nagiso stay as follows.\nDates: ${g("from")} - ${g("to")}\nPeople: ${g("people")}\nStay: Kashiwaya (I'll book rooms on kashiwaya-inn.com)\nMeals at Kashiwaya: dinner x ${g("dinner")} / breakfast x ${g("breakfast")}\nE-bike rental: ${g("bikes")} bikes on ${g("bikedate")}\nLuggage shuttle: ${g("bags")} bags\nGuided tour: ${g("tour")}`,
  },
  kakizore: {
    title: { en: "E-Bikes for the Kakizore Gorge", ja: "柿其渓谷E-bike" },
    fields: [
      { k: "date", label: { en: "Date", ja: "日付" }, type: "date" },
      { k: "bikes", label: { en: "Bikes", ja: "台数" }, type: "count" },
      {
        k: "pickup",
        label: { en: "Pick-up point", ja: "受け取り" },
        type: "select",
        options: {
          en: ["Tenpaku Park parking lot (Nagiso)", "Junikane Station"],
          ja: ["天白公園駐車場", "十二兼駅"],
        },
      },
      { k: "time", label: { en: "Pick-up time", ja: "受け取り時間" }, type: "text" },
      { k: "bear", label: { en: "Bear-deterrent kit", ja: "クマよけグッズ" }, type: "count", opt: true },
    ],
    build: (l, g) =>
      l === "ja"
        ? `こんにちは。柿其渓谷用のE-bikeを予約したいです。\n希望日:${g("date")}\n台数:${g("bikes")}台\n受け取り:${g("pickup")}\n受け取り時間:${g("time")}\nクマよけグッズ:${g("bear")}`
        : `Hello! I'd like to reserve e-bikes for the Kakizore Gorge as follows.\nDate: ${g("date")}\nBikes: ${g("bikes")}\nPick-up point: ${g("pickup")}\nPick-up time: ${g("time")}\nBear-deterrent kit: ${g("bear")}`,
  },
  "kakizore-car": {
    title: { en: "Kakizore by Car — E-Bikes at Tenpaku Park", ja: "柿其渓谷E-bike(天白公園駐車場)" },
    fields: [
      { k: "date", label: { en: "Date", ja: "日付" }, type: "date" },
      { k: "bikes", label: { en: "Bikes", ja: "台数" }, type: "count" },
      { k: "time", label: { en: "Pick-up time", ja: "受け取り時間" }, type: "text" },
    ],
    build: (l, g) =>
      l === "ja"
        ? `こんにちは。柿其渓谷用のE-bikeを予約したいです。\n希望日:${g("date")}\n台数:${g("bikes")}台\n受け取り時間:${g("time")}\n受け取り・乗り捨て:天白公園駐車場`
        : `Hello! I'd like to reserve e-bikes for the Kakizore Gorge.\nDate: ${g("date")}\nBikes: ${g("bikes")}\nPick-up time: ${g("time")}\nPick-up & drop-off: Tenpaku Park parking lot`,
  },
  atera: {
    title: { en: "E-Bikes for the Atera Gorge", ja: "阿寺渓谷E-bike" },
    fields: [
      { k: "date", label: { en: "Date", ja: "希望日" }, type: "date" },
      { k: "bikes", label: { en: "Bikes", ja: "台数" }, type: "count" },
    ],
    build: (l, g) =>
      l === "ja"
        ? `阿寺渓谷用のE-bikeを予約したいです。\n希望日:${g("date")}\n台数:${g("bikes")}台\n受け取り:野尻駅`
        : `Hello! I'd like to reserve e-bikes for the Atera Gorge.\nDate: ${g("date")}\nBikes: ${g("bikes")}\nPick-up: Nojiri Station`,
  },
};

const T = {
  en: {
    eyebrow: "Booking message builder",
    lead: "Fill in what you know — the message writes itself below. Anything you leave blank stays open, and a human replies either way.",
    preview: "Your message",
    send: "Open WhatsApp with this message",
    notFound: "Pick a service from any page's booking button.",
    blank: "__",
    notNeeded: "not needed",
    choose: "— choose —",
    estimate: "Estimated price",
    estimateNote: "An estimate from the stations and bags you chose — the final price comes with our approval.",
    estimateNone: "to be confirmed",
  },
  ja: {
    eyebrow: "予約メッセージをつくる",
    lead: "わかるところだけ埋めてください——下にメッセージが自動で出来上がります。空欄のままでもOK、人間が返信します。",
    preview: "送信メッセージ",
    send: "このメッセージでWhatsAppを開く",
    notFound: "各ページの予約ボタンからサービスを選んでください。",
    blank: "〇",
    notNeeded: "不要",
    choose: "—選択—",
    estimate: "概算金額",
    estimateNote: "選んだ駅と個数からの概算です。確定の金額は承認のときにお伝えします。",
    estimateNone: "要相談",
  },
};

export default function BookForm({ lang }: { lang: Lang }) {
  const params = useSearchParams();
  const key = params.get("s") ?? "";
  const svc = SERVICES[key];
  const [v, setV] = useState<Record<string, string>>({});
  const t = T[lang];

  if (!svc) {
    return (
      <div className="lp">
        <SiteNav lang={lang} />
        <header className="page-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{lang === "ja" ? "予約フォーム" : "Booking form"}</h1>
          <p>{t.notFound}</p>
        </header>
        <SiteFooter lang={lang} />
      </div>
    );
  }

  const g = (k: string) => {
    const field = svc.fields.find((f) => f.k === k);
    const raw = v[k] ?? "";
    if (field?.type === "date") return fDate(lang, raw);
    if (raw === "") return field?.opt ? t.notNeeded : t.blank;
    return raw;
  };
  const est = svc.estimate?.(lang, v) ?? null;
  const message = svc.build(lang, g, est ? `${est.total}(${est.detail})` : t.estimateNone);

  return (
    <div className="lp">
      <SiteNav lang={lang} />
      <header className="page-head">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{svc.title[lang]}</h1>
        <p>{t.lead}</p>
      </header>

      <section className="mini-sec" id="form">
        <div className="book-form">
          {svc.fields.map((f) => (
            <div className="book-field" key={f.k}>
              <label htmlFor={`bf-${f.k}`}>{f.label[lang]}</label>
              {f.type === "select" ? (
                <select
                  id={`bf-${f.k}`}
                  value={v[f.k] ?? ""}
                  onChange={(e) => setV({ ...v, [f.k]: e.target.value })}
                >
                  <option value="">{t.choose}</option>
                  {(f.options?.[lang] ?? []).map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : f.type === "count" ? (
                <select
                  id={`bf-${f.k}`}
                  value={v[f.k] ?? ""}
                  onChange={(e) => setV({ ...v, [f.k]: e.target.value })}
                >
                  <option value="">{f.opt ? t.notNeeded : t.choose}</option>
                  {["1", "2", "3", "4", "5", "6", "7", "8"].map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={`bf-${f.k}`}
                  type={f.type === "date" ? "date" : "text"}
                  value={v[f.k] ?? ""}
                  onChange={(e) => setV({ ...v, [f.k]: e.target.value })}
                />
              )}
            </div>
          ))}

          {svc.estimate && (
            <div className="book-field">
              <label>{t.estimate}</label>
              <div className="book-estimate">
                <strong>{est ? est.total : t.estimateNone}</strong>
                {est && <span>{est.detail}</span>}
                <small>{t.estimateNote}</small>
              </div>
            </div>
          )}

          <div className="book-field">
            <label>{t.preview}</label>
            <div className="book-preview">{message}</div>
          </div>

          <a
            href={wa(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta book-send"
          >
            <MessageCircle size={16} /> {t.send}
          </a>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  );
}
