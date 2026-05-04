import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="font-mono text-sm text-black/48">404</p>
      <h1 className="mt-4 text-6xl font-black">העמוד הזה לא נמצא.</h1>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-black/62">
        הפורטפוליו כאן, אבל הכתובת הזאת לא קיימת.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-[var(--ink)] px-6 py-4 text-sm font-black text-white"
      >
        חזרה לבית
      </Link>
    </main>
  );
}
