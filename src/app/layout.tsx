/**
 * Root Layout
 * 
 * Main application layout for Vajra Renew
 * Includes both Solar and Battery businesses
 * 
 * UPDATED: Added FloatingBatteryButton for cross-promotion
 * 
 * @layout
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FloatingBatteryButton from '@/components/layout/FloatingBatteryButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vajrarenew.com'),
  title: {
    default: 'Vajra Renew - Solar Energy Solutions in Telangana | 10+ Years Experience',
    template: '%s | Vajra Renew',
  },
  description: 'Telangana\'s most trusted solar installation partner. 1000+ installations, government subsidy assistance up to ₹78,000, 25-year warranty. Residential, commercial & industrial solar solutions.',
  keywords: [
    'solar panels Hyderabad',
    'solar installation Telangana',
    'rooftop solar',
    'PM Surya Ghar Yojana',
    'solar subsidy Hyderabad',
    'solar companies Telangana',
  ].join(', '),
  authors: [{ name: 'Vajra Renew' }],
  creator: 'Vajra Renew',
  publisher: 'Vajra Renew',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vajrarenew.com',
    siteName: 'Vajra Renew',
    title: 'Vajra Renew - Solar Energy Solutions in Telangana',
    description: '1000+ installations across Hyderabad. Government subsidy assistance. 25-year warranty.',
    images: [
      {
        url: '/images/hero-background.png',
        width: 1920,
        height: 1080,
        alt: 'Vajra Renew Solar Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vajra Renew - Solar Energy Solutions Telangana',
    description: '1000+ installations. 25-year warranty. Government subsidy assistance.',
    images: ['/images/hero-background.png'],
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
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // other: {
    //   'bing': 'your-bing-verification-code',
    // },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1e293b" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-square.png" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {/* Main Content */}
        {children}

        {/* Floating Battery Button - Shows on solar pages */}
        <FloatingBatteryButton />

        {/* Analytics Scripts (add when ready) */}
        {/* Google Analytics */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script> */}
      </body>
    </html>
  );
}