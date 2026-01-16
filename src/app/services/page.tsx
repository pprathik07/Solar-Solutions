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
      icon: <Home className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gold" />,
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
      icon: <Building2 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gold" />,
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
      icon: <Factory className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gold" />,
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
      icon: <Wrench className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gold" />,
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
      {/* Hero - Smaller */}
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Complete Solar Solutions for Every Need
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate max-w-3xl mx-auto">
            From residential rooftops to large industrial installations, we have the expertise
            and experience to deliver results
          </p>
        </div>
      </section>

      {/* Services Grid - Smaller */}
      <section className="py-10 sm:py-12 md:py-16 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} variant="bordered" className="hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">{service.icon}</div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-midnight text-center mb-2 sm:mb-3 md:mb-4">
                  {service.title}
                </h2>
                <p className="text-slate text-center mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm">{service.description}</p>

                <div className="space-y-2 sm:space-y-2.5 md:space-y-3 mb-4 sm:mb-5 md:mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full"></div>
                      <span className="text-slate text-[10px] sm:text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-midnight/5 rounded-lg p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6">
                  <div className="text-[10px] sm:text-xs text-slate mb-0.5 sm:mb-1">Investment Range</div>
                  <div className="text-base sm:text-lg md:text-xl font-bold text-midnight">{service.investment}</div>
                </div>

                <Link href={service.link}>
                  <Button variant="outline" className="w-full text-xs sm:text-sm">
                    Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services - Smaller */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight text-center mb-6 sm:mb-8 md:mb-10">
            Why Choose Vajra Renew Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">✔</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-midnight mb-1 sm:mb-2">Certified Experts</h3>
              <p className="text-slate text-xs sm:text-sm">
                Our team consists of certified solar engineers with years of hands-on experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">✔</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-midnight mb-1 sm:mb-2">Complete Transparency</h3>
              <p className="text-slate text-xs sm:text-sm">
                Detailed quotations with no hidden costs. You know exactly what you're paying for
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">✔</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-midnight mb-1 sm:mb-2">Lifetime Support</h3>
              <p className="text-slate text-xs sm:text-sm">
                We're just a call away. Most service requests resolved within 48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Smaller */}
      <section className="py-10 sm:py-12 md:py-16 bg-midnight text-pearl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Not Sure Which Solution Is Right for You?</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate mb-4 sm:mb-6">
            Our experts will analyze your requirements and recommend the perfect solution
          </p>
          <a href="tel:+919246344969">
            <Button variant="primary" size="md" className="text-xs sm:text-sm">
              Call +91-9246344969 for Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}