'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const projects = [
  {
    title: 'Danidu.com',
    description: 'Enterprise tuition platform supporting high-concurrency loads.',
    tech: ['Next.js', 'Express.js', 'MongoDB'],
    image: '/projects/project_danidu_refined.png',
    liveUrl: 'https://danidu.com',
  },
  {
    title: 'Vogue Essentials',
    description: 'High-performance e-commerce storefront.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_vogue_refined.png',
    liveUrl: 'https://vogue-essentials-store.vercel.app/',
  },
  {
    title: 'Dhamma School',
    description: 'Educational management platform.',
    tech: ['Next.js', 'React'],
    image: '/projects/project_dhamma_refined.png',
    liveUrl: 'https://sri-ananda-dhamma-school-4i9y.vercel.app/',
  },
  {
    title: 'Euphoria',
    description: 'Digital wellness ecosystem with e-commerce.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_euphoria_refined.png',
    liveUrl: 'https://euphoria-hiru.vercel.app/',
  },
  {
    title: 'Artisan Roast',
    description: 'Immersive coffee brand experience.',
    tech: ['Next.js', 'Framer Motion'],
    image: '/projects/project_artisan_refined.png',
    liveUrl: 'https://artisan-roast.vercel.app/',
  },
  {
    title: 'Luminous',
    description: 'Scalable web app with strict design system.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/project_luminous_refined.png',
    liveUrl: 'https://luminous-eta.vercel.app/',
  },
  {
    title: 'Chandupa.dev',
    description: 'Interactive 3D portfolio.',
    tech: ['Next.js', 'Three.js'],
    image: '/projects/project_portfolio_refined.png',
    liveUrl: 'https://chandupadev.vercel.app/',
  },
  {
    title: 'Room Booking',
    description: 'Real-time spatial management with NLP chatbots.',
    tech: ['Django', 'PostgreSQL', 'Redis'],
    image: '/projects/room-booking.jpeg',
    liveUrl: 'https://room-booking.chandupa.dev',
  },
]

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-gray-900/40 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col"
    >
      {/* Image Section */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((t: string, i: number) => (
            <span 
              key={i} 
              className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
            >
              {t}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
          {project.description}
        </p>

        <a
          href={project.liveUrl}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-medium text-white group/link w-fit"
        >
          <span className="border-b border-cyan-500/0 group-hover/link:border-cyan-500 transition-colors">
            View Project
          </span>
          <FaArrowRight className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform text-cyan-400" />
        </a>
      </div>
    </motion.div>
  )
}

export default function ProjectStickyGrid() {
  return (
    <section className="relative py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Sticky Header */}
        <div className="md:w-1/3 lg:w-1/4 sticky top-32 self-start">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 drop-shadow-sm"
          >
            Selected Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed mb-8"
          >
            A curated collection of projects that define my journey in engineering and design. Each piece represents a unique challenge and a creative solution.
          </motion.p>
          
          <div className="hidden md:block w-12 h-1 bg-cyan-500/30 rounded-full" />
        </div>

        {/* Right Column: Scrollable Grid */}
        <div className="md:w-2/3 lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
