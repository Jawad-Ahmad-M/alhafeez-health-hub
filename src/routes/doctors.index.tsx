import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/site/Reveal";
import { DoctorCard } from "@/components/site/DoctorCard";
import { doctors, specialties } from "@/data/clinic";

export const Route = createFileRoute("/doctors/")({
  head: () => ({
    meta: [
      { title: "Our Specialist Team — Al-Hafeez Medical Center Daska" },
      {
        name: "description",
        content:
          "Browse 26 specialist consultants at Al-Hafeez Specialist Medical Center, Daska. Filter by specialty, see schedules and consultation fees.",
      },
      { property: "og:title", content: "Our Specialist Team — Al-Hafeez Medical Center" },
      {
        property: "og:description",
        content: "Find the right specialist for your health needs in Daska, Sialkot.",
      },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return doctors.filter((d) => {
      const matchesSpecialty = specialty === "all" || d.specialty === specialty;
      const matchesQuery =
        !q || d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q);
      return matchesSpecialty && matchesQuery;
    });
  }, [query, specialty]);

  return (
    <>
      <section className="hero-liquid text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Our Specialist Team</h1>
          <p className="mt-3 max-w-2xl opacity-90">Find the right specialist for your health needs.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-4 glass rounded-3xl p-5 sm:grid-cols-[1fr_18rem]">
          <div>
            <Label htmlFor="doc-search">Search by name or specialty</Label>
            <div className="relative mt-1">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <Input
                id="doc-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Nephrologist or Dr. Ali"
                className="pl-9"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="doc-specialty">Specialty</Label>
            <div className="mt-1">
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger id="doc-specialty">
                  <SelectValue placeholder="All specialties" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All specialties</SelectItem>
                  {specialties.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing <strong className="text-foreground">{filtered.length}</strong> of {doctors.length} specialists
        </p>

        {filtered.length === 0 ? (
          <p className="mt-10 glass rounded-3xl border border-dashed border-border p-10 text-center text-muted-foreground">
            No doctors match your search. Try a different name or specialty.
          </p>
        ) : (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((doc, i) => (
              <Reveal key={doc.slug} delay={(i % 3) * 60}>
                <DoctorCard doctor={doc} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
