'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Building2, Factory, Wrench, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const services = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Perfect for homes and apartments. Save up to 90% on electricity bills with rooftop solar installations.',
    features: ['1-10 kW systems', 'Government subsidy', '25-year warranty'],
    href: '/services/residential',
    linkText: 'Learn more about residential solar solutions',
    image: '/images/residential-solar.png',
    imageAlt: 'Modern residential villa with solar panels installed on rooftop in Hyderabad'
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    description: 'Ideal for offices, shops, and commercial buildings. Reduce operational costs significantly.',
    features: ['10-100 kW systems', 'Quick ROI', 'Tax benefits'],
    href: '/services/commercial',
    linkText: 'Learn more about commercial solar solutions',
    image: '/images/commercial-solar.png',
    imageAlt: 'Commercial building with large solar panel array on rooftop in Telangana'
  },
  {
    icon: Factory,
    title: 'Industrial Solar',
    description: 'Large-scale solar solutions for factories and industrial units. Maximize energy independence.',
    features: ['100+ systems', 'Peak shaving', 'Custom design'],
    href: '/services/industrial',
    linkText: 'Learn more about industrial solar solutions',
    image: '/images/industrial-solar.png',
    imageAlt: 'Large industrial warehouse with extensive solar panel installation'
  },
  {
    icon: Wrench,
    title: 'Maintenance & AMC',
    description: 'Comprehensive maintenance services to ensure optimal performance of your solar system.',
    features: ['Regular cleaning', '24/7 monitoring', 'Quick repairs'],
    href: '/services',
    linkText: 'Learn more about solar maintenance services',
    image: '/images/maintenance.png',
    imageAlt: 'Professional solar panel maintenance and AMC services in Hyderabad'
  }
];

const ServicesSection = memo(() => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-pearl" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 id="services-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-midnight mb-2 sm:mb-3">
            Complete Solar Solutions
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate max-w-3xl mx-auto">
            From residential rooftops to large industrial installations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <article 
              key={index} 
              className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-steel/10 hover:border-gold/50 group flex flex-col overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative w-full h-32 sm:h-36 md:h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading={index < 2 ? 'eager' : 'lazy'} // Load first 2 eagerly, rest lazy
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 group-hover:from-gold/30 group-hover:to-gold/20 transition-all duration-300" aria-hidden="true">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gold" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-midnight mb-1.5 sm:mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[10px] sm:text-xs text-slate mb-2 sm:mb-3 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-3 sm:mb-4" aria-label={`${service.title} features`}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[10px] sm:text-xs text-slate">
                      <span className="text-gold mr-1.5 text-xs" aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link href={service.href} aria-label={service.linkText}>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-gold group-hover:text-midnight group-hover:border-gold text-[10px] sm:text-xs py-1.5 sm:py-2">
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;