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
      <section className="brand-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">Contact &amp; Location</h1>
          <p className="mt-3 max-w-2xl opacity-90">
            We are open {clinic.hours}. Call, message on WhatsApp, or send us a note below.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 lg:grid-cols-[1.3fr_1fr]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="glass rounded-3xl p-6 md:p-8"
        >
          <h2 className="text-xl font-bold text-foreground">Send us a message</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="c-name">Name</Label>
              <Input id="c-name" className="mt-1" placeholder="Your full name" {...register("name")} />
              {errors.name && <p className={err}>{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="c-phone">Phone</Label>
              <Input id="c-phone" className="mt-1" inputMode="tel" placeholder="03XX-XXXXXXX" {...register("phone")} />
              {errors.phone && <p className={err}>{errors.phone.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="c-email">Email</Label>
              <Input id="c-email" className="mt-1" type="email" placeholder="you@example.com" {...register("email")} />
              {errors.email && <p className={err}>{errors.email.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="c-message">Message</Label>
              <Textarea id="c-message" rows={5} className="mt-1" placeholder="How can we help?" {...register("message")} />
              {errors.message && <p className={err}>{errors.message.message}</p>}
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
            Send Message
          </Button>
        </form>

        <aside className="space-y-5">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-lg font-bold text-foreground">Visit us</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span className="text-muted-foreground">{clinic.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <a href={`tel:${clinic.phoneRaw}`} className="font-semibold text-foreground hover:underline">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <a
                  href={clinic.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-foreground hover:underline"
                >
                  WhatsApp {clinic.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span className="text-muted-foreground">{clinic.hours}</span>
              </li>
            </ul>
          </div>

          <div className="glass overflow-hidden rounded-3xl">
            <iframe
              title="Al-Hafeez Specialist Medical Center location on Google Maps"
              src={clinic.mapsEmbed}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </>
  );
}
