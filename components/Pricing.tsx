'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Star, TrendingUp, Gift, Lock, CheckCircle, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const Pricing: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(1); // Default to Premium
  const [showComparison, setShowComparison] = useState(false);
  const [discount, setDiscount] = useState(0);
  
  // Calculate savings
  const tutorCost = 150 * 4 * 6; // 150zł/h, 4h/month, 6 months = 3600 zł
  
  useEffect(() => {
    // Apply time-based discount
    const hour = new Date().getHours();
    if (hour >= 20 && hour <= 23) {
      setDiscount(10); // Evening discount
    } else if (hour >= 6 && hour <= 9) {
      setDiscount(15); // Morning discount
    }
  }, []);
  
  const handlePurchase = (packageIndex: number) => {
    setSelectedPackage(packageIndex);
    // Celebrate selection
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#571A47', '#EC9A4F']
    });
    // Scroll to payment
    const element = document.getElementById('payment-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const packages = [
    {
      name: 'Podstawowy',
      originalPrice: 1497,
      price: 999,
      savings: 498,
      popular: false,
      recommended: false,
      spots: 15,
      features: [
        { name: 'Ponad 50h materiału video', included: true },
        { name: '>60 lekcji video', included: true },
        { name: '>1500 zadań z rozwiązaniami', included: true },
        { name: 'Ściągi z działów', included: true },
        { name: 'Rozwiązane zadania ze wszystkich egzaminów CKE', included: true },
        { name: 'Nagroda + certyfikat za 100%', included: true },
        { name: 'Ebook ze wzorami do egzaminu', included: true },
        { name: 'Pakiet 5 nagrań z psychologiem', included: true },
        { name: '3 Masterclass (stres, motywacja, planowanie)', included: true },
        { name: 'Aplikacja iOS/Android', included: true },
        { name: '6 próbnych arkuszy egzaminacyjnych', included: true },
        { name: '6 spotkań online z rozwiązywaniem', included: true },
        { name: 'Nagrania wszystkich spotkań', included: true },
        { name: 'Dostęp na 12 miesięcy', included: true },
        { name: 'Gwarancja satysfakcji 30 dni', included: true },
        { name: 'Dostęp na 24 miesiące', included: false },
        { name: 'Kurs 10 pewniaków', included: false },
        { name: '10 autorskich arkuszy z rozwiązaniami', included: false },
        { name: 'Wielka Powtórka Mistrzów', included: false },
        { name: 'Ebook z ubiegłorocznymi zadaniami', included: false },
        { name: 'Nagrania 30 lekcji z ubiegłego roku', included: false },
        { name: 'Konsultacja indywidualna 45 min', included: false },
        { name: 'Analiza 3 egzaminów z wskazówkami', included: false },
      ]
    },
    {
      name: 'Optymalny',
      originalPrice: 2297,
      price: 1499,
      savings: 798,
      popular: true,
      recommended: true,
      spots: 7,
      bestValue: true,
      features: [
        { name: 'Ponad 50h materiału video', included: true },
        { name: '>60 lekcji video', included: true },
        { name: '>1500 zadań z rozwiązaniami', included: true },
        { name: 'Ściągi z działów', included: true },
        { name: 'Rozwiązane zadania ze wszystkich egzaminów CKE', included: true },
        { name: 'Nagroda + certyfikat za 100%', included: true },
        { name: 'Ebook ze wzorami do egzaminu', included: true },
        { name: 'Pakiet 5 nagrań z psychologiem', included: true },
        { name: '3 Masterclass (stres, motywacja, planowanie)', included: true },
        { name: 'Aplikacja iOS/Android', included: true },
        { name: '6 próbnych arkuszy egzaminacyjnych', included: true },
        { name: '6 spotkań online z rozwiązywaniem', included: true },
        { name: 'Nagrania wszystkich spotkań', included: true },
        { name: 'Dostęp na 12 miesięcy', included: true },
        { name: 'Gwarancja satysfakcji 30 dni', included: true },
        { name: 'Dostęp na 24 miesiące', included: true },
        { name: 'Kurs 10 pewniaków', included: true },
        { name: '10 autorskich arkuszy z rozwiązaniami', included: true },
        { name: 'Wielka Powtórka Mistrzów', included: true },
        { name: 'Ebook z ubiegłorocznymi zadaniami', included: true },
        { name: 'Nagrania 30 lekcji z ubiegłego roku', included: false },
        { name: 'Konsultacja indywidualna 45 min', included: false },
        { name: 'Analiza 3 egzaminów z wskazówkami', included: false },
      ]
    },
    {
      name: 'Premium',
      originalPrice: 3497,
      price: 2499,
      savings: 998,
      popular: false,
      recommended: false,
      spots: 3,
      exclusive: true,
      features: [
        { name: 'Ponad 50h materiału video', included: true },
        { name: '>60 lekcji video', included: true },
        { name: '>1500 zadań z rozwiązaniami', included: true },
        { name: 'Ściągi z działów', included: true },
        { name: 'Rozwiązane zadania ze wszystkich egzaminów CKE', included: true },
        { name: 'Nagroda + certyfikat za 100%', included: true },
        { name: 'Ebook ze wzorami do egzaminu', included: true },
        { name: 'Pakiet 5 nagrań z psychologiem', included: true },
        { name: '3 Masterclass (stres, motywacja, planowanie)', included: true },
        { name: 'Aplikacja iOS/Android', included: true },
        { name: '6 próbnych arkuszy egzaminacyjnych', included: true },
        { name: '6 spotkań online z rozwiązywaniem', included: true },
        { name: 'Nagrania wszystkich spotkań', included: true },
        { name: 'Dostęp na 12 miesięcy', included: true },
        { name: 'Gwarancja satysfakcji 30 dni', included: true },
        { name: 'Dostęp na 24 miesiące', included: true },
        { name: 'Kurs 10 pewniaków', included: true },
        { name: '10 autorskich arkuszy z rozwiązaniami', included: true },
        { name: 'Wielka Powtórka Mistrzów', included: true },
        { name: 'Ebook z ubiegłorocznymi zadaniami', included: true },
        { name: 'Nagrania 30 lekcji z ubiegłego roku', included: true },
        { name: 'Konsultacja indywidualna 45 min', included: true },
        { name: 'Analiza 3 egzaminów z wskazówkami', included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-paulina-bg-purple via-white to-paulina-bg-yellow relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-paulina-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-paulina-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Savings Calculator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-green-50 border border-green-200 rounded-xl p-6 mb-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            💰 Zaoszczędź {tutorCost} zł na korepetycjach!
          </h3>
          <p className="text-gray-700">
            Średni koszt korepetycji to 150 zł/h × 4h/miesiąc × 6 miesięcy = <span className="font-bold line-through text-red-500">{tutorCost} zł</span>
          </p>
          <p className="text-green-600 font-bold mt-2">
            Mój kurs to tylko {packages[1].price} zł - oszczędzasz {tutorCost - packages[1].price} zł!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wybierz najlepszy pakiet dla swojego dziecka
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            <span className="text-paulina-accent font-bold">98% rodziców</span> wybiera pakiet Optymalny
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Shield className="text-green-500" size={20} />
              <span className="text-sm font-semibold">30 dni gwarancji</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Lock className="text-blue-500" size={20} />
              <span className="text-sm font-semibold">Bezpieczna płatność</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Star className="text-yellow-500" size={20} />
              <span className="text-sm font-semibold">4.9/5 ocena</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all ${
                pkg.popular ? 'ring-4 ring-paulina-accent scale-105' : ''
              } ${selectedPackage === index ? 'ring-4 ring-green-500' : ''}`}
            >
              {/* Badges */}
              {pkg.popular && (
                <div className="absolute -top-1 left-0 right-0 bg-gradient-to-r from-paulina-accent to-paulina-orange text-white py-2 text-center font-bold text-xs z-10 whitespace-nowrap">
                  🔥 NAJCZĘŚCIEJ WYBIERANY
                </div>
              )}
              {pkg.bestValue && (
                <div className="absolute top-10 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  NAJLEPSZA WARTOŚĆ
                </div>
              )}
              {pkg.exclusive && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg">
                  VIP
                </div>
              )}
              
              {/* Spots left indicator */}
              {pkg.spots && pkg.spots < 10 && (
                <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 rounded-br-lg text-xs font-bold">
                  Zostało {pkg.spots} miejsc!
                </div>
              )}
              
              <div className={`p-8 ${pkg.popular ? 'pt-16' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                
                {/* Price with discount */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl text-gray-400 line-through">{pkg.originalPrice} zł</span>
                    <span className="text-4xl font-bold text-paulina-primary">{pkg.price} zł</span>
                  </div>
                  <p className="text-green-600 font-bold mt-1">
                    Oszczędzasz {pkg.savings} zł!
                  </p>
                  {discount > 0 && (
                    <p className="text-red-500 text-sm mt-2 animate-pulse">
                      + Dodatkowe {discount}% zniżki dzisiaj!
                    </p>
                  )}
                </div>
                
                {/* Payment options */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-600 mb-1">Możesz płacić:</p>
                  <p className="font-semibold text-gray-900">
                    Jednorazowo lub 5 × {Math.round(pkg.price / 5)} zł
                  </p>
                  <p className="text-xs text-gray-500">Raty 0% bez dodatkowych opłat</p>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePurchase(index)}
                  className={`w-full font-bold py-4 px-6 rounded-full transition-all duration-300 mb-6 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-paulina-accent to-paulina-orange text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-paulina-accent hover:text-white'
                  }`}
                >
                  {pkg.popular ? '🎯 Wybieram ten pakiet' : 'Wybierz pakiet'}
                </motion.button>
                
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {pkg.features.slice(0, 15).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className={feature.included ? 'text-green-500' : 'text-gray-300'}>
                        {feature.included ? '✓' : '✗'}
                      </span>
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Porównanie pakietów</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Zawartość pakietu</th>
                  <th className="text-center p-3">Standard<br/><span className="text-sm font-normal">999 zł</span></th>
                  <th className="text-center p-3 bg-paulina-bg-purple">Premium<br/><span className="text-sm font-normal">1499 zł</span></th>
                  <th className="text-center p-3">Expert<br/><span className="text-sm font-normal">2499 zł</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Ponad 50h materiału video</td>
                  <td className="text-center">✓</td>
                  <td className="text-center bg-paulina-bg-purple">✓</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Ponad 1500 zadań z rozwiązaniami</td>
                  <td className="text-center">✓</td>
                  <td className="text-center bg-paulina-bg-purple">✓</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Aplikacja iOS/Android</td>
                  <td className="text-center">✓</td>
                  <td className="text-center bg-paulina-bg-purple">✓</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Dostęp na 12 miesięcy</td>
                  <td className="text-center">✓</td>
                  <td className="text-center bg-paulina-bg-purple">✓</td>
                  <td className="text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Dostęp na 24 miesiące</td>
                  <td className="text-center text-gray-400">✗</td>
                  <td className="text-center bg-paulina-bg-purple text-green-600 font-bold">✓</td>
                  <td className="text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Kurs 10 pewniaków</td>
                  <td className="text-center text-gray-400">✗</td>
                  <td className="text-center bg-paulina-bg-purple text-green-600 font-bold">✓</td>
                  <td className="text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">10 autorskich arkuszy</td>
                  <td className="text-center text-gray-400">✗</td>
                  <td className="text-center bg-paulina-bg-purple text-green-600 font-bold">✓</td>
                  <td className="text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Konsultacja indywidualna 45 min</td>
                  <td className="text-center text-gray-400">✗</td>
                  <td className="text-center bg-paulina-bg-purple text-gray-400">✗</td>
                  <td className="text-center text-green-600 font-bold">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Guarantee Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-lg p-6 shadow-md">
            <span className="text-2xl mb-2 block">✓</span>
            <h4 className="font-bold mb-2">Gwarancja 30 dni</h4>
            <p className="text-gray-600">Zwrot bez pytań</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <span className="text-2xl mb-2 block">📈</span>
            <h4 className="font-bold mb-2">20 000+ uczniów</h4>
            <p className="text-gray-600">Dołącz do najlepszych</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <span className="text-2xl mb-2 block">⭐</span>
            <h4 className="font-bold mb-2">4.9/5 gwiazdek</h4>
            <p className="text-gray-600">Średnia ocen</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
