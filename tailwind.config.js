// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class', // or 'media'
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dawn: {
          light: '#d6f4ed',
          DEFAULT: '#65B1A5',
          dark: '#283D3B',
        },
        neon: '#00f0ff',
        glow: '#d1fffc',
        background: '#0f0f0f',
        surface: '#1a1a1a',
        primary: '#14f1d9',
        secondary: '#7bffb9',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['"Jockey One"', 'sans-serif'],
        fancy: ['"Irish Grover"', 'cursive'],
      },
      boxShadow: {
        neon: '0 0 20px #00f0ff',
        glass: '0 8px 32px rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        glow: 'glowPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


module.exports = config

