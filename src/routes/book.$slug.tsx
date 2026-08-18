import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowLeft, CalendarCheck, Clock, MapPin, Phone, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  availableDates,
  clinic,
  doctorAvailability,
  doctors,
  formatBlockDays,
  slotsForDate,
} from "@/data/clinic";

export const Route = createFileRoute("/book/$slug")({
  loader: ({ params }) => {
    const doctor = doctors.find((d) => d.slug === params.slug);
    if (!doctor) throw notFound();
    return { doctor };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Booking unavailable — Al-Hafeez Medical Center" }, { name: "robots", content: "noindex" }],
      };
    }
    const { doctor } = loaderData;
    const title = `Book ${doctor.name} — Al-Hafeez Medical Center Daska`;
    const description = `Reserve an appointment with ${doctor.name}, ${doctor.specialty}, at Al-Hafeez Specialist Medical Center, Daska. Consultation fee PKR ${doctor.fee}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BookDoctorPage,
  notFoundComponent: BookNotFound,
});

function BookNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-foreground">Doctor not found</h1>
      <p className="mt-3 text-muted-foreground">Choose a specialist to start your booking.</p>
      <Button asChild className="mt-6">
        <Link to="/doctors">Browse doctors</Link>
      </Button>
    </div>
  );
}

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Digits only"),
  age: z.string().optional(),
  notes: z.string().max(500).optional(),
});

type BookingValues = z.infer<typeof schema>;

function BookDoctorPage() {
  const { doctor } = Route.useLoaderData();
  const navigate = useNavigate();

  const dates = useMemo(() => availableDates(doctor, 30).slice(0, 12), [doctor]);
  const blocks = doctorAvailability(doctor);

  const [selectedDate, setSelectedDate] = useState(dates[0]?.iso ?? "");
  const [selectedTime, setSelectedTime] = useState("");
  const [slotError, setSlotError] = useState("");

  const slots = useMemo(() => (selectedDate ? slotsForDate(doctor, selectedDate) : []), [doctor, selectedDate]);
  const activeBlock = dates.find((d) => d.iso === selectedDate)?.block;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", age: "", notes: "" },
  });

  const onSubmit = (data: BookingValues) => {
    if (!selectedDate || !selectedTime) {
      setSlotError("Please select a date and a time slot.");
      return;
    }
    setSlotError("");
    console.log("Appointment request:", {
      ...data,
      doctor: doctor.name,
      specialty: doctor.specialty,
      date: selectedDate,
      time: selectedTime,
      fee: doctor.fee,
      submittedAt: new Date().toISOString(),
    });
    toast.success("Appointment request received", {
      description: `${doctor.name} · ${formatDateLabel(selectedDate)} at ${selectedTime}. We will call ${data.phone} to confirm. (Demo — no data is stored.)`,
    });
    void navigate({ to: "/doctors/$slug", params: { slug: doctor.slug } });
  };

  return (
    <>
      <section className="brand-gradient text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-14">
          <Link
            to="/doctors/$slug"
            params={{ slug: doctor.slug }}
            className="inline-flex items-center gap-2 text-sm opacity-85 hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden /> Back to profile
          </Link>
          <h1 className="mt-5 text-3xl font-bold sm:text-4xl">Book an Appointment</h1>
          <p className="mt-2 text-lg opacity-95">
            {doctor.name} · {doctor.specialty}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-12 lg:grid-cols-[1.5fr_1fr]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="glass rounded-3xl p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <CalendarCheck className="size-5 text-primary" aria-hidden /> 1. Choose a date
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Only the days {doctor.name} holds clinic are shown.
            </p>
            {dates.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">
                No online slots published — please call {clinic.phone}.
              </p>
            ) : (
              <div className="mt-4 flex flex-wrap gap-2">
                {dates.map((d, i) => {
                  const active = d.iso === selectedDate;
                  return (
                    <button
                      key={d.iso}
                      type="button"
                      onClick={() => {
                        setSelectedDate(d.iso);
                        setSelectedTime("");
                      }}
                      className={
                        active
                          ? "rounded-xl border border-primary bg-primary px-3.5 py-2.5 text-left text-sm font-semibold text-primary-foreground"
                          : "rounded-xl border border-border bg-background px-3.5 py-2.5 text-left text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                      }
                    >
                      <span className="block text-xs uppercase tracking-wide opacity-80">
                        {i === 0 ? "Today" : d.date.toLocaleDateString("en-GB", { weekday: "short" })}
                      </span>
                      {d.date.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="glass rounded-3xl p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <Clock className="size-5 text-primary" aria-hidden /> 2. Choose a time
            </h2>
            {activeBlock ? (
              <p className="mt-1 text-sm text-muted-foreground">
                Clinic hours for this day: {activeBlock.start} – {activeBlock.end}
              </p>
            ) : (
              <p className="mt-1 text-sm text-muted-foreground">Select a date first.</p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {slots.map((t) => {
                const active = t === selectedTime;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setSelectedTime(t);
                      setSlotError("");
                    }}
                    className={
                      active
                        ? "rounded-full border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                        : "rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                    }
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h2 className="text-lg font-bold text-foreground">3. Your details</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="bk-name">Full name</Label>
                <Input id="bk-name" className="mt-1" placeholder="e.g. Ahmed Ali" {...register("name")} />
                {errors.name && <p className="mt-1 text-xs font-medium text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="bk-phone">Phone number</Label>
                <Input
                  id="bk-phone"
                  className="mt-1"
                  inputMode="tel"
                  placeholder="03XX-XXXXXXX"
                  {...register("phone")}
                />
                {errors.phone && <p className="mt-1 text-xs font-medium text-destructive">{errors.phone.message}</p>}
              </div>
              <div>
                <Label htmlFor="bk-age">Age (optional)</Label>
                <Input id="bk-age" className="mt-1" inputMode="numeric" placeholder="e.g. 42" {...register("age")} />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="bk-notes">Reason for visit (optional)</Label>
              <Textarea
                id="bk-notes"
                className="mt-1"
                rows={3}
                placeholder="Briefly describe your symptoms or reason for the visit"
                {...register("notes")}
              />
            </div>

            {slotError && <p className="mt-4 text-sm font-medium text-destructive">{slotError}</p>}

            <Button type="submit" size="lg" className="mt-5 w-full">
              Confirm Appointment Request
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Demo booking — no data is stored. Our reception confirms every request by phone.
            </p>
          </div>
        </form>

        <aside className="h-fit space-y-4 lg:sticky lg:top-32">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-base font-bold text-foreground">Appointment summary</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Doctor</dt>
                <dd className="font-semibold text-foreground">{doctor.name}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Date</dt>
                <dd className="font-semibold text-foreground">
                  {selectedDate ? formatDateLabel(selectedDate) : "Not selected"}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Time</dt>
                <dd className="font-semibold text-foreground">{selectedTime || "Not selected"}</dd>
              </div>
              <div className="flex items-center gap-2 border-t border-border pt-3">
                <Wallet className="size-4 text-primary" aria-hidden />
                <span className="font-semibold text-foreground">PKR {doctor.fee.toLocaleString()}</span>
                <span className="text-muted-foreground">consultation fee</span>
              </div>
            </dl>
          </div>

          <div className="glass rounded-3xl p-6">
            <h2 className="text-base font-bold text-foreground">Clinic schedule</h2>
            <ul className="mt-3 space-y-3 text-sm">
              {blocks.map((b) => (
                <li key={`${b.start}-${b.days.join()}`}>
                  <p className="font-semibold text-foreground">{formatBlockDays(b)}</p>
                  <p className="text-muted-foreground">
                    {b.start} – {b.end}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              {clinic.address}
            </p>
            <Button asChild variant="outline" className="mt-4 w-full">
              <a href={`tel:${clinic.phoneRaw}`}>
                <Phone className="size-4" aria-hidden /> {clinic.phone}
              </a>
            </Button>
            <Button asChild variant="outline" className="mt-2 w-full">
              <a href={clinic.whatsappUrl} target="_blank" rel="noreferrer">
                Book via WhatsApp
              </a>
            </Button>
          </div>
        </aside>
      </section>
    </>
  );
}

function formatDateLabel(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(y, m - 1, d).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}
