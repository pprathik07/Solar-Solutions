import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ROICalculator from '@/components/sections/ROICalculator';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
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
