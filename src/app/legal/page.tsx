import type { Metadata } from "next";
import { PHONE_TEL, SUPPORT_MAILTO } from "../site";
import { SiteNav, SiteFooter } from "../chrome";

/** Legal notice under the Japanese Act on Specified Commercial Transactions. Japanese version: /ja/legal */
export const metadata: Metadata = {
  title: "Legal Notice (Specified Commercial Transactions Act) | Beyond Nakasendo Cycling",
  description: "Legal notice for Beyond Nakasendo Cycling (From Scratch LLC) under the Act on Specified Commercial Transactions.",
  alternates: { canonical: "/legal", languages: { ja: "/ja/legal" } },
};

const ROWS: [string, React.ReactNode][] = [
  ["Seller", "From Scratch LLC (合同会社FROM SCRATCH)"],
  ["Representative", "Yasuhiro Fukuda"],
  ["Address", "4181 Yomikaki, Nagiso-machi, Kiso-gun, Nagano 399-5301, Japan"],
  ["Phone", <a key="t" href={PHONE_TEL}>+81 90-3839-2354 (9:00–18:00 JST)</a>],
  ["Email", <a key="m" href={SUPPORT_MAILTO}>{SUPPORT_MAILTO.replace("mailto:", "")}</a>],
  ["Price", "Shown on each service page, tax included (e-bike rental, guided tour, luggage transfer)"],
  ["Additional fees", "None (no payment fees)"],
  ["Payment methods", "Credit card, PayPay (processed by Stripe)"],
  ["Payment timing", "Paid in advance at booking; your booking is confirmed once payment is completed"],
  ["Service delivery", "On the date you booked"],
  [
    "Cancellation & refunds",
    "E-bike rental and guided tour: full refund if cancelled by the day before; no refund for same-day cancellation. Luggage transfer: no refund for cancellations after 21:00 the day before. Full refund if we cancel, including for weather.",
  ],
];

export default function Page() {
  return (
    <div className="lp">
      <SiteNav lang="en" />
      <header className="page-head">
        <span className="eyebrow">Legal</span>
        <h1>Legal Notice</h1>
        <p className="head-note">Based on the Act on Specified Commercial Transactions (Japan)</p>
      </header>
      <section className="faq">
        <dl className="legal-list">
          {ROWS.map(([k, v]) => (
            <div key={k} className="legal-row">
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>
      <SiteFooter lang="en" />
    </div>
  );
}
