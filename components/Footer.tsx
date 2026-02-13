'use client'

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paulina-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Paulina od Matematyki. Wszystkie prawa zastrzeżone.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="https://paulinaodmatematyki.com/regulamin" className="hover:text-paulina-accent transition-colors" target="_blank" rel="noopener noreferrer">
            Regulamin
          </a>
          <a href="https://paulinaodmatematyki.com/polityka-prywatnosci" className="hover:text-paulina-accent transition-colors" target="_blank" rel="noopener noreferrer">
            Polityka prywatności
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
