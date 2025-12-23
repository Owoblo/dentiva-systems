'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    title: 'AI Voice Receptionist',
    description: 'Never miss an emergency $5k lead. Our AI handles calls, answers FAQs, and books directly into Dentrix/Open Dental.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    benefits: [
      '24/7 call answering',
      'Emergency lead capture',
      'Direct calendar booking',
      'Multi-language support'
    ]
  },
  {
    title: 'Instant Insurance Guard',
    description: 'Eliminate the #1 staff headache. Real-time eligibility checks via API before the patient even walks in.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    benefits: [
      'Real-time verification',
      'Automated benefit checks',
      'Pre-visit clearance',
      'Zero staff involvement'
    ]
  },
  {
    title: 'The Patient Reactivator',
    description: 'Our AI identifies "Ghost" patients who haven\'t visited in 6+ months and re-books them automatically via SMS.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    benefits: [
      'Auto-identify inactive patients',
      'Personalized SMS outreach',
      'Smart re-booking',
      'Revenue recovery automation'
    ]
  }
];

export default function ThreePillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" ref={ref} className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Texture/Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-3 block">Complete Autonomy</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-navy-900 mb-6">
            Everything You Need for <span className="relative inline-block text-teal-600">
              Autonomous Growth
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Replace manual admin tasks with intelligent automation. Recover lost revenue while you focus on patient care.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 relative overflow-hidden group-hover:-translate-y-2">

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  {pillar.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-4">
                  {pillar.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start group/item">
                      <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-teal-500 group-hover/item:text-white transition-colors">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Below Pillars */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#book-call"
            className="inline-flex items-center gap-2 text-teal-600 font-bold text-lg hover:text-teal-700 transition-colors"
            whileHover={{ x: 5 }}
          >
            Explore All Features
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
