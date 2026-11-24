import type { Metadata } from "next";
import { OtherServicesView } from "../../other-services-view";

export const metadata: Metadata = {
  title: "馬籠・妻籠の荷物運び — 他のサービスのご案内 | ラゲッジバス中山道",
  description: "ラゲッジバスは馬籠・妻籠には対応していません。対応している地元のサービスのご案内です。",
  alternates: { canonical: "/ja/other-services", languages: { en: "/other-services", ja: "/ja/other-services" } },
};

export default function Page() {
  return <OtherServicesView lang="ja" />;
}
