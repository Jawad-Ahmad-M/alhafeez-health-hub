import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { isDark, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={(e) => toggleTheme(e)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex size-9.5 items-center justify-center rounded-xl border border-border/80 bg-background/80 text-foreground backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-accent hover:text-primary active:scale-95 ${className}`}
    >
      <div className="relative size-4.5">
        <Sun
          className={`absolute inset-0 size-4.5 transition-all duration-500 ${
            mounted && isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-500"
          }`}
          aria-hidden
        />
        <Moon
          className={`absolute inset-0 size-4.5 transition-all duration-500 ${
            mounted && isDark
              ? "rotate-0 scale-100 opacity-100 text-sky-400"
              : "-rotate-90 scale-0 opacity-0"
          }`}
          aria-hidden
        />
      </div>
    </button>
  );
}
