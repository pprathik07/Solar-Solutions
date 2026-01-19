/**
 * Commercial UPS Systems Page
 * 
 * Online UPS solutions for offices, shops, clinics
 * Displays commercial UPS products with pricing
 * 
 * URL: /battery-ups/commercial
 * SEO: commercial UPS Hyderabad, office UPS, online UPS Telangana
 * 
 * @page
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, Zap, Clock, Shield, Building2, CheckCircle, Cpu } from 'lucide-react';
import Button from '@/components/ui/Button';
import { commercialUPS } from '@/lib/battery-pricing';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Commercial UPS Systems in Hyderabad | Office & Business Power Backup',
  description: 'Online UPS for offices, shops, clinics in Hyderabad. APC, Okaya, Microtek UPS systems. 3KVA to 100KVA. True online UPS. Same-day installation. Call +91-9246344969',
  keywords: 'commercial UPS Hyderabad, office UPS, online UPS Telangana, APC UPS, business power backup, server UPS, 3KVA UPS, 5KVA UPS Hyderabad',
};

export default function CommercialUPSPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4">
          <Link 
            href="/battery-ups" 
            className="inline-flex items-center gap-2 text-sm mb-4 hover:underline opacity-90 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Battery Solutions
          </Link>
          
          <div className="flex items-center gap-3 mb-3">
            <Building2 className="w-8 h-8 sm:w-10 sm:h-10" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Commercial UPS Systems
            </h1>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl">
            Enterprise-grade power protection for offices and businesses in Hyderabad
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap gap-4 mt-6 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>True Online UPS</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Pure Sine Wave</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Network Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-midnight mb-3">
              Enterprise UPS Solutions
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Protect your business-critical equipment with premium UPS systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {commercialUPS.map((product) => (
              <article
                key={product.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 hover:shadow-xl transition-all duration-300"
              >
                {/* Brand Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-5 h-5 text-purple-600" />
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">
                    {product.brand}
                  </span>
                  {product.upsType && (
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                      {product.upsType === 'online' ? 'Online' : 'Offline'} UPS
                    </span>
                  )}
                </div>
                
                {/* Product Name */}
                <h3 className="font-bold text-lg text-midnight mb-3 line-clamp-2 min-h-[56px]">
                  {product.name}
                </h3>
                
                {/* Specifications */}
                <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-sm text-slate">
                    <Zap className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span><strong>Capacity:</strong> {product.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate">
                    <Clock className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span><strong>Backup:</strong> {product.backupTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate">
                    <Shield className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span><strong>Warranty:</strong> {product.warranty}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-midnight mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-slate flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suitable For */}
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-purple-700">
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
                    <span className="text-2xl sm:text-3xl font-bold text-purple-600">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate">+ installation</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="tel:+919246344969" className="block">
                  <Button 
                    variant="primary" 
                    size="md" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-midnight text-center mb-10">
            Why Choose Our Commercial UPS?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Zero Downtime',
                description: 'True online topology ensures continuous power',
              },
              {
                icon: Cpu,
                title: 'Server Protection',
                description: 'Protects critical IT infrastructure',
              },
              {
                icon: Zap,
                title: 'Pure Sine Wave',
                description: 'Clean power for sensitive equipment',
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Emergency service across Hyderabad',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-midnight mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Protect Your Business from Power Outages
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Expert consultation and installation across Hyderabad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919246344969">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91-9246344969
              </Button>
            </a>
            <Link href="/battery-ups">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-midnight text-white hover:bg-steel"
              >
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}