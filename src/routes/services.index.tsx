import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ClipboardPlus, HeartPulse, Scissors } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { DeptIcon } from "@/components/site/icons";
import { departmentCategories, departmentsInCategory } from "@/data/clinic";

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
      <section className="brand-gradient text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Our Medical Departments</h1>
          <p className="mt-3 max-w-2xl opacity-90">
            Comprehensive specialist care and diagnostics under one roof in Daska, Sialkot — organised into four care
            groups.
          </p>
        </div>
      </section>

      <section className="bg-[#fcf8f7] px-4 py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departmentCategories.map((category, i) => {
              const categoryIcons = [Scissors, Activity, HeartPulse, ClipboardPlus];
              const CategoryIcon = categoryIcons[i] ?? Activity;
              const categoryDepartments = departmentsInCategory(category);
              return (
                <Reveal key={category.slug} delay={i * 70}>
                  <article className="card-hover h-full rounded-3xl border border-primary/15 bg-card p-6 shadow-card">
                    <CategoryIcon className="size-9 text-primary" aria-hidden />
                    <h2 className="mt-5 border-l-4 border-primary pl-3 text-lg font-bold text-primary">
                      {category.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{category.blurb}</p>
                    <ul className="mt-4 space-y-0">
                      {categoryDepartments.map((department) => (
                        <li key={department.slug} className="border-b border-dashed border-border last:border-0">
                          <Link
                            to="/services/$slug"
                            params={{ slug: department.slug }}
                            className="flex items-center gap-3 py-2 text-sm text-foreground transition-colors hover:text-primary"
                          >
                            <span className="text-primary">•</span>
                            <span className="flex-1">{department.name}</span>
                            <DeptIcon name={department.icon} className="size-4 text-muted-foreground" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
