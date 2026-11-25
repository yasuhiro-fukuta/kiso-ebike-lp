import type { Metadata } from "next";
import { LbSectionView } from "../lb-pages";

export const metadata: Metadata = {
  title: "Cancellation & compensation — Luggage Bus Nakasendo",
  description: "Free cancellation up to 7 days before, compensation and booking rules.",
  alternates: { canonical: "/policy", languages: { en: "/policy", ja: "/ja/policy" } },
};

export default function Page() {
  return <LbSectionView lang="en" section="policy" />;
}
