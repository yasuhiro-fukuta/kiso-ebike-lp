import type { Metadata } from "next";
import { LbSectionView } from "../lb-pages";

export const metadata: Metadata = {
  title: "Service calendar — Luggage Bus Nakasendo",
  description: "Days the Luggage Bus runs: March 2027 – February 2028, every day except Mondays.",
  alternates: { canonical: "/calendar", languages: { en: "/calendar", ja: "/ja/calendar" } },
};

export default function Page() {
  return <LbSectionView lang="en" section="calendar" />;
}
