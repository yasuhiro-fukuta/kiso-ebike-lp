import type { Metadata } from "next";
import { BookedView } from "../booked-view";

export const metadata: Metadata = { robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  return <BookedView lang="en" sessionId={session_id} />;
}
