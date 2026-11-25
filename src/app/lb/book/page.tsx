import type { Metadata } from "next";
import { LbSectionView } from "../lb-pages";

export const metadata: Metadata = {
  title: "Book — Luggage Bus Nakasendo",
  description: "Pick your stops and bags, see the price, pay — confirmed on the spot.",
  alternates: { canonical: "/book", languages: { en: "/book", ja: "/ja/book" } },
};

export default function Page() {
  return <LbSectionView lang="en" section="book" />;
}
