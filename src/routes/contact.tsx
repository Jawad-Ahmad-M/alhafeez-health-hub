import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { clinic } from "@/data/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Al-Hafeez Medical Center Daska" },
      {
        name: "description",
        content:
          "Visit Al-Hafeez Specialist Medical Center opposite TCS Office, Circular Road, Daska. Call +92-336-111-2668 or message us on WhatsApp.",
      },
      { property: "og:title", content: "Contact Al-Hafeez Specialist Medical Center" },
      {
        property: "og:description",
        content: "Address, phone, WhatsApp and directions for our Daska, Sialkot centre.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Please add a few more details"),
});

type ContactValues = z.infer<typeof schema>;

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: ContactValues) => {
    console.log("Contact request:", data);
    toast.success("Message sent", { description: "Our team will get back to you shortly. (Demo — no data is stored.)" });
    reset();
  };

  const err = "mt-1 text-xs font-medium text-destructive";

  return (
    <>
      <section className="hero-liquid text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Contact &amp; Location</h1>
          <p className="mt-2.5 max-w-2xl text-sm opacity-90 sm:text-base">
            We are open {clinic.hours}. Call, message on WhatsApp, or send us a note below.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-3.5 py-8 sm:px-4 sm:py-12 lg:grid-cols-[1.3fr_1fr]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="glass glass-sheen rounded-2xl p-5 sm:rounded-3xl sm:p-6 md:p-8"
        >
          <h2 className="text-lg font-bold text-foreground sm:text-xl">Send us a message</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="c-name" className="text-sm font-semibold">Name</Label>
              <Input id="c-name" className="mt-1 text-base md:text-sm" placeholder="Your full name" {...register("name")} />
              {errors.name && <p className={err}>{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="c-phone" className="text-sm font-semibold">Phone</Label>
              <Input id="c-phone" className="mt-1 text-base md:text-sm" inputMode="tel" placeholder="03XX-XXXXXXX" {...register("phone")} />
              {errors.phone && <p className={err}>{errors.phone.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="c-email" className="text-sm font-semibold">Email</Label>
              <Input id="c-email" className="mt-1 text-base md:text-sm" type="email" placeholder="you@example.com" {...register("email")} />
              {errors.email && <p className={err}>{errors.email.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="c-message" className="text-sm font-semibold">Message</Label>
              <Textarea id="c-message" rows={4} className="mt-1 text-base md:text-sm" placeholder="How can we help?" {...register("message")} />
              {errors.message && <p className={err}>{errors.message.message}</p>}
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-6 h-12 w-full text-base font-bold shadow-card sm:w-auto">
            Send Message
          </Button>
        </form>

        <aside className="space-y-5">
          <div className="glass glass-sheen rounded-2xl p-5 sm:rounded-3xl sm:p-6">
            <h2 className="text-base font-bold text-foreground sm:text-lg">Visit us</h2>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4.5 shrink-0 text-primary sm:size-5" aria-hidden />
                <span className="text-xs text-muted-foreground sm:text-sm">{clinic.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4.5 shrink-0 text-primary sm:size-5" aria-hidden />
                <a href={`tel:${clinic.phoneRaw}`} className="text-xs font-semibold text-foreground hover:underline sm:text-sm">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 size-4.5 shrink-0 text-primary sm:size-5" aria-hidden />
                <a
                  href={clinic.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-foreground hover:underline sm:text-sm"
                >
                  WhatsApp {clinic.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4.5 shrink-0 text-primary sm:size-5" aria-hidden />
                <span className="text-xs text-muted-foreground sm:text-sm">{clinic.hours}</span>
              </li>
            </ul>
          </div>

          <div className="glass glass-sheen overflow-hidden rounded-2xl sm:rounded-3xl">
            <iframe
              title="Al-Hafeez Specialist Medical Center location on Google Maps"
              src={clinic.mapsEmbed}
              className="h-64 w-full border-0 sm:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </>
  );
}
