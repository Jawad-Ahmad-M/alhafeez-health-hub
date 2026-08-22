import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Clock, Languages, Accessibility, Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { clinic, faqs } from "@/data/clinic";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Patient Resources & FAQs — Al-Hafeez Medical Center Daska" },
      {
        name: "description",
        content:
          "Working hours, walk-in policy, booking steps, parking and wheelchair access at Al-Hafeez Specialist Medical Center, Daska.",
      },
      { property: "og:title", content: "Patient Resources & FAQs — Al-Hafeez Daska" },
      {
        property: "og:description",
        content: "Everything you need to know before your visit to Al-Hafeez Specialist Medical Center.",
      },
    ],
  }),
  component: ResourcesPage,
});

const FACILITIES = [
  { icon: Clock, title: "Open every day", text: clinic.hours },
  { icon: Car, title: "Free parking", text: "On-site parking at no cost for patients and visitors." },
  { icon: Accessibility, title: "Wheelchair accessible", text: "Ramp access and assistance available at reception." },
  { icon: Languages, title: "English & Urdu", text: "Consultations and guidance in both languages." },
];

function ResourcesPage() {

  return (
    <>
      <section className="hero-liquid text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Patient Resources</h1>
          <p className="mt-2.5 max-w-2xl text-sm opacity-90 sm:text-base">
            Practical information to help you prepare for your visit to our centre in Daska.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-3.5 py-8 sm:px-4 sm:py-12">
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
          {FACILITIES.map((f) => (
            <div key={f.title} className="glass glass-lift glass-sheen glass-spotlight rounded-2xl p-4 sm:rounded-3xl sm:p-5">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary sm:size-11">
                <f.icon className="size-4.5 sm:size-5" aria-hidden />
              </span>
              <h2 className="mt-3 text-xs font-bold text-foreground sm:mt-4 sm:text-sm">{f.title}</h2>
              <p className="mt-1 text-[0.75rem] text-muted-foreground sm:text-sm">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 glass glass-sheen rounded-2xl p-5 sm:mt-12 sm:rounded-3xl sm:p-6 md:p-8">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-border/80 dark:border-white/10">
                <AccordionTrigger className="text-left text-sm font-semibold sm:text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 glass-panel rounded-2xl p-5 sm:mt-8 sm:flex-row sm:items-center sm:rounded-3xl sm:p-6">
          <p className="text-sm font-medium text-foreground">Still have a question? Our reception is happy to help.</p>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:gap-3">
            <Button asChild className="h-11 font-bold shadow-card sm:h-10"><Link to="/book">Book Appointment</Link></Button>
            <Button asChild variant="outline" className="h-11 font-semibold sm:h-10">
              <a href={`tel:${clinic.phoneRaw}`}>
                <Phone className="size-4" aria-hidden /> {clinic.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
