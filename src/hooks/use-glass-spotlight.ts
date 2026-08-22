import { useEffect, useRef, type RefObject } from "react";

/**
 * Wires up the cursor-following spotlight layer used by `glass-spotlight`.
 *
 * - On pointer move, sets `--gx` / `--gy` (0–100%) on the element so the
 *   radial highlight tracks the cursor across the surface.
 * - Dynamically binds the pointermove listener on pointerenter, and removes it
 *   on pointerleave, ensuring that active listeners exist ONLY for the hovered card.
 * - Caches the bounding client rect on pointerenter to prevent layout thrashing
 *   (reflows) on pointermove.
 * - Throttled with requestAnimationFrame so it stays smooth on dense grids.
 * - No-op on touch-only devices (no mousemove), screen widths < 768px (mobile),
 *   and when the user has requested reduced motion.
 *
 * Attach to any element that also carries the `glass-spotlight` utility:
 *   const ref = useRef<HTMLElement>(null);
 *   useGlassSpotlight(ref);
 */
export function useGlassSpotlight<T extends HTMLElement>(ref: RefObject<T | null>) {
  const raf = useRef<number | null>(null);
  const next = useRef<{ x: number; y: number } | null>(null);
  const rectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;

    // Fast return for mobile screens and user motion settings
    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const isMobileScreen = window.innerWidth < 768;

    if (prefersReduced || isCoarsePointer || isMobileScreen) return;

    const flush = () => {
      raf.current = null;
      const pos = next.current;
      if (!pos) return;
      el.style.setProperty("--gx", `${pos.x}%`);
      el.style.setProperty("--gy", `${pos.y}%`);
    };

    const onMove = (e: PointerEvent) => {
      let rect = rectRef.current;
      if (!rect) {
        rect = el.getBoundingClientRect();
        rectRef.current = rect;
      }
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      next.current = { x, y };
      if (raf.current == null) raf.current = requestAnimationFrame(flush);
    };

    const onEnter = () => {
      rectRef.current = el.getBoundingClientRect();
      el.addEventListener("pointermove", onMove);
    };

    const onLeave = () => {
      el.removeEventListener("pointermove", onMove);
      rectRef.current = null;
      if (raf.current != null) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointermove", onMove);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, [ref]);
}

