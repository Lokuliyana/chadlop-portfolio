'use client'

import { useRef, useEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Tooltip } from 'react-tooltip'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { FaGraduationCap, FaCertificate, FaUserTie } from 'react-icons/fa'

// const R3FCanvas = dynamic(() => import('../visuals/R3FCanvas'), { ssr: false })

const education = [
  { year: '2024 - 2025', title: 'BSc in IT & Management', institution: 'University of Moratuwa', details: 'Specializing in IT governance, systems design, and MIS.' },
  { year: '2022 - 2025', title: 'Bachelor of Computer Science (Software Engineering)', institution: 'Edith Cowan University', details: 'Second Class Upper Division' },
  { year: '2022', title: 'Diploma in Computing', institution: 'Australian College of Business and Technologies' },
  { year: '2024', title: 'GCE A/L', institution: 'Thurstan College', details: '3As (Z-Score: 1.9455)' },
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
    <motion.section
      id="about"
      className="relative py-28 px-6 md:px-12 bg-[#0e1b2c] overflow-hidden z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl text-center font-bold text-white mb-14 drop-shadow-[0_0_8px_cyan] flex items-center justify-center gap-3">
        <FaUserTie className="text-cyan-400" /> About Me – Professional Summary
      </h2>

      <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto items-start">
        {/* Left Avatar + Badges */}
        <div className="relative flex flex-col items-center">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1500}
            className="w-60 h-60 rounded-full overflow-hidden border-4 border-cyan-500 ring-1 ring-offset-2 ring-cyan-300 shadow-lg bg-[#0e1b2c]/40 animate-floatingSlow mb-6"
          >
            <Image
              src="/Chandupa-Avatarr.png"
              alt="Chandupa Portrait"
              width={240}
              height={240}
              className="object-contain w-full h-full drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]"
              priority
            />
          </Tilt>

          <div className="flex flex-wrap justify-center gap-4 relative z-20">
            {badges.map((badge, i) => (
              <div
                key={i}
                data-tooltip-id={`badge-${i}`}
                className="bg-cyan-900/30 text-white text-sm px-4 py-2 rounded-full hover:scale-105 transition shadow-md cursor-pointer border border-cyan-500/20"
              >
                {badge.label}
                <Tooltip id={`badge-${i}`} content={badge.tooltip} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-300 leading-relaxed space-y-4"
          >
            <p>
              Detail-oriented <strong>Full-Stack Software Engineer</strong> with hands-on experience in scalable web application development, enterprise system engineering, and backend API design. Skilled in <strong>JavaScript/TypeScript, Next.js, Node.js, Express.js, Django, and MongoDB/MySQL</strong>.
            </p>
            <p>
              Proven ability to improve system performance, optimize database workflows, and deliver production-quality platforms. Strong leadership background with experience managing teams and driving high-impact technical and organizational outcomes.
            </p>
          </motion.div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyan-300 flex items-center gap-2">
              <FaGraduationCap /> Education
            </h3>
            <div className="space-y-4 pl-4 border-l-2 border-cyan-500/30">
              {education.map((edu, i) => (
                <div key={i} className="relative">
                   <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-cyan-500 rounded-full" />
                   <h4 className="text-white font-medium">{edu.title}</h4>
                   <p className="text-sm text-cyan-200">{edu.institution} <span className="text-gray-400">({edu.year})</span></p>
                   {edu.details && <p className="text-xs text-gray-400 italic">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyan-300 flex items-center gap-2">
              <FaCertificate /> Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, i) => (
                <span key={i} className="text-sm bg-white/5 border border-cyan-500/20 px-3 py-1 rounded-md text-gray-300">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
