import { Suspense } from "react";
import type { Metadata } from "next";
import BookForm from "../book-form";

export const metadata: Metadata = {
  title: "Booking message builder | Beyond Nakasendo Cycling",
  description:
    "Fill in your dates and details, and your WhatsApp booking message writes itself — then send it in one tap.",
  robots: { index: false },
};

export default function BookPage() {
  return (
    <Suspense>
      <BookForm lang="en" />
    </Suspense>
  );
}
