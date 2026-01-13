import React from 'react';
import { CheckCircle, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Residential Solar Installation | Home Solar Panels Telangana',
  description: '3-10 kW residential solar systems. 40% subsidy, 25-year warranty. Cut electricity bills by 90%.',
};

export default function ResidentialPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Residential Solar Installation</h1>
          <p className="text-xl text-slate">Power your home, slash your bills</p>
        </div>
      </section>

      <section className="py-20 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-midnight mb-8">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                  <span className="text-slate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-midnight mb-6">
            Investment: ?2-6 Lakhs (after subsidy)
          </h2>
          <p className="text-xl text-slate mb-8">Typical ROI: 3-4 years | Avg Bill Reduction: 80-90%</p>
          <a href="tel:+916281253858">
            <Button variant="primary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Get Residential Quote
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
