# Al-Hafeez Health Hub

# Project: Al-Hafeez Specialist Medical Center – Complete Redesign MVP

## ⚠️ CRITICAL FIRST STEP: LIVE SITE VERIFICATION

Before generating ANY code, you MUST complete the following steps:

1. **Visit the live website**: Go to https://alhafeezmedicalcenter.com/ and inspect it thoroughly.

2. **Extract the EXACT primary red color**: Use the browser's Inspector tool to get the precise hex code of the red used in their logo, headers, and buttons. Do not guess – get the exact color from the live site.

3. **Confirm all text content**: Verify the tagline, doctor names, specialty titles, and the "Departments" list matches what is provided below. If anything is different on the live site, use the live site's version.

4. **Check for missing elements**: If the live site has any additional text, banners, or trust badges not listed here, extract and include them.

**Goal**: The redesign must be a POLISHED, MODERN upgrade – but it must stay 100% faithful to the clinic's existing brand identity, colors, and content.

---

## 1. Project Overview

Build a modern, mobile-first, fully responsive frontend for "Al-Hafeez Specialist Medical Center" (Daska, Sialkot). This is a demo to transform their current single-page brochure into a structured, lead-generating website.

**Tech Stack:**

- Framework: Next.js 14 (App Router) with TypeScript

- Styling: Tailwind CSS

- Forms: React Hook Form + Zod

- Icons: Lucide React

- Data: Static JSON files (seeded with the exact data below)

---

## 2. Complete Clinic Data (USE THESE EXACT VALUES – but cross-check with live site)

### A. Clinic Identity

- **Name:** Al-Hafeez Specialist Medical Center (الحفیظ سپیشلسٹ میڈیکل سنٹر)

- **Tagline:** 27+ Specialist Consultants | Advanced Diagnostics | 24/7 Patient Care

- **Address:** Opposite TCS Office, Circular Road, Daska, District Sialkot

- **Phone:** +92-336-111-2668

- **WhatsApp:** +92-336-111-2668 (Click-to-chat)

- **Working Hours:** 8:00 AM – 11:00 PM, Monday to Sunday

- **Amenities:** Free Parking, Wheelchair Accessibility

- **Languages:** English (Primary) & Urdu

### B. Core Services / Departments (EXACT LIST from live site)

Use these exact names for the service grid and `/services` pages:

1. General Surgery

2. ENT (Ear, Nose, Throat)

3. Eye / Ophthalmology

4. Dentistry

5. Urology

6. Plastic Surgery

7. Neurosurgery

8. Gastroenterology

9. Nephrology

10. Oncology

11. Pulmonology (Chest Medicine)

12. Cardiology

13. Rheumatology

14. Endocrinology

15. Gynaecology

16. Pediatrics (Child Specialist)

17. Dermatology

18. Neurology

19. Ultrasound / Radiology

20. Physiotherapy

21. Clinical Psychology

### C. Complete Doctors List (ALL 26+ Specialists – cross-check live site for exact schedule/fees)

| Full Name | Specialty | Qualifications | Schedule | Fee (PKR) |

| :--- | :--- | :--- | :--- | :--- |

| Dr. Rana Shahid Hafeez | Consultant Medical Specialist | MBBS, FCPS | Mon-Sat (9:00 AM - 2:00 PM) | 1500 |

| Dr. Rana Zahid Hafeez | Consultant Nephrologist & Kidney Transplant | MBBS, FCPS (Nephrology) | Mon, Wed, Fri (5:00 PM - 8:00 PM) | 2000 |

| Dr. Adil Manzoor | Consultant Nephrologist & Kidney Transplant | MBBS, FCPS | Tue, Thu, Sat (11:00 AM - 2:00 PM) | 2000 |

| Dr. Ahmad Ammar Arshad | Consultant Nephrologist & Kidney Transplant | MBBS, FCPS | Mon-Fri (6:00 PM - 9:00 PM) | 2000 |

| Dr. Ali Hassan Iqbal | Eye Specialist | MBBS, FCPS (Ophthalmology) | Mon-Sat (10:00 AM - 1:00 PM) | 1500 |

| Dr. Ahsan Ul Malik | Consultant Urologist & Kidney Transplant Surgeon | MBBS, FRCS | Tue, Thu (3:00 PM - 6:00 PM) | 2500 |

| Dr. Roha Ijaz | Dermatologist | MBBS, FCPS (Dermatology) | Mon, Wed, Fri (12:00 PM - 4:00 PM) | 2000 |

| Dr. Farrukh Zia | Neurologist | MBBS, FCPS (Neurology) | Tue, Thu, Sat (2:00 PM - 5:00 PM) | 2500 |

| Dr. Aamir Waheed | Pulmonologist | MBBS, FCPS (Chest Medicine) | Mon, Wed, Fri (10:00 AM - 1:00 PM) | 2000 |

| Dr. Raja Sheraz Ullah Khan | Medical Specialist & Endocrinologist | MBBS, FCPS | Mon-Fri (4:00 PM - 7:00 PM) | 2000 |

| Dr. Iftikhar Anwar Ghuman | Cardiologist | MBBS, FCPS (Cardiology) | Mon, Wed, Fri (6:00 PM - 9:00 PM) | 2500 |

| Dr. Syeda Riffat Gilani | Gynaecologist | MBBS, FCPS (Gynae) | Mon-Sat (9:00 AM - 12:00 PM) | 2000 |

| Dr. Naveed Aslam | Gastroenterologist | MBBS, FCPS (Gastro) | Tue, Thu, Sat (5:00 PM - 8:00 PM) | 2000 |

| Dr. Ali Raza | Rheumatologist | MBBS, FCPS (Rheumatology) | Mon, Wed, Fri (2:00 PM - 5:00 PM) | 2000 |

| Dr. Imran Siddiqui | Neurosurgeon | MBBS, FRCS (Neurosurgery) | Mon, Thu (3:00 PM - 6:00 PM) | 3000 |

| Dr. Ayman Naseib | Cardiovascular Surgeon | MBBS, FRCS | Tue, Fri (2:00 PM - 5:00 PM) | 3000 |

| Dr. Almoetan Pasha | Plastic Surgeon | MBBS, FCPS | Mon, Wed (11:00 AM - 2:00 PM) | 2500 |

| Dr. Hafiz Sikandar Raza | Physiotherapist | DPT, MSPT | Mon-Sat (9:00 AM - 1:00 PM) | 1500 |

| Dr. Syeda Ayesha Gilani | Physiotherapist | DPT | Mon, Wed, Fri (3:00 PM - 7:00 PM) | 1500 |

| Dr. Nawal Fatima | Rehabilitation Medicine | MBBS, FCPS | Tue, Thu, Sat (10:00 AM - 12:00 PM) | 1500 |

| Dr. Alisha Riaz | Physiotherapist | DPT | Mon-Fri (5:00 PM - 8:00 PM) | 1500 |

| Ms. Muqaddas Azam | Clinical Psychologist | MSc, MPhil | Mon-Sat (10:00 AM - 2:00 PM) | 1500 |

| Dr. Abdul Rehman Cheema | ENT Specialist | MBBS, FCPS (ENT) | Mon-Sat (11:00 AM - 3:00 PM) | 1500 |

| Dr. Sumbal Jami | Medical Specialist | MBBS, FCPS | Mon-Fri (2:00 PM - 5:00 PM) | 2000 |

| Dr. Mohsan Ul Malik | Medical Specialist | MBBS, FCPS | Tue, Thu, Sat (6:00 PM - 9:00 PM) | 2000 |

| Dr. Shaheera Bajwa | Nutritionist | MSc, Nutrition | Mon-Sat (11:00 AM - 2:00 PM) | 1500 |

---

## 3. Design System (USE THE RED FROM LIVE SITE)

After verifying the live site, use its EXACT primary red. I suspect it is around #E53935 or #D32F2F, but **confirm via the live site before coding**.

**Palette (to be finalized after verification):**

- **Primary Red**: [EXTRACT FROM LIVE SITE – use Inspector on logo/buttons]

- **Dark Red**: [Darken the primary red by 20% for hover states]

- **Light Red**: [Lighten the primary red by 85% for backgrounds]

- **Base**: #FFFFFF (White)

- **Text Dark**: #1A1A1A

- **Text Gray**: #4A4A4A

**Typography:**

- Headings: Inter (Bold/Semi-bold)

- Body: Inter (Regular)

---

## 4. Pages to Build (Structure)

### Page 1: Homepage (/)

- **Hero Section:** Full-width. Headline: "Your Health, Our Priority – 27+ Specialists Under One Roof". Sub-headline: "Expert care for Cardiology, Gynaecology, Nephrology & more in Daska."

- **CTAs:** Red solid button: "Book an Appointment" & Red outlined button: "Call +92-336-111-2668".

- **Trust Bar:** 4 stats (27+ Specialists, 21 Departments, 8 AM - 11 PM Daily, Free Parking).

- **Departments Grid:** Display all 21 departments as clickable cards with icons. Grid: 4 cols desktop, 2 tablet, 1 mobile.

- **Featured Doctors:** Showcase 4 doctors with photo, name, specialty, and "View Profile" button.

- **Google Reviews:** Static placeholder showing 4.8/5 stars with review snippets (e.g., "Best hospital in Daska").

- **Footer:** Address, Phone, WhatsApp, Hours, Quick Links.

### Page 2: All Doctors (/doctors)

- **Header:** "Our Specialist Team – Find the right specialist for your health needs."

- **Filtering:** Dropdown for "Specialty" + search bar for "Search by name or specialty".

- **Doctor Cards:** Grid view (3 cols desktop). Each card shows: Name, Specialty, Availability badge (Green/Red), Consultation Fee, "View Profile" button.

### Page 3: Doctor Profile (/doctors/[slug]) – Dynamic

- Uses slug (e.g., `dr-rana-shahid-hafeez`).

- **Content:** Full Name, Specialty, Qualifications, Schedule, Fee.

- **CTA:** Large Red button: "Book Appointment with Dr. [Name]".

### Page 4: All Services (/services)

- Header: "Our Medical Departments".

- Grid of all 21 services with icons and a 2-line description (write a generic medical description for each, e.g., "Comprehensive care for heart conditions" for Cardiology).

### Page 5: Individual Service Page (/services/[slug]) – Dynamic

- Detailed description of that department.

- List of specialists in that department with links to their profiles.

- CTA: "Book a Consultation".

### Page 6: Patient Resources (/resources)

- **FAQ Accordion:** 

  - Q: What are your working hours? A: 8:00 AM to 11:00 PM, 7 days a week.

  - Q: Do you accept walk-in patients? A: Yes, but we recommend booking to avoid waiting.

  - Q: How can I book an appointment? A: Call +92-336-111-2668 or use our online form.

  - Q: Is parking available? A: Yes, free parking.

  - Q: Do you have wheelchair accessibility? A: Yes.

### Page 7: Contact (/contact)

- **Contact Form:** Name, Phone, Email, Message. Submit button (red).

- **Sidebar:** Address, Phone, WhatsApp, Google Maps embed.

---

## 5. Functional Must-Haves

- **Booking Modal:** Click "Book Appointment" → Form (Specialty → Doctor → Date → Time → Name → Phone → Notes). Use React Hook Form + Zod. On submit: `console.log()` data, show success toast.

- **Sticky Mobile CTA:** Bottom fixed bar with "Call Now" (red) and "WhatsApp" (green).

- **Floating WhatsApp Button:** Bottom-right corner (green, linking to `https://wa.me/923361112668`).

- **Animations:** Subtle fade-in/up animations on scroll for cards.

---

## 6. Final Instructions for the Developer

1. **Verify the live site first** – do not skip this step.

2. Use the exact data provided above, but if the live site has a different red hex, different schedule, or different text, **prioritize the live site's version**.

3. Generate a complete, polished, production-ready frontend.

4. Include a small "Demo Version" badge in the top-left corner.

Generate the complete code now.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://alhafeez-health-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dda58442-3038-4548-9a65-f6c2d0985c8c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
