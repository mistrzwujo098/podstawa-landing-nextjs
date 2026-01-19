'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const WhosItFor: React.FC = () => {
  const forWhom = [
    'Ma braki z podstaw i nie wie od czego zacząć',
    'Uczy się, ale wyniki nie rosną tak jak powinny',
    'Odkłada naukę na ostatnią chwilę',
    'Potrzebuje struktury i planu, a nie kolejnych korepetycji',
    'Chce się przygotować samodzielnie, ale potrzebuje dobrego materiału',
  ];

  const notForWhom = [
    'Już radzi sobie świetnie i zdobywa 90%+ na sprawdzianach',
    'Szuka cudownego rozwiązania bez własnej pracy',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-paulina-primary mb-4">
            Dla kogo jest ten program?
          </h2>
          <p className="text-lg text-gray-600">
            Sprawdź czy to rozwiązanie dla Twojego dziecka
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For whom */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-paulina-bg-purple rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-paulina-primary mb-4">
              Ten program sprawdzi się jeśli Twoje dziecko:
            </h3>
            <ul className="space-y-3">
              {forWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-paulina-accent flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not for whom */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              Ten program NIE jest dla dziecka które:
            </h3>
            <ul className="space-y-3">
              {notForWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="text-gray-400 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500 italic">
              Jeśli Twoje dziecko pasuje do pierwszej kolumny — ten program może zmienić wszystko.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhosItFor;
