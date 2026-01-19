/**
 * Battery & UPS Types
 * 
 * Type definitions for Vajra Power Solutions - Battery & UPS business
 * Supports residential inverters, commercial UPS, and industrial battery systems
 * 
 * @location Telangana, Hyderabad
 * @business Vajra Renew - Power Solutions Division
 */

// Product Categories
export type BatteryCategory = 'residential' | 'commercial' | 'industrial';

// Battery Technologies
export type BatteryType = 'tubular' | 'lithium' | 'gel' | 'maintenance-free';

// UPS Types
export type UPSType = 'online' | 'offline' | 'line-interactive';

/**
 * Battery Product Interface
 * Represents a single battery/UPS product offering
 */
export interface BatteryProduct {
  id: string;
  name: string;
  brand: string;
  category: BatteryCategory;
  batteryType?: BatteryType;
  upsType?: UPSType;
  
  // Technical Specifications
  capacity: string;              // e.g., "150 Ah", "5 kVA"
  voltage: string;               // e.g., "12V", "230V"
  backupTime: string;            // e.g., "4-6 hours", "8-10 hours"
  warranty: string;              // e.g., "5 years", "3 years"
  
  // Pricing
  price: number;                 // Base price in INR
  mrp: number;                   // Maximum Retail Price
  discount?: number;             // Discount percentage
  
  // Product Details
  description: string;
  features: string[];
  suitable: string;              // "Suitable for 2-3 BHK homes"
  image?: string;
  
  // SEO
  slug: string;                  // URL-friendly identifier
  metaDescription?: string;
}

/**
 * Battery Brand Interface
 * Represents partner battery/UPS brands
 */
export interface BatteryBrand {
  id: string;
  name: string;
  logo: string;
  description: string;
  products: number;              // Number of products from this brand
  popular: boolean;              // Featured brand
  warranty: string;              // Standard warranty
  website?: string;
}

/**
 * Backup Calculator Input
 * User inputs for calculating backup requirements
 */
export interface BackupCalculatorInput {
  powerLoad: number;             // Total power consumption in watts
  backupHours: number;           // Desired backup duration in hours
  category: BatteryCategory;
  location: string;              // City/area in Telangana
}

/**
 * Backup Calculator Result
 * Recommendation output from calculator
 */
export interface BackupCalculatorResult {
  recommendedCapacity: string;   // "200 Ah battery + 1000 VA inverter"
  estimatedPrice: number;        // Total cost in INR
  backupTime: string;            // Expected backup duration
  productRecommendations: BatteryProduct[];
  monthlySavings?: number;       // Savings vs generator/alternative
}

/**
 * Battery Installation Service
 */
export interface BatteryService {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;              // "2-3 hours"
  includes: string[];
  warranty: string;
}

/**
 * Battery Testimonial
 * Customer review for battery/UPS installation
 */
export interface BatteryTestimonial {
  id: string;
  name: string;
  location: string;              // Area in Hyderabad/Telangana
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  product: string;               // Battery/UPS product installed
  backupHours: string;           // Actual backup achieved
  installationDate: string;
  verified: boolean;
}

/**
 * Battery Company Information
 * Business details for battery division
 */
export interface BatteryCompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  serviceAreas: string[];        // Areas in Telangana
  experience: string;            // "10+ years"
  installations: string;         // "1000+ installations"
  brands: string[];              // Partner brands
}

/**
 * Battery FAQ Item
 * Frequently asked questions about batteries/UPS
 */
export interface BatteryFAQ {
  id: string;
  question: string;
  answer: string;
  category: BatteryCategory | 'general';
  keywords: string[];            // SEO keywords
}