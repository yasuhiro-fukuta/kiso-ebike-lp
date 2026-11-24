import type { Metadata } from "next";
import { OtherServicesView } from "../other-services-view";

export const metadata: Metadata = {
  title: "Magome and Tsumago — other luggage services | Luggage Bus Nakasendo",
  description: "The Luggage Bus doesn't serve Magome or Tsumago. Local services that do.",
  alternates: { canonical: "/other-services", languages: { en: "/other-services", ja: "/ja/other-services" } },
};

export default function Page() {
  return <OtherServicesView lang="en" />;
}
