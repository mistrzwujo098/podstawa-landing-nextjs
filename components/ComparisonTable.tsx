'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const features = [
    { name: 'Ponad 50h materiału video', standard: true, premium: true, expert: true },
    { name: '>60 lekcji video', standard: true, premium: true, expert: true },
    { name: '>1500 zadań z rozwiązaniami', standard: true, premium: true, expert: true },
    { name: 'Ściągi z działów', standard: true, premium: true, expert: true },
    { name: 'Rozwiązane zadania ze wszystkich egzaminów CKE', standard: true, premium: true, expert: true },
    { name: 'Nagroda + certyfikat za 100%', standard: true, premium: true, expert: true },
    { name: 'Ebook ze wzorami do egzaminu', standard: true, premium: true, expert: true },
    { name: 'Pakiet 5 nagrań z psychologiem', standard: true, premium: true, expert: true },
    { name: '3 Masterclass (stres, motywacja, planowanie)', standard: true, premium: true, expert: true },
    { name: 'Aplikacja iOS/Android', standard: true, premium: true, expert: true },
    { name: '9 próbnych arkuszy egzaminacyjnych', standard: true, premium: true, expert: true },
    { name: '9 spotkań online z rozwiązywaniem', standard: true, premium: true, expert: true },
    { name: '30 x 90-minutowych spotkań na żywo', standard: true, premium: true, expert: true },
    { name: 'Nagrania wszystkich spotkań', standard: true, premium: true, expert: true },
    { name: 'Dostęp na 12 miesięcy', standard: true, premium: true, expert: true },
    { name: 'Gwarancja satysfakcji 30 dni', standard: true, premium: true, expert: true },
    { name: 'Dostęp na 24 miesiące', standard: false, premium: true, expert: true },
    { name: 'Kurs 10 pewniaków', standard: false, premium: true, expert: true },
    { name: '10 autorskich arkuszy z rozwiązaniami', standard: false, premium: true, expert: true },
    { name: 'Wielka Powtórka Mistrzów', standard: false, premium: true, expert: true },
    { name: 'Ebook z ubiegłorocznymi zadaniami', standard: false, premium: true, expert: true },
    { name: 'Nagrania 30 lekcji z ubiegłego roku', standard: false, premium: false, expert: true },
    { name: 'Konsultacja indywidualna 45 min', standard: false, premium: false, expert: true },
    { name: 'Analiza 3 egzaminów z wskazówkami', standard: false, premium: false, expert: true },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-paulina-bg-purple">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Szczegółowe porównanie pakietów
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Wybierz pakiet idealny dla Twojego dziecka
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-paulina-primary to-paulina-purple text-white">
                  <th className="text-left p-2 sm:p-4 text-xs sm:text-sm font-bold">📦 Zawartość pakietu</th>
                  <th className="text-center p-2 sm:p-4 min-w-[80px] sm:min-w-[120px]">
                    <div className="font-bold text-xs sm:text-base">Standard</div>
                    <div className="text-xs sm:text-sm font-normal">999 zł</div>
                  </th>
                  <th className="text-center p-2 sm:p-4 min-w-[80px] sm:min-w-[120px] bg-white/10">
                    <div className="font-bold text-xs sm:text-base">Premium</div>
                    <div className="text-xs sm:text-sm font-normal">1499 zł</div>
                    <div className="text-[10px] sm:text-xs font-bold text-yellow-300 mt-1">POPULARNY</div>
                  </th>
                  <th className="text-center p-2 sm:p-4 min-w-[80px] sm:min-w-[120px]">
                    <div className="font-bold text-xs sm:text-base">Expert</div>
                    <div className="text-xs sm:text-sm font-normal">2499 zł</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="p-2 sm:p-4 text-xs sm:text-sm text-gray-700">
                      {feature.name}
                    </td>
                    <td className="text-center p-2 sm:p-4">
                      {feature.standard ? (
                        <CheckCircle className="inline text-green-500" size={16} />
                      ) : (
                        <X className="inline text-gray-300" size={16} />
                      )}
                    </td>
                    <td className="text-center p-2 sm:p-4 bg-paulina-bg-purple/30">
                      {feature.premium ? (
                        <CheckCircle className="inline text-green-500" size={16} />
                      ) : (
                        <X className="inline text-gray-300" size={16} />
                      )}
                    </td>
                    <td className="text-center p-2 sm:p-4">
                      {feature.expert ? (
                        <CheckCircle className="inline text-green-500" size={16} />
                      ) : (
                        <X className="inline text-gray-300" size={16} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => {
              const element = document.getElementById('pricing');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-paulina-accent to-paulina-orange text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Wybierz swój pakiet teraz →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
