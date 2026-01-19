/**
 * Battery Products Section Component
 * 
 * Displays battery/UPS product categories with featured products
 * Categories: Residential, Commercial, Industrial
 * 
 * SEO: inverter battery Hyderabad, UPS Telangana, commercial UPS, home inverter
 * 
 * @component
 * @memoized
 */

'use client';

import React, { memo, useState } from 'react';
import Link from 'next/link';
import { Home, Building2, Factory, ArrowRight, Zap, Clock, Shield } from 'lucide-react';
import Button from '@/components/ui/Button';
import { BATTERY_CATEGORIES } from '@/lib/constants';

const categories = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential',
    subtitle: 'Home Inverters & Batteries',
    description: 'Uninterrupted power for your family. Perfect for apartments and independent houses in Hyderabad.',
    features: ['4-8 hours backup', 'Powers 3-4 fans + lights', 'Low maintenance'],
    priceRange: '₹20,000 - ₹40,000',
    href: '/battery-ups/residential',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial',
    subtitle: 'Office & Shop UPS Systems',
    description: 'Keep your business running 24/7. Protect computers, servers, and critical equipment in Telangana.',
    features: ['True online UPS', 'Pure sine wave', 'Network monitoring'],
    priceRange: '₹40,000 - ₹1,50,000',
    href: '/battery-ups/commercial',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial',
    subtitle: 'Factory Battery Systems',
    description: 'Heavy-duty power backup for manufacturing units, warehouses, and data centers across Hyderabad.',
    features: ['High-capacity banks', 'Three-phase support', '10-year life'],
    priceRange: '₹3,00,000 - ₹15,00,000',
    href: '/battery-ups/industrial',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
  },
];

const BatteryProductsSection = memo(() => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 id="products-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-midnight mb-2 sm:mb-3">
            Power Backup Solutions
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate max-w-3xl mx-auto">
            Choose the right battery or UPS system for your needs in Hyderabad
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <article
              key={category.id}
              className={`${category.bgColor} rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-transparent hover:border-orange-400 transition-all duration-300 group cursor-pointer ${
                activeCategory === category.id ? 'ring-2 ring-orange-500' : ''
              }`}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Icon with Gradient */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>

              {/* Category Title */}
              <h3 className="text-lg sm:text-xl font-bold text-midnight mb-1">
                {category.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate font-medium mb-3">
                {category.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs sm:text-sm text-midnight">
                    <Zap className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price Range */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 mb-4">
                <p className="text-xs text-slate mb-0.5">Starting from</p>
                <p className="text-base sm:text-lg font-bold text-orange-600">
                  {category.priceRange}
                </p>
              </div>

              {/* CTA Button */}
              <Link href={category.href}>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 text-xs sm:text-sm"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </article>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-midnight mb-6 text-center">
            Why Choose Vajra Power Solutions?
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Shield,
                title: 'Authorized Dealer',
                description: 'Official partner for Okaya, Exide, Amaron, APC brands'
              },
              {
                icon: Clock,
                title: 'Same-Day Installation',
                description: 'Quick installation and commissioning across Hyderabad'
              },
              {
                icon: Zap,
                title: '24/7 Support',
                description: 'Round-the-clock customer support and emergency service'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-midnight mb-1 text-sm sm:text-base">
                  {benefit.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

BatteryProductsSection.displayName = 'BatteryProductsSection';

export default BatteryProductsSection;