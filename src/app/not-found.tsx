import type { Metadata } from "next";
import Link from "next/link";
import { Grain } from "@/components/grain";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `404 — ${site.name}`,
  description: "This page does not exist.",
};

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center bg-cream px-6 text-center md:px-[8vw]">
      <Grain id="grain-404" />

      <h1 className="type-display text-ink text-[clamp(6rem,22vw,16rem)]">
        404
      </h1>

      <p className="mt-[2dvh] text-grey-500">This page does not exist.</p>

      <Link
        href="/"
        className="mt-[5dvh] inline-flex min-h-11 items-center text-blue underline underline-offset-4"
      >
        Back to the start →
      </Link>
    </div>
  );
}
