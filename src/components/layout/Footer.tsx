'use client';

import React, { memo, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants';

const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const servicesLinks = useMemo(() => [
    { name: 'Residential Solar', href: '/services/residential' },
    { name: 'Commercial Solar', href: '/services/commercial' },
    { name: 'Industrial Solar', href: '/services/industrial' },
    { name: 'Maintenance & AMC', href: '/services' },
  ], []);

  return (
    <footer className="bg-midnight text-pearl pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative flex-shrink-0 rounded-lg bg-white p-1.5 border-2 border-gold/40">
                <Image
                  src="/images/vajrarenew.png"
                  alt="Vajra Renew Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold">VAJRA RENEW</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400">By Vajra Enterprises</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Your trusted partner for solar energy solutions in Telangana with 6+ years of excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-sm text-slate-400">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-slate-400 hover:text-gold transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-slate-400 hover:text-gold transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel/20 pt-6 text-center">
          <p className="text-sm text-slate-400">
            © {currentYear} Vajra Renew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;