import { MessageCircle, Phone } from "lucide-react";

import { clinic } from "@/data/clinic";

export function DemoBadge() {
  return (
    <div className="pointer-events-none fixed left-3 top-3 z-50">
      <span className="rounded-full border border-primary/30 bg-background/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary shadow-card backdrop-blur">
        Demo Version
      </span>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={clinic.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform hover:scale-105 md:bottom-6"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a
        href={`tel:${clinic.phoneRaw}`}
        className="flex items-center justify-center gap-2 bg-primary py-4 text-sm font-semibold text-primary-foreground"
      >
        <Phone className="size-4" aria-hidden /> Call Now
      </a>
      <a
        href={clinic.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 bg-whatsapp py-4 text-sm font-semibold text-whatsapp-foreground"
      >
        <MessageCircle className="size-4" aria-hidden /> WhatsApp
      </a>
    </div>
  );
}
