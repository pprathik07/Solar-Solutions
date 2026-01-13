'use client';

import React, { memo } from 'react';
import { Phone, Sun } from 'lucide-react';
import Button from '@/components/ui/Button';

const Navigation = memo(() => {
  return (
    <nav className="bg-midnight border-b border-steel/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
              <Sun className="w-7 h-7 text-midnight" />
            </div>
            <div>
              <div className="text-xl font-bold text-pearl">VAJRA RENEW</div>
              <div className="text-xs text-gold">Solar Energy Solutions</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-pearl hover:text-gold transition-colors">Home</a>
            <a href="/about" className="text-pearl hover:text-gold transition-colors">About</a>
            <a href="/services" className="text-pearl hover:text-gold transition-colors">Services</a>
            <a href="/portfolio" className="text-pearl hover:text-gold transition-colors">Portfolio</a>
            <a href="/contact" className="text-pearl hover:text-gold transition-colors">Contact</a>
          </div>

          <a href="tel:+916281253858">
            <Button variant="primary" className="hidden md:flex">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;
