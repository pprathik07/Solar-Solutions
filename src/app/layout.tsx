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
  // JSON-LD Organization Schema for Google Search
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vajra Renew",
    "alternateName": "Vajra Renew Solar",
    "description": "Trusted solar installation partner in Telangana with 6+ years experience. Residential, commercial, and industrial solar solutions.",
    "url": "https://vajrarenew.com",
    "logo": "https://vajrarenew.com/images/vajrarenew.png",
    "image": "https://vajrarenew.com/images/vajrarenew.png",
    "telephone": "+91-9246344969", 
    "email": "vajrarenew@gmail.com", 
    "priceRange": "$$",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.3967",
      "longitude": "78.5905"
    },
    "areaServed": {
      "@type": "State",
      "name": "Telangana"
    },
    "serviceArea": {
      "@type": "State",
      "name": "Telangana"
    },
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Solar Installation",
          "description": "Complete solar panel installation for homes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Solar Solutions",
          "description": "Solar energy systems for businesses"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Solar Installation",
          "description": "Large-scale solar installations for industries"
        }
      }
    ],
    "sameAs": [
      // Add your social media URLs here
      "https://www.instagram.com/vajraenterprises.solar?utm_source=qr&igsh=eWl6OHExYjhncmg5",
      // "https://www.linkedin.com/company/vajrarenew",
      // "https://twitter.com/vajrarenew"
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vajra Renew",
    "url": "https://vajrarenew.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vajrarenew.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1a2332" />
        
        {/* JSON-LD Schema Markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}