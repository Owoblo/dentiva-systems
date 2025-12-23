'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

type CalculatorInputs = {
  monthlyProduction: number;
  noShowRate: number;
  avgApptValue: number;
};

type LeakBreakdown = {
  noShowLoss: number;
  adminLaborLoss: number;
  reactivationOpportunity: number;
  totalMonthlyLeak: number;
};

export default function RevenueLeakCalculator() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CalculatorInputs>({
    defaultValues: {
      monthlyProduction: 35000,
      noShowRate: 15,
      avgApptValue: 350,
    },
  });

  const [calculatedLoss, setCalculatedLoss] = useState<LeakBreakdown | null>(null);
  const watchedValues = watch();

  useEffect(() => {
    calculateRevenueLeak(watchedValues as CalculatorInputs);
  }, [watchedValues]);

  const calculateRevenueLeak = (data: CalculatorInputs) => {
    const { monthlyProduction, noShowRate, avgApptValue } = data;

    // 1. No-Show Loss
    const monthlyNoShows = (monthlyProduction / avgApptValue) * (noShowRate / 100);
    const noShowLoss = monthlyNoShows * avgApptValue;

    // 2. Admin Labor Leak (Estimated 10 hours/week on manual calls @ $30/hr)
    const adminLaborLoss = 10 * 4 * 30;

    // 3. Reactivation Gap (Estimated 10% of monthly production from "ghost" patients)
    const reactivationOpportunity = monthlyProduction * 0.10;

    const totalMonthlyLeak = noShowLoss + adminLaborLoss + reactivationOpportunity;

    setCalculatedLoss({
      noShowLoss: Math.round(noShowLoss),
      adminLaborLoss: Math.round(adminLaborLoss),
      reactivationOpportunity: Math.round(reactivationOpportunity),
      totalMonthlyLeak: Math.round(totalMonthlyLeak),
    });
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Revenue Leak Calculator
        </h3>
        <p className="text-slate-400 text-sm">
          Discover how much revenue you&apos;re losing each month
        </p>
      </div>

      <form className="space-y-8">
        {/* Monthly Production */}
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-navy-800/50 p-3 rounded-lg border border-white/5">
            <label className="text-xs font-bold text-teal-400 uppercase tracking-widest pl-1">
              Monthly Production
            </label>
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-lg">$</span>
              <input
                type="number"
                {...register('monthlyProduction', { valueAsNumber: true })}
                className="bg-transparent border-none text-right font-semibold tabular-nums text-xl text-white focus:ring-0 w-32 p-0 -mr-2"
              />
            </div>
          </div>

          <input
            type="range"
            min="10000"
            max="200000"
            step="1000"
            {...register('monthlyProduction', { valueAsNumber: true })}
            className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-teal-500 hover:accent-teal-400 transition-all"
          />
          <div className="flex justify-between text-xs font-semibold tabular-nums text-slate-500 px-1">
            <span>$10,000</span>
            <span>$200,000+</span>
          </div>
        </div>

        {/* No-Show Rate */}
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-navy-800/50 p-3 rounded-lg border border-white/5">
            <label className="text-xs font-bold text-teal-400 uppercase tracking-widest pl-1">
              No-Show Rate
            </label>
            <div className="flex items-center gap-1">
              <input
                type="number"
                {...register('noShowRate', { valueAsNumber: true })}
                className="bg-transparent border-none text-right font-semibold tabular-nums text-xl text-white focus:ring-0 w-20 p-0"
              />
              <span className="text-slate-400 text-lg">%</span>
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="50"
            step="1"
            {...register('noShowRate', { valueAsNumber: true })}
            className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-teal-500 hover:accent-teal-400 transition-all"
          />
          <div className="flex justify-between text-xs font-semibold tabular-nums text-slate-500 px-1">
            <span>0%</span>
            <span>50%</span>
          </div>
        </div>

        {/* Avg Appointment Value */}
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-navy-800/50 p-3 rounded-lg border border-white/5">
            <label className="text-xs font-bold text-teal-400 uppercase tracking-widest pl-1">
              Avg. Appt Value
            </label>
            <div className="flex items-center gap-1">
              <span className="text-slate-400 text-lg">$</span>
              <input
                type="number"
                {...register('avgApptValue', { valueAsNumber: true })}
                className="bg-transparent border-none text-right font-semibold tabular-nums text-xl text-white focus:ring-0 w-24 p-0 -mr-2"
              />
            </div>
          </div>

          <input
            type="range"
            min="100"
            max="2000"
            step="50"
            {...register('avgApptValue', { valueAsNumber: true })}
            className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-teal-500 hover:accent-teal-400 transition-all"
          />
          <div className="flex justify-between text-xs font-semibold tabular-nums text-slate-500 px-1">
            <span>$100</span>
            <span>$2,000+</span>
          </div>
        </div>
      </form>

      {/* Results */}
      <AnimatePresence mode="wait">
        {calculatedLoss !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-8 space-y-4"
          >
            {/* Total */}
            <div className="relative overflow-hidden rounded-xl border border-gold-500/30 bg-gradient-to-br from-gold-500/10 to-transparent p-6">
              <div className="text-center relative z-10">
                <p className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-2">
                  Estimated Monthly Loss
                </p>
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="text-4xl font-bold text-white mb-2 text-gradient-gold"
                >
                  ${calculatedLoss.totalMonthlyLeak.toLocaleString()}
                </motion.div>
                <p className="text-xs text-slate-400 mb-4">
                  Annual Impact: <span className="font-bold text-white">${(calculatedLoss.totalMonthlyLeak * 12).toLocaleString()}</span>
                </p>
                <motion.a
                  href="#book-call"
                  className="inline-block bg-white text-navy-950 px-6 py-3 rounded-lg font-bold text-sm transition-all hover:bg-teal-50 shadow-lg w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Plug This Leak Now →
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
