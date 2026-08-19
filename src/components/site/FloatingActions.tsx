import { MessageCircle, Phone } from "lucide-react";

import { clinic } from "@/data/clinic";

export function DemoBadge() {
  return (
    <div className="pointer-events-none fixed left-3 top-3 z-50">
      <span className="glass glass-sheen rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary">
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
      className="glow-ring float-slow fixed bottom-20 right-4 z-40 inline-flex size-14 items-center justify-center rounded-full border border-white/40 bg-whatsapp text-whatsapp-foreground shadow-lift backdrop-blur-md transition-transform duration-300 hover:scale-110 md:bottom-6"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/40 bg-background/70 p-2 backdrop-blur-2xl backdrop-saturate-150 md:hidden">
      <a
        href={`tel:${clinic.phoneRaw}`}
        className="glass-sheen flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform active:scale-95"
      >
        <Phone className="size-4" aria-hidden /> Call Now
      </a>
      <a
        href={clinic.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="glass-sheen flex items-center justify-center gap-2 rounded-xl bg-whatsapp py-3 text-sm font-semibold text-whatsapp-foreground shadow-card transition-transform active:scale-95"
      >
        <MessageCircle className="size-4" aria-hidden /> WhatsApp
      </a>
    </div>
  );
}
