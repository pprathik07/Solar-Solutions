/**
 * Battery & UPS Pricing Data
 * 
 * Product catalog and pricing for Vajra Power Solutions
 * Covers residential inverters, commercial UPS, and industrial battery systems
 * Prices are for Hyderabad, Telangana market (2025)
 * 
 * @location Telangana, Hyderabad, Peerzadiguda
 * @business Vajra Renew - Power Solutions Division
 */

import type { BatteryProduct, BatteryBrand, BatteryTestimonial } from '@/types/battery';

// ============================================================================
// RESIDENTIAL BATTERY PRODUCTS (Home Inverters & Batteries)
// ============================================================================

export const residentialBatteries: BatteryProduct[] = [
  {
    id: 'res-lum-150ah',
    name: 'Okaya RC 18000ST 150Ah Tubular Battery + Zelio 1100 Inverter',
    brand: 'Okaya',
    category: 'residential',
    batteryType: 'tubular',
    capacity: '150 Ah',
    voltage: '12V',
    backupTime: '4-6 hours',
    warranty: '5 years battery + 2 years inverter',
    price: 22500,
    mrp: 28000,
    discount: 20,
    description: 'Perfect for 2-3 BHK homes in Hyderabad. Powers 3-4 fans, 4-5 lights, TV, and Wi-Fi router during power cuts.',
    features: [
      'Deep discharge tubular technology',
      'Low maintenance design',
      'Suitable for Telangana climate',
      'Pure sine wave output',
      'Overload and short circuit protection'
    ],
    suitable: 'Ideal for 2-3 BHK apartments in Hyderabad, Secunderabad, Kompally',
    image: '/images/battery/home-inverter.jpg',
    slug: 'Okaya-150ah-home-inverter-hyderabad',
    metaDescription: 'Okaya 150Ah inverter battery for Hyderabad homes. 4-6 hours backup, 5-year warranty. Free installation. Call +91-9246344969'
  },
  {
    id: 'res-exide-200ah',
    name: 'Exide Inva Master IMST1500 200Ah + 1500VA Inverter Combo',
    brand: 'Exide',
    category: 'residential',
    batteryType: 'tubular',
    capacity: '200 Ah',
    voltage: '12V',
    backupTime: '6-8 hours',
    warranty: '5 years battery + 2 years inverter',
    price: 29500,
    mrp: 36000,
    discount: 18,
    description: 'Extended backup solution for large homes and villas in Telangana. Supports multiple ACs, refrigerators during outages.',
    features: [
      'High-capacity tubular plates',
      'Longer backup time',
      'Supports heavy loads',
      'Intelligent battery management',
      'Low water loss technology'
    ],
    suitable: 'Perfect for 3-4 BHK villas, independent houses in LB Nagar, Gachibowli',
    image: '/images/battery/home-inverter.jpg',
    slug: 'exide-200ah-home-ups-telangana',
    metaDescription: 'Exide 200Ah home UPS for Telangana villas. 6-8 hours backup for heavy loads. 5-year warranty. Installation in Hyderabad.'
  },
  {
    id: 'res-amaron-180ah',
    name: 'Amaron Quanta 180Ah Tall Tubular Battery + V-Guard VWI 1000 Inverter',
    brand: 'Amaron',
    category: 'residential',
    batteryType: 'tubular',
    capacity: '180 Ah',
    voltage: '12V',
    backupTime: '5-7 hours',
    warranty: '4 years battery + 2 years inverter',
    price: 25000,
    mrp: 30500,
    discount: 18,
    description: 'Reliable power backup for Hyderabad apartments. Zero-maintenance tubular battery with smart inverter.',
    features: [
      'Maintenance-free operation',
      'High temperature performance',
      'Suited for Telangana summers',
      'Silent operation',
      'Compact design'
    ],
    suitable: 'Best for 2-3 BHK flats in Nacharam, Uppal, Miyapur, Kukatpally',
    image: '/images/battery/home-inverter.jpg',
    slug: 'amaron-180ah-inverter-battery-hyderabad',
    metaDescription: 'Amaron 180Ah maintenance-free inverter for Hyderabad apartments. 5-7 hours backup, 4-year warranty. Free home delivery.'
  }
];

// ============================================================================
// COMMERCIAL UPS SYSTEMS (Offices, Shops, Clinics)
// ============================================================================

export const commercialUPS: BatteryProduct[] = [
  {
    id: 'com-apc-3kva',
    name: 'APC Smart-UPS 3000VA Online UPS - 3KVA',
    brand: 'APC by Schneider',
    category: 'commercial',
    upsType: 'online',
    capacity: '3 kVA / 2400 W',
    voltage: '230V',
    backupTime: '30-45 minutes',
    warranty: '3 years comprehensive',
    price: 45000,
    mrp: 55000,
    discount: 18,
    description: 'Enterprise-grade online UPS for offices in Hyderabad. Protects servers, workstations, networking equipment.',
    features: [
      'True online double-conversion',
      'Pure sine wave output',
      'Automatic voltage regulation',
      'Hot-swappable batteries',
      'LCD display with real-time status',
      'Network management card compatible'
    ],
    suitable: 'IT companies, software firms in HITEC City, Gachibowli, Madhapur',
    image: '/images/battery/commercial-ups.jpg',
    slug: 'apc-3kva-online-ups-hyderabad-offices',
    metaDescription: 'APC 3KVA online UPS for Hyderabad IT offices. True double-conversion, 3-year warranty. Installation in HITEC City, Gachibowli.'
  },
  {
    id: 'com-Okaya-5kva',
    name: 'Okaya Cruze 5KVA Online UPS + External Battery Bank',
    brand: 'Okaya',
    category: 'commercial',
    upsType: 'online',
    capacity: '5 kVA / 4000 W',
    voltage: '230V',
    backupTime: '1-2 hours',
    warranty: '2 years UPS + 5 years batteries',
    price: 65000,
    mrp: 80000,
    discount: 19,
    description: 'High-capacity UPS for shops, clinics, restaurants in Telangana. Extended backup with battery bank.',
    features: [
      'True online topology',
      'Wide input voltage range',
      'Bypass switch for maintenance',
      'Supports external battery expansion',
      'Overload protection',
      'Remote monitoring capable'
    ],
    suitable: 'Retail shops, medical clinics, restaurants in Secunderabad, Dilsukhnagar',
    image: '/images/battery/commercial-ups.jpg',
    slug: 'Okaya-5kva-commercial-ups-telangana',
    metaDescription: 'Okaya 5KVA commercial UPS for shops & clinics in Telangana. 1-2 hours backup, 2-year warranty. Free installation Hyderabad.'
  },
  {
    id: 'com-microtek-10kva',
    name: 'Microtek Online UPS 10KVA Three Phase + Battery Pack',
    brand: 'Microtek',
    category: 'commercial',
    upsType: 'online',
    capacity: '10 kVA / 8000 W',
    voltage: '415V Three Phase',
    backupTime: '2-3 hours',
    warranty: '2 years UPS + 5 years batteries',
    price: 125000,
    mrp: 155000,
    discount: 19,
    description: 'Three-phase UPS for large commercial setups in Hyderabad. Powers entire office buildings, showrooms.',
    features: [
      'Three-phase input/output',
      'True online double-conversion',
      'Scalable battery backup',
      'DSP-based technology',
      'Unity power factor',
      'N+1 parallel redundancy ready'
    ],
    suitable: 'Large offices, showrooms, hotels in Banjara Hills, Jubilee Hills, Somajiguda',
    image: '/images/battery/commercial-ups.jpg',
    slug: 'microtek-10kva-three-phase-ups-hyderabad',
    metaDescription: 'Microtek 10KVA three-phase UPS for commercial buildings in Hyderabad. 2-3 hours backup, scalable. Installation across Telangana.'
  }
];

// ============================================================================
// INDUSTRIAL BATTERY SYSTEMS (Factories, Warehouses)
// ============================================================================

export const industrialBatteries: BatteryProduct[] = [
  {
    id: 'ind-exide-powerafe',
    name: 'Exide Powerafe Plus 2V 1000Ah VRLA Battery Bank (48V System)',
    brand: 'Exide',
    category: 'industrial',
    batteryType: 'gel',
    capacity: '1000 Ah @ 48V',
    voltage: '48V DC',
    backupTime: '4-6 hours',
    warranty: '10 years float service',
    price: 385000,
    mrp: 450000,
    discount: 14,
    description: 'Industrial-grade VRLA battery bank for factories in Telangana. Maintenance-free, long-life backup power.',
    features: [
      'Valve-regulated lead-acid (VRLA)',
      'Gel electrolyte technology',
      'Deep discharge capability',
      'Wide operating temperature',
      'Flame-retardant case',
      '10-year design life'
    ],
    suitable: 'Manufacturing units, warehouses in Medchal, Patancheru, Jeedimetla',
    image: '/images/battery/industrial-battery.jpg',
    slug: 'exide-industrial-battery-bank-telangana-factories',
    metaDescription: 'Exide 1000Ah industrial battery bank for Telangana factories. 10-year warranty, maintenance-free. Installation in Medchal, Patancheru.'
  },
  {
    id: 'ind-genus-100kva',
    name: 'Genus 100KVA Three-Phase Online UPS + Battery Room Setup',
    brand: 'Genus',
    category: 'industrial',
    upsType: 'online',
    capacity: '100 kVA / 80 kW',
    voltage: '415V Three Phase',
    backupTime: '30-60 minutes',
    warranty: '2 years UPS + 7 years batteries',
    price: 875000,
    mrp: 1050000,
    discount: 17,
    description: 'Heavy-duty UPS for large industrial facilities in Hyderabad. Complete turnkey solution with battery room.',
    features: [
      'Three-phase true online',
      'DSP-controlled IGBT technology',
      'Input power factor correction',
      'Redundancy and parallel operation',
      'SNMP network management',
      'Complete battery room design'
    ],
    suitable: 'Large factories, data centers, pharmaceutical units in Genome Valley, IDA Bollaram',
    image: '/images/battery/industrial-battery.jpg',
    slug: 'genus-100kva-industrial-ups-hyderabad',
    metaDescription: 'Genus 100KVA industrial UPS for large factories in Hyderabad. Turnkey battery room setup. Installation across Telangana.'
  }
];

// ============================================================================
// BATTERY BRANDS
// ============================================================================

export const batteryBrands: BatteryBrand[] = [
  {
    id: 'Okaya',
    name: 'Okaya',
    logo: '/images/battery/brands/Okaya.png',
    description: 'India\'s leading inverter and battery brand with nationwide service network',
    products: 15,
    popular: true,
    warranty: 'Up to 5 years',
    website: 'https://www.Okayaindia.com'
  },
  {
    id: 'exide',
    name: 'Exide',
    logo: '/images/battery/brands/exide.png',
    description: 'Trusted battery manufacturer with 75+ years of experience in India',
    products: 12,
    popular: true,
    warranty: 'Up to 10 years',
    website: 'https://www.exideindustries.com'
  },
  {
    id: 'amaron',
    name: 'Amaron',
    logo: '/images/battery/brands/amaron.png',
    description: 'Premium maintenance-free batteries with advanced technology',
    products: 10,
    popular: true,
    warranty: 'Up to 4 years',
    website: 'https://www.amaron.in'
  },
  {
    id: 'apc',
    name: 'APC by Schneider',
    logo: '/images/battery/brands/apc.png',
    description: 'World-class UPS systems for enterprise and data center applications',
    products: 8,
    popular: true,
    warranty: 'Up to 3 years',
    website: 'https://www.apc.com'
  },
  {
    id: 'microtek',
    name: 'Microtek',
    logo: '/images/battery/brands/microtek.png',
    description: 'Comprehensive range of UPS and inverter solutions for all segments',
    products: 14,
    popular: false,
    warranty: 'Up to 2 years',
    website: 'https://www.microtekdirect.com'
  },
  {
    id: 'vguard',
    name: 'V-Guard',
    logo: '/images/battery/brands/vguard.png',
    description: 'Reliable power backup solutions with excellent after-sales service',
    products: 11,
    popular: false,
    warranty: 'Up to 2 years',
  }
];

// ============================================================================
// CUSTOMER TESTIMONIALS
// ============================================================================

export const batteryTestimonials: BatteryTestimonial[] = [
  {
    id: 'test-1',
    name: 'Ramesh Kumar',
    location: 'Nacharam, Hyderabad',
    rating: 5,
    comment: 'Installed Okaya 150Ah inverter battery last year. Getting 5-6 hours backup easily. No more power cut worries during summer! Vajra team did excellent installation work.',
    product: 'Okaya 150Ah + Zelio Inverter',
    backupHours: '5-6 hours',
    installationDate: '2024-03',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Priya Textiles',
    location: 'Sultan Bazaar, Hyderabad',
    rating: 5,
    comment: 'Our shop runs smoothly even during frequent power cuts now. The 5KVA UPS handles all our computers and lights. Best investment for our business!',
    product: 'Okaya 5KVA Online UPS',
    backupHours: '1-2 hours',
    installationDate: '2024-07',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Dr. Suresh Reddy',
    location: 'Dilsukhnagar, Hyderabad',
    rating: 5,
    comment: 'Critical equipment in my clinic needs uninterrupted power. APC UPS has been running flawlessly for 8 months. Vajra provides prompt AMC service too.',
    product: 'APC 3KVA Online UPS',
    backupHours: '45 minutes',
    installationDate: '2024-05',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Venkat Rao',
    location: 'Kondapur, Hyderabad',
    rating: 5,
    comment: 'Got Exide 200Ah for my villa. Powers 2 ACs, fridge, all lights during outages. Amazing backup time of 7-8 hours! Worth the investment.',
    product: 'Exide 200Ah + 1500VA Inverter',
    backupHours: '7-8 hours',
    installationDate: '2024-02',
    verified: true
  }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all battery products (combined)
 */
export const getAllBatteryProducts = (): BatteryProduct[] => {
  return [...residentialBatteries, ...commercialUPS, ...industrialBatteries];
};

/**
 * Get products by category
 */
export const getProductsByCategory = (category: 'residential' | 'commercial' | 'industrial'): BatteryProduct[] => {
  switch (category) {
    case 'residential':
      return residentialBatteries;
    case 'commercial':
      return commercialUPS;
    case 'industrial':
      return industrialBatteries;
    default:
      return [];
  }
};

/**
 * Get product by slug
 */
export const getProductBySlug = (slug: string): BatteryProduct | undefined => {
  return getAllBatteryProducts().find(product => product.slug === slug);
};

/**
 * Calculate backup time based on load and battery capacity
 */
export const calculateBackupTime = (batteryAh: number, loadWatts: number, voltage: number = 12): number => {
  // Formula: Backup Time (hours) = (Battery Ah × Voltage × Efficiency) / Load Watts
  const efficiency = 0.8; // 80% inverter efficiency
  const backupHours = (batteryAh * voltage * efficiency) / loadWatts;
  return Math.round(backupHours * 10) / 10; // Round to 1 decimal
};

/**
 * Get recommended products based on power requirement
 */
export const getRecommendedProducts = (
  category: 'residential' | 'commercial' | 'industrial',
  powerRequirement: number
): BatteryProduct[] => {
  const products = getProductsByCategory(category);
  
  // Filter and sort by price
  return products
    .filter(product => {
      // Extract numeric capacity for comparison
      const capacity = parseInt(product.capacity);
      return capacity >= powerRequirement * 0.8; // 80% match tolerance
    })
    .sort((a, b) => a.price - b.price)
    .slice(0, 3); // Top 3 recommendations
};

/**
 * Get popular brands
 */
export const getPopularBrands = (): BatteryBrand[] => {
  return batteryBrands.filter(brand => brand.popular);
};