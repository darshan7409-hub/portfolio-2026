export interface ProjectTheme {
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  divider: string;
  accent: string;
  accentInk: string;
  plateBg: string;
}

export interface ProjectCaseStudy {
  id: string;
  index: string;
  title: string;
  domain: string;
  year: string;
  role: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  blurDataURL: string;
  demoLink?: string;
  theme: ProjectTheme;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
}

export interface CapabilityGroup {
  id: string;
  title: string;
  items: string[];
}

export interface TechToolItem {
  name: string;
  icon: string;
  width: number;
  height: number;
}

function makeBlurDataUrl(fillCss: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><rect width="8" height="8" fill="${fillCss}"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

export const PORTRAIT_ASSET = {
  src: '/My_image.png',
  alt: 'Krunal Chaudhari — QA Analyst and Automation Specialist',
  width: 928,
  height: 1136,
  blurDataURL: makeBlurDataUrl('oklch(0.20 0.01 260)'),
};

export const PROFILE = {
  name: 'Krunal Chaudhari',
  shortName: 'Krunal',
  role: 'QA Analyst & Automation Specialist',
  location: 'Ahmedabad, Gujarat, India',
  email: 'krunalchaudhari1008@gmail.com',
  phone: '+91 8000456527',
  phoneHref: 'tel:+918000456527',
  cvUrl: '/Krunal_Chaudhari_CV.pdf',
  availability: 'Available for QA & Automation roles',
  tagline:
    'Delivering reliable software releases through structured test architecture, API sanity verification, and cross-platform quality assurance.',
  bioPrimary:
    'Dedicated Quality Assurance engineer focused on turning complex product specifications into repeatable verification suites across web and mobile ecosystems.',
  bioSecondary:
    'From exploratory edge-case hunting and Jira defect triage to Playwright UI automation and Postman API pipelines, every release ships with measurable confidence.',
  metrics: [
    { value: '2+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Validated' },
    { value: '07', label: 'Featured Case Studies' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/krunalchaudhari' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/chaudharikrunal?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=yykwwq',
    },
  ],
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'captain-up',
    index: '01 / 07',
    title: 'Captain Up',
    domain: 'Gamification & Loyalty SaaS',
    year: '2024',
    role: 'QA Analyst',
    shortDescription:
      'End-to-end validation of a gamification and retention platform featuring rewards, tournaments, leaderboards, and personalized missions across web and mobile.',
    longDescription:
      'Led functional and regression quality assurance for Captain Up, a high-traffic customer engagement and loyalty platform. Validated reward state transitions, real-time leaderboard calculations, tournament triggers, and multi-device responsiveness while collaborating closely with product and engineering teams to safeguard every release cycle.',
    highlights: [
      'Verified mission progression, badge triggers, and point-redemption edge cases across user cohorts.',
      'Executed cross-browser regression suites and tracked defects to resolution in Jira.',
      'Partnered directly with engineering during sprint sign-off to prevent production regressions.',
    ],
    techStack: ['QA Testing', 'Functional Testing', 'Regression Testing', 'Bug Reporting', 'Jira'],
    imageSrc: '/projects/captainup-dark.svg',
    imageWidth: 440,
    imageHeight: 128,
    blurDataURL: makeBlurDataUrl('oklch(0.20 0.035 162)'),
    demoLink: 'https://captainup.com/',
    theme: {
      bg: 'oklch(0.20 0.035 162)',
      surface: 'oklch(0.24 0.04 162)',
      ink: 'oklch(0.96 0.01 162)',
      muted: 'oklch(0.76 0.025 162)',
      divider: 'oklch(0.96 0.01 162 / 0.14)',
      accent: 'oklch(0.84 0.18 152)',
      accentInk: 'oklch(0.16 0.03 152)',
      plateBg: 'oklch(0.15 0.025 162)',
    },
  },
  {
    id: 'challenge-entertainment',
    index: '02 / 07',
    title: 'Challenge Entertainment',
    domain: 'Live Events & Trivia Mobile App',
    year: '2024',
    role: 'QA Tester',
    shortDescription:
      'Quality assurance for an interactive live trivia and National Trivia League platform covering real-time leaderboards, game schedules, and venue workflows.',
    longDescription:
      'Validated both the player-facing mobile experience and administrative event management dashboard for Challenge Entertainment. Audited real-time leaderboard synchronization, team collaboration flows, schedule filtering, and push-notification triggers across devices.',
    highlights: [
      'Tested live scoring and league ranking updates under concurrent session scenarios.',
      'Validated venue schedule filtering, geo-lookup flows, and team invite states.',
      'Performed cross-browser admin console checks prior to tournament broadcasts.',
    ],
    techStack: ['Mobile QA', 'Functional Testing', 'Regression Testing', 'Cross-Browser', 'Bug Tracking'],
    imageSrc: '/projects/challenge-entertainment.png',
    imageWidth: 456,
    imageHeight: 136,
    blurDataURL: makeBlurDataUrl('oklch(0.21 0.045 268)'),
    theme: {
      bg: 'oklch(0.21 0.045 268)',
      surface: 'oklch(0.25 0.05 268)',
      ink: 'oklch(0.96 0.01 268)',
      muted: 'oklch(0.76 0.03 268)',
      divider: 'oklch(0.96 0.01 268 / 0.14)',
      accent: 'oklch(0.80 0.16 250)',
      accentInk: 'oklch(0.16 0.03 250)',
      plateBg: 'oklch(0.95 0.005 268)',
    },
  },
  {
    id: 'selloctave',
    index: '03 / 07',
    title: 'Selloctave',
    domain: 'Cloud Retail Audio Automation',
    year: '2024',
    role: 'QA Tester',
    shortDescription:
      'Audited a cloud-based in-store music management platform handling multi-timezone playlist scheduling, voice announcements, and retail playback continuity.',
    longDescription:
      'Executed comprehensive QA cycles for Selloctave, an enterprise retail audio platform built for supermarkets, malls, and commercial spaces. Verified global timezone scheduling rules, promotional voice-announcement injection, break-time silence windows, and uninterrupted playback recovery.',
    highlights: [
      'Verified timezone boundary transitions and multi-location playlist scheduling conflicts.',
      'Tested automated promotional announcement ducking and break-time silence rules.',
      'Validated offline playback resilience and state recovery after network drops.',
    ],
    techStack: ['Audio Automation QA', 'Scheduling Logic', 'Regression Testing', 'Cross-Browser', 'Jira'],
    imageSrc: '/projects/selloctave.png',
    imageWidth: 680,
    imageHeight: 148,
    blurDataURL: makeBlurDataUrl('oklch(0.21 0.035 45)'),
    theme: {
      bg: 'oklch(0.21 0.035 45)',
      surface: 'oklch(0.25 0.04 45)',
      ink: 'oklch(0.96 0.01 60)',
      muted: 'oklch(0.78 0.025 55)',
      divider: 'oklch(0.96 0.01 60 / 0.14)',
      accent: 'oklch(0.83 0.16 68)',
      accentInk: 'oklch(0.18 0.03 50)',
      plateBg: 'oklch(0.95 0.008 60)',
    },
  },
  {
    id: 'client-notes',
    index: '04 / 07',
    title: 'Client Notes',
    domain: 'AI Stylist CRM & Reminders',
    year: '2024',
    role: 'QA Analyst',
    shortDescription:
      'Validated an AI-powered client management workspace for hairstylists covering treatment histories, voice notes, photo records, and automated rebooking.',
    longDescription:
      'Performed full-lifecycle UI, functional, and regression verification for Client Notes. Audited AI-generated consultation summaries, voice-note attachment pipelines, photo record uploads, SMS rebooking reminders, and stylist calendar workflows.',
    highlights: [
      'Verified AI summary fidelity and edge-case handling on long or noisy voice transcripts.',
      'Validated client treatment photo uploads, gallery ordering, and storage persistence.',
      'Audited automated SMS reminder scheduling and time-window accuracy.',
    ],
    techStack: ['AI Workflow QA', 'UI/UX Validation', 'Regression Testing', 'Cross-Browser', 'Bug Triage'],
    imageSrc: '/projects/clientnotes-dark.png',
    imageWidth: 768,
    imageHeight: 512,
    blurDataURL: makeBlurDataUrl('oklch(0.21 0.042 325)'),
    theme: {
      bg: 'oklch(0.21 0.042 325)',
      surface: 'oklch(0.25 0.048 325)',
      ink: 'oklch(0.96 0.01 325)',
      muted: 'oklch(0.78 0.03 325)',
      divider: 'oklch(0.96 0.01 325 / 0.14)',
      accent: 'oklch(0.82 0.16 335)',
      accentInk: 'oklch(0.18 0.04 330)',
      plateBg: 'oklch(0.16 0.03 325)',
    },
  },
  {
    id: 'datecheck',
    index: '05 / 07',
    title: 'DateCheck',
    domain: 'AI Trust & Profile Safety',
    year: '2024',
    role: 'QA Analyst',
    shortDescription:
      'Tested an AI dating-profile verification platform engineered to detect synthetic accounts, identity mismatches, and catfishing risks.',
    longDescription:
      'Led functional, security-flow, and cross-browser validation for DateCheck. Audited AI face-match scoring, social-profile cross-referencing, user safety report generation, and responsive alert states across desktop and mobile viewports.',
    highlights: [
      'Verified identity verification flows, confidence score displays, and error states.',
      'Tested image upload validation, aspect-ratio edge cases, and report export integrity.',
      'Ensured consistent responsive layout and alert clarity across mobile browsers.',
    ],
    techStack: ['AI Verification QA', 'Functional Testing', 'Cross-Browser', 'Security Flows', 'Jira'],
    imageSrc: '/projects/DateCheck.png',
    imageWidth: 919,
    imageHeight: 428,
    blurDataURL: makeBlurDataUrl('oklch(0.21 0.045 18)'),
    theme: {
      bg: 'oklch(0.21 0.045 18)',
      surface: 'oklch(0.25 0.05 18)',
      ink: 'oklch(0.96 0.01 20)',
      muted: 'oklch(0.78 0.03 20)',
      divider: 'oklch(0.96 0.01 20 / 0.14)',
      accent: 'oklch(0.80 0.17 22)',
      accentInk: 'oklch(0.18 0.04 18)',
      plateBg: 'oklch(0.95 0.008 20)',
    },
  },
  {
    id: 'gitarth-ganga',
    index: '06 / 07',
    title: 'Gitarth Ganga',
    domain: 'Digital Research & Archive Platform',
    year: '2023',
    role: 'QA Tester',
    shortDescription:
      'Quality validation for a scholarly digital archive featuring multilingual scriptural dictionaries, book catalogs, and full-text research search.',
    longDescription:
      'Performed deep functional, content-indexing, and accessibility-oriented QA for Gitarth Ganga. Validated subject dictionary queries, multi-script search indexing, catalog pagination, and archival document workflows across web browsers.',
    highlights: [
      'Audited Unicode and diacritic search accuracy across large dictionary datasets.',
      'Validated book catalog filters, cross-reference links, and pagination state.',
      'Tested editorial CMS workflows for publishing and updating archival records.',
    ],
    techStack: ['Search QA', 'Functional Testing', 'Regression Testing', 'Cross-Browser', 'Content QA'],
    imageSrc: '/projects/gg_logo.png',
    imageWidth: 360,
    imageHeight: 165,
    blurDataURL: makeBlurDataUrl('oklch(0.22 0.038 82)'),
    theme: {
      bg: 'oklch(0.22 0.038 82)',
      surface: 'oklch(0.26 0.044 82)',
      ink: 'oklch(0.96 0.01 85)',
      muted: 'oklch(0.79 0.025 85)',
      divider: 'oklch(0.96 0.01 85 / 0.14)',
      accent: 'oklch(0.85 0.15 88)',
      accentInk: 'oklch(0.18 0.04 82)',
      plateBg: 'oklch(0.95 0.01 85)',
    },
  },
  {
    id: 'auto-aviso',
    index: '07 / 07',
    title: 'AutoAviso',
    domain: 'Bilingual Automotive Marketplace',
    year: '2025',
    role: 'Junior QA Analyst',
    shortDescription:
      'Tested a bilingual English/Spanish U.S. automotive marketplace covering vehicle search, dealer inventory, private listings, and auto loan calculators.',
    longDescription:
      'Executed comprehensive QA for AutoAviso across web and mobile breakpoints. Audited bilingual localization parity (EN/ES), vehicle filter accuracy, private seller listing uploads, dealer portal tools, and auto loan amortization calculations.',
    highlights: [
      'Verified bilingual UI copy, currency formatting, and validation errors across EN/ES.',
      'Audited auto loan calculator math across varied APR, down payment, and term inputs.',
      'Tested multi-photo vehicle listing creation and dealer lead routing workflows.',
    ],
    techStack: ['Localization QA', 'Functional Testing', 'Regression Testing', 'Cross-Browser', 'Mobile Web'],
    imageSrc: '/projects/auto-aviso.png',
    imageWidth: 500,
    imageHeight: 190,
    blurDataURL: makeBlurDataUrl('oklch(0.20 0.038 208)'),
    theme: {
      bg: 'oklch(0.20 0.038 208)',
      surface: 'oklch(0.24 0.044 208)',
      ink: 'oklch(0.96 0.01 205)',
      muted: 'oklch(0.78 0.025 205)',
      divider: 'oklch(0.96 0.01 205 / 0.14)',
      accent: 'oklch(0.83 0.15 198)',
      accentInk: 'oklch(0.16 0.03 205)',
      plateBg: 'oklch(0.95 0.008 205)',
    },
  },
];

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'polyxer',
    company: 'Polyxer Systems Pvt Ltd',
    role: 'Junior QA Analyst',
    duration: 'Dec 2024 – Jun 2025',
    location: 'Ahmedabad, India',
    responsibilities: [
      'Performed end-to-end functional and regression testing across production web applications to safeguard release stability.',
      'Authored and maintained structured test suites, tracked defects, and verified patches in tight loops with engineering.',
      'Contributed directly to release sign-off criteria and smoke validation cycles for rapid shipping cadences.',
    ],
  },
  {
    id: 'rayo',
    company: 'Rayo Innovations',
    role: 'QA Tester',
    duration: 'Jan 2023 – Dec 2024',
    location: 'Ahmedabad, India',
    responsibilities: [
      'Executed cross-browser and multi-device manual test matrices across customer-facing web platforms.',
      'Ran API sanity and schema checks via Postman ahead of frontend integration milestones.',
      'Documented reproducible high-severity regressions in Jira and began transitioning key flows into Playwright UI scripts.',
    ],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    id: 'mca',
    institution: 'GLS University',
    degree: 'Master of Computer Application (MCA)',
    duration: '2022 – 2024',
    location: 'Ahmedabad, Gujarat',
    description:
      'Specialized in Software Engineering, AI/ML, and Cloud Computing with practical focus on application testing, Python, and deployment workflows.',
  },
  {
    id: 'bca',
    institution: 'SomLalit Institute of Computer Application, Gujarat University',
    degree: 'Bachelor of Computer Application (BCA)',
    duration: '2019 – 2022',
    location: 'Ahmedabad, Gujarat',
    description:
      'Core foundation in programming, relational databases, OOP architecture, SQL, and web application fundamentals.',
  },
];

export const CAPABILITIES: CapabilityGroup[] = [
  {
    id: 'qa-arch',
    title: 'Quality Architecture',
    items: ['Test Planning', 'Test Case Design', 'API Testing (Postman)', 'Requirement Analysis'],
  },
  {
    id: 'validation',
    title: 'Release Validation',
    items: ['Functional Testing', 'Regression Suites', 'Cross-Browser & Device', 'Smoke & Sanity Gates'],
  },
  {
    id: 'delivery',
    title: 'Delivery & Tooling',
    items: ['Defect Triage (Jira)', 'Risk Assessment', 'Agile / Scrum', 'Git & CI/CD Pipelines'],
  },
];

export const TECH_TOOLS: TechToolItem[] = [
  { name: 'BrowserStack', icon: '/tech/browserstack-dark.svg', width: 32, height: 32 },
  { name: 'Katalon', icon: '/tech/katalon-dark.svg', width: 32, height: 32 },
  { name: 'Postman', icon: '/tech/postman.svg', width: 32, height: 32 },
  { name: 'Jira', icon: '/tech/jira.svg', width: 32, height: 32 },
  { name: 'JMeter', icon: '/tech/jmeter.svg', width: 32, height: 32 },
  { name: 'Sentry', icon: '/tech/sentry.svg', width: 32, height: 32 },
  { name: 'Bitbucket', icon: '/tech/bitbucket.svg', width: 32, height: 32 },
  { name: 'Figma', icon: '/tech/figma.svg', width: 32, height: 32 },
  { name: 'ClickUp', icon: '/tech/clickup.svg', width: 32, height: 32 },
  { name: 'Trello', icon: '/tech/trello.svg', width: 32, height: 32 },
];

