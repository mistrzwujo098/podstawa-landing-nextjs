'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronRight, Shield, Clock, Brain, Heart, Wallet, Award } from 'lucide-react';

interface Objection {
  id: string;
  question: string;
  concern: string;
  icon: React.ElementType;
  answer: string;
  proof: string;
  guarantee?: string;
}

const ObjectionHandling: React.FC = () => {
  const [selectedObjection, setSelectedObjection] = useState<string | null>(null);
  
  const objections: Objection[] = [
    {
      id: 'motivation',
      question: 'Co jeśli moje dziecko nie będzie chciało się uczyć?',
      concern: 'Motywacja dziecka',
      icon: Heart,
      answer: 'System LAPS został zaprojektowany jak gra - z poziomami, nagrodami i wyzwaniami. Dziecko samo będzie chciało wracać do nauki! Dodatkowo, lekcje trwają tylko 15 minut, więc nie zdążą się znudzić.',
      proof: '93% dzieci kończy cały kurs bez przypominania rodziców',
      guarantee: '30-dniowa gwarancja zwrotu bez pytań'
    },
    {
      id: 'time',
      question: 'Nie mam czasu, żeby siedzieć z dzieckiem nad lekcjami',
      concern: 'Brak czasu rodzica',
      icon: Clock,
      answer: 'To właśnie piękno tego kursu - NIE musisz siedzieć z dzieckiem! System jest w 100% samodzielny. W razie czego masz stały dostęp do platformy i możesz kontrolować postępy.',
      proof: 'Większość rodziców nie pomaga dziecku wcale, a wyniki są świetne',
      guarantee: '30-dniowa gwarancja zwrotu bez pytań'
    },
    {
      id: 'money',
      question: 'To za drogo, nie stać mnie na taki wydatek',
      concern: 'Cena kursu',
      icon: Wallet,
      answer: 'Rozumiem! Dlatego oferuję raty 0% - tylko 200 zł miesięcznie. To mniej niż 2 godziny korepetycji! Plus oszczędzasz średnio 3000 zł na korepetycjach.',
      proof: 'Średni koszt przygotowania z korepetytorem to 3600 zł',
      guarantee: '30-dniowa gwarancja zwrotu, nawet po przerobieniu lekcji'
    },
    {
      id: 'previous',
      question: 'Już próbowaliśmy innych kursów i nie działały',
      concern: 'Złe doświadczenia',
      icon: Brain,
      answer: 'Większość kursów to suche tłumaczenie teorii. Mój system LAPS uczy przez zabawę i praktykę. Każde dziecko uczy się inaczej - dlatego kurs dostosowuje się do tempa ucznia.',
      proof: '89% moich uczniów wcześniej nie radziło sobie z innymi kursami',
      guarantee: 'Jeśli nie zobaczysz poprawy w 30 dni, zwrócimy pieniądze'
    },
    {
      id: 'trust',
      question: 'Skąd mam wiedzieć, że to nie oszustwo?',
      concern: 'Wiarygodność',
      icon: Shield,
      answer: 'Posiadam 15-letnie doświadczenie w nauczaniu matematyki. Co roku zdobywam 1 miejsce w Orłach Edukacji. Mam ponad 24 000 zadowolonych uczniow oraz setki opinii na Facebooku i Google.',
      proof: 'Średnia ocena 4.9/5 z ponad 1000 opinii',
      guarantee: 'Płatność przez bezpieczny system, faktura VAT, pełna gwarancja'
    },
    {
      id: 'level',
      question: 'Moje dziecko jest bardzo słabe z matmy, czy sobie poradzi?',
      concern: 'Poziom dziecka',
      icon: Award,
      answer: 'Kurs zaczyna od absolutnych podstaw i stopniowo buduje wiedzę. Nie zakładamy żadnej wiedzy wstępnej. Tempo jest dostosowane do dziecka - może powtarzać lekcje tyle razy, ile potrzebuje.',
      proof: 'Uczniowie z początkowym wynikiem 30% osiągają średnio 75% na egzaminie',
      guarantee: '30-dniowa gwarancja zwrotu bez pytań'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rozumiem Twoje wątpliwości
          </h2>
          <p className="text-xl text-gray-600">
            Każdy rodzic ma podobne obawy. Oto odpowiedzi na najczęstsze z nich:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objections.map((objection, index) => {
            const Icon = objection.icon;
            const isSelected = selectedObjection === objection.id;
            
            return (
              <motion.div
                key={objection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.button
                  onClick={() => setSelectedObjection(isSelected ? null : objection.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                    isSelected 
                      ? 'border-paulina-accent bg-paulina-bg-purple shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-paulina-accent/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${
                      isSelected ? 'bg-paulina-accent text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {objection.concern}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {objection.question}
                      </p>
                    </div>
                    <ChevronRight 
                      className={`text-gray-400 transition-transform ${
                        isSelected ? 'rotate-90' : ''
                      }`} 
                      size={20} 
                    />
                  </div>
                </motion.button>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white border-2 border-t-0 border-gray-200 rounded-b-xl">
                        {/* Answer */}
                        <p className="text-gray-700 mb-4">
                          {objection.answer}
                        </p>
                        
                        {/* Proof */}
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                          <p className="text-blue-800 font-semibold">
                            📊 {objection.proof}
                          </p>
                        </div>
                        
                        {/* Guarantee */}
                        {objection.guarantee && (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <div className="flex items-center gap-2">
                              <Shield className="text-green-600" size={20} />
                              <p className="text-green-800 font-semibold">
                                {objection.guarantee}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-paulina-primary to-paulina-purple text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Wciąż masz wątpliwości?
            </h3>
            <p className="mb-6 text-lg">
              Porozmawiaj ze mną! Osobiście odpowiem na wszystkie Twoje pytania.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="mailto:paulina@skutecznekorepetycje.com"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-paulina-primary font-bold py-3 px-8 rounded-full inline-flex items-center justify-center gap-2"
              >
                ✉️ Napisz do mnie
              </motion.a>
            </div>
            
            <p className="mt-6 text-sm opacity-90">
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectionHandling;
