'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle, TrendingUp } from 'lucide-react';

interface Testimonial {
  id: number;
  parent: string;
  child: string;
  location: string;
  avatar: string;
  rating: number;
  beforeScore: number;
  afterScore: number;
  quote: string;
  highlight: string;
  date: string;
}

const ParentTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      parent: "Małgorzata Nowak",
      child: "córka/syn",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 60,
      quote: "Dzień dobry, udało się matura zaliczona. Matematyka poziom podstawowy 60%. Wszystko dzięki Pani, dodam, że mam 45 lat. Uczyłam się dosłownie od podstaw. Bardzo dziękuję i pozdrawiam serdecznie.",
      highlight: "Matura 60%",
      date: ""
    },
    {
      id: 2,
      parent: "Piotr Kowalczyk",
      child: "syn",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 94,
      quote: "Pani Paulino, mamy to 94%!!!!!! To wszystko z Pani wielką pomocą, po zdalnych nie potrafiłem nic z matematyki i dopiero w trzeciej klasie obudziłem się, że trzeba coś z tym zrobić i tak przez 2 lata się z Panią przygotowywałem. No i jest 94%. Bardzo Pani dziękuję, nigdy nie spotkałem lepszego nauczyciela matematyki 🤘🤘",
      highlight: "Matura 94%",
      date: ""
    },
    {
      id: 3,
      parent: "Agnieszka Lewandowska",
      child: "córka",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 62,
      quote: "Witam, piszę do Pani, aby bardzo podziękować za kurs. Dzięki Pani polubiłam matematykę i mogłam zdać maturę z wynikiem, który kiedyś wydawał mi się nieosiągalny. Naukę zaczęłam w lipcu od zera, ponieważ nie umiałam wykonać żadnego zadania z matur i miałam duże zaległości. W grudniu próbną udało mi się napisać na 44%, co było dla mnie dużym progresem, a ostatecznie udało mi się uzyskać 62%. Jestem dumna z tego wyniku i bardzo Pani dziękuję za tak wspaniały kurs i live'y oraz za wsparcie na każdym etapie przygotowań do matury.",
      highlight: "Start od zera → 62%",
      date: ""
    },
    {
      id: 4,
      parent: "Milena Zawadzka",
      child: "córka",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 100,
      quote: "Dzień dobry, Korzystałam z Pani kursu i miałam 100% z podstawy i 68% z rozszerzenia!! Dziękuję bardzo za materiały, które były niezwykle pomocne!",
      highlight: "100% podstawa",
      date: ""
    },
    {
      id: 5,
      parent: "Monika Zielińska",
      child: "córka",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 92,
      quote: "Pani Paulino… byłam słaba z matmy zawsze, tak czułam przynajmniej. Pamiętam, jak kupiłam Pani kurs i zapytałam, czy 70 procent jest w ogóle możliwe… sprawdziłam wynik matury - 92%!!!!! DZIĘKUJĘ, DZIĘKUJĘ, DZIĘKUJĘ!!!!!!!",
      highlight: "Cel 70% → 92%",
      date: ""
    },
    {
      id: 6,
      parent: "Tomasz Wójcik",
      child: "syn",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 85,
      quote: "Zdobyłem 85 procent. Dziękuję za pomoc w nauce. Pozdrawiam",
      highlight: "Matura 85%",
      date: ""
    },
    {
      id: 7,
      parent: "Kacper Dąbrowski",
      child: "syn",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 72,
      quote: "Dzień dobry, Pani Paulina dziękuję za wskazówki, spotkania. Nie mam 100%, ale 72%. Najlepszy wynik w klasie, ocena końcowa to 2. Jestem dumny i przeszczęśliwy. Dziękuję z całego serca. Pozdrawiam serdecznie Kacper. P.S. Teraz siostra będzie z panią przygotowywać się z rozszerzenia 🙂",
      highlight: "Ocena 2 → 72%",
      date: ""
    },
    {
      id: 8,
      parent: "Martyna Jączyk",
      child: "córka",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 0,
      quote: "Polecam kurs stworzony przez Panią Paulinę z całego serca. Na pewnym etapie mojej nauki sądziłam, że nigdy nie zdołam nauczyć się matematyki wystarczająco dobrze, aby zdać maturę. Jednakże ten kurs zmienił całkowicie moje postrzeganie tego przedmiotu i uświadomił, że nauka matematyki może być przyjemna. Dzięki kursowi zdałam maturę z matematyki i mogę dalej spełniać marzenia ❤️",
      highlight: "Matura zdana",
      date: ""
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-paulina-bg-purple via-white to-paulina-bg-yellow">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-paulina-accent-text">Ponad 24 000 uczniów i rodziców</span> już przeszło przez kurs
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Zobacz, co mówią po kursie:
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Main Testimonial Card */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
          >
            {/* Success Badge */}
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {current.highlight}
            </div>

            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 text-paulina-accent/20" size={60} />

            {/* Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "{current.quote}"
              </blockquote>

              {/* Score Improvement */}
              {(current.beforeScore > 0 || current.afterScore > 0) && (
                <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    {current.beforeScore > 0 && (
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Przed</p>
                        <p className="text-2xl font-bold text-red-600">{current.beforeScore}%</p>
                      </div>
                    )}
                    <TrendingUp className="text-green-500" size={32} />
                    {current.afterScore > 0 && (
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Po kursie</p>
                        <p className="text-2xl font-bold text-green-600">{current.afterScore}%</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Author */}
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-bold text-gray-900">{current.parent}</p>
                  <p className="text-gray-600">Opinia kursanta</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Poprzednia opinia"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="min-w-[24px] min-h-[24px] flex items-center justify-center"
                    aria-label={`Opinia ${index + 1}`}
                  >
                    <span
                      className={`block h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-paulina-accent w-8'
                          : 'bg-gray-300 hover:bg-gray-400 w-2'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Następna opinia"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Stats and Trust Signals */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Statystyki, które mówią same za siebie:
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Tak potrafi urosnąć wynik (realna historia)', value: '+43pp', color: 'text-green-600' },
                  { label: 'Poleca znajomym (ankieta wewnętrzna)', value: '98%', color: 'text-blue-600' },
                  { label: 'Od 2019 roku', value: '24 000+ kursantów', color: 'text-paulina-accent-text' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-700">{stat.label}</span>
                    <span className={`font-bold text-xl ${stat.color}`}>{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trust Message */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-paulina-primary to-paulina-purple text-white rounded-xl p-6"
            >
              <h3 className="font-bold text-xl mb-3">
                Dołącz do społeczności szczęśliwych rodziców
              </h3>
              <p className="mb-4 opacity-90">
                Każdego dnia możesz śledzić postępy dziecka. 
                Zero stresu, zero konfliktów o naukę.
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span className="font-semibold">30 dni gwarancji zwrotu - bez pytań</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentTestimonials;
