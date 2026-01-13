import React from 'react';
import Link from 'next/link';
import { Home, Building2, Factory, Wrench, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Solar Services | Residential, Commercial & Industrial',
  description: 'Complete solar solutions for homes, businesses, and industries in Telangana. Expert installation and maintenance.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Home className="w-16 h-16 text-gold" />,
      title: 'Residential Solar',
      description: 'Transform your home into a power-generating asset. Cut bills by 80-90%.',
      features: [
        '3-10 kW systems',
        'Up to 40% government subsidy',
        '25-year panel warranty',
        '3-4 year ROI',
        'Free site survey',
      ],
      investment: '₹2-6 Lakhs (after subsidy)',
      link: '/services/residential',
    },
    {
      icon: <Building2 className="w-16 h-16 text-gold" />,
      title: 'Commercial Solar',
      description: 'Boost profits by reducing operational costs. Perfect for offices and shops.',
      features: [
        '10-100 kW systems',
        'Tax depreciation benefits',
        'Priority after-sales support',
        '3-4 year ROI',
        'Minimal downtime',
      ],
      investment: '₹5-50 Lakhs',
      link: '/services/commercial',
    },
    {
      icon: <Factory className="w-16 h-16 text-gold" />,
      title: 'Industrial Solar',
      description: 'High-capacity solutions for manufacturing and large facilities.',
      features: [
        '100kW - 1MW+ systems',
        'Enterprise-grade components',
        'SCADA monitoring',
        'Dedicated account manager',
        '3-4.5 year ROI',
      ],
      investment: '₹50L - ₹5Cr+',
      link: '/services/industrial',
    },
    {
      icon: <Wrench className="w-16 h-16 text-gold" />,
      title: 'Maintenance & AMC',
      description: 'Keep your system at peak performance with our expert maintenance.',
      features: [
        '24/7 priority support',
        'Performance monitoring',
        'Free component replacement under warranty',
        'Annual maintenance contracts',
      ],
      investment: '₹5,000 - ₹50,000/year',
      link: '/contact',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Complete Solar Solutions for Every Need
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            From residential rooftops to large industrial installations, we have the expertise
            and experience to deliver results
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} variant="bordered" className="hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold text-midnight text-center mb-4">
                  {service.title}
                </h2>
                <p className="text-slate text-center mb-6">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-slate">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-midnight/5 rounded-lg p-4 mb-6">
                  <div className="text-sm text-slate mb-1">Investment Range</div>
                  <div className="text-xl font-bold text-midnight">{service.investment}</div>
                </div>

                <Link href={service.link}>
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-midnight text-center mb-12">
            Why Choose Vajra Renew Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✔</span>
              </div>
              <h3 className="text-xl font-bold text-midnight mb-2">Certified Experts</h3>
              <p className="text-slate">
                Our team consists of certified solar engineers with years of hands-on experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✔</span>
              </div>
              <h3 className="text-xl font-bold text-midnight mb-2">Complete Transparency</h3>
              <p className="text-slate">
                Detailed quotations with no hidden costs. You know exactly what you're paying for
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✔</span>
              </div>
              <h3 className="text-xl font-bold text-midnight mb-2">Lifetime Support</h3>
              <p className="text-slate">
                We're just a call away. Most service requests resolved within 48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-midnight text-pearl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Not Sure Which Solution Is Right for You?</h2>
          <p className="text-xl text-slate mb-8">
            Our experts will analyze your requirements and recommend the perfect solution
          </p>
          <a href="tel:+916281253858">
            <Button variant="primary" size="lg">
              Call +91-6281253858 for Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
