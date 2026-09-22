import { Terminal } from "@/components/terminal";
import { statement } from "@/data/home";

export function Statement() {
  return (
    <section
      id="statement"
      aria-labelledby="statement-heading"
      className="relative flex min-h-[100svh] w-full items-center bg-blue px-6 py-16 text-cream md:px-[8vw] md:py-0"
    >
      <div className="w-full md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-x-[6vw]">
        <div>
          <p className="type-mono text-[13px] md:text-sm">{statement.label}</p>

          <h2
            id="statement-heading"
            className="type-display type-statement mt-5 md:mt-[3dvh]"
          >
            {statement.heading}
          </h2>

          <p className="mt-6 max-w-[620px] text-base md:mt-[4dvh] md:text-lg">
            {statement.body}
          </p>
        </div>

        <Terminal />
      </div>
    </section>
  );
}
