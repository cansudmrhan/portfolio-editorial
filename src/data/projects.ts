export type Project = {
  readonly name: string;
  readonly stack: readonly string[];
  readonly description: string;
  readonly href: string;
  readonly image: string;
};

export const projects: readonly Project[] = [
  {
    name: "Sensat",
    stack: ["Nuxt.js", "SASS"],
    description:
      "A comprehensive multi-category marketplace for buying and selling new and used vehicles, real estate, and marine vessels.",
    href: "https://sensat.com",
    image: "/images/projects/sensat.jpg",
  },
  {
    name: "Maxitech",
    stack: ["Remix.js", "Tailwind"],
    description: "Corporate website with CMS integration.",
    href: "https://maxitech.com",
    image: "/images/projects/maxitech.jpg",
  },
  {
    name: "Lunafi",
    stack: ["Next.js", "Styled Components", "Jest"],
    description: "Freelancer and gig worker management platform.",
    href: "https://lunafi.co",
    image: "/images/projects/lunafi.jpg",
  },
  {
    name: "Villa Sepeti",
    stack: ["React", "Next.js", "GraphQL", "Hasura"],
    description: "",
    href: "https://villasepeti.com",
    image: "/images/projects/villasepeti.jpg",
  },
  // TODO — AI full-stack project
];

export const projectsHeading = "projects";
