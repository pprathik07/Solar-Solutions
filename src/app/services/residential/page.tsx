import React from 'react';
import { CheckCircle, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Residential Solar Installation | Home Solar Panels Telangana',
  description: '3-10 kW residential solar systems. 40% subsidy, 25-year warranty. Cut electricity bills by 90%.',
};

export default function ResidentialPage() {
  return (
    <div>
      {/* Hero - Smaller */}
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Residential Solar Installation</h1>
          <p className="text-sm sm:text-base md:text-lg text-slate">Power your home, slash your bills</p>
        </div>
      </section>

      {/* What's Included - Smaller */}
      <section className="py-10 sm:py-12 md:py-16 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight mb-4 sm:mb-6 md:mb-8">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {[
                'Complete site assessment',
                'Custom system design (3-10kW)',
                'Premium solar panels (25-year warranty)',
                'High-efficiency inverters (5-10 year warranty)',
                'Weatherproof mounting structures',
                'Complete electrical wiring',
                'DISCOM net metering installation',
                'Government subsidy assistance',
                'System monitoring app',
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gold flex-shrink-0" />
                  <span className="text-slate text-xs sm:text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment & ROI - Smaller */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight mb-3 sm:mb-4">
            Investment: ₹2-6 Lakhs (after subsidy)
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate mb-4 sm:mb-6">
            Typical ROI: 3-4 years | Avg Bill Reduction: 80-90%
          </p>
          <a href="tel:+916281253858">
            <Button variant="primary" size="md" className="text-xs sm:text-sm">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2" />
              Get Residential Quote
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}