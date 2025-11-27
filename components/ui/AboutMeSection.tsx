'use client'

import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Tooltip } from 'react-tooltip'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'

const education = [
  { year: '2024 - 2025', title: 'BSc in IT & Management', institution: 'University of Moratuwa', details: 'Specializing in IT governance, systems design, and MIS.' },
  { year: '2022 - 2025', title: 'Bachelor of Computer Science', institution: 'Edith Cowan University', details: 'Second Class Upper Division' },
  { year: '2022', title: 'Diploma in Computing', institution: 'ACBT', details: '' },
]

const certifications = [
  'HRM — IBS Campus',
  'Digital Marketing — IBS Campus',
  'Business Management — LPEC Campus',
]

const badges = [
  { label: 'Full-Stack Engineer', tooltip: 'Scalable Web Apps & APIs' },
  { label: 'ECU Graduate', tooltip: 'BSc Computer Science' },
  { label: 'UoM Student', tooltip: 'BSc IT & Management' },
  { label: 'Leader', tooltip: 'Debating & ICT Society President' },
]

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-16 text-center drop-shadow-sm"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Avatar & Tags */}
          <div className="flex flex-col items-center">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.3)] mb-8"
            >
              <Image
                src="/Chandupa-Avatarr.png"
                alt="Chandupa Portrait"
                fill
                className="object-cover object-top"
                priority
              />
            </Tilt>

            {/* Tags / Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  data-tooltip-id={`badge-${i}`}
                  className="bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-cyan-100 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-default"
                >
                  {badge.label}
                  <Tooltip id={`badge-${i}`} content={badge.tooltip} className="z-50" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio, Timeline, Certs */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <p className="text-xl text-gray-200 leading-relaxed font-light">
                I’m a detail-oriented <span className="text-cyan-400 font-semibold">Full-Stack Software Engineer</span> with a passion for building scalable, enterprise-grade systems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My expertise lies in architecting robust backend APIs, optimizing database workflows, and crafting intuitive frontend experiences. I thrive in solving complex technical challenges and delivering production-ready platforms.
              </p>
            </motion.div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <FaGraduationCap className="text-cyan-400" /> Education
              </h3>
              <div className="space-y-8 pl-4 border-l-2 border-cyan-500/30 ml-2">
                {education.map((edu, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-6"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[21px] top-1.5 w-4 h-4 bg-cyan-500 rounded-full border-2 border-[#0f172a] shadow-[0_0_10px_cyan]" />
                    
                    <h4 className="text-lg font-bold text-white">{edu.title}</h4>
                    <p className="text-cyan-300 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-500 mb-1">{edu.year}</p>
                    {edu.details && <p className="text-sm text-gray-400 italic">{edu.details}</p>}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <FaCertificate className="text-cyan-400" /> Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-cyan-950/40 text-cyan-200 border border-cyan-500/20 px-4 py-2 rounded-lg text-sm hover:bg-cyan-900/40 transition-colors"
                  >
                    {cert}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
