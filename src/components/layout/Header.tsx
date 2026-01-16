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
      <div className="container mx-auto px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Smaller */}
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-midnight text-base sm:text-lg">☀</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold leading-tight">VAJRA RENEW</span>
              <span className="text-[9px] sm:text-[10px] text-gold leading-tight">Solar Energy Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation - Smaller */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm hover:text-gold transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Call Button - Smaller */}
          <div className="hidden md:flex">
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button variant="primary" size="sm" className="text-xs py-2 px-4">
                <Phone className="w-3 h-3 mr-1.5" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-pearl hover:text-gold transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-steel/30 pt-3 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-gold transition-colors py-1.5 px-2 hover:bg-steel/20 rounded font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {/* Mobile Call Button */}
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="primary" size="sm" className="w-full text-xs py-2">
                  <Phone className="w-3 h-3 mr-1.5" />
                  Call Now
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;