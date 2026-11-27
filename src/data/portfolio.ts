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
  logoNeedsManual?: boolean;
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
  description?: string;
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
  whatsappHref: 'https://wa.me/919687940988',
  cvPath: 'public/Darshan_Patel_CV.pdf',
  cvUrl: '/Darshan_Patel_CV.pdf',
  siteUrl: 'https://darshanpatel.com',
  positioning: 'QA Lead & Analyst leading quality assurance and precision testing for release confidence.',
  subpositioning:
    'QA Lead & Analyst with 8+ years of experience delivering reliable, high-performing software through structured test planning, early defect discovery, and decisive release validation across web and mobile.',
  responseSignal: 'Usually responds within 24 hours',
  aboutPullQuote: 'Quality is designed in, not tested in.',
  aboutParagraphs: [
    'Great quality assurance starts before code reaches staging — by reviewing requirements early, identifying edge cases before development, and keeping engineering and product teams aligned on what done really means.',
    'With 8+ years of hands-on QA leadership, I combine structured manual exploration with automated regression safety nets and API testing to ensure every software release is stable, fast, and user-friendly.',
  ],
  metrics: [
    { value: 8, suffix: '+', label: 'Years Exp' },
    { value: 30, suffix: '+', label: 'Projects' },
  ],
  recentProjectChips: [
    { label: 'Kepler Connect', targetId: 'kepler-connect' },
    { label: 'RV AppStudios', targetId: 'rv-appstudios' },
    { label: 'Save Location GPS', targetId: 'save-location-gps' },
    { label: 'Oath Law', targetId: 'oath-law' },
    { label: 'MAST Human', targetId: 'mast-human' },
  ],
  socials: [
    { id: 'github' as const, label: 'GitHub', href: 'https://github.com/darshan7409-hub' },
    { id: 'linkedin' as const, label: 'LinkedIn', href: 'https://www.linkedin.com/in/darshan-patel-619901106' },
    { id: 'whatsapp' as const, label: 'WhatsApp', href: 'https://wa.me/919687940988' },
  ],
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'kepler-connect',
    featuredIndex: '01 / 03',
    index: '01 / 07',
    featured: true,
    title: 'Kepler Connect',
    domain: 'Automotive CRM & Dealer Management',
    year: '2025',
    roleScope: 'QA Lead & Test Engineer · Unified SSO, CRM & Dealer Workflows',
    problemStatement:
      'Kepler Connect unifies access across Kepler CRM, Shop, Course, and customer lead inboxes under one account — requiring reliable SSO, account linking, and cross-product continuity.',
    approach:
      'Led end-to-end QA validation across unified Google/Apple SSO authentication, Kepler CRM lead capture pipelines, multi-tenant dealer permission matrices, and active job tracking workflows.',
    metricPills: [
      '100% SSO Flow Coverage',
      '99.9% Auth Success Rate',
      'Zero P0 Auth Escapes',
    ],
    shortDescription:
      'Kepler Connect unifies Kepler CRM, Shop, Course, and customer lead inboxes under one account to manage dealer and automotive shop operations.',
    longDescription:
      'Served as QA Lead and Tester overseeing quality engineering for Kepler Connect, an all-in-one dealer management and automotive CRM ecosystem. Directed end-to-end functional and integration testing across Google and Apple SSO authentication, lead capture pipelines, multi-tenant dealer permission matrices, and active job tracking workflows. Formulated structured test suites, performed cross-browser validation on desktop and mobile viewports, and collaborated directly with engineering teams in sprint bug triaging to ensure seamless user onboarding and zero authentication failures across dealer storefronts.',
    highlights: [
      'Led test planning and verification for unified Google and Apple SSO login and account-linking flows across Shop, Course, and CRM.',
      'Validated multi-tenant lead routing, automated notification dispatches, and real-time dealer job tracking pipelines.',
      'Executed cross-browser and mobile responsiveness regression runs, logging and verifying edge cases through Jira to release sign-off.',
    ],
    techStack: ['QA Leadership', 'Unified SSO', 'Kepler CRM', 'Dealer Portal QA', 'Jira'],
    imageSrc: '/projects/kepler-connect.png',
    imageWidth: 3339,
    imageHeight: 748,
    plateMode: 'dark',
    blurDataURL: makeBlurDataUrl('oklch(0.16 0.02 230)'),
    demoLink: 'https://kepler-connect.com/',
    accent: { dark: 'oklch(0.72 0.12 230)', light: 'oklch(0.45 0.13 230)' },
  },
  {
    id: 'rv-appstudios',
    featuredIndex: '02 / 03',
    index: '02 / 07',
    featured: true,
    title: 'RV AppStudios',
    domain: 'Mobile Games & Kids Education',
    year: '2024',
    roleScope: 'Senior QA Tester & Analyst · Cross-Platform Mobile Games & Kids Apps',
    problemStatement:
      'RV AppStudios builds free, high-quality learning apps for children everywhere — no ads, no paywalls, no compromises. With 18 kids apps, 41 games, and 26 utilities reaching over 1 billion combined downloads, the QA surface spans dozens of titles across Android, iOS, and Amazon app stores.',
    approach:
      'Executed end-to-end functional, compatibility, GUI, and regression testing across multiple kids math, puzzle, and learning game titles.',
    metricPills: [
      '40+ game titles tested',
      '1B+ downloads covered',
      '99.8% crash-free session rate',
    ],
    shortDescription:
      'RV AppStudios builds free, high-quality learning apps for children everywhere — reaching over 1 billion combined downloads across Android, iOS, and Amazon.',
    longDescription:
      'Served as Senior QA Tester and quality analyst for RV AppStudios, a global game development studio with over 1 billion downloads across Android, iOS, Amazon Appstore, Windows, and macOS. Owned end-to-end functional, GUI, sound, and regression testing across popular kids educational games and casual puzzle titles. Verified touch responsiveness, COPPA compliance / parental gate controls, multi-resolution layout rendering, and gameplay physics across 50+ real test devices. Partnered with Unity developers and game designers to isolate edge-case crashes, memory leaks, and performance drops, sustaining a 99.8% crash-free session benchmark across massive worldwide player bases.',
    highlights: [
      'Tested interactive math, counting, phonics, and educational game mechanics across 40+ titles for children aged 3–7.',
      'Validated multi-touch inputs, audio sync, reward state persistence, and child-safe parental gate barriers.',
      'Conducted extensive multi-device compatibility matrices across Android, iOS, Amazon Fire, Windows, and macOS devices.',
    ],
    techStack: ['Mobile Game QA', 'Cross-Platform Testing', 'Functional & GUI QA', 'Compatibility Testing', 'Jira'],
    imageSrc: '/projects/rv-appstudios.webp',
    imageWidth: 420,
    imageHeight: 160,
    plateMode: 'light',
    blurDataURL: makeBlurDataUrl('oklch(0.18 0.02 295)'),
    demoLink: 'https://www.rvappstudios.com/',
    accent: { dark: 'oklch(0.73 0.13 295)', light: 'oklch(0.46 0.14 295)' },
  },
  {
    id: 'save-location-gps',
    featuredIndex: '03 / 03',
    index: '03 / 07',
    featured: true,
    title: 'Save Location GPS',
    domain: 'Mobile App · GPS & Offline Support',
    year: '2024',
    roleScope: 'Mobile QA Lead & Senior Tester · Geolocation & Offline Storage',
    problemStatement:
      'Save Location GPS is a personal location assistant — save your current location with one click, share it with friends, and never forget where you parked. Works online and offline with detailed location metadata including coordinates, address, and photos.',
    approach:
      'Tested one-click GPS capture, offline coordinate persistence, map layer switching, photo attachments, and cloud sync across iOS and Android.',
    metricPills: [
      '99.5% offline-mode accuracy',
      '↑ 98.8% location save success rate',
      '150+ GPS edge cases tested',
    ],
    shortDescription:
      'Save Location GPS is a personal location assistant — save your current location with one click, share it with friends, and work online or offline.',
    longDescription:
      'Led mobile QA and test execution for Save Location GPS, a personal navigation and location bookmarking utility on iOS and Android. Designed and executed robust test suites covering one-tap coordinate acquisition, offline SQLite map caching, background GPS geofencing, and multi-format data export (GPX, KML, CSV). Tested extreme geolocation edge cases including low-satellite tunnels, airplane-mode transitions, permission revocations, and coordinate drift compensation. Collaborated closely with mobile engineers to triage bugs, optimize cold-start time-to-first-fix (TTFF), and ensure 100% data integrity when synchronizing offline pins to cloud backup.',
    highlights: [
      'Engineered comprehensive test scenarios for real-time GPS coordinate acquisition, reverse geocoding, and photo tagging.',
      'Validated offline storage persistence and conflict-free automatic synchronization upon network reconnection.',
      'Executed battery drain profiling and background location tracking tests across multiple Android OS versions and iOS releases.',
    ],
    techStack: ['Mobile App QA', 'GPS & Geolocation', 'Offline Persistence', 'Field & Boundary Testing', 'Jira'],
    imageSrc: '/projects/save-location-gps.png',
    imageWidth: 512,
    imageHeight: 512,
    plateMode: 'light',
    blurDataURL: makeBlurDataUrl('oklch(0.17 0.02 155)'),
    demoLink: 'https://savelocationgps.com/',
    accent: { dark: 'oklch(0.72 0.13 155)', light: 'oklch(0.45 0.13 155)' },
  },
  {
    id: 'oath-law',
    index: '04 / 07',
    featured: false,
    title: 'Oath Law',
    domain: 'Legal Tech · Estate Planning',
    year: '2025',
    roleScope: 'QA Lead & Test Specialist · Legal Client Portal & Secure Intake Workflows',
    problemStatement:
      'Oath Law helps clients prioritise what matters through estate and financial planning, all under one roof. The platform handles sensitive legal workflows with a clean, confidence-building experience for clients and attorneys.',
    approach:
      'Audited client onboarding intake, referral workflows, state-specific service routing, and responsive form validation across browsers.',
    metricPills: [
      '99.7% referral flow success rate',
      '↓ 40% client onboarding friction',
      '120+ legal form edge cases',
    ],
    shortDescription:
      'Oath Law helps clients prioritise what matters through estate and financial planning, all under one roof with clean, confidence-building legal workflows.',
    longDescription:
      'Led quality assurance and end-to-end test governance for Oath Law (planwithoath.com), an innovative legal-tech estate and financial planning platform. Validated sensitive client intake funnels, multi-state legal rule routing, attorney-client scheduling, and secure document transmission portals. Created detailed test cases for conditional question trees, dynamic form recalculations, and CRM integrations while enforcing strict confidentiality and cross-browser responsiveness. Partnered directly with product owners and legal operations to eliminate friction, verifying bug-free client onboarding and compliance with multi-jurisdictional legal requirements.',
    highlights: [
      'Designed and executed test suites for complex multi-step estate planning questionnaires and conditional branching logic.',
      'Tested state-specific legal jurisdiction routing, workshop reservation forms, and CRM lead capture handoffs.',
      'Conducted comprehensive cross-browser and mobile compatibility testing with zero data loss across multi-page forms.',
    ],
    techStack: ['QA Leadership', 'Legal-Tech Testing', 'Form Validation & Security', 'Cross-Browser QA', 'Jira'],
    imageSrc: '/projects/oath-law.svg',
    imageWidth: 320,
    imageHeight: 96,
    plateMode: 'light',
    blurDataURL: makeBlurDataUrl('oklch(0.18 0.02 72)'),
    demoLink: 'https://www.planwithoath.com/',
    accent: { dark: 'oklch(0.76 0.13 72)', light: 'oklch(0.48 0.13 72)' },
  },
  {
    id: 'mast-human',
    index: '05 / 07',
    featured: false,
    title: 'MAST Human',
    domain: 'Non-profit · Social Impact',
    year: '2024',
    roleScope: 'QA Lead & Analyst · Humanitarian Platform & Secure Reporting Workflows',
    problemStatement:
      'MAST Human is a non-profit social enterprise dedicated to safeguarding the vulnerable, combating human trafficking, and fostering community resilience through innovation and collaboration. The platform makes critical resources and impact reporting accessible to all.',
    approach:
      'Verified public impact-reporting pages, donation and contact workflows, and cross-browser accessibility across desktop and mobile.',
    metricPills: [
      '99.9% donation flow uptime',
      '4 multi-language portals validated',
      '85+ cross-browser edge cases',
    ],
    shortDescription:
      'MAST Human is a non-profit social enterprise dedicated to safeguarding the vulnerable, combating human trafficking, and fostering community resilience.',
    longDescription:
      'Served as QA Lead and quality analyst for MAST Human (masthuman.org), a non-profit social enterprise dedicated to human trafficking prevention, victim support resources, and community resilience. Spearheaded quality validation across public awareness portals, multilingual educational resource libraries, secure contact and tip-off forms, and donor contribution workflows. Executed rigorous accessibility (WCAG), mobile responsiveness, and security boundary tests to protect user privacy and guarantee rock-solid availability under high public visibility. Coordinated with non-profit stakeholders and web developers to review acceptance criteria and deliver reliable release builds.',
    highlights: [
      'Validated multi-language resource portals, educational campaign pages, and secure outreach submission forms.',
      'Tested end-to-end donation processing, receipt generation, and payment gateway error recovery.',
      'Audited mobile UI accessibility and responsiveness across screen sizes to ensure barrier-free access to emergency resources.',
    ],
    techStack: ['QA Leadership', 'Web Platform QA', 'Accessibility (WCAG)', 'Form & Gateway Testing', 'Jira'],
    imageSrc: '/projects/mast-human.png',
    imageWidth: 340,
    imageHeight: 272,
    plateMode: 'light',
    blurDataURL: makeBlurDataUrl('oklch(0.17 0.02 215)'),
    demoLink: 'https://www.masthuman.org/',
    accent: { dark: 'oklch(0.72 0.11 215)', light: 'oklch(0.45 0.11 215)' },
  },
  {
    id: 'captain-up',
    index: '06 / 07',
    featured: false,
    title: 'Captain Up',
    domain: 'Gamification & Loyalty SaaS',
    year: '2024',
    roleScope: 'Senior QA Tester & Test Analyst · Gamification SaaS & Real-Time Engine',
    problemStatement:
      'High-concurrency reward rules, tournament leaderboards, and mission triggers required deterministic validation across web and mobile surfaces.',
    approach:
      'Executed structured functional and cross-browser regression suites while pairing directly with product and engineering on Jira defect triage.',
    metricPills: [
      '↓ 45% regression cycle',
      '↑ 95% mission coverage',
      '0 P0 bugs escaped',
    ],
    shortDescription:
      'End-to-end validation of a gamification and retention platform featuring rewards, tournaments, leaderboards, and personalized missions.',
    longDescription:
      'Served as Senior QA Tester and quality analyst for Captain Up, an enterprise gamification and customer retention platform handling millions of user interactions across web and mobile applications. Responsible for validating complex gamification rules, real-time tournament leaderboards, dynamic badge triggers, point redemption systems, and personalized engagement missions. Executed rigorous manual exploratory, functional, and regression test cycles across multi-tenant environments. Collaborated closely with backend developers, UI designers, and product managers in Jira defect triage, catching high-concurrency race conditions before production and accelerating sprint release sign-offs.',
    highlights: [
      'Validated mission progression state machines, multi-tier reward triggers, and real-time leaderboard point calculations.',
      'Executed end-to-end regression suites across desktop web and mobile viewports, tracking defects to closure in Jira.',
      'Partnered directly with engineering during sprint sign-offs, verifying API payloads and preventing high-concurrency production defects.',
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
    id: 'selloctave',
    index: '07 / 07',
    featured: false,
    title: 'Selloctave',
    domain: 'Cloud Retail Audio Automation',
    year: '2024',
    roleScope: 'QA Analyst & Audio Automation Tester · Retail Audio & Cloud Scheduling',
    problemStatement:
      'Multi-timezone playlist schedules and promotional voice ducking required uninterrupted playback recovery in retail venues.',
    approach:
      'Audited timezone boundary transitions, break-time silence rules, and offline playback recovery scenarios.',
    metricPills: [
      '15+ timezones tested',
      '99.99% playback continuity',
      '100+ schedule rules',
    ],
    shortDescription:
      'Audited a cloud-based in-store music management platform handling multi-timezone playlist scheduling and retail playback continuity.',
    longDescription:
      'Led quality assurance and functional testing for Selloctave, a cloud-based in-store retail audio management platform deployed in supermarkets, shopping malls, and commercial retail chains. Validated complex automated playlist scheduling, multi-timezone calendar transitions, promotional audio voice ducking, and break-time silence intervals. Conducted simulated network interruption tests to verify offline buffer persistence and auto-recovery mechanisms, ensuring zero audio dead-air in commercial venues. Collaborated with core engineering to document test scenarios, reproduce audio synchronization glitches, and certify weekly deployment builds.',
    highlights: [
      'Tested multi-timezone playlist scheduling rules and automatic daylight saving time boundary adjustments.',
      'Verified promotional announcement ducking algorithms, audio fade transitions, and scheduled commercial breaks.',
      'Conducted offline playback resilience testing, validating local caching and seamless state recovery after network disconnections.',
    ],
    techStack: ['Audio Automation QA', 'Scheduling Logic', 'Regression Testing', 'Cross-Browser', 'Jira'],
    imageSrc: '/projects/selloctave.png',
    imageWidth: 680,
    imageHeight: 148,
    plateMode: 'light',
    blurDataURL: makeBlurDataUrl('oklch(0.19 0.015 50)'),
    demoLink: 'https://selloctave.com/',
    accent: { dark: 'oklch(0.68 0.11 50)', light: 'oklch(0.46 0.11 50)' },
  },
];

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'rayo',
    company: 'Rayo Innovations',
    role: 'QA Lead & Analyst',
    duration: 'September 2022 – Present',
    location: 'Ahmedabad, Gujarat',
    current: true,
    responsibilities: [
      'Lead end-to-end quality strategy, test planning, and release sign-off across web and mobile applications in Agile sprints.',
      'Partner closely with product owners and engineering teams during requirement reviews to catch ambiguity and edge-case risks early.',
      'Oversee defect triage and closure in Jira while balancing exploratory, functional, regression, API, and cross-platform validation.',
    ],
    tags: ['QA Leadership', 'Test Strategy', 'Requirement Analysis', 'Jira'],
  },
  {
    id: 'joyall',
    company: 'Joyall – UK',
    role: 'QA Analyst',
    duration: 'April 2022 – August 2022',
    location: 'Ahmedabad, Gujarat',
    current: false,
    responsibilities: [
      'Created structured test plans, scenarios, and test cases for web and mobile product workflows prior to release cycles.',
      'Identified, logged, and tracked defects through verification and closure in close collaboration with developers and QA peers.',
      'Executed smoke, sanity, integration, and regression cycles to safeguard build stability across releases.',
    ],
    tags: ['Test Plans', 'Functional QA', 'Regression', 'Defect Tracking'],
  },
  {
    id: 'vihaa',
    company: 'Vihaa Technologies LLP',
    role: 'QA Engineer',
    duration: 'August 2019 – March 2022',
    location: 'Ahmedabad, Gujarat',
    current: false,
    responsibilities: [
      'Validated games and multi-platform applications across iOS, Android, Amazon, Windows, and macOS environments.',
      'Performed GUI, functional, compatibility, BVA, load, and performance testing across the full SDLC, STLC, and Defect Life Cycle.',
      'Collaborated with engineering teams to reproduce issues, verify fixes, and maintain consistent product quality.',
    ],
    tags: ['Multi-Platform QA', 'Games & Apps', 'Compatibility', 'STLC'],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    id: 'be',
    duration: 'July 2015',
    degree: 'Bachelor of Computer Engineering',
    institution: 'Universal College of Engineering & Technology (GTU)',
    location: 'Ahmedabad',
  },
  {
    id: 'hsc',
    duration: 'May 2009',
    degree: 'HSC',
    institution: 'Vishwa Vidhyalaya Higher Secondary School',
    location: 'Ahmedabad',
  },
  {
    id: 'ssc',
    duration: 'May 2007',
    degree: 'SSC',
    institution: 'Vishwa Vidhyalaya High School',
    location: 'Ahmedabad',
  },
];

export const SKILL_COLUMNS: SkillColumn[] = [
  {
    id: 'test-strategy',
    title: 'Test Strategy',
    items: [
      { name: 'Test Planning', iconKey: 'target' },
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
