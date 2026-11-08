import { Play } from "lucide-react";

/** 約1分の「使い方」ショート動画。
 *  動画ができたら public/assets/ に置き、下の VIDEO_SRC にパスを入れる(例: "/assets/lb-how-to-use.mp4")。
 *  POSTER は表紙の画像(任意)。どちらも空の間は「準備中」の枠が出る。 */
const VIDEO_SRC = "";
const POSTER = "";

export function LbHowVideo({ lang }: { lang: "en" | "ja" }) {
  const ja = lang === "ja";
  return (
    <section className="mini-sec" id="how-video">
      <span className="eyebrow">{ja ? "1分でわかる" : "In one minute"}</span>
      <h2>{ja ? "使い方をショート動画で。" : "How to use it, in a short video."}</h2>
      <div className="lb-video">
        {VIDEO_SRC ? (
          <video controls playsInline preload="metadata" poster={POSTER || undefined} src={VIDEO_SRC}>
            {ja ? "お使いのブラウザは動画に対応していません。" : "Your browser does not support video."}
          </video>
        ) : (
          <div className="lb-video-ph">
            <Play size={40} />
            <span>{ja ? "動画は準備中です(約1分)" : "Video coming soon (about 1 minute)"}</span>
          </div>
        )}
      </div>
      <p className="drop-note">
        {ja
          ? "日付と駅を選んで申し込む → 承認と支払い → 預ける・受け取る、までを順に見られます。"
          : "Pick a date and stops, book, get approved and pay, then drop off and collect. All in order."}
      </p>
    </section>
  );
}
