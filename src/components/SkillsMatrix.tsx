import {
  ShieldCheck,
  Layers,
  CheckCircle2,
  Target,
  Cpu,
  Code2,
  Terminal,
  Bug,
  Globe,
  Zap,
  FileText,
  GitBranch,
} from 'lucide-react';
import GlassPanel from './GlassPanel';
import SectionHeader from './SectionHeader';
import { ScrollReveal } from './MotionPrimitives';
import { SKILL_COLUMNS, type SkillColumn } from '@/data/portfolio';

function SkillIcon({ iconKey }: { iconKey: SkillColumn['items'][number]['iconKey'] }) {
  const props = { size: 15, className: 'text-accent shrink-0', 'aria-hidden': true as const };
  switch (iconKey) {
    case 'shield':
      return <ShieldCheck {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'check':
      return <CheckCircle2 {...props} />;
    case 'target':
      return <Target {...props} />;
    case 'cpu':
      return <Cpu {...props} />;
    case 'code':
      return <Code2 {...props} />;
    case 'terminal':
      return <Terminal {...props} />;
    case 'bug':
      return <Bug {...props} />;
    case 'globe':
      return <Globe {...props} />;
    case 'zap':
      return <Zap {...props} />;
    case 'file':
      return <FileText {...props} />;
    case 'git':
      return <GitBranch {...props} />;
  }
}

export default function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 sm:py-32 safe-x max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="03 // Capabilities Matrix"
        title="Skills & Tooling"
        description="Four focused pillars spanning QA test strategy, UI & API automation, cross-browser diagnostic tools, and scripting languages."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_COLUMNS.map((col, idx) => (
          <ScrollReveal key={col.id} delay={idx * 0.05}>
            <GlassPanel as="article" className="p-6 h-full flex flex-col gap-5">
              <div className="pb-3 border-b border-border flex items-center justify-between">
                <h3 className="font-serif text-2xl text-ink-primary">{col.title}</h3>
                <span className="mono-meta text-[11px] text-ink-muted">0{idx + 1}</span>
              </div>

              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li
                    key={item.name}
                    className="glass-panel !rounded-[12px] px-3.5 py-2.5 flex items-center gap-2.5 text-sm text-ink-secondary hover:text-ink-primary hover:border-accent/45 hover:-translate-y-0.5 transition-all duration-250"
                  >
                    <SkillIcon iconKey={item.iconKey} />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

