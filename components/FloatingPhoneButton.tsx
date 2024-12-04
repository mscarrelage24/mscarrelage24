'use client';
import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const FloatingPhoneButton = () => {
  const [isNumberVisible, setIsNumberVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-3 z-50">
      {isNumberVisible && (
        <a
          href="tel:0753673439"
          className="bg-slate-200 backdrop-blur-sm text-black px-4 py-2 rounded-full shadow-lg animate-in fade-in duration-300"
        >
          07 53 67 34 39
        </a>
      )}
      <button
        onClick={() => setIsNumberVisible(!isNumberVisible)}
        className="bg-blue-4 lg:hover:bg-amber-4 text-slate-100 p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Afficher le numéro de téléphone"
      >
        <Phone className="h-6 w-6" />
      </button>
    </div>
  );
};

export default FloatingPhoneButton;
