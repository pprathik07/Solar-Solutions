'use client';

import { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import { Battery } from 'lucide-react';

const FloatingBatteryButton = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show on battery pages
  if (typeof window !== 'undefined' && window.location.pathname.includes('/battery-ups')) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <Link
      href="/battery-ups"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Battery & UPS Solutions"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Single Circle Button */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/40 cursor-pointer">
        <Battery className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />

      </div>

      {/* Tooltip - Exactly like your image */}
      {showTooltip && (
        <div className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 animate-fadeIn">
          <div className="bg-[#1B263B] text-white px-4 py-3 rounded-xl shadow-2xl whitespace-nowrap relative border border-gold/20">
            {/* Icon + Title */}
            <div className="flex items-center gap-2 mb-1">
              <Battery className="w-5 h-5 text-orange-400" />
              <span className="font-bold text-sm text-pearl">Battery & UPS Solutions</span>
            </div>
            
            {/* Subtitle */}
            <div className="text-xs text-slate pl-7">
              Inverters • UPS • Power Backup →
            </div>
            
            {/* Gold bottom text */}
            <div className="text-xs text-gold font-semibold pl-7 mt-1">
              1000+ Installations in Hyderabad
            </div>
            
            {/* Arrow pointing to button */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#1B263B] rotate-45 border-r border-b border-gold/20"></div>
          </div>
        </div>
      )}

      {/* Mobile: Show simplified tooltip on tap */}
      <div className="md:hidden absolute bottom-full mb-2 right-0 opacity-0 group-active:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-midnight text-white px-3 py-2 rounded-lg shadow-xl whitespace-nowrap text-xs">
          Battery & UPS
        </div>
      </div>
    </Link>
  );
});

FloatingBatteryButton.displayName = 'FloatingBatteryButton';
export default FloatingBatteryButton;