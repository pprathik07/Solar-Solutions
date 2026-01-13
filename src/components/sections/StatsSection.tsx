'use client';

import React, { memo } from 'react';
import { Award, Users, Zap, Shield } from 'lucide-react';

const stats = [
  { icon: Award, value: '6+', label: 'Years Experience', description: 'Years of excellence in solar' },
  { icon: Users, value: '500+', label: 'Happy Customers', description: 'Trusted by thousands' },
  { icon: Zap, value: '25L+(Kw)', label: 'Units Generated', description: 'For our customers' },
  { icon: Shield, value: '25 Years', label: 'Panel Warranty', description: 'Premium quality guaranteed' }
];

const StatsSection = memo(() => {
  return (
    <section className="py-20 bg-gradient-to-b from-midnight to-steel">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className="w-10 h-10 text-gold" />
              </div>
              <div className="text-4xl font-bold text-gold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-pearl mb-1">{stat.label}</div>
              <div className="text-sm text-slate">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';
export default StatsSection;
