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
      icon: <Award className="w-12 h-12 text-gold" />,
      title: 'Proven Expertise',
      description: 'Over 6 years in the solar industry with 500+ successful installations across Telangana.',
    },
    {
      icon: <Shield className="w-12 h-12 text-gold" />,
      title: 'Premium Quality',
      description: 'Top-tier solar panels with 25-year warranties and inverters backed by 5-10 year guarantees.',
    },
    {
      icon: <Users className="w-12 h-12 text-gold" />,
      title: 'Complete Support',
      description: 'From free site survey to installation and maintenance - we handle everything.',
    },
    {
      icon: <Zap className="w-12 h-12 text-gold" />,
      title: 'Local Expertise',
      description: 'Headquartered in Peerzadiguda, we understand Telangana\'s climate and regulations.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              6+ Years of Powering Telangana with Clean Energy
            </h1>
            <p className="text-xl text-slate">
              The story of how we became Telangana's most trusted solar installation company
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">{COMPANY_INFO.experience}</div>
              <div className="text-slate">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">{COMPANY_INFO.installations}</div>
              <div className="text-slate">Installations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">25L(kW)</div>
              <div className="text-slate">Units Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">{COMPANY_INFO.panelWarranty}</div>
              <div className="text-slate">Panel Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-midnight mb-6">Our Journey</h2>
            <div className="prose prose-lg text-slate">
              <p className="mb-4">
                Founded over a decade ago with a simple mission - to make solar energy accessible
                and affordable for every home and business in Telangana. What started as a small
                team of passionate engineers has grown into one of Telangana's most respected solar
                installation companies.
              </p>
              <p className="mb-4">
                We've weathered every challenge - from rapidly changing technology to evolving
                government policies - while maintaining our unwavering commitment to quality and
                customer satisfaction. Every one of our 5,000+ installations represents a family or
                business that trusted us to deliver, and we've never taken that trust lightly.
              </p>
              <p>
                Today, Vajra Renew stands as a testament to what happens when technical expertise
                meets genuine care for customer success. Our installations have collectively saved
                millions in electricity costs and prevented thousands of tons of CO2 emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-pearl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-midnight text-center mb-12">
            Why Choose Vajra Renew
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} variant="hover">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-midnight mb-2">{item.title}</h3>
                    <p className="text-slate">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-midnight text-center mb-12">
            Your Solar Journey in 4 Simple Steps
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
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
                    'We obtain net metering approval and hand over your fully operational solar system, along with a comprehensive user guide.',
                  timeline: '7-10 days',
                },
                {
                  step: '4',
                  title: 'Grid Connection & Handover',
                  description:
                    'Our certified engineers handle everything - From paper work to complete installation with minimal disruption.',
                  timeline: '1-2 weeks',
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gold text-midnight rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-midnight mb-2">{step.title}</h3>
                    <p className="text-slate mb-2">{step.description}</p>
                    <div className="text-sm text-gold font-semibold">Timeline: {step.timeline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-midnight to-steel text-pearl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Solar Journey?</h2>
          <p className="text-xl text-slate mb-8">
            Join 5,000+ satisfied customers who trust Vajra Renew
          </p>
          <a href="/contact" className="inline-block bg-gold text-midnight px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold/90 transition-colors">
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
