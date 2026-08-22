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
import {
  clinic,
  departmentCategories,
  departmentsInCategory,
  doctors,
  reviews,
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
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-24 pt-16 md:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <img
              src={logoAsset.url}
              alt="Al-Hafeez Specialist Medical Center logo"
              className="mb-6 h-16 w-auto drop-shadow-[0_8px_24px_oklch(0_0_0/0.35)] sm:h-20"
              width={320}
              height={128}
            />
            <span className="glass-dark glass-sheen inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em]">
              <Star className="size-3.5" aria-hidden /> Multi-specialty hospital · Daska
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              Your Health, Our Priority – 27+ Specialists Under One Roof
            </h1>
            <p className="mt-5 max-w-xl text-base opacity-90 sm:text-lg">
              Expert care for Cardiology, Gynaecology, Nephrology &amp; more in Daska.
            </p>
            <p className="mt-3 text-sm opacity-75">{clinic.nameUrdu}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/book">Book an Appointment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={`tel:${clinic.phoneRaw}`}>
                  <Phone className="size-4" aria-hidden /> Call {clinic.phone}
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm opacity-80">{clinic.address}</p>
          </div>

          <Reveal className="glass-dark glass-lift glass-sheen glass-spotlight rounded-[1.75rem] p-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest opacity-80">Today at a glance</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0" aria-hidden />
                <span>
                  <strong className="block">Open now until 11:00 PM</strong>
                  <span className="opacity-80">{clinic.hours}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Stethoscope className="mt-0.5 size-5 shrink-0" aria-hidden />
                <span>
                  <strong className="block">Walk-ins welcome</strong>
                  <span className="opacity-80">Booking recommended to avoid waiting</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-0.5 size-5 shrink-0" aria-hidden />
                <span>
                  <strong className="block">Consultations from PKR 1,500</strong>
                  <span className="opacity-80">English &amp; Urdu speaking staff</span>
                </span>
              </li>
            </ul>
            <Button asChild variant="secondary" className="mt-6 w-full">
              <Link to="/doctors">
                Check doctor availability <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="liquid-bg relative -mt-10 px-4">
        <div className="glass-panel mx-auto grid max-w-7xl grid-cols-2 gap-6 rounded-3xl px-5 py-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="group flex items-center gap-3">
              <span className="glass flex size-11 shrink-0 items-center justify-center rounded-xl text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                <s.icon className="size-5" aria-hidden />
              </span>
              <span>
                <strong className="block text-lg font-bold leading-tight text-foreground">{s.value}</strong>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="perf-section perf-mobile-lite liquid-bg mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Departments</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Medical Specialties</h2>
          <p className="mt-3 text-muted-foreground">
            21 departments supported by modern diagnostics and 27+ specialist consultants.
          </p>
        </div>

        <div className="card-grid mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departmentCategories.map((category, i) => {
            const categoryDepartments = departmentsInCategory(category);
            const firstSlug = categoryDepartments[0]?.slug;
            return (
              <Reveal key={category.slug} delay={i * 70}>
                <GlassSpotlight className="glass glass-lift glass-sheen glass-spotlight dept-card group flex h-full flex-col rounded-3xl p-5">
                  <h3 className="dept-icon flex items-center gap-2 border-l-4 border-primary pl-3 text-base font-bold text-primary">
                    {category.name}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-0">
                    {categoryDepartments.map((department) => (
                      <li key={department.slug} className="border-b border-dashed border-border last:border-0">
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
      <section className="perf-section perf-mobile-lite liquid-bg bg-accent/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Our team</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Meet Our Specialists</h2>
              <p className="mt-3 text-muted-foreground">Senior consultants with FCPS and FRCS qualifications.</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/doctors">View all 26 doctors</Link>
            </Button>
          </div>

          <div className="card-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((doc, i) => (
              <Reveal key={doc.slug} delay={i * 80}>
                <DoctorCard doctor={doc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="perf-section perf-mobile-lite mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          <p className="section-eyebrow">Google Reviews</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Rated 4.8 / 5 by our patients</h2>
          <div className="mt-3 flex items-center gap-1 text-primary" aria-label="4.8 out of 5 stars">
            {[0, 1, 2, 3, 4].map((n) => (
              <Star key={n} className="size-5 fill-current" aria-hidden />
            ))}
            <span className="ml-2 text-sm font-semibold text-muted-foreground">4.8 / 5 · Google</span>
          </div>
        </div>

        <div className="card-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 70}>
              <GlassSpotlight as="figure" className="glass glass-lift glass-sheen glass-spotlight flex h-full flex-col rounded-3xl p-5">
                <div className="flex gap-0.5 text-primary">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Star key={n} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm text-muted-foreground">“{r.text}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-foreground">— {r.name}</figcaption>
              </GlassSpotlight>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="brand-gradient glass-sheen relative overflow-hidden rounded-[2rem] border border-white/20 px-6 py-12 text-center text-primary-foreground shadow-lift md:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to see a specialist?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Book online in under a minute, or call us directly — we are open every day from 8:00 AM to 11:00 PM.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/book">Book an Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={`tel:${clinic.phoneRaw}`}>Call {clinic.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
