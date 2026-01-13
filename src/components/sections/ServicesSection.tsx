'use client';

import React, { memo } from 'react';
import { Home, Building2, Factory, Wrench } from 'lucide-react';
import Card from '@/components/ui/Card';

const services = [
  {
    icon: Home,
    title: 'Residential Solar',
    description: 'Transform your home into a power-generating asset. Cut bills by 80-90%.',
    features: ['3-10 kW systems', 'Government subsidy', '3-4 year ROI']
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    description: 'Boost profits by reducing operational costs. Perfect for offices and shops.',
    features: ['10-100 kW systems', 'Tax benefits', 'Priority support']
  },
  {
    icon: Factory,
    title: 'Industrial Solar',
    description: 'High-capacity solutions for manufacturing and large facilities.',
    features: ['100kW - 1MW+', 'Enterprise-grade', 'Dedicated manager']
  },
  {
    icon: Wrench,
    title: 'Maintenance & AMC',
    description: 'Keep your system running at peak efficiency with expert maintenance.',
    features: ['24/7 support', 'Regular servicing', 'Performance guarantee']
  }
];

const ServicesSection = memo(() => {
  return (
    <section className="py-20 bg-pearl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
            Complete Solar Solutions
          </h2>
          <p className="text-xl text-slate">From residential rooftops to large industrial installations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} variant="hover" className="p-6">
              <service.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-bold text-midnight mb-3">{service.title}</h3>
              <p className="text-slate mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;
