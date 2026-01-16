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
    <section id="calculator" className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-pearl to-white">
      <div className="container mx-auto px-4">
        {/* Header - Much smaller */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-gold/10 px-3 py-1.5 rounded-full mb-2 sm:mb-3">
            <Calculator className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
            <span className="text-gold font-semibold text-xs sm:text-sm">ROI Calculator</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-midnight mb-2 sm:mb-3">
            Calculate Your Savings
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate max-w-2xl mx-auto px-4">
            Get instant pricing with government subsidy breakdown
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* LEFT: Calculator - Smaller */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-xl p-4 sm:p-5 md:p-6 border border-steel/10">
              {/* System Size Slider */}
              <div className="mb-4 sm:mb-6">
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <label className="text-midnight font-bold text-xs sm:text-sm md:text-base">
                    Select System Size
                  </label>
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gold">
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
                <div className="flex justify-between text-[10px] sm:text-xs text-slate mt-1.5">
                  <span>1 kW</span>
                  <span>10 kW</span>
                </div>
              </div>

              {/* Quick Stats - Smaller */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
                <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-2.5 sm:p-3 rounded-lg">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-gold mb-1" />
                  <div className="text-base sm:text-lg md:text-xl font-bold text-midnight">{results.unitsPerMonth}</div>
                  <div className="text-[9px] sm:text-[10px] text-slate">Units/Month</div>
                </div>
                <div className="bg-gradient-to-br from-steel/10 to-steel/5 p-2.5 sm:p-3 rounded-lg">
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 text-steel mb-1" />
                  <div className="text-base sm:text-lg md:text-xl font-bold text-midnight">{results.areaSqft}</div>
                  <div className="text-[9px] sm:text-[10px] text-slate">Sq.Ft Required</div>
                </div>
              </div>

              {/* Pricing Box - Smaller */}
              <div className="bg-gradient-to-br from-midnight to-steel text-pearl p-3 sm:p-4 md:p-5 rounded-lg mb-4">
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 text-gold flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  Complete Pricing
                </h3>
                
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex justify-between text-[10px] sm:text-xs">
                    <span className="text-slate">Total System Cost</span>
                    <span className="font-semibold">{formatCurrency(results.fullPrice)}</span>
                  </div>
                  <div className="flex justify-between text-[10px] sm:text-xs">
                    <span className="text-green-400">Govt Subsidy</span>
                    <span className="font-semibold text-green-400">- {formatCurrency(results.govtSubsidy)}</span>
                  </div>
                  <div className="h-px bg-gold/30"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gold text-xs sm:text-sm">You Pay</span>
                    <span className="text-lg sm:text-xl font-bold text-gold">{formatCurrency(results.customerPays)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                  <div>
                    <div className="text-sm sm:text-base md:text-lg font-bold">{formatCurrency(results.monthlyBillSave)}</div>
                    <div className="text-[9px] sm:text-[10px] text-slate">Monthly Savings</div>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base md:text-lg font-bold">{results.paybackPeriod} yrs</div>
                    <div className="text-[9px] sm:text-[10px] text-slate">Payback Period</div>
                  </div>
                </div>
              </div>

              {/* 25-Year Savings - Smaller */}
              <div className="bg-gradient-to-r from-gold/20 to-yellow-500/20 p-2.5 sm:p-3 rounded-lg mb-3 sm:mb-4">
                <div className="text-gold font-semibold text-[10px] sm:text-xs mb-0.5">25-Year Electricity Bill Savings</div>
                <div className="text-xl sm:text-2xl font-bold text-midnight">{formatCurrency(results.totalSavings25Years)}</div>
                <div className="text-[9px] sm:text-[10px] text-slate mt-0.5">Total electricity cost saved over 25 years</div>
              </div>

              <a href="tel:+916281253858">
                <Button variant="primary" size="md" className="w-full text-xs sm:text-sm py-2 sm:py-2.5">
                  Get Your Free Quote Now
                </Button>
              </a>

              <p className="text-[9px] sm:text-[10px] text-slate text-center mt-2 sm:mt-3">
                * Subsidy comes to your bank in 1-3 months
              </p>
            </div>

            {/* RIGHT: Benefits Card - Smaller */}
            <div className="lg:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 sm:w-48 sm:h-48 bg-gold/20 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 sm:w-48 sm:h-48 bg-steel/20 rounded-full filter blur-3xl animate-pulse"></div>
                
                <div className="relative bg-gradient-to-br from-midnight via-steel to-midnight p-4 sm:p-6 md:p-7 rounded-lg sm:rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-pearl">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Sun className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-midnight" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Why Go Solar?</h3>
                    <div className="space-y-2 sm:space-y-3 text-left">
                      {[
                        { icon: '✓', text: 'Save up to 90% on electricity bills' },
                        { icon: '✓', text: 'Government subsidy up to ₹78,000' },
                        { icon: '✓', text: '25-year panel warranty' },
                        { icon: '✓', text: 'ROI in just 3-4 years' },
                        { icon: '✓', text: 'Increase property value' },
                        { icon: '✓', text: 'Zero maintenance for 25+ years' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-gold text-base sm:text-lg">{item.icon}</span>
                          <span className="text-slate text-[10px] sm:text-xs md:text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 sm:mt-6 p-2.5 sm:p-3 bg-gold/10 rounded-lg border border-gold/30">
                      <div className="text-2xl sm:text-3xl font-bold text-gold mb-0.5">5,000+</div>
                      <div className="text-[10px] sm:text-xs text-slate">Happy Customers in Hyderabad</div>
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
          height: 5px;
          border-radius: 3px;
          outline: none;
          cursor: pointer;
          background: linear-gradient(to right, 
            #FFB703 0%, 
            #FFB703 ${((systemSize - 1) / 9) * 100}%, 
            #e5e7eb ${((systemSize - 1) / 9) * 100}%, 
            #e5e7eb 100%
          );
        }

        @media (min-width: 640px) {
          .slider-gold {
            height: 6px;
          }
        }

        .slider-gold::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          background: linear-gradient(135deg, #FFB703, #FFA500);
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(255, 183, 3, 0.5);
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .slider-gold::-webkit-slider-thumb {
            width: 20px;
            height: 20px;
          }
        }

        .slider-gold::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 3px 10px rgba(255, 183, 3, 0.8);
        }

        .slider-gold::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: linear-gradient(135deg, #FFB703, #FFA500);
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(255, 183, 3, 0.5);
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .slider-gold::-moz-range-thumb {
            width: 20px;
            height: 20px;
          }
        }

        .slider-gold::-moz-range-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 3px 10px rgba(255, 183, 3, 0.8);
        }
      `}</style>
    </section>
  );
});

ROICalculator.displayName = 'ROICalculator';
export default ROICalculator;