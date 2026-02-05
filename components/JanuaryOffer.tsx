'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Clock, CheckCircle, ChevronRight, Sparkles, Star } from 'lucide-react';
import { tracking } from '@/lib/tracking';

const JanuaryOffer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const endDate = new Date('2026-01-31T23:59:59');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    tracking.viewContent('January Offer CTA - Zobacz pakiet Standard');
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const bonuses = [
    {
      name: 'Matura Podstawowa 2026',
      value: 1997,
      icon: Star,
      highlight: true,
      features: [
        'Ponad 100 lekcji video HD z teorią i zadaniami',
        'Ponad 1500 zadań z rozwiązaniami krok po kroku',
        '9 próbnych arkuszy maturalnych',
        '30 spotkań live z rozwiązywaniem zadań',
        'Dostęp na 12 miesięcy',
      ],
    },
    {
      name: 'Video Onboarding "Jak zacząć"',
      value: 297,
      icon: Gift,
      highlight: false,
      features: [
        'Nagranie video z instrukcją krok po kroku',
        'Jak zaplanować naukę przed maturą',
        'Najczęstsze błędy i jak ich unikać',
        'Plan nauki dopasowany do Twojego czasu',
      ],
    },
    {
      name: 'Progress Tracker PDF',
      value: 97,
      icon: Gift,
      highlight: false,
      features: [
        'Interaktywny tracker postępów do wydrukowania',
        'Lista wszystkich tematów do opanowania',
        'Miejsce na notatki i własne cele',
        'Motywacja wizualna - zaznaczaj postępy',
      ],
    },
    {
      name: '"Rodzic w Spokoju" Video Guide',
      value: 197,
      icon: Gift,
      highlight: false,
      features: [
        'Poradnik video dla rodziców',
        'Jak wspierać dziecko bez stresu i kłótni',
        'Kiedy pomagać, a kiedy dać spokój',
        'Jak rozmawiać o wynikach i postępach',
      ],
    },
  ];

  const totalValue = bonuses.reduce((acc, bonus) => acc + bonus.value, 0);
  const price = 999;
  const savings = totalValue - price;
  const savingsPercent = Math.round((savings / totalValue) * 100);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-paulina-primary/10 rounded-lg px-3 sm:px-4 py-2 min-w-[50px] sm:min-w-[60px]">
        <span className="text-xl sm:text-2xl font-bold text-paulina-primary">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-gray-600 mt-1">{label}</span>
    </div>
  );

  return (
    <section id="january-offer" className="py-16 bg-gradient-to-b from-paulina-bg-yellow via-white to-paulina-bg-purple">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-paulina-primary to-paulina-accent text-white rounded-full px-6 py-2 shadow-lg mb-6">
            <Sparkles size={18} />
            <span className="font-bold text-sm">OFERTA NOWOROCZNA 2026</span>
            <Sparkles size={18} />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-paulina-primary mb-4">
            Nowy Rok = Nowy Start
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            <span className="font-bold text-paulina-accent">Ostatni moment</span> żeby zacząć przygotowania i zdać maturę podstawową
          </p>
        </motion.div>

        {/* Countdown in section */}
        {isMounted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 mb-8 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="text-paulina-accent" size={24} />
              <span className="text-lg font-semibold text-gray-700">Oferta wygasa za:</span>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <TimeBlock value={timeLeft.days} label="dni" />
              <span className="text-2xl font-bold text-paulina-primary">:</span>
              <TimeBlock value={timeLeft.hours} label="godzin" />
              <span className="text-2xl font-bold text-paulina-primary">:</span>
              <TimeBlock value={timeLeft.minutes} label="minut" />
              <span className="text-2xl font-bold text-paulina-primary">:</span>
              <TimeBlock value={timeLeft.seconds} label="sekund" />
            </div>
          </motion.div>
        )}

        {/* Bonuses List */}
        <div className="space-y-4 mb-8">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 ${
                bonus.highlight ? 'border-paulina-accent' : 'border-transparent'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl flex-shrink-0 ${bonus.highlight ? 'bg-paulina-accent text-white' : 'bg-paulina-bg-purple text-paulina-primary'}`}>
                  <bonus.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      {bonus.highlight ? (
                        <span className="text-xs font-bold text-paulina-accent uppercase tracking-wide">Kurs Główny</span>
                      ) : (
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Bonus #{index}</span>
                      )}
                      <h3 className="text-lg font-bold text-paulina-primary">{bonus.name}</h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-lg font-bold text-paulina-accent">{bonus.value} zł</span>
                    </div>
                  </div>
                  {/* Features list with bullet points */}
                  <ul className="space-y-1">
                    {bonus.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-paulina-accent mt-1">-</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-paulina-primary to-purple-700 rounded-2xl p-6 sm:p-8 text-white shadow-2xl"
        >
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
              <div>
                <p className="text-sm text-white/80 mb-1">Łączna wartość:</p>
                <p className="text-2xl sm:text-3xl font-bold line-through text-white/60">{totalValue} zł</p>
              </div>
              <div className="hidden sm:block text-4xl">→</div>
              <div>
                <p className="text-sm text-white/80 mb-1">Twoja cena (pakiet Standard):</p>
                <p className="text-4xl sm:text-5xl font-bold text-white">{price} zł</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 mb-6">
              <CheckCircle size={20} />
              <span className="font-bold">Oszczędzasz {savings} zł ({savingsPercent}% taniej!)</span>
            </div>

            <div>
              <motion.button
                onClick={scrollToPricing}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-paulina-accent text-white font-bold text-lg rounded-full shadow-xl hover:bg-white hover:text-paulina-primary transition-all duration-300"
              >
                <span>Zobacz pakiet Standard z bonusami</span>
                <ChevronRight size={24} />
              </motion.button>
              <p className="text-sm text-white/80 mt-4">
                lub {Math.round(price / 10)} zł/mies. (10 rat 0%)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 bg-white rounded-xl p-4 shadow-sm"
        >
          <p className="font-bold text-paulina-primary mb-1">30 dni bezwarunkowej gwarancji</p>
          <p className="text-sm text-gray-600">
            Jeśli w ciągu 30 dni uznasz, że kurs nie pomaga Twojemu dziecku — oddamy Ci każdą złotówkę. Bez pytań, bez tłumaczeń.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JanuaryOffer;
