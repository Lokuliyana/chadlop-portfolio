'use client'

import { useState } from 'react'

import ProjectCard from '../reusable/ProjectCard'
import { motion } from 'framer-motion'
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

  return (
    <section id="projects" className="py-24 px-6 md:px-12 text-white relative overflow-hidden">
      {/* <R3FCanvas /> */}
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 drop-shadow-[0_0_10px_cyan]"
      >
        🚀 Projects – My Living Tech Gallery
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((proj, i) => (
          <ProjectCard 
            key={i} 
            project={proj} 
            priority={i < 2}
            onPreview={() => {
              setIndex(i)
              setOpen(true)
            }}
          />
        ))}
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
