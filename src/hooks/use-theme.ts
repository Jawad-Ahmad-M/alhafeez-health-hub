import { useEffect, useState, useCallback } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setThemeState(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback((event?: React.MouseEvent | MouseEvent) => {
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme: Theme = isDark ? "light" : "dark";

    const applyTheme = () => {
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      try {
        localStorage.setItem("alhafeez-theme", nextTheme);
      } catch {
        // Local storage unavailable
      }
      setThemeState(nextTheme);
    };

    // Check if View Transitions API with circular ripple is supported
    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      event
    ) {
      const x = event.clientX;
      const y = event.clientY;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const doc = document as Document & {
        startViewTransition?: (callback: () => void) => { ready: Promise<void> };
      };
      if (doc.startViewTransition) {
        const transition = doc.startViewTransition(() => {
          applyTheme();
        });

        transition.ready.then(() => {
          const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ];
          document.documentElement.animate(
            {
              clipPath: nextTheme === "dark" ? clipPath : [...clipPath].reverse(),
            },
            {
              duration: 480,
              easing: "cubic-bezier(0.25, 1, 0.5, 1)",
              pseudoElement:
                nextTheme === "dark"
                  ? "::view-transition-new(root)"
                  : "::view-transition-old(root)",
            }
          );
        });
      } else {
        applyTheme();
      }
    } else {
      applyTheme();
    }
  }, []);

  return { theme, isDark: theme === "dark", toggleTheme, mounted };
}
