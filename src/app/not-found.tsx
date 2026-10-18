import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <main
      id="content"
      className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center px-6 py-24"
    >
      <p className="font-mono text-[11px] tracking-[0.22em] text-muted">404</p>
      <h1 className="mt-4 text-4xl font-medium tracking-[-0.03em]">
        This page does not exist.
      </h1>
      <Link
        href="/"
        className="mt-8 w-fit text-sm underline decoration-white/30 underline-offset-4"
      >
        Back to the site
      </Link>
    </main>
  );
}
