'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa'

const projects = [
  {
    title: 'Danidu.com – Enterprise Tuition Platform',
    description: 'A comprehensive enterprise-grade tuition platform engineered to support high-concurrency user loads with custom video management.',
    tech: ['Next.js', 'Express.js', 'MongoDB'],
    image: '/projects/project_danidu_refined.png',
    liveUrl: 'https://danidu.com',
    featured: true,
  },
  {
    title: 'Intelligent Spatial Management System',
    description: 'Real-time spatial management system with NLP-driven chatbots and Redis caching.',
    tech: ['Django', 'PostgreSQL', 'Redis'],
    image: '/projects/room-booking.jpeg',
    liveUrl: 'https://room-booking.chandupa.dev',
    featured: false,
  },
  {
    title: 'Euphoria – Mindful Application',
    description: 'Digital wellness ecosystem combining mindfulness tools with e-commerce.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_euphoria_refined.png',
    liveUrl: 'https://euphoria-hiru.vercel.app/',
    featured: false,
  },
  {
    title: 'Vogue Essentials Store',
    description: 'High-performance e-commerce storefront focusing on conversion optimization.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_vogue_refined.png',
    liveUrl: 'https://vogue-essentials-store.vercel.app/',
    featured: false,
  },
  {
    title: 'Artisan Roast',
    description: 'Immersive digital experience for a boutique coffee brand with cinema-grade animations.',
    tech: ['Next.js', 'Framer Motion'],
    image: '/projects/project_artisan_refined.png',
    liveUrl: 'https://artisan-roast.vercel.app/',
    featured: true,
  },
  {
    title: 'Luminous',
    description: 'Modern, scalable web application built on a strict design system.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_luminous_refined.png',
    liveUrl: 'https://luminous-eta.vercel.app/',
    featured: false,
  },
  {
    title: 'Chandupa.dev',
    description: 'Personal portfolio showcasing interactive 3D elements.',
    tech: ['Next.js', 'React', 'Three.js'],
    image: '/projects/project_portfolio_refined.png',
    liveUrl: 'https://chandupadev.vercel.app/',
    featured: false,
  },
  {
    title: 'Sri Ananda Dhamma School',
    description: 'Digital transformation initiative for educational management.',
    tech: ['Next.js', 'React'],
    image: '/projects/project_dhamma_refined.png',
    liveUrl: 'https://sri-ananda-dhamma-school-4i9y.vercel.app/',
    featured: false,
  },
]

function BentoCard({ project, index }: { project: any, index: number }) {
  const isFeatured = project.featured

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative overflow-hidden rounded-3xl bg-gray-900/40 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] ${
        isFeatured ? 'md:col-span-2 md:row-span-2 min-h-[400px]' : 'md:col-span-1 min-h-[300px]'
      }`}
    >
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.map((t: string, i: number) => (
              <span 
                key={i} 
                className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
          
          <h3 className={`font-bold text-white mb-2 leading-tight ${isFeatured ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
            {project.title}
          </h3>
          
          <p className={`text-gray-400 mb-4 line-clamp-2 ${isFeatured ? 'text-base md:text-lg max-w-lg' : 'text-sm'}`}>
            {project.description}
          </p>

          <a
            href={project.liveUrl}
            target="_blank"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white font-medium transition-all group/link hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            <span>View Project</span>
            <FaArrowRight className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform text-cyan-300" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectBento() {
  return (
    <section className="py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 drop-shadow-sm"
          >
            Selected Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
             A collection of projects that define my journey in engineering and design.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          {projects.map((project, i) => (
            <BentoCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
