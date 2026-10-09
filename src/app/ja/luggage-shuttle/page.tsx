"use client";

import Link from "next/link";
import {
  MessageCircle,
  CreditCard,
  Footprints,
  PackageCheck,
  MapPin,
  ArrowRight,
  Ban,
  Send,
} from "lucide-react";
import { WHATSAPP_URL_JA } from "../../site";
import { SiteNav, SiteFooter, FloatBook } from "../../chrome";
import { ShuttleCalendar } from "../../shuttle-calendar";
import { STOPS, RUNS, ARRIVALS, ZONES, ZONE_FEE, BAG_FEE, EXAMPLES, fare, yen } from "../../luggage-bus";

export default function JaLuggageBusPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href="/ja/book?s=luggage">
        <MessageCircle size={18} /> WhatsAppで申し込む
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
            ラゲッジバスは、中山道の中津川・馬籠・妻籠・南木曽・野尻・上松・木曽福島を、毎日決まった時刻で結ぶ荷物の定期便です。朝、泊まった宿や、駅の周りで荷物を預けられるカフェ・観光案内所に荷物を預けたら、あとは手ぶらで歩くだけ。荷物は行き先で待っています。
          </p>
          <p className="head-note">
            馬籠から木曽福島へは当日13:30〜14:00ごろに届き、チェックインに間に合います。ご利用は予約制です。WhatsAppで申し込み、こちらの承認で確定します。
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
        <h2>1日4便。北へ歩く人に合わせたダイヤです。</h2>
        <div className="lb-runs">
          {RUNS.map((r) => (
            <div className={`lb-run${r.north ? " north" : ""}`} key={r.no}>
              <span className="lb-run-dir">
                {r.no} {r.north ? "北行き" : "南行き"}
              </span>
              <span className="lb-run-time">{r.time.replace("–", "〜")}</span>
              <span className="lb-run-route">{r.route.ja}</span>
            </div>
          ))}
        </div>
        <p className="drop-note">
          中山道は北へ歩く人が多いので、北行きの便に時間を多く取っています。南行きは時間が短く、行き先によっては少し不便になります。届く時間は下の表をご覧ください。
        </p>

        <h3 className="lb-sub">荷物が届く時間</h3>
        <div className="lb-table-wrap">
          <table className="lb-table">
            <thead>
              <tr>
                <th>どこから → どこへ</th>
                <th>届く時間</th>
              </tr>
            </thead>
            <tbody>
              {ARRIVALS.map((a) => (
                <tr key={a.flow.ja} className={a.next ? "next" : undefined}>
                  <th scope="row">{a.flow.ja}</th>
                  <td>{a.when.ja}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 申し込み方法 */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">申し込み方法</span>
          <h2>
            WhatsAppで申し込み、<em>承認されたら支払い。</em>
          </h2>
          <p>
            ご利用はすべて予約制です。予約のない荷物はお預かりできません。WhatsAppで申し込んでいただくと、便の空きを確認して、承認と一緒に決済リンクをお送りします。
          </p>

          <div className="koma-grid">
            <div className="koma">
              <span className="koma-num">1</span>
              <Send size={26} />
              <h3>申し込む</h3>
              <p>WhatsAppで、日付・預ける駅と受け取る駅(わかれば宿の名前も)・個数を送ります。</p>
            </div>
            <div className="koma">
              <span className="koma-num">2</span>
              <CreditCard size={26} />
              <h3>承認・支払い</h3>
              <p>承認と一緒にSquareの決済リンクが届きます。支払ったら予約確定です。</p>
            </div>
            <div className="koma">
              <span className="koma-num">3</span>
              <PackageCheck size={26} />
              <h3>預ける</h3>
              <p>朝、宿か、こちらがお伝えする駅周辺のカフェ・案内所に預けて歩き出します。</p>
            </div>
            <div className="koma">
              <span className="koma-num">4</span>
              <Footprints size={26} />
              <h3>受け取る</h3>
              <p>便が着いたあと、次の宿か、行き先の駅周辺の預け場所で受け取ります。</p>
            </div>
          </div>

          <p className="drop-note">
            ハイカーは朝8〜9時に出発することが多く、バスが来る前になります。それで大丈夫です。バスが来るまで宿や預け場所が荷物を預かります。南木曽発9:00の南行き(①)は、8:50まで(または前日の夕方)に預けてください。
          </p>
        </div>
      </section>

      {/* 料金 */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">料金</span>
        <h2>配送料+荷物1個1,500円。</h2>
        <div className="pricing">
          {ZONES.map((z) => (
            <div className="pitem" key={z.name.en}>
              <h4>{z.name.ja}</h4>
              <div className="amt">
                {yen(ZONE_FEE)}
                <span style={{ fontSize: "0.9rem" }}>/1予約</span>
              </div>
              <p>{z.route.ja}</p>
            </div>
          ))}
          <div className="pitem">
            <h4>荷物</h4>
            <div className="amt">
              +{yen(BAG_FEE)}
              <span style={{ fontSize: "0.9rem" }}>/個</span>
            </div>
            <p>距離に関係なく1個ごと。</p>
          </div>
          <p className="pricing-foot">
            配送料は1件の予約ごとに、荷物が通る区域1つにつき1,500円です。南部と中部の境目は南木曽です。
          </p>
        </div>

        <h3 className="lb-sub">計算例</h3>
        <div className="lb-table-wrap">
          <table className="lb-table">
            <thead>
              <tr>
                <th>区間</th>
                <th>個数</th>
                <th>合計</th>
              </tr>
            </thead>
            <tbody>
              {EXAMPLES.map((x) => (
                <tr key={`${x.trip.en}-${x.bags}`}>
                  <th scope="row">
                    {x.trip.ja}
                    <small>
                      配送料 {yen(x.zones * ZONE_FEE)} + {yen(BAG_FEE)} × {x.bags}
                    </small>
                  </th>
                  <td>{x.bags}</td>
                  <td>{yen(fare(x.zones, x.bags))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="drop-note">
          合計金額は、承認のときに決済リンクと一緒にWhatsAppでお伝えします。
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
        <h2>中山道沿いの7つの駅。</h2>
        <p className="drop-note" style={{ marginTop: "-1rem", marginBottom: "1.6rem" }}>
          各駅では、駅の周りの宿か、荷物を預けられる場所(カフェや観光案内所など)で受け渡しします。具体的な場所は、予約の承認のときにお知らせします。
        </p>
        <div className="mini-grid">
          {STOPS.map((s) => {
            const body = (
              <>
                <h3>
                  <MapPin size={20} /> {s.station.ja}
                </h3>
                <p>
                  {s.known
                    ? `駅周辺の宿、または${s.known.ja}。タップで地図が開きます。`
                    : "駅周辺の宿、または荷物を預けられるカフェ・観光案内所。"}
                </p>
              </>
            );
            return s.map ? (
              <a
                key={s.key}
                href={s.map}
                target="_blank"
                rel="noopener noreferrer"
                className="mini-card"
              >
                {body}
              </a>
            ) : (
              <div key={s.key} className="mini-card lb-way">
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
            乗れません。運ぶのは荷物だけで、短い区間でも人は乗せられません。停留所の間は、JR中央線や路線バスが同じ谷を走っています。
          </p>
        </details>
        <details className="faq-item">
          <summary>予約なしで持って行ってもいいですか?</summary>
          <p>
            予約をお願いします。便の空きを確かめるため、WhatsAppで1件ずつ承認しています。お送りするリンクで支払いが済んだら予約確定です。
          </p>
        </details>
        <details className="faq-item">
          <summary>南へ歩きます。なぜ時間がかかるのですか?</summary>
          <p>
            時刻表は、利用の多い北行きに合わせています。木曽福島方面から妻籠・馬籠・中津川へ送る荷物は、南木曽で一晩お預かりして、翌朝の①の便で運びます。南へ歩く方も途中で一泊することが多いので、たいていは困りません。WhatsAppで相談いただければ一緒に組み立てます。
          </p>
        </details>
        <details className="faq-item">
          <summary>荷物より先に着いてしまったら?</summary>
          <p>
            上の「荷物が届く時間」をご覧ください。先に着いたら、お茶をしたり町を歩いたりしてお待ちください。便が着いたら荷物を受け取れます。
          </p>
        </details>
        <details className="faq-item">
          <summary>熊スプレーも借りたい。</summary>
          <p>
            熊スプレーなどは<Link href="/ja/gear">ギアレンタルのページ</Link>からどうぞ。
          </p>
        </details>
      </section>

      {/* 申し込み */}
      <section className="mini-sec" id="book">
        <span className="eyebrow">お申し込み</span>
        <h2>荷物の行き先を教えてください。</h2>
        <div className="pay-row">
          <Link href="/ja/book?s=luggage" className="stay-cta">
            <MessageCircle size={16} /> WhatsAppで申し込む <ArrowRight size={15} />
          </Link>
        </div>
        <p className="drop-note">
          質問だけでも
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
