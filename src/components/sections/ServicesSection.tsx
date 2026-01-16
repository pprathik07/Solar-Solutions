'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { Home, Building2, Factory, Wrench, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const services = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Perfect for homes and apartments. Save up to 90% on electricity bills with rooftop solar installations.',
    features: ['1-10 kW systems', 'Government subsidy', '25-year warranty'],
    href: '/services/residential'
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    description: 'Ideal for offices, shops, and commercial buildings. Reduce operational costs significantly.',
    features: ['10-100 kW systems', 'Quick ROI', 'Tax benefits'],
    href: '/services/commercial'
  },
  {
    icon: Factory,
    title: 'Industrial Solar',
    description: 'Large-scale solar solutions for factories and industrial units. Maximize energy independence.',
    features: ['100+ kW systems', 'Peak shaving', 'Custom design'],
    href: '/services/industrial'
  },
  {
    icon: Wrench,
    title: 'Maintenance & AMC',
    description: 'Comprehensive maintenance services to ensure optimal performance of your solar system.',
    features: ['Regular cleaning', '24/7 monitoring', 'Quick repairs'],
    href: '/services'
  }
];

const ServicesSection = memo(() => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-pearl">
      <div className="container mx-auto px-4">
        {/* Header - Much smaller */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-midnight mb-2 sm:mb-3">
            Complete Solar Solutions
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate max-w-3xl mx-auto">
            From residential rooftops to large industrial installations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-steel/10 hover:border-gold/50 group flex flex-col"
            >
              {/* Icon - Smaller */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 group-hover:from-gold/30 group-hover:to-gold/20 transition-all duration-300">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gold" />
              </div>

              {/* Title - Smaller */}
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-midnight mb-1.5 sm:mb-2">
                {service.title}
              </h3>

              {/* Description - Smaller */}
              <p className="text-[10px] sm:text-xs text-slate mb-2 sm:mb-3 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Features - Smaller */}
              <ul className="space-y-1 mb-3 sm:mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-[10px] sm:text-xs text-slate">
                    <span className="text-gold mr-1.5 text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link - Smaller */}
              <Link href={service.href}>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-gold group-hover:text-midnight group-hover:border-gold text-[10px] sm:text-xs py-1.5 sm:py-2">
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;