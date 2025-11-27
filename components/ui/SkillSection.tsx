'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiNextdotjs,
  SiReact,
  SiDjango,
  SiNodedotjs,
  SiGoland,
  SiMysql,
  SiGit,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiLua,
  SiRubyonrails,
  SiDocker,
  SiJira,
  SiExpress,
  SiMongodb,
} from 'react-icons/si'
import {
  FaServer,
  FaDatabase,
  FaCode,
} from 'react-icons/fa'


const skillGroups = {
  "Top Skills": [
    { name: 'Full-Stack Arch', icon: FaCode, level: 95 },
    { name: 'Backend Eng', icon: FaServer, level: 90 },
    { name: 'DB Optimization', icon: FaDatabase, level: 85 },
    { name: 'Modular UI', icon: SiReact, level: 90 },
  ],
  "Languages": [
    { name: 'JavaScript/TS', icon: SiTypescript, level: 95 },
    { name: 'Python', icon: SiPython, level: 90 },
    { name: 'Go', icon: SiGoland, level: 75 },
    { name: 'SQL/MySQL', icon: SiMysql, level: 85 },
    { name: 'C++', icon: SiCplusplus, level: 70 },
    { name: 'Lua', icon: SiLua, level: 60 },
  ],
  "Frameworks": [
    { name: 'Next.js', icon: SiNextdotjs, level: 95 },
    { name: 'Node.js', icon: SiNodedotjs, level: 90 },
    { name: 'Express.js', icon: SiExpress, level: 90 },
    { name: 'Django', icon: SiDjango, level: 85 },
    { name: 'Rails', icon: SiRubyonrails, level: 60 },
  ],
  "Tools": [
    { name: 'Docker', icon: SiDocker, level: 80 },
    { name: 'Git', icon: SiGit, level: 90 },
    { name: 'Jira', icon: SiJira, level: 85 },
    { name: 'MongoDB', icon: SiMongodb, level: 85 },
  ]
}

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <section id="skills" className="py-28 px-6 md:px-12 bg-[#0e1b2c]/80 backdrop-blur-md text-white relative z-10 overflow-hidden">
      <h2 className="text-3xl text-center font-bold text-white mb-14 drop-shadow-[0_0_8px_cyan] flex items-center justify-center gap-3">
        <FaCode className="text-cyan-400" /> Technical Skills
      </h2>

      <div ref={ref} className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {Object.entries(skillGroups).map(([group, skills], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-[#101c2c] p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-colors"
          >
            <h3 className="text-xl font-semibold text-cyan-200 mb-6 border-b border-cyan-500/30 pb-2">
              {group}
            </h3>
            <div className="space-y-5">
              {skills.map(({ name, level, icon: Icon }, j) => (
                <div key={j}>
                  <div className="flex items-center gap-3 mb-1">
                    <Icon className="text-lg text-cyan-300" />
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                  <div className="bg-gray-800 rounded-full h-2 overflow-hidden relative">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md"
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${level}%` : '0%' }}
                      transition={{ duration: 1.2, delay: j * 0.05 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
