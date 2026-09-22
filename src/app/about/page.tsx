import type { Metadata } from "next";
import Link from "next/link";
import {
  backLink,
  education,
  experience,
  intro,
  languages,
  skills,
} from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description:
    "The long version: experience, education and skills of a frontend engineer in Berlin.",
};

const heading =
  "type-display mt-14 text-blue text-[clamp(1.75rem,3.4vw,2.75rem)] md:mt-[9dvh]";
const entryTitle =
  "type-strong break-words leading-tight text-[clamp(1rem,1.5vw,1.25rem)]";
const entryMeta = "type-mono mt-2 text-[13px] text-grey-300 lg:text-xs";

export default function AboutPage() {
  return (
    <div className="min-h-[100svh] bg-ink text-cream">
      <article className="mx-auto max-w-[72rem] px-6 py-16 md:px-[8vw] md:py-[12dvh]">
        <h1 className="type-display text-[clamp(2.5rem,7vw,5.5rem)]">
          {site.name}
        </h1>

        {intro.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mt-5 max-w-[62ch] md:mt-[3dvh]">
            {paragraph}
          </p>
        ))}

        <h2 className={heading}>Experience</h2>
        {experience.map((position) => (
          <section key={position.title} className="mt-8 md:mt-[5dvh]">
            <h3 className={entryTitle}>{position.title}</h3>
            <p className={entryMeta}>{position.meta}</p>
            <ul className="mt-4 max-w-[70ch] list-disc space-y-2 pl-5 marker:text-blue">
              {position.points.map((point) => (
                <li key={point.slice(0, 32)}>{point}</li>
              ))}
            </ul>
          </section>
        ))}

        <h2 className={heading}>Education</h2>
        {education.map((degree) => (
          <section key={degree.title} className="mt-8 md:mt-[5dvh]">
            <h3 className={entryTitle}>{degree.title}</h3>
            <p className={entryMeta}>{degree.meta}</p>
            {degree.notes.map((note) => (
              <p key={note.slice(0, 32)} className="mt-3 max-w-[70ch]">
                {note}
              </p>
            ))}
          </section>
        ))}

        <h2 className={heading}>Skills</h2>
        <dl className="mt-8 space-y-6 md:mt-[4dvh] md:space-y-[2.5dvh]">
          {skills.map((group) => (
            <div key={group.label} className="md:grid md:grid-cols-[14rem_1fr] md:gap-6">
              <dt className="type-mono text-[13px] text-grey-300 lg:text-xs">{group.label}</dt>
              <dd className="mt-1 md:mt-0">{group.items}</dd>
            </div>
          ))}
        </dl>

        <h2 className={heading}>Languages</h2>
        <p className="mt-5 md:mt-[3dvh]">{languages}</p>

        <Link
          href={backLink.href}
          className="mt-14 inline-flex min-h-11 items-center underline underline-offset-4 md:mt-[9dvh]"
        >
          {backLink.label}
        </Link>
      </article>
    </div>
  );
}
