'use client';

import React, { memo } from 'react';
import Button from '@/components/ui/Button';
import { Phone, Calculator, Award, Users, Zap, Shield } from 'lucide-react';

const HeroSection = memo(() => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-midnight via-steel to-midnight overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gold rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-steel rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Much smaller */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-gold/30">
            <span className="text-gold font-semibold text-[10px] sm:text-xs">🏆 6+ Years • 500+ Installations</span>
          </div>

          {/* Main Heading - MUCH smaller now */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 px-4">
            <span className="text-pearl block">Power Your Future with</span>
            <span className="text-gold block mt-1">Clean Solar Energy</span>
          </h1>

          {/* Subheading - Smaller */}
          <p className="text-sm sm:text-base md:text-lg text-slate mb-3 sm:mb-4 md:mb-5 max-w-2xl mx-auto px-4">
            Telangana's Most Trusted Solar Installation Partner
          </p>

          {/* Trust Points - Smaller */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-pearl mb-5 sm:mb-6 md:mb-8 px-4 text-[10px] sm:text-xs">
            <span className="whitespace-nowrap">✓ 6+ Years of Excellence</span>
            <span className="hidden sm:inline">•</span>
            <span className="whitespace-nowrap">✓ 500+ Happy Customers</span>
            <span className="hidden sm:inline">•</span>
            <span className="whitespace-nowrap">✓ 25-Year Warranty</span>
          </div>

          {/* CTA Buttons - Smaller */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-8 sm:mb-10 md:mb-12 px-4 max-w-md mx-auto">
            <a href="tel:+919246344969" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Get Free Quote
              </Button>
            </a>
            <a href="#calculator" className="w-full sm:w-auto">
              <Button variant="secondary" size="md" className="w-full sm:w-auto text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5">
                <Calculator className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Calculate Savings
              </Button>
            </a>
          </div>
        </div>

        {/* Stats with Icon Badges - Much smaller */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-4xl mx-auto px-4">
          {[
            { icon: Award, value: '6+', label: 'Years Experience' },
            { icon: Users, value: '500+', label: 'Happy Customers' },
            { icon: Zap, value: '25L+', label: 'Units Generated' },
            { icon: Shield, value: '25 Years', label: 'Panel Warranty' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-center group py-2 sm:py-3"
            >
              {/* Icon Badge - Smaller */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-1.5 sm:mb-2 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full flex items-center justify-center border-2 border-gold/30 group-hover:scale-110 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/50 transition-all duration-300">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gold" />
              </div>
              
              {/* Value - Smaller */}
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gold mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              
              {/* Label - Smaller */}
              <div className="text-[9px] sm:text-[10px] md:text-xs text-slate px-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;