/**
 * Battery & UPS Main Page
 * 
 * Landing page for Vajra Power Solutions - Battery & UPS Division
 * Combines all battery sections with lazy loading for performance
 * 
 * URL: /battery-ups
 * SEO: battery Hyderabad, UPS Telangana, inverter, power backup solutions
 * 
 * @page
 */

import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import BatteryHeroSection from '@/components/sections/battery/BatteryHeroSection';

// Lazy load below-the-fold components for better performance
const BatteryProductsSection = dynamic(
  () => import('@/components/sections/battery/BatteryProductsSection'),
  {
    loading: () => (
      <div className="min-h-[500px] bg-white animate-pulse flex items-center justify-center">
        <div className="text-slate text-sm">Loading products...</div>
      </div>
    ),
    ssr: true, // Enable SSR for SEO
  }
);

const BatteryCalculator = dynamic(
  () => import('@/components/sections/battery/BatteryCalculator'),
  {
    loading: () => (
      <div className="min-h-[600px] bg-orange-50 animate-pulse flex items-center justify-center">
        <div className="text-slate text-sm">Loading calculator...</div>
      </div>
    ),
    ssr: true,
  }
);

const BatteryTestimonials = dynamic(
  () => import('@/components/sections/battery/BatteryTestimonials'),
  {
    loading: () => (
      <div className="min-h-[400px] bg-white animate-pulse"></div>
    ),
    ssr: true,
  }
);

const BrandSection = dynamic(
  () => import('@/components/sections/battery/BrandSection').then(mod => ({ default: mod.BrandSection })),
  {
    loading: () => (
      <div className="min-h-[400px] bg-orange-50 animate-pulse"></div>
    ),
    ssr: true,
  }
);

const BatteryCTASection = dynamic(
  () => import('@/components/sections/battery/BatteryCTASection').then(mod => ({ default: mod.BatteryCTASection })),
  {
    loading: () => (
      <div className="min-h-[300px] bg-orange-600 animate-pulse"></div>
    ),
    ssr: true,
  }
);

// SEO Metadata
export const metadata: Metadata = {
  title: 'Battery & UPS Solutions in Hyderabad | Vajra Power Solutions | Home Inverters, Commercial UPS',
  description: 'Premium battery and UPS solutions in Hyderabad. Home inverters, commercial UPS, industrial battery systems. 5000+ installations across Telangana. Authorized dealer for Okaya, Exide, Amaron, APC. Same-day installation. Call +91-9246344969',
  keywords: [
    'battery Hyderabad',
    'UPS Hyderabad',
    'inverter battery Telangana',
    'home inverter Hyderabad',
    'commercial UPS Hyderabad',
    'Okaya battery Hyderabad',
    'Exide battery Telangana',
    'power backup solutions',
    'inverter installation Hyderabad',
    'online UPS Hyderabad',
    'battery dealers Telangana',
    'APC UPS Hyderabad'
  ].join(', '),
  openGraph: {
    title: 'Battery & UPS Solutions in Hyderabad - Vajra Power Solutions',
    description: '5000+ installations across Telangana. Authorized dealer for Okaya, Exide, Amaron, APC. Same-day installation available.',
    images: ['/images/battery/battery-hero.jpg'],
    locale: 'en_IN',
    type: 'website',
    siteName: 'Vajra Power Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Battery & UPS Solutions Hyderabad - Vajra Power Solutions',
    description: 'Premium battery and UPS systems. 10-year warranty. Same-day installation.',
  },
  alternates: {
    canonical: 'https://vajrarenew.com/battery-ups',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Battery & UPS Main Page Component
 */
export default function BatteryUPSPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Loads immediately (critical content) */}
      <BatteryHeroSection />

      {/* Products Section - Lazy loaded with SSR */}
      <BatteryProductsSection />

      {/* Calculator - Interactive element, lazy loaded */}
      <BatteryCalculator />

      {/* Brands - Partner showcase */}
      <BrandSection />

      {/* Testimonials - Social proof */}
      <BatteryTestimonials />

      {/* CTA - Final conversion push */}
      <BatteryCTASection />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Vajra Power Solutions',
            description: 'Battery and UPS solutions in Hyderabad, Telangana',
            image: 'https://vajrarenew.com/images/battery/battery-hero.jpg',
            '@id': 'https://vajrarenew.com/battery-ups',
            url: 'https://vajrarenew.com/battery-ups',
            telephone: '+91-9246344969',
            email: 'vajrarenew@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Near Bhashyam School, Peerzadiguda',
              addressLocality: 'Hyderabad',
              addressRegion: 'Telangana',
              postalCode: '500098',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 17.4636,
              longitude: 78.5797,
            },
            areaServed: [
              'Hyderabad',
              'Secunderabad',
              'Telangana',
              'Kompally',
              'Gachibowli',
              'HITEC City',
              'Madhapur',
              'LB Nagar',
            ],
            priceRange: '₹20,000 - ₹15,00,000',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '1000',
            },
            serviceType: [
              'Battery Sales',
              'UPS Installation',
              'Inverter Installation',
              'Power Backup Solutions',
            ],
          }),
        }}
      />
    </main>
  );
}