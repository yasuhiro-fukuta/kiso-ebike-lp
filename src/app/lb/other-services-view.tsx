import { ArrowRight, ExternalLink } from "lucide-react";
import { LbNav, LbFooter } from "./lb-chrome";
import { OTHER_SERVICES, OUT_OF_RANGE, LINE } from "../luggage-bus";

type Lang = "en" | "ja";

/** Magome, Tsumago and Ran are outside our route (2026-11-19). We point to
 *  other local services instead (2026-11-20: NLTS and Walk Lite). */
export function OtherServicesView({ lang }: { lang: Lang }) {
  const ja = lang === "ja";
  const out = OUT_OF_RANGE.map((o) => o.name[lang]).join(ja ? "・" : ", ");
  const range = LINE.map((a) => a.name[lang]).join(ja ? "・" : ", ");
  return (
    <div className="lp">
      <LbNav lang={lang} />
      <header className="page-head">
        <span className="eyebrow">{ja ? "範囲外の方へ" : "Outside our route"}</span>
        <h1>{ja ? `${out}へは運んでいません。` : `We don't serve ${out}.`}</h1>
        <p>
          {ja
            ? "これらの地点から・これらの地点への荷物は、地元の次のサービスをご利用ください。"
            : "For bags to or from these places, please use one of these local services."}
        </p>
      </header>
      <section className="mini-sec">
        <div className="mini-grid cols2">
          {OTHER_SERVICES.map((s) => (
            <div className="mini-card lb-way" key={s.url}>
              <h3>{s.name}</h3>
              <p>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.url.replace(/^https:\/\//, "").replace(/\/$/, "")} <ExternalLink size={14} />
                </a>
              </p>
            </div>
          ))}
        </div>
        <p className="drop-note">
          {ja ? `ラゲッジバスの範囲:${range}。` : `The Luggage Bus covers: ${range}.`}{" "}
          <a href={ja ? "../ja" : "./"}>
            {ja ? "範囲内ならこちらで予約" : "Book with us within this range"} <ArrowRight size={14} />
          </a>
        </p>
      </section>
      <LbFooter lang={lang} />
    </div>
  );
}
