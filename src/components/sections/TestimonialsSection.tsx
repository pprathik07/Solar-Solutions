'use client';

import React, { memo } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Satya Narayana',
    role: 'Homeowner - Nacharam',
    quote: 'Our electricity bill dropped from ₹2000 to just ₹150! with ROI of ₹10000 which was installed 5 years ago and Installation was quick and the team helped with all subsidy paperwork.',
    rating: 5,
    savings: '₹1850/month'
  },
  {
    name: 'Priya Industries',
    role: 'Manufacturing Unit - Medchal',
    quote: 'Cut our operational costs by 70%. The ROI was achieved in just 3.5 years. Highly recommend for commercial installations!',
    rating: 5,
    savings: '₹2.8L/month'
  },
  {
    name: 'Venkat Rao',
    role: 'Villa Owner - Hiyathnagar',
    quote: '(installed 13kw, per month 12000-13000, reducted to rs300) After-sales service is exceptional. They replaced my inverter within 48 hours under warranty at no cost. True professionals!',
    rating: 5,
    savings: '₹12000/month'
  }
];

const TestimonialsSection = memo(() => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header - Much smaller */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-midnight mb-2 sm:mb-3">
            Trusted by <span className="text-gold">500+</span> Customers
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate max-w-2xl mx-auto">
            Real stories from real customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-pearl to-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-steel/10 hover:border-gold/30 group"
            >
              {/* Stars - Smaller */}
              <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote - Smaller */}
              <blockquote className="text-[10px] sm:text-xs md:text-sm text-slate mb-3 sm:mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author - Smaller */}
              <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-steel/20">
                <div>
                  <div className="font-bold text-midnight text-xs sm:text-sm">{testimonial.name}</div>
                  <div className="text-[10px] sm:text-xs text-slate">{testimonial.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-gold font-bold text-[9px] sm:text-[10px]">Saving</div>
                  <div className="text-midnight font-semibold text-xs sm:text-sm">{testimonial.savings}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';
export default TestimonialsSection;