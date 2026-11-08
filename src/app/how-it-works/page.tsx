import type { Metadata } from "next";
import { HowItWorks } from "./how-it-works";

export const metadata: Metadata = {
  title: "How It Works — E-Bike Rental with No Shop | Beyond Nakasendo Cycling",
  description:
    "First time? No shop and no counter: book and pay on WhatsApp, we place the e-bike at your inn or station by 9:00, and you lock it anywhere between Tsumago and Nojiri when you finish. ¥4,000 per bike per day.",
  alternates: { canonical: "/how-it-works", languages: { ja: "/ja/how-it-works" } },
};

export default function HowItWorksPage() {
  return <HowItWorks lang="en" />;
}
