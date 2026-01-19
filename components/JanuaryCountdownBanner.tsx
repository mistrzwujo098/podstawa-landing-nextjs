'use client'

import React, { useState, useEffect } from 'react';
import { X, Clock } from 'lucide-react';

const JanuaryCountdownBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const endDate = new Date('2026-01-31T23:59:59');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible || !isMounted) return null;

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/20 rounded-lg px-2 sm:px-3 py-1 min-w-[40px] sm:min-w-[50px]">
        <span className="text-lg sm:text-2xl font-bold text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-white/80 mt-1">{label}</span>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-paulina-primary via-purple-600 to-paulina-accent shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Left side - Icon and Text */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Clock className="text-white hidden sm:block" size={20} />
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">
              Oferta Noworoczna 2026
            </span>
          </div>

          {/* Center - Countdown */}
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-white/90 text-xs sm:text-sm hidden md:inline">kończy się za:</span>
            <div className="flex items-center gap-1 sm:gap-2">
              <TimeBlock value={timeLeft.days} label="dni" />
              <span className="text-white text-lg sm:text-xl font-bold">:</span>
              <TimeBlock value={timeLeft.hours} label="godz" />
              <span className="text-white text-lg sm:text-xl font-bold">:</span>
              <TimeBlock value={timeLeft.minutes} label="min" />
              <span className="text-white text-lg sm:text-xl font-bold hidden sm:inline">:</span>
              <div className="hidden sm:block">
                <TimeBlock value={timeLeft.seconds} label="sek" />
              </div>
            </div>
          </div>

          {/* Right side - Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Zamknij banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JanuaryCountdownBanner;
