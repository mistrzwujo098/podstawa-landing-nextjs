'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Video, FileText, Users, Clock, CheckCircle, Sparkles } from 'lucide-react';

const BlackFridayOffer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const deadline = new Date('2025-11-30T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const bonuses = [
    {
      icon: Video,
      title: 'Kurs Główny - Program Ósmoklasisty 2025',
      value: 1997,
      details: [
        '50h materiału video HD',
        '>60 lekcji tematycznych',
        '1500+ zadań z rozwiązaniami',
        '9 arkuszy egzaminacyjnych',
        '30 spotkań live (90 min każde)'
      ]
    },
    {
      icon: Users,
      title: 'BONUS #1: Live Onboarding "Jak zacząć"',
      value: 297,
      details: [
        '60-minutowe spotkanie live',
        'Plan działania na pierwsze 30 dni',
        '3 największe błędy w nauce online',
        'Q&A - możliwość zadania pytań'
      ],
      badge: 'NOWY'
    },
    {
      icon: FileText,
      title: 'BONUS #2: Progress Tracker PDF',
      value: 97,
      details: [
        'PDF do wydruku',
        'Checklist wszystkich modułów',
        'Tracking postępu wizualnie',
        'Wersja dla rodzica + dla ucznia'
      ],
      badge: 'NOWY'
    },
    {
      icon: Gift,
      title: 'BONUS #3: Druga Licencja 2026 (do podarowania)',
      value: 1997,
      details: [
        'Kup raz, użyj dwa razy',
        'Dla młodszego rodzeństwa',
        'Lub podaruj znajomemu',
        'Aktywacja w 2026 roku'
      ],
      badge: 'EKSKLUZYWNE'
    },
    {
      icon: Video,
      title: 'BONUS #4: "Rodzic w Spokoju" - Video Guide',
      value: 197,
      details: [
        '15-minutowy materiał dla rodziców',
        'Jak wspierać bez bycia "na plecach"',
        '5 pytań zamiast "czy się uczysz?"',
        'Jak rozpoznać kiedy dziecko potrzebuje pomocy'
      ],
      badge: 'NOWY'
    }
  ];

  const totalValue = bonuses.reduce((sum, bonus) => sum + bonus.value, 0);
  const currentPrice = 1499;
  const savings = totalValue - currentPrice;
  const savingsPercent = Math.round((savings / totalValue) * 100);

  return (
    <section id="black-friday" className="py-16 bg-gradient-to-b from-gray-900 via-paulina-primary to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with Sparkles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-paulina-accent" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">
              BLACK FRIDAY 2025
            </h2>
            <Sparkles className="text-paulina-accent" size={32} />
          </div>
          <p className="text-xl text-paulina-accent font-semibold">
            Wszystkie bonusy + oszczędność {savingsPercent}% · tylko do 30 listopada
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-paulina-accent to-orange-600 rounded-2xl p-8 mb-12 shadow-2xl"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="text-white" size={28} />
            <h3 className="text-2xl font-bold text-white">Oferta kończy się za:</h3>
          </div>
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Dni', value: timeLeft.days },
              { label: 'Godzin', value: timeLeft.hours },
              { label: 'Minut', value: timeLeft.minutes },
              { label: 'Sekund', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-4xl md:text-5xl font-bold mb-1">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sm uppercase tracking-wide opacity-90">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Value Stacking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white text-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl mb-8"
        >
          <h3 className="text-3xl font-bold text-paulina-primary mb-8 text-center">
            Co dokładnie dostajesz w Black Friday?
          </h3>

          <div className="space-y-6 mb-8">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-paulina-bg-purple rounded-xl p-6 relative"
              >
                {bonus.badge && (
                  <div className="absolute -top-3 -right-3 bg-paulina-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    {bonus.badge}
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-paulina-primary to-paulina-purple flex items-center justify-center">
                    <bonus.icon className="text-white" size={24} />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-lg text-paulina-primary">
                        {bonus.title}
                      </h4>
                      <span className="text-xl font-bold text-paulina-accent">
                        {bonus.value} zł
                      </span>
                    </div>

                    <ul className="space-y-1">
                      {bonus.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Value */}
          <div className="border-t-2 border-paulina-accent pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl text-gray-600">Łączna wartość wszystkich bonusów:</span>
              <span className="text-3xl font-bold text-gray-400 line-through">{totalValue} zł</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-paulina-primary">Twoja cena Black Friday:</span>
              <span className="text-5xl font-bold text-paulina-accent">{currentPrice} zł</span>
            </div>
            <div className="text-right">
              <span className="text-xl font-semibold text-green-600">
                Oszczędzasz {savings} zł ({savingsPercent}% taniej!)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Transparent Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8"
        >
          <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
            <Clock className="text-paulina-accent" size={24} />
            Dlaczego deadline 30 listopada?
          </h4>
          <p className="text-white/90 mb-2">
            Szczerze: po Black Friday przez cały grudzień skupiam się na <span className="font-bold text-paulina-accent">wsparciu obecnych kursantów</span> - odpowiadam na pytania, pomagam z trudnymi zadaniami, prowadzę dodatkowe spotkania live.
          </p>
          <p className="text-white/90">
            Nie mogę jednocześnie wspierać setek nowych osób i setki już zapisanych. <span className="font-bold text-white">To nie marketing - to logistyka.</span>
          </p>
          <p className="text-sm text-paulina-accent mt-3">
            Kolejna możliwość zapisu: styczeń 2025 (wtedy bez tych bonusów i w wyższej cenie)
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => {
              const element = document.getElementById('pricing');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-3 px-12 py-5 bg-paulina-accent text-white font-bold text-xl rounded-full shadow-2xl hover:bg-orange-600 transition-all duration-300 hover:scale-105"
          >
            <Gift size={28} />
            <span>Wybierz Pakiet Black Friday</span>
          </button>
          <p className="text-sm text-white/80 mt-4">
            ⚠️ Pozostało {timeLeft.days} dni {timeLeft.hours}h {timeLeft.minutes}min do końca oferty
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlackFridayOffer;
