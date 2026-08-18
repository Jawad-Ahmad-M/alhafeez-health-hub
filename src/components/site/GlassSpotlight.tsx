import { useRef, type ElementType, type ReactNode, type RefObject } from "react";

import { cn } from "@/lib/utils";
import { useGlassSpotlight } from "@/hooks/use-glass-spotlight";

/**
 * GlassSpotlight — a wrapper that adds the cursor-following liquid-glass
 * highlight (`glass-spotlight`) to any element. Use around cards, panels
 * and list items that should react to the pointer.
 *
 * Renders as the given `as` element (default `div`) and forwards className.
 */
export function GlassSpotlight({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  useGlassSpotlight(ref as RefObject<HTMLElement>);

  const Component = Tag as ElementType;
  return (
    <Component
      ref={ref}
      className={cn("glass-spotlight", className)}
    >
      {children}
    </Component>
  );
}
