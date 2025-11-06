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
      parent: "Monika Mączyńska",
      child: "córka",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 0,
      quote: "Kursy są rewelacyjne! Moja córka uczyła się sama w trybie edukacji domowej korzystając tylko z kursu pani Pauliny (żadnych dodatkowych korepetycji!) i zdała egzamin ósmoklasisty na tak wysokim poziomie, że dostała się do jednego z najlepszych liceów w mieście. Szczerze polecam!",
      highlight: "Najlepsze liceum",
      date: ""
    },
    {
      id: 2,
      parent: "Anna",
      child: "córka",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 48,
      afterScore: 100,
      quote: "Kurs matematyki E8 u Pani Pauliny to absolutny strzał w dziesiątkę! Zajęcia prowadzone są w niezwykle przystępny sposób – Pani Paulina potrafi tłumaczyć nawet najtrudniejsze zagadnienia w sposób prosty, zrozumiały i... ciekawy! Dzięki niej moja córka nie tylko nadrobiła zaległości, ale też zaczęła wierzyć w siebie i polubiła matematykę. Z 48% na początku mamy 100%!!!",
      highlight: "48% → 100%",
      date: ""
    },
    {
      id: 3,
      parent: "Iwona Zaremska",
      child: "syn",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 23,
      afterScore: 83,
      quote: "Syn podniósł wynik z 23% na 83%, włożył ogrom pracy, dzięki pani bardzo się przyłożył, skrupulatnie rozwiązywał zadania. Skorzysta w przyszłym roku z pani kursu. Dziękujemy!",
      highlight: "+60% poprawy",
      date: ""
    },
    {
      id: 4,
      parent: "Urszula Godlewska",
      child: "córka",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 30,
      afterScore: 85,
      quote: "Egzamin 8-klasisty to świetny kurs. Moja córka w ciągu zaledwie 1 miesiąca nauki z tym kursem z 30% na egzaminach próbnych zdała egzamin 8-klasisty na 85%.",
      highlight: "1 miesiąc = 85%",
      date: ""
    },
    {
      id: 5,
      parent: "Magda M",
      child: "córka",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 96,
      quote: "Kupiłam kurs ósmoklasisty dla mojej córki. Uczyła się przy moim wsparciu, a razem uczestniczyłyśmy również w spotkaniach na żywo. Pani Paulina w sposób bardzo klarowny tłumaczy zagadnienia, z szacunkiem podchodzi do uczniów i nigdy nie okazuje poirytowania ani zniecierpliwienia. Taka atmosfera zdecydowanie sprzyja efektywnej nauce. Kurs znacząco pomógł w przygotowaniach do egzaminu – wynik to aż 96%!",
      highlight: "Wynik 96%",
      date: ""
    },
    {
      id: 6,
      parent: "Anna Surmiak",
      child: "córka",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 100,
      quote: "Polecam kurs bardzo gorąco, córka przeszła cały kurs przygotowujący do egzaminu z matematyki i napisała egzamin ósmoklasisty na 100%. To chyba najlepsza opinia :)",
      highlight: "100% na egzaminie",
      date: ""
    },
    {
      id: 7,
      parent: "Katarzyna Kwiecińska",
      child: "córka",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 40,
      afterScore: 100,
      quote: "Pani Paulino, serdecznie dziękujemy za przygotowanie córki do egzaminu. Pierwszy test z matematyki rozwiązywany we wrześniu napisała na niespełna 40%, po Pani kursach, nie wierzyłam, ale tak na 100%. Serdecznie polecam!",
      highlight: "40% → 100%",
      date: ""
    },
    {
      id: 8,
      parent: "Anna Kupper",
      child: "córka",
      location: "",
      avatar: "",
      rating: 5,
      beforeScore: 0,
      afterScore: 0,
      quote: "Polecam jako matka dziecka. Po dwóch lekcjach zupełnie wszystko się zmieniło. Pokazane były ciekawe sposoby na rozwiązywanie zadań, o których w szkole się nie mówi lub po prostu nie pokazuje. Na egzaminie 8-klasistów ogarnęła zadania tekstowe, które prędzej nie zawsze wychodziły dobrze.",
      highlight: "Zadania tekstowe",
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
            <span className="text-paulina-accent">Ponad 20 000 rodziców</span> już pomogło swoim dzieciom
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Zobacz, co mówią po <span className="text-paulina-primary">2-3 miesiącach</span> kursu:
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
                  <p className="text-gray-600">Rodzic</p>
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
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-paulina-accent w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Opinia ${index + 1}`}
                  />
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
                  { label: 'Średnia poprawa wyniku', value: '+43%', color: 'text-green-600' },
                  { label: 'Zadowolonych rodziców', value: '98%', color: 'text-blue-600' },
                  { label: 'Uczniów z wynikiem 80%+', value: '84%', color: 'text-purple-600' },
                  { label: 'Oszczędność na korepetycjach', value: '3000+ zł', color: 'text-paulina-accent' },
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
                Każdego dnia otrzymujesz raporty o postępach dziecka. 
                Zero stresu, zero konfliktów o naukę.
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span className="font-semibold">100% gwarancja satysfakcji</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentTestimonials;
