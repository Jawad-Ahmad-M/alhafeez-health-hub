import { useEffect, useRef, type RefObject } from "react";

/**
 * Wires up the cursor-following spotlight layer used by `glass-spotlight`.
 *
 * - On pointer move, sets `--gx` / `--gy` (0–100%) on the element so the
 *   radial highlight tracks the cursor across the surface.
 * - Throttled with requestAnimationFrame so it stays smooth on dense grids.
 * - No-op on touch-only devices (no mousemove) and when the user has
 *   requested reduced motion.
 *
 * Attach to any element that also carries the `glass-spotlight` utility:
 *   const ref = useRef<HTMLElement>(null);
 *   useGlassSpotlight(ref);
 */
export function useGlassSpotlight<T extends HTMLElement>(ref: RefObject<T | null>) {
  const raf = useRef<number | null>(null);
  const next = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const flush = () => {
      raf.current = null;
      const pos = next.current;
      if (!pos) return;
      el.style.setProperty("--gx", `${pos.x}%`);
      el.style.setProperty("--gy", `${pos.y}%`);
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      next.current = { x, y };
      if (raf.current == null) raf.current = requestAnimationFrame(flush);
    };

    el.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("pointermove", onMove);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, [ref]);
}
