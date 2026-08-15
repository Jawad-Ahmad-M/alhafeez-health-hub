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
    specialty: "Consultant Nephrologist & Kidney Transplant",
    qualifications: "MBBS, FCPS (Nephrology)",
    schedule: "Mon, Wed, Fri (5:00 PM - 8:00 PM)",
    fee: 2000,
    departments: ["nephrology"],
    featured: true,
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
  const today = map[day];
  const part = schedule.split("(")[0];
  if (part.includes("-")) {
    const [start, end] = part.trim().split("-");
    const si = map.indexOf(start.trim());
    const ei = map.indexOf(end.trim());
    if (si >= 0 && ei >= 0) return day >= si && day <= ei;
  }
  return part.includes(today);
}
