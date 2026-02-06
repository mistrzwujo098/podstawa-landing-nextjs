'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CTAButton: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pricing = document.getElementById('pricing');
      if (!pricing) return;
      const rect = pricing.getBoundingClientRect();
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.6;
      setShow(scrollY > threshold || rect.bottom < 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToPricing}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 bg-paulina-accent hover:bg-paulina-primary text-white font-bold py-4 px-8 rounded-full shadow-2xl z-50 hidden md:flex items-center gap-2"
        >
          Dołączam do programu
          <span className="text-xl">👉</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default CTAButton;
