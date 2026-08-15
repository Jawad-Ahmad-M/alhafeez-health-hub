import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { DeptIcon } from "@/components/site/icons";
import { departments, doctorsForDepartment } from "@/data/clinic";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Medical Departments — Al-Hafeez Medical Center Daska" },
      {
        name: "description",
        content:
          "21 departments at Al-Hafeez Specialist Medical Center, Daska — cardiology, nephrology, gynaecology, ENT, physiotherapy, radiology and more.",
      },
      { property: "og:title", content: "Our Medical Departments — Al-Hafeez Daska" },
      {
        property: "og:description",
        content: "Explore all 21 specialist departments and the consultants who lead them.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="brand-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Our Medical Departments</h1>
          <p className="mt-3 max-w-2xl opacity-90">
            Comprehensive specialist care and diagnostics under one roof in Daska, Sialkot.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d, i) => {
            const count = doctorsForDepartment(d.slug).length;
            return (
              <Reveal key={d.slug} delay={(i % 3) * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: d.slug }}
                  className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                    <DeptIcon name={d.icon} className="size-6" />
                  </span>
                  <h2 className="mt-4 text-lg font-bold text-foreground">{d.name}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{d.short}</p>
                  <span className="mt-4 flex items-center justify-between text-sm font-semibold text-primary">
                    {count > 0 ? `${count} specialist${count > 1 ? "s" : ""}` : "Consultation available"}
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
