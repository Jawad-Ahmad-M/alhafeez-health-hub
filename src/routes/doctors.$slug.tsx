import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, GraduationCap, MapPin, Phone, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/site/booking";
import { clinic, departments, doctors, isAvailableToday } from "@/data/clinic";

export const Route = createFileRoute("/doctors/$slug")({
  loader: ({ params }) => {
    const doctor = doctors.find((d) => d.slug === params.slug);
    if (!doctor) throw notFound();
    return { doctor };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Doctor not found — Al-Hafeez Medical Center" }, { name: "robots", content: "noindex" }],
      };
    }
    const { doctor } = loaderData;
    const title = `${doctor.name} — ${doctor.specialty} | Al-Hafeez Daska`;
    const description = `${doctor.name} (${doctor.qualifications}) — ${doctor.specialty} at Al-Hafeez Specialist Medical Center, Daska. Available ${doctor.schedule}. Fee PKR ${doctor.fee}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: DoctorProfile,
  notFoundComponent: DoctorNotFound,
});

function DoctorNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-foreground">Doctor not found</h1>
      <p className="mt-3 text-muted-foreground">This profile may have moved. Browse our full specialist team.</p>
      <Button asChild className="mt-6">
        <Link to="/doctors">View all doctors</Link>
      </Button>
    </div>
  );
}

function DoctorProfile() {
  const { doctor } = Route.useLoaderData();
  const booking = useBooking();
  const available = isAvailableToday(doctor.schedule);
  const depts = departments.filter((d) => doctor.departments.includes(d.slug));

  return (
    <>
      <section className="brand-gradient text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <Link to="/doctors" className="inline-flex items-center gap-2 text-sm opacity-85 hover:underline">
            <ArrowLeft className="size-4" aria-hidden /> All doctors
          </Link>
          <h1 className="mt-5 text-3xl font-bold sm:text-4xl">{doctor.name}</h1>
          <p className="mt-2 text-lg opacity-95">{doctor.specialty}</p>
          <span
            className={
              available
                ? "mt-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold"
                : "mt-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold opacity-85"
            }
          >
            <span className="size-1.5 rounded-full bg-primary-foreground" />
            {available ? "Available today" : "Not available today"}
          </span>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-lg font-bold text-foreground">Profile</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex gap-3">
                <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <dt className="font-semibold text-foreground">Qualifications</dt>
                  <dd className="text-muted-foreground">{doctor.qualifications}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <CalendarDays className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <dt className="font-semibold text-foreground">Schedule</dt>
                  <dd className="text-muted-foreground">{doctor.schedule}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Wallet className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <dt className="font-semibold text-foreground">Consultation fee</dt>
                  <dd className="text-muted-foreground">PKR {doctor.fee.toLocaleString()}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <dt className="font-semibold text-foreground">Location</dt>
                  <dd className="text-muted-foreground">{clinic.address}</dd>
                </div>
              </div>
            </dl>
          </div>

          {depts.length > 0 && (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg font-bold text-foreground">Departments</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {depts.map((d) => (
                  <Link
                    key={d.slug}
                    to="/services/$slug"
                    params={{ slug: d.slug }}
                    className="rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-32">
          <h2 className="text-lg font-bold text-foreground">Book a consultation</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Reserve your slot online, or call the reception for the earliest availability.
          </p>
          <Button
            size="lg"
            className="mt-5 w-full"
            onClick={() => booking.open({ doctorSlug: doctor.slug })}
          >
            Book Appointment with {doctor.name.replace(/^(Dr\.|Ms\.)\s*/, "")}
          </Button>
          <Button asChild variant="outline" size="lg" className="mt-3 w-full">
            <a href={`tel:${clinic.phoneRaw}`}>
              <Phone className="size-4" aria-hidden /> {clinic.phone}
            </a>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">{clinic.hours}</p>
        </aside>
      </section>
    </>
  );
}
