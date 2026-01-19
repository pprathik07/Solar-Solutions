/**
 * FILE 1: BatteryCTASection.tsx
 * Call-to-action section for battery page
 */

'use client';

import React, { memo } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';

export const BatteryCTASection = memo(() => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to End Power Cut Worries?
          </h2>
          <p className="text-base sm:text-lg mb-8 opacity-95">
            Get expert consultation and same-day installation across Hyderabad
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919246344969">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91-9246344969
              </Button>
            </a>
            <a href="mailto:battery@vajrarenew.com">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-midnight text-white hover:bg-steel"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
            <MapPin className="w-4 h-4" />
            <span>Serving all areas in Hyderabad & Telangana</span>
          </div>
        </div>
      </div>
    </section>
  );
});

BatteryCTASection.displayName = 'BatteryCTASection';