import type { Metadata } from "next";
import { LbSectionView } from "../lb-pages";

export const metadata: Metadata = {
  title: "How it works & drop points — Luggage Bus Nakasendo",
  description: "Four steps, where to leave your bags, holding fees and closing days.",
  alternates: { canonical: "/how", languages: { en: "/how", ja: "/ja/how" } },
};

export default function Page() {
  return <LbSectionView lang="en" section="how" />;
}
