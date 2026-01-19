/**
 * Residential Battery & Inverter Page
 * 
 * Home inverter and battery solutions for apartments and houses
 * Displays residential battery products with pricing
 * 
 * URL: /battery-ups/residential
 * SEO: home inverter Hyderabad, residential battery, inverter for home
 * 
 * @page
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, Battery, Clock, Shield, Zap, Home, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { residentialBatteries } from '@/lib/battery-pricing';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Home Inverter & Battery in Hyderabad | Residential Power Backup Solutions',
  description: 'Best home inverter batteries in Hyderabad. Okaya, Exide, Amaron batteries with 4-8 hours backup. 5-year warranty. Same-day installation. Starting from ₹20,000. Free site survey.',
  keywords: 'home inverter Hyderabad, residential battery, inverter for home, Okaya battery, Exide inverter, power backup home, inverter price Hyderabad',
};

export default function ResidentialBatteryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4">
          <Link 
            href="/battery-ups" 
            className="inline-flex items-center gap-2 text-sm mb-4 hover:underline opacity-90 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Battery Solutions
          </Link>
          
          <div className="flex items-center gap-3 mb-3">
            <Home className="w-8 h-8 sm:w-10 sm:h-10" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Residential Inverters & Batteries
            </h1>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl">
            Uninterrupted power backup for homes and apartments across Hyderabad
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap gap-4 mt-6 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>4-8 Hours Backup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Same-Day Installation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-midnight mb-3">
              Our Residential Power Backup Solutions
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Choose from premium brands - perfect for 2-4 BHK homes in Hyderabad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {residentialBatteries.map((product) => (
              <article
                key={product.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                {/* Brand Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <Battery className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {product.brand}
                  </span>
                </div>
                
                {/* Product Name */}
                <h3 className="font-bold text-lg text-midnight mb-3 line-clamp-2 min-h-[56px]">
                  {product.name}
                </h3>
                
                {/* Specifications */}
                <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-sm text-slate">
                    <Zap className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span><strong>Capacity:</strong> {product.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate">
                    <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span><strong>Backup:</strong> {product.backupTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate">
                    <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span><strong>Warranty:</strong> {product.warranty}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Suitable For */}
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-blue-700">
                    <strong>Ideal for:</strong> {product.suitable}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  {product.discount && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-red-500 line-through">
                        ₹{product.mrp.toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                        Save {product.discount}%
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate">including installation</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="tel:+919246344969" className="block">
                  <Button 
                    variant="primary" 
                    size="md" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Get Free Quote
                  </Button>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-midnight text-center mb-10">
            Why Choose Our Home Inverters?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Genuine Products',
                description: 'Authorized dealer for all major brands',
              },
              {
                icon: Clock,
                title: 'Same-Day Installation',
                description: 'Quick setup across Hyderabad',
              },
              {
                icon: Zap,
                title: 'Long Backup Time',
                description: '4-8 hours uninterrupted power',
              },
              {
                icon: CheckCircle,
                title: 'Free Maintenance',
                description: 'First year service included',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-midnight mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Never Face Power Cuts Again?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get expert consultation and same-day installation in Hyderabad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919246344969">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91-9246344969
              </Button>
            </a>
            <Link href="/battery-ups#calculator">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-midnight text-white hover:bg-steel"
              >
                Calculate Backup Time
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}