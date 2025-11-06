'use client'

import React from 'react';
import { motion } from 'framer-motion';

const CTAButton: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToPricing}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 bg-paulina-accent hover:bg-paulina-primary text-white font-bold py-4 px-8 rounded-full shadow-2xl z-50 hidden md:flex items-center gap-2 animate-pulse-slow"
    >
      Dołączam do programu
      <span className="text-xl">👉</span>
    </motion.button>
  );
};

export default CTAButton;
