/**
 * Application Constants
 * 
 * Company information and configuration for:
 * 1. Vajra Renew - Solar Energy Solutions (Primary Business)
 * 2. Vajra Power Solutions - Battery & UPS (Secondary Business)
 * 
 * @location Peerzadiguda, Hyderabad, Telangana
 */

// ============================================================================
// SOLAR ENERGY BUSINESS (Primary)
// ============================================================================

export const COMPANY_INFO = {
  name: 'Vajra Renew',
  tagline: 'Solar Energy Solutions',
  phone: '+91-9246344969',
  email: 'vajrarenew@gmail.com',
  address: 'Near Bhashyam School, Peerzadiguda, Telangana',
  location: 'Peerzadiguda, Hyderabad, Telangana',
  experience: '10+',
  installations: '1000+',
  panelWarranty: '25 years',
  inverterWarranty: '5-10 years',
};

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export const SERVICE_AREAS = [
  'Peerzadiguda', 'Uppal', 'Kompally', 'Secunderabad',
  'Gachibowli', 'Madhapur', 'Miyapur', 'Kukatpally',
  'LB Nagar', 'Dilsukhnagar', 'Kondapur', 'ECIL',
  'Nacharam', 'Hayathnagar', 'Medchal', 'Shamshabad'
];

// ============================================================================
// BATTERY & UPS BUSINESS (Secondary)
// ============================================================================

export const BATTERY_COMPANY_INFO = {
  name: 'Vajra Power Solutions',
  tagline: 'Battery & UPS Systems',
  subTagline: 'Never Face Power Cuts Again',
  phone: '+91-9246344969', // Same phone for now
  email: 'vajrarenew@gmail.com',
  address: 'Near Bhashyam School, Peerzadiguda, Telangana',
  location: 'Peerzadiguda, Hyderabad, Telangana',
  experience: '15+',
  installations: '1000+',
  brands: [
    'Okaya', 'Exide', 'Amaron', 'APC by Schneider', 
    'Microtek', 'V-Guard', 'Genus', 'Su-Kam'
  ],
  warranty: {
    batteries: 'Up to 10 years',
    inverters: 'Up to 3 years',
    ups: 'Up to 3 years',
  },
};

export const BATTERY_NAVIGATION_LINKS = [
  { name: 'Home', href: '/battery-ups' },
  { name: 'Residential', href: '/battery-ups/residential' },
  { name: 'Commercial', href: '/battery-ups/commercial' },
  { name: 'Industrial', href: '/battery-ups/industrial' },
  { name: 'Brands', href: '/battery-ups#brands' },
  { name: 'Contact', href: '/battery-ups#contact' },
];

export const BATTERY_SERVICE_AREAS = [
  // Hyderabad Central
  'Secunderabad', 'Begumpet', 'Somajiguda', 'Ameerpet', 'Punjagutta',
  'Banjara Hills', 'Jubilee Hills', 'Hi-Tech City', 'Gachibowli', 'Madhapur',
  
  // East Hyderabad
  'Uppal', 'Peerzadiguda', 'Nacharam', 'ECIL', 'Kapra', 'Tarnaka',
  
  // West Hyderabad
  'Miyapur', 'Kukatpally', 'KPHB', 'Moosapet', 'Kondapur', 'Manikonda',
  
  // South Hyderabad
  'LB Nagar', 'Dilsukhnagar', 'Kothapet', 'Vanasthalipuram', 'Hayathnagar',
  
  // North Hyderabad
  'Kompally', 'Alwal', 'Medchal', 'Yapral', 'Sainikpuri',
  
  // Outskirts
  'Shamshabad', 'Patancheru', 'Jeedimetla', 'Bollaram', 'Genome Valley'
];

// ============================================================================
// BATTERY PRODUCT CATEGORIES
// ============================================================================

export const BATTERY_CATEGORIES = {
  residential: {
    name: 'Residential',
    title: 'Home Inverters & Batteries',
    description: 'Power backup solutions for homes and apartments',
    icon: '🏠',
    subtitle: 'Uninterrupted power for your family',
    benefits: [
      '4-8 hours backup',
      'Powers fans, lights, TV, Wi-Fi',
      'Low maintenance',
      '5-year warranty',
      'Silent operation'
    ],
    suitableFor: [
      '2-3 BHK apartments',
      'Independent houses',
      'Villas and duplexes',
      'Residential complexes'
    ],
    priceRange: '₹20,000 - ₹40,000',
  },
  commercial: {
    name: 'Commercial',
    title: 'Office & Commercial UPS',
    description: 'Reliable power protection for businesses',
    icon: '🏢',
    subtitle: 'Keep your business running 24/7',
    benefits: [
      'True online UPS',
      'Protects computers & servers',
      'Pure sine wave output',
      'Network monitoring',
      'Hot-swappable batteries'
    ],
    suitableFor: [
      'IT companies & offices',
      'Retail shops & showrooms',
      'Medical clinics',
      'Restaurants & cafes',
      'Educational institutions'
    ],
    priceRange: '₹40,000 - ₹1,50,000',
  },
  industrial: {
    name: 'Industrial',
    title: 'Industrial Battery Systems',
    description: 'Heavy-duty power backup for factories',
    icon: '🏭',
    subtitle: 'Power for critical industrial operations',
    benefits: [
      'High-capacity battery banks',
      'Three-phase UPS systems',
      'Long backup duration',
      'Scalable & modular',
      '10-year battery life'
    ],
    suitableFor: [
      'Manufacturing units',
      'Warehouses',
      'Data centers',
      'Pharmaceutical plants',
      'Food processing units'
    ],
    priceRange: '₹3,00,000 - ₹15,00,000',
  },
};

// ============================================================================
// SEO KEYWORDS (Telangana Focused)
// ============================================================================

export const SOLAR_SEO_KEYWORDS = [
  'solar panels Hyderabad',
  'solar installation Telangana',
  'rooftop solar Hyderabad',
  'solar companies Telangana',
  'solar subsidy Hyderabad',
  'PM Surya Ghar Yojana Telangana',
  'solar panel cost Hyderabad',
  'residential solar Hyderabad',
  'commercial solar Telangana',
  'solar installer near me',
];

export const BATTERY_SEO_KEYWORDS = [
  'inverter battery Hyderabad',
  'UPS Hyderabad',
  'battery dealers Telangana',
  'home inverter Hyderabad',
  'commercial UPS Hyderabad',
  'Okaya battery Hyderabad',
  'Exide battery Telangana',
  'inverter installation Hyderabad',
  'power backup solutions Hyderabad',
  'battery shop near me',
  'UPS dealers Telangana',
  'online UPS Hyderabad',
  'inverter battery price Hyderabad',
];

// ============================================================================
// BUSINESS HOURS
// ============================================================================

export const BUSINESS_HOURS = {
  weekdays: '9:30 AM - 6:30 PM',
  saturday: '9:30 AM - 5:00 PM',
  sunday: 'Closed',
  emergency: '24/7 Support Available',
};

// ============================================================================
// SOCIAL MEDIA
// ============================================================================

export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/vajrarenew',
  instagram: 'https://instagram.com/vajrarenew',
  twitter: 'https://twitter.com/vajrarenew',
  linkedin: 'https://linkedin.com/company/vajrarenew',
  whatsapp: 'https://wa.me/919246344969',
};

// ============================================================================
// PAYMENT METHODS
// ============================================================================

export const PAYMENT_METHODS = [
  'Cash',
  'UPI (Google Pay, PhonePe, Paytm)',
  'Bank Transfer / NEFT / RTGS',
  'Credit Card / Debit Card',
  'EMI Options Available',
  'Cheque (for corporate)',
];

// ============================================================================
// CERTIFICATIONS & PARTNERSHIPS
// ============================================================================

export const CERTIFICATIONS = {
  solar: [
    'MNRE Approved',
    'ISO 9001:2015 Certified',
    'TSSPDCL Empaneled Vendor',
    'PM Surya Ghar Yojana Registered',
  ],
  battery: [
    'Authorized Dealer - Okaya',
    'Authorized Dealer - Exide',
    'Authorized Dealer - APC',
    'Certified Installation Partner',
  ],
};