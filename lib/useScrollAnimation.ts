"use client";

import { useEffect, useRef } from "react";

/**
 * Hook that observes all `[data-animate]` children within the returned ref,
 * adding `animate-fade-in` and removing `opacity-0` when they enter the viewport.
 *
 * Usage:
 *   const ref = useScrollAnimation();
 *   <div ref={ref}>
 *     <div data-animate className="opacity-0" style={{ animationDelay: "100ms" }}>
 *       ...
 *     </div>
 *   </div>
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
