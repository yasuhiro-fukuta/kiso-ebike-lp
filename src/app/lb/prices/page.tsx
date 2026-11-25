import type { Metadata } from "next";
import { LbSectionView } from "../lb-pages";

export const metadata: Metadata = {
  title: "Prices & route — Luggage Bus Nakasendo",
  description: "Stops from Nakatsugawa Station to Narai, timetable, service calendar and prices.",
  alternates: { canonical: "/prices", languages: { en: "/prices", ja: "/ja/prices" } },
};

export default function Page() {
  return <LbSectionView lang="en" section="prices" />;
}
