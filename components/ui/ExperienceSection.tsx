'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt } from 'react-icons/fa'

const experiences = [
  {
    role: 'Full Stack Intern (R&D Team)',
    company: 'Prologics Solutions',
    period: 'May 2025 – Present',
    description: [
      'Developing enterprise modules for ERP and Procurement systems using the MERN stack.',
      'Integrating MCP server/client architectures to automate internal R&D workflows.',
      'Prototyping AI-driven features using OpenAI APIs to enhance system intelligence.',
      'Optimizing backend performance via data model restructuring and caching strategies.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'ICEIEOS',
    period: 'Feb 2025 – May 2025',
    description: [
      'Implemented production-ready UI components and RESTful API endpoints using Next.js and Node.js.',
      'Enhanced authentication security protocols for scalable user management.',
      'Developed reusable frontend libraries to accelerate feature delivery cycles.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-[#0f172a] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 drop-shadow-[0_0_10px_cyan]"
        >
          💼 Professional Experience
        </motion.h2>

        <div className="space-y-12 relative border-l-2 border-cyan-500/30 ml-4 md:ml-10 pl-8 md:pl-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 bg-cyan-500 rounded-full border-4 border-[#0f172a] shadow-[0_0_10px_cyan]" />

              <div className="bg-glass p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-lg text-cyan-300 font-medium">{exp.company}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-3 py-1 rounded-full w-fit">
                    <FaCalendarAlt className="text-cyan-400" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
