'use client'

import ProjectCard from '../reusable/ProjectCard'
import { motion } from 'framer-motion'


const projects = [
  {
    title: 'Danidu.com – Enterprise Tuition Platform',
    description: [
      'Architected a multi-tenant platform supporting 500+ active students and 40+ monthly classes.',
      'Engineered a custom recording management system handling 50GB+ of annual video content.',
      'Optimized MongoDB aggregation pipelines, improving backend query throughput by 32%.',
      'Implemented a secure, randomized quiz engine with automated scoring and performance analytics.',
    ],
    tech: ['Next.js', 'Express.js', 'MongoDB', 'Node.js'],
    image: '/projects/danidu.png',
    liveUrl: 'https://danidu.com',
    githubUrl: '#',
  },
  {
    title: 'Intelligent Spatial Management System (FYP)',
    description: [
      'Developed a real-time room booking system managing concurrency for 100+ rooms.',
      'Integrated Wit.AI NLP for a chatbot, reducing manual support queries by 30%.',
      'Reduced SQL query latency by 25% through strategic indexing and Redis caching layers.',
    ],
    tech: ['Django', 'PostgreSQL', 'Wit.AI', 'Redis'],
    image: '/projects/room-booking.jpg',
    liveUrl: 'https://room-booking.chandupa.dev',
    githubUrl: 'https://github.com/Lokuliyana/room-booking-app',
  },
  {
    title: 'Euphoria – Mindful Application',
    description: [
      'Building a modular mindfulness platform with integrated e-commerce and content delivery.',
      'Achieved a 40% reduction in First Contentful Paint (FCP) via Next.js server-side rendering.',
      'Status: Under Development',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/euphoria.png',
    liveUrl: 'https://euphoria-hiru.vercel.app/',
    githubUrl: '#',
  },
  {
    title: 'Vogue Essentials Store',
    description: [
      'Developed a high-performance e-commerce frontend with optimized asset delivery.',
      'Improved page load metrics by 35% using lazy loading and image optimization techniques.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/vogue-essentials.png',
    liveUrl: 'https://vogue-essentials-store.vercel.app/',
    githubUrl: '#',
  },
  {
    title: 'Artisan Roast',
    description: [
      'Designed a responsive landing page with complex Framer Motion animations.',
      'Focus on smooth 60FPS transitions and interactive UI elements.',
    ],
    tech: ['Next.js', 'React', 'Framer Motion'],
    image: '/projects/artisan-roast.png',
    liveUrl: 'https://artisan-roast.vercel.app/',
    githubUrl: '#',
  },
  {
    title: 'Luminous',
    description: [
      'Implemented a modern web application focusing on component reusability and design system consistency.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/luminous.png',
    liveUrl: 'https://luminous-eta.vercel.app/',
    githubUrl: '#',
  },
  {
    title: 'Chandupa.dev – Personal Portfolio',
    description: [
      'Engineered an SEO-optimized portfolio with dynamic content and interactive 3D elements.',
    ],
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/projects/chandupa-portfolio.png',
    liveUrl: 'https://chandupadev.vercel.app/',
    githubUrl: '#',
  },
  {
    title: 'Sri Ananda Dhamma School',
    description: [
      'Architecting a digital management system for student records and class scheduling.',
    ],
    tech: ['Next.js', 'React'],
    image: '/projects/dhamma-school.png',
    liveUrl: 'https://sri-ananda-dhamma-school-4i9y.vercel.app/',
    githubUrl: '#',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#0f172a] text-white relative overflow-hidden">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <ProjectCard key={i} project={proj} />
        ))}
      </div>
    </section>
  )
}
