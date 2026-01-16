'use client';

import React, { useState, useMemo, memo } from 'react';
import { Calculator, TrendingUp, Zap, Home, Sun } from 'lucide-react';
import Button from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { getPricingByCapacity } from '@/lib/pricing';

const ROICalculator = memo(() => {
  const [systemSize, setSystemSize] = useState(5);

  const results = useMemo(() => {
    const pricing = getPricingByCapacity(systemSize);
    
    if (!pricing) {
      return null;
    }

    const annualSavings = pricing.monthlyBillSave * 12;
    const paybackPeriod = pricing.customerPays / annualSavings;
    
    // Calculation: Per 1kW = 120 units/month × ₹8/unit × 12 months × 25 years = ₹288,000
    const savingsPerKw = 288000;
    const totalSavings25Years = systemSize * savingsPerKw;

    return {
      ...pricing,
      annualSavings,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      totalSavings25Years,
    };
  }, [systemSize]);

  if (!results) return null;

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-pearl to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-4">
            <Calculator className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">ROI Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Get instant pricing with government subsidy breakdown
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* LEFT: Calculator */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-steel/10">
              {/* System Size Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-midnight font-bold text-lg">
                    Select System Size
                  </label>
                  <span className="text-4xl font-bold text-gold">
                    {systemSize} kW
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={systemSize}
                  onChange={(e) => setSystemSize(Number(e.target.value))}
                  className="w-full slider-gold"
                />
                <div className="flex justify-between text-sm text-slate mt-2">
                  <span>1 kW</span>
                  <span>10 kW</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-4 rounded-xl">
                  <Zap className="w-6 h-6 text-gold mb-2" />
                  <div className="text-2xl font-bold text-midnight">{results.unitsPerMonth}</div>
                  <div className="text-sm text-slate">Units/Month</div>
                </div>
                <div className="bg-gradient-to-br from-steel/10 to-steel/5 p-4 rounded-xl">
                  <Home className="w-6 h-6 text-steel mb-2" />
                  <div className="text-2xl font-bold text-midnight">{results.areaSqft}</div>
                  <div className="text-sm text-slate">Sq.Ft Required</div>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="bg-gradient-to-br from-midnight to-steel text-pearl p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-4 text-gold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Complete Pricing
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Total System Cost</span>
                    <span className="font-semibold">{formatCurrency(results.fullPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">Govt Subsidy</span>
                    <span className="font-semibold text-green-400">- {formatCurrency(results.govtSubsidy)}</span>
                  </div>
                  <div className="h-px bg-gold/30"></div>
                  <div className="flex justify-between">
                    <span className="font-bold text-gold">You Pay</span>
                    <span className="text-2xl font-bold text-gold">{formatCurrency(results.customerPays)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{formatCurrency(results.monthlyBillSave)}</div>
                    <div className="text-xs text-slate">Monthly Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{results.paybackPeriod} yrs</div>
                    <div className="text-xs text-slate">Payback Period</div>
                  </div>
                </div>
              </div>

              {/* 25-Year Total Savings: Per 1kW = ₹288,000 (120 units × ₹8 × 12 months × 25 years) */}
              <div className="bg-gradient-to-r from-gold/20 to-yellow-500/20 p-4 rounded-xl mb-6">
                <div className="text-gold font-semibold text-sm mb-1">25-Year Electricity Bill Savings</div>
                <div className="text-3xl font-bold text-midnight">{formatCurrency(results.totalSavings25Years)}</div>
                <div className="text-xs text-slate mt-1">Total electricity cost saved over 25 years</div>
              </div>

              <a href="tel:+916281253858">
                <Button variant="primary" size="lg" className="w-full text-lg">
                  Get Your Free Quote Now
                </Button>
              </a>

              <p className="text-xs text-slate text-center mt-4">
                * Subsidy comes to your bank in 3-6 months
              </p>
            </div>

            {/* RIGHT: Image/Visual */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/20 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-steel/20 rounded-full filter blur-3xl animate-pulse"></div>
                
                {/* Main Visual Card */}
                <div className="relative bg-gradient-to-br from-midnight via-steel to-midnight p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-pearl">
                    <div className="w-24 h-24 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sun className="w-16 h-16 text-midnight" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Why Go Solar?</h3>
                    <div className="space-y-4 text-left">
                      {[
                        { icon: '✓', text: 'Save up to 90% on electricity bills' },
                        { icon: '✓', text: 'Government subsidy up to ₹78,000' },
                        { icon: '✓', text: '25-year panel warranty' },
                        { icon: '✓', text: 'ROI in just 3-4 years' },
                        { icon: '✓', text: 'Increase property value' },
                        { icon: '✓', text: 'Zero maintenance for 25+ years' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="text-gold text-2xl">{item.icon}</span>
                          <span className="text-slate">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-gold/10 rounded-xl border border-gold/30">
                      <div className="text-4xl font-bold text-gold mb-1">5,000+</div>
                      <div className="text-sm text-slate">Happy Customers in Hyderabad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-gold {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 4px;
          outline: none;
          cursor: pointer;
          background: linear-gradient(to right, 
            #FFB703 0%, 
            #FFB703 ${((systemSize - 1) / 9) * 100}%, 
            #e5e7eb ${((systemSize - 1) / 9) * 100}%, 
            #e5e7eb 100%
          );
        }

        .slider-gold::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #FFB703, #FFA500);
          border: 4px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(255, 183, 3, 0.6);
          transition: all 0.3s ease;
          margin-top: 0;
        }

        .slider-gold::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(255, 183, 3, 0.9);
        }

        .slider-gold::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #FFB703, #FFA500);
          border: 4px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(255, 183, 3, 0.6);
          transition: all 0.3s ease;
        }

        .slider-gold::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(255, 183, 3, 0.9);
        }

        .slider-gold::-moz-range-track {
          height: 8px;
          border-radius: 4px;
          background: #e5e7eb;
        }

        .slider-gold::-ms-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #FFB703, #FFA500);
          border: 4px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(255, 183, 3, 0.6);
        }

        .slider-gold::-ms-track {
          height: 8px;
          border-radius: 4px;
          background: transparent;
          border-color: transparent;
          color: transparent;
        }
      `}</style>
    </section>
  );
});

ROICalculator.displayName = 'ROICalculator';
export default ROICalculator;