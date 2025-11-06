'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Target, Clock, Trophy, Shield, Zap, Gift } from 'lucide-react';

const WhatYouDiscover: React.FC = () => {
  const discoveries = [
    {
      icon: Brain,
      title: "Metodę 'Szybkich Ułamków'",
      description: "która sprawia, że najtrudniejsze działania stają się proste jak dodawanie"
    },
    {
      icon: Zap,
      title: "Trik '3 Kroki do Procentów'",
      description: "dzięki któremu każde zadanie z procentami zajmie max 2 minuty"
    },
    {
      icon: Target,
      title: "System 'Pewniaki na Start'",
      description: "10 typów zadań, które ZAWSZE są na egzaminie (i jak je rozwiązać)"
    },
    {
      icon: Clock,
      title: "Technikę 'Time-Boxing'",
      description: "jak zarządzać czasem na egzaminie, żeby starczyło na sprawdzenie"
    },
    {
      icon: Trophy,
      title: "Algorytm 'Zero Błędów'",
      description: "sprawdzony sposób na unikanie głupich pomyłek (strata 20% punktów!)"
    },
    {
      icon: Shield,
      title: "Metodę 'Anty-Stres'",
      description: "3 techniki oddechowe, które działają nawet podczas egzaminu"
    },
    {
      icon: Sparkles,
      title: "Wzory w 'Pamięci Długotrwałej'",
      description: "system zapamiętywania, dzięki któremu wzory zostają w głowie na zawsze"
    },
    {
      icon: Gift,
      title: "BONUS: 'Ściąga Legalna'",
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
            Co <span className="text-paulina-accent">dokładnie</span> odkryje Twoje dziecko?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oto tylko niektóre z <span className="font-bold">67 technik i trików</span>, 
            które sprawiają, że uczniowie mówią: <span className="italic">"Czemu nikt wcześniej mi tego nie pokazał?!"</span>
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
            <span className="px-3 py-1 bg-white rounded-full">📊 10 arkuszy egzaminacyjnych</span>
            <span className="px-3 py-1 bg-white rounded-full">🎯 1000+ zadań z rozwiązaniami</span>
            <span className="px-3 py-1 bg-white rounded-full">🎬 60+ lekcji video HD</span>
            <span className="px-3 py-1 bg-white rounded-full">📱 Aplikacja mobilna</span>
            <span className="px-3 py-1 bg-white rounded-full">👥 Grupa wsparcia</span>
          </div>
          <p className="mt-6 text-paulina-accent font-bold text-xl">
            Wartość dodatków: 2794 zł
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouDiscover;
