"use client";

import {
  MessageCircle,
  CreditCard,
  Footprints,
  PackageCheck,
  MapPin,
  ArrowRight,
  Ban,
  Camera,
} from "lucide-react";
import { WHATSAPP_URL_JA } from "../../site";
import { LbNav, LbFooter, LbFloat, EBIKE_SITE, useLb } from "../lb-chrome";
import { LbHowVideo } from "../how-video";
import { LbPlanner } from "../lb-planner";
import { LbInstantSteps, LbTrust, LbArrangements, LbServiceCalendar } from "../lb-sections";
import {
  STATIONS, feeText, placeName, RULES, RUNS, ARRIVALS, EXAMPLES, LINE, OUT_OF_RANGE,
  estimate, posOf, nameOf, yen, DROP_BY, ARRIVE_BY, MAX_FARE_BAGS, CANCEL_POLICY, COMPENSATION_TEXT, SEASON_TEXT,
} from "../../luggage-bus";

const RANGE_JA = LINE.map((a) => a.name.ja).join("・");

export default function JaLuggageBusPage() {
  const { base } = useLb();
  const otherHref = `${base}/ja/other-services`;
  return (
    <div className="lp">
      <LbNav lang="ja" />

      <LbFloat href={`${EBIKE_SITE}/ja/book?s=luggage`}>
        <MessageCircle size={18} /> WhatsAppで申し込む
      </LbFloat>

      {/* PAGE HEAD——タイトル・キャッチコピー・写真 */}
      <header className="page-head page-head-grid">
        <div>
          <span className="head-badge">荷物専用・人は乗れません</span>
          <br />
          <span className="eyebrow">ラゲッジバス · 中津川 — 奈良井</span>
          <h1>
            Yes Road, <em>No load.</em>
          </h1>
          <p>
            ラゲッジバスは、{RANGE_JA}を毎日決まった便で結ぶ荷物の定期便です。朝、ラゲッジバスの「駅」(荷物の預け場所や提携宿)に荷物を預けたら、あとは手ぶらで歩くだけ。荷物は行き先で待っています。
          </p>
          <p className="head-note">
            朝{DROP_BY}までに置いていただければ、その日の{ARRIVE_BY}までに届きます。選んで、払えば、その場で予約確定です。
          </p>
          <p className="head-note">
            <small>※南木曽より北から田立・坂下・中津川へは、翌日のお届けです(予約は受け付けます)。</small>
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

      <LbPlanner lang="ja" />

      <LbInstantSteps lang="ja" />

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

      {/* 使い方の違い */}
      <section className="mini-sec" id="difference">
        <span className="eyebrow">はじめての方へ</span>
        <h2>時刻と駅が決まっているから、選ぶだけ。</h2>
        <p className="drop-note" style={{ marginTop: "-1rem", marginBottom: "1.4rem" }}>
          ラゲッジバスは、宅配便のように「いつ・どこへ」を自由に決めるサービスではありません。毎日走る時刻と、荷物を預ける「駅」をあらかじめ決めてあります。その中から日付と駅を選ぶだけで申し込めます。
        </p>
        <div className="lb-table-wrap">
          <table className="lb-table lb-compare">
            <thead>
              <tr>
                <th></th>
                <th>ふつうの荷物配送</th>
                <th>ラゲッジバス</th>
              </tr>
            </thead>
            <tbody>
              <tr><th scope="row">運ぶ時刻</th><td>業者が決める・時間帯を指定</td><td className="us">毎日決まった便。朝{DROP_BY}までに置けば{ARRIVE_BY}までに届く</td></tr>
              <tr><th scope="row">預ける・受け取る場所</th><td>住所を自由に指定</td><td className="us">決まった「駅」(カフェ・宿・案内所)から選ぶ</td></tr>
              <tr><th scope="row">申し込みの締切</th><td>業者による</td><td className="us">前日23:00まで</td></tr>
              <tr><th scope="row">料金</th><td>サイズ・距離で変わる</td><td className="us">2つの駅と個数で決まった料金</td></tr>
              <tr><th scope="row">向いている人</th><td>日時・場所を細かく指定したい人</td><td className="us">歩く・走る予定を先に決めた人</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <LbHowVideo lang="ja" />

      {/* 時刻表 */}
      <section className="mini-sec" id="timetable">
        <span className="eyebrow">時刻表</span>
        <h2>配送ルート:中津川駅から奈良井まで。</h2>
        <div className="lb-runs">
          {RUNS.map((r) => (
            <div className={`lb-run${r.north ? " north" : ""}`} key={r.no}>
              <span className="lb-run-dir">
                {r.no} {r.dir.ja}
              </span>
              <span className="lb-run-route">{r.route.ja}</span>
            </div>
          ))}
        </div>
        <p className="drop-note">
          荷物は朝{DROP_BY}までに置いてください。届く時間は下の表をご覧ください。
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

      <LbServiceCalendar lang="ja" />

      {/* 申し込み方法(4ステップ) */}
      <section className="drop-sec" id="how">
        <div className="drop-inner">
          <span className="eyebrow">使い方</span>
          <h2>4ステップ。<em>予約したら、あとは歩くだけ。</em></h2>
          <div className="koma-grid">
            <div className="koma">
              <div className="lb-ph">画面(仮置き)<br/>予約ボックスと決済</div>
              <span className="koma-num">1</span>
              <CreditCard size={26} />
              <h3>予約して支払う</h3>
              <p>上の予約ボックスで日付・最寄りのJR駅・宿(預け場所)・個数を選び、支払った時点で予約確定です。範囲内ならどこでも同じです。一覧にない宿は「その他の宿」を選んで名前を書いてください。</p>
            </div>
            <div className="koma">
              <div className="lb-ph">写真(仮置き)<br/>荷物の写真</div>
              <span className="koma-num">2</span>
              <Camera size={26} />
              <h3>荷物の写真を送る</h3>
              <p>荷物1個につき1枚、WhatsAppで写真を送ってください。タグは回収のときにこちらで付けます。</p>
            </div>
            <div className="koma">
              <div className="lb-ph">写真(仮置き)<br/>駅に預ける</div>
              <span className="koma-num">3</span>
              <PackageCheck size={26} />
              <h3>朝、宿や駅に置く</h3>
              <p>朝{DROP_BY}まで(前日の夕方でも可)に、泊まった宿のフロントか玄関、または出発の駅に置いて、手ぶらで出発。</p>
            </div>
            <div className="koma">
              <div className="lb-ph">写真(仮置き)<br/>次の宿で受け取る</div>
              <span className="koma-num">4</span>
              <Footprints size={26} />
              <h3>次の駅・宿で受け取る</h3>
              <p>その日の{ARRIVE_BY}までに届きます(南木曽より北から田立・坂下・中津川へは翌日)。着いたら受け取るだけです。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 安心と条件(ひとまとめ) */}
      <section className="mini-sec" id="conditions">
        <span className="eyebrow">安心して預けるために</span>
        <h2>登録車両・1個ずつの記録・運営者。</h2>
        <LbTrust lang="ja" />
        <h3 className="lb-cond-title">ご利用の条件</h3>
        <ul className="lb-places lb-cond">
          <li>申し込みは前日23時まで。</li>
          <li>1便につき荷物20個まで。</li>
          <li>荷物1個につき写真1枚をWhatsAppで送る。</li>
          <li>運ばない物：現金、パスポート、貴重品、壊れ物、医薬品、生もの。</li>
          <li>キャンセル：{CANCEL_POLICY.ja}</li>
          <li>補償：{COMPENSATION_TEXT.ja}</li>
          <li>運行期間：{SEASON_TEXT.ja}</li>
        </ul>
      </section>

      {/* 向く人・向かない人 */}
      <section className="mini-sec" id="who">
        <span className="eyebrow">ご利用の目安</span>
        <h2>こんな方に向いています。</h2>
        <div className="mini-grid cols2">
          <div className="mini-card lb-way">
            <h3>向いている方</h3>
            <ul className="lb-places">
              <li>宿から宿へ、手ぶらで歩く・走る方</li>
              <li>前日までに日付と駅を決められる方</li>
              <li>{RANGE_JA}の間で動く方</li>
            </ul>
          </div>
          <div className="mini-card lb-way">
            <h3>向いていない方</h3>
            <ul className="lb-places">
              <li>時刻や場所を細かく指定したい方</li>
              <li>月曜(運休)、または2027年3月〜2028年2月以外に移動する方</li>
              <li>人も一緒に運んでほしい方(荷物専用です)</li>
              <li>{OUT_OF_RANGE.map((o) => o.name.ja).join("・")}が発着の方(<a href={otherHref}>他のサービスのご案内</a>)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="mini-sec" id="pricing">
        <span className="eyebrow">料金</span>
        <h2>区間と個数で決まります。</h2>
        <div className="pricing">
          <p className="pricing-foot">
            区間ごとに、荷物1〜{MAX_FARE_BAGS}個の料金が決まっています。範囲チェッカーか予約ボックスで駅を選ぶと、すぐに金額が出ます。{MAX_FARE_BAGS + 1}個以上はWhatsAppでお問い合わせください。
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
              {EXAMPLES.map((x) => {
                const e = estimate(posOf(x.from), posOf(x.to), x.bags);
                return (
                  <tr key={`${x.from}-${x.to}-${x.bags}`}>
                    <th scope="row">
                      {nameOf(x.from).ja} → {nameOf(x.to).ja}
                    </th>
                    <td>{x.bags}</td>
                    <td>{e ? yen(e.total) : "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="drop-note">
          合計金額は、支払う前に予約ボックスに出ます。
        </p>
      </section>

      {/* キャンセル */}
      <section className="mini-sec" id="cancel">
        <span className="eyebrow">キャンセル</span>
        <h2>キャンセルは7日前まで無料。</h2>
        <div className="lb-table-wrap">
          <table className="lb-table lb-compare">
            <thead>
              <tr><th>取り消す日</th><th>返金</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">利用日の7日前まで</th><td className="us">無料(全額返金)</td></tr>
              <tr><th scope="row">6日前から当日まで</th><td className="us">100%いただきます(返金なし)</td></tr>
            </tbody>
          </table>
        </div>
        <p className="drop-note">
          運休・天候・車の故障・体調不良など、こちらの都合で運べないときは全額返金します。
        </p>
      </section>

      {/* ご利用のルール */}
      <section className="mini-sec" id="rules">
        <span className="eyebrow">ご利用のルール</span>
        <h2>申し込む前に。</h2>
        <ul className="itin-list lb-rules">
          {RULES.map((r) => (
            <li key={r.title.en}>
              <b>{r.title.ja}</b>
              {r.body.ja}
            </li>
          ))}
        </ul>
      </section>

      {/* 駅(預け場所・提携宿) */}
      <section className="mini-sec" id="stops">
        <span className="eyebrow">駅</span>
        <h2>荷物を預ける・受け取る「駅」。</h2>
        <p className="drop-note" style={{ marginTop: "-1rem", marginBottom: "1.6rem" }}>
          ラゲッジバスの「駅」は、観光案内所・カフェ・提携の宿など、荷物を預けられる場所です。宿の駅は、その宿に泊まる方だけが使えます。朝ひとつの駅で預けて、別の駅で受け取ります。下線のある名前はタップで地図やサイトが開きます。
        </p>
        <div className="mini-grid">
          {STATIONS.map((s) => (
            <div key={s.area} className="mini-card lb-way">
              <h3>
                <MapPin size={20} /> {s.name.ja}
              </h3>
              <ul className="lb-places">
                {s.places.map((pl) => (
                  <li key={pl.name.en}>
                    {pl.map ? (
                      <a href={pl.map} target="_blank" rel="noopener noreferrer">
                        {placeName(pl, "ja")}
                      </a>
                    ) : (
                      placeName(pl, "ja")
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h3 className="lb-sub">各駅の預かり料と定休日</h3>
        <div className="lb-table-wrap">
          <table className="lb-table lb-info">
            <thead>
              <tr>
                <th>駅</th>
                <th>預かり料(現地払い)</th>
                <th>定休日</th>
                <th>営業時間</th>
              </tr>
            </thead>
            <tbody>
              {STATIONS.flatMap((s) =>
                s.places.map((pl) => (
                  <tr key={pl.id}>
                    <th scope="row">
                      {s.name.ja}
                      <small>{placeName(pl, "ja")}</small>
                    </th>
                    <td>{feeText(pl, "ja")}</td>
                    <td>{pl.closed.ja}</td>
                    <td>{pl.hours ? pl.hours.ja : "—"}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
        <p className="drop-note">
          預かり料がかかる駅があります(その場で各駅にお支払いください)。観光案内所の定休日は観光サイトの情報をもとにした目安で、変わっていることがあります。預け場所が休みと分かったときは、前もってこちらからご連絡します。
        </p>
        <div className="mini-grid cols2" style={{ marginTop: "1.2rem" }}>
          <div className="mini-card lb-way">
            <h3>
              <MessageCircle size={20} /> 一覧にない宿
            </h3>
            <p>
              {RANGE_JA}の宿なら、最寄りのJR駅を選んで「その他の宿」を選び、宿の名前を書いて支払えば、その場で予約確定です。
            </p>
          </div>
          <div className="mini-card lb-way">
            <h3>
              <ArrowRight size={20} /> 馬籠・妻籠の方へ
            </h3>
            <p>
              範囲外です。<a href={otherHref}>対応している地元のサービスのご案内</a>をご覧ください。
            </p>
          </div>
        </div>
      </section>

      <LbArrangements lang="ja" />

      {/* 宿・場所から駅を探す */}
      <section className="mini-sec" id="find-stop">
        <span className="eyebrow">駅の探し方</span>
        <h2>宿や場所の名前から、駅を探す。</h2>
        <p className="drop-note" style={{ marginTop: "-1rem", marginBottom: "1.2rem" }}>
          予約ボックスでは、先に最寄りのJR駅を選び、次にその駅の宿・場所を選びます。載っていない宿は「その他の宿」を選んで名前を書いてください。
        </p>
        <div className="lb-table-wrap">
          <table className="lb-table lb-info">
            <thead>
              <tr><th>宿・場所</th><th>選ぶエリア</th><th>利用できる人</th></tr>
            </thead>
            <tbody>
              {STATIONS.flatMap((s) =>
                s.places.map((pl) => (
                  <tr key={`find-${pl.id}`}>
                    <th scope="row">{pl.name.ja}</th>
                    <td>{s.name.ja}</td>
                    <td>{pl.guestsOnly ? "宿泊者のみ" : "どなたでも"}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
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
            前日23時までに予約をお願いします。範囲内なら、予約ボックスで支払った時点で予約確定です。
          </p>
        </details>
        <details className="faq-item">
          <summary>キャンセルはできますか?</summary>
          <p>{CANCEL_POLICY.ja}</p>
        </details>
        <details className="faq-item">
          <summary>荷物がなくなったり壊れたりしたら?</summary>
          <p>{COMPENSATION_TEXT.ja}</p>
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
            熊スプレーなどは<a href={`${EBIKE_SITE}/ja/gear`}>熊スプレーレンタルのページ</a>からどうぞ。
          </p>
        </details>
      </section>

      {/* 申し込み */}
      <section className="mini-sec" id="book">
        <span className="eyebrow">お申し込み</span>
        <h2>荷物の行き先を教えてください。</h2>
        <div className="pay-row">
          <a href={`${EBIKE_SITE}/ja/book?s=luggage`} className="stay-cta">
            <MessageCircle size={16} /> WhatsAppで申し込む <ArrowRight size={15} />
          </a>
        </div>
        <p className="drop-note">
          質問だけでも
          <a href={WHATSAPP_URL_JA} target="_blank" rel="noopener noreferrer">
            WhatsAppでどうぞ
          </a>
          。
        </p>
      </section>

      <LbFooter lang="ja" />
    </div>
  );
}
