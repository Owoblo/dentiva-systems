'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const integrations = [
  {
    name: 'Dentrix',
    description: 'Seamless integration with the industry-leading practice management software',
    logo: '/logos/dentrix-logo.svg',
    logoAlt: 'Dentrix Logo',
    scale: 1
  },
  {
    name: 'Eaglesoft',
    description: 'Direct sync with Patterson Dental\'s trusted platform',
    logo: '/logos/eaglesoft.jpg',
    logoAlt: 'Eaglesoft Logo',
    scale: 1.5
  },
  {
    name: 'Open Dental',
    description: 'Full API integration with this powerful open-source solution',
    logo: '/logos/logo_open_dental.png',
    logoAlt: 'Open Dental Logo',
    scale: 1
  },
];

export default function TechStackIntegration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-3 block">Seamless Integration</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-navy-900 mb-6">
            Works Where <span className="text-teal-600">You Work</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We integrate directly with the platforms you already use. No disruption, no learning curve.
          </p>
        </motion.div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
            >
              {/* Logo */}
              <div className="h-24 flex items-center justify-center mb-8 bg-slate-50 rounded-2xl group-hover:bg-white transition-colors duration-300 p-6">
                <div className="relative w-full h-full" style={{ transform: `scale(${integration.scale})` }}>
                  <Image
                    src={integration.logo}
                    alt={integration.logoAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="text-center">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {integration.description}
                </p>

                <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
                  Live Sync
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Specs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-navy-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            {/* Left Side - Technical Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 font-serif">
                Enterprise-Grade Security & Reliability
              </h3>
              <ul className="space-y-6">
                {[
                  'HIPAA-compliant data encryption (AES-256)',
                  'Real-time bi-directional database sync',
                  '99.99% uptime SLA guarantee',
                  'SOC 2 Type II certified infrastructure',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mr-4 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-200 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Setup Process */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 font-serif">
                Live in 3 Simple Steps
              </h3>
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Connect Your System', desc: 'Secure one-click integration with your PMS.' },
                  { step: '02', title: 'Configure AI Logic', desc: 'Customize how the AI handles your specific protocols.' },
                  { step: '03', title: 'Launch Autopilot', desc: 'Turn it on and watch the schedule fill up.' }
                ].map((item) => (
                  <div key={item.step} className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 font-bold text-lg mr-6 group-hover:bg-teal-500 group-hover:text-navy-900 transition-all duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
