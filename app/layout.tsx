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
  metadataBase: new URL('https://chandupa-portfolio-sandy.vercel.app'),
  title: {
    default: 'Chandupa Poorna Lokuliyana | Chadlop Portfolio',
    template: '%s | Chandupa Poorna Lokuliyana',
  },
  description: 'Portfolio of Chandupa Poorna Lokuliyana (Chadlop). Software Engineer, Web Developer, and Debater. Explore my projects, skills, and experience.',
  keywords: [
    'chandupa', 'poorna', 'lokuliyana', 'chadlop',
    'chandupa poorna', 'chandupa lokuliyana', 'poorna lokuliyana', 'chandupa chadlop',
    'chandupa portfolio', 'poorna portfolio', 'lokuliyana portfolio', 'chadlop portfolio',
    'chandupa webdeveloper', 'chandupa software engineer', 'chandupa debater',
    'full stack developer', 'react developer', 'next.js developer', 'software engineering'
  ],
  authors: [{ name: 'Chandupa Poorna Lokuliyana', url: 'https://chandupa-portfolio-sandy.vercel.app' }],
  creator: 'Chandupa Poorna Lokuliyana',
  publisher: 'Chadlop',
  openGraph: {
    title: 'Chandupa Poorna Lokuliyana | Chadlop Portfolio',
    description: 'Portfolio of Chandupa Poorna Lokuliyana (Chadlop). Software Engineer, Web Developer, and Debater.',
    url: 'https://chandupa-portfolio-sandy.vercel.app',
    siteName: 'Chadlop Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/Chandupa-Avatarr.png', // Using existing avatar as OG image
        width: 1200,
        height: 630,
        alt: 'Chandupa Poorna Lokuliyana Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandupa Poorna Lokuliyana | Chadlop Portfolio',
    description: 'Software Engineer, Web Developer, and Debater. View my portfolio.',
    creator: '@chadlop', // Replace with actual handle if available
    images: ['/Chandupa-Avatarr.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google6d8e621cdbd1c9eb', // From your uploaded file
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chandupa Poorna Lokuliyana',
  alternateName: 'Chadlop',
  url: 'https://chandupa-portfolio-sandy.vercel.app',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://github.com/chadlop', // Add your actual links
    'https://linkedin.com/in/chandupa', // Add your actual links
    // Add other social profiles here
  ],
  description: 'Software Engineer, Web Developer, and Debater.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
