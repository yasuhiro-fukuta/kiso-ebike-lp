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
import { STOPS, RUNS, ARRIVALS, FARES } from "../../luggage-bus";

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
            ラゲッジバスは、中山道の中津川・馬籠・妻籠・南木曽・野尻・上松・木曽福島を、毎日決まった時刻で結ぶ荷物の定期便です。朝、停留所の窓口に荷物を預けたら、あとは手ぶらで歩くだけ。荷物は行き先の窓口で待っています。
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
              <p>WhatsAppで、日付・預ける場所・受け取る場所・個数を送ります。</p>
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
              <p>朝、停留所の窓口に荷物を預けて、歩き出します。</p>
            </div>
            <div className="koma">
              <span className="koma-num">4</span>
              <Footprints size={26} />
              <h3>受け取る</h3>
              <p>便が着いたあと、行き先の停留所の窓口で受け取ります。</p>
            </div>
          </div>

          <p className="drop-note">
            ハイカーは朝8〜9時に出発することが多く、バスが来る前になります。それで大丈夫です。バスが来るまで窓口が荷物を預かります。南木曽発9:00の南行き(①)は、8:50まで(または前日の夕方)に預けてください。
          </p>
        </div>
      </section>

      {/* 料金 */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">料金(仮)</span>
        <h2>1個ごと、運ぶ距離で決まります。</h2>
        <div className="pricing">
          {FARES.map((f) => (
            <div className="pitem" key={f.label.ja}>
              <h4>{f.label.ja}</h4>
              <div className="amt">
                {f.amt.ja}
                <span style={{ fontSize: "0.9rem" }}>/個</span>
              </div>
            </div>
          ))}
        </div>
        <p className="drop-note">
          料金は仮のもので、シーズン開始までに変わることがあります。承認のときにWhatsAppでお伝えする金額が確定の料金です。
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
        <h2>中山道沿いの7つの停留所。</h2>
        <div className="mini-grid">
          {STOPS.map((s) => {
            const body = (
              <>
                <h3>
                  <MapPin size={20} /> {s.name.ja}
                </h3>
                <p>
                  {s.counter.ja}
                  {s.pending ? "(準備中)" : "。タップで地図が開きます。"}
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
        <p className="drop-note">
          いまは、これらの窓口での受け渡しだけです。提携する宿の玄関での受け渡しは、今後広げていきます。
        </p>
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
            上の「荷物が届く時間」をご覧ください。先に着いたら、お茶をしたり町を歩いたりしてお待ちください。便が着いたら窓口で荷物を受け取れます。
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
