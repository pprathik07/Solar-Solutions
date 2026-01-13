'use client';

import React, { memo } from 'react';
import { Phone, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';

const CTASection = memo(() => {
  return (
    <section className="py-20 bg-gradient-to-r from-midnight via-steel to-midnight text-pearl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Cut Your Electricity Bills by 90%?
          </h2>
          <p className="text-xl text-slate mb-8">
            Join 5,000+ satisfied customers who are already saving thousands every month
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button variant="primary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call +91-6281253858
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </a>
          </div>

          <p className="text-slate text-sm mt-6">
            Free site survey - No obligation - Expert consultation - Subsidy assistance included
          </p>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';
export default CTASection;
