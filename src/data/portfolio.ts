export type Page = "home" | "techstack" | "experience";

export const about = {
  name: "Leslie Yciar D. Gabriel",
  location: "Manila, Philippines",
  tagline: "Admin, Finance & Virtual Assistant Professional",
  bio: [
    "Detail-oriented administrative and finance professional with experience spanning customer-facing cashiering and event operations to remote virtual assistance, billing, and revenue auditing.",
    "Known for strong accuracy, reliability under pressure, and a track record of leading a team to deliver consistent, high-quality results. Open to work-from-home Virtual Assistant and administrative support roles.",
  ],
  education: [
    { degree: "BSBA, Major in Marketing Management, Specialized in Supply Chain Management", school: "Universidad de Manila", years: "2021 – 2025" },
    { degree: "Senior High School", school: "St. Joseph School", years: "2019 – 2021" },
    { degree: "Elementary", school: "Jose P. Rizal Elementary School", years: "2009 – 2015" },
  ],
};

export const experience = [
  { title: "Admin, Finance, Billing & Auditing Team Leader", sub: "KargaX, Philippines", year: "Jan – Oct 2026", active: false, italic: false,
    bullets: [
      "Led a team handling administrative, financial, billing, and auditing operations, ensuring accuracy and on-time completion of tasks",
      "Oversaw billing processes and financial record-keeping in line with company standards",
      "Conducted audits to verify financial accuracy and resolve discrepancies",
      "Coordinated team workflows and provided day-to-day guidance to maintain consistent output quality",
    ] },
  { title: "Virtual Assistant - Medical", sub: "Freelance — Tara AI Community", year: "Jan 2023 – Present", active: true, italic: false,
    bullets: [
      "Provide remote administrative support, including scheduling, data entry, email management, and document preparation",
      "Manage client communications and ensure timely delivery of assigned tasks",
      "Maintain organized records and help streamline day-to-day administrative processes",
    ] },
  { title: "Revenue Audit (OJT)", sub: "New Coast Hotel Manila", year: "2025", active: false, italic: false,
    bullets: [
      "Reviewed and verified daily revenue reports for accuracy",
      "Reconciled financial transactions across departments to identify and resolve discrepancies",
      "Supported the auditing team in maintaining accurate financial documentation",
    ] },
  { title: "Cashier", sub: "Greenwich, Tayuman", year: "2023 – 2024", active: false, italic: false,
    bullets: [
      "Processed customer transactions accurately via POS, handling cash and card payments",
      "Delivered friendly, efficient service while maintaining accuracy during peak hours",
      "Balanced cash drawers and reconciled daily sales records",
    ] },
];

export const techStack: Record<string, string[]> = {
  "Leadership & Operations": ["Team Leadership", "Time Management", "Multitasking", "Adaptability"],
  "Finance & Admin": ["Billing & Invoicing", "Financial Auditing", "Data Entry", "Record-Keeping"],
  Tools: ["Microsoft Excel", "Microsoft Word"],
};

export const techStackAll: Record<string, string[]> = {
  "Leadership & Operations": ["Team Leadership", "Time Management", "Multitasking", "Organizational Skills", "Adaptability", "Problem-Solving"],
  "Finance & Admin": ["Billing & Invoicing", "Financial Auditing", "Administrative Support", "Data Entry", "Record-Keeping", "Email & Calendar Management", "Medical"],
  Tools: ["Microsoft Excel", "Microsoft Word"],
  "Core Strengths": ["Attention to Detail", "Customer Service", "Communication Skills", "Reliability", "Critical Thinking"],
};

// ── Update with real contact details ─────────────────────────────────────────
export const contact = {
  email: "lesliegabriel1802@gmail.com",
  phone: "09154257014",
};
