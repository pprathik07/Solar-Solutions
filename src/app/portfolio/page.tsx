import React from 'react';
import { MapPin, Zap } from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Solar Projects Portfolio | 1000+ Installations Telangana',
  description: 'View our completed residential, commercial and industrial solar projects across Telangana.',
};

export default function PortfolioPage() {
  const projects = [
    {
      type: 'Residential',
      title: '5 kW Rooftop Installation',
      location: 'Kompally, Telangana',
      capacity: '5 kW',
      billBefore: '₹11,000',
      billAfter: '₹900',
      savings: '₹1.2L/year',
    },  
    {
      type: 'Commercial',
      title: 'Office Building Solar',
      location: 'Gachibowli, Telangana',
      capacity: '50 kW',
      billBefore: '₹85,000',
      billAfter: '₹15,000',
      savings: '₹8.4L/year',
    },
    {
      type: 'Industrial',
      title: 'Manufacturing Facility',
      location: 'Medchal Industrial Area',
      capacity: '200 kW',
      billBefore: '₹4.2L',
      billAfter: '₹1.1L',
      savings: '₹37L/year',
    },
  ];

  return (
    <div>
      {/* Hero - Smaller */}
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            1000+ Successful Installations
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate">
            Real projects, real customers, real savings across Telangana
          </p>
        </div>
      </section>
      {/* Stats - Smaller */}
      <section className="py-10 sm:py-12 md:py-14 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">1000+</div>
              <div className="text-xs sm:text-sm text-slate">Total Installations</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">5 MW+</div>
              <div className="text-xs sm:text-sm text-slate">Capacity Installed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">25L(kW)+</div>
              <div className="text-xs sm:text-sm text-slate">Units Saved</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">50,000+</div>
              <div className="text-xs sm:text-sm text-slate">Tons CO2 Prevented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Smaller */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-midnight text-center mb-6 sm:mb-8 md:mb-10">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <Card key={index} variant="bordered">
                <div className="bg-gold/10 text-gold px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold inline-block mb-3 sm:mb-4">
                  {project.type}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-midnight mb-1 sm:mb-2">{project.title}</h3>
                <div className="flex items-center space-x-2 text-slate mb-3 sm:mb-4">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-xs">{project.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-midnight mb-3 sm:mb-4">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                  <span className="font-semibold text-xs sm:text-sm">{project.capacity} System</span>
                </div>
                <div className="border-t border-steel/20 pt-3 sm:pt-4 space-y-1.5 sm:space-y-2">
                  <div className="flex justify-between text-[10px] sm:text-xs">
                    <span className="text-slate">Before:</span>
                    <span className="font-semibold">{project.billBefore}/month</span>
                  </div>
                  <div className="flex justify-between text-[10px] sm:text-xs">
                    <span className="text-slate">After:</span>
                    <span className="font-semibold text-green-600">{project.billAfter}/month</span>
                  </div>
                  <div className="flex justify-between text-[10px] sm:text-xs pt-1.5 sm:pt-2 border-t border-steel/20">
                    <span className="text-slate">Annual Savings:</span>
                    <span className="font-bold text-gold">{project.savings}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Smaller */}
      <section className="py-10 sm:py-12 md:py-16 bg-midnight text-pearl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Your Project Could Be Our Next Success Story</h2>
          <p className="text-sm sm:text-base md:text-lg text-slate mb-4 sm:mb-6">
            Join the growing list of satisfied customers
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-midnight px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gold/90 transition-colors"
          >
            Start Your Project Today
          </a>
        </div>
      </section>
    </div>
  );
}