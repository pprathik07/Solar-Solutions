import React from 'react';
import { Award, Users, Zap, Shield, CheckCircle, Sun, Home, Building, Factory } from 'lucide-react';
import Card from '@/components/ui/Card';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'About Us | Vajra Renew - 10+ Years Solar Excellence',
  description: '10+ years experience, 1000+ installations. Learn about Telangana\'s most trusted solar company.',
};

export default function AboutPage() {
  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />,
      title: 'Proven Expertise',
      description: 'Over 10 years in the solar industry with 1000+ successful installations across Telangana.',
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />,
      title: 'Premium Quality',
      description: 'Top-tier solar panels with 25-year warranties and inverters backed by 5-10 year guarantees.',
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />,
      title: 'Complete Support',
      description: 'From free site survey to installation and maintenance - we handle everything.',
    },
    {
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />,
      title: 'Local Expertise',
      description: 'Headquartered in Peerzadiguda, we understand Telangana\'s climate and regulations.',
    },
  ];

  const installations = [
    {
      icon: <Home className="w-6 h-6 text-gold" />,
      title: 'RCC Roofs',
      description: 'Residential rooftop installations'
    },
    {
      icon: <Factory className="w-6 h-6 text-gold" />,
      title: 'Industrial Shed',
      description: 'Large-scale commercial solutions'
    },
    {
      icon: <Sun className="w-6 h-6 text-gold" />,
      title: 'Ground Mounted',
      description: 'Open land solar farms'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5">
              Powering a Sustainable Future with Solar Energy
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate">
              Dedicated to transforming the way energy is consumed by providing top-quality solar solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">{COMPANY_INFO.experience}</div>
              <div className="text-xs sm:text-sm text-slate">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">{COMPANY_INFO.installations}</div>
              <div className="text-xs sm:text-sm text-slate">Installations</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">25L+</div>
              <div className="text-xs sm:text-sm text-slate">Units Generated</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">{COMPANY_INFO.panelWarranty}</div>
              <div className="text-xs sm:text-sm text-slate">Panel Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight mb-4 sm:mb-6 text-center">Our Goal</h2>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-slate leading-relaxed">
                At Vajra Renew, we are dedicated to transforming the way energy is consumed by providing top-quality solar solutions. Our goal is to make clean, renewable energy accessible and affordable for everyone.
              </p>
              <p className="text-sm sm:text-base text-slate leading-relaxed">
                With over 6 years of experience, we have successfully completed numerous solar projects for a wide range of clients, including homeowners, businesses, and industries. Our expertise in solar panel installation, maintenance, and energy optimization ensures that every project is executed with precision and efficiency.
              </p>
              <p className="text-sm sm:text-base text-slate leading-relaxed">
                Customer satisfaction is at the heart of everything we do. We take pride in delivering high-performance solar systems that maximize energy production and reduce operational costs. Our happy customers stand as a testament to our commitment to excellence, reliability, and innovation.
              </p>
              <p className="text-sm sm:text-base text-slate leading-relaxed">
                By choosing solar energy, you are not only investing in a sustainable future but also taking a step towards energy independence. Join us in our mission to harness the power of the sun and create a cleaner, more eco-friendly world.
              </p>
              <p className="text-sm sm:text-base text-slate leading-relaxed italic">
                Switch to solar today - Solar power your home, business and future with renewable energy!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid-Tied Solar System */}
      <section className="py-10 sm:py-12 md:py-16 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight mb-4 sm:mb-6 text-center">
              How Does Grid Tied Solar Work?
            </h2>
            <p className="text-sm sm:text-base text-slate text-center mb-6">
              Grid-tied Solar Rooftop - Residential, Industrial, Commercial
            </p>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-midnight mb-4">Solar System Components:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-midnight mb-2">Power Generation:</h4>
                  <ul className="space-y-2 text-sm text-slate">
                    <li>• Solar Panels (capture sunlight)</li>
                    <li>• Inverter (converts DC to AC)</li>
                    <li>• Net-Meter (tracks energy flow)</li>
                    <li>• AC Break Panel (distribution)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-midnight mb-2">Grid Connection:</h4>
                  <ul className="space-y-2 text-sm text-slate">
                    <li>• Power sent to grid during surplus</li>
                    <li>• Power drawn during deficit</li>
                    <li>• Transmission lines connect to grid</li>
                    <li>• Substation manages distribution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Types */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight text-center mb-6 sm:mb-8">
            End-to-End Solar Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
            {installations.map((item, index) => (
              <Card key={index} variant="hover">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-midnight mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto bg-pearl rounded-lg p-6">
            <h3 className="text-lg sm:text-xl font-bold text-midnight mb-4 text-center">We Offer End-to-End Solutions:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                'Demand Assessment',
                'Government Approval & Permits',
                'Optimized Solutions',
                'Installation & Commissioning',
                'Engineering Excellence',
                'O&M & Performance Monitoring'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Solarize */}
      <section className="py-10 sm:py-12 md:py-16 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight mb-6 text-center">
              Why Solarize Your Rooftop?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                'Minimize your electricity bills',
                'Reduce dependence on the grid',
                'Optimum O & M cost',
                'Positive impact on climate change',
                'Increase environmental-friendly property',
                'Reduce carbon foot print',
                'Go Solar today & power your Future',
                'Low Maintenance & Long Life pan'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight mb-6 text-center">Why Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-midnight">Expert Installation</h4>
                    <p className="text-sm text-slate">Professional installation of world-class solar systems with high efficiency and durability.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-midnight">Cost Savings</h4>
                    <p className="text-sm text-slate">Helping clients reduce electricity bills and get the best return on investment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-midnight">Customized Solutions</h4>
                    <p className="text-sm text-slate">Tailor-made solar solutions based on energy needs and budget.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-midnight">High-Quality Components</h4>
                    <p className="text-sm text-slate">Use of top-tier solar panels, inverters, and BOM for long-term performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-midnight">Government Incentives & Financing</h4>
                    <p className="text-sm text-slate">Assistance with subsidies, incentives, and easy EMI options.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-midnight">After-Sales Support & Maintenance</h4>
                    <p className="text-sm text-slate">Reliable post-installation service for system efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PM Surya Ghar Subsidy */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-400 text-midnight px-4 py-2 rounded-lg font-bold mb-4">
              PM - Surya Ghar Multi Bijli Yojana
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight mb-6">
              Government Subsidy Available
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-500 text-white p-4 rounded-lg">
                <div className="text-sm opacity-90 mb-1">Subsidy on 1 kw</div>
                <div className="text-2xl font-bold">Rs. 30,000/-</div>
              </div>
              <div className="bg-green-500 text-white p-4 rounded-lg">
                <div className="text-sm opacity-90 mb-1">Subsidy on 2 kw</div>
                <div className="text-2xl font-bold">Rs. 60,000/-</div>
              </div>
              <div className="bg-green-500 text-white p-4 rounded-lg">
                <div className="text-sm opacity-90 mb-1">Subsidy on 3 kw - 10 kw</div>
                <div className="text-2xl font-bold">Rs. 78,000/-</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-midnight mb-3">Vajra Renew - Authorized Vendor</h3>
              <p className="text-sm sm:text-base text-slate mb-4">
                We help you maximize government benefits and subsidies for your solar installation
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate">
                <span>📞 9246344969</span>
                <span>📞 8985969858</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Cards */}
      <section className="py-10 sm:py-12 md:py-16 bg-pearl">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight text-center mb-6 sm:mb-8 md:mb-10">
            Why Choose Vajra Renew
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} variant="hover">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-midnight mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight text-center mb-6 sm:mb-8 md:mb-10">
            Your Solar Journey in 4 Simple Steps
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  step: '1',
                  title: 'Free Consultation & Site Survey',
                  description:
                    'Our expert visits your property for a free assessment. We analyze your electricity consumption, roof structure, and design the perfect system.',
                  timeline: '1-2 days',
                },
                {
                  step: '2',
                  title: 'Custom Design & Quotation',
                  description:
                    'Receive a detailed system design with 3D roof layout and transparent quotation covering all costs and government subsidies.',
                  timeline: '2-3 days',
                },
                {
                  step: '3',
                  title: 'Professional Installation',
                  description:
                    'Our certified engineers handle everything - From paperwork to complete installation with minimal disruption.',
                  timeline: '7-10 days',
                },
                {
                  step: '4',
                  title: 'Grid Connection & Handover',
                  description:
                    'We obtain net metering approval and hand over your fully operational solar system, along with a comprehensive user guide.',
                  timeline: '1-2 weeks',
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gold text-midnight rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-midnight mb-1 sm:mb-2">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate mb-1 sm:mb-2">{step.description}</p>
                    <div className="text-[10px] sm:text-xs text-gold font-semibold">Timeline: {step.timeline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-midnight to-steel text-pearl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to Start Your Solar Journey?</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate mb-4 sm:mb-6">
            Join 1000+ satisfied customers who trust Vajra Renew
          </p>
          <a href="/contact" className="inline-block bg-gold text-midnight px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gold/90 transition-colors">
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}