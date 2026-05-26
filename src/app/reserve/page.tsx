import Link from "next/link";

export default function ReservePage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 bg-black">
      <div className="max-w-xl text-center text-white">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">Reservation</h1>
        <p className="mb-4">
          You can now book and pay online from the{" "}
          <Link href="/#book" className="underline">
            booking section on our home page
          </Link>
          .
        </p>
        <p>
          Prefer to talk to a human? Call or text: <b>090-3839-2354</b>.
        </p>
      </div>
    </main>
  );
}
