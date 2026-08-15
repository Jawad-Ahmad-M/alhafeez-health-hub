import { createFileRoute } from "@tanstack/react-router";
import { Car, Clock, Languages, Accessibility, Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/site/booking";
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
  const booking = useBooking();

  return (
    <>
      <section className="brand-gradient text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Patient Resources</h1>
          <p className="mt-3 max-w-2xl opacity-90">
            Practical information to help you prepare for your visit to our centre in Daska.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <f.icon className="size-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-sm font-bold text-foreground">{f.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
          <h2 className="text-2xl font-bold text-foreground">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-accent/60 p-6">
          <p className="text-sm font-medium text-foreground">Still have a question? Our reception is happy to help.</p>
          <div className="flex gap-3">
            <Button onClick={() => booking.open()}>Book Appointment</Button>
            <Button asChild variant="outline">
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
