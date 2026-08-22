import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { clinic, departments, doctorAvailability, doctors, formatBlockDays } from "@/data/clinic";

export const Route = createFileRoute("/book/")({
  head: () => ({
    meta: [
      { title: "Book an Appointment Online — Al-Hafeez Medical Center Daska" },
      {
        name: "description",
        content:
          "Choose your specialist and book an appointment online at Al-Hafeez Specialist Medical Center, Daska. Live doctor availability, real clinic timings, instant request.",
      },
      { property: "og:title", content: "Book an Appointment — Al-Hafeez Daska" },
      {
        property: "og:description",
        content: "Pick a doctor, pick an available date and time inside their clinic hours, and send your request.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookIndexPage,
});

function BookIndexPage() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("");

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return doctors.filter((d) => {
      const matchesDept = !dept || d.departments.includes(dept);
      const matchesText =
        !needle || d.name.toLowerCase().includes(needle) || d.specialty.toLowerCase().includes(needle);
      return matchesDept && matchesText;
    });
  }, [q, dept]);

  return (
    <>
      <section className="hero-liquid text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Book an Appointment</h1>
          <p className="mt-2.5 max-w-2xl text-sm opacity-90 sm:text-base">
            Appointments are booked directly with a specialist. Choose your doctor below to see the exact days and
            hours they are available. Reception: {clinic.phone}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="grid gap-3 sm:grid-cols-[1fr_260px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search doctor or specialty"
              className="h-10.5 pl-9 text-base md:text-sm"
              aria-label="Search doctors"
            />
          </div>
          <Select value={dept || "all"} onValueChange={(value) => setDept(value === "all" ? "" : value)}>
            <SelectTrigger className="h-10.5 text-base md:text-sm" aria-label="Filter by department">
              <SelectValue placeholder="All departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All departments</SelectItem>
              {departments.map((d) => (
                <SelectItem key={d.slug} value={d.slug}>
                  {d.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d) => {
            const blocks = doctorAvailability(d);
            return (
              <Link
                key={d.slug}
                to="/book/$slug"
                params={{ slug: d.slug }}
                className="glass glass-lift glass-sheen glass-spotlight flex h-full flex-col rounded-3xl p-4.5 sm:p-5"
              >
                <h2 className="text-base font-bold text-foreground">{d.name}</h2>
                <p className="text-sm font-medium text-primary">{d.specialty}</p>
                <ul className="mt-3 flex-1 space-y-1 text-xs text-muted-foreground">
                  {blocks.map((b) => (
                    <li key={`${b.start}-${b.days.join()}`}>
                      {formatBlockDays(b)} · {b.start} – {b.end}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 flex items-center justify-between border-t border-border/80 pt-3 text-sm font-semibold text-primary dark:border-white/10">
                  Book · PKR {d.fee.toLocaleString()}
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>

        {list.length === 0 && (
          <p className="mt-8 glass rounded-2xl border border-dashed border-border/80 p-8 text-center text-sm text-muted-foreground dark:border-white/10 sm:rounded-3xl sm:p-10">
            No doctors match your search.
          </p>
        )}
      </section>
    </>
  );
}
