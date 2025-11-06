'use client'

import React from 'react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  const partners = [
    { name: 'Empik', logo: 'https://paulinaodmatematyki.com/wp-content/uploads/2024/07/logo44-1024x171.png' },
    { name: 'Orły Edukacji', text: 'Orły Edukacji' },
    { name: 'TVP Opole', text: 'TVP Opole' },
    { name: 'Live Influencers Wrocław', text: 'Live Influencers' },
    { name: 'Stowarzyszenie Nauczycieli Matematyki', text: 'SNM' },
    { name: 'uczelnia SAN', text: 'SAN' },
    { name: 'WSiZ', text: 'WSiZ' },
    { name: 'Maturalni', text: 'Maturalni' },
    { name: 'Forbes Women', text: 'Forbes Women' },
    { name: 'Pytanie na śniadanie', text: 'Pytanie na śniadanie' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Współpracowałam m.in. z:
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              {partner.logo ? (
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="text-gray-600 font-semibold text-sm md:text-base hover:text-paulina-primary transition-colors duration-300">
                  {partner.text}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
