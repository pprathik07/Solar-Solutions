/**
 * Battery Hero Section Component
 * 
 * Hero section for Battery & UPS landing page
 * Orange/amber theme to differentiate from solar (navy/gold)
 * 
 * SEO Keywords: battery Hyderabad, UPS Telangana, inverter, power backup
 * 
 * @component
 * @memoized for performance
 */

'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Calculator, Battery, Zap, Shield, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

const BatteryHeroSection = memo(() => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Back to Solar Link */}
      <Link 
        href="/"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 text-midnight hover:text-orange-600 transition-colors text-sm flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md"
      >
        ← Back to Solar
      </Link>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-orange-500/30">
            <Battery className="w-4 h-4 text-orange-600" />
            <span className="text-orange-700 font-semibold text-[10px] sm:text-xs">
              🔋 Vajra Enterprises • 5000+ Installations
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 px-4">
            <span className="text-midnight block">Never Face</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-700 to-yellow-600 block mt-1">
              Power Cuts Again
              
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-slate mb-4 sm:mb-4 md:mb-5 max-w-2xl mx-auto px-4">
            Premium Battery & UPS Solutions for Homes, Offices & Industries across Telangana
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-midnight mb-5 sm:mb-6 md:mb-8 px-4 text-[10px] sm:text-xs">
            <span className="whitespace-nowrap">✓ 15+ Years Experience</span>
            <span className="hidden sm:inline">•</span>
            <span className="whitespace-nowrap">✓ 5000+ Installations</span>
            <span className="hidden sm:inline">•</span>
            <span className="whitespace-nowrap">✓ 10-Year Warranty</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-8 sm:mb-10 md:mb-12 px-4 max-w-md mx-auto">
            <a href="tel:+919246344969" className="w-full sm:w-auto">
              <Button 
                variant="primary" 
                size="md" 
                className="w-full sm:w-auto text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Get Free Quote
              </Button>
            </a>
            <a href="#calculator" className="w-full sm:w-auto">
              <Button 
                variant="secondary" 
                size="md" 
                className="w-full sm:w-auto text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                <Calculator className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Calculate Backup Time
              </Button>
            </a>
          </div>
        </div>

        {/* Stats with Icon Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-4xl mx-auto px-4">
          {[
            { icon: Battery, value: '5000+', label: 'Installations' },
            { icon: Zap, value: '4-10 Hrs', label: 'Backup Time' },
            { icon: Shield, value: '10 Years', label: 'Battery Warranty' },
            { icon: Clock, value: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-center group py-2 sm:py-3"
            >
              {/* Icon Badge */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-1.5 sm:mb-2 bg-gradient-to-br from-orange-500/30 to-amber-500/10 rounded-full flex items-center justify-center border-2 border-orange-500/30 group-hover:scale-110 group-hover:border-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-600" />
              </div>
              
              {/* Value */}
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-[9px] sm:text-[10px] md:text-xs text-slate px-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Brands Preview */}
        <div className="mt-8 sm:mt-10 text-center">
          {/* Authorized Distributor */}
          <div className="mb-6">
            <p className="text-xs sm:text-sm text-slate mb-3 font-medium">
              Authorized Distributor For
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <span className="text-midnight/70 font-semibold text-sm sm:text-base">
                Okaya
              </span>
            </div>
          </div>

          {/* Authorized Dealer */}
          <div>
            <p className="text-xs sm:text-sm text-slate mb-3 font-medium">
              Authorized Dealer For
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              {['Exide', 'Amaron', 'APC', 'Microtek'].map((brand, index, array) => (
                <React.Fragment key={brand}>
                  <span className="text-midnight/70 font-semibold text-sm sm:text-base">
                    {brand}
                  </span>
                  {index < array.length - 1 && (
                    <span className="text-slate/40">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

BatteryHeroSection.displayName = 'BatteryHeroSection';

export default BatteryHeroSection;