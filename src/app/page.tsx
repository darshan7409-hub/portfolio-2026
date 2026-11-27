import Hero from '@/components/Hero';
import RecentProjectsStrip from '@/components/RecentProjectsStrip';
import FeaturedWork from '@/components/FeaturedWork';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsMatrix from '@/components/SkillsMatrix';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import { PROJECTS } from '@/data/portfolio';

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecentProjectsStrip />
      <FeaturedWork projects={PROJECTS} />
      <ExperienceTimeline />
      <SkillsMatrix />
      <AboutSection />
      <ContactSection />
    </>
  );
}
