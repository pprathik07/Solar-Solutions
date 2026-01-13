// src/types/index.ts

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  investment: string;
  roi: string;
  category: 'residential' | 'commercial' | 'industrial';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  savings: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  type: 'residential' | 'commercial' | 'industrial';
  capacity: string;
  image: string;
  monthlyBillBefore: string;
  monthlyBillAfter: string;
  savings: string;
  roi: string;
  installationDate: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  propertyType: 'residential' | 'commercial' | 'industrial';
  propertyOwnership: 'own' | 'rented';
  roofType: string;
  roofSpace: string;
  monthlyBill: number;
  timeline: string;
  message?: string;
}

export interface ROICalculation {
  systemSize: number;
  systemCost: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriod: number;
  totalSavings25Years: number;
}
