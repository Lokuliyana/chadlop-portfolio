// app/page.tsx
import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('@/components/ui/HeroSection'), { ssr: true })
const ProjectsSection = dynamic(() => import('@/components/ui/ProjectSection'), { ssr: true })
const AboutMeSection = dynamic(() => import('@/components/ui/AboutMeSection'), { ssr: true })
const ExperienceSection = dynamic(() => import('@/components/ui/ExperienceSection'), { ssr: true })
const SkillsSection = dynamic(() => import('@/components/ui/SkillSection'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/ui/ContactSection'), { ssr: true })

// This is the main entry point for the Next.js application.
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      {/* Other sections will go below */}
    </>
  )
}
