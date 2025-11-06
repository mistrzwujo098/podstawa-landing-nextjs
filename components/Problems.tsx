'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Problems: React.FC = () => {
  const beforeExam = [
    'Odkładanie nauki „na później”',
    'Nieefektywne metody uczenia się',
    'Problemy z organizacją materiału',
    'Narastający stres i presja',
    'Konflikty rodzic-dziecko o naukę',
    'Brak systematyczności',
    'Marnowanie czasu na złe metody',
    'Rosnąca frustracja',
    'Chaos w notatkach',
    'Brak planu działania'
  ];

  const duringExam = [
    'Paraliżujący stres',
    '„Pusty umysł” przy zadaniach',
    'Złe zarządzanie czasem',
    'Panika przy trudnych zadaniach',
    'Problemy z koncentracją',
    'Niezrozumienie poleceń',
    'Gubienie punktów na głupich błędach',
    'Zapominanie wzorów',
    'Problemy z liczeniem',
    'Brak pewności przy odpowiedziach'
  ];

  const afterExam = [
    'Rozczarowanie wynikiem',
    'Żal do siebie i innych',
    'Stracone szanse',
    'Gorszy start w liceum',
    'Nadszarpnięte relacje w rodzinie'
  ];

  return (
    <section id="problems" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="text-red-600">UWAGA:</span> Czy Twoje dziecko też...
          </h2>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Większość rodziców nie umie pomóc</span> dziecku z matematyką.
            <span className="block text-base mt-2">Każdy dzień zwlekania to większy stres przed egzaminem.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-xl mb-4 text-gray-900">Przed egzaminem:</h3>
            <ul className="space-y-2">
              {beforeExam.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-xl mb-4 text-gray-900">W trakcie egzaminu:</h3>
            <ul className="space-y-2">
              {duringExam.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-xl mb-4 text-gray-900">Po egzaminie:</h3>
            <ul className="space-y-2">
              {afterExam.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
