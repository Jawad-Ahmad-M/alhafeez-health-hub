import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { clinic, departments, doctors } from "@/data/clinic";

const schema = z.object({
  specialty: z.string().min(1, "Please choose a department"),
  doctor: z.string().min(1, "Please choose a doctor"),
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please choose a time"),
  name: z.string().min(2, "Enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Digits only"),
  notes: z.string().max(500).optional(),
});

type BookingValues = z.infer<typeof schema>;

type BookingContextValue = { open: (opts?: { doctorSlug?: string; departmentSlug?: string }) => void };

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}

const TIMES = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
];

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(schema),
    defaultValues: { specialty: "", doctor: "", date: "", time: "", name: "", phone: "", notes: "" },
  });

  const specialty = watch("specialty");
  const doctorOptions = useMemo(
    () => (specialty ? doctors.filter((d) => d.departments.includes(specialty)) : doctors),
    [specialty],
  );

  const value = useMemo<BookingContextValue>(
    () => ({
      open: (opts) => {
        reset({
          specialty: opts?.departmentSlug ?? "",
          doctor: opts?.doctorSlug ?? "",
          date: "",
          time: "",
          name: "",
          phone: "",
          notes: "",
        });
        if (opts?.doctorSlug) {
          const doc = doctors.find((d) => d.slug === opts.doctorSlug);
          if (doc && !opts.departmentSlug) setValue("specialty", doc.departments[0] ?? "");
        }
        setIsOpen(true);
      },
    }),
    [reset, setValue],
  );

  const onSubmit = (data: BookingValues) => {
    const payload = {
      ...data,
      departmentName: departments.find((d) => d.slug === data.specialty)?.name,
      doctorName: doctors.find((d) => d.slug === data.doctor)?.name,
      submittedAt: new Date().toISOString(),
    };
    console.log("Appointment request:", payload);
    toast.success("Appointment request received", {
      description: `We will call you on ${data.phone} to confirm. (Demo — no data is stored.)`,
    });
    setIsOpen(false);
    reset();
  };

  const fieldError = "mt-1 text-xs font-medium text-destructive";
  const inputCls = "mt-1";

  return (
    <BookingContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <CalendarCheck className="size-5 text-primary" aria-hidden />
              Book an Appointment
            </DialogTitle>
            <DialogDescription>
              {clinic.name} · {clinic.phone}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="bk-specialty">Department</Label>
                <select
                  id="bk-specialty"
                  {...register("specialty")}
                  className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onChange={(e) => {
                    setValue("specialty", e.target.value);
                    setValue("doctor", "");
                  }}
                >
                  <option value="">Select department</option>
                  {departments.map((d) => (
                    <option key={d.slug} value={d.slug}>
                      {d.name}
                    </option>
                  ))}
                </select>
                {errors.specialty && <p className={fieldError}>{errors.specialty.message}</p>}
              </div>

              <div>
                <Label htmlFor="bk-doctor">Doctor</Label>
                <select
                  id="bk-doctor"
                  {...register("doctor")}
                  className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select doctor</option>
                  {doctorOptions.map((d) => (
                    <option key={d.slug} value={d.slug}>
                      {d.name} — {d.specialty}
                    </option>
                  ))}
                </select>
                {errors.doctor && <p className={fieldError}>{errors.doctor.message}</p>}
              </div>

              <div>
                <Label htmlFor="bk-date">Preferred date</Label>
                <Input id="bk-date" type="date" className={inputCls} {...register("date")} />
                {errors.date && <p className={fieldError}>{errors.date.message}</p>}
              </div>

              <div>
                <Label htmlFor="bk-time">Preferred time</Label>
                <select
                  id="bk-time"
                  {...register("time")}
                  className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select time</option>
                  {TIMES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.time && <p className={fieldError}>{errors.time.message}</p>}
              </div>

              <div>
                <Label htmlFor="bk-name">Full name</Label>
                <Input id="bk-name" className={inputCls} placeholder="e.g. Ahmed Ali" {...register("name")} />
                {errors.name && <p className={fieldError}>{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="bk-phone">Phone number</Label>
                <Input
                  id="bk-phone"
                  className={inputCls}
                  placeholder="03XX-XXXXXXX"
                  inputMode="tel"
                  {...register("phone")}
                />
                {errors.phone && <p className={fieldError}>{errors.phone.message}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="bk-notes">Notes (optional)</Label>
              <Textarea
                id="bk-notes"
                className={inputCls}
                rows={3}
                placeholder="Briefly describe your symptoms or reason for visit"
                {...register("notes")}
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              Request Appointment
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Or call {clinic.phone} · {clinic.hours}
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </BookingContext.Provider>
  );
}
