"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MessageCircle, X } from "lucide-react";
import KappaChat from "./KappaChat";

/** 全ページ共通の河童ボタン（左下）。ここは常にゲスト。スタッフは /kappa?k=<キー> の専用ページを使う */
export default function KappaWidget({ lang = "en" }: { lang?: "en" | "ja" }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  // フッターの文字色などを受け継がないよう body 直下に出す
  return createPortal(
    <>
      {open && (
        <div className="chatw-panel" role="dialog" aria-label="Kappa chat guide">
          <div className="chatw-head">
            <span className="chatw-title">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="chatw-avatar" src="/kappa.svg" alt="" />
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
            <button className="chatw-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>
          <KappaChat lang={lang} />
        </div>
      )}
      <button
        className="chatw-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with Kappa"}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>,
    document.body,
  );
}
