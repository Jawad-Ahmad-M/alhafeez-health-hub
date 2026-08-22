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
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Our Medical Departments</h1>
          <p className="mt-2.5 max-w-2xl text-sm opacity-90 sm:text-base">
            Comprehensive specialist care and diagnostics under one roof in Daska, Sialkot — organised into four care
            groups.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:space-y-14 sm:py-12">
        {departmentCategories.map((cat) => {
          const depts = departmentsInCategory(cat);
          return (
            <div key={cat.slug}>
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border/80 pb-4 dark:border-white/10">
                <div>
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">{cat.name}</h2>
                  <p className="mt-1.5 max-w-2xl text-xs text-muted-foreground sm:text-sm">{cat.blurb}</p>
                </div>
                <span className="text-xs font-semibold text-primary sm:text-sm">{depts.length} departments</span>
              </div>

              <div className="card-grid mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {depts.map((d, i) => {
                  const count = doctorsForDepartment(d.slug).length;
                  return (
                    <Reveal key={d.slug} delay={(i % 3) * 60}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: d.slug }}
                        className="glass glass-lift glass-sheen glass-spotlight flex h-full flex-col rounded-3xl p-5 sm:p-6"
                      >
                        <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary sm:size-12">
                          <DeptIcon name={d.icon} className="size-5.5 sm:size-6" />
                        </span>
                        <h3 className="mt-3.5 text-base font-bold text-foreground sm:text-lg">{d.name}</h3>
                        <p className="mt-1.5 flex-1 text-xs text-muted-foreground sm:text-sm">{d.short}</p>
                        <span className="mt-4 flex items-center justify-between text-xs font-semibold text-primary sm:text-sm">
                          {count > 0 ? `${count} specialist${count > 1 ? "s" : ""}` : "Consultation available"}
                          <ArrowRight className="size-3.5 sm:size-4" aria-hidden />
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
