import fs from 'node:fs';
import path from 'node:path';
import Hero from '@/components/Hero';
import RecentProjectsStrip from '@/components/RecentProjectsStrip';
import FeaturedWork from '@/components/FeaturedWork';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsMatrix from '@/components/SkillsMatrix';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import { PROJECTS } from '@/data/portfolio';

function checkHasRealCv(): boolean {
  try {
    const cvFullPath = path.join(/*turbopackIgnore: true*/ process.cwd(), 'public', 'Darshan_Patel_CV.pdf');
    return fs.statSync(cvFullPath).size > 50000;
  } catch {
    return false;
  }
}

export default function HomePage() {
  const hasRealCv = checkHasRealCv();

  return (
    <>
      <Hero hasRealCv={hasRealCv} />
      <RecentProjectsStrip />
      <FeaturedWork projects={PROJECTS} />
      <ExperienceTimeline />
      <SkillsMatrix />
      <AboutSection />
      <ContactSection />
    </>
  );
}
