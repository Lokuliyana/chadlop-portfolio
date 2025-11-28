'use client'



import ParticlesBackground from '@/components/reusable/ParticlesBackground'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen text-white">
      {/* Global background particle canvas */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Actual Page Content */}
      {children}
    </div>
  )
}
