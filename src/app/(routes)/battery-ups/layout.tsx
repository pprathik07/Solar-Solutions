/**
 * Battery & UPS Section Layout
 * 
 * Layout wrapper for all battery/UPS pages
 * Includes navigation and footer
 * 
 * @layout
 */

import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function BatteryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}