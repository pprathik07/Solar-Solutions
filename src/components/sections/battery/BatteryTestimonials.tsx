/**
 * Battery Testimonials Section
 * 
 * Customer reviews and success stories for battery/UPS installations
 * Focus on Hyderabad/Telangana locations for local SEO
 * 
 * SEO: battery reviews Hyderabad, UPS customer feedback Telangana
 * 
 * @component
 * @memoized
 */

'use client';

import React, { memo } from 'react';
import { Star, MapPin, Battery, Clock } from 'lucide-react';
import { batteryTestimonials } from '@/lib/battery-pricing';

const BatteryTestimonials = memo(() => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-orange-600 fill-orange-600" />
            <span className="text-orange-700 font-semibold text-sm">1000+ Happy Customers</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-midnight mb-3">
            What Our Customers Say
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate max-w-2xl mx-auto">
            Real experiences from homes and businesses across Hyderabad
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {batteryTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 sm:p-6 border border-orange-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                ))}
              </div>

              {/* Comment */}
              <blockquote className="text-sm sm:text-base text-midnight mb-4 leading-relaxed">
                "{testimonial.comment}"
              </blockquote>

              {/* Product Info */}
              <div className="bg-white/60 rounded-lg p-3 mb-4 space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <Battery className="w-4 h-4 text-orange-600" />
                  <span className="font-medium text-midnight">{testimonial.product}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span className="text-slate">Backup: <strong className="text-midnight">{testimonial.backupHours}</strong></span>
                </div>
              </div>

              {/* Customer Info */}
              <div className="flex items-start justify-between pt-4 border-t border-orange-200">
                <div>
                  <p className="font-bold text-midnight text-sm sm:text-base">{testimonial.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-orange-500" />
                    <p className="text-xs sm:text-sm text-slate">{testimonial.location}</p>
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                    ✓ Verified
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: '1000+', label: 'Installations', icon: Battery },
            { value: '4.9/5', label: 'Average Rating', icon: Star },
            { value: '98%', label: 'Satisfaction Rate', icon: '😊' },
            { value: '24/7', label: 'Support', icon: Clock }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

BatteryTestimonials.displayName = 'BatteryTestimonials';

export default BatteryTestimonials;