"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { stack } from "@/data/work";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CHAR_SECONDS = 0.035;
const LINE_PAUSE = 0.2;

/**
 * Types the stack out line by line when the section scrolls into view.
 * The markup ships with the full list so it is there without JavaScript and
 * under reduced motion; the timeline blanks it before first paint.
 */
export function StackTyping() {
  const scope = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const slots = gsap.utils.toArray<HTMLElement>(".stack-line__text");
        slots.forEach((slot) => {
          slot.textContent = "";
        });

        const timeline = gsap.timeline({
          scrollTrigger: { trigger: scope.current, start: "top 80%", once: true },
        });

        slots.forEach((slot, index) => {
          const word = stack[index].toUpperCase();
          const line = slot.closest(".stack-line");
          const counter = { typed: 0 };

          timeline.to(
            counter,
            {
              typed: word.length,
              duration: word.length * CHAR_SECONDS,
              ease: "none",
              onStart: () => line?.setAttribute("data-typing", "true"),
              onUpdate: () => {
                slot.textContent = word.slice(0, Math.round(counter.typed));
              },
              onComplete: () => line?.removeAttribute("data-typing"),
            },
            index === 0 ? 0 : `+=${LINE_PAUSE}`,
          );
        });

        return () => timeline.kill();
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <ul ref={scope} className="stack-list type-mono text-blue">
      {stack.map((entry) => (
        <li key={entry} className="stack-line">
          <span className="stack-line__text">{entry.toUpperCase()}</span>
        </li>
      ))}
    </ul>
  );
}
