import { redirect } from "next/navigation";

/** 2026-11-25 このページはやめ、中身は「よくある質問」に入れた。 */
export default function Page() {
  redirect("/lb/faq");
}
