'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Clock, Award, Users, Star, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const [spotsLeft, setSpotsLeft] = useState(7);
  
  // Countdown to exam date
  useEffect(() => {
    const examDate = new Date('2026-05-12'); // Actual exam date
    const timer = setInterval(() => {
      const now = new Date();
      const difference = examDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft({ days, hours, minutes });
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      {/* Urgency Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white py-2 px-4 text-center z-20"
      >
        <div className="flex items-center justify-center gap-3 text-sm md:text-base">
          <Clock className="animate-pulse" size={16} />
          <span className="font-bold">
            Do egzaminu zostało: {timeLeft.days} dni {timeLeft.hours}h {timeLeft.minutes}min
          </span>
          <span className="hidden md:inline">• Pozostało tylko {spotsLeft} miejsc w grupie</span>
        </div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto mt-8 px-4">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6"
        >
          <Shield size={16} />
          <span className="text-sm font-semibold">Program zatwierdzony zgodny z wytycznymi CKE 2026</span>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            {/* Parent-focused headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Pomóż swojemu dziecku{' '}
              <span className="relative">
                <span className="text-paulina-accent">zdać egzamin</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-3 bg-yellow-200 opacity-40 -z-10"
                />
              </span>{' '}
              bez stresu, łez i drogich korepetycji
            </h1>
          
          {/* Parent pain point */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6"
          >
            <div className="flex items-start gap-2">
              <AlertCircle className="text-yellow-600 mt-1" size={20} />
              <div>
                <p className="text-gray-800 font-semibold">
                  Większość rodziców nie potrafi pomóc dziecku z matematyką w 8 klasie
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Nie jesteś sam/a - dlatego stworzyłam ten program
                </p>
              </div>
            </div>
          </motion.div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Sprawdzony system <span className="font-bold text-paulina-primary">20 000+ uczniów</span>, który
            zamienia matematykę w przygodę, którą Twoje dziecko{' '}
            <span className="underline decoration-paulina-accent decoration-2">naprawdę zrozumie</span>.
          </p>
          
          {/* Dual CTA for different parent mindsets */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.button
              onClick={scrollToPricing}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-paulina-accent to-paulina-orange text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 group"
            >
              <span>Zarezerwuj miejsce teraz</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-xl"
              >
                →
              </motion.span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-white border-2 border-paulina-primary text-paulina-primary font-semibold py-4 px-6 rounded-full text-base hover:bg-paulina-bg-purple transition-all duration-300"
            >
              Zobacz darmową lekcję próbną
            </motion.button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="text-green-500" size={20} />
              <span>30 dni gwarancji</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-blue-500" size={20} />
              <span>20 000+ uczniów</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <span>4.9/5 ocena</span>
            </div>
          </div>
          
          {/* Parent-focused benefits */}
          <div className="mt-8 space-y-3 bg-white/50 backdrop-blur-sm rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Co zyskujesz jako rodzic:</h3>
            {[
              'Koniec z płaczem nad matematyką i konfliktami o naukę',
              'Spokój, że dziecko jest dobrze przygotowane',
              'Oszczędność 3000+ zł na korepetycjach',
              'Codzienne raporty postępów dziecka',
              'Wsparcie psychologa dla rodziców (5 spotkań)'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img 
            src="https://paulinaodmatematyki.com/wp-content/uploads/2025/06/hero-1.webp"
            alt="Paulina od Matematyki"
            className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
          />
          
          {/* Success metric card */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="text-green-500" size={24} />
              <div>
                <p className="text-2xl font-bold text-gray-900">84%</p>
                <p className="text-xs text-gray-600">Średni wynik</p>
              </div>
            </div>
          </motion.div>
          
          {/* Parent testimonial overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg p-4 w-full max-w-sm"
          >
            <div className="flex items-start gap-3">
              <img
                src="https://i.pravatar.cc/48?img=5"
                alt="Rodzic"
                className="rounded-full w-12 h-12"
              />
              <div className="flex-1">
                <p className="text-sm text-gray-700 italic">
                  "Córka podeszła do egzaminu z uśmiechem. Wynik 92%!"
                </p>
                <p className="text-xs text-gray-500 mt-1">Anna K., mama Zosi</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
