// src/lib/utils.ts

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateROI(monthlyBill: number, systemSize: number) {
  const monthlySavings = monthlyBill * 0.85;
  const annualSavings = monthlySavings * 12;
  const systemCost = systemSize * 45000;
  const paybackPeriod = systemCost / annualSavings;
  const totalSavings25Years = annualSavings * 25 - systemCost;

  return {
    systemSize,
    systemCost,
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(annualSavings),
    paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    totalSavings25Years: Math.round(totalSavings25Years),
  };
}
