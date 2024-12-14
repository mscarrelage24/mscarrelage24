'use client';
import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const FloatingPhoneButton = () => {
  const [isNumberVisible, setIsNumberVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12 flex items-center gap-3 z-50">
      {isNumberVisible && (
        <a
          href="tel:0753673439"
          className="bg-black backdrop-blur-sm text-slate-100 text-lg lg:text-xl px-4 py-2 rounded-full shadow-xl animate-in fade-in duration-300"
        >
          07 53 67 34 39
        </a>
      )}

      <div className="relative">
        <div className="absolute inset-0 h-full w-full rounded-full animate-ping bg-blue-4 opacity-75" />
        <button
          onClick={() => setIsNumberVisible(!isNumberVisible)}
          className="relative bg-blue-4 hover:bg-blue-3 text-slate-100 p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
          aria-label="Afficher le numéro de téléphone"
        >
          <Phone className="h-6 w-6 lg:h-8 lg:w-8" />
        </button>
      </div>
    </div>
  );
};

export default FloatingPhoneButton;
