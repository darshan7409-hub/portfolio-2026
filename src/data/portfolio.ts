export interface ProjectAccent {
  dark: string;
  light: string;
}

export interface ProjectCaseStudy {
  id: string;
  featuredIndex?: string;
  index: string;
  featured: boolean;
  title: string;
  domain: string;
  year: string;
  roleScope: string;
  problemStatement: string;
  approach: string;
  metricPills: [string, string, string];
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  plateMode: 'dark' | 'light';
  blurDataURL: string;
  demoLink?: string;
  accent: ProjectAccent;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  current: boolean;
  responsibilities: string[];
  tags: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
}

export interface SkillColumn {
  id: string;
  title: string;
  items: { name: string; iconKey: 'shield' | 'layers' | 'check' | 'target' | 'cpu' | 'code' | 'terminal' | 'bug' | 'globe' | 'zap' | 'file' | 'git' }[];
}

function makeBlurDataUrl(fillCss: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><rect width="8" height="8" fill="${fillCss}"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

export const PORTRAIT_ASSET = {
  src: '/My_image.png',
  alt: 'Darshan Patel — QA Lead & Analyst portrait',
  width: 1000,
  height: 1250,
  blurDataURL: makeBlurDataUrl('oklch(0.21 0.008 60)'),
};

export const PROFILE = {
  name: 'Darshan Patel',
  shortName: 'Darshan',
  initials: 'DP',
  role: 'QA Lead & Analyst',
  location: 'Ahmedabad, Gujarat, India',
  email: 'darshan7409@gmail.com',
  phone: '+91 9687940988',
  phoneHref: 'tel:+919687940988',
  cvPath: 'public/Darshan_Patel_CV.pdf',
  cvUrl: '/Darshan_Patel_CV.pdf',
  siteUrl: 'https://darshanpatel.com',
  positioning: 'QA Lead & Analyst turning ambiguous requirements into bulletproof releases.',
  subpositioning:
    'Focused on aligning product clarity, quality strategy, and risk-aware validation so every web and mobile release ships with confidence.',
  responseSignal: 'Usually responds within 24 hours',
  aboutPullQuote: 'Quality is designed in, not tested in.',
  aboutParagraphs: [
    'Great quality leadership starts long before a build reaches staging — by asking the right questions during requirement reviews, spotting edge-case risks early, and keeping product and engineering aligned on what done really means.',
    'Rather than treating QA as a late sign-off gate or siloing manual exploration from automated checks, I pair structured exploratory judgment, contract verification, and repeatable regression safety nets so teams ship faster without eroding user trust.',
  ],
  metrics: [
    { value: 8, suffix: '+', label: 'Years Exp' },
    { value: 30, suffix: '+', label: 'Projects' },
  ],
  recentProjectChips: [
    { label: 'Captain Up', targetId: 'captain-up' },
    { label: 'Client Notes', targetId: 'client-notes' },
    { label: 'AutoAviso', targetId: 'auto-aviso' },
    { label: 'DateCheck', targetId: 'datecheck' },
    { label: 'Selloctave', targetId: 'selloctave' },
  ],
  socials: [
    { id: 'github' as const, label: 'GitHub', href: 'https://github.com/darshan7409-hub' },
    { id: 'linkedin' as const, label: 'LinkedIn', href: 'https://www.linkedin.com/in/darshan-patel-619901106' },
  ],
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'captain-up',
    featuredIndex: '01 / 03',
    index: '01 / 07',
    featured: true,
    title: 'Captain Up',
    domain: 'Gamification & Loyalty SaaS',
    year: '2024',
    roleScope: '[Role scope — e.g. Solo QA owner across web & mobile]',
    problemStatement:
      'High-concurrency reward rules, tournament leaderboards, and mission triggers required deterministic validation across web and mobile surfaces.',
    approach:
      'Executed structured functional and cross-browser regression suites while pairing directly with product and engineering on Jira defect triage.',
    metricPills: [
      '↓ [metric]% regression cycle',
      '↑ [metric]% mission coverage',
      '[metric] P0 bugs escaped',
    ],
    shortDescription:
      'End-to-end validation of a gamification and retention platform featuring rewards, tournaments, leaderboards, and personalized missions.',
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
    plateMode: 'dark',
    blurDataURL: makeBlurDataUrl('oklch(0.17 0.015 155)'),
    demoLink: 'https://captainup.com/',
    accent: { dark: 'oklch(0.70 0.12 155)', light: 'oklch(0.45 0.12 155)' },
  },
  {
    id: 'client-notes',
    featuredIndex: '02 / 03',
    index: '02 / 07',
    featured: true,
    title: 'Client Notes',
    domain: 'AI Stylist CRM & Reminders',
    year: '2024',
    roleScope: '[Role scope — e.g. Embedded QA lead with X devs]',
    problemStatement:
      'AI-generated consultation summaries, voice note attachments, and SMS rebooking reminders introduced non-deterministic workflow edge cases.',
    approach:
      'Audited end-to-end stylist workflows, photo upload persistence, and reminder scheduling boundaries across desktop and mobile browsers.',
    metricPills: [
      '↑ [metric]% workflow pass rate',
      '↓ [metric]h triage turnaround',
      '[metric] reminder sync issues',
    ],
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
    plateMode: 'dark',
    blurDataURL: makeBlurDataUrl('oklch(0.18 0.015 320)'),
    accent: { dark: 'oklch(0.68 0.11 320)', light: 'oklch(0.46 0.11 320)' },
  },
  {
    id: 'auto-aviso',
    featuredIndex: '03 / 03',
    index: '03 / 07',
    featured: true,
    title: 'AutoAviso',
    domain: 'Bilingual Automotive Marketplace',
    year: '2025',
    roleScope: '[Role scope — e.g. Junior QA Analyst, bilingual web & mobile]',
    problemStatement:
      'Bilingual English/Spanish vehicle search, dealer inventory, and auto loan calculators risked localization drift and calculation discrepancies.',
    approach:
      'Verified EN/ES UI parity, multi-photo seller uploads, and financial amortization edge cases across mobile and desktop viewports.',
    metricPills: [
      '[metric]% EN/ES parity',
      '↓ [metric]% post-release defects',
      '[metric] loan edge cases',
    ],
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
    plateMode: 'light',
    blurDataURL: makeBlurDataUrl('oklch(0.18 0.015 200)'),
    accent: { dark: 'oklch(0.68 0.11 200)', light: 'oklch(0.45 0.11 200)' },
  },
  {
    id: 'challenge-entertainment',
    index: '04 / 07',
    featured: false,
    title: 'Challenge Entertainment',
    domain: 'Live Events & Trivia Mobile App',
    year: '2024',
    roleScope: '[Role scope — Mobile & Admin QA]',
    problemStatement:
      'Live trivia leaderboards and tournament schedules demanded real-time consistency between mobile players and the admin console.',
    approach:
      'Validated concurrent leaderboard updates, venue geo-lookups, and cross-browser tournament scheduling flows.',
    metricPills: [
      '[metric] concurrent flows',
      '↑ [metric]% release stability',
      '[metric] browsers verified',
    ],
    shortDescription:
      'Quality assurance for an interactive live trivia and National Trivia League platform covering real-time leaderboards and venue workflows.',
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
    plateMode: 'light',
    blurDataURL: makeBlurDataUrl('oklch(0.19 0.015 255)'),
    accent: { dark: 'oklch(0.65 0.13 255)', light: 'oklch(0.47 0.13 255)' },
  },
  {
    id: 'selloctave',
    index: '05 / 07',
    featured: false,
    title: 'Selloctave',
    domain: 'Cloud Retail Audio Automation',
    year: '2024',
    roleScope: '[Role scope — Retail Audio Platform QA]',
    problemStatement:
      'Multi-timezone playlist schedules and promotional voice ducking required uninterrupted playback recovery in retail venues.',
    approach:
      'Audited timezone boundary transitions, break-time silence rules, and offline playback recovery scenarios.',
    metricPills: [
      '[metric] timezones tested',
      '↓ [metric]% playback gaps',
      '[metric] schedule rules',
    ],
    shortDescription:
      'Audited a cloud-based in-store music management platform handling multi-timezone playlist scheduling and retail playback continuity.',
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
    plateMode: 'light',
    blurDataURL: makeBlurDataUrl('oklch(0.19 0.015 50)'),
    accent: { dark: 'oklch(0.68 0.11 50)', light: 'oklch(0.46 0.11 50)' },
  },
  {
    id: 'datecheck',
    index: '06 / 07',
    featured: false,
    title: 'DateCheck',
    domain: 'AI Trust & Profile Safety',
    year: '2024',
    roleScope: '[Role scope — Functional & Safety Flow QA]',
    problemStatement:
      'AI identity verification and social profile cross-referencing needed clear error states and consistent responsive alert UX.',
    approach:
      'Tested image upload validation, face-match scoring displays, and report export integrity across mobile and desktop browsers.',
    metricPills: [
      '[metric] safety checks',
      '↑ [metric]% mobile pass rate',
      '[metric] upload edge cases',
    ],
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
    plateMode: 'light',
    blurDataURL: makeBlurDataUrl('oklch(0.19 0.015 22)'),
    accent: { dark: 'oklch(0.66 0.13 22)', light: 'oklch(0.47 0.13 22)' },
  },
  {
    id: 'gitarth-ganga',
    index: '07 / 07',
    featured: false,
    title: 'Gitarth Ganga',
    domain: 'Digital Research & Archive Platform',
    year: '2023',
    roleScope: '[Role scope — Search & CMS QA]',
    problemStatement:
      'Multilingual scriptural dictionaries and archival book catalogs required accurate Unicode indexing and cross-reference search.',
    approach:
      'Audited diacritic query accuracy, catalog filter pagination, and editorial publishing workflows across web browsers.',
    metricPills: [
      '[metric] search queries',
      '↓ [metric]% indexing defects',
      '[metric] catalog modules',
    ],
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
    plateMode: 'light',
    blurDataURL: makeBlurDataUrl('oklch(0.20 0.015 82)'),
    accent: { dark: 'oklch(0.72 0.10 82)', light: 'oklch(0.46 0.10 82)' },
  },
];

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'polyxer',
    company: 'Polyxer Systems Pvt Ltd',
    role: 'Junior QA Analyst',
    duration: 'Dec 2024 – Jun 2025',
    location: 'Ahmedabad, India',
    current: true,
    responsibilities: [
      'Executed end-to-end functional and regression cycles across [metric] production web releases to safeguard launch stability.',
      'Authored and maintained [metric] structured test cases, verifying defect patches in tight loops with engineering.',
      'Reduced release sign-off bottlenecks by [metric] through standardized smoke validation gates prior to deployment.',
    ],
    tags: ['End-to-End QA', 'Regression', 'Release Gates', 'Jira'],
  },
  {
    id: 'rayo',
    company: 'Rayo Innovations',
    role: 'QA Tester',
    duration: 'Jan 2023 – Dec 2024',
    location: 'Ahmedabad, India',
    current: false,
    responsibilities: [
      'Validated cross-browser and multi-device interfaces across [metric] browser/viewport combinations via BrowserStack.',
      'Verified REST API contracts and sanity payloads in Postman ahead of [metric] frontend integration milestones.',
      'Tracked [metric] reproducible regressions in Jira while transitioning repetitive UI flows into Playwright and Katalon.',
    ],
    tags: ['Cross-Browser', 'Postman API', 'Playwright', 'BrowserStack'],
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

export const SKILL_COLUMNS: SkillColumn[] = [
  {
    id: 'test-strategy',
    title: 'Test Strategy',
    items: [
      { name: 'Test Planning', iconKey: 'target' },
      { name: 'Requirement Analysis', iconKey: 'file' },
      { name: 'Risk Assessment', iconKey: 'shield' },
      { name: 'Regression Suites', iconKey: 'layers' },
      { name: 'Smoke & Sanity Gates', iconKey: 'check' },
    ],
  },
  {
    id: 'automation',
    title: 'Automation',
    items: [
      { name: 'Katalon Studio', iconKey: 'zap' },
      { name: 'Selenium WebDriver', iconKey: 'cpu' },
      { name: 'Playwright', iconKey: 'terminal' },
      { name: 'API Testing (Postman)', iconKey: 'globe' },
      { name: 'CI/CD Test Gates', iconKey: 'git' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: [
      { name: 'BrowserStack', iconKey: 'globe' },
      { name: 'Jira Defect Triage', iconKey: 'bug' },
      { name: 'JMeter Performance', iconKey: 'zap' },
      { name: 'Sentry Telemetry', iconKey: 'shield' },
      { name: 'Bitbucket & Figma', iconKey: 'layers' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    items: [
      { name: 'TypeScript / JS', iconKey: 'code' },
      { name: 'Python', iconKey: 'terminal' },
      { name: 'SQL', iconKey: 'layers' },
      { name: 'HTML / CSS', iconKey: 'file' },
      { name: 'PHP', iconKey: 'code' },
    ],
  },
];
