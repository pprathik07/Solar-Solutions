// src/lib/pricing.ts

export interface PricingTier {
  capacity: string;
  fullPrice: number;
  govtSubsidy: number;
  customerPays: number;
  unitsPerMonth: number;
  areaSqft: number;
  monthlyBillSave: number;
}

export const PRICING_TABLE: PricingTier[] = [
  {
    capacity: "1kW",
    fullPrice: 90000,
    govtSubsidy: 30000,
    customerPays: 60000,
    unitsPerMonth: 120,
    areaSqft: 100,
    monthlyBillSave: 720,
  },
  {
    capacity: "2kW",
    fullPrice: 148000,
    govtSubsidy: 60000,
    customerPays: 88000,
    unitsPerMonth: 240,
    areaSqft: 150,
    monthlyBillSave: 1440,
  },
  {
    capacity: "3kW",
    fullPrice: 196000,
    govtSubsidy: 78000,
    customerPays: 118000,
    unitsPerMonth: 360,
    areaSqft: 200,
    monthlyBillSave: 2160,
  },
  {
    capacity: "4kW",
    fullPrice: 258000,
    govtSubsidy: 78000,
    customerPays: 180000,
    unitsPerMonth: 480,
    areaSqft: 250,
    monthlyBillSave: 3840,
  },
  {
    capacity: "5kW",
    fullPrice: 300000,
    govtSubsidy: 78000,
    customerPays: 222000,
    unitsPerMonth: 600,
    areaSqft: 300,
    monthlyBillSave: 4800,
  },
  {
    capacity: "6kW",
    fullPrice: 345000,
    govtSubsidy: 78000,
    customerPays: 267000,
    unitsPerMonth: 720,
    areaSqft: 400,
    monthlyBillSave: 5760,
  },
  {
    capacity: "7kW",
    fullPrice: 395000,
    govtSubsidy: 78000,
    customerPays: 317000,
    unitsPerMonth: 840,
    areaSqft: 450,
    monthlyBillSave: 6720,
  },
  {
    capacity: "8kW",
    fullPrice: 445000,
    govtSubsidy: 78000,
    customerPays: 367000,
    unitsPerMonth: 960,
    areaSqft: 500,
    monthlyBillSave: 7680,
  },
  {
    capacity: "9kW",
    fullPrice: 520000,
    govtSubsidy: 78000,
    customerPays: 442000,
    unitsPerMonth: 1080,
    areaSqft: 550,
    monthlyBillSave: 8640,
  },
  {
    capacity: "10kW",
    fullPrice: 550000,
    govtSubsidy: 78000,
    customerPays: 472000,
    unitsPerMonth: 1200,
    areaSqft: 600,
    monthlyBillSave: 9600,
  },
];

export const EXTRA_CHARGES = {
  netMeter: 2500,
  items: [
    "Contracted Load Enhancement",
    "High Rise Structures",
    "Additional Wiring as per Site Condition",
    "Civil Works",
  ],
};

export function getPricingByCapacity(capacityKw: number): PricingTier | null {
  return PRICING_TABLE.find(p => p.capacity === `${capacityKw}kW`) || null;
}

export function findNearestCapacity(monthlyBill: number): PricingTier {
  // Rough estimate: ?6/unit, need 85% of current bill in units
  const estimatedUnitsNeeded = (monthlyBill * 0.85) / 6;
  
  // Find closest capacity
  let closest = PRICING_TABLE[0];
  let minDiff = Math.abs(estimatedUnitsNeeded - closest.unitsPerMonth);
  
  for (const tier of PRICING_TABLE) {
    const diff = Math.abs(estimatedUnitsNeeded - tier.unitsPerMonth);
    if (diff < minDiff) {
      minDiff = diff;
      closest = tier;
    }
  }
  
  return closest;
}
