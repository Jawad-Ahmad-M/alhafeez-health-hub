import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { DeptIcon } from "@/components/site/icons";
import { departmentCategories, departmentsInCategory, doctorsForDepartment } from "@/data/clinic";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Medical Departments — Al-Hafeez Medical Center Daska" },
      {
        name: "description",
        content:
          "Four care groups at Al-Hafeez Specialist Medical Center, Daska — General & Surgical, Internal Medicine, Specialized Care, and Medicine & Diagnostics.",
      },
      { property: "og:title", content: "Our Medical Departments — Al-Hafeez Daska" },
      {
        property: "og:description",
        content: "Explore our four care groups and the specialist departments within each.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="hero-liquid text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Our Medical Departments</h1>
          <p className="mt-3 max-w-2xl opacity-90">
            Comprehensive specialist care and diagnostics under one roof in Daska, Sialkot — organised into four care
            groups.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-14 px-4 py-12">
        {departmentCategories.map((cat) => {
          const depts = departmentsInCategory(cat);
          return (
            <div key={cat.slug}>
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{cat.name}</h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{cat.blurb}</p>
                </div>
                <span className="text-sm font-semibold text-primary">{depts.length} departments</span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {depts.map((d, i) => {
                  const count = doctorsForDepartment(d.slug).length;
                  return (
                    <Reveal key={d.slug} delay={(i % 3) * 60}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: d.slug }}
                        className="glass glass-lift glass-sheen glass-spotlight flex h-full flex-col rounded-3xl p-6"
                      >
                        <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                          <DeptIcon name={d.icon} className="size-6" />
                        </span>
                        <h3 className="mt-4 text-lg font-bold text-foreground">{d.name}</h3>
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
            </div>
          );
        })}
      </section>
    </>
  );
}
