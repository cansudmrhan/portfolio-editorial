"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { badge } from "@/data/work";

const [firstLine, secondLine] = badge.lines;

/** Breathing circle on the seam between the two panels, from md up only. */
export function WorkBadge() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.to(".badge-breathe", {
          scale: 1.06,
          duration: 1.75,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div ref={scope}>
      <div className="badge-breathe">
        <Link
          href={badge.href}
          aria-label={badge.label}
          className="type-mono flex size-[170px] flex-col items-center justify-center rounded-full border-[1.5px] border-blue bg-transparent text-center text-xs text-blue transition-colors duration-200 hover:bg-blue hover:text-cream focus-visible:bg-blue focus-visible:text-cream"
        >
          <span>{firstLine}</span>
          <span>{secondLine}</span>
        </Link>
      </div>
    </div>
  );
}
