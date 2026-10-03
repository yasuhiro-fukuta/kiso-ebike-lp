import { Suspense } from "react";
import type { Metadata } from "next";
import BookForm from "../../book-form";

export const metadata: Metadata = {
  title: "予約メッセージをつくる | Beyond Nakasendo Cycling",
  description:
    "日付や台数を選ぶだけでWhatsAppの予約メッセージが自動で完成。ワンタップでそのまま送れます。",
  robots: { index: false },
};

export default function JaBookPage() {
  return (
    <Suspense>
      <BookForm lang="ja" />
    </Suspense>
  );
}
