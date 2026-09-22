export type Position = {
  readonly title: string;
  readonly meta: string;
  readonly points: readonly string[];
};

export type Degree = {
  readonly title: string;
  readonly meta: string;
  readonly notes: readonly string[];
};

export type SkillGroup = {
  readonly label: string;
  readonly items: string;
};

export const intro: readonly string[] = [
  "I am a software engineer with around five years of experience, mostly building frontend products with React and TypeScript. I started out building educational web games in İzmir and later shipped banking platforms in Berlin. Along the way I completed the academic requirements for an MSc in Data Analytics and wrote my thesis on generative AI in banking, which is how I became interested in building products where AI is part of the engineering rather than the marketing.",
  "I have completed the academic requirements for my master's and I am looking for the next place to build things for the long term.",
];

export const experience: readonly Position[] = [
  {
    title:
      "Frontend Developer, Merchant Solutions (Corporate Banking) — Deutsche Bank",
    meta: "Berlin, Germany · March 2026 – August 2026",
    points: [
      "Built and shipped React and TypeScript interfaces for corporate banking merchant solutions: transaction pages, settlement reports and operational dashboards used by large enterprise clients.",
      "Owned features end to end: implementation, code review, testing, production release, monitoring and post-release troubleshooting, inside a regulated financial environment.",
      "Led key workstreams in a Webpack to Vite migration across a monorepo, restructuring package setups, environment configuration and build scripts, cutting local build and CI run times.",
      "Wrote Playwright end-to-end test suites for transaction and settlement reporting flows.",
      "Built reusable components against a Storybook-based design system.",
      "Diagnosed and resolved CI/CD failures in GitHub Actions.",
    ],
  },
  {
    title: "Frontend Developer — BREWWW",
    meta: "Remote · January 2023 – July 2025",
    points: [
      "Delivered four production platforms using React, Vue, Next.js and Nuxt.js, translating Figma and InVision designs into responsive, cross-browser interfaces.",
      "Designed scalable frontend architecture in TypeScript and integrated GraphQL and REST APIs to support complex business logic.",
      "Built and maintained a reusable component library documented in Storybook.",
      "Coordinated API contracts directly with backend engineers.",
    ],
  },
  {
    title: "Web Game Developer — LTA Teknoloji / DAS Akademie",
    meta: "İzmir, Türkiye · December 2021 – February 2023",
    points: [
      "Built interactive educational web games in JavaScript, Phaser, HTML5 and CSS, focused on rendering performance across devices.",
    ],
  },
  {
    title: "Software Engineer — Mepsan",
    meta: "İzmir, Türkiye · December 2020 – December 2021",
    points: [
      "First engineering role, working across the stack on POS products: browser interfaces in vanilla JavaScript, and contributions to backend services in Python, Flask and MongoDB.",
    ],
  },
];

export const education: readonly Degree[] = [
  {
    title: "MSc, Data Analytics — Berlin School of Business and Innovation",
    meta: "Berlin, Germany · Academic requirements completed · Degree expected January 2027",
    notes: [
      'Thesis: "Generative AI in Merchant Services within Banking: A Data-Driven Exploration of Opportunities, Risks and User Impact."',
      "Coursework: Big Data Systems (AWS, Hadoop), Data Visualisation (Tableau).",
    ],
  },
  {
    title: "BSc, Computer Engineering — İzmir University of Economics",
    meta: "İzmir, Türkiye · 2015 – 2020",
    notes: [],
  },
];

export const skills: readonly SkillGroup[] = [
  {
    label: "Languages",
    items: "JavaScript (ES6+), TypeScript, HTML5, CSS3, Python",
  },
  {
    label: "Frameworks",
    items: "React, Redux, Next.js, Vue, Nuxt.js, Node.js",
  },
  { label: "Build and tooling", items: "Webpack, Vite, npm" },
  {
    label: "UI",
    items:
      "MUI, MUI X Data Grid, Storybook, SCSS, Tailwind CSS, Styled Components",
  },
  { label: "APIs and data", items: "GraphQL, REST, Flask, MongoDB" },
  { label: "Testing", items: "Playwright, Jest" },
  {
    label: "CI/CD",
    items: "GitHub Actions, Git, Bitbucket, Jira, Agile/Scrum",
  },
];

export const languages = "Turkish (native), English (B2), German (A1/A2)";

export const backLink = {
  label: "← Back to the short version",
  href: "/",
} as const;
