export type Project = {
  readonly name: string;
  readonly stack: string;
  readonly href: string;
  readonly image: string;
};

export const projects: readonly Project[] = [
  {
    name: "Sensat",
    stack: "React · TypeScript · GraphQL",
    href: "https://sensat.com",
    image: "/images/projects/sensat.jpg",
  },
  {
    name: "Maxitech",
    stack: "Vue · Nuxt.js · REST",
    href: "https://maxitech.com",
    image: "/images/projects/maxitech.jpg",
  },
  {
    name: "Lunafi",
    stack: "React · Next.js",
    href: "https://lunafi.co",
    image: "/images/projects/lunafi.jpg",
  },
  {
    name: "Villa Sepeti",
    stack: "Vue · Nuxt.js · SCSS",
    href: "https://villasepeti.com",
    image: "/images/projects/villasepeti.jpg",
  },
  // TODO — AI full-stack project
];

export const projectsHeading = "projects";
