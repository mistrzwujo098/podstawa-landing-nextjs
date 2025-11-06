'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Star, CheckCircle, ChevronRight } from 'lucide-react';
import { tracking } from '@/lib/tracking';

const PricingSimple: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(1); // Default to Optymalny
  
  const packages = [
    {
      name: 'Standard',
      price: 999,
      originalPrice: 1497,
      popular: false,
      features: [
        'Ponad 50h materiału video',
        '>60 lekcji video HD',
        '>1500 zadań z rozwiązaniami',
        '9 próbnych arkuszy egzaminacyjnych',
        '9 spotkań online z rozwiązywaniem',
        '30 x 90-minutowych spotkań na żywo',
        'Dostęp na 12 miesięcy',
        'Gwarancja satysfakcji 30 dni',
      ],
      notIncluded: [
        'Konsultacje indywidualne',
        'Dostęp na 24 miesiące',
      ]
    },
    {
      name: 'Premium',
      price: 1499,
      originalPrice: 2297,
      popular: true,
      features: [
        'Wszystko z pakietu Standard',
        '10 autorskich arkuszy z rozwiązaniami',
        'Kurs "10 pewniaków na egzamin"',
        'Wielka Powtórka Mistrzów',
        '30 x 90-minutowych spotkań na żywo',
        'Dostęp na 24 miesiące',
        'Ebook z ubiegłorocznymi zadaniami',
      ],
      notIncluded: [
        'Konsultacje indywidualne',
      ]
    },
    {
      name: 'Expert',
      price: 2499,
      originalPrice: 3497,
      popular: false,
      features: [
        'Wszystko z pakietu Premium',
        'Konsultacja indywidualna 45 min',
        'Analiza 3 egzaminów z wskazówkami',
        'Nagrania 30 lekcji z ubiegłego roku',
        '30 x 90-minutowych spotkań na żywo',
        'Priorytetowe wsparcie',
        'Dostęp na 24 miesiące',
      ],
      notIncluded: []
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-paulina-bg-yellow">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-paulina-primary mb-4">
            Wybierz pakiet dla swojego dziecka
          </h2>
          <p className="text-lg text-gray-600">
            <span className="text-paulina-accent font-bold">98% rodziców</span> wybiera pakiet Optymalny
          </p>
          
          {/* Trust badges */}
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Shield className="text-paulina-primary" size={20} />
              <span className="text-sm font-semibold">30 dni gwarancji</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="text-paulina-primary" size={20} />
              <span className="text-sm font-semibold">Bezpieczna płatność</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-paulina-accent fill-current" size={20} />
              <span className="text-sm font-semibold">4.9/5 ocena</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 px-4 md:px-0">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-paulina-accent transform scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-paulina-accent text-white px-8 py-2 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                    NAJCZĘŚCIEJ WYBIERANY
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-paulina-primary mb-2">{pkg.name}</h3>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-gray-400 line-through text-lg">{pkg.originalPrice} zł</span>
                  <div className="text-3xl font-bold text-paulina-primary">
                    {pkg.price} zł
                  </div>
                  <p className="text-sm text-paulina-accent font-semibold">
                    Oszczędzasz {pkg.originalPrice - pkg.price} zł
                  </p>
                </div>
                
                {/* Payment options */}
                <p className="text-xs text-gray-600">
                  lub <span className="font-bold">{Math.round(pkg.price / 5)} zł/mies.</span> (5 rat 0%)
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="text-paulina-accent flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
                {pkg.notIncluded.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 opacity-50">
                    <span className="text-gray-300 flex-shrink-0 mt-0.5">✗</span>
                    <span className="text-sm text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  // Track checkout initiation
                  tracking.initiateCheckout(pkg.price, `Pakiet ${pkg.name}`)

                  const urls = [
                    'https://kurs.skutecznekorepetycje.com/zamowienie/?add-to-cart=195091&price-id=1',
                    'https://kurs.skutecznekorepetycje.com/zamowienie/?add-to-cart=195826',
                    'https://kurs.skutecznekorepetycje.com/zamowienie/?add-to-cart=195828'
                  ];

                  // Małe opóźnienie dla trackingu
                  setTimeout(() => {
                    window.location.href = urls[index];
                  }, 300);
                }}
                className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-paulina-accent text-white hover:bg-paulina-primary' 
                    : 'bg-gray-100 text-paulina-primary hover:bg-paulina-accent hover:text-white'
                }`}
              >
                {pkg.popular ? 'Wybieram ten pakiet' : 'Wybierz pakiet'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-paulina-primary mb-4">
              💰 Zaoszczędź 3600 zł na korepetycjach
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-gray-700">
                <span>👨‍🏫 Korepetycje (6 mies. x 4h x 150zł):</span>
                <span className="font-bold line-through text-red-500">3600 zł</span>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <span>🎓 Mój kurs (dostęp 24 mies.):</span>
                <span className="font-bold text-paulina-primary">{packages[1].price} zł</span>
              </div>
              <div className="border-t pt-3 flex items-center justify-between">
                <span className="font-bold text-lg">Twoja oszczędność:</span>
                <span className="font-bold text-2xl text-paulina-accent">{3600 - packages[1].price} zł!</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-paulina-accent text-white font-bold rounded-full shadow-xl hover:bg-paulina-primary hover:shadow-2xl transition-all duration-300"
            >
              <span>Zapisz dziecko teraz</span>
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSimple;
