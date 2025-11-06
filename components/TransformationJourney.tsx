'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Heart, Brain, Star, CheckCircle, AlertTriangle } from 'lucide-react';

const TransformationJourney: React.FC = () => {
  const journeySteps = [
    {
      phase: 'PRZED',
      title: 'Twoja obecna sytuacja',
      emotion: 'Frustracja i bezradność',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 border-red-200',
      problems: [
        'Dziecko płacze nad matematyką każdego wieczora',
        'Kłótnie o odrabianie zadań domowych',
        'Słabe oceny mimo Twoich starań',
        'Strach przed każdą klasówką',
        'Wydajesz fortunę na korepetycje bez efektów',
        'Czujesz się bezradna/y - nie potrafisz pomóc'
      ],
      testimonial: '"Każdego dnia to samo - łzy, krzyki, dwójki z klasówek. Czuję się jak najgorsza mama na świecie."',
      author: 'Anna, mama Zosi (przed kursem)'
    },
    {
      phase: 'W TRAKCIE',
      title: 'Pierwsze 30 dni z LAPS',
      emotion: 'Nadzieja i pierwsze sukcesy',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 border-blue-200',
      problems: [
        'Dziecko samo prosi o kolejne lekcje (to nie żart!)',
        'Pierwsze "rozumiem!" zamiast "nie umiem"',
        'Spokojne wieczory bez kłótni o naukę',
        'Pierwsza lepsza ocena z klasówki',
        'Widzisz pewność siebie w oczach dziecka',
        'Czujesz ulgę - w końcu coś działa!'
      ],
      testimonial: '"Po 3 tygodniach Kacper powiedział: \"Mamo, w końcu rozumiem te równania!\" Płakałam ze szczęścia."',
      author: 'Magda, mama Kacpra (po miesiącu)'
    },
    {
      phase: 'PO KURSIE',
      title: 'Twoje dziecko uwielbia matematykę',
      emotion: 'Duma i spokój',
      icon: Star,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 border-green-200',
      problems: [
        'Dziecko samo siada do zadań - bez przypominania',
        'Matematyka stała się jego mocną stroną',
        'Pewność siebie na egzaminach i w życiu',
        'Wynik 80%+ na maturze/egzaminie ósmoklasisty',
        'Oszczędziłaś 3000+ zł na korepetycjach',
        'Jesteś dumna mama/tata - to najlepsze uczucie'
      ],
      testimonial: '"Ania zdała maturę na 92% z matematyki. Dostała się na wymarzone studia. To był najlepszy zakup w moim życiu."',
      author: 'Tomasz, tata Ani (po roku)'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-paulina-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-paulina-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Droga od <span className="text-red-600">frustracji</span>{' '}
            do <span className="text-green-600">sukcesu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zobacz, jak zmienia się życie rodzin, które wybrały mój system LAPS.
            Ta transformacja może stać się <span className="font-bold text-paulina-accent">Twoją historią</span>.
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-blue-200 to-green-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3, duration: 0.6 }}
                  className="relative"
                >
                  {/* Phase Number */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-20`}>
                    {index + 1}
                  </div>

                  <div className={`${step.bgColor} border-2 rounded-2xl p-8 pt-12 shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}>
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${step.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-3`}>
                        <Icon size={16} />
                        {step.phase}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-600 italic">
                        {step.emotion}
                      </p>
                    </div>

                    {/* Problems/Benefits List */}
                    <div className="space-y-3 mb-6">
                      {step.problems.map((problem, pIndex) => (
                        <motion.div
                          key={pIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.3 + pIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          {index === 0 ? (
                            <AlertTriangle className="text-red-500 mt-0.5 flex-shrink-0" size={20} />
                          ) : (
                            <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                          )}
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {problem}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white/80 rounded-xl p-4 border border-gray-200">
                      <blockquote className="text-gray-700 italic text-sm mb-3 leading-relaxed">
                        {step.testimonial}
                      </blockquote>
                      <cite className="text-xs text-gray-500 font-semibold">
                        — {step.author}
                      </cite>
                    </div>

                    {/* Arrow to next step (desktop only) */}
                    {index < journeySteps.length - 1 && (
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-gray-400"
                      >
                        <ArrowRight size={32} />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-paulina-primary to-paulina-accent text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Którą historię chcesz napisać dla swojego dziecka?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Każdego dnia odkładania to kolejny dzień, w którym inne dzieci zyskują przewagę.
              <br />
              <span className="font-bold">Twoje dziecko zasługuje na sukces już dziś.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-paulina-primary font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                <Heart className="text-red-500" size={24} />
                Zaczynam transformację dziecka
                <ArrowRight size={20} />
              </motion.button>
              
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle size={16} />
                <span>30-dniowa gwarancja zwrotu</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 mb-4">
            Statystyki transformacji moich kursantów:
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-green-600">94%</span>
              <span className="text-sm text-gray-600">rodziców odczuwa ulgę już w pierwszym tygodniu</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-600">87%</span>
              <span className="text-sm text-gray-600">dzieci samo prosi o kolejne lekcje</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-paulina-accent">3247 zł</span>
              <span className="text-sm text-gray-600">średnia oszczędność na korepetycjach</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationJourney;
