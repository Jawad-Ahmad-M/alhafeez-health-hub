import logoAsset from "@/assets/al-hafeez-logo.png.asset.json";
import { Link } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import { clinic, departments } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="hero-mesh relative mt-16 overflow-hidden border-t border-white/10 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="glass-dark float-slow flex h-11 items-center justify-center overflow-hidden rounded-xl px-2.5">
              <img
                src={logoAsset.url}
                alt="Al-Hafeez Specialist Medical Center logo"
                className="h-7 w-auto"
                width={160}
                height={64}
              />
            </span>
            <div className="leading-tight">
              <p className="font-bold">Al-Hafeez Specialist</p>
              <p className="text-xs opacity-80">Medical Center · Daska</p>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-85">{clinic.nameUrdu}</p>
          <p className="mt-2 text-sm opacity-80">{clinic.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider opacity-70">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{clinic.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
              <a href={`tel:${clinic.phoneRaw}`} className="hover:underline">
                {clinic.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
              <a href={clinic.whatsappUrl} target="_blank" rel="noreferrer" className="hover:underline">
                WhatsApp {clinic.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{clinic.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider opacity-70">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/services" className="hover:underline">All Departments</Link></li>
            <li><Link to="/doctors" className="hover:underline">Our Doctors</Link></li>
            <li><Link to="/resources" className="hover:underline">Patient Resources & FAQs</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact & Location</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider opacity-70">Popular Departments</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            {departments.slice(0, 7).map((d) => (
              <li key={d.slug}>
                <Link to="/services/$slug" params={{ slug: d.slug }} className="hover:underline">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs opacity-75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <p>{clinic.amenities.join(" · ")} · English & Urdu</p>
        </div>
      </div>
    </footer>
  );
}
