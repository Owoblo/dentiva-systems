'use client';

import { motion } from 'framer-motion';
import DiagnosticTool from './DiagnosticTool';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-navy-950">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-teal-500/10 blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[20%] w-[70%] h-[70%] rounded-full bg-purple-500/10 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Headlines */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-sm font-medium text-teal-200 tracking-wide">AI-POWERED DENTAL GROWTH</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-serif text-white leading-[1.1] mb-6 tracking-tight"
            >
              Stop Losing Patients to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Phone Tag</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Recover <span className="text-white font-semibold">12-15% of your missing revenue</span> without adding a single new patient. Our AI handles after-hours calls, verifies insurance, and reactivates ghost patients automatically.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#calculator"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-navy-950 font-bold rounded-full overflow-hidden transition-all hover:bg-teal-400 shadow-[0_0_40px_-10px_rgba(45,212,191,0.5)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Run Free Diagnostic</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-teal-300/20"></div>
              </motion.a>

              <motion.a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold text-white mb-1">12-15%</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Revenue Recovery</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">AI Coverage</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white mb-1">Zero</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">New Patients</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Calculator Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
            id="calculator"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
            <div className="relative glass-card rounded-3xl p-1 overflow-hidden">
              <div className="bg-navy-900/90 rounded-[22px] overflow-hidden">
                <DiagnosticTool />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
