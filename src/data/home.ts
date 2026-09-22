export type Cover = {
  readonly lettering: string;
  readonly shadowWord: string;
  readonly nameLines: readonly [string, string];
  readonly scrollCue: string;
  readonly locationLabel: string;
  readonly cornerTexture: Decoration;
  readonly outline: Decoration;
};

export type Decoration = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
};

export type Statement = {
  readonly label: string;
  readonly heading: string;
  readonly body: string;
};

export type TerminalSegment = {
  readonly text: string;
  readonly tone: "accent" | "muted";
};

export type Terminal = {
  readonly image: Decoration;
  readonly lines: readonly (readonly TerminalSegment[])[];
};

export const cover: Cover = {
  lettering: "Portfolio",
  shadowWord: "Website",
  nameLines: ["Cansu", "Demirhan"],
  scrollCue: "Scroll",
  locationLabel: "Berlin, DE",
  cornerTexture: {
    src: "/images/corner-texture.png",
    alt: "",
    width: 1254,
    height: 1254,
  },
  outline: {
    src: "/images/portrait-outline.png",
    alt: "Cansu Demirhan sitting with a laptop, cut out with a heavy blue outline.",
    width: 1198,
    height: 1293,
  },
};

export const statement: Statement = {
  label: "A — Software engineer",
  heading: "Engineer who ships",
  body: "Five years building production web applications in React and TypeScript. Most recently at Deutsche Bank, building the platforms large enterprise clients use every day. I care about interfaces that stay fast, tests that catch things, and builds that do not take five minutes.",
};

/** Terminal screenshot with a typed-out build log, shown as section 2 enters view. */
export const terminal: Terminal = {
  image: {
    src: "/images/terminal.png",
    alt: "",
    width: 1317,
    height: 1194,
  },
  lines: [
    [{ text: "$ npm run build", tone: "accent" }],
    [
      { text: "✓", tone: "accent" },
      { text: " typecheck", tone: "muted" },
    ],
    [
      { text: "✓", tone: "accent" },
      { text: " tests passed", tone: "muted" },
    ],
    [
      { text: "✓", tone: "accent" },
      { text: " production build", tone: "muted" },
    ],
    [
      { text: "✓", tone: "accent" },
      { text: " deployed", tone: "muted" },
    ],
    [
      { text: "cansu@berlin → ", tone: "muted" },
      { text: "shipped.", tone: "accent" },
    ],
  ],
};
