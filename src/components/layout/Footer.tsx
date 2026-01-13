'use client';

import React, { memo } from 'react';
import { Phone, Mail, MapPin, Sun } from 'lucide-react';

const Footer = memo(() => {
  return (
    <footer className="bg-midnight text-pearl py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <Sun className="w-6 h-6 text-midnight" />
              </div>
              <div className="text-xl font-bold text-gold">VAJRA RENEW</div>
            </div>
            <p className="text-slate text-sm">
              Telangana's trusted solar partner with 6+ years experience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate hover:text-gold transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-slate hover:text-gold transition-colors text-sm">About</a></li>
              <li><a href="/services" className="text-slate hover:text-gold transition-colors text-sm">Services</a></li>
              <li><a href="/portfolio" className="text-slate hover:text-gold transition-colors text-sm">Portfolio</a></li>
              <li><a href="/contact" className="text-slate hover:text-gold transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/residential" className="text-slate hover:text-gold transition-colors text-sm">Residential Solar</a></li>
              <li><a href="/services/commercial" className="text-slate hover:text-gold transition-colors text-sm">Commercial Solar</a></li>
              <li><a href="/services/industrial" className="text-slate hover:text-gold transition-colors text-sm">Industrial Solar</a></li>
              <li><a href="/services" className="text-slate hover:text-gold transition-colors text-sm">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-slate text-sm">Near Bhashyam School, Peerzadiguda, Telangana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+916281253858" className="text-slate hover:text-gold transition-colors text-sm">+91-6281253858</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:Vajra-Renew@gmail.com" className="text-slate hover:text-gold transition-colors text-sm">Vajra-Renew@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-steel/20 text-center">
          <p className="text-slate text-sm">© 2025 VAJRA RENEW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
