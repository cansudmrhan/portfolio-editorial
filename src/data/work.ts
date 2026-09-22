export type Role = {
  readonly company: string;
  readonly role: string;
};

export type Study = {
  readonly school: string;
  readonly award: string;
};

export const workHeading = "Where I have worked";

export const roles: readonly Role[] = [
  {
    company: "Deutsche Bank",
    role: "Frontend Developer, Merchant Solutions · 2026",
  },
  { company: "BREWWW", role: "Frontend Developer · 2023 – 2025" },
  {
    company: "LTA Teknoloji / DAS Akademie",
    role: "Web Game Developer · 2021 – 2023",
  },
  { company: "Mepsan", role: "Software Engineer · 2020 – 2021" },
];

export const studyHeading = "Where I studied";

export const studies: readonly Study[] = [
  {
    school: "Berlin School of Business and Innovation",
    award: "MSc Data Analytics · academic requirements completed · degree expected January 2027",
  },
  {
    school: "İzmir University of Economics",
    award: "BSc Computer Engineering · 2015 – 2020",
  },
];

export const cvLink = { label: "See the full CV →", href: "/about" } as const;

export const badge = {
  lines: ["Open to", "Work"],
  href: "/contact",
  label: "Open to work — get in touch",
} as const;

/** Typed out line by line on the ink panel as section 3 scrolls in. */
export const stack: readonly string[] = [
  "React",
  "TypeScript",
  "Next.js",
  "Vue",
  "Nuxt.js",
  "Node.js",
  "Python",
  "GraphQL",
  "Playwright",
  "Jest",
  "Webpack",
  "Vite",
  "Storybook",
  "GitHub Actions",
];
