import type { Metadata } from "next";
import { PHONE, PHONE_TEL, SUPPORT_MAILTO } from "../../site";
import { SiteNav, SiteFooter } from "../../chrome";

/** 特定商取引法に基づく表記（PayPay・Stripe の審査に必要）。英語版は /legal */
export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Beyond Nakasendo Cycling",
  description: "Beyond Nakasendo Cycling（合同会社FROM SCRATCH）の特定商取引法に基づく表記。",
  alternates: { canonical: "/ja/legal", languages: { en: "/legal" } },
};

const ROWS: [string, React.ReactNode][] = [
  ["販売事業者", "合同会社FROM SCRATCH"],
  ["運営責任者", "福田 康宏"],
  ["所在地", "〒399-5301 長野県木曽郡南木曽町読書4181"],
  ["電話番号", <a key="t" href={PHONE_TEL}>{PHONE}（受付 9:00〜18:00）</a>],
  ["メールアドレス", <a key="m" href={SUPPORT_MAILTO}>{SUPPORT_MAILTO.replace("mailto:", "")}</a>],
  ["販売価格", "各サービスのページに税込価格で表示しています（E-bikeレンタル・ガイドツアー・荷物運び）"],
  ["商品代金以外の必要料金", "ありません（決済手数料はいただきません）"],
  ["お支払い方法", "クレジットカード、PayPay（決済代行：Stripe）"],
  ["お支払い時期", "ご予約時に前払い（決済ページでお支払いいただいた時点で確定します）"],
  ["サービスの提供時期", "ご予約いただいた利用日当日"],
  [
    "キャンセル・返金",
    "E-bikeレンタル・ガイドツアー：前日までのキャンセルは全額返金、当日のキャンセルは返金いたしません。荷物運び：前日21:00以降のキャンセルは返金いたしません。当社都合・天候などによる中止の場合は全額返金いたします。",
  ],
];

export default function Page() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />
      <header className="page-head">
        <span className="eyebrow">Legal</span>
        <h1>特定商取引法に基づく表記</h1>
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
      <SiteFooter lang="ja" />
    </div>
  );
}
