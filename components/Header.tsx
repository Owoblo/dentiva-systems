'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className={`
          flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500
          ${isScrolled
            ? 'w-full max-w-5xl bg-navy-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-teal-900/20'
            : 'w-full max-w-7xl bg-transparent'
          }
        `}
      >
        <div className="flex items-center gap-2">
          {/* Logo Icon */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-navy-950 font-bold text-lg">
            D
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
            Dentiva<span className="text-teal-400">Systems</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Calculator', 'Testimonials'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <motion.a
          href="#book-call"
          className="bg-white text-navy-950 px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:bg-teal-50 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Discovery
        </motion.a>
      </div>
    </motion.header>
  );
}
