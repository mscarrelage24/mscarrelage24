import React from 'react';
import Button from '../ui/Button';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className="min-w-full min-h-dvh h-full flex-col-center lg:flex-row lg:justify-around bg-cover bg-bottom bg-[url('/hero-mob.jpg')] md:bg-[url('/hero.jpg')] sm:px-8 lg:px-0">
      <div className="bg-black/80 md:bg-black/90 p-6 lg:p-8 rounded-lg flex-col-center max-w-3xl space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 bg-opacity-50 md:h-[52px] ">
          MS Carrelage 24
        </h1>
        <p className="text-white text-sm inline-flex border border-[#f5f5f5]/20 px-3 py-1 rounded-lg tracking-tight my-6 md:my-8 w-fi">
          Artisan carreleur d'exception à Bergerac
        </p>
        <p className="text-center text-sm text-white/90 md:text-md">
          Sublimez vos espaces intérieurs et extérieurs avec notre expertise
          artisanale. De la salle de bain à la terrasse, de la piscine au salon,
          nous créons des surfaces d'exception qui traversent le temps.
        </p>
        <div className=" flex-col-center md:flex-center space-y-4">
          <Link href="/services">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer text-white">
              <span className="font-semibold">Mes services</span>
              <FaArrowDown className="size-4" />
            </button>
          </Link>

          <Link href="/contact">
            <button className="inline-flex items-center gap-2 border border-white/15 bg-zinc-800/95 text-neutral-50 px-6 h-12 rounded-xl cursor-pointer">
              <span>👋</span>
              <span className="font-semibold">Prenez Contact</span>
            </button>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
