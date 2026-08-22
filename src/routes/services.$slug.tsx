import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CircleCheck as CheckCircle2, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DeptIcon } from "@/components/site/icons";
import { DoctorCard } from "@/components/site/DoctorCard";
import { clinic, departments, doctorsForDepartment } from "@/data/clinic";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const department = departments.find((d) => d.slug === params.slug);
    if (!department) throw notFound();
    return { department, docs: doctorsForDepartment(department.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Department not found — Al-Hafeez Medical Center" }, { name: "robots", content: "noindex" }],
      };
    }
    const { department } = loaderData;
    const title = `${department.name} in Daska — Al-Hafeez Specialist Medical Center`;
    return {
      meta: [
        { title },
        { name: "description", content: department.short },
        { property: "og:title", content: title },
        { property: "og:description", content: department.short },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-foreground">Department not found</h1>
      <Button asChild className="mt-6">
        <Link to="/services">View all departments</Link>
      </Button>
    </div>
  );
}

function ServiceDetail() {
  const { department, docs } = Route.useLoaderData();

  return (
    <>
      <section className="hero-liquid text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-12 md:py-16">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-xs opacity-85 hover:underline sm:text-sm">
            <ArrowLeft className="size-3.5 sm:size-4" aria-hidden /> All departments
          </Link>
          <div className="mt-4 flex items-start gap-3.5 sm:gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15 sm:size-14 sm:rounded-2xl">
              <DeptIcon name={department.icon} className="size-6 sm:size-7" />
            </span>
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">{department.name}</h1>
              <p className="mt-1 text-xs opacity-90 sm:text-base">{department.short}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-3.5 py-8 sm:px-4 sm:py-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="glass glass-lift glass-sheen glass-spotlight rounded-2xl p-5 sm:rounded-3xl sm:p-6">
          <h2 className="text-base font-bold text-foreground sm:text-lg">About this department</h2>
          <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm sm:leading-relaxed">{department.long}</p>
          <ul className="mt-5 grid gap-2.5 text-xs text-muted-foreground sm:mt-6 sm:grid-cols-2 sm:gap-3 sm:text-sm">
            {["Senior consultant led", "Same-day diagnostics", "English & Urdu support", "Free parking on site"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden /> {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <aside className="h-fit glass glass-sheen rounded-2xl p-5 sm:rounded-3xl sm:p-6">
          <h2 className="text-base font-bold text-foreground sm:text-lg">Book a Consultation</h2>
          <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{clinic.hours}</p>
          <Button asChild className="mt-5 h-11 w-full text-sm font-bold shadow-card" size="lg">
            <Link to="/book">
              Book a Consultation
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="mt-2.5 h-11 w-full text-sm font-semibold">
            <a href={`tel:${clinic.phoneRaw}`}>
              <Phone className="size-4" aria-hidden /> {clinic.phone}
            </a>
          </Button>
        </aside>
      </section>

      <section className="mx-auto max-w-5xl px-3.5 pb-10 sm:px-4 sm:pb-12">
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">Specialists in {department.name}</h2>
        {docs.length === 0 ? (
          <p className="mt-4 glass rounded-2xl border border-dashed border-border/80 p-6 text-center text-xs text-muted-foreground dark:border-white/10 sm:rounded-3xl sm:p-8 sm:text-sm">
            Consultants for this department are available on request — please call {clinic.phone}.
          </p>
        ) : (
          <div className="mt-5 grid gap-4 sm:gap-5 sm:grid-cols-2">
            {docs.map((doc) => (
              <DoctorCard key={doc.slug} doctor={doc} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
