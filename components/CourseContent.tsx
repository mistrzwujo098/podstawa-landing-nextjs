'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

const CourseContent: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const platformImages = [
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/07/CleanShot-2024-07-23-at-17.32.47.png',
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/12/Paulina-od-Matematyki-5-2048x1300.webp',
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/12/11fe3aae32f1e20994207d29fef4679257073333.webp',
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/12/Paulina-od-Matematyki-10.webp'
  ];

  const modules = [
    {
      title: 'MODUŁ 1. Liczby rzeczywiste i potęgi',
      content: `- Liczby wymierne i niewymierne
- Działania na liczbach rzeczywistych
- Potęgi o wykładnikach całkowitych
- Właściwości potęg
- Pierwiastki kwadratowe i sześcienne
- Pierwiastkowanie i potęgowanie
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 2. Procenty i proporcje',
      content: `- Obliczanie procentu z liczby
- Obliczanie części bazowej
- Podwyżki i obniżki procentowe
- Porównywanie proporcji
- Skala i proporcje
- Zastosowania w zadaniach praktycznych
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 3. Procent składany i zadania finansowe',
      content: `- Procent składany
- Lokaty i kredyty
- Obliczanie odsetek
- Kapitalizacja odsetek
- Zadania o inwestycjach
- Praktyczne zastosowania finansowe
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 4. Wyrażenia algebraiczne',
      content: `- Jednomiany i wielomiany
- Działania na wielomianach
- Wzory skróconego mnożenia
- Rozkład wielomianu na czynniki
- Ułamki algebraiczne
- Przekształcanie wyrażeń
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 5. Równania i nierówności liniowe',
      content: `- Rozwiązywanie równań liniowych
- Równania z wartością bezwzględną
- Nierówności liniowe
- Nierówności z wartością bezwzględną
- Przedziały liczbowe
- Zadania tekstowe z równaniami
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 6. Równania i nierówności kwadratowe',
      content: `- Rozwiązywanie równań kwadratowych
- Wzór delta i postać iloczynowa
- Suma i iloczyn pierwiastków
- Nierówności kwadratowe
- Analiza równań z parametrem
- Zadania z kontekstem
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 7. Układy równań',
      content: `- Metoda podstawiania
- Metoda przeciwnych współczynników
- Układy równań liniowych
- Zadania tekstowe z układami
- Interpretacja geometryczna
- Układy z parametrem
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 8. Figury płaskie - własności i wzory',
      content: `- Kąty i ich właściwości
- Trójkąty - rodzaje i własności
- Czworokąty - prostokąt, kwadrat, romb, równoległobok
- Twierdzenie Pitagorasa
- Twierdzenie Talesa
- Podobieństwo figur
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 9. Pole i obwód figur płaskich',
      content: `- Pole i obwód trójkąta
- Pole i obwód czworokątów
- Pole i obwód koła
- Wzory na pola figur
- Zadania optymalizacyjne
- Zadania z życia codziennego
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 10. Bryły - własności i wzory',
      content: `- Graniastosłupy - rodzaje i własności
- Ostrosłupy - rodzaje i własności
- Walce i stożki
- Kula i jej elementy
- Przekroje brył
- Siatki brył
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 11. Objętość i pole powierzchni brył',
      content: `- Objętość graniastosłupów
- Objętość ostrosłupów
- Objętość walca i stożka
- Objętość kuli
- Pole powierzchni brył
- Zadania praktyczne z bryłami
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 12. Geometria analityczna - punkt i prosta',
      content: `- Układ współrzędnych na płaszczyźnie
- Odległość między punktami
- Środek odcinka
- Równanie prostej w różnych postaciach
- Współczynnik kierunkowy
- Proste równoległe i prostopadłe
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 13. Geometria analityczna - okrąg',
      content: `- Równanie okręgu
- Położenie punktu względem okręgu
- Styczna do okręgu
- Przecięcie prostej z okręgiem
- Wzajemne położenie okręgów
- Zadania z kontekstem
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 14. Funkcje - interpretacja wykresów',
      content: `- Pojęcie funkcji
- Odczytywanie wartości z wykresu
- Dziedzina i zbiór wartości
- Miejsca zerowe funkcji
- Monotoniczność i ekstrema
- Interpretacja wykresów w kontekście
- Przykładowe zadania maturalne`
    },
    {
      title: 'MODUŁ 15. Funkcje - liniowa, kwadratowa, wykładnicza',
      content: `- Funkcja liniowa i jej własności
- Wykres funkcji liniowej
- Funkcja kwadratowa i jej wykres
- Postaci funkcji kwadratowej
- Funkcja wykładnicza
- Zastosowania funkcji w zadaniach
- Przykładowe zadania maturalne`
    },
  ];

  const additionalContent = [
    { icon: '🔴', title: 'Aplikacja na smartfony', description: 'Możesz przyjść z dowolnym zadaniem matematycznym z którym masz problem', value: '797 zł' },
    { icon: '🎬', title: 'Ponad 60 lekcji', description: 'W formie video, masz do nich dostęp cały czas, 24 godziny na dobę 7 dni w tygodniu.', value: '997 zł' },
    { icon: '📓', title: '2000+ zadań z rozwiązaniami', description: 'Strategicznie dopasowane, od podstaw do matury. 1000 obowiązkowych + 1000 dodatkowych dla ambitnych.', value: '200 zł' },
    { icon: '🛟', title: 'Grupa kursantów', description: 'W każdej chwili możesz zadać nurtujące Cię pytanie ANONIMOWO i szybko uzyskać odpowiedź.', value: '300 zł' },
    { icon: '❤️', title: '30-dniowa gwarancja zwrotu pieniędzy', description: 'Gwarancja 30-dniowa jest bezwarunkowa.', value: 'Bezcenne' },
    { icon: '🧠', title: 'Dla Rodziców!', description: 'Cykl pięciu spotkań o stresie dla Rodziców maturzystów z fantastyczną Panią psycholog', value: '500 zł' },
  ];

  return (
    <section id="course-content" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wszystko, co otrzymasz w kursie
          </h2>
          <p className="text-gray-600">(kliknij by rozwijać)</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-paulina-bg-purple transition-colors"
                >
                  <span className="font-semibold text-gray-800">{module.title}</span>
                  {expandedModule === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                <AnimatePresence>
                  {expandedModule === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4"
                    >
                      <div className="text-gray-600 whitespace-pre-line">{module.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={platformImages[currentImageIndex]}
                alt="Widok platformy kursu"
                className="rounded-xl shadow-xl w-full"
              />
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + platformImages.length) % platformImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % platformImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {platformImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-paulina-accent w-6'
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Widok z wnętrza platformy do której dostajesz dostęp od razu po dołączeniu:
            </p>
            <p className="text-center mt-2 text-sm text-gray-500">
              👉 Kliknij strzałki lub kropki aby zobaczyć więcej zdjęć platformy
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Co jeszcze znajdę w kursie?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-paulina-accent font-semibold">Wartość: {item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseContent;
