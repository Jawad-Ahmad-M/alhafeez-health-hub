import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Car,
  Clock,
  LayoutGrid,
  Phone,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { DoctorCard } from "@/components/site/DoctorCard";
import { GlassSpotlight } from "@/components/site/GlassSpotlight";
import { ReviewMarquee } from "@/components/site/ReviewMarquee";
import logoImg from "@/assets/al-hafeez-logo.png";
import {
  clinic,
  departmentCategories,
  departmentsInCategory,
  doctors,
  reviews,
  reviewSummary,
} from "@/data/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al-Hafeez Specialist Medical Center — 27+ Specialists in Daska" },
      {
        name: "description",
        content:
          "Multi-specialty hospital in Daska, Sialkot. 27+ consultants across 21 departments, advanced diagnostics, open 8 AM–11 PM daily. Book on +92-336-111-2668.",
      },
      { property: "og:title", content: "Al-Hafeez Specialist Medical Center — Daska, Sialkot" },
      {
        property: "og:description",
        content:
          "Expert care in Cardiology, Nephrology, Gynaecology and more. 27+ specialist consultants under one roof in Daska.",
      },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { icon: Users, value: "27+", label: "Specialist Consultants" },
  { icon: LayoutGrid, value: "21", label: "Departments" },
  { icon: Clock, value: "8 AM – 11 PM", label: "Open Daily" },
  { icon: Car, value: "Free", label: "Parking & Wheelchair Access" },
];

function HomePage() {
  const featured = doctors.filter((d) => d.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero-liquid relative text-primary-foreground">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 hidden size-72 rounded-full bg-white/10 blur-3xl md:block"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 hidden size-80 rounded-full bg-white/10 blur-3xl [animation-delay:-3s] md:block"
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-20 pt-12 sm:pb-24 sm:pt-16 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <img
              src={logoImg}
              alt="Al-Hafeez Specialist Medical Center logo"
              className="mb-5 h-16 w-auto drop-shadow-[0_12px_28px_oklch(0_0_0/0.45)] sm:mb-7 sm:h-22 md:h-26"
              width={380}
              height={152}
            />
            <span className="glass-dark glass-sheen inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] sm:text-[0.7rem] sm:tracking-[0.18em]">
              <Star className="size-3.5" aria-hidden /> Multi-specialty hospital · Daska
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-[1.12] sm:text-5xl lg:text-6xl">
              Your Health, Our Priority – 27+ Specialists Under One Roof
            </h1>
            <p className="mt-4 max-w-xl text-base opacity-90 sm:text-lg">
              Expert care for Cardiology, Gynaecology, Nephrology &amp; more in Daska.
            </p>
            <p className="mt-2.5 text-xs opacity-75 sm:text-sm">{clinic.nameUrdu}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="h-12 w-full bg-primary-foreground text-primary shadow-card hover:bg-primary-foreground/90 sm:w-auto">
                <Link to="/book">Book an Appointment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
              >
                <a href={`tel:${clinic.phoneRaw}`}>
                  <Phone className="size-4" aria-hidden /> Call {clinic.phone}
                </a>
              </Button>
            </div>

            <p className="mt-5 text-xs opacity-80 sm:text-sm">{clinic.address}</p>
          </div>

          <Reveal className="rounded-3xl border border-white/25 bg-black/35 p-5 text-white shadow-xl backdrop-blur-sm sm:p-6 dark:bg-black/45 dark:border-white/15">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-300 sm:text-sm">Today at a glance</h2>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-emerald-300">
                  <Clock className="size-4.5" aria-hidden />
                </span>
                <div>
                  <strong className="block font-bold text-white">Open now until 11:00 PM</strong>
                  <span className="text-xs text-white/80 sm:text-sm">{clinic.hours}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-emerald-300">
                  <Stethoscope className="size-4.5" aria-hidden />
                </span>
                <div>
                  <strong className="block font-bold text-white">Walk-ins welcome</strong>
                  <span className="text-xs text-white/80 sm:text-sm">Booking recommended to avoid waiting</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-emerald-300">
                  <Users className="size-4.5" aria-hidden />
                </span>
                <div>
                  <strong className="block font-bold text-white">Consultations from PKR 1,500</strong>
                  <span className="text-xs text-white/80 sm:text-sm">English &amp; Urdu speaking staff</span>
                </div>
              </li>
            </ul>
            <Button asChild className="mt-5 h-11.5 w-full bg-white font-bold text-primary shadow-md transition-colors hover:bg-white/90">
              <Link to="/doctors">
                Check doctor availability <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="relative -mt-10 px-3.5 sm:px-4">
        <div className="glass-panel mx-auto grid max-w-7xl grid-cols-2 gap-3.5 rounded-2xl p-4 sm:gap-6 sm:rounded-3xl sm:px-5 sm:py-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="group flex items-center gap-2.5 sm:gap-3">
              <span className="glass flex size-10 shrink-0 items-center justify-center rounded-xl text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6 sm:size-11">
                <s.icon className="size-4.5 sm:size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <strong className="block truncate text-base font-bold leading-tight text-foreground sm:text-lg">{s.value}</strong>
                <span className="block truncate text-[0.7rem] text-muted-foreground sm:text-xs">{s.label}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="perf-section mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Departments</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">Medical Specialties</h2>
          <p className="mt-2.5 text-sm text-muted-foreground sm:text-base">
            21 departments supported by modern diagnostics and 27+ specialist consultants.
          </p>
        </div>

        <div className="card-grid mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {departmentCategories.map((category, i) => {
            const categoryDepartments = departmentsInCategory(category);
            const firstSlug = categoryDepartments[0]?.slug;
            return (
              <Reveal key={category.slug} delay={i * 70}>
                <GlassSpotlight className="glass glass-lift glass-sheen glass-spotlight dept-card group flex h-full flex-col rounded-3xl p-4 sm:p-5">
                  <h3 className="dept-icon flex items-center gap-2 border-l-4 border-primary pl-3 text-base font-bold text-primary">
                    {category.name}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-0">
                    {categoryDepartments.map((department) => (
                      <li key={department.slug} className="border-b border-dashed border-border/80 last:border-0 dark:border-white/10">
                        <Link
                          to="/services/$slug"
                          params={{ slug: department.slug }}
                          className="dept-link flex items-center gap-2 py-2 text-sm text-foreground transition-colors hover:text-primary"
                        >
                          <span className="text-primary">•</span>
                          {department.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {firstSlug ? (
                    <Link
                      to="/services/$slug"
                      params={{ slug: firstSlug }}
                      className="dept-cta mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      View departments <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  ) : (
                    <span className="dept-cta mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      View departments <ArrowRight className="size-4" aria-hidden />
                    </span>
                  )}
                </GlassSpotlight>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Featured doctors */}
      <section className="perf-section py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Our team</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">Meet Our Specialists</h2>
              <p className="mt-2.5 text-sm text-muted-foreground sm:text-base">Senior consultants with FCPS and FRCS qualifications.</p>
            </div>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link to="/doctors">View all 26 doctors</Link>
            </Button>
          </div>

          <div className="card-grid mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {featured.map((doc, i) => (
              <Reveal key={doc.slug} delay={i * 80}>
                <DoctorCard doctor={doc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="perf-section py-12 sm:py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center">
          <p className="section-eyebrow">Patient Reviews</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Rated {reviewSummary.rating} / 5 by our patients
          </h2>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-primary" aria-label={`${reviewSummary.rating} out of 5 stars`}>
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((n) => (
                <Star key={n} className="size-4.5 fill-current" aria-hidden />
              ))}
            </div>
            <span className="ml-1 text-xs font-semibold text-muted-foreground sm:text-sm">
              {reviewSummary.rating} / 5 · {reviewSummary.satisfaction} patient satisfaction · avg wait{" "}
              {reviewSummary.avgWait}
            </span>
          </div>
        </div>

        <ReviewMarquee reviews={reviews} />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-4">
        <div className="brand-gradient glass-sheen relative overflow-hidden rounded-[2rem] border border-white/20 px-5 py-10 text-center text-primary-foreground shadow-lift sm:px-8 sm:py-12 md:px-12">
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Ready to see a specialist?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm opacity-90 sm:text-base">
            Book online in under a minute, or call us directly — we are open every day from 8:00 AM to 11:00 PM.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="h-12 w-full bg-primary-foreground text-primary shadow-card hover:bg-primary-foreground/90 sm:w-auto">
              <Link to="/book">Book an Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
            >
              <a href={`tel:${clinic.phoneRaw}`}>Call {clinic.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
