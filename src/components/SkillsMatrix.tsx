import { ShieldCheck, CheckSquare, Cpu, Users } from 'lucide-react';
import GlassPanel from './GlassPanel';
import { ScrollReveal, TypeInEyebrow } from './MotionPrimitives';

interface TechTool {
  name: string;
  icon: string;
  darkIcon?: string;
}

const TECH_TOOLS: TechTool[] = [
  { name: 'JIRA', icon: '/tech/jira.svg' },
  { name: 'AWS SERVICES', icon: '/tech/aws-light.svg', darkIcon: '/tech/aws-dark.svg' },
  { name: 'BROWSERSTACK', icon: '/tech/browserstack-light.svg', darkIcon: '/tech/browserstack-dark.svg' },
  { name: 'KATALON', icon: '/tech/katalon-light.svg', darkIcon: '/tech/katalon-dark.svg' },
  { name: 'FIGMA', icon: '/tech/figma.svg' },
  { name: 'GOOGLE SHEETS', icon: '/tech/googlesheets.svg' },
  { name: 'TRELLO', icon: '/tech/trello.svg' },
  { name: 'POSTMAN', icon: '/tech/postman.svg' },
  { name: 'JMETER', icon: '/tech/jmeter.svg' },
  { name: 'CLICKUP', icon: '/tech/clickup.svg' },
  { name: 'SENTRY', icon: '/tech/sentry.svg' },
  { name: 'BITBUCKET', icon: '/tech/bitbucket.svg' },
];

const SKILL_PILLARS = [
  {
    id: 'qa-strategy',
    title: 'Quality Assurance',
    icon: ShieldCheck,
    items: ['Test Planning', 'Test Design', 'Regression Suites', 'API Testing', 'Release Gates'],
  },
  {
    id: 'qa-validation',
    title: 'Quality Validation',
    icon: CheckSquare,
    items: ['Functional Testing', 'Regression Testing', 'Cross-Browser Testing', 'Smoke & Sanity Gates', 'Mobile App QA'],
  },
  {
    id: 'analysis-ownership',
    title: 'QA Analysis & Strategy',
    icon: Cpu,
    items: [
      'Product Understanding',
      'Defect Tracking',
      'Risk Assessment',
      'Root Cause Analysis',
      'Test Sign-off',
      'Stakeholder Alignment',
    ],
  },
  {
    id: 'delivery-ecosystem',
    title: 'Delivery & Ecosystem',
    icon: Users,
    items: ['Jira', 'AWS Services', 'Agile / Scrum', 'Postman', 'BrowserStack', 'Release Governance', 'SQL'],
  },
];

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-14 sm:py-16 safe-x max-w-7xl mx-auto overflow-hidden">
      <ScrollReveal className="mb-10 sm:mb-12 text-center">
        <div className="flex justify-center mb-3">
          <TypeInEyebrow text="03 // Capabilities Matrix" />
        </div>

        <h2 className="section-display font-normal text-ink-primary uppercase tracking-tight">
          Technologies <span className="italic text-accent">I Use</span>
        </h2>

        {/* Decorative wave underline matching reference Skills section */}
        <div className="flex justify-center mt-4 mb-10">
          <svg
            width="120"
            height="12"
            viewBox="0 0 100 10"
            fill="none"
            aria-hidden="true"
            className="text-accent/60"
          >
            <path
              d="M0 5C20 0 30 10 50 5C70 0 80 10 100 5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Continuous Tech Tools Ticker across all screens with edge gradient masks */}
        <div className="relative w-full overflow-hidden py-4 mb-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="tech-marquee-track flex whitespace-nowrap gap-10 sm:gap-20 items-center w-max">
            {TECH_TOOLS.map((tool) => (
              <div
                key={`primary-${tool.name}`}
                className="flex flex-col items-center gap-2.5 px-2 group select-none"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {tool.darkIcon ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        width={44}
                        height={44}
                        className="w-full h-full object-contain theme-light-only"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tool.darkIcon}
                        alt=""
                        aria-hidden="true"
                        width={44}
                        height={44}
                        className="w-full h-full object-contain theme-dark-only"
                      />
                    </>
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                <span className="mono-meta text-[10px] font-bold text-ink-muted tracking-[0.2em] uppercase transition-colors duration-250 group-hover:text-accent">
                  {tool.name}
                </span>
              </div>
            ))}
            {TECH_TOOLS.map((tool) => (
              <div
                key={`dup-${tool.name}`}
                aria-hidden="true"
                className="flex flex-col items-center gap-2.5 px-2 group select-none"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {tool.darkIcon ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tool.icon}
                        alt=""
                        width={44}
                        height={44}
                        className="w-full h-full object-contain theme-light-only"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tool.darkIcon}
                        alt=""
                        width={44}
                        height={44}
                        className="w-full h-full object-contain theme-dark-only"
                      />
                    </>
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={tool.icon}
                      alt=""
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                <span className="mono-meta text-[10px] font-bold text-ink-muted tracking-[0.2em] uppercase transition-colors duration-250 group-hover:text-accent">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-ink-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Technical skills and tools that support software excellence — committed to delivering stable, reliable, and user-friendly products.
        </p>
      </ScrollReveal>

      {/* 4-Column Reference Cards with Wrapped Pill Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {SKILL_PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <ScrollReveal key={pillar.id} delay={idx * 0.05}>
              <GlassPanel
                as="article"
                interactive
                className="p-6 sm:p-7 rounded-[24px] flex flex-col h-full"
              >
                <div className="mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-accent-muted border border-accent/20 flex items-center justify-center mb-4 text-accent">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink-primary leading-tight">
                    {pillar.title}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {pillar.items.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-surface-1 border border-border-strong text-xs sm:text-[13px] font-medium text-ink-secondary hover:bg-accent hover:text-accent-ink hover:border-accent transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
