import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Chandupa Poorna Lokuliyana | Chadlop Portfolio',
  },
  description: 'Welcome to the official portfolio of Chandupa Poorna Lokuliyana (Chadlop). Discover my projects, skills, and journey as a Software Engineer and Debater.',
}

const HeroSection = dynamic(() => import('@/components/ui/HeroSection'), { ssr: true })
import ProjectStickyGrid from '@/components/ui/ProjectStickyGrid'
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
      <ProjectStickyGrid />
      <SkillsSection />
      <ContactSection />
      {/* Other sections will go below */}
    </>
  )
}
