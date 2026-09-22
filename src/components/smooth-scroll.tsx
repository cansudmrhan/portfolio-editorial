"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/* Off on touch-sized screens too: smoothing a native momentum scroll fights
   the platform rather than helping it. */
const NO_SMOOTHING = "(prefers-reduced-motion: reduce), (max-width: 767px)";

/**
 * Lenis smooth scroll. Never hijacks the wheel and never snaps — it only
 * smooths the native scroll, so a flick still reaches the bottom of the page.
 * Disabled entirely below 768px and when the user asks for reduced motion.
 */
export function SmoothScroll() {
  const [off, setOff] = useState(true);

  useEffect(() => {
    const query = window.matchMedia(NO_SMOOTHING);
    const sync = () => setOff(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (off) return;

    const lenis = new Lenis({ lerp: 0.1 });
    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [off]);

  return null;
}
