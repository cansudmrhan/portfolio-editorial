import { site } from "./site";

export const closing = {
  headingLines: ["Based in Berlin.", "Open to Germany,", "Dubai & remote."] as const,
  cta: { label: "Get in touch →", href: "/contact" },
  next: { eyebrow: "Next", label: "Read the long version →", href: "/about" },
  colophon: "Built with Next.js, GSAP and too much tea.",
  copyright: "© 2026 Cansu Demirhan",
  links: [
    { label: "Email", href: `mailto:${site.email}` },
    ...site.social,
  ],
} as const;
