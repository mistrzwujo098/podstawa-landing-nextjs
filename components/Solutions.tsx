'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
  const afterFewLessons = [
    'Zaczyna rozumieć matematykę, nie tylko pamięta wzory',
    'Widzi logiczne połączenia między tematami',
    'Przestaje bać się pytać',
    'Odzyskuje wiarę w swoje możliwości',
    'Zaczyna systematycznie pracować',
    'Pierwszy raz czuje, że „matematyka może być prosta”',
    'Zauważa pierwsze sukcesy',
    'Lepiej radzi sobie na klasówkach',
    'Ma uporządkowane notatki',
    'Czuje wsparcie grupy'
  ];

  const afterFullCourse = [
    'Opanowało wszystkie kluczowe zagadnienia',
    'Ma wypracowany system nauki',
    'Potrafi rozwiązać każdy typ zadania',
    'Zna wszystkie wymagane wzory',
    'Umie zarządzać czasem podczas nauki',
    'Ma pewność siebie w matematyce',
    'Rozumie gdzie może stracić punkty',
    'Wie jak sprawdzać swoje rozwiązania',
    'Ma techniki na radzenie sobie ze stresem',
    'Jest przygotowane na każdą sytuację'
  ];

  const duringAfterExam = [
    'Spokojnie podchodzi do arkusza',
    'Wie od czego zacząć',
    'Rozpoznaje wszystkie typy zadań',
    'Efektywnie zarządza czasem',
    'Sprawnie rozwiązuje zadania',
    'Ma czas na sprawdzenie',
    'Wychodzi z uśmiechem',
    'Osiąga wynik powyżej 80%',
    'Dostaje się do wymarzonej szkoły',
    'Czuje dumę z osiągniętego sukcesu'
  ];

  return (
    <section id="solutions" className="py-16 bg-paulina-bg-yellow">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Co Twoje dziecko osiągnie z kursem 🏆
          </h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="font-bold text-2xl mb-6 text-paulina-primary">
              Po pierwszych kilku lekcjach:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {afterFewLessons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="font-bold text-2xl mb-6 text-paulina-primary">
              Po przerobieniu całego kursu:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {afterFullCourse.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-paulina-primary to-paulina-purple text-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="font-bold text-2xl mb-6">
              W trakcie i po egzaminie:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {duringAfterExam.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-yellow-300 mt-1">✓</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            W skrócie.
          </h3>
          <p className="text-2xl font-semibold text-paulina-accent mb-4">
            Wysoki wynik na egzaminie.
          </p>
          <p className="text-3xl md:text-4xl font-bold text-paulina-primary mb-4">
            Gwarantowany* - jeśli dziecko przerobi kurs.
          </p>
          <div className="max-w-2xl mx-auto bg-paulina-bg-yellow rounded-lg p-4">
            <p className="text-sm text-gray-700">
              *98% uczniów, którzy przerobili {">"} 80% materiału osiągnęło {">"} 75% na egzaminie.
              Gwarancja dotyczy satysfakcji z kursu (30 dni zwrotu),
              nie konkretnego wyniku egzaminu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
