import { useEffect, useRef } from "react";

/**
 * Observes children of the returned ref and adds `data-visible`
 * when they enter the viewport. CSS handles the actual transition.
 * Much smoother on mobile than Framer Motion whileInView.
 */
export function useFadeIn(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = Array.from(el.querySelectorAll<HTMLElement>("[data-animate]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}