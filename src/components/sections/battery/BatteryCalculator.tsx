/**
 * Battery Backup Calculator Component
 * 
 * Interactive calculator to estimate required battery capacity
 * Based on power load and desired backup time
 * 
 * SEO: battery calculator, inverter size calculator, UPS capacity
 * 
 * @component
 * @memoized
 */

'use client';

import React, { memo, useState, useCallback } from 'react';
import { Calculator, Zap, Clock, Battery, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

const BatteryCalculator = memo(() => {
  const [powerLoad, setPowerLoad] = useState(1000); // Watts
  const [backupHours, setBackupHours] = useState(4); // Hours
  
  // Calculate required battery capacity
  const calculateCapacity = useCallback(() => {
    // Formula: Battery Ah = (Power Load × Backup Hours × Safety Factor) / (Battery Voltage × Efficiency)
    const voltage = 12; // Standard battery voltage
    const efficiency = 0.8; // 80% efficiency
    const safetyFactor = 1.2; // 20% safety margin
    
    const requiredAh = (powerLoad * backupHours * safetyFactor) / (voltage * efficiency);
    return Math.ceil(requiredAh / 10) * 10; // Round to nearest 10
  }, [powerLoad, backupHours]);

  const recommendedCapacity = calculateCapacity();
  
  // Determine inverter size
  const inverterVA = Math.ceil((powerLoad * 1.2) / 100) * 100; // Round up to nearest 100VA
  
  // Estimate price
  const estimatePrice = () => {
    if (recommendedCapacity <= 150) return '₹20,000 - ₹25,000';
    if (recommendedCapacity <= 200) return '₹28,000 - ₹35,000';
    return '₹35,000 - ₹50,000';
  };

  return (
    <section id="calculator" className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Calculator className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 font-semibold text-sm">Backup Calculator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-3">
              Calculate Your Backup Needs
            </h2>
            <p className="text-sm sm:text-base text-slate">
              Find the perfect battery and inverter size for your Hyderabad home or office
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-orange-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Inputs */}
              <div>
                <h3 className="text-lg font-bold text-midnight mb-4">Your Requirements</h3>
                
                {/* Power Load Slider */}
                <div className="mb-6">
                  <label className="flex items-center justify-between text-sm font-medium text-midnight mb-2">
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-500" />
                      Total Power Load
                    </span>
                    <span className="text-orange-600 font-bold">{powerLoad}W</span>
                  </label>
                  <input
                    type="range"
                    min="300"
                    max="5000"
                    step="100"
                    value={powerLoad}
                    onChange={(e) => setPowerLoad(Number(e.target.value))}
                    className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                  />
                  <div className="flex justify-between text-xs text-slate mt-1">
                    <span>300W</span>
                    <span>5000W</span>
                  </div>
                  
                  {/* Common Load Examples */}
                  <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                    <p className="text-xs text-slate mb-2">Typical loads:</p>
                    <div className="text-xs text-midnight space-y-1">
                      <div>• 2-3 fans (200W) + 5 lights (50W) + TV (100W) = <strong>350W</strong></div>
                      <div>• Above + 1 AC (1500W) = <strong>1850W</strong></div>
                      <div>• Office: 5 PCs (1000W) + lights (200W) = <strong>1200W</strong></div>
                    </div>
                  </div>
                </div>

                {/* Backup Time Slider */}
                <div className="mb-6">
                  <label className="flex items-center justify-between text-sm font-medium text-midnight mb-2">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      Desired Backup Time
                    </span>
                    <span className="text-orange-600 font-bold">{backupHours} Hours</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="12"
                    step="1"
                    value={backupHours}
                    onChange={(e) => setBackupHours(Number(e.target.value))}
                    className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                  />
                  <div className="flex justify-between text-xs text-slate mt-1">
                    <span>2 hrs</span>
                    <span>12 hrs</span>
                  </div>
                </div>
              </div>

              {/* Right: Results */}
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Battery className="w-5 h-5" />
                  Recommended System
                </h3>

                {/* Recommendations */}
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-xs opacity-90 mb-1">Battery Capacity</p>
                    <p className="text-2xl font-bold">{recommendedCapacity} Ah</p>
                    <p className="text-xs opacity-75 mt-1">Tubular Battery @ 12V</p>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-xs opacity-90 mb-1">Inverter Size</p>
                    <p className="text-2xl font-bold">{inverterVA} VA</p>
                    <p className="text-xs opacity-75 mt-1">Pure Sine Wave Inverter</p>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-xs opacity-90 mb-1">Estimated Price</p>
                    <p className="text-xl font-bold">{estimatePrice()}</p>
                    <p className="text-xs opacity-75 mt-1">Including installation</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a href="tel:+919246344969" className="block">
                    <Button 
                      variant="secondary"
                      size="md"
                      className="w-full bg-white text-orange-600 hover:bg-orange-50 border-none"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Get Exact Quote
                    </Button>
                  </a>
                  <p className="text-xs text-center mt-2 opacity-90">
                    Free site survey • Expert consultation • Same-day installation
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 pt-6 border-t border-orange-100">
              <p className="text-xs text-slate text-center">
                * Calculations are approximate and based on standard conditions. Actual requirements may vary based on inverter efficiency, battery type, and usage patterns. Our experts will provide accurate recommendations during site survey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

BatteryCalculator.displayName = 'BatteryCalculator';

export default BatteryCalculator;