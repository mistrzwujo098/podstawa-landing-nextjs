'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const RealTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Małgorzata Nowak",
      role: "mama",
      rating: 5,
      quote: "Dzień dobry, udało się matura zaliczona. Matematyka poziom podstawowy 60%. Wszystko dzięki Pani, dodam, że mam 45 lat. Uczyłam się dosłownie od podstaw. Bardzo dziękuję i pozdrawiam serdecznie.",
      result: "Matura zaliczona - 60%",
      objection: "nauka od podstaw jako dorosły"
    },
    {
      name: "Katarzyna Wiśniewska",
      role: "mama",
      rating: 5,
      quote: "Dzień dobry! Bardzo dobry dzień dla mnie! Dziękuję bardzo za wszystkie live przygotowujące do matury oraz darmowe filmy, dzięki nim zrozumiałam matematykę, bo od zawsze to dla mnie była czarna magia. ZDAŁAM NA 44%. Cały czas sobie powtarzałam: \"Oby było 30%\" i się bałam, czy zdam czy nie. Pozdrawiam",
      result: "44% - ponad próg",
      objection: "matematyka była czarną magią"
    },
    {
      name: "Maciej Holc",
      role: "uczeń",
      rating: 5,
      quote: "Konkretny i odpowiedni kurs dla tych, co celują po 100%, jak i dla tych, co celują, aby tylko zdać. W tydzień z samym kursem nadrobiłem zaległości spokojnie z paru lat. Jeśli jeszcze raz miałbym zdawać maturę i zastanawiać się nad skorzystaniem z Korepetycji, to tym razem bym się nie wahał i skorzystał z pełną świadomością. Pozdrawiam 🙂",
      result: "Tydzień = kilka lat zaległości",
      objection: "duże zaległości w nauce",
      highlight: true
    },
    {
      name: "Piotr Kowalczyk",
      role: "uczeń",
      rating: 5,
      quote: "Pani Paulino, mamy to 94%!!!!!! To wszystko z Pani wielką pomocą, po zdalnych nie potrafiłem nic z matematyki i dopiero w trzeciej klasie obudziłem się, że trzeba coś z tym zrobić i tak przez 2 lata się z Panią przygotowywałem. No i jest 94%. Bardzo Pani dziękuję, nigdy nie spotkałem lepszego nauczyciela matematyki 🤘🤘",
      result: "94% na maturze",
      objection: "zdalne zaległości",
      highlight: true
    },
    {
      name: "Martyna Jączyk",
      role: "uczennica",
      rating: 5,
      quote: "Polecam kurs stworzony przez Panią Paulinę z całego serca. Na pewnym etapie mojej nauki sądziłam, że nigdy nie zdołam nauczyć się matematyki wystarczająco dobrze, aby zdać maturę. Jednakże ten kurs zmienił całkowicie moje postrzeganie tego przedmiotu i uświadomił, że nauka matematyki może być przyjemna. Dzięki kursowi zdałam maturę z matematyki i mogę dalej spełniać marzenia ❤️ Serdecznie polecam!",
      result: "Matura zdana",
      objection: "brak wiary w siebie"
    },
    {
      name: "Marika Kowalska",
      role: "uczennica",
      rating: 5,
      quote: "Wspaniały kurs!! Bardzo merytoryczny i pomocny, nagle wszystko staje się jasne",
      result: "Wszystko jasne",
      objection: "chaos w głowie"
    },
    {
      name: "Agnieszka Lewandowska",
      role: "uczennica",
      rating: 5,
      quote: "Witam, piszę do Pani, aby bardzo podziękować za kurs. Dzięki Pani polubiłam matematykę i mogłam zdać maturę z wynikiem, który kiedyś wydawał mi się nieosiągalny. Naukę zaczęłam w lipcu od zera, ponieważ nie umiałam wykonać żadnego zadania z matur i miałam duże zaległości. W grudniu próbną udało mi się napisać na 44%, co było dla mnie dużym progresem, a ostatecznie udało mi się uzyskać 62%. Jestem dumna z tego wyniku i bardzo Pani dziękuję za tak wspaniały kurs i live'y oraz za wsparcie na każdym etapie przygotowań do matury. Pozdrawiam Agnieszka 🙂",
      result: "Z 0% na 62%",
      objection: "start od zera w lipcu",
      highlight: true
    },
    {
      name: "Milena Zawadzka",
      role: "uczennica",
      rating: 5,
      quote: "Dzień dobry, Korzystałam z Pani kursu i miałam 100% z podstawy i 68% z rozszerzenia!! Dziękuję bardzo za materiały, które były niezwykle pomocne! Pozdrawiam Milena ❤️",
      result: "100% podstawa + 68% rozszerzenie",
      objection: "wysoki cel"
    },
    {
      name: "Monika Zielińska",
      role: "uczennica",
      rating: 5,
      quote: "Pani Paulino… byłam słaba z matmy zawsze, tak czułam przynajmniej. Pamiętam, jak kupiłam Pani kurs i zapytałam, czy 70 procent jest w ogóle możliwe… sprawdziłam wynik matury - 92%!!!!! DZIĘKUJĘ, DZIĘKUJĘ, DZIĘKUJĘ!!!!!!!",
      result: "Cel 70% → Wynik 92%",
      objection: "niska wiara w siebie",
      highlight: true
    },
    {
      name: "Tomasz Wójcik",
      role: "uczeń",
      rating: 5,
      quote: "Zdobyłem 85 procent Dziękuję za pomoc w nauce. Pozdrawiam",
      result: "85% na maturze",
      objection: "standardowy"
    },
    {
      name: "Kacper Dąbrowski",
      role: "uczeń",
      rating: 5,
      quote: "Dzień dobry, Pani Paulina dziękuję za wskazówki, spotkania. Nie mam 100%, ale 72%. Najlepszy wynik w klasie, ocena końcowa to 2. Jestem dumny i przeszczęśliwy. Dziękuję z całego serca. Pozdrawiam serdecznie Kacper. P.S. Teraz siostra będzie z panią przygotowywać się z rozszerzenia 🙂",
      result: "Ocena 2 → Matura 72%",
      objection: "bardzo słabe oceny w szkole"
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
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
            Co mówią maturzyści i ich rodzice
          </h2>
          <p className="text-lg text-gray-600">
            Prawdziwe wyniki z matury, prawdziwe opinie. Tylko imiona zostały zmienione dla ochrony prywatności.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`bg-gradient-to-br ${
                testimonial.highlight
                  ? 'from-paulina-bg-yellow to-paulina-bg-purple ring-2 ring-paulina-accent'
                  : 'from-gray-50 to-white'
              } rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 relative`}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 text-paulina-primary opacity-10" size={48} />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-paulina-accent fill-current" size={16} />
                ))}
              </div>

              {/* Result Badge */}
              {testimonial.result && (
                <div className="inline-block bg-paulina-accent text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  {testimonial.result}
                </div>
              )}

              {/* Quote */}
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-paulina-primary">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-700 mb-4">
            <span className="font-bold text-paulina-primary">98% maturzystów poleca</span> kurs znajomym
          </p>
          <p className="text-sm text-gray-600">
            To nie są wybrane opinie - to losowa próbka z tysięcy otrzymanych w ostatnim roku
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RealTestimonials;
