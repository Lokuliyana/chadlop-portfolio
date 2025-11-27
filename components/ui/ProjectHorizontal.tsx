'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Danidu.com – Enterprise Tuition Platform',
    description: [
      'A comprehensive enterprise-grade tuition platform engineered to support high-concurrency user loads.',
      'Features a custom video management system handling massive data throughput.',
    ],
    tech: ['Next.js', 'Express.js', 'MongoDB', 'Node.js'],
    image: '/projects/project_danidu_refined.png',
    liveUrl: 'https://danidu.com',
  },
  {
    title: 'Intelligent Spatial Management System (FYP)',
    description: [
      'An intelligent, real-time spatial management system designed for complex scheduling needs.',
      'Integrates NLP-driven chatbots for automated support.',
    ],
    tech: ['Django', 'PostgreSQL', 'Wit.AI', 'Redis'],
    image: '/projects/room-booking.jpeg',
    liveUrl: 'https://room-booking.chandupa.dev',
  },
  {
    title: 'Euphoria – Mindful Application',
    description: [
      'A holistic digital wellness ecosystem combining mindfulness tools with a seamless e-commerce experience.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_euphoria_refined.png',
    liveUrl: 'https://euphoria-hiru.vercel.app/',
  },
  {
    title: 'Vogue Essentials Store',
    description: [
      'A high-performance e-commerce storefront focusing on conversion optimization and speed.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_vogue_refined.png',
    liveUrl: 'https://vogue-essentials-store.vercel.app/',
  },
  {
    title: 'Artisan Roast',
    description: [
      'An immersive digital experience for a boutique coffee brand.',
    ],
    tech: ['Next.js', 'React', 'Framer Motion'],
    image: '/projects/project_artisan_refined.png',
    liveUrl: 'https://artisan-roast.vercel.app/',
  },
  {
    title: 'Luminous',
    description: [
      'A modern, scalable web application built on a strict design system.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_luminous_refined.png',
    liveUrl: 'https://luminous-eta.vercel.app/',
  },
  {
    title: 'Chandupa.dev – Personal Portfolio',
    description: [
      'A cutting-edge personal portfolio showcasing technical prowess through interactive 3D elements.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_portfolio_refined.png',
    liveUrl: 'https://chandupadev.vercel.app/',
  },
  {
    title: 'Sri Ananda Dhamma School',
    description: [
      'A digital transformation initiative for educational management.',
    ],
    tech: ['Next.js', 'React'],
    image: '/projects/project_dhamma_refined.png',
    liveUrl: 'https://sri-ananda-dhamma-school-4i9y.vercel.app/',
  },
]

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group relative h-[450px] w-[350px] flex-shrink-0 overflow-hidden rounded-2xl bg-gray-900/50 border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
      {/* Image Area */}
      <div className="absolute inset-0 h-full w-full">
         <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2 drop-shadow-md">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {project.tech.slice(0, 3).map((t: string, i: number) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {t}
            </span>
          ))}
        </div>
        
        <p className="text-gray-300 text-sm line-clamp-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            {project.description[0]}
        </p>
        
        <a
          href={project.liveUrl}
          target="_blank"
          className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium hover:text-white transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"
        >
          View Project <FaExternalLinkAlt className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}

export default function ProjectHorizontal() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Adjust the range based on the number of projects to ensure the last one is visible
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"])

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24">
            {/* Title Section */}
            <div className="flex flex-col justify-center min-w-[300px] pr-12 z-10">
                <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-6 drop-shadow-lg">
                    Selected <br /> Works
                </h2>
                <p className="text-gray-400 text-lg max-w-xs">
                    A curated gallery of my recent technical endeavors and creative experiments.
                </p>
                <div className="mt-8 flex items-center gap-2 text-cyan-400 animate-pulse">
                    <span>Scroll to explore</span>
                    <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
            </div>
            
            {/* Project Cards */}
            {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
            ))}
        </motion.div>
      </div>
    </section>
  )
}
