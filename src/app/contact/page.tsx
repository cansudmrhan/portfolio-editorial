import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/data/contact";
import { closing } from "@/data/closing";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description:
    "Get in touch about frontend and full-stack roles in Dubai, Germany and remote.",
};

export default function ContactPage() {
  return (
    <div className="min-h-[100svh] bg-ink px-6 py-16 text-cream md:px-[8vw] md:py-[12dvh]">
      <h1 className="type-display text-[clamp(2.5rem,7vw,5.5rem)]">
        {contact.heading}
      </h1>

      <p className="mt-5 max-w-[52ch] md:mt-[3dvh]">{contact.intro}</p>

      <ContactForm />

      <nav aria-label="Direct links" className="mt-12 md:mt-[8dvh]">
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

      <Link
        href="/"
        className="mt-12 inline-flex min-h-11 items-center underline underline-offset-4 md:mt-[8dvh]"
      >
        ← Back to the short version
      </Link>
    </div>
  );
}
