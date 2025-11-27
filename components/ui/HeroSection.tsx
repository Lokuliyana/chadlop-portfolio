'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaArrowDown, FaLinkedin, FaEnvelope, FaPhone, FaRocket, FaFileAlt, FaCheckCircle, FaLightbulb } from 'react-icons/fa';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import avatarAnimation from '@/public/lottie/Animation - 1746417621387.json';

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-20 h-20" />,
});

const greetings = [
  `<span class='text-white'>Hi, I’m <strong class='text-cyan-400'>Chandupa Lokuliyana</strong> <span class='inline-block text-yellow-400 animate-wave'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg></span><br/> Full-Stack Software Engineer</span>`,
  `<span class='text-cyan-300 italic'>Building scalable systems & enterprise solutions <span class='inline-block align-middle'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg></span></span>`,
];

export default function HeroSection() {
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoopIndex((prev) => (prev + 1) % greetings.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-20 overflow-hidden flex flex-col md:flex-row items-center justify-between"
    >
      {/* Particles background removed in favor of global layout particles */}
      {/* <div className="absolute inset-0 -z-10 pointer-events-none">
        <Particles id="hero-particles" options={particlesOptions} />
      </div> */}

      {/* Left Text */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="z-10 md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[0_0_25px_cyan] leading-relaxed min-h-[160px] md:min-h-[180px] flex items-center">
          <Typewriter
            key={loopIndex}
            options={{
              strings: [greetings[loopIndex]],
              autoStart: true,
              loop: false,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </h1>

        <p className="text-lg text-cyan-300 italic max-w-md">
          Detail-oriented engineer specializing in scalable web apps, backend API design, and enterprise systems.
        </p>
        <p className="text-sm text-gray-400 font-mono">
          Stack: Next.js • Node.js • Django • GoLang • Cloud Architecture
        </p>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-gray-300 text-sm">
          <a href="mailto:lokuliyanacp@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition">
            <FaEnvelope /> lokuliyanacp@gmail.com
          </a>
          <a href="tel:+94758515818" className="flex items-center gap-2 hover:text-cyan-400 transition">
            <FaPhone /> +94 758515818
          </a>
          <a href="https://linkedin.com/in/chandupa-lokuliyana" target="_blank" className="flex items-center gap-2 hover:text-cyan-400 transition">
            <FaLinkedin /> linkedin.com/in/chandupa-lokuliyana
          </a>
        </div>

        <div className="flex gap-4 mt-6">
          <Link href="#projects" passHref>
            <JellyButton>
              <span className="flex items-center gap-2"><FaRocket /> View Projects</span>
            </JellyButton>
          </Link>
          <JellyButton variant="glow">
            <a href="/Chandupa Poorna Lokuliyana.pdf" download className="flex items-center gap-2">
              <FaFileAlt /> Download Resume
            </a>
          </JellyButton>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-cyan-400 mt-10 text-2xl"
        >
          <FaArrowDown className="drop-shadow-[0_0_10px_cyan]" />
        </motion.div>
      </motion.div>

      {/* Right Terminal Box + Lottie */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="z-10 md:w-1/2 mt-12 md:mt-0 flex justify-center"
      >
        <div className="relative bg-white/5 border border-cyan-400 backdrop-blur-md rounded-xl p-5 shadow-lg shadow-cyan-500/30 w-[320px] h-[240px] animate-floatingSlow">
          <div className="font-mono text-green-400 text-sm space-y-2 pb-4">
            <p>~$ npm run dev</p>
            <p>
              Starting server on <span className="text-cyan-300">localhost:3000</span>...
            </p>
            <p className="text-white flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Server started successfully!</p>
            <p className="text-yellow-300 flex items-center gap-2"><FaLightbulb className="text-yellow-400" /> Waiting for client requests...</p>
          </div>

          <div className="absolute bottom-[-36px] left-1/2 -translate-x-1/2 drop-shadow-[0_4px_12px_rgba(0,255,255,0.4)]">
            <Lottie animationData={avatarAnimation} loop autoplay className="w-40 h-40" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function JellyButton({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: 'glow';
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={`relative overflow-hidden px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
        variant === 'glow'
          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-[0_0_15px_rgba(0,255,255,0.4)]'
          : 'bg-transparent border border-cyan-300 text-cyan-200 hover:bg-cyan-600/20'
      }`}
    >
      {children}
    </motion.button>
  );
}
