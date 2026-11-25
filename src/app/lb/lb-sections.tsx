import { MousePointerClick, CreditCard, CheckCircle2, Truck, Camera, Building2, ShieldCheck, Package, Train, CalendarDays } from "lucide-react";
import { LB_COMPENSATION_YEN, LB_COMPENSATION_PERSON_YEN, LB_NAKATSUGAWA_DROP, LB_YAMATO_RELAY } from "../lb-config";
import { yen, SEASON_START, SEASON_END, COMPENSATION_TEXT } from "../luggage-bus";
import { CLOSED_DAYS } from "../closed-days";

type Lang = "en" | "ja";

/** "Choose → pay → confirmed": the strength we show (2026-11-20 社長).
 *  No names of other companies. */
export function LbInstantSteps({ lang }: { lang: Lang }) {
  const ja = lang === "ja";
  const steps = [
    { icon: <MousePointerClick size={24} />, t: ja ? "選ぶ" : "Choose", d: ja ? "宿か駅と個数を選ぶと、料金がその場で出ます。" : "Pick your inns or stations and bags. The price shows at once." },
    { icon: <CreditCard size={24} />, t: ja ? "払う" : "Pay", d: ja ? "カードでそのまま支払います。" : "Pay by card, right there." },
    { icon: <CheckCircle2 size={24} />, t: ja ? "その場で確定" : "Confirmed", d: ja ? "支払った時点で予約確定。宿にはこちらから連絡します。" : "Paid = booked. We let both inns know ourselves." },
  ];
  return (
    <section className="mini-sec" id="instant">
      <span className="eyebrow">{ja ? "見積もり不要・返事待ちなし" : "No quotes. No waiting."}</span>
      <h2>{ja ? "選ぶ → 払う → その場で確定。" : "Choose → pay → confirmed on the spot."}</h2>
      <div className="mini-grid cols3">
        {steps.map((s, i) => (
          <div className="mini-card lb-way" key={s.t}>
            <h3>
              {s.icon} {i + 1}. {s.t}
            </h3>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
      <p className="drop-note">
        {ja
          ? "見積もりを頼んで返事を待つ必要はありません。範囲内なら、一覧にない宿でもその場で確定します(6個以上だけWhatsAppで)。"
          : "No need to ask for a quote and wait for a reply. Anywhere on our route — even an inn that isn't listed — is confirmed on the spot (only 6+ bags go through WhatsApp)."}
      </p>
    </section>
  );
}

/** Peace of mind. Compensation: up to ¥100,000 per bag / ¥150,000 per person
 *  (2026-11-24 社長). Insurance is not shown for now (社長「いったん伏せる」). */
export function LbTrust({ lang }: { lang: Lang }) {
  const ja = lang === "ja";
  return (
    <div className="mini-grid cols3">
      <div className="mini-card lb-way">
        <h3><Truck size={20} /> {ja ? "事業用の登録車両" : "A registered commercial van"}</h3>
        <p>{ja ? "荷物は、事業用に登録した車両(黒ナンバー)で運びます。" : "Your bags travel in a van registered for commercial delivery (a black-plate vehicle in Japan)."}</p>
      </div>
      <div className="mini-card lb-way">
        <h3><Camera size={20} /> {ja ? "タグと写真で記録" : "Tag and photo for every bag"}</h3>
        <p>{ja ? "荷物1個ずつ写真を受け取り、回収のときにタグを付けて記録します。" : "We get a photo of each bag before we take it, and tag it when we collect."}</p>
      </div>
      <div className="mini-card lb-way">
        <h3><Building2 size={20} /> {ja ? "運営者" : "Who we are"}</h3>
        <p>
          {ja
            ? "合同会社FROM SCRATCH(南木曽町)。ゲストハウス柏屋とE-bikeのキソライドを運営しています。"
            : "From Scratch LLC, Nagiso. We also run Guesthouse Kashiwaya and Kiso Ride e-bikes."}{" "}
          <a href={ja ? "https://nakasendo-ebike.com/ja/legal" : "https://nakasendo-ebike.com/legal"}>{ja ? "特定商取引法の表記" : "Legal notice"}</a>
        </p>
      </div>
      <div className="mini-card lb-way">
        <h3>
          <ShieldCheck size={20} />{" "}
          {ja
            ? `1個${yen(LB_COMPENSATION_YEN)}・1人${yen(LB_COMPENSATION_PERSON_YEN)}まで補償`
            : `Covered up to ${yen(LB_COMPENSATION_YEN)} per bag, ${yen(LB_COMPENSATION_PERSON_YEN)} per person`}
        </h3>
        <p>{COMPENSATION_TEXT[lang]}</p>
      </div>
    </div>
  );
}

/** Nakatsugawa station drop and the Yamato relay: arrangements not confirmed
 *  yet, so both are off unless switched on in lb-config. */
export function LbArrangements({ lang }: { lang: Lang }) {
  const ja = lang === "ja";
  const cards: React.ReactNode[] = [];
  if (LB_NAKATSUGAWA_DROP !== "off")
    cards.push(
      <div className="mini-card lb-way" key="nakatsugawa">
        <h3><Train size={20} /> {ja ? "中津川駅前で預けて手ぶらに" : "Hands-free from Nakatsugawa Station"}</h3>
        <p>
          {LB_NAKATSUGAWA_DROP === "soon"
            ? "Coming soon"
            : ja
              ? "電車で中津川に着いたら、駅前の「にぎわい特産館」で荷物を預けて、手ぶらで馬籠行きのバスへ。荷物は夜の宿に届きます。"
              : "Arriving by train? Leave your bags at Nigiwai Tokusankan in front of Nakatsugawa Station and take the bus to Magome bag-free. Your bags go on to tonight's inn."}
        </p>
      </div>,
    );
  if (LB_YAMATO_RELAY !== "off")
    cards.push(
      <div className="mini-card lb-way" key="yamato">
        <h3><Package size={20} /> {ja ? "遠方からはヤマトとの中継" : "Coming from far away: Yamato + Luggage Bus"}</h3>
        <p>
          {LB_YAMATO_RELAY === "soon"
            ? "Coming soon"
            : ja
              ? "前日までにヤマト運輸(宅急便)で、こちらの範囲内のお泊まりの宿へ荷物を送り、そこから先をラゲッジバスが運びます。宿が宿泊者あての荷物を受け取れるか、事前に宿へご確認ください。"
              : "Send your bags ahead with Yamato Transport (TA-Q-BIN) to your first inn on our route, and the Luggage Bus carries them on from there. Please check with that inn first that it accepts parcels for guests."}
        </p>
      </div>,
    );
  if (!cards.length) return null;
  return (
    <section className="mini-sec" id="arrangements">
      <span className="eyebrow">{ja ? "もっと身軽に" : "Travel lighter"}</span>
      <h2>{ja ? "駅や遠方からの使い方。" : "From the station, or from far away."}</h2>
      <div className="mini-grid cols2">{cards}</div>
    </section>
  );
}

/** Service calendar: March 2027 – February 2028, every day except Mondays
 *  (2026-11-24 社長). Extra closing days from the shared calendar are marked too. */
export function LbServiceCalendar({ lang }: { lang: Lang }) {
  const ja = lang === "ja";
  const months: { y: number; m: number }[] = [];
  let y = Number(SEASON_START.slice(0, 4));
  let m = Number(SEASON_START.slice(5, 7));
  while (`${y}-${String(m).padStart(2, "0")}` <= SEASON_END.slice(0, 7)) {
    months.push({ y, m });
    m++;
    if (m > 12) {
      m = 1;
      y++;
    }
  }
  const wd = ja ? ["月", "火", "水", "木", "金", "土", "日"] : ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const MON_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <section className="mini-sec" id="calendar">
      <h2>
        <CalendarDays size={22} /> {ja ? "2027年3月〜2028年2月、月曜以外は毎日運行。" : "March 2027 – February 2028, every day except Mondays."}
      </h2>
      <div className="lb-cal-grid">
        {months.map(({ y, m }) => {
          const first = new Date(Date.UTC(y, m - 1, 1));
          const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
          const lead = (first.getUTCDay() + 6) % 7; // Monday first
          const cells: (number | null)[] = [...Array(lead).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
          return (
            <div className="lb-cal" key={`${y}-${m}`}>
              <h3>{ja ? `${y}年${m}月` : `${MON_EN[m - 1]} ${y}`}</h3>
              <div className="lb-cal-days">
                {wd.map((w) => (
                  <span key={w} className="lb-cal-wd">
                    {w}
                  </span>
                ))}
                {cells.map((d, i) => {
                  if (d === null) return <span key={`e${i}`} />;
                  const iso = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
                  const off = new Date(`${iso}T00:00:00Z`).getUTCDay() === 1 || CLOSED_DAYS.has(iso);
                  return (
                    <span key={iso} className={off ? "lb-cal-d off" : "lb-cal-d on"} title={off ? (ja ? "運休" : "No runs") : ja ? "運行" : "Running"}>
                      {d}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <p className="drop-note">
        <span className="lb-cal-d on">1</span> {ja ? "運行" : "running"} <span className="lb-cal-d off">1</span> {ja ? "運休(毎週月曜など)" : "no runs (Mondays etc.)"}
      </p>
    </section>
  );
}
