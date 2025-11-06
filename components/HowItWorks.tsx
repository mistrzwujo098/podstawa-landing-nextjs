'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Target, Trophy } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      letter: 'L',
      title: 'Learn (Naucz się)',
      description: 'Krótkie 15-minutowe lekcje video z animacjami. Dziecko rozumie DLACZEGO, nie tylko pamięta wzór.',
      icon: BookOpen,
      color: 'from-blue-400 to-blue-600',
      detail: 'Każda lekcja wyjaśnia mechanizm, nie tylko "jak rozwiązać"'
    },
    {
      letter: 'A',
      title: 'Apply (Zastosuj)',
      description: 'Zaraz po lekcji - 5 zadań praktycznych. Teoria → Praktyka w 20 minut.',
      icon: PenTool,
      color: 'from-purple-400 to-purple-600',
      detail: 'Nie czekasz do następnego dnia - stosujesz OD RAZU'
    },
    {
      letter: 'P',
      title: 'Practice (Ćwicz)',
      description: '1500+ zadań z natychmiastowym feedbackiem. Nie czekasz na nauczyciela - wiesz OD RAZU co poprawić.',
      icon: Target,
      color: 'from-orange-400 to-orange-600',
      detail: 'Każde zadanie z dokładnym rozwiązaniem krok po kroku'
    },
    {
      letter: 'S',
      title: 'Succeed (Osiągnij sukces)',
      description: 'Próbne egzaminy co tydzień. Widzisz postęp. Dziecko CZUJE że rośnie → motywacja rośnie.',
      icon: Trophy,
      color: 'from-green-400 to-green-600',
      detail: 'Tracking postępu = satysfakcja = chęć do dalszej nauki'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-b from-white to-paulina-bg-purple">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-paulina-primary mb-4">
            Jak Działa Metoda LAPS?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prosty system. <span className="font-bold text-paulina-accent">15 minut dziennie.</span> Wynik: <span className="font-bold text-paulina-primary">średnia 84% na egzaminie.</span>
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto`}>
                  <step.icon className="text-white" size={32} />
                </div>

                {/* Letter Badge */}
                <div className="text-center mb-3">
                  <span className={`inline-block w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-2xl flex items-center justify-center`}>
                    {step.letter}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-paulina-primary mb-3 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 text-center flex-grow">
                  {step.description}
                </p>

                {/* Detail */}
                <div className="bg-paulina-bg-yellow rounded-lg p-3 mt-auto">
                  <p className="text-xs text-gray-600 italic text-center">
                    {step.detail}
                  </p>
                </div>
              </div>

              {/* Arrow (desktop only, not for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-paulina-accent">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-paulina-primary mb-4 text-center">
            Dlaczego LAPS działa lepiej niż tradycyjna nauka?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-gray-900">❌ Tradycyjna metoda:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Teoria → Czekasz tydzień → Zapominasz → Zadania</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Brak feedbacku (czekasz na sprawdzenie)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Nie widzisz postępu = brak motywacji</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Uczysz się "na pamięć", nie rozumiesz</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-paulina-primary">✓ Metoda LAPS:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Teoria → Praktyka NATYCHMIAST (20 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Feedback OD RAZU (wiesz gdzie błąd)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Widzisz postęp co tydzień = motywacja</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Rozumiesz MECHANIZM, nie wkuwasz</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-paulina-bg-yellow rounded-lg">
            <p className="text-center text-gray-700">
              <span className="font-bold text-paulina-primary">Rezultat:</span> 20 000 uczniów osiągnęło średnią <span className="font-bold text-paulina-accent">84%</span> stosując tę metodę
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
