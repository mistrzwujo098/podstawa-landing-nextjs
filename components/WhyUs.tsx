'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, AlertTriangle } from 'lucide-react';

const WhyUs: React.FC = () => {
  const comparisons = [
    {
      feature: "Czas nauki dziennie",
      others: "2-3 godziny męczarni",
      us: "15 minut efektywnej nauki"
    },
    {
      feature: "Koszt miesięczny",
      others: "600 zł (4 korepetycje)",
      us: "250 zł (lub jednorazowo taniej)"
    },
    {
      feature: "Kto się uczy",
      others: "Rodzic musi pomagać",
      us: "Dziecko uczy się SAMO"
    },
    {
      feature: "Motywacja",
      others: "Kłótnie i przymus",
      us: "System nagród jak w grze"
    },
    {
      feature: "Postępy",
      others: "Nie wiesz co się dzieje",
      us: "Stały dostęp rodziców do kursu"
    },
    {
      feature: "Dostępność",
      others: "Trzeba jeździć/czekać",
      us: "24/7 z każdego miejsca"
    },
    {
      feature: "Gwarancja",
      others: "Żadnej gwarancji",
      us: "30 dni zwrotu pieniędzy"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-paulina-bg-purple">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-paulina-primary mb-4">
            Dlaczego <span className="text-paulina-accent">ponad 20 000 rodziców</span> wybrało właśnie mnie?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Porównaj sam i zobacz, dlaczego tradycyjne metody <span className="font-bold">nie działają</span>,
            a mój system <span className="font-bold text-paulina-accent">gwarantuje sukces</span>
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-3 bg-gray-50 font-bold text-center">
            <div className="p-4 text-gray-600">Co porównujemy?</div>
            <div className="p-4 bg-red-50 text-red-600 border-x border-gray-200">
              ❌ Korepetycje / Inne kursy
            </div>
            <div className="p-4 bg-green-50 text-paulina-primary">
              ✅ Kurs Pauliny (LAPS)
            </div>
          </div>
          
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-3 border-t border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="p-4 font-semibold text-gray-700">
                {item.feature}
              </div>
              <div className="p-4 text-center text-gray-500 border-x border-gray-200">
                <X className="inline-block text-red-500 mb-1" size={16} />
                <span className="block text-sm">{item.others}</span>
              </div>
              <div className="p-4 text-center text-gray-700 font-semibold">
                <CheckCircle className="inline-block text-paulina-accent mb-1" size={16} />
                <span className="block text-sm">{item.us}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique Value Proposition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-paulina-primary to-paulina-accent text-white rounded-2xl p-8 text-center"
        >
          <AlertTriangle className="mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold mb-4">
            To NIE jest kolejny kurs online!
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            To kompletny <span className="font-bold">SYSTEM TRANSFORMACJI</span>, który zamienia 
            dziecko przerażone matematyką w pewnego siebie ucznia z wynikiem 80%+
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <h4 className="font-bold mb-2">🧠 Metoda LAPS</h4>
              <p className="text-sm">
                Jedyna metoda oparta na neurobiologii, która gwarantuje zapamiętywanie 95% materiału
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <h4 className="font-bold mb-2">🎮 Gamifikacja</h4>
              <p className="text-sm">
                System nagród jak w grze - dziecko CHCE się uczyć, nie musisz go zmuszać
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <h4 className="font-bold mb-2">📊 Sprawdzone wyniki</h4>
              <p className="text-sm">
                Ponad 95% kursantów zdało ze świetnym wynikiem w przeszłości.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
