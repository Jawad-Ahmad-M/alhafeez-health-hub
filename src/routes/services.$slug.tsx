import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";

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
      <section className="brand-gradient text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm opacity-85 hover:underline">
            <ArrowLeft className="size-4" aria-hidden /> All departments
          </Link>
          <div className="mt-5 flex items-start gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15">
              <DeptIcon name={department.icon} className="size-7" />
            </span>
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">{department.name}</h1>
              <p className="mt-2 max-w-2xl opacity-90">{department.short}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="glass rounded-3xl p-6">
          <h2 className="text-lg font-bold text-foreground">About this department</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{department.long}</p>
          <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            {["Senior consultant led", "Same-day diagnostics", "English & Urdu support", "Free parking on site"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden /> {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <aside className="h-fit glass rounded-3xl p-6">
          <h2 className="text-lg font-bold text-foreground">Book a Consultation</h2>
          <p className="mt-2 text-sm text-muted-foreground">{clinic.hours}</p>
          <Button asChild className="mt-5 w-full" size="lg">
            <Link to="/book">
              Book a Consultation
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="mt-3 w-full">
            <a href={`tel:${clinic.phoneRaw}`}>
              <Phone className="size-4" aria-hidden /> {clinic.phone}
            </a>
          </Button>
        </aside>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-foreground">Specialists in {department.name}</h2>
        {docs.length === 0 ? (
          <p className="mt-4 rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground">
            Consultants for this department are available on request — please call {clinic.phone}.
          </p>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {docs.map((doc) => (
              <DoctorCard key={doc.slug} doctor={doc} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
