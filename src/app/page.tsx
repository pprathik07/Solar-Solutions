import dynamic from 'next/dynamic';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import Footer from '@/components/layout/Footer';

// Lazy load below-the-fold components with custom loading states
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => (
    <div className="min-h-[500px] bg-gradient-to-b from-white to-pearl animate-pulse flex items-center justify-center">
      <div className="text-slate text-sm">Loading services...</div>
    </div>
  ),
  ssr: true, // Enable server-side rendering for SEO
});

const ROICalculator = dynamic(() => import('@/components/sections/ROICalculator'), {
  loading: () => (
    <div className="min-h-[600px] bg-white animate-pulse flex items-center justify-center">
      <div className="text-slate text-sm">Loading calculator...</div>
    </div>
  ),
  ssr: true,
});

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), {
  loading: () => (
    <div className="min-h-[400px] bg-pearl animate-pulse flex items-center justify-center">
      <div className="text-slate text-sm">Loading testimonials...</div>
    </div>
  ),
  ssr: true,
});

const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => (
    <div className="min-h-[300px] bg-midnight animate-pulse"></div>
  ),
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Navigation />
      <main role="main" id="main-content">
        {/* Hero loads immediately - critical content */}
        <HeroSection />
        
        {/* Services loads with lazy loading but SSR for SEO */}
        <ServicesSection />
        
        {/* ROI Calculator - interactive element */}
        <ROICalculator />
        
        {/* Testimonials - social proof */}
        <TestimonialsSection />
        
        {/* CTA - final conversion push */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'Vajra Renew - Solar Energy Solutions in Telangana | 10+ Years Experience',
  description: 'Telangana\'s most trusted solar installation partner. 1000+ installations, government subsidy assistance, 25-year warranty. Save up to 90% on electricity bills.',
  keywords: 'solar panels Hyderabad, solar installation Telangana, residential solar, commercial solar, PM Surya Ghar Yojana, solar subsidy Telangana',
  openGraph: {
    title: 'Vajra Renew - Solar Energy Solutions in Telangana',
    description: '10+ years experience, 1000+ happy customers. Get up to ₹78,000 government subsidy on solar installation.',
    images: ['/images/hero-background.png'],
  },
};