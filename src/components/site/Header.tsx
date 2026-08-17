import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { clinic } from "@/data/clinic";

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

      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="brand-gradient flex size-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-primary-foreground shadow-card">
              AH
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-foreground sm:text-base">
                Al-Hafeez <span className="text-primary">Specialist</span>
              </span>
              <span className="block text-[0.7rem] text-muted-foreground">Medical Center · Daska</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-accent text-accent-foreground" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
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
            <Button asChild className="mt-3 w-full">
              <Link to="/book" onClick={() => setOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
