import type { Metadata } from "next";
import { LbSectionView } from "../lb-pages";

export const metadata: Metadata = {
  title: "FAQ — Luggage Bus Nakasendo",
  description: "Questions about the Luggage Bus.",
  alternates: { canonical: "/faq", languages: { en: "/faq", ja: "/ja/faq" } },
};

export default function Page() {
  return <LbSectionView lang="en" section="faq" />;
}
