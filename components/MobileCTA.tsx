'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, Shield, Clock } from 'lucide-react';

const MobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show after scrolling 300px
      if (currentScrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Detect scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  // Only show on mobile devices
  const isMobile = window.innerWidth < 768;
  if (!isMobile) return null;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: scrollDirection === 'down' ? 100 : 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          {/* Trust Bar - Compact */}
          <div className="bg-white border-t border-gray-200 px-3 py-1.5">
            <div className="flex justify-between items-center text-[10px]">
              <div className="flex items-center gap-0.5">
                <Star className="text-yellow-400 fill-current" size={10} />
                <span className="font-semibold">4.9</span>
              </div>
              <div className="flex items-center gap-0.5">
                <Shield className="text-green-500" size={10} />
                <span className="text-gray-600">Gwarancja</span>
              </div>
            </div>
          </div>
          
          {/* CTA Button - Compact */}
          <div className="bg-gradient-to-r from-paulina-accent to-paulina-primary p-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const pricingElement = document.getElementById('pricing');
                pricingElement?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-white text-paulina-primary font-bold py-3 px-4 rounded-full shadow-lg flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              <span className="text-base">Dołącz do kursu</span>
            </motion.button>
            
            {/* Quick Benefits - Compact */}
            <div className="flex justify-center gap-3 mt-1.5 text-white text-[10px]">
              <span>✓ Raty 0%</span>
              <span>✓ Gwarancja 30 dni</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileCTA;
