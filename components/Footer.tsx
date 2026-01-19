'use client'

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paulina-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4">
          © 2026 Paulina od Matematyki. Wszelkie prawa zastrzeżone.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="https://skutecznekorepetycje.com/regulamin" className="hover:text-paulina-accent transition-colors" target="_blank" rel="noopener noreferrer">
            Regulamin
          </a>
          <a href="https://skutecznekorepetycje.com/polityka-prywatnosci" className="hover:text-paulina-accent transition-colors" target="_blank" rel="noopener noreferrer">
            Polityka prywatności
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
