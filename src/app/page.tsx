'use client';

import { useState } from "react";
import {
  ArrowRight, Bike, MapPin, Route, ShieldCheck, Smartphone, Clock3, Leaf,
  Instagram, Info, CreditCard, Wrench
} from "lucide-react";

/** === CUSTOMIZE HERE ================================ */
const RESERVE_URL = "https://example.com/reserve"; // 予約リンク
const INSTAGRAM_URL = "https://www.instagram.com/murabito_bikes";
const SUPPORT_MAILTO = "ravnicaguild@gmail.com";

// ヒーロー画像（/public に置いたファイル）
const HERO = "/DSC00667.JPG"; // 例: /public/DSC00667.JPG

// ヒーロー直下に並べる 4 つのルートボタン
const ROUTE_LINKS = [
  {
    label:
      "Kakizore gorge route: Hashimotoya (Nagiso) → Atera 2nd parking (Nojiri)",
    href: "https://maps.app.goo.gl/6XpNNFcXNTb9Pm6i9",
  },
  {
    label:
      "Kakizore gorge route: Atera 2nd parking (Nojiri) → Hashimotoya (Nagiso)",
    href: "https://maps.app.goo.gl/U1iEt4to7VWXvv7h8",
  },
  {
    label:
      "JR railway route: Hashimotoya (Nagiso) → Atera 2nd parking (Nojiri)",
    href: "https://maps.app.goo.gl/4Qh5YkT4ba3UvK9C7",
  },
  {
    label:
      "JR railway route: Atera 2nd parking (Nojiri) → Hashimotoya (Nagiso)",
    href: "https://maps.app.goo.gl/VBQQUDfFXDdBTW7U8",
  },
] as const;
/** ==================================================== */

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={HERO} alt="Kiso Valley E-Bike Sharing" className="h-[70vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-10 text-white">
          <h1 className="text-4xl md:text-6xl font-semibold drop-shadow leading-tight">
            Kiso Valley E-Bike Sharing — Nagiso / Tsumago
          </h1>
          <p className="mt-3 max-w-2xl text-lg md:text-xl opacity-90">
            Quiet forest roads, the historic Nakasendo, rivers and gorges—explore more with powerful e-bikes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-white shadow-lg hover:bg-emerald-600 transition"
            >
              <Bike className="h-5 w-5" /> Reserve a bike <ArrowRight className="h-4 w-4" />
            </a>
            {/* ← 「See routes map」ボタンは削除 */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/20 transition"
            >
              <Instagram className="h-5 w-5" /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* HERO直下：Routes map ボタン 4つ */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Routes map</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {ROUTE_LINKS.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 px-4 py-3 hover:bg-stone-100 bg-white shadow-sm"
            >
              <MapPin className="h-5 w-5 text-stone-700" />
              <span className="text-stone-800">{r.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* USP */}
      <section className="mx-auto max-w-6xl px-6 py-10 grid gap-4 md:grid-cols-3">
        <Feature icon={<Leaf className="h-6 w-6" />} title="Scenic & quiet"
                 desc="Car-light forest roads + historic Nakasendo views." />
        <Feature icon={<Wrench className="h-6 w-6" />} title="Well-maintained"
                 desc="Powerful e-bikes, checked daily for safety." />
        <Feature icon={<Smartphone className="h-6 w-6" />} title="Easy pick-up"
                 desc="Reserve online, start navigation with one tap." />
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <Step title="1. Reserve" icon={<Smartphone className="h-5 w-5" />}>Choose a plan & time</Step>
          <Step title="2. Pick up" icon={<Clock3 className="h-5 w-5" />}>At Kashiwaya or partner point</Step>
          <Step title="3. Ride" icon={<Route className="h-5 w-5" />}>Follow our route map</Step>
          <Step title="4. Return" icon={<MapPin className="h-5 w-5" />}>Back to the same point</Step>
        </div>
      </section>

      {/* Pricing セクションは削除 */}
      {/* Popular routes セクションは削除 */}

      {/* Footer */}
      <footer className="border-t bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-stone-600">© {new Date().getFullYear()} Kiso Valley E-Bike Sharing</div>
          <div className="flex items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 px-3 py-2 hover:bg-stone-100"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3 py-2 text-white hover:bg-emerald-600"
              href={RESERVE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Reserve now
            </a>
          </div>
        </div>
      </footer>

      {/* Contact modal（そのまま） */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="max-w-md w-full rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-xl font-semibold">Contact</h4>
            <p className="mt-2 text-stone-700">
              Questions, group rentals, custom routes—feel free to reach out.
            </p>
            <div className="mt-4 flex gap-3">
              <a className="rounded-xl bg-stone-900 px-4 py-2 text-white" href={SUPPORT_MAILTO}>
                Email us
              </a>
              <a className="rounded-xl border px-4 py-2" href={RESERVE_URL} target="_blank" rel="noreferrer">
                Reserve
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- small components ---------- */
function Feature(props: { icon: React.ReactNode; title: string; desc: string }) {
  const { icon, title, desc } = props;
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm flex gap-3 items-start">
      <div className="rounded-xl bg-stone-100 p-2 text-stone-700">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-stone-700 mt-1">{desc}</div>
      </div>
    </div>
  );
}

function Step(props: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  const { title, icon, children } = props;
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 font-semibold">
        <span className="text-stone-700">{icon}</span>
        {title}
      </div>
      <div className="mt-2 text-stone-700">{children}</div>
    </div>
  );
}
