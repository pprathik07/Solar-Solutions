'use client';

import React, { memo } from 'react';
import { Star } from 'lucide-react';
import Card from '@/components/ui/Card';

const testimonials = [
  {
    name: 'Satya narayana',
    role: 'Homeowner - Nacharam',
    rating: 5,
    text: 'Our electricity bill dropped from ₹2000 to just ₹150! with ROI of ₹10000 which was installed 5 years ago and Installation was quick and the team helped with all subsidy paperwork.',
    savings: 'Saving: ₹1850/month'
  },
  {
    name: 'Priya Industries',
    role: 'Manufacturing Unit - Medchal',
    rating: 5,
    text: 'Cut our operational costs by 70%. The ROI was achieved in just 3.5 years. Highly recommend for commercial installations!',
    savings: 'Saving: ₹2.8L/month'
  },
  {
    name: 'Venkat Rao',
    role: 'Villa Owner - Hiyathnagar',
    rating: 5,
    text: '(installed 13kw, per month 12000-13000, reducted to rs300) After-sales service is exceptional. They replaced my inverter within 48 hours under warranty at no cost. True professionals!',
    savings: 'Saving: ₹12000/month'
  }
];

const TestimonialsSection = memo(() => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
            Trusted by 5,000+ Customers
          </h2>
          <p className="text-xl text-slate">Real stories from real customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="hover" className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-slate mb-4 italic">"{testimonial.text}"</p>
              <div className="pt-4 border-t border-steel/20">
                <div className="font-bold text-midnight">{testimonial.name}</div>
                <div className="text-sm text-slate mb-2">{testimonial.role}</div>
                <div className="text-gold font-semibold text-sm">{testimonial.savings}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';
export default TestimonialsSection;
