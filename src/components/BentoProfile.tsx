import Image from 'next/image';
import { Briefcase, GraduationCap, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import { CAPABILITIES, EDUCATION, EXPERIENCES, PROFILE, TECH_TOOLS } from '@/data/portfolio';

export default function BentoProfile() {
  return (
    <section id="profile" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 scroll-reveal">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-secondary">
            02 // Engineering Profile &amp; Stack
          </p>
          <h2 className="section-display font-bold uppercase text-ink-primary">
            Systems &amp; Craft
          </h2>
        </div>
        <p className="text-sm sm:text-base text-ink-secondary max-w-md leading-relaxed">
          Structured QA methodology, cross-functional release ownership, and the diagnostic stack behind stable software launches.
        </p>
      </div>

      {/* Uneven Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {/* Bio Tile — 7 cols */}
        <article className="md:col-span-7 bento-glass rounded-3xl p-6 sm:p-9 flex flex-col justify-between gap-8 scroll-reveal">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              <ShieldCheck size={15} aria-hidden="true" />
              <span>QA Philosophy</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary leading-snug">
              Quality is engineered early — not patched after launch.
            </h3>
            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
              {PROFILE.bioPrimary}
            </p>
            <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
              {PROFILE.bioSecondary}
            </p>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border font-mono text-xs">
            <div>
              <dt className="text-ink-muted uppercase">Base</dt>
              <dd className="text-ink-primary mt-1 inline-flex items-center gap-1.5">
                <MapPin size={13} className="text-accent" aria-hidden="true" />
                {PROFILE.location}
              </dd>
            </div>
            <div>
              <dt className="text-ink-muted uppercase">Focus</dt>
              <dd className="text-ink-primary mt-1">Manual + Playwright + API QA</dd>
            </div>
          </dl>
        </article>

        {/* Capabilities Tile — 5 cols */}
        <article className="md:col-span-5 bento-glass rounded-3xl p-6 sm:p-9 flex flex-col justify-between gap-6 scroll-reveal">
          <div className="space-y-1">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-secondary">
              Core Capabilities
            </p>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-primary">
              Verification Matrix
            </h3>
          </div>

          <div className="space-y-5">
            {CAPABILITIES.map((group) => (
              <div key={group.id} className="space-y-2">
                <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-surface-3/80 border border-border text-xs text-ink-primary font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Experience Timeline Tile — 8 cols */}
        <article
          id="experience"
          className="md:col-span-8 bento-glass rounded-3xl p-6 sm:p-9 space-y-6 scroll-reveal"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent inline-flex items-center gap-2">
                <Briefcase size={14} aria-hidden="true" />
                Career Timeline
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-ink-primary">
                Professional Experience
              </h3>
            </div>
            <span className="font-mono text-xs text-ink-muted hidden sm:inline">2023 — 2025</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="rounded-2xl bg-surface-2/80 border border-border p-5 flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-accent uppercase tracking-wider inline-flex items-center gap-1.5">
                      <Calendar size={12} aria-hidden="true" />
                      {exp.duration}
                    </span>
                    <span className="font-mono text-[11px] text-ink-muted">{exp.location}</span>
                  </div>
                  <h4 className="text-lg font-bold text-ink-primary">{exp.role}</h4>
                  <p className="font-mono text-xs text-secondary">{exp.company}</p>
                </div>

                <ul className="space-y-2 text-sm text-ink-secondary leading-relaxed">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden="true" className="text-accent mt-1.5 text-[10px]">
                        ◆
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        {/* Education Tile — 4 cols */}
        <article className="md:col-span-4 bento-glass rounded-3xl p-6 sm:p-9 flex flex-col justify-between gap-6 scroll-reveal">
          <div className="space-y-1">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-secondary inline-flex items-center gap-2">
              <GraduationCap size={14} aria-hidden="true" />
              Academic
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-ink-primary">Education</h3>
          </div>

          <div className="space-y-5">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="pb-5 last:pb-0 border-b last:border-b-0 border-border space-y-1.5"
              >
                <span className="font-mono text-[11px] text-accent">{edu.duration}</span>
                <h4 className="text-base font-bold text-ink-primary leading-snug">{edu.degree}</h4>
                <p className="text-xs font-mono text-ink-secondary">{edu.institution}</p>
                <p className="text-xs text-ink-muted leading-relaxed pt-1">{edu.description}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Tooling Strip Tile — 12 cols */}
        <article
          id="stack"
          className="md:col-span-12 bento-glass rounded-3xl p-6 sm:p-8 overflow-hidden scroll-reveal"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Diagnostic &amp; Workflow Stack
            </p>
            <p className="font-mono text-xs text-ink-muted">
              Daily tools across test execution, API verification, telemetry &amp; triage
            </p>
          </div>

          <div className="relative overflow-hidden py-2">
            <div className="marquee-track gap-6 sm:gap-10 items-center">
              {[...TECH_TOOLS, ...TECH_TOOLS].map((tool, index) => (
                <div
                  key={`${tool.name}-${index}`}
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-surface-2/80 border border-border shrink-0"
                >
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={tool.width}
                    height={tool.height}
                    loading="eager"
                    sizes="32px"
                    className="w-6 h-6 object-contain"
                  />
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-secondary">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

