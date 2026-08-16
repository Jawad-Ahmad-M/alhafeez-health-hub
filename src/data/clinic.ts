export const clinic = {
  name: "Al-Hafeez Specialist Medical Center",
  nameUrdu: "الحفیظ سپیشلسٹ میڈیکل سنٹر",
  tagline: "27+ Specialist Consultants | Advanced Diagnostics | 24/7 Patient Care",
  address: "Opposite TCS Office, Circular Road, Daska, District Sialkot",
  phone: "+92-336-111-2668",
  phoneRaw: "+923361112668",
  whatsapp: "923361112668",
  whatsappUrl:
    "https://wa.me/923361112668?text=Hello%21%20I%20would%20like%20to%20book%20an%20appointment%20at%20Al-Hafeez%20Specialist%20Medical%20Center",
  hours: "8:00 AM – 11:00 PM, Monday to Sunday",
  rating: "5.0",
  amenities: ["Free Parking", "Wheelchair Accessible"],
  mapsEmbed:
    "https://www.google.com/maps?q=Circular+Road+Daska+District+Sialkot&output=embed",
};

export type Department = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  long: string;
};

export const departments: Department[] = [
  {
    slug: "general-surgery",
    name: "General Surgery",
    icon: "Scissors",
    short: "Routine and advanced surgical procedures with careful post-operative follow-up.",
    long: "Our general surgery department handles hernia repair, gallbladder and appendix surgery, lumps and abscesses, and a wide range of elective and emergency procedures. Every case is planned with pre-operative assessment and monitored recovery.",
  },
  {
    slug: "ent",
    name: "ENT (Ear, Nose, Throat)",
    icon: "Ear",
    short: "Diagnosis and treatment of ear, nose, throat, sinus and voice conditions.",
    long: "The ENT clinic manages hearing loss, ear infections, tonsil and sinus disease, nasal obstruction, vertigo and voice disorders, with in-house endoscopic examination and minor procedures.",
  },
  {
    slug: "eye-ophthalmology",
    name: "Eye / Ophthalmology",
    icon: "Eye",
    short: "Complete eye examinations, vision correction and cataract management.",
    long: "Our ophthalmology service covers refraction and glasses, cataract assessment, glaucoma screening, diabetic eye checks, and treatment of infections and injuries of the eye.",
  },
  {
    slug: "dentistry",
    name: "Dentistry",
    icon: "Smile",
    short: "Preventive, restorative and cosmetic dental care for all ages.",
    long: "Dental services include scaling and polishing, fillings, root canal treatment, extractions, crowns and bridges, delivered with modern sterilisation protocols.",
  },
  {
    slug: "urology",
    name: "Urology",
    icon: "Droplets",
    short: "Care for kidney stones, prostate and urinary tract conditions.",
    long: "The urology department treats kidney and bladder stones, prostate enlargement, urinary infections, and offers kidney transplant surgical expertise alongside our nephrology team.",
  },
  {
    slug: "plastic-surgery",
    name: "Plastic Surgery",
    icon: "Sparkles",
    short: "Reconstructive and aesthetic surgery including burns and scar care.",
    long: "Our plastic surgery service provides burn management, scar revision, hand injuries, reconstruction after trauma, and selected cosmetic procedures.",
  },
  {
    slug: "neurosurgery",
    name: "Neurosurgery",
    icon: "Brain",
    short: "Surgical treatment of spine, brain and nerve disorders.",
    long: "Neurosurgical consultation covers slipped disc and back pain, spinal conditions, head injury assessment and nerve compression, with imaging-based surgical planning.",
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    icon: "Utensils",
    short: "Digestive, liver and stomach care with endoscopic evaluation.",
    long: "We manage acidity and ulcers, hepatitis and liver disease, irritable bowel syndrome, jaundice and gastrointestinal bleeding with structured diagnostic workup.",
  },
  {
    slug: "nephrology",
    name: "Nephrology",
    icon: "Activity",
    short: "Kidney disease management, dialysis guidance and transplant care.",
    long: "Our nephrology team — a core strength of the centre — treats acute and chronic kidney disease, hypertension-related kidney damage, dialysis planning and kidney transplant follow-up.",
  },
  {
    slug: "oncology",
    name: "Oncology",
    icon: "Ribbon",
    short: "Cancer diagnosis, staging support and treatment counselling.",
    long: "Oncology consultation provides early diagnosis, referral for staging investigations, treatment planning and supportive care for patients and families.",
  },
  {
    slug: "pulmonology",
    name: "Pulmonology (Chest Medicine)",
    icon: "Wind",
    short: "Asthma, COPD, TB and other chest and breathing conditions.",
    long: "The chest medicine clinic manages asthma, COPD, tuberculosis, chronic cough, pneumonia and sleep-related breathing problems with spirometry and imaging support.",
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: "HeartPulse",
    short: "Comprehensive care for heart conditions and blood pressure.",
    long: "Cardiology services cover chest pain evaluation, ECG, hypertension and cholesterol management, heart failure follow-up, and pre-operative cardiac clearance.",
  },
  {
    slug: "rheumatology",
    name: "Rheumatology",
    icon: "Bone",
    short: "Treatment for arthritis, joint pain and autoimmune disease.",
    long: "Our rheumatologists treat rheumatoid arthritis, gout, lupus, osteoarthritis and back pain, combining medication with physiotherapy support.",
  },
  {
    slug: "endocrinology",
    name: "Endocrinology",
    icon: "FlaskConical",
    short: "Diabetes, thyroid and hormonal disorder management.",
    long: "The endocrine clinic provides diabetes care and education, thyroid disease treatment, obesity and hormonal imbalance management with regular lab monitoring.",
  },
  {
    slug: "gynaecology",
    name: "Gynaecology",
    icon: "Baby",
    short: "Women's health, pregnancy care and gynaecological procedures.",
    long: "Gynaecology and obstetrics cover antenatal care, delivery planning, infertility assessment, menstrual disorders, and ultrasound-guided evaluation in a private, respectful setting.",
  },
  {
    slug: "pediatrics",
    name: "Pediatrics (Child Specialist)",
    icon: "Rabbit",
    short: "Newborn, infant and child healthcare with vaccination guidance.",
    long: "Our child specialists care for newborn problems, growth and nutrition, fever and infections, asthma in children, and immunisation schedules.",
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    icon: "Layers",
    short: "Skin, hair and nail treatment plus cosmetic dermatology.",
    long: "Dermatology services treat acne, eczema, psoriasis, fungal infections, hair fall and pigmentation, with cosmetic procedures available on consultation.",
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: "Brain",
    short: "Care for stroke, epilepsy, headache and nerve disorders.",
    long: "Neurology consultation covers stroke follow-up, epilepsy control, migraine and headache, neuropathy, tremors and memory problems.",
  },
  {
    slug: "radiology",
    name: "Ultrasound / Radiology",
    icon: "ScanLine",
    short: "Diagnostic ultrasound and imaging with same-day reporting.",
    long: "Our diagnostic suite offers abdominal, pelvic, obstetric and small-parts ultrasound, with reports issued promptly to support your consultation the same day.",
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    icon: "PersonStanding",
    short: "Rehabilitation for pain, injury and post-surgical recovery.",
    long: "Physiotherapy and rehabilitation programmes address back and neck pain, sports injuries, stroke rehabilitation, post-operative mobility and paediatric therapy.",
  },
  {
    slug: "clinical-psychology",
    name: "Clinical Psychology",
    icon: "HeartHandshake",
    short: "Confidential counselling and mental health assessment.",
    long: "Our clinical psychology service offers assessment and therapy for anxiety, depression, stress, sleep problems and family or child-related concerns, in complete confidence.",
  },
];

export type AvailabilityBlock = { days: number[]; start: string; end: string };

export type ClinicLocation = { name: string; address: string; timings: string[] };

export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  qualifications: string;
  schedule: string;
  fee: number;
  departments: string[];
  photo?: string;
  featured?: boolean;
  title?: string;
  experienceYears?: number;
  qualificationList?: string[];
  positions?: string[];
  achievements?: string[];
  services?: string[];
  books?: string[];
  locations?: ClinicLocation[];
  availability?: AvailabilityBlock[];
};


export const doctors: Doctor[] = [
  {
    slug: "dr-rana-shahid-hafeez",
    name: "Dr. Rana Shahid Hafeez",
    specialty: "Consultant Medical Specialist",
    qualifications: "MBBS, FCPS",
    schedule: "Mon-Sat (9:00 AM - 2:00 PM)",
    fee: 1500,
    departments: ["endocrinology", "cardiology"],
    featured: true,
  },
  {
    slug: "dr-rana-zahid-hafeez",
    name: "Dr. Rana Zahid Hafeez",
    specialty: "Consultant Nephrologist & Transplant Physician",
    title: "Assistant Professor of Nephrology, Sialkot Medical College",
    qualifications: "MBBS, MRCPS (Glasgow), FCPS Nephrology, FRCP (Ireland & Glasgow)",
    schedule: "Mon, Tue, Wed (6:00 PM - 9:00 PM)",
    fee: 2000,
    departments: ["nephrology"],
    featured: true,
    experienceYears: 19,
    qualificationList: [
      "MBBS (Rawalpindi Medical College)",
      "MRCPS (Glasgow)",
      "FCPS Nephrology (PAK)",
      "FRCP (Ireland)",
      "FRCP (Glasgow)",
      "MRCP (Ireland)",
      "PDHM (PAK)",
      "CHPE (PAKISTAN)",
      "SCE Nephrology / ESENEPH (UK)",
      "Glomerulonephritis Fellowship (USA)",
    ],
    positions: [
      "Assistant Professor, Sialkot Medical College",
      "Consultant Nephrologist, Sialkot Kidney Hospital",
      "Consultant Nephrology, Khizar Surgery Daska",
      "Consultant Nephrologist, Imran Idrees Teaching Hospital",
    ],
    achievements: [
      "12 Medical Articles & Books",
      "876,000+ Dialysis Sessions Managed",
      "17+ Years Transplant Experience",
    ],
    services: [
      "Hemodialysis",
      "Peritoneal Dialysis",
      "ICU Dialysis",
      "Kidney Transplant",
      "Kidney Function Tests",
    ],
    books: [
      "Clinical Medicine for MRCP PACES and FCPS",
      "Surviving Nephrology (International)",
      "Q Bank Nephrology",
      "FCPS Nephrology Past Papers & Solutions",
    ],
    locations: [
      {
        name: "Khizar Surgery Daska",
        address: "Circular Road, Sohawa Stop, Daska",
        timings: ["Mon & Tue: 6:00 – 9:00 PM", "Thu, Fri, Sat: 3:00 – 6:00 PM"],
      },
      {
        name: "Sialkot Kidney Hospital",
        address: "Al-Hamd St, Allama Iqbal Town, Sialkot",
        timings: ["Mon – Wed: 2:00 – 5:00 PM"],
      },
      {
        name: "Imran Idrees Teaching Hospital",
        address: "2-km Daska Road, Sialkot",
        timings: ["Mon – Thu: 9:00 AM – 2:00 PM", "Fri: 9:00 AM – 12:30 PM"],
      },
    ],
    availability: [
      { days: [1, 2, 3], start: "6:00 PM", end: "9:00 PM" },
      { days: [4, 6], start: "3:00 PM", end: "6:00 PM" },
      { days: [0], start: "10:00 AM", end: "2:00 PM" },
    ],
  },

  {
    slug: "dr-adil-manzoor",
    name: "Dr. Adil Manzoor",
    specialty: "Consultant Nephrologist & Kidney Transplant",
    qualifications: "MBBS, FCPS",
    schedule: "Tue, Thu, Sat (11:00 AM - 2:00 PM)",
    fee: 2000,
    departments: ["nephrology"],
  },
  {
    slug: "dr-ahmad-ammar-arshad",
    name: "Dr. Ahmad Ammar Arshad",
    specialty: "Consultant Nephrologist & Kidney Transplant",
    qualifications: "MBBS, FCPS",
    schedule: "Mon-Fri (6:00 PM - 9:00 PM)",
    fee: 2000,
    departments: ["nephrology"],
  },
  {
    slug: "dr-ali-hassan-iqbal",
    name: "Dr. Ali Hassan Iqbal",
    specialty: "Eye Specialist",
    qualifications: "MBBS, FCPS (Ophthalmology)",
    schedule: "Mon-Sat (10:00 AM - 1:00 PM)",
    fee: 1500,
    departments: ["eye-ophthalmology"],
  },
  {
    slug: "dr-ahsan-ul-malik",
    name: "Dr. Ahsan Ul Malik",
    specialty: "Consultant Urologist & Kidney Transplant Surgeon",
    qualifications: "MBBS, FRCS",
    schedule: "Tue, Thu (3:00 PM - 6:00 PM)",
    fee: 2500,
    departments: ["urology", "nephrology"],
    featured: true,
  },
  {
    slug: "dr-roha-ijaz",
    name: "Dr. Roha Ijaz",
    specialty: "Dermatologist",
    qualifications: "MBBS, FCPS (Dermatology)",
    schedule: "Mon, Wed, Fri (12:00 PM - 4:00 PM)",
    fee: 2000,
    departments: ["dermatology"],
  },
  {
    slug: "dr-farrukh-zia",
    name: "Dr. Farrukh Zia",
    specialty: "Neurologist",
    qualifications: "MBBS, FCPS (Neurology)",
    schedule: "Tue, Thu, Sat (2:00 PM - 5:00 PM)",
    fee: 2500,
    departments: ["neurology"],
  },
  {
    slug: "dr-aamir-waheed",
    name: "Dr. Aamir Waheed",
    specialty: "Pulmonologist",
    qualifications: "MBBS, FCPS (Chest Medicine)",
    schedule: "Mon, Wed, Fri (10:00 AM - 1:00 PM)",
    fee: 2000,
    departments: ["pulmonology"],
  },
  {
    slug: "dr-raja-sheraz-ullah-khan",
    name: "Dr. Raja Sheraz Ullah Khan",
    specialty: "Medical Specialist & Endocrinologist",
    qualifications: "MBBS, FCPS",
    schedule: "Mon-Fri (4:00 PM - 7:00 PM)",
    fee: 2000,
    departments: ["endocrinology"],
  },
  {
    slug: "dr-iftikhar-anwar-ghuman",
    name: "Dr. Iftikhar Anwar Ghuman",
    specialty: "Cardiologist",
    qualifications: "MBBS, FCPS (Cardiology)",
    schedule: "Mon, Wed, Fri (6:00 PM - 9:00 PM)",
    fee: 2500,
    departments: ["cardiology"],
    featured: true,
  },
  {
    slug: "dr-syeda-riffat-gilani",
    name: "Dr. Syeda Riffat Gilani",
    specialty: "Gynaecologist",
    qualifications: "MBBS, FCPS (Gynae)",
    schedule: "Mon-Sat (9:00 AM - 12:00 PM)",
    fee: 2000,
    departments: ["gynaecology"],
  },
  {
    slug: "dr-naveed-aslam",
    name: "Dr. Naveed Aslam",
    specialty: "Gastroenterologist",
    qualifications: "MBBS, FCPS (Gastro)",
    schedule: "Tue, Thu, Sat (5:00 PM - 8:00 PM)",
    fee: 2000,
    departments: ["gastroenterology"],
  },
  {
    slug: "dr-ali-raza",
    name: "Dr. Ali Raza",
    specialty: "Rheumatologist",
    qualifications: "MBBS, FCPS (Rheumatology)",
    schedule: "Mon, Wed, Fri (2:00 PM - 5:00 PM)",
    fee: 2000,
    departments: ["rheumatology"],
  },
  {
    slug: "dr-imran-siddiqui",
    name: "Dr. Imran Siddiqui",
    specialty: "Neurosurgeon",
    qualifications: "MBBS, FRCS (Neurosurgery)",
    schedule: "Mon, Thu (3:00 PM - 6:00 PM)",
    fee: 3000,
    departments: ["neurosurgery"],
  },
  {
    slug: "dr-ayman-naseib",
    name: "Dr. Ayman Naseib",
    specialty: "Cardiovascular Surgeon",
    qualifications: "MBBS, FRCS",
    schedule: "Tue, Fri (2:00 PM - 5:00 PM)",
    fee: 3000,
    departments: ["cardiology", "general-surgery"],
  },
  {
    slug: "dr-almoetan-pasha",
    name: "Dr. Almoetan Pasha",
    specialty: "Plastic Surgeon",
    qualifications: "MBBS, FCPS",
    schedule: "Mon, Wed (11:00 AM - 2:00 PM)",
    fee: 2500,
    departments: ["plastic-surgery", "general-surgery"],
  },
  {
    slug: "dr-hafiz-sikandar-raza",
    name: "Dr. Hafiz Sikandar Raza",
    specialty: "Physiotherapist",
    qualifications: "DPT, MSPT",
    schedule: "Mon-Sat (9:00 AM - 1:00 PM)",
    fee: 1500,
    departments: ["physiotherapy"],
  },
  {
    slug: "dr-syeda-ayesha-gilani",
    name: "Dr. Syeda Ayesha Gilani",
    specialty: "Physiotherapist",
    qualifications: "DPT",
    schedule: "Mon, Wed, Fri (3:00 PM - 7:00 PM)",
    fee: 1500,
    departments: ["physiotherapy"],
  },
  {
    slug: "dr-nawal-fatima",
    name: "Dr. Nawal Fatima",
    specialty: "Rehabilitation Medicine",
    qualifications: "MBBS, FCPS",
    schedule: "Tue, Thu, Sat (10:00 AM - 12:00 PM)",
    fee: 1500,
    departments: ["physiotherapy"],
  },
  {
    slug: "dr-alisha-riaz",
    name: "Dr. Alisha Riaz",
    specialty: "Physiotherapist",
    qualifications: "DPT",
    schedule: "Mon-Fri (5:00 PM - 8:00 PM)",
    fee: 1500,
    departments: ["physiotherapy"],
  },
  {
    slug: "ms-muqaddas-azam",
    name: "Ms. Muqaddas Azam",
    specialty: "Clinical Psychologist",
    qualifications: "MSc, MPhil",
    schedule: "Mon-Sat (10:00 AM - 2:00 PM)",
    fee: 1500,
    departments: ["clinical-psychology"],
  },
  {
    slug: "dr-abdul-rehman-cheema",
    name: "Dr. Abdul Rehman Cheema",
    specialty: "ENT Specialist",
    qualifications: "MBBS, FCPS (ENT)",
    schedule: "Mon-Sat (11:00 AM - 3:00 PM)",
    fee: 1500,
    departments: ["ent"],
  },
  {
    slug: "dr-sumbal-jami",
    name: "Dr. Sumbal Jami",
    specialty: "Medical Specialist",
    qualifications: "MBBS, FCPS",
    schedule: "Mon-Fri (2:00 PM - 5:00 PM)",
    fee: 2000,
    departments: ["endocrinology"],
  },
  {
    slug: "dr-mohsan-ul-malik",
    name: "Dr. Mohsan Ul Malik",
    specialty: "Medical Specialist",
    qualifications: "MBBS, FCPS",
    schedule: "Tue, Thu, Sat (6:00 PM - 9:00 PM)",
    fee: 2000,
    departments: ["endocrinology"],
  },
  {
    slug: "dr-shaheera-bajwa",
    name: "Dr. Shaheera Bajwa",
    specialty: "Nutritionist",
    qualifications: "MSc, Nutrition",
    schedule: "Mon-Sat (11:00 AM - 2:00 PM)",
    fee: 1500,
    departments: ["endocrinology", "gastroenterology"],
  },
];

export const specialties = Array.from(new Set(doctors.map((d) => d.specialty))).sort();

export const reviews = [
  {
    name: "Muhammad Tariq",
    text: "Excellent care and very professional staff at Al-Hafeez Daska.",
  },
  {
    name: "Sana Akhtar",
    text: "Modern facility and compassionate doctors. Best hospital in Daska.",
  },
  {
    name: "Bilal Ahmed",
    text: "Got an appointment with the nephrologist the same day. Very organised.",
  },
  {
    name: "Ayesha Noor",
    text: "Clean, well managed and the consultants take proper time with patients.",
  },
];

export const faqs = [
  {
    q: "What are your working hours?",
    a: "8:00 AM to 11:00 PM, 7 days a week.",
  },
  {
    q: "Do you accept walk-in patients?",
    a: "Yes, but we recommend booking to avoid waiting.",
  },
  {
    q: "How can I book an appointment?",
    a: "Call +92-336-111-2668 or use our online form.",
  },
  { q: "Is parking available?", a: "Yes, free parking." },
  { q: "Do you have wheelchair accessibility?", a: "Yes." },
];

export function doctorsForDepartment(slug: string) {
  return doctors.filter((d) => d.departments.includes(slug));
}

export function isAvailableToday(schedule: string, day = new Date().getDay()) {
  const map = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = map[day] ?? "";
  const part = schedule.split("(")[0] ?? "";
  if (part.includes("-")) {
    const [start = "", end = ""] = part.trim().split("-");
    const si = map.indexOf(start.trim());
    const ei = map.indexOf(end.trim());
    if (si >= 0 && ei >= 0) return day >= si && day <= ei;
  }
  return part.includes(today);
}


/* ── Department categories (as grouped on the live site) ────────────── */

export type DepartmentCategory = {
  slug: string;
  name: string;
  blurb: string;
  departments: string[];
};

export const departmentCategories: DepartmentCategory[] = [
  {
    slug: "general-and-surgical",
    name: "General & Surgical",
    blurb: "Operative and procedural specialties, from routine surgery to advanced reconstruction.",
    departments: [
      "general-surgery",
      "ent",
      "eye-ophthalmology",
      "dentistry",
      "urology",
      "plastic-surgery",
      "neurosurgery",
    ],
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    blurb: "Long-term medical management of the heart, chest, kidneys, gut, hormones and nerves.",
    departments: [
      "gastroenterology",
      "nephrology",
      "pulmonology",
      "cardiology",
      "endocrinology",
      "neurology",
    ],
  },
  {
    slug: "specialized-care",
    name: "Specialized Care",
    blurb: "Focused clinics for cancer care, joints, women's health, children and skin.",
    departments: ["oncology", "rheumatology", "gynaecology", "pediatrics", "dermatology"],
  },
  {
    slug: "medicine-and-diagnostics",
    name: "Medicine & Diagnostics",
    blurb: "Imaging, rehabilitation and psychological support that complete your treatment plan.",
    departments: ["radiology", "physiotherapy", "clinical-psychology"],
  },
];

export function departmentsInCategory(category: DepartmentCategory) {
  return category.departments
    .map((slug) => departments.find((d) => d.slug === slug))
    .filter((d): d is Department => Boolean(d));
}

/* ── Availability helpers ──────────────────────────────────────────── */

export const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function toMinutes(time: string) {
  const m = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return 0;
  let h = Number(m[1]) % 12;
  if ((m[3] ?? "").toUpperCase() === "PM") h += 12;
  return h * 60 + Number(m[2]);
}

export function formatMinutes(total: number) {
  const h24 = Math.floor(total / 60);
  const mm = String(total % 60).padStart(2, "0");
  const suffix = h24 >= 12 ? "PM" : "AM";
  const h = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h}:${mm} ${suffix}`;
}

/** Parses strings like "Mon-Sat (9:00 AM - 2:00 PM)" or "Mon, Wed, Fri (5:00 PM - 8:00 PM)". */
export function parseSchedule(schedule: string): AvailabilityBlock[] {
  const match = schedule.match(/^([^(]+)\(([^)]+)\)$/);
  if (!match) return [];
  const dayPart = (match[1] ?? "").trim();
  const timePart = (match[2] ?? "").trim();
  const [start, end] = timePart.split(/\s*[-–]\s*/);
  if (!start || !end) return [];

  const days: number[] = [];
  if (dayPart.includes("-")) {
    const [a = "", b = ""] = dayPart.split("-");
    const si = DAY_SHORT.indexOf(a.trim().slice(0, 3));
    const ei = DAY_SHORT.indexOf(b.trim().slice(0, 3));
    if (si >= 0 && ei >= 0) for (let i = si; i <= ei; i++) days.push(i);
  } else {
    for (const token of dayPart.split(",")) {
      const i = DAY_SHORT.indexOf(token.trim().slice(0, 3));
      if (i >= 0) days.push(i);
    }
  }
  if (days.length === 0) return [];
  return [{ days, start, end }];
}

export function doctorAvailability(doctor: Doctor): AvailabilityBlock[] {
  return doctor.availability && doctor.availability.length > 0
    ? doctor.availability
    : parseSchedule(doctor.schedule);
}

export function blockForDay(doctor: Doctor, weekday: number) {
  return doctorAvailability(doctor).find((b) => b.days.includes(weekday));
}

export function formatBlockDays(block: AvailabilityBlock) {
  return block.days
    .slice()
    .sort((a, b) => a - b)
    .map((d) => DAY_NAMES[d])
    .join(", ");
}

export function toISODate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Upcoming dates (including today) on which the doctor holds a clinic. */
export function availableDates(doctor: Doctor, horizonDays = 30) {
  const out: { iso: string; date: Date; block: AvailabilityBlock }[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < horizonDays; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const block = blockForDay(doctor, date.getDay());
    if (block) out.push({ iso: toISODate(date), date, block });
  }
  return out;
}

/** 30-minute slots strictly inside the doctor's window for that date. */
export function slotsForDate(doctor: Doctor, iso: string, stepMinutes = 30) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return [];
  const date = new Date(y, m - 1, d);
  const block = blockForDay(doctor, date.getDay());
  if (!block) return [];
  const start = toMinutes(block.start);
  const end = toMinutes(block.end);
  const slots: string[] = [];
  for (let t = start; t + stepMinutes <= end; t += stepMinutes) slots.push(formatMinutes(t));
  return slots;
}

export function isAvailableTodayDoctor(doctor: Doctor, weekday = new Date().getDay()) {
  return Boolean(blockForDay(doctor, weekday));
}
