'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: 'Residential Solar', href: '/services/residential' },
    { name: 'Commercial Solar', href: '/services/commercial' },
    { name: 'Industrial Solar', href: '/services/industrial' },
    { name: 'Maintenance', href: '/services' }
  ];

  return (
    <footer className="bg-gradient-to-b from-midnight to-steel text-pearl">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Company Info - Smaller */}
          <div>
            <div className="flex items-center space-x-1.5 mb-2 sm:mb-3">
              <div className="w-7 h-7 bg-gold rounded-full flex items-center justify-center">
                <span className="text-midnight text-base">☀</span>
              </div>
              <span className="text-base sm:text-lg font-bold">VAJRA RENEW</span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate mb-2 sm:mb-3 leading-relaxed">
              Telangana's trusted solar partner with 6+ years experience.
            </p>
          </div>

          {/* Quick Links - Smaller */}
          <div>
            <h3 className="text-gold font-bold text-xs sm:text-sm mb-2 sm:mb-3">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[10px] sm:text-xs text-slate hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Smaller */}
          <div>
            <h3 className="text-gold font-bold text-xs sm:text-sm mb-2 sm:mb-3">Services</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[10px] sm:text-xs text-slate hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Smaller */}
          <div>
            <h3 className="text-gold font-bold text-xs sm:text-sm mb-2 sm:mb-3">Contact</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="flex items-start gap-1.5 sm:gap-2">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-[10px] sm:text-xs text-slate">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold flex-shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.phone}`} 
                  className="text-[10px] sm:text-xs text-slate hover:text-gold transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2">
                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold flex-shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-[10px] sm:text-xs text-slate hover:text-gold transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Smaller */}
        <div className="pt-4 sm:pt-6 border-t border-steel/30 text-center">
          <p className="text-[10px] sm:text-xs text-slate">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;