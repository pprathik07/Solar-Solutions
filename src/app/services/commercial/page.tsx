import React from 'react';
import { Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Commercial Solar Installation | Office & Business Solar Telangana',
  description: '10-100 kW commercial solar systems. Reduce operational costs by 60-80%. Tax benefits available.',
};

export default function CommercialPage() {
  return (
    <div>
      {/* Hero - Smaller */}
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Commercial Solar Systems</h1>
          <p className="text-sm sm:text-base md:text-lg text-slate">Cut operational costs, boost sustainability</p>
        </div>
      </section>

      {/* Perfect For - Smaller */}
      <section className="py-10 sm:py-12 md:py-16 bg-pearl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight mb-4 sm:mb-5 md:mb-6">Perfect For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              'Offices & IT Companies',
              'Retail Stores',
              'Restaurants & Hotels',
              'Schools & Colleges',
              'Hospitals & Clinics',
              'Warehouses',
              'Commercial Complexes',
              'Shopping Malls',
            ].map((item, index) => (
              <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow text-slate text-xs sm:text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & ROI - Smaller */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight mb-3 sm:mb-4">
            Investment: ₹5-50 Lakhs
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate mb-4 sm:mb-6">
            ROI: 3-4 years | Cost Reduction: 60-80%
          </p>
          <a href="tel:+916281253858">
            <Button variant="primary" size="md" className="text-xs sm:text-sm">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2" />
              Schedule Business Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}