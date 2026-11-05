"use client";

import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const AVATAR = "/kappa.svg";
const WA = "https://wa.me/819038392354";

const TEXT = {
  en: {
    greeting:
      "Hi! I'm the Kappa of the Kiso River — I've lived in this river for centuries and listened to every ride Yakkun guided past. Ask me about e-bike rental, guided rides, the luggage shuttle, prices or open days — in any language!",
    staffGreeting: "こんにちは、スタッフさん。今日のお仕事のこと、何でも聞いてください。",
    chips: ["How much is e-bike rental?", "Is a bike free tomorrow?", "Which route is easiest?", "How does the luggage shuttle work?"],
    staffChips: ["今日の仕事は？", "鍵の番号は？", "次はどこへ行く？"],
    placeholder: "Ask a question… / 質問をどうぞ…",
    foot: "AI answers may contain mistakes — to book or for anything urgent,",
    footLink: "WhatsApp us",
    error: `Sorry, I couldn't answer right now. Please try again in a moment, or reach us on WhatsApp: ${WA}`,
  },
  ja: {
    greeting:
      "こんにちは！木曽川に何百年も住んでいる河童です。ガイドのやっくんが走るたびに話を聞いて覚えました。E-bikeレンタル・ガイドツアー・荷物運び・料金・営業日のこと、何でも聞いてください。",
    staffGreeting: "こんにちは、スタッフさん。今日のお仕事のこと、何でも聞いてください。",
    chips: ["E-bikeレンタルの料金は？", "明日は空いてる？", "いちばん楽なルートは？", "荷物運びの使い方は？"],
    staffChips: ["今日の仕事は？", "鍵の番号は？", "次はどこへ行く？"],
    placeholder: "質問をどうぞ…",
    foot: "AIの回答には誤りがあり得ます。予約・お急ぎの用件は",
    footLink: "WhatsAppへ",
    error: `いま答えられませんでした。少し待ってもう一度どうぞ。お急ぎは WhatsApp へ：${WA}`,
  },
};

function renderWithLinks(text: string) {
  const parts = text.split(/(https?:\/\/[^\s)）」]+)/g);
  return parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer">
        {part.length > 48 ? part.slice(0, 45) + "…" : part}
      </a>
    ) : (
      part
    ),
  );
}

/** staffKey があるときだけスタッフとして話す（キーはサーバーで dolphin に確かめる） */
export default function KappaChat({ lang = "en", staffKey = "" }: { lang?: "en" | "ja"; staffKey?: string }) {
  const t = TEXT[lang];
  const staff = !!staffKey;
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    setInput("");
    setBusy(true);
    const history: ChatMessage[] = [...messages, { role: "user", content: q }];
    setMessages([...history, { role: "assistant", content: "" }]);
    try {
      const res = await fetch("/api/kappa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-20), ...(staff ? { k: staffKey } : {}) }),
      });
      if (!res.ok || !res.body) {
        const msg = await res.text().catch(() => "");
        throw new Error(res.status === 403 && msg ? msg : `HTTP ${res.status}`);
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: answer }]);
      }
    } catch (err) {
      const m = err instanceof Error && !err.message.startsWith("HTTP") ? err.message : t.error;
      setMessages([...history, { role: "assistant", content: m }]);
    } finally {
      setBusy(false);
    }
  }

  const avatar = (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="chat-avatar" src={AVATAR} alt="" />
  );

  return (
    <div className="chat">
      <div className="chat-scroll" ref={scrollRef}>
        <div className="chat-row">
          {avatar}
          <div className="chat-msg chat-msg-bot">{staff ? t.staffGreeting : t.greeting}</div>
        </div>
        {messages.length === 0 && (
          <div className="chat-chips">
            {(staff ? t.staffChips : t.chips).map((q) => (
              <button key={q} className="chat-chip" onClick={() => send(q)}>
                {q}
              </button>
            ))}
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={m.role === "assistant" ? "chat-row" : "chat-row-user"}>
            {m.role === "assistant" && avatar}
            <div className={`chat-msg ${m.role === "user" ? "chat-msg-user" : "chat-msg-bot"}`}>
              {m.content === "" && m.role === "assistant" ? <span className="chat-typing">…</span> : renderWithLinks(m.content)}
            </div>
          </div>
        ))}
      </div>
      <form
        className="chat-inputrow"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <textarea
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== "Enter" || e.shiftKey || e.nativeEvent.isComposing) return;
            if (window.matchMedia("(pointer: coarse)").matches) return;
            e.preventDefault();
            send(input);
          }}
          placeholder={t.placeholder}
          maxLength={2000}
          rows={1}
          aria-label="Your question"
        />
        <button className="chat-send" type="submit" disabled={busy || !input.trim()} aria-label="Send">
          <Send size={16} />
        </button>
      </form>
      <div className="chat-foot">
        {t.foot}{" "}
        <a href={WA} target="_blank" rel="noopener noreferrer">
          {t.footLink}
        </a>
        .
      </div>
    </div>
  );
}
