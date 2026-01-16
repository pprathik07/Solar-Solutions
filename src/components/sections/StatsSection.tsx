'use client';

import React, { memo } from 'react';
import { Award, Users, Zap, Shield } from 'lucide-react';

const stats = [
  { icon: Award, value: '6+', label: 'Years Experience', description: 'Years of excellence in solar' },
  { icon: Users, value: '500+', label: 'Happy Customers', description: 'Trusted by thousands' },
  { icon: Zap, value: '25L+', label: 'Units Generated', description: 'For our customers' },
  { icon: Shield, value: '25 Years', label: 'Panel Warranty', description: 'Premium quality guaranteed' }
];

const StatsSection = memo(() => {
  return (
    <section className="py-8 sm:py-10 md:py-14 bg-gradient-to-b from-midnight to-steel">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              {/* Icon Circle - Smaller */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 mx-auto mb-2 sm:mb-3 bg-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/30 transition-all duration-300 border-2 border-gold/30 group-hover:border-gold">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gold" />
              </div>
              
              {/* Value - Smaller */}
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gold mb-1">{stat.value}</div>
              
              {/* Label - Smaller */}
              <div className="text-xs sm:text-sm md:text-base font-semibold text-pearl mb-0.5">{stat.label}</div>
              
              {/* Description - Smaller */}
              <div className="text-[10px] sm:text-xs text-slate">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';
export default StatsSection;