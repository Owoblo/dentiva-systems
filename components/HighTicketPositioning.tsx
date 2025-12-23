'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HighTicketPositioning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(45,212,191,0.2) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-serif mb-4">
            Invest in Your <span className="text-teal-400">Operational Excellence</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            You invest in clinical equipment for patient care. Now invest in operational systems for practice growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Clinical Investment */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-navy-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5"
          >
            <div className="inline-block bg-navy-700 px-4 py-2 rounded-full mb-6 border border-white/10">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Clinical Investment</span>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-white">
              You Already Invest in Clinical Excellence
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 bg-navy-900/50 rounded-xl border border-white/5">
                <span className="font-medium text-slate-300">Flight Dental A12 Package</span>
                <span className="text-xl font-bold text-teal-400">$13,498</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-navy-900/50 rounded-xl border border-white/5">
                <span className="font-medium text-slate-300">Advanced LED PDT Machine</span>
                <span className="text-xl font-bold text-teal-400">$2,899</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-navy-900/50 rounded-xl border border-white/5">
                <span className="font-medium text-slate-300">Hygiene Handpiece System</span>
                <span className="text-xl font-bold text-teal-400">$1,045</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-slate-400 text-lg">
                These investments improve <strong className="text-white">patient care</strong>
              </p>
            </div>
          </motion.div>

          {/* Right Side - Operational Investment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-teal-600 rounded-3xl p-1 shadow-2xl shadow-teal-900/50"
          >
            <div className="bg-navy-900 rounded-[22px] p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 blur-[80px] rounded-full -mr-16 -mt-16 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="inline-block bg-teal-500/20 px-4 py-2 rounded-full mb-6 border border-teal-500/30">
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">Operational Investment</span>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-white">
                  Now Invest in Operational Revenue
                </h3>

                <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 mb-6 border border-teal-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-white">DentivaSystems</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-teal-400">Custom</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Dynamic Pricing</div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {[
                      'AI Voice Receptionist',
                      'Insurance Verification',
                      'Patient Reactivation',
                      'Full PMS Integration',
                      'White-Glove Onboarding',
                      'Dedicated Success Manager'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white text-lg mb-4">
                    This investment improves <strong className="text-teal-400">practice revenue</strong>
                  </p>
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4">
                    <div className="text-xs text-teal-200 uppercase tracking-wide mb-1">Average ROI</div>
                    <div className="text-3xl font-bold text-white">$5,000 - $10,000</div>
                    <div className="text-sm text-teal-200">per month in recovered revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xl text-slate-300">
            Your clinical equipment serves patients. <br />
            <strong className="text-white">Your operational system serves your bottom line.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
