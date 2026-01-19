/**
 * FILE 2: BrandSection.tsx
 * Partner brands showcase
 */

import { batteryBrands } from '@/lib/battery-pricing';
import { BatteryCTASection } from './BatteryCTASection';
import { memo } from 'react';

export const BrandSection = memo(() => {
  const popularBrands = batteryBrands.filter(b => b.popular);

  return (
    <section id="brands" className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-midnight mb-3">
            Authorized Dealer For Premium Brands
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate max-w-2xl mx-auto">
            We partner with India's most trusted battery and UPS manufacturers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {popularBrands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-midnight">{brand.name}</span>
              </div>
              <p className="text-xs text-slate mb-3">{brand.description}</p>
              <div className="mt-auto">
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  {brand.warranty} warranty
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate">
            Also available: Microtek • V-Guard • Su-Kam • Genus
          </p>
        </div>
      </div>
    </section>
  );
});

BrandSection.displayName = 'BrandSection';

// Default exports for both components
export default BrandSection;