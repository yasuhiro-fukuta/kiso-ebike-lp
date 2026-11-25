"use client";

import { MapPin, ArrowRight, Clock, Luggage } from "lucide-react";
import { LbNav, LbFooter, LbFloat, EBIKE_SITE } from "./lb-chrome";
import { STATIONS, placeName, yen, estimate, posOf, DROP_BY, ARRIVE_BY } from "../luggage-bus";

const kfFare = (bags: number) => estimate(posOf("nagiso-st"), posOf("kisofukushima"), bags)?.total ?? 0;
import { GUIDE_FAQ } from "./guide-faq";

type Lang = "en" | "ja";

/** Section guide: Nagiso → Kiso-Fukushima (the full northbound run). */

export function GuideNagisoKf({ lang }: { lang: Lang }) {
  const ja = lang === "ja";
  const from = STATIONS.filter((s) => s.area === "nagiso-st" || s.area === "nagiso");
  const to = STATIONS.find((s) => s.area === "kisofukushima");
  const book = ja ? `${EBIKE_SITE}/ja/book?s=luggage` : `${EBIKE_SITE}/book?s=luggage`;
  const faq = GUIDE_FAQ[lang];

  return (
    <div className="lp lbx lbx-page">
      <LbNav lang={lang} />
      <LbFloat href={book}>{ja ? "荷物の予約へ" : "Book your bags"}</LbFloat>

      <header className="page-head">
        <span className="eyebrow">{ja ? "区間ガイド" : "Section guide"}</span>
        <h1>
          {ja ? (
            <>南木曽 → 木曽福島。<em>荷物だけ先に宿へ。</em></>
          ) : (
            <>Nagiso to Kiso-Fukushima, <em>bag-free.</em></>
          )}
        </h1>
        <p>
          {ja
            ? "中山道の南木曽から木曽福島まで、荷物を当日中に宿へ運びます。朝、南木曽の駅(預け場所)に荷物を預けたら、あとは手ぶらで歩く・走るだけ。荷物は木曽福島で待っています。"
            : "Send your luggage along the Nakasendo from Nagiso to Kiso-Fukushima on the same day. Leave your bags at a Nagiso stop in the morning, then walk or ride with nothing on your back. Your bags wait for you in Kiso-Fukushima."}
        </p>
      </header>

      <section className="mini-sec">
        <span className="eyebrow">{ja ? "この区間の要点" : "At a glance"}</span>
        <h2>{ja ? "時間・料金・締切。" : "Times, price and deadline."}</h2>
        <div className="lb-table-wrap">
          <table className="lb-table lb-compare">
            <tbody>
              <tr>
                <th scope="row"><Clock size={16} /> {ja ? "預ける" : "Drop off"}</th>
                <td className="us">
                  {ja
                    ? `朝${DROP_BY}まで(前日の夕方でも可)`
                    : `By ${DROP_BY} in the morning (or the evening before)`}
                </td>
              </tr>
              <tr>
                <th scope="row"><MapPin size={16} /> {ja ? "届く" : "Arrives"}</th>
                <td className="us">{ja ? `当日 ${ARRIVE_BY}までに木曽福島` : `Same day, by ${ARRIVE_BY} in Kiso-Fukushima`}</td>
              </tr>
              <tr>
                <th scope="row"><Luggage size={16} /> {ja ? "料金" : "Price"}</th>
                <td className="us">
                  {ja
                    ? `荷物1個 ${yen(kfFare(1))} / 2個 ${yen(kfFare(2))} / 3個 ${yen(kfFare(3))}`
                    : `1 bag ${yen(kfFare(1))} · 2 bags ${yen(kfFare(2))} · 3 bags ${yen(kfFare(3))}`}
                </td>
              </tr>
              <tr>
                <th scope="row">{ja ? "申し込み" : "Book by"}</th>
                <td className="us">{ja ? "前日23時まで。支払いで予約確定" : "23:00 the day before. Confirmed when you pay"}</td>
              </tr>
              <tr>
                <th scope="row">{ja ? "運休" : "No runs"}</th>
                <td className="us">
                  {ja ? "毎週月曜(運行期間は2027年3月〜2028年2月)" : "Mondays (we run March 2027 – February 2028)"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mini-sec">
        <span className="eyebrow">{ja ? "預ける・受け取る場所" : "Where to drop and collect"}</span>
        <h2>{ja ? "南木曽で預けて、木曽福島で受け取る。" : "Drop in Nagiso, collect in Kiso-Fukushima."}</h2>
        <div className="mini-grid cols2">
          {[...from, to].map((s) =>
            s ? (
              <div key={s.area} className="mini-card lb-way">
                <h3><MapPin size={20} /> {s.name[lang]}</h3>
                <ul className="lb-places">
                  {s.places.map((pl) => (
                    <li key={pl.id}>
                      {pl.map ? (
                        <a href={pl.map} target="_blank" rel="noopener noreferrer">{placeName(pl, lang)}</a>
                      ) : (
                        placeName(pl, lang)
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null,
          )}
        </div>
        <p className="drop-note">
          {ja
            ? "宿の駅は、その宿に泊まる方だけが使えます。途中の野尻・須原・上松で受け取ることもできます。"
            : "Inn stops are for that inn's guests only. You can also collect at Nojiri, Suhara or Agematsu on the way."}
        </p>
      </section>

      <section className="faq">
        <h2>{ja ? "この区間のよくある質問" : "Questions about this section"}</h2>
        {faq.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      <section className="mini-sec">
        <h2>{ja ? "荷物の行き先を教えてください。" : "Tell us where your bags are going."}</h2>
        <div className="pay-row">
          <a href={book} className="stay-cta">
            {ja ? "荷物の予約へ" : "Book your bags"} <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <LbFooter lang={lang} />
    </div>
  );
}
