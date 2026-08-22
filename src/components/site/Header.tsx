import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { clinic } from "@/data/clinic";
import logoWhiteImg from "@/assets/al-hafeez-logo.png";
import logoDarkImg from "@/assets/al-hafeez-logo-dark.png";
import { ThemeToggle } from "@/components/site/ThemeToggle";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Departments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/resources", label: "Patient Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="hidden bg-brand-dark text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 pl-40 text-xs">
          <p className="opacity-90">{clinic.address}</p>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 opacity-90">
              <Clock className="size-3.5" aria-hidden /> {clinic.hours}
            </span>
            <a href={`tel:${clinic.phoneRaw}`} className="inline-flex items-center gap-1.5 font-semibold hover:underline">
              <Phone className="size-3.5" aria-hidden /> {clinic.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border/80 bg-background/88 shadow-[0_10px_40px_-28px_oklch(0.44_0.19_26/0.3)] backdrop-blur-md dark:border-white/10 dark:bg-background/90 md:bg-background/70 md:backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
          <Link to="/" className="group flex items-center" onClick={() => setOpen(false)}>
            <img
              src={logoDarkImg}
              alt="Al-Hafeez Specialist Medical Center"
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-12 dark:hidden"
              width={220}
              height={84}
            />
            <img
              src={logoWhiteImg}
              alt="Al-Hafeez Specialist Medical Center"
              className="hidden h-11 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-12 dark:block"
              width={220}
              height={84}
            />
          </Link>

          <nav
            className="hidden items-center gap-1 rounded-full border border-border/70 bg-background/60 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 lg:flex"
            aria-label="Main"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className: "bg-primary/10 text-primary font-semibold shadow-sm dark:bg-primary/25 dark:text-primary-foreground",
                }}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-foreground dark:hover:bg-white/10 dark:hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <a href={`tel:${clinic.phoneRaw}`}>
                <Phone className="size-4" aria-hidden /> Call
              </a>
            </Button>
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/book">Book Appointment</Link>
            </Button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-4 py-3 lg:hidden" aria-label="Mobile">
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-accent text-accent-foreground" }}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-2">
              <Button asChild className="flex-1">
                <Link to="/book" onClick={() => setOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
