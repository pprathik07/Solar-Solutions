import React from 'react';
import { Award, Users, Zap, Shield, CheckCircle } from 'lucide-react';
import Card from '@/components/ui/Card';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'About Us | Vajra Renew - 6+ Years Solar Excellence',
  description: '6+ years experience, 500+ installations. Learn about Telangana\'s most trusted solar company.',
};

export default function AboutPage() {
  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />,
      title: 'Proven Expertise',
      description: 'Over 6 years in the solar industry with 500+ successful installations across Telangana.',
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

  return (
    <div>
      {/* Hero Section - Much smaller */}
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5">
              6+ Years of Powering Telangana with Clean Energy
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate">
              The story of how we became Telangana's most trusted solar installation company
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Smaller */}
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
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">25L(kW)</div>
              <div className="text-xs sm:text-sm text-slate">Units Generated</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">{COMPANY_INFO.panelWarranty}</div>
              <div className="text-xs sm:text-sm text-slate">Panel Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story - Smaller */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight mb-3 sm:mb-4 md:mb-5">Our Journey</h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm md:text-base text-slate leading-relaxed">
                Founded over a decade ago with a simple mission - to make solar energy accessible
                and affordable for every home and business in Telangana. What started as a small
                team of passionate engineers has grown into one of Telangana's most respected solar
                installation companies.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate leading-relaxed">
                We've weathered every challenge - from rapidly changing technology to evolving
                government policies - while maintaining our unwavering commitment to quality and
                customer satisfaction. Every one of our 5,000+ installations represents a family or
                business that trusted us to deliver, and we've never taken that trust lightly.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate leading-relaxed">
                Today, Vajra Renew stands as a testament to what happens when technical expertise
                meets genuine care for customer success. Our installations have collectively saved
                millions in electricity costs and prevented thousands of tons of CO2 emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Smaller */}
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

      {/* Process Section - Smaller */}
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
                    'Our certified engineers handle everything - From paper work to complete installation with minimal disruption.',
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

      {/* CTA - Smaller */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-midnight to-steel text-pearl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to Start Your Solar Journey?</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate mb-4 sm:mb-6">
            Join 5,000+ satisfied customers who trust Vajra Renew
          </p>
          <a href="/contact" className="inline-block bg-gold text-midnight px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gold/90 transition-colors">
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}