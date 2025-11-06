'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-paulina-bg-purple">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            To tylko kilka opinii ósmoklasistów:
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <img 
            src="https://paulinaodmatematyki.com/wp-content/uploads/2024/07/Opinie-8-klasa.png"
            alt="Opinie uczniów"
            className="rounded-lg shadow-lg max-w-full md:max-w-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
