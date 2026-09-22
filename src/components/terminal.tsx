"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { terminal } from "@/data/home";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CHAR_SECONDS = 0.028;
const FADE_DURATION = 0.3;
const LINE_STAGGER = 0.18;

const [commandLine, ...statusLines] = terminal.lines;
const commandText = commandLine.map((segment) => segment.text).join("");

/**
 * Terminal screenshot with a build log typed over its body area as the
 * statement section enters view. The screenshot already has its own caret,
 * so only the log lines animate. Markup ships fully visible so it holds up
 * with no JS and under reduced motion; the timeline blanks it before first
 * paint otherwise.
 */
export function Terminal() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const command = scope.current?.querySelector<HTMLElement>(".terminal__command");
        const statuses = gsap.utils.toArray<HTMLElement>(".terminal__status");
        if (!command) return;

        gsap.set(statuses, { opacity: 0 });
        command.textContent = "";

        const timeline = gsap.timeline({
          scrollTrigger: { trigger: scope.current, start: "top 80%", once: true },
        });

        const counter = { typed: 0 };
        timeline.to(counter, {
          typed: commandText.length,
          duration: commandText.length * CHAR_SECONDS,
          ease: "none",
          onUpdate: () => {
            command.textContent = commandText.slice(0, Math.round(counter.typed));
          },
        });

        timeline.to(statuses, {
          opacity: 1,
          duration: FADE_DURATION,
          stagger: LINE_STAGGER,
          ease: "power1.out",
        });

        return () => timeline.kill();
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      className="terminal relative mx-auto mt-10 w-[min(100%,360px)] aspect-[1317/1194] md:mx-0 md:mt-0 md:w-[clamp(280px,30vw,480px)]"
    >
      <Image
        src={terminal.image.src}
        alt={terminal.image.alt}
        fill
        sizes="(max-width: 767px) 360px, 30vw"
        className="object-contain"
      />

      <div className="terminal__body">
        <p>
          <span className="terminal__command text-[#F2C94C]">{commandText}</span>
        </p>

        {statusLines.map((segments, index) => (
          <p key={index} className="terminal__status">
            {segments.map((segment, segmentIndex) => (
              <span
                key={segmentIndex}
                className={segment.tone === "accent" ? "text-[#F2C94C]" : "text-[#D6D8E0]"}
              >
                {segment.text}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}
