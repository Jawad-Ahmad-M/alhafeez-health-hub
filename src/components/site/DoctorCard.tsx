import { Link } from "@tanstack/react-router";
import { CalendarDays, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { isAvailableToday, type Doctor } from "@/data/clinic";

function initials(name: string) {
  return name
    .replace(/^(Dr\.|Ms\.|Mr\.)\s*/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const available = isAvailableToday(doctor.schedule);

  return (
    <article className="glass glass-lift glass-sheen group flex h-full flex-col rounded-3xl p-5">
      <div className="flex items-start gap-4">
        <span className="brand-gradient flex size-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-primary-foreground shadow-card transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
          {initials(doctor.name)}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-foreground">{doctor.name}</h3>
          <p className="text-sm font-medium text-primary">{doctor.specialty}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{doctor.qualifications}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <p className="flex items-start gap-2">
          <CalendarDays className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
          {doctor.schedule}
        </p>
        <p className="flex items-center gap-2">
          <Wallet className="size-4 shrink-0 text-primary" aria-hidden />
          Consultation fee: <strong className="text-foreground">PKR {doctor.fee.toLocaleString()}</strong>
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
        <span
          className={
            available
              ? "inline-flex items-center gap-1.5 rounded-full bg-success/12 px-2.5 py-1 text-xs font-semibold text-success"
              : "inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground"
          }
        >
          <span className={available ? "size-1.5 rounded-full bg-success" : "size-1.5 rounded-full bg-primary"} />
          {available ? "Available today" : "Not available today"}
        </span>
        <div className="flex gap-2">
          <Button asChild size="sm" variant="outline">
            <Link to="/doctors/$slug" params={{ slug: doctor.slug }}>
              Profile
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/book/$slug" params={{ slug: doctor.slug }}>
              Book
            </Link>
          </Button>
        </div>

      </div>
    </article>
  );
}
