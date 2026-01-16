'use client';

import React, { memo } from 'react';
import Button from '@/components/ui/Button';
import { Phone, Mail } from 'lucide-react';

const CTASection = memo(() => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-midnight via-steel to-midnight relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 sm:w-48 sm:h-48 bg-gold rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-48 sm:h-48 bg-steel rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading - Much smaller */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-pearl mb-2 sm:mb-3 md:mb-4">
            Ready to Cut Your Electricity Bills by{' '}
            <span className="text-gold">90%?</span>
          </h2>
          
          {/* Subheading - Smaller */}
          <p className="text-xs sm:text-sm md:text-base text-slate mb-4 sm:mb-6 md:mb-8 px-4">
            Join 5,000+ satisfied customers who are already saving thousands every month
          </p>

          {/* Buttons - Smaller */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-4 sm:mb-6 px-4 max-w-lg mx-auto">
            <a href="tel:+916281253858" className="w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto text-xs sm:text-sm py-2 sm:py-2.5">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Call +91-6281253858
              </Button>
            </a>
            <a href="mailto:Vajra-Renew@gmail.com" className="w-full sm:w-auto">
              <Button variant="secondary" size="md" className="w-full sm:w-auto text-xs sm:text-sm py-2 sm:py-2.5">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Get Free Quote
              </Button>
            </a>
          </div>

          {/* Fine print - Smaller */}
          <p className="text-[10px] sm:text-xs text-slate px-4">
            Free site survey - No obligation - Expert consultation - Subsidy assistance included
          </p>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';
export default CTASection;