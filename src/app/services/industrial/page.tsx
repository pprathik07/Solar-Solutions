import React from 'react';
import { Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Industrial Solar Solutions | Factory & Plant Solar Telangana',
  description: '100kW - 1MW+ industrial solar systems. Reduce energy costs by 50-70%. Enterprise-grade solutions.',
};

export default function IndustrialPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Industrial Solar Solutions</h1>
          <p className="text-xl text-slate">High-capacity systems for maximum impact</p>
        </div>
      </section>

      <section className="py-20 bg-pearl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-midnight mb-6">Ideal For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'Manufacturing Plants',
              'Processing Units',
              'Cold Storage Facilities',
              'Large Warehouses',
              'Industrial Parks',
              'Food Processing',
              'Textile Mills',
              'Chemical Plants',
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-slate">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-midnight mb-6">
            Investment: ?50 Lakhs - ?5 Crores+
          </h2>
          <p className="text-xl text-slate mb-8">ROI: 3-4.5 years | Cost Reduction: 50-70%</p>
          <a href="tel:+916281253858">
            <Button variant="primary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Request Industrial Proposal
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
