"use client";

import Link from "next/link";
import {
  MessageCircle,
  CreditCard,
  Footprints,
  PackageCheck,
  MapPin,
  ArrowRight,
  BedDouble,
  Clock,
  Ban,
  CalendarCheck,
} from "lucide-react";
import { SQUARE_PAY_URL, WHATSAPP_URL_JA } from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";
import { ShuttleCalendar } from "../../shuttle-calendar";
import { STOPS, FARES, DOOR_FEE, yen } from "../../luggage-bus";

export default function JaLuggageBusPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href="/ja/book?s=luggage">
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* PAGE HEAD——タイトル・キャッチコピー・写真 */}
      <header className="page-head page-head-grid">
        <div>
          <span className="head-badge">荷物専用・人は乗れません</span>
          <br />
          <span className="eyebrow">ラゲッジバス · 中津川 — 木曽福島</span>
          <h1>
            Yes Road, <em>No load.</em>
          </h1>
          <p>
            ラゲッジバスは、木曽谷の中津川・南木曽・野尻・木曽福島を、決まった時刻に1日1往復する荷物の定期便です。予約すれば宿の玄関で預かり、次の宿の玄関まで届けます。予約なしでも、時刻に合わせて停留所の窓口へ持ってくればOKです。
          </p>
          <p className="head-note">
            北行きは13:00までに木曽福島へ。宿のチェックインに間に合います。
          </p>
        </div>
        <figure className="page-head-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/shuttle-van.jpg"
            alt="ラゲッジバスのバン。スーツケースとバックパックを積んで谷を走ります"
          />
          <figcaption>運ぶのは荷物だけ。人は乗せません</figcaption>
        </figure>
      </header>

      {/* 荷物のみ */}
      <section className="mini-sec lb-notice-sec">
        <div className="lb-notice">
          <Ban size={26} />
          <div>
            <strong>荷物のみ(Luggage only)。ラゲッジバスに人は乗れません。</strong>
            <p>
              時刻表どおりに走るので「バス」と呼んでいますが、乗るのは荷物だけです。ご自身の移動は、徒歩・自転車・電車・路線バスでお願いします。
            </p>
          </div>
        </div>
      </section>

      {/* 時刻表 */}
      <section className="mini-sec" id="timetable">
        <span className="eyebrow">時刻表</span>
        <h2>運行日は、北へ1便、南へ1便。</h2>
        <div className="lb-table-wrap">
          <table className="lb-table">
            <thead>
              <tr>
                <th>停留所</th>
                <th>北行き ↑</th>
                <th>南行き ↓</th>
              </tr>
            </thead>
            <tbody>
              {[...STOPS].reverse().map((s) => (
                <tr key={s.ja}>
                  <th scope="row">
                    {s.ja}
                    {s.counter && <small>{s.counter.ja}</small>}
                  </th>
                  <td>
                    {s.north}
                    {s.ja === "木曽福島" && <small>着</small>}
                    {s.ja === "中津川" && <small>発</small>}
                  </td>
                  <td>
                    {s.south ?? "経由"}
                    {s.ja === "木曽福島" && <small>発</small>}
                    {s.ja === "中津川" && <small>までに着</small>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="drop-note">
          北行きは10:00〜13:00、南行きは13:00〜15:00の運行です。南行きの野尻・南木曽の時刻はその日の集荷で変わるので、WhatsAppでお知らせします。馬籠・妻籠には停まりません(下のよくある質問を参照)。
        </p>
      </section>

      {/* 2つの出し方 */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">2つの出し方</span>
          <h2>
            予約して宿から、<em>または飛び入りで。</em>
          </h2>
          <div className="mini-grid cols2">
            <div className="mini-card lb-way">
              <h3>
                <BedDouble size={20} /> 予約 · 宿から宿へ
              </h3>
              <p>
                WhatsAppで日付と宿を教えてください。出発の朝、宿のフロントに荷物を預けておけば、バスが回収して次の宿へ届けます。予約の荷物を優先して積みます。支払いは事前にカードで。
              </p>
            </div>
            <div className="mini-card lb-way">
              <h3>
                <Clock size={20} /> 飛び入り · 停留所で
              </h3>
              <p>
                予約は不要です。バスが来る前に停留所の窓口へ荷物を持ってきて、行き先の停留所の窓口で受け取ってください。空きがあれば運びます(繁忙期は予約優先)。支払いは窓口で、現金かQR決済。
              </p>
            </div>
          </div>

          {/* 4コマ */}
          <div className="koma-grid">
            <div className="koma">
              <span className="koma-num">1</span>
              <CalendarCheck size={26} />
              <h3>予約 or 飛び入り</h3>
              <p>宿から宿へならWhatsAppで予約。停留所へ直接でもOK。</p>
            </div>
            <div className="koma">
              <span className="koma-num">2</span>
              <PackageCheck size={26} />
              <h3>預ける</h3>
              <p>朝、宿のフロントへ。またはバスが来る前に停留所の窓口へ。</p>
            </div>
            <div className="koma">
              <span className="koma-num">3</span>
              <Footprints size={26} />
              <h3>歩く</h3>
              <p>中山道も、渓谷も、木曽谷も。肩に何も背負わずに。</p>
            </div>
            <div className="koma">
              <span className="koma-num">4</span>
              <MapPin size={26} />
              <h3>受け取る</h3>
              <p>次の宿で、またはバスが着いたあとの停留所の窓口で。</p>
            </div>
          </div>

          <p className="drop-note">
            ハイカーは朝8〜9時に宿を出ることが多く、バスが来る前になります。それで大丈夫です。バスが来るまで、宿や停留所の窓口が荷物を預かります。
          </p>
        </div>
      </section>

      {/* 料金 */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">料金(仮)</span>
        <h2>1個ごと、運ぶ区間の数で決まります。</h2>
        <div className="pricing">
          {FARES.map((f) => (
            <div className="pitem" key={f.sections}>
              <h4>{f.ja}</h4>
              <div className="amt">
                {yen(f.yen)}
                <span style={{ fontSize: "0.9rem" }}>/個</span>
              </div>
              <p>{f.exJa}</p>
            </div>
          ))}
          <p className="pricing-foot">
            宿の玄関での預かり・お届け:<strong>+{yen(DOOR_FEE)}</strong>。1区間は隣りあう停留所の間(中津川 — 南木曽 — 野尻 — 木曽福島)です。
          </p>
        </div>
        <p className="drop-note">
          料金は仮のもので、シーズン開始までに変わることがあります。WhatsAppでお伝えした金額が確定の料金です。
        </p>
      </section>

      {/* 営業日カレンダー */}
      <section className="cal-sec" id="calendar">
        <span className="eyebrow" style={{ display: "block", textAlign: "center", marginBottom: "1.2rem" }}>
          運行日
        </span>
        <ShuttleCalendar lang="ja" />
      </section>

      {/* 停留所 */}
      <section className="mini-sec" id="stops">
        <span className="eyebrow">停留所</span>
        <h2>中山道沿いの4つの停留所。</h2>
        <div className="mini-grid cols2">
          {STOPS.map((s) => {
            const body = (
              <>
                <h3>
                  <MapPin size={20} /> {s.ja}
                </h3>
                <p>
                  {s.counter
                    ? `${s.counter.ja}。タップで地図が開きます。`
                    : "駅周辺の窓口は準備中です。予約の荷物は宿で預かります。"}
                </p>
              </>
            );
            return s.map ? (
              <a
                key={s.ja}
                href={s.map}
                target="_blank"
                rel="noopener noreferrer"
                className="mini-card"
              >
                {body}
              </a>
            ) : (
              <div key={s.ja} className="mini-card lb-way">
                {body}
              </div>
            );
          })}
        </div>
      </section>

      {/* よくある質問 */}
      <section className="faq" id="faq">
        <h2>よくある質問</h2>
        <details className="faq-item">
          <summary>ラゲッジバスに乗れますか?</summary>
          <p>
            乗れません。運ぶのは荷物だけで、短い区間でも人は乗せられません。停留所の間はJR中央線が同じ谷を走っています。
          </p>
        </details>
        <details className="faq-item">
          <summary>馬籠・妻籠に泊まります。</summary>
          <p>
            馬籠・妻籠はルートに入っていません。2つの宿場の間は観光案内所の荷物運びがあります。妻籠から北へ送る場合は、南木曽の停留所(イズミヤカフェ)まで荷物を持ってきてください。WhatsAppで相談いただければ一緒に組み立てます。
          </p>
        </details>
        <details className="faq-item">
          <summary>荷物より先に着いてしまったら?</summary>
          <p>
            荷物は時刻表の時間ごろに各停留所へ着きます。先に着いたら窓口でコーヒーでも飲みながらお待ちください。宿から宿への予約なら、荷物は宿で待っています。
          </p>
        </details>
        <details className="faq-item">
          <summary>何個まで送れますか?</summary>
          <p>
            予約の荷物を先に積み、飛び入りは空きがあれば運びます。大人数や大きな荷物は、予約の前にご相談ください。
          </p>
        </details>
        <details className="faq-item">
          <summary>熊スプレーも借りたい。</summary>
          <p>
            熊スプレーなどは<Link href="/ja/gear">ギアレンタルのページ</Link>からどうぞ。
          </p>
        </details>
      </section>

      {/* 予約・支払い */}
      <section className="mini-sec" id="book">
        <span className="eyebrow">ご予約</span>
        <h2>荷物の行き先を教えてください。</h2>
        <div className="pay-row">
          <Link href="/ja/book?s=luggage" className="stay-cta">
            <MessageCircle size={16} /> WhatsAppで予約 <ArrowRight size={15} />
          </Link>
          <a
            href={SQUARE_PAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stay-cta"
          >
            <CreditCard size={16} /> オンライン決済(Square)
          </a>
        </div>
        <p className="drop-note">
          まずは質問から、という方は
          <a href={WHATSAPP_URL_JA} target="_blank" rel="noopener noreferrer">
            WhatsAppでどうぞ
          </a>
          。
        </p>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
