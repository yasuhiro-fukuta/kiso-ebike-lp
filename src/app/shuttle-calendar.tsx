"use client";

import { useEffect, useState } from "react";

/** ============================================================
 *  シャトル営業日カレンダー
 *  ⚠️ 休業日はここに "YYYY-MM-DD" を追加/削除するだけ(随時更新)。
 *     それ以外の日はすべて「営業」として表示される。
 *     今月と来月の2か月分が自動で並ぶ(月替わりの作業は不要)。
 *  ============================================================ */
const CLOSED_DAYS = new Set<string>([
  "2026-09-18",
  "2026-09-23",
]);

const DOW: Record<"en" | "ja", string[]> = {
  en: ["S", "M", "T", "W", "T", "F", "S"],
  ja: ["日", "月", "火", "水", "木", "金", "土"],
};

const pad = (n: number) => String(n).padStart(2, "0");

function MonthGrid({
  year,
  month, // 0-based
  lang,
  todayKey,
}: {
  year: number;
  month: number;
  lang: "en" | "ja";
  todayKey: string;
}) {
  const startDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const title =
    lang === "ja"
      ? `${year}年${month + 1}月`
      : new Date(year, month, 1).toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        });
  return (
    <div className={`cal${lang === "en" ? " cal-en" : ""}`}>
      <h3>{title}</h3>
      <div className="cal-grid">
        {DOW[lang].map((d, i) => (
          <span className="cal-dow" key={`dow-${i}`}>
            {d}
          </span>
        ))}
        {Array.from({ length: startDow }, (_, i) => (
          <span key={`blank-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const key = `${year}-${pad(month + 1)}-${pad(i + 1)}`;
          const cls = [
            "cal-day",
            CLOSED_DAYS.has(key) ? "closed" : "",
            key < todayKey ? "past" : "",
            key === todayKey ? "today" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <span className={cls} key={key}>
              {i + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/** 今月+来月の営業日カレンダー(手荷物シャトル用)。 */
export function ShuttleCalendar({ lang = "en" }: { lang?: "en" | "ja" }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
  }, []);
  if (!now) return <div className="cal-wrap" aria-hidden />;

  const y = now.getFullYear();
  const m = now.getMonth();
  const todayKey = `${y}-${pad(m + 1)}-${pad(now.getDate())}`;
  const next: [number, number] = m === 11 ? [y + 1, 0] : [y, m + 1];

  return (
    <>
      <div className="cal-wrap">
        <MonthGrid year={y} month={m} lang={lang} todayKey={todayKey} />
        <MonthGrid
          year={next[0]}
          month={next[1]}
          lang={lang}
          todayKey={todayKey}
        />
      </div>
      <p className="cal-note">
        {lang === "ja"
          ? "赤い日(休)は休業。それ以外は毎日営業しています(荷物の受付は10:30まで)。"
          : "Red days are closed — every other day we run (bag drop-off by 10:30)."}
      </p>
    </>
  );
}
