'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const RealTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Monika Mączyńska",
      role: "mama",
      rating: 5,
      quote: "Kursy są rewelacyjne! Moja córka uczyła się sama w trybie edukacji domowej korzystając tylko z kursu pani Pauliny (żadnych dodatkowych korepetycji!) i zdała egzamin ósmoklasisty na tak wysokim poziomie, że dostała się do jednego z najlepszych liceów w mieście. Szczerze polecam!",
      result: "Dostała się do najlepszego liceum w mieście",
      objection: "edukacja domowa"
    },
    {
      name: "Anna",
      role: "mama",
      rating: 5,
      quote: "Kurs matematyki E8 u Pani Pauliny to absolutny strzał w dziesiątkę! Zajęcia prowadzone są w niezwykle przystępny sposób – Pani Paulina potrafi tłumaczyć nawet najtrudniejsze zagadnienia w sposób prosty, zrozumiały i... ciekawy! Dzięki niej moja córka nie tylko nadrobiła zaległości, ale też zaczęła wierzyć w siebie i polubiła matematykę.",
      result: "Z 48% na 100%",
      objection: "zaległości w nauce",
      highlight: true
    },
    {
      name: "Iwona Zaremska",
      role: "mama",
      rating: 5,
      quote: "Syn podniósł wynik z 23% na 83%, włożył ogrom pracy, dzięki pani bardzo się przyłożył, skrupulatnie rozwiązywał zadania. Skorzysta w przyszłym roku z pani kursu. Dziękujemy!",
      result: "Z 23% na 83%",
      objection: "bardzo słaby start"
    },
    {
      name: "Rodzic ucznia z dysleksją",
      role: "mama/tata",
      rating: 5,
      quote: "Syn uzyskał super wynik z egzaminu ósmoklasisty 77% (mimo dysleksji to wspaniałe osiągnięcie)!!! Bardzo się cieszymy i jesteśmy z niego dumni!!! Jeszcze raz dziękujemy za wszystko!!!",
      result: "77% mimo dysleksji",
      objection: "dysleksja"
    },
    {
      name: "Uczennica klasy 8",
      role: "uczennica",
      rating: 5,
      quote: "Z e8 z matematyki uzyskałam 80%! Chcę Pani bardzo podziękować za kurs przygotowawczy z matematyki, ponieważ to dzięki niemu uzyskałam tak wysoki wynik! Na początku roku szkolnego moje wyniki z próbnych egzaminów wynosiły zaledwie 30%, czasem 23%, a teraz aż 80%!",
      result: "Z 23-30% na 80%",
      objection: "słabe wyniki na początku roku"
    },
    {
      name: "Urszula Godlewska",
      role: "mama",
      rating: 5,
      quote: "Egzamin 8-klasisty to świetny kurs. Moja córka w ciągu zaledwie 1 miesiąca nauki z tym kursem z 30% na egzaminach próbnych zdała egzamin 8-klasisty na 85%.",
      result: "1 miesiąc: 30% → 85%",
      objection: "mało czasu przed egzaminem",
      highlight: true
    },
    {
      name: "Magda M.",
      role: "mama",
      rating: 5,
      quote: "Kupiłam kurs ósmoklasisty dla mojej córki. Uczyła się przy moim wsparciu, a razem uczestniczyłyśmy również w spotkaniach na żywo. Pani Paulina w sposób bardzo klarowny tłumaczy zagadnienia, z szacunkiem podchodzi do uczniów i nigdy nie okazuje poirytowania ani zniecierpliwienia. Taka atmosfera zdecydowanie sprzyja efektywnej nauce. Kurs znacząco pomógł w przygotowaniach do egzaminu – wynik to aż 96%!",
      result: "Egzamin na 96%",
      objection: "potrzeba wsparcia rodzica"
    },
    {
      name: "Anna Surmiak",
      role: "mama",
      rating: 5,
      quote: "Polecam kurs bardzo gorąco, córka przeszła cały kurs przygotowujący do egzaminu z matematyki i napisała egzamin ósmoklasisty na 100%. To chyba najlepsza opinia :)",
      result: "100% na egzaminie",
      objection: "czy naprawdę działa",
      highlight: true
    },
    {
      name: "Katarzyna Kwiecińska",
      role: "mama",
      rating: 5,
      quote: "Pani Paulino, serdecznie dziękujemy za przygotowanie córki do egzaminu. Pierwszy test z matematyki rozwiązywany we wrześniu napisała na niespełna 40%, po Pani kursach, nie wierzyłam, ale tak na 100%. Serdecznie polecam, wiem że wrócimy do Pani :)",
      result: "Z 40% na 100%",
      objection: "sceptycyzm rodzica"
    },
    {
      name: "Anna Kupper",
      role: "mama",
      rating: 5,
      quote: "Polecam jako matka dziecka. Na początku podejście mojej córki było 'a po co, przecież my to już przerabialiśmy', za to po dwóch lekcjach zupełnie wszystko się zmieniło. Jak zapytałam no i jak? Dostałam odp., że nawet spoko i że pokazane były ciekawe sposoby na rozwiązywanie zadań, o których w szkole się nie mówi lub po prostu nie pokazuje.",
      result: "Zmiana nastawienia po 2 lekcjach",
      objection: "dziecko niechętne do kursu"
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
            Co mówią rodzice i uczniowie
          </h2>
          <p className="text-lg text-gray-600">
            Prawdziwe wyniki, prawdziwe opinie. Tylko imiona z rzeczywistych opinii.
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
            <span className="font-bold text-paulina-primary">98% rodziców poleca</span> kurs znajomym
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
