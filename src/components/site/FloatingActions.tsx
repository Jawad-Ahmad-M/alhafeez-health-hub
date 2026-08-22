import { Link } from "@tanstack/react-router";
import { Calendar, MessageCircle, Phone } from "lucide-react";

import { clinic } from "@/data/clinic";

export function DemoBadge() {
  return (
    <div className="pointer-events-none fixed left-3 top-3 z-50">
      <span className="glass glass-sheen rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary shadow-sm">
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
      className="glow-ring float-slow fixed bottom-6 right-6 z-40 hidden size-13 items-center justify-center rounded-full border border-white/40 bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform duration-300 hover:scale-110 md:inline-flex md:backdrop-blur-md"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-white/20 bg-background/92 p-1.5 shadow-[0_-8px_32px_oklch(0_0_0/0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-card/90">
        <a
          href={`tel:${clinic.phoneRaw}`}
          aria-label="Call clinic"
          className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-secondary-foreground transition-transform active:scale-95"
        >
          <Phone className="size-4.5" aria-hidden />
        </a>
        <a
          href={clinic.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-whatsapp text-whatsapp-foreground transition-transform active:scale-95"
        >
          <MessageCircle className="size-5" aria-hidden />
        </a>
        <Link
          to="/book"
          className="brand-gradient glass-sheen flex h-11 flex-1 items-center justify-center gap-2 rounded-xl px-4 text-sm font-bold text-primary-foreground shadow-card transition-transform active:scale-98"
        >
          <Calendar className="size-4" aria-hidden />
          <span>Book Appointment</span>
        </Link>
      </div>
    </div>
  );
}
