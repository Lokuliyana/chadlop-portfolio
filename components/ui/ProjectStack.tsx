'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import ProjectCard from '../reusable/ProjectCard'

const projects = [
  {
    title: 'Danidu.com – Enterprise Tuition Platform',
    description: [
      'A comprehensive enterprise-grade tuition platform engineered to support high-concurrency user loads.',
      'Features a custom video management system handling massive data throughput.',
      'Includes a secure, automated examination engine with real-time analytics.',
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
      'Leverages Redis caching for sub-millisecond query responses.',
    ],
    tech: ['Django', 'PostgreSQL', 'Wit.AI', 'Redis'],
    image: '/projects/room-booking.jpeg',
    liveUrl: 'https://room-booking.chandupa.dev',
  },
  {
    title: 'Euphoria – Mindful Application',
    description: [
      'A holistic digital wellness ecosystem combining mindfulness tools with a seamless e-commerce experience.',
      'Built on a modular architecture with server-side rendering.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_euphoria_refined.png',
    liveUrl: 'https://euphoria-hiru.vercel.app/',
  },
  {
    title: 'Vogue Essentials Store',
    description: [
      'A high-performance e-commerce storefront focusing on conversion optimization and speed.',
      'Implements advanced asset delivery strategies and lazy loading.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_vogue_refined.png',
    liveUrl: 'https://vogue-essentials-store.vercel.app/',
  },
  {
    title: 'Artisan Roast',
    description: [
      'An immersive digital experience for a boutique coffee brand.',
      'Engineered for consistent 60FPS performance across devices.',
    ],
    tech: ['Next.js', 'React', 'Framer Motion'],
    image: '/projects/project_artisan_refined.png',
    liveUrl: 'https://artisan-roast.vercel.app/',
  },
  {
    title: 'Luminous',
    description: [
      'A modern, scalable web application built on a strict design system.',
      'Demonstrates best practices in component-driven architecture.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_luminous_refined.png',
    liveUrl: 'https://luminous-eta.vercel.app/',
  },
  {
    title: 'Chandupa.dev – Personal Portfolio',
    description: [
      'A cutting-edge personal portfolio showcasing technical prowess through interactive 3D elements.',
      'Optimized for search engines and accessibility.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_portfolio_refined.png',
    liveUrl: 'https://chandupadev.vercel.app/',
  },
  {
    title: 'Sri Ananda Dhamma School',
    description: [
      'A digital transformation initiative for educational management.',
      'Focuses on data integrity, user-friendly interfaces, and scalable backend architecture.',
    ],
    tech: ['Next.js', 'React'],
    image: '/projects/project_dhamma_refined.png',
    liveUrl: 'https://sri-ananda-dhamma-school-4i9y.vercel.app/',
  },
]

function Card({ 
  project, 
  i, 
  progress, 
  range, 
  targetScale 
}: { 
  project: any, 
  i: number, 
  progress: MotionValue<number>, 
  range: [number, number], 
  targetScale: number 
}) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative -top-[25%] h-[500px] w-[1000px] rounded-3xl p-10 origin-top bg-gray-900/90 border border-white/10 backdrop-blur-xl shadow-2xl"
      >
        <div className="flex h-full gap-10">
          <div className="w-[40%] flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white/5 text-xs text-cyan-300 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
                {project.description.map((desc: string, idx: number) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>
            </div>
            
            <a 
              href={project.liveUrl}
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium mt-4"
            >
              Visit Live Site →
            </a>
          </div>

          <div className="relative w-[60%] h-full rounded-2xl overflow-hidden border border-white/10 bg-black">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectStack() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={container} className="relative mt-[20vh] mb-[20vh]">
      <div className="sticky top-0 h-[20vh] flex items-center justify-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          Selected Works
        </h2>
      </div>
      
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05)
        return (
          <Card 
            key={i} 
            i={i} 
            project={project} 
            progress={scrollYProgress} 
            range={[i * .25, 1]} 
            targetScale={targetScale} 
          />
        )
      })}
    </section>
  )
}
