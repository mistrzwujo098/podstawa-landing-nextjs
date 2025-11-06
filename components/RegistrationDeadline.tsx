'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RegistrationDeadline: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-02T22:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    return () => clearInterval(timer);
  }, []);

  // Don't show if deadline has passed
  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-red-600 to-red-700 border-b-4 border-red-800 shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Warning message */}
        <div className="bg-yellow-400 text-black font-bold text-center py-2 px-4 rounded-lg mb-3 text-sm sm:text-base">
          ⚠️ ZAMKNIĘTA DOGRYWKA - NIE WYSYŁAJ TEJ STRONY NIKOMU! ⚠️
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-3xl"
            >
              ⏰
            </motion.span>
            <span className="text-white font-bold text-lg sm:text-xl uppercase tracking-wide">
              🔒 ZAMKNIĘTA DOGRYWKA - KONIEC 2.10 O 22:00! 🔒
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <div className="flex flex-col items-center bg-white px-3 py-2 rounded-lg shadow-xl border-2 border-red-300">
              <span className="text-3xl sm:text-4xl font-black text-red-600">{timeLeft.days}</span>
              <span className="text-xs font-semibold text-red-800 uppercase">dni</span>
            </div>
            <span className="text-white text-2xl font-bold">:</span>
            <div className="flex flex-col items-center bg-white px-3 py-2 rounded-lg shadow-xl border-2 border-red-300">
              <span className="text-3xl sm:text-4xl font-black text-red-600">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-xs font-semibold text-red-800 uppercase">godz</span>
            </div>
            <span className="text-white text-2xl font-bold">:</span>
            <div className="flex flex-col items-center bg-white px-3 py-2 rounded-lg shadow-xl border-2 border-red-300">
              <span className="text-3xl sm:text-4xl font-black text-red-600">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-xs font-semibold text-red-800 uppercase">min</span>
            </div>
            <span className="text-white text-2xl font-bold">:</span>
            <div className="flex flex-col items-center bg-white px-3 py-2 rounded-lg shadow-xl border-2 border-red-300">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-3xl sm:text-4xl font-black text-red-600"
              >
                {String(timeLeft.seconds).padStart(2, '0')}
              </motion.span>
              <span className="text-xs font-semibold text-red-800 uppercase">sek</span>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-2"
        >
          <span className="text-yellow-300 font-semibold text-sm sm:text-base animate-pulse">
            ⚡ Dogrywka tylko dla osób z listy mailowej! ⚡
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RegistrationDeadline;
