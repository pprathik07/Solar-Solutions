import dynamic from 'next/dynamic';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import Footer from '@/components/layout/Footer';

// Lazy load below-the-fold components
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => <div className="min-h-[400px] bg-pearl animate-pulse" />,
});

const ROICalculator = dynamic(() => import('@/components/sections/ROICalculator'), {
  loading: () => <div className="min-h-[400px] bg-white animate-pulse" />,
});

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), {
  loading: () => <div className="min-h-[300px] bg-pearl animate-pulse" />,
});

const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => <div className="min-h-[200px] bg-midnight animate-pulse" />,
});

export default function Home() {
  return (
    <>
      <Navigation />
      <main role="main" id="main-content">
        <HeroSection />
        <ServicesSection />
        <ROICalculator />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}