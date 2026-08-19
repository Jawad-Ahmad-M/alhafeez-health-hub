import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
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
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Book an Appointment</h1>
          <p className="mt-3 max-w-2xl opacity-90">
            Appointments are booked directly with a specialist. Choose your doctor below to see the exact days and
            hours they are available. Reception: {clinic.phone}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-3 sm:grid-cols-[1fr_260px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search doctor or specialty"
              className="pl-9"
              aria-label="Search doctors"
            />
          </div>
          <select
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            aria-label="Filter by department"
            className="h-10 w-full glass rounded-xl px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">All departments</option>
            {departments.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d) => {
            const blocks = doctorAvailability(d);
            return (
              <Link
                key={d.slug}
                to="/book/$slug"
                params={{ slug: d.slug }}
                className="glass glass-lift glass-sheen glass-spotlight flex h-full flex-col rounded-3xl p-5"
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
                <span className="mt-4 flex items-center justify-between border-t border-border pt-3 text-sm font-semibold text-primary">
                  Book · PKR {d.fee.toLocaleString()}
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>

        {list.length === 0 && (
          <p className="mt-10 glass rounded-3xl border border-dashed border-border p-10 text-center text-muted-foreground">
            No doctors match your search.
          </p>
        )}
      </section>
    </>
  );
}
