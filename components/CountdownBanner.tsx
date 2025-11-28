'use client'

import React, { useState, useEffect } from 'react';
import { Clock, Gift, X } from 'lucide-react';

const CountdownBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(true);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const deadline = new Date('2025-11-30T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!isVisible || isExpired) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-paulina-primary via-paulina-purple to-paulina-accent text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Icon and message */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Gift className="hidden sm:block" size={24} />
            <span className="font-bold text-sm sm:text-base">BLACK FRIDAY 2025</span>
          </div>

          {/* Center - Countdown */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Clock className="hidden sm:block" size={20} />
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="flex flex-col items-center bg-white/20 rounded px-1.5 py-0.5 sm:px-2 sm:py-1 min-w-[32px] sm:min-w-[40px]">
                <span className="text-xs sm:text-sm font-bold leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-[10px] uppercase opacity-80 leading-none">dni</span>
              </div>
              <span className="text-xs sm:text-sm">:</span>
              <div className="flex flex-col items-center bg-white/20 rounded px-1.5 py-0.5 sm:px-2 sm:py-1 min-w-[32px] sm:min-w-[40px]">
                <span className="text-xs sm:text-sm font-bold leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-[10px] uppercase opacity-80 leading-none">godz</span>
              </div>
              <span className="text-xs sm:text-sm">:</span>
              <div className="flex flex-col items-center bg-white/20 rounded px-1.5 py-0.5 sm:px-2 sm:py-1 min-w-[32px] sm:min-w-[40px]">
                <span className="text-xs sm:text-sm font-bold leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-[10px] uppercase opacity-80 leading-none">min</span>
              </div>
              <span className="text-xs sm:text-sm hidden sm:inline">:</span>
              <div className="hidden sm:flex flex-col items-center bg-white/20 rounded px-2 py-1 min-w-[40px]">
                <span className="text-sm font-bold leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[10px] uppercase opacity-80 leading-none">sek</span>
              </div>
            </div>
          </div>

          {/* Right side - CTA and close button */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollToPricing}
              className="hidden sm:inline-block bg-white text-paulina-primary font-bold text-sm px-4 py-1.5 rounded-full hover:bg-paulina-accent hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Zobacz ofertę
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Zamknij banner"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-2">
          <button
            onClick={scrollToPricing}
            className="w-full bg-white text-paulina-primary font-bold text-sm py-2 rounded-full hover:bg-paulina-accent hover:text-white transition-all duration-300"
          >
            Zobacz ofertę Black Friday
          </button>
        </div>
      </div>

      {/* Spacer to prevent content jump when banner is hidden */}
      <style jsx>{`
        body {
          padding-top: var(--banner-height, 0);
        }
      `}</style>
    </div>
  );
};

export default CountdownBanner;
