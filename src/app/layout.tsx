import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vajrarenew.com'),
  title: 'Vajra Renew | Solar Energy Solutions in Telangana',
  description: 'Trusted solar installation partner in Telangana with 6+ years experience. Residential, commercial, and industrial solar solutions.',
  keywords: ['solar energy', 'solar panels', 'Telangana', 'renewable energy', 'solar installation', 'solar company', 'rooftop solar', 'PM Surya Ghar'],
  authors: [{ name: 'Vajra Renew' }],
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
  openGraph: {
    title: 'Vajra Renew | Solar Energy Solutions',
    description: 'Trusted solar installation partner in Telangana with 6+ years experience',
    url: 'https://vajrarenew.com',
    siteName: 'Vajra Renew',
    images: [
      {
        url: '/images/vajrarenew.png',
        width: 1200,
        height: 630,
        alt: 'Vajra Renew Solar Energy Solutions Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vajra Renew | Solar Energy Solutions',
    description: 'Trusted solar installation partner in Telangana with 6+ years experience',
    images: ['/images/vajrarenew.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/vajrarenew.png',
  },
  alternates: {
    canonical: 'https://vajrarenew.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1a2332" />
      </head>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}