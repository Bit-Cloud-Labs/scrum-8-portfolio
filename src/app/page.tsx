import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import NavBar from '@/components/NavBar';
import type { Project, Skill } from '@/lib/types';

const DEVELOPER_NAME = 'Izrael';
const TAGLINE = 'Full-Stack Developer · Building elegant, scalable web solutions';
const BIO =
  "I'm Izrael, a passionate full-stack developer with a love for clean code and great user experiences. I specialize in modern JavaScript, Python, and cloud-native architectures. Always learning, always building.";

const PROJECTS: Project[] = [
  {
    title: 'Portfolio Site',
    description: 'A personal portfolio built with Next.js, TypeScript, and TDD practices.',
    tech_stack: ['Next.js', 'TypeScript', 'React'],
    github_url: 'https://github.com/Bit-Cloud-Labs/scrum-8-portfolio',
  },
];

const SKILLS: Skill[] = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Python' },
  { name: 'PostgreSQL' },
  { name: 'Node.js' },
  { name: 'Docker' },
  { name: 'Git' },
];

/** Home page — assembles all portfolio sections. */
export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection name={DEVELOPER_NAME} tagline={TAGLINE} />
        <AboutSection bio={BIO} />
        <ProjectsSection projects={PROJECTS} />
        <SkillsSection skills={SKILLS} />
        <ContactSection />
      </main>
    </>
  );
}
