export type SocialLink = {
  readonly label: string;
  readonly href: string;
};

export type Site = {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly email: string;
  readonly social: readonly SocialLink[];
};

export const site: Site = {
  name: "Cansu Demirhan",
  role: "Software Engineer",
  location: "Berlin",
  email: "cansudmrhan@gmail.com",
  social: [
    { label: "LinkedIn", href: "https://linkedin.com/in/cansudemirhan" },
    { label: "GitHub", href: "https://github.com/cansudmrhan" },
  ],
};
