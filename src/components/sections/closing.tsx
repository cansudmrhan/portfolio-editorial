import Link from "next/link";
import { closing } from "@/data/closing";

export function Closing() {
  return (
    <section
      id="closing"
      aria-labelledby="closing-heading"
      className="relative flex w-full flex-col justify-center bg-ink px-6 py-16 text-cream md:min-h-[100svh] md:px-[8vw] md:py-[10dvh]"
    >
      <h2
        id="closing-heading"
        className="type-display max-w-[16ch] text-blue text-[clamp(2rem,5.2vw,4.25rem)]"
      >
        {closing.headingLines[0]}
        <br />
        {closing.headingLines[1]}
        <br />
        {closing.headingLines[2]}
      </h2>

      <Link
        href={closing.cta.href}
        className="type-strong mt-12 inline-flex min-h-11 w-fit items-center text-blue text-[clamp(1.25rem,2.2vw,1.75rem)] underline underline-offset-8 md:mt-[5dvh]"
      >
        {closing.cta.label}
      </Link>

      <hr className="mt-12 border-0 border-t border-t-cream/30 md:mt-[8dvh]" />

      <footer className="mt-8 flex flex-col gap-8 md:mt-[5dvh] md:gap-[4dvh]">
        <p className="flex flex-wrap items-baseline gap-4">
          <span className="type-mono text-[13px] text-grey-300 lg:text-xs">
            {closing.next.eyebrow}
          </span>
          <Link
            href={closing.next.href}
            className="inline-flex min-h-11 items-center underline underline-offset-4"
          >
            {closing.next.label}
          </Link>
        </p>

        <nav aria-label="Elsewhere">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 md:gap-8">
            {closing.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="type-mono inline-flex min-h-11 items-center text-[13px] underline underline-offset-4 lg:text-xs"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="type-mono flex flex-wrap justify-between gap-x-4 gap-y-2 text-[13px] text-grey-300 lg:text-[0.65rem]">
          <span>{closing.colophon}</span>
          <span>{closing.copyright}</span>
        </p>
      </footer>
    </section>
  );
}
