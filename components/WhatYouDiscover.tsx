'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Target, Clock, Trophy, Shield, Zap, Gift } from 'lucide-react';

const WhatYouDiscover: React.FC = () => {
  const discoveries = [
    {
      icon: Brain,
      title: "Szybkie liczenie na ułamkach",
      description: "jak rozłożyć najtrudniejsze działania na proste kroki, które maturzysta rozumie"
    },
    {
      icon: Zap,
      title: "Procenty w 3 krokach",
      description: "powtarzalny schemat, dzięki któremu zadania z procentami przestają być zagadką"
    },
    {
      icon: Target,
      title: "Typy zadań, które wracają na maturze",
      description: "10 typów zadań, które najczęściej są na egzaminie (i jak je rozwiązać)"
    },
    {
      icon: Clock,
      title: "Rozkład czasu na egzaminie",
      description: "jak zarządzać czasem na egzaminie, żeby starczyło na sprawdzenie"
    },
    {
      icon: Trophy,
      title: "Sprawdzanie bez głupich pomyłek",
      description: "sprawdzony sposób na wyłapanie błędów rachunkowych przed oddaniem arkusza"
    },
    {
      icon: Shield,
      title: "Spokój zamiast stresu na egzaminie",
      description: "3 techniki oddechowe, które działają nawet podczas egzaminu"
    },
    {
      icon: Sparkles,
      title: "Wzory w pamięci długotrwałej",
      description: "system zapamiętywania, dzięki któremu wzory zostają w głowie do egzaminu"
    },
    {
      icon: Gift,
      title: "Bonus: legalna ściąga",
      description: "jak zorganizować kartkę z obliczeniami, żeby nie zgubić punktów"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-paulina-bg-purple to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-paulina-primary mb-4">
            Co <span className="text-paulina-accent-text">odkryje</span> Twój maturzysta?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oto część metod,
            które sprawiają, że uczniowie mówią: <span className="italic">"Czemu nikt wcześniej mi tego nie pokazał?"</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {discoveries.map((discovery, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-paulina-accent"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-paulina-bg-purple rounded-full flex items-center justify-center">
                    <discovery.icon className="text-paulina-primary" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">
                    {discovery.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {discovery.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-paulina-bg-yellow rounded-2xl p-8"
        >
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold text-paulina-primary">To nie wszystko!</span> W kursie znajdziesz jeszcze:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-white rounded-full">9 próbnych arkuszy egzaminacyjnych</span>
            <span className="px-3 py-1 bg-white rounded-full">ponad 1500 zadań z rozwiązaniami</span>
            <span className="px-3 py-1 bg-white rounded-full">100+ lekcji video HD</span>
            <span className="px-3 py-1 bg-white rounded-full">Aplikacja mobilna</span>
            <span className="px-3 py-1 bg-white rounded-full">Grupa wsparcia</span>
          </div>
          <p className="mt-6 text-paulina-accent-text font-bold text-xl">
            Wartość dodatków: 2794 zł
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouDiscover;
