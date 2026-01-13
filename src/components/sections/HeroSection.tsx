'use client';

import React, { memo } from 'react';
import Button from '@/components/ui/Button';
import { Phone, Calculator, Award, Users, Zap, Shield } from 'lucide-react';

const HeroSection = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-midnight via-steel to-midnight overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gold rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-steel rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border border-gold/30">
            <span className="text-gold font-semibold text-sm sm:text-base">🏆 6+ Years • 500+ Installations</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4">
            <span className="text-pearl block">Power Your Future with</span>
            <span className="text-gold block mt-2">Clean Solar Energy</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Telangana's Most Trusted Solar Installation Partner
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-pearl mb-8 sm:mb-12 px-4 text-sm sm:text-base">
            <span className="whitespace-nowrap">✓ 6+ Years of Excellence</span>
            <span className="hidden sm:inline">•</span>
            <span className="whitespace-nowrap">✓ 500+ Happy Customers</span>
            <span className="hidden sm:inline">•</span>
            <span className="whitespace-nowrap">✓ 25-Year Warranty</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16 sm:mb-20 px-4 max-w-lg mx-auto">
            <a href="tel:+916281253858" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Free Quote
              </Button>
            </a>
            <a href="#calculator" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8">
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Calculate Savings
              </Button>
            </a>
          </div>
        </div>

        {/* Stats with Icon Badges - Improved Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-4">
          {[
            { icon: Award, value: '6+', label: 'Years Experience' },
            { icon: Users, value: '500+', label: 'Happy Customers' },
            { icon: Zap, value: '25L+', label: 'Units Generated' },
            { icon: Shield, value: '25 Years', label: 'Panel Warranty' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-center group py-4"
            >
              {/* Icon Badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full flex items-center justify-center border-2 border-gold/30 group-hover:scale-110 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/50 transition-all duration-300">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-gold" />
              </div>
              
              {/* Value */}
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-1 sm:mb-2">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-xs sm:text-sm md:text-base text-slate px-2">
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