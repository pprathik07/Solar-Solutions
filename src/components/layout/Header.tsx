'use client';

import React, { useState, memo } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants';
import Button from '@/components/ui/Button';

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-midnight text-pearl sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">??</span>
            <span className="text-xl font-bold">VAJRA RENEW</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button variant="primary" size="md">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block hover:text-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;
