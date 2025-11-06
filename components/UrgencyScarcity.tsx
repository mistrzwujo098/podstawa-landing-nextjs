'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, AlertTriangle, Calendar, TrendingUp, BookOpen } from 'lucide-react';

const UrgencyScarcity: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [spotsLeft, setSpotsLeft] = useState(7);
  const [viewersNow, setViewersNow] = useState(23);
  
  // Countdown to registration deadline
  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 3); // 3 days from now
    deadline.setHours(23, 59, 59);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Simulate viewer activity
  useEffect(() => {
    const interval = setInterval(() => {
      setViewersNow(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.max(15, Math.min(35, newValue));
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Simulate spots being taken
  useEffect(() => {
    const timer = setTimeout(() => {
      if (spotsLeft > 3) {
        setSpotsLeft(prev => prev - 1);
      }
    }, 30000); // Every 30 seconds
    
    return () => clearTimeout(timer);
  }, [spotsLeft]);

  const examDate = new Date('2026-05-12');
  const today = new Date();
  const daysToExam = Math.floor((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-6">
      {/* Sticky urgency bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-3 px-4 z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
          {/* Countdown Timer */}
          <div className="flex items-center gap-2">
            <Clock className="animate-pulse" size={18} />
            <span className="font-bold">
              Rejestracja kończy się za:{' '}
              <span className="inline-flex gap-1">
                <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.days).padStart(2, '0')}d</span>
                <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.hours).padStart(2, '0')}h</span>
                <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, '0')}m</span>
                <span className="bg-white/20 px-2 py-1 rounded animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </span>
            </span>
          </div>
          
          {/* Spots left */}
          <div className="flex items-center gap-2">
            <Users size={18} />
            <span>
              Pozostało tylko <span className="font-bold text-yellow-300">{spotsLeft} miejsc</span>
            </span>
          </div>
          
          {/* Live viewers */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm">
              {viewersNow} rodziców ogląda teraz
            </span>
          </div>
        </div>
      </motion.div>

      {/* Educational Timeline Urgency */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 mt-20"
      >
        <div className="flex items-start gap-4">
          <Calendar className="text-orange-500 flex-shrink-0 mt-1" size={24} />
          <div className="flex-1">
            <h3 className="font-bold text-xl text-red-600 mb-2">
              ⚠️ CZY WIESZ, ŻE...
            </h3>
            <p className="text-gray-700 mb-3">
              <span className="font-bold">Uczniowie, którzy zaczynają naukę później</span>, często nie zdążą przerobicć całego materiału.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm text-gray-600">Do egzaminu</p>
                <p className="text-xl font-bold text-red-600">{daysToExam} dni</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm text-gray-600">Próbny egzamin CKE</p>
                <p className="text-xl font-bold text-orange-600">Marzec 2026</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm text-gray-600">Start przygotowań</p>
                <p className="text-xl font-bold text-green-600">TERAZ!</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border-2 border-red-300">
              <p className="font-bold text-gray-900 mb-2">📈 WAŻNE TERMINY:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <span className="font-bold text-green-600">Styczeń</span> - idealny czas na start przygotowań</li>
                <li>• <span className="font-bold text-yellow-600">Luty</span> - ostatni moment na spokojną naukę</li>
                <li>• <span className="font-bold text-red-600">Marzec</span> - egzamin próbny CKE!</li>
              </ul>
              <p className="mt-3 font-bold text-paulina-primary">
                Im wcześniej zaczniesz, tym lepszy wynik!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Proof Urgency */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-blue-50 rounded-xl p-6 border border-blue-200"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-blue-600" size={24} />
            <div>
              <p className="font-bold text-gray-900">W ostatnich 24h:</p>
              <p className="text-gray-700">
                <span className="font-bold text-blue-600">47 rodziców</span> zapisało swoje dzieci
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Ostatni zapis:</p>
            <p className="font-semibold text-gray-900">Anna K. z Warszawy</p>
            <p className="text-xs text-gray-500">12 minut temu</p>
          </div>
        </div>
      </motion.div>

      {/* Warning Message */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-red-50 rounded-xl p-6 border border-red-200"
      >
        <div className="flex items-start gap-4">
          <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-red-900 mb-2">
              Uwaga: Grupa może się zapełnić w każdej chwili!
            </h4>
            <p className="text-red-700 mb-3">
              Ze względu na indywidualne podejście do każdego ucznia, przyjmujemy maksymalnie 
              <strong> 50 uczniów</strong> w każdej turze. Po zapełnieniu grupy rejestracja zostanie 
              zamknięta do następnego miesiąca.
            </p>
            <div className="bg-white rounded-lg p-3 inline-block">
              <p className="text-sm text-gray-600">Stan grupy:</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-48 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: `${((50 - spotsLeft) / 50) * 100}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                  />
                </div>
                <span className="text-sm font-bold text-gray-900">
                  {50 - spotsLeft}/50 zajęte
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bonus Deadline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 opacity-10">
          <BookOpen size={120} />
        </div>
        <div className="relative z-10">
          <h4 className="font-bold text-xl mb-3">
            🎁 Bonus tylko dla pierwszych 10 zapisów!
          </h4>
          <p className="mb-4">
            Zapisz się dzisiaj i otrzymaj <strong>GRATIS</strong>:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2">
              <span className="text-yellow-300">✓</span>
              <span>Ebook "100 najważniejszych wzorów" (wartość 97 zł)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-300">✓</span>
              <span>Konsultacja 1:1 z Pauliną (wartość 200 zł)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-300">✓</span>
              <span>Dostęp do grupy VIP na Facebooku</span>
            </li>
          </ul>
          <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
            <p className="font-bold">
              Pozostało bonusów: {Math.max(0, 10 - (50 - spotsLeft))}/10
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UrgencyScarcity;
