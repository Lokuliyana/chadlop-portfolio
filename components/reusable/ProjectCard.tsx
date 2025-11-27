'use client'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import Image from 'next/image'

type Project = {
  title: string
  description: string[]
  tech: string[]
  image: string
  preview?: string
  liveUrl: string
}

export default function ProjectCard({ 
  project, 
  onPreview,
  priority = false
}: { 
  project: Project
  onPreview: () => void 
  priority?: boolean
}) {
  return (
      <motion.div
        className="bg-gray-900/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500 group flex flex-col h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* 🖥️ Browser Window Frame & Header */}
        <div className="bg-gray-800/80 border-b border-white/5 p-3 flex items-center gap-3">
          {/* Window Controls */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>

          {/* Address Bar / Title */}
          <div className="flex-1 bg-black/20 h-7 rounded-md border border-white/5 flex items-center px-3 justify-between group/header">
            <span className="text-xs text-gray-400 font-mono truncate max-w-[150px] group-hover:text-cyan-300 transition-colors">
              {project.title}
            </span>
            
            <a
              href={project.liveUrl}
              target="_blank"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
              title="Visit Live Site"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 📸 Image Container (Clickable for Preview) */}
        <div 
          onClick={onPreview}
          className="relative aspect-video w-full block overflow-hidden group-hover:opacity-90 transition-opacity cursor-pointer"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            priority={priority}
          />
          
          {/* Hover Overlay with Eye Icon */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-xl">
              <FaEye className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </motion.div>
  )
}
