'use client'

import React from 'react';
import { motion } from 'framer-motion';

const TopBarSimple: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-base sm:text-xl font-bold text-paulina-primary">
              Paulina od Matematyki
            </span>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToPricing}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 py-2 bg-paulina-accent text-white font-bold rounded-full shadow-md hover:bg-paulina-primary hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            Zapisz dziecko
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default TopBarSimple;
