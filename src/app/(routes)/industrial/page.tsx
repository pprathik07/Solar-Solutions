/**
 * Industrial Battery Systems Page
 * 
 * Heavy-duty battery and UPS solutions for factories and industries
 * Displays industrial battery products with pricing
 * 
 * URL: /battery-ups/industrial
 * SEO: industrial UPS Hyderabad, factory battery, VRLA battery Telangana
 * 
 * @page
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, Zap, Clock, Shield, Factory, CheckCircle, Settings } from 'lucide-react';
import Button from '@/components/ui/Button';
import { industrialBatteries } from '@/lib/battery-pricing';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Industrial Battery Systems Hyderabad | Factory UPS & Battery Banks',
  description: 'Heavy-duty battery systems for factories in Telangana. 100KVA UPS, VRLA battery banks. 10-year warranty. Three-phase systems. Installation in Medchal, Patancheru, Jeedimetla.',
  keywords: 'industrial UPS Hyderabad, factory battery Telangana, VRLA battery, three-phase UPS, 100KVA UPS, battery bank, industrial power backup Hyderabad',
};

export default function IndustrialBatteryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4">
          <Link 
            href="/battery-ups" 
            className="inline-flex items-center gap-2 text-sm mb-4 hover:underline opacity-90 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Battery Solutions
          </Link>
          
          <div className="flex items-center gap-3 mb-3">
            <Factory className="w-8 h-8 sm:w-10 sm:h-10" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Industrial Battery Systems
            </h1>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl">
            Heavy-duty power backup for manufacturing units and factories in Telangana
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap gap-4 mt-6 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>High-Capacity Banks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Three-Phase Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>10-Year Life</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-midnight mb-3">
              Industrial Power Backup Solutions
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Scalable, reliable power systems for critical industrial operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industrialBatteries.map((product) => (
              <article
                key={product.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 hover:shadow-2xl transition-all duration-300"
              >
                {/* Brand & Type Badge */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <Settings className="w-6 h-6 text-orange-600" />
                  <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded">
                    {product.brand}
                  </span>
                  {product.batteryType && (
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                      {product.batteryType.toUpperCase()}
                    </span>
                  )}
                  {product.upsType && (
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {product.upsType} UPS
                    </span>
                  )}
                </div>
                
                {/* Product Name */}
                <h3 className="font-bold text-xl text-midnight mb-4">
                  {product.name}
                </h3>
                
                {/* Specifications */}
                <div className="space-y-3 mb-6 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-midnight">Capacity</p>
                      <p className="text-sm text-slate">{product.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-midnight">Backup Time</p>
                      <p className="text-sm text-slate">{product.backupTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-midnight">Warranty</p>
                      <p className="text-sm text-slate">{product.warranty}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-midnight mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suitable For */}
                <div className="bg-orange-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-orange-900">
                    <strong className="block mb-1">Ideal for:</strong>
                    {product.suitable}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  {product.discount && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base text-red-500 line-through">
                        ₹{product.mrp.toLocaleString()}
                      </span>
                      <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded">
                        Save {product.discount}%
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-orange-600">
                      ₹{product.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-slate mt-1">Includes installation & commissioning</p>
                </div>

                {/* CTA Button */}
                <a href="tel:+919246344969" className="block">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Request Detailed Quote
                  </Button>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-midnight text-center mb-10">
            Why Choose Our Industrial Solutions?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Proven Reliability',
                description: 'Battle-tested in harsh industrial environments',
              },
              {
                icon: Settings,
                title: 'Custom Design',
                description: 'Tailored solutions for your specific needs',
              },
              {
                icon: Zap,
                title: 'Scalable Systems',
                description: 'Expand capacity as your business grows',
              },
              {
                icon: Clock,
                title: 'Expert Installation',
                description: 'Certified engineers for complex setups',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-midnight mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-midnight text-center mb-10">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              'Manufacturing',
              'Pharmaceuticals',
              'Food Processing',
              'Data Centers',
              'Warehouses',
              'Chemical Plants',
            ].map((industry, idx) => (
              <div key={idx} className="bg-orange-50 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-midnight">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Power Your Industrial Operations
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get a customized solution for your factory in Telangana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919246344969">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91-9246344969
              </Button>
            </a>
            <a href="mailto:vajrarenew@gmail.com">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-midnight text-white hover:bg-steel"
              >
                Email for Site Survey
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}