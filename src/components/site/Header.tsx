import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calendar, ChevronRight, Clock, Menu, MessageCircle, Phone, X } from "lucide-react";

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
    <header className="sticky top-0 z-40 w-full transform-gpu">
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

      <div className="border-b border-border/80 bg-background/95 shadow-[0_10px_40px_-28px_oklch(0.44_0.19_26/0.3)] dark:border-white/10 dark:bg-background/95 md:bg-background/80 md:backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3.5 py-2.5 sm:px-4">
          <Link to="/" className="group flex shrink-0 items-center" onClick={() => setOpen(false)}>
            <img
              src={logoDarkImg}
              alt="Al-Hafeez Specialist Medical Center"
              className="h-9.5 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-11 md:h-12 dark:hidden"
              width={220}
              height={84}
            />
            <img
              src={logoWhiteImg}
              alt="Al-Hafeez Specialist Medical Center"
              className="hidden h-9.5 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-11 md:h-12 dark:block"
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
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border/80 bg-background/80 text-foreground transition-all hover:bg-accent active:scale-95 dark:border-white/10 dark:bg-card/80 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border/80 bg-background/98 px-4 pb-5 pt-3 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-card/98 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200" aria-label="Mobile">
            <ul className="space-y-1.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-primary/12 font-bold text-primary dark:bg-primary/20 dark:text-primary-foreground" }}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="size-4 opacity-40" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2 border-t border-border/80 pt-3 dark:border-white/10">
              <Button asChild className="h-11 w-full justify-center gap-2 rounded-xl text-sm font-bold shadow-card">
                <Link to="/book" onClick={() => setOpen(false)}>
                  <Calendar className="size-4" aria-hidden />
                  Book Appointment
                </Link>
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${clinic.phoneRaw}`}
                  className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-secondary px-3 text-xs font-semibold text-secondary-foreground transition-transform active:scale-98 dark:border-white/10"
                >
                  <Phone className="size-3.5" aria-hidden /> Call Clinic
                </a>
                <a
                  href={clinic.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 items-center justify-center gap-1.5 rounded-xl bg-whatsapp px-3 text-xs font-semibold text-whatsapp-foreground transition-transform active:scale-98"
                >
                  <MessageCircle className="size-3.5" aria-hidden /> WhatsApp
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
