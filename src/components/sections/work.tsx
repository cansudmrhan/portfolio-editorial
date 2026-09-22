import Link from "next/link";
import { Grain } from "@/components/grain";
import { StackTyping } from "@/components/stack-typing";
import { WorkBadge } from "@/components/work-badge";
import {
  cvLink,
  roles,
  studies,
  studyHeading,
  workHeading,
} from "@/data/work";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative isolate min-h-[100svh] w-full bg-cream md:grid md:grid-cols-[60%_40%]"
    >
      <Grain id="grain-work" className="-z-10 md:w-3/5" />

      <div className="px-6 py-16 md:px-[6vw] md:py-[8dvh]">
        <h2 id="work-heading" className="type-display text-[clamp(2rem,4.4vw,3.5rem)]">
          {workHeading}
        </h2>

        <ul className="mt-8 space-y-6 md:mt-[4dvh] md:space-y-[2.4dvh]">
          {roles.map((role) => (
            <li key={role.company}>
              <p className="type-strong break-words text-[clamp(1.05rem,1.7vw,1.5rem)]">
                {role.company}
              </p>
              <p className="type-mono mt-1 text-[13px] text-grey-500 lg:text-xs">
                {role.role}
              </p>
            </li>
          ))}
        </ul>

        <h2 className="type-display mt-12 text-[clamp(2rem,4.4vw,3.5rem)] md:mt-[6dvh]">
          {studyHeading}
        </h2>

        <ul className="mt-8 space-y-6 md:mt-[4dvh] md:space-y-[2.4dvh]">
          {studies.map((study) => (
            <li key={study.school}>
              <p className="type-strong break-words text-[clamp(1.05rem,1.7vw,1.5rem)]">
                {study.school}
              </p>
              <p className="type-mono mt-1 text-[13px] text-grey-500 lg:text-xs">
                {study.award}
              </p>
            </li>
          ))}
        </ul>

        <Link
          href={cvLink.href}
          className="mt-10 inline-flex min-h-11 items-center py-2 text-blue underline underline-offset-4 md:mt-[5dvh]"
        >
          {cvLink.label}
        </Link>

        {/* Dropped below md; centred on the seam between the panels from md up. */}
        <div className="hidden md:absolute md:top-1/2 md:left-[60%] md:z-40 md:block md:-translate-x-1/2 md:-translate-y-1/2">
          <WorkBadge />
        </div>
      </div>

      {/* Runs to the bottom edge, where section 4's ink picks it up seamlessly. */}
      <div className="flex items-center bg-ink px-6 py-16 md:py-0 md:pr-[4vw] md:pl-[8vw]">
        <StackTyping />
      </div>
    </section>
  );
}
