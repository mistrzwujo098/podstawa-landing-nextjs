'use client'

import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-paulina-bg-purple py-2 px-4 text-center border-b border-gray-200">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base">
        <span className="flex items-center gap-2">
          <span className="text-paulina-primary font-semibold">✓</span>
          <span>Raty 0%</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="text-paulina-primary font-semibold">✓</span>
          <span>30-dniowa gwarancja</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="text-paulina-primary font-semibold">✓</span>
          <span>20 000 kursantów</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="text-paulina-primary font-semibold">✓</span>
          <span>Średni wynik: 84%</span>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
