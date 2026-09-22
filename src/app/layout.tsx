import type { Metadata } from "next";
import {
  Anton,
  Archivo,
  Archivo_Black,
  JetBrains_Mono,
  Permanent_Marker,
} from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/data/site";
import "./globals.css";

const brush = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: "400",
  subsets: ["latin"],
});

const display = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const strong = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const body = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// TODO — Open Graph, Twitter, generated OG image, robots, sitemap and JSON-LD
// land in the metadata pass (brief §12).
export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "Software engineer building production web products with React, TypeScript and modern frontend technologies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${brush.variable} ${display.variable} ${strong.variable} ${body.variable} ${mono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="type-mono sr-only z-50 focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-ink focus:px-4 focus:py-4 focus:text-xs focus:text-cream"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
