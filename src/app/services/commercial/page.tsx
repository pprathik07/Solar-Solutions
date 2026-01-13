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
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Commercial Solar Systems</h1>
          <p className="text-xl text-slate">Cut operational costs, boost sustainability</p>
        </div>
      </section>

      <section className="py-20 bg-pearl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-midnight mb-6">Perfect For:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
            Investment: ?5-50 Lakhs
          </h2>
          <p className="text-xl text-slate mb-8">ROI: 3-4 years | Cost Reduction: 60-80%</p>
          <a href="tel:+916281253858">
            <Button variant="primary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Business Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
