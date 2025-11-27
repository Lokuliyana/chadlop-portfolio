'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Folder, User, Cpu, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', icon: <Home /> },
  { name: 'Projects', icon: <Folder /> },
  { name: 'About', icon: <User /> },
  { name: 'Skills', icon: <Cpu /> },
  { name: 'Contact', icon: <Mail /> },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        <h1 className="text-2xl font-bold tracking-widest text-white uppercase font-heading">
          Chandupa<span className="text-cyan-400">.dev</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="group relative hover:text-white transition-colors duration-300"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_cyan] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-cyan-300 hover:text-white transition" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-[80%] bg-[#0f172a]/95 backdrop-blur-2xl border-l border-white/10 text-white p-8 z-50 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-bold tracking-widest uppercase text-cyan-400">Menu</h2>
              <button className="text-gray-400 hover:text-white transition" onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <ul className="space-y-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-xl font-medium text-gray-300 hover:text-cyan-400 hover:pl-2 transition-all duration-300"
                  >
                    <span className="text-cyan-500/80">{item.icon}</span>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
