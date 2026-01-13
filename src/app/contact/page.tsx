'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { COMPANY_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'residential',
    monthlyBill: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
    alert('Quote request submitted! We will contact you within 24 hours.');
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-midnight via-steel to-midnight text-pearl py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Let's Start Your Solar Journey</h1>
          <p className="text-xl text-slate">
            Get a free consultation and customized quote within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card variant="bordered">
              <h2 className="text-3xl font-bold text-midnight mb-6">Request a Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-midnight font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-steel/30 rounded-lg focus:border-gold focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-midnight font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-steel/30 rounded-lg focus:border-gold focus:outline-none"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-midnight font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-steel/30 rounded-lg focus:border-gold focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-midnight font-semibold mb-2">
                    Property Type *
                  </label>
                  <select
                    required
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-steel/30 rounded-lg focus:border-gold focus:outline-none"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-midnight font-semibold mb-2">
                    Monthly Electricity Bill *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-steel/30 rounded-lg focus:border-gold focus:outline-none"
                    placeholder="?10,000"
                  />
                </div>

                <div>
                  <label className="block text-midnight font-semibold mb-2">
                    Additional Details
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-steel/30 rounded-lg focus:border-gold focus:outline-none"
                    placeholder="Any specific requirements..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Get My Free Quote
                </Button>

                <p className="text-slate text-sm text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-midnight mb-6">Prefer to Talk Directly?</h2>

              <Card variant="hover">
                <div className="flex items-start space-x-4">
                  <Phone className="w-8 h-8 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-midnight mb-2">Call Us</h3>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-gold text-xl font-semibold hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-slate text-sm mt-1">Mon-Sat: 9 AM - 7 PM</p>
                  </div>
                </div>
              </Card>

              <Card variant="hover">
                <div className="flex items-start space-x-4">
                  <Mail className="w-8 h-8 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-midnight mb-2">Email Us</h3>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-gold font-semibold hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-slate text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card variant="hover">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-midnight mb-2">Visit Our Office</h3>
                    <p className="text-slate">{COMPANY_INFO.address}</p>
                    <p className="text-slate">{COMPANY_INFO.location}</p>
                  </div>
                </div>
              </Card>

              <Card variant="bordered" className="bg-gold/10">
                <Clock className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-bold text-midnight mb-2">Office Hours</h3>
                <div className="space-y-1 text-slate">
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
