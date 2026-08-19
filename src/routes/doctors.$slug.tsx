import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Activity,
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  CalendarDays,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  clinic,
  departments,
  doctorAvailability,
  doctors,
  formatBlockDays,
  isAvailableTodayDoctor,
} from "@/data/clinic";

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
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
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

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass glass-lift glass-sheen glass-spotlight rounded-3xl p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
        <Icon className="size-5 text-primary" aria-hidden />
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function DoctorProfile() {
  const { doctor } = Route.useLoaderData();
  const available = isAvailableTodayDoctor(doctor);
  const depts = departments.filter((d) => doctor.departments.includes(d.slug));
  const blocks = doctorAvailability(doctor);
  const whatsapp = `https://wa.me/${clinic.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Assalam o Alaikum, I would like to book an appointment with ${doctor.name}.`,
  )}`;

  return (
    <>
      <section className="hero-liquid text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Link to="/doctors" className="inline-flex items-center gap-2 text-sm opacity-85 hover:underline">
            <ArrowLeft className="size-4" aria-hidden /> All doctors
          </Link>
          <h1 className="mt-5 text-3xl font-bold sm:text-4xl">{doctor.name}</h1>
          <p className="mt-2 text-lg opacity-95">{doctor.specialty}</p>
          {doctor.title && <p className="mt-1 text-sm opacity-85">{doctor.title}</p>}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {doctor.experienceYears && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">
                <Star className="size-3.5" aria-hidden /> {doctor.experienceYears}+ Years Experience
              </span>
            )}
            <span
              className={
                available
                  ? "inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold"
                  : "inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold opacity-85"
              }
            >
              <span className="size-1.5 rounded-full bg-primary-foreground" />
              {available ? "Available today" : "Not available today"}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5">
          <Card icon={GraduationCap} title="Qualifications">
            {doctor.qualificationList?.length ? (
              <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {doctor.qualificationList.map((q) => (
                  <li key={q} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {q}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{doctor.qualifications}</p>
            )}
          </Card>

          {doctor.positions?.length ? (
            <Card icon={Briefcase} title="Current Positions">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {doctor.positions.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ) : null}

          {doctor.achievements?.length ? (
            <Card icon={Award} title="Achievements">
              <div className="grid gap-3 sm:grid-cols-3">
                {doctor.achievements.map((a) => (
                  <p
                    key={a}
                    className="glass-soft rounded-xl px-4 py-3 text-sm font-semibold text-accent-foreground"
                  >
                    {a}
                  </p>
                ))}
              </div>
            </Card>
          ) : null}

          {doctor.services?.length ? (
            <Card icon={Activity} title="Services Offered">
              <div className="flex flex-wrap gap-2">
                {doctor.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          ) : null}

          {doctor.locations?.length ? (
            <Card icon={MapPin} title="Clinic Locations & Timings">
              <div className="grid gap-4 sm:grid-cols-2">
                {doctor.locations.map((loc) => (
                  <div key={loc.name} className="glass-soft glass-lift rounded-xl p-4">
                    <h3 className="text-sm font-bold text-foreground">{loc.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{loc.address}</p>
                    <ul className="mt-2 space-y-1 text-xs font-medium text-primary">
                      {loc.timings.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          ) : null}

          {doctor.books?.length ? (
            <Card icon={BookOpen} title="Authored Books">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {doctor.books.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </Card>
          ) : null}

          {depts.length > 0 && (
            <Card icon={MapPin} title="Departments">
              <div className="flex flex-wrap gap-2">
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
            </Card>
          )}
        </div>

        <aside className="h-fit space-y-4 lg:sticky lg:top-32">
          <div className="glass glass-sheen rounded-3xl p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <CalendarDays className="size-5 text-primary" aria-hidden />
              Clinic Schedule &amp; Fee
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {blocks.map((b) => (
                <li key={`${b.start}-${b.days.join(",")}`} className="glass-soft rounded-xl p-3">
                  <p className="font-semibold text-foreground">{formatBlockDays(b)}</p>
                  <p className="text-muted-foreground">
                    {b.start} – {b.end}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 text-sm">
              <Wallet className="size-4 text-primary" aria-hidden />
              Consultation Fee:{" "}
              <strong className="text-foreground">Rs. {doctor.fee.toLocaleString()}</strong>
            </p>
            <p className="mt-2 flex items-start gap-2 text-xs text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              {clinic.address}
            </p>

            <Button asChild size="lg" className="mt-5 w-full">
              <Link to="/book/$slug" params={{ slug: doctor.slug }}>
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="mt-3 w-full">
              <a href={whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" aria-hidden /> Book via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="mt-3 w-full">
              <a href={`tel:${clinic.phoneRaw}`}>
                <Phone className="size-4" aria-hidden /> {clinic.phone}
              </a>
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">{clinic.hours}</p>
          </div>
        </aside>
      </section>
    </>
  );
}
