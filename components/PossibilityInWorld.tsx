'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const PossibilityInWorld: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    {
      icon: Users,
      number: '20 000+',
      label: 'Uczniów przeszło przez kurs',
      detail: 'Od 2019 roku'
    },
    {
      icon: Award,
      number: '84%',
      label: 'Średni wynik na egzaminie',
      detail: 'Dane z 2024 roku'
    },
    {
      icon: TrendingUp,
      number: '+40 pkt',
      label: 'Średni wzrost wyniku',
      detail: 'Pierwszy vs ostatni test próbny'
    },
    {
      icon: CheckCircle,
      number: '98%',
      label: 'Zadowolonych rodziców',
      detail: 'Na podstawie ankiet z 2024'
    }
  ];

  // Conditional animation variants - ensure visibility when animations disabled
  const headerAnimation = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

  const statAnimation = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.5 } };

  return (
    <section id="possibility" className="py-16 bg-gradient-to-b from-paulina-bg-yellow to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header - LCP element optimized for mobile */}
        <motion.div
          {...headerAnimation}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-paulina-primary mb-4">
            To NIE jest teoria. To działa TERAZ.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Metoda małych kroków + systematyczność = wyniki, które były niemożliwe 5 lat temu
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const animation = shouldReduceMotion
              ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
              : { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 } };

            return (
            <motion.div
              key={index}
              {...animation}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-paulina-primary to-paulina-purple flex items-center justify-center">
                <stat.icon className="text-white" size={32} />
              </div>
              <div className="text-4xl font-bold text-paulina-accent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-900 font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.detail}
              </div>
            </motion.div>
            );
          })}
        </div>

        {/* Main Content */}
        <motion.div
          {...headerAnimation}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-paulina-primary mb-6">
              Czemu tradycyjna nauka "na pamięć" NIE działa?
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-2xl">❌</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Uczenie się "na ostatnią chwilę"
                  </h4>
                  <p className="text-gray-700">
                    Badania CKE pokazują: intensywna nauka tydzień przed egzaminem daje średnio <span className="font-bold text-red-600">max 65% skuteczności</span>. Wiedza ulotna, stres wysoki.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-paulina-primary mb-2">
                    Metoda małych kroków (15 min/dzień)
                  </h4>
                  <p className="text-gray-700">
                    Te same badania: systematyczna nauka krótkimi sesjami przez kilka miesięcy daje <span className="font-bold text-green-600">84-92% skuteczności</span>. Wiedza trwała, stres niski.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-paulina-bg-purple rounded-xl p-6 mb-6">
              <h4 className="font-bold text-lg text-paulina-primary mb-3">
                Co się zmieniło w ostatnich latach?
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-paulina-accent flex-shrink-0 mt-0.5" size={20} />
                  <span><span className="font-bold">Dostęp 24/7:</span> Dziecko uczy się WTEDY kiedy CHCE, nie czeka tydzień na korepetycje</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-paulina-accent flex-shrink-0 mt-0.5" size={20} />
                  <span><span className="font-bold">Natychmiastowy feedback:</span> Rozwiązujesz zadanie → od razu wiesz czy dobrze (nie czekasz 3 dni na sprawdzone)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-paulina-accent flex-shrink-0 mt-0.5" size={20} />
                  <span><span className="font-bold">Tracking postępu:</span> Widzisz jak rośniesz → motywacja rośnie → uczysz się więcej</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-paulina-accent flex-shrink-0 mt-0.5" size={20} />
                  <span><span className="font-bold">Gamifikacja:</span> Nauka staje się "grą" którą chcesz wygrać, nie obowiązkiem</span>
                </li>
              </ul>
            </div>

            <div className="text-center bg-gradient-to-r from-paulina-primary to-paulina-purple text-white rounded-xl p-6">
              <p className="text-lg mb-2">
                <span className="font-bold">Nie musisz wierzyć na słowo.</span>
              </p>
              <p className="text-sm opacity-90">
                20 000 uczniów już to sprawdziło. Średni wynik: 84%. To nie obietnica - to fakt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PossibilityInWorld;
