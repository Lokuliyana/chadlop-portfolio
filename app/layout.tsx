// app/layout.tsx
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/ui/NavBar'
import LayoutWrapper from '@/components/reusable/LayoutWrapper'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chadlop — Where Ideas Evolve into Digital Power',
  description: 'We build next-gen software solutions that scale, inspire, and perform.',
  openGraph: {
    title: 'Chadlop',
    description: 'Custom software, elegant design, and deep tech—engineered with love.',
    url: 'https://chadlop.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`bg-background text-white ${poppins.variable} font-sans antialiased transition-colors duration-300`}
      >
        <LayoutWrapper>
        <div className="min-h-screen flex flex-col">
          {/* 🧠 Global NavBar component here */}
          <Navbar />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          {/* 📬 Footer or Contact Component */}
          {/* <Footer /> */}
        </div>
        </LayoutWrapper>
      </body>
    </html>
  )
}
