"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

/** Fan geometry, left to right. z ascends from the edges towards the centre.
    Only read from md up — below that the cards are a plain vertical list. */
const FAN = [
  { x: -240, y: 24, rotate: -12, z: 1 },
  { x: -80, y: 0, rotate: -4, z: 3 },
  { x: 80, y: 0, rotate: 4, z: 4 },
  { x: 240, y: 24, rotate: 12, z: 2 },
] as const;

/** A fifth project has no seat in the fan yet; it still lists fine on mobile. */
const UNFANNED = { x: 0, y: 0, rotate: 0, z: 1 } as const;

function cardVars(index: number, active: number | null): CSSProperties {
  const base = FAN[index] ?? UNFANNED;
  const isActive = active === index;
  const nudge = active === null || isActive ? 0 : index < active ? -20 : 20;

  return {
    "--x": `${base.x + nudge}px`,
    "--y": `${isActive ? base.y - 28 : base.y}px`,
    "--r": `${isActive ? 0 : base.rotate}deg`,
    "--s": isActive ? "1.12" : "1",
    "--z": isActive ? 50 : base.z,
    "--caption": isActive ? 1 : 0,
  } as CSSProperties;
}

export function ProjectFan() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <ul className="project-fan">
      {projects.map((project, index) => (
        <li key={project.name} className="project-card" style={cardVars(index, active)}>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(index)}
            onBlur={() => setActive(null)}
          >
            <span className="project-card__frame">
              <Image
                src={project.image}
                alt={`${project.name} — ${project.stack}`}
                fill
                sizes="(max-width: 767px) calc(100vw - 48px), 300px"
                className="object-cover object-top md:object-center"
              />

              <span className="project-card__caption">
                <span className="type-strong block text-lg text-cream">
                  {project.name}
                </span>
                <span className="type-mono mt-1 block text-[13px] text-cream lg:text-[0.7rem]">
                  {project.stack}
                </span>
              </span>
            </span>
          </a>
        </li>
      ))}
      {/* TODO — AI full-stack project
      <li className="project-card" style={cardVars(4, active)}>…</li>
      */}
    </ul>
  );
}
