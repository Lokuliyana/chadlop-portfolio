// app/layout.tsx
import '@/app/globals.css';
import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import Navbar from '@/components/ui/NavBar';
import LayoutWrapper from '@/components/reusable/LayoutWrapper';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chadlop — Where Ideas Evolve into Digital Power',
  description: 'We build next-gen software solutions that scale, inspire, and perform.',
  openGraph: {
    title: 'Chadlop',
    description: 'Custom software, elegant design, and deep tech—engineered with love.',
    url: 'https://chadlop.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`bg-background text-white ${outfit.variable} ${inter.variable} font-sans antialiased transition-colors duration-300 overflow-x-hidden`}
      >
        <LayoutWrapper>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}
          </div>
        </LayoutWrapper>
      </body>
    </html>
  );
}
