'use client'

import { useState, useRef } from 'react'

import ProjectCard from '../reusable/ProjectCard'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const projects = [
  {
    title: 'Danidu.com – Enterprise Tuition Platform',
    description: [
      'A comprehensive enterprise-grade tuition platform engineered to support high-concurrency user loads.',
      'Features a custom video management system handling massive data throughput and optimized database architecture for superior performance.',
      'Includes a secure, automated examination engine with real-time analytics.',
    ],
    tech: ['Next.js', 'Express.js', 'MongoDB', 'Node.js'],
    image: '/projects/project_danidu_refined.png',
    liveUrl: 'https://danidu.com',
  },
  {
    title: 'Intelligent Spatial Management System (FYP)',
    description: [
      'An intelligent, real-time spatial management system designed for complex scheduling needs and high-volume concurrency.',
      'Integrates NLP-driven chatbots for automated support, significantly reducing manual administrative overhead.',
      'Leverages Redis caching and strategic indexing to ensure sub-millisecond query responses.',
    ],
    tech: ['Django', 'PostgreSQL', 'Wit.AI', 'Redis'],
    image: '/projects/room-booking.jpeg',
    liveUrl: 'https://room-booking.chandupa.dev',
  },
  {
    title: 'Euphoria – Mindful Application',
    description: [
      'A holistic digital wellness ecosystem combining mindfulness tools with a seamless e-commerce experience.',
      'Built on a modular architecture with server-side rendering, achieving significant performance gains and SEO optimization.',
      'Currently under active development with a focus on scalability.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_euphoria_refined.png',
    liveUrl: 'https://euphoria-hiru.vercel.app/',
  },
  {
    title: 'Vogue Essentials Store',
    description: [
      'A high-performance e-commerce storefront focusing on conversion optimization and speed.',
      'Implements advanced asset delivery strategies and lazy loading to ensure instant page interactivity and a smooth user journey.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_vogue_refined.png',
    liveUrl: 'https://vogue-essentials-store.vercel.app/',
  },
  {
    title: 'Artisan Roast',
    description: [
      'An immersive digital experience for a boutique coffee brand, featuring cinema-grade animations and fluid transitions.',
      'Engineered for consistent 60FPS performance across devices using hardware-accelerated motion libraries.',
    ],
    tech: ['Next.js', 'React', 'Framer Motion'],
    image: '/projects/project_artisan_refined.png',
    liveUrl: 'https://artisan-roast.vercel.app/',
  },
  {
    title: 'Luminous',
    description: [
      'A modern, scalable web application built on a strict design system to ensure visual consistency and code reusability.',
      'Demonstrates best practices in component-driven architecture and state management.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_luminous_refined.png',
    liveUrl: 'https://luminous-eta.vercel.app/',
  },
  {
    title: 'Chandupa.dev – Personal Portfolio',
    description: [
      'A cutting-edge personal portfolio showcasing technical prowess through interactive 3D elements and dynamic content.',
      'Optimized for search engines and accessibility while pushing the boundaries of web graphics.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_portfolio_refined.png',
    liveUrl: 'https://chandupadev.vercel.app/',
  },
  {
    title: 'Sri Ananda Dhamma School',
    description: [
      'A digital transformation initiative for educational management, streamlining student records and scheduling.',
      'Focuses on data integrity, user-friendly interfaces, and scalable backend architecture.',
    ],
    tech: ['Next.js', 'React'],
    image: '/projects/project_dhamma_refined.png',
    liveUrl: 'https://sri-ananda-dhamma-school-4i9y.vercel.app/',
  },
]

export default function ProjectsSection() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Transform vertical scroll to horizontal movement
  // We want the projects to scroll left as we scroll down
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-black/0">
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-start overflow-hidden">
        
        {/* Left Side - Static Header */}
        <div className="w-full lg:w-1/3 h-fit lg:h-full p-6 md:p-12 flex flex-col justify-center z-10 bg-black/0 backdrop-blur-sm lg:backdrop-blur-none">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent inline-block">
              Selected Works
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-3 h-8 md:h-12 ml-2 align-middle bg-cyan-400"
              />
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md">
              A curated collection of my technical endeavors.
              <br className="hidden md:block" />
              <span className="text-sm text-gray-500 mt-4 block">
                (Scroll down to explore)
              </span>
            </p>
          </motion.div>
        </div>

        {/* Right Side - Horizontal Scroll Track */}
        <div className="w-full lg:w-2/3 h-full flex items-center pl-6 lg:pl-0 overflow-hidden">
          {/* Desktop: Horizontal Scroll */}
          <motion.div 
            style={{ x }} 
            className="hidden lg:flex gap-8 pr-12"
          >
            {projects.map((proj, i) => (
              <div key={i} className="w-[600px] flex-shrink-0">
                <ProjectCard 
                  project={proj} 
                  priority={i < 2}
                  onPreview={() => {
                    setIndex(i)
                    setOpen(true)
                  }}
                />
              </div>
            ))}
          </motion.div>

          {/* Mobile: Vertical Scroll (Standard Grid) */}
          <div className="lg:hidden flex flex-col gap-8 pb-24 w-full pr-6 overflow-y-auto h-full">
             {projects.map((proj, i) => (
              <div key={i} className="w-full">
                <ProjectCard 
                  project={proj} 
                  priority={i < 2}
                  onPreview={() => {
                    setIndex(i)
                    setOpen(true)
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={projects.map((p) => ({ src: p.image, alt: p.title }))}
        render={{
          slide: ({ slide }) => (
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={slide.src} 
                alt={slide.alt || "Project Preview"} 
                className="max-h-[85vh] max-w-[90vw] object-contain"
              />
            </div>
          ),
        }}
      />
    </section>
  )
}
