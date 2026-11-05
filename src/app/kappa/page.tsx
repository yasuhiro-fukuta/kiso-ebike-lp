"use client";

import { useEffect, useState } from "react";
import KappaChat from "@/components/KappaChat";

/** 河童の全画面ページ。/kappa?k=<スタッフ専用リンクのキー> でスタッフとして話す（キーはサーバーで確かめる） */
export default function KappaPage() {
  const [ready, setReady] = useState(false);
  const [key, setKey] = useState("");
  const [lang, setLang] = useState<"en" | "ja">("en");
  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      setKey((p.get("k") || "").trim());
      setLang(p.get("lang") === "ja" || p.get("k") || navigator.language.startsWith("ja") ? "ja" : "en");
    } catch {
      // no query string — guest
    }
    setReady(true);
  }, []);
  return (
    <div className="chatpage">
      <div className="chatpage-head">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="chatw-avatar" src="/kappa.svg" alt="" />
        <span className="chatpage-brand">
          {lang === "ja" ? (
            <>
              木曽川の<em>河童</em>
            </>
          ) : (
            <>
              <em>Kappa</em> of the Kiso River
            </>
          )}
        </span>
        <span className="chatpage-sub">{key ? "スタッフ" : "Beyond Nakasendo Cycling"}</span>
      </div>
      <div className="chatpage-body">{ready && <KappaChat lang={lang} staffKey={key} />}</div>
    </div>
  );
}
