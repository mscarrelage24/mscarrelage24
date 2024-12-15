'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
const HeroAbout = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainDivRef.current) {
      gsap.fromTo(
        mainDivRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
        }
      );
    }
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'sine.out',
          delay: 0.5, // Ajoute un délai pour que ça commence après l'animation de la div principale
        }
      );
    }
  }, []);
  return (
    <div
      ref={mainDivRef}
      className="min-w-full min-h-dvh h-full flex-col-center lg:flex-row lg:justify-around bg-cover bg-fixed bg-center bg-[url('/hero-a-mob.jpg')] md:bg-[url('/hero-a.jpg')] sm:px-8 lg:px-0"
    >
      <div
        ref={containerRef}
        className="bg-black/80 md:bg-black/90 p-6 lg:p-8 rounded-lg flex-col-center max-w-3xl space-y-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 bg-opacity-50 md:h-[52px]">
          Artisan de vos Espaces
        </h1>
        <p className="text-white text-sm inline-flex border border-[#f5f5f5]/20 px-3 py-1 rounded-lg tracking-tight my-6 md:my-8 w-fi">
          L'expertise artisanale au service de vos projets
        </p>
        <p className="text-center text-sm text-white/90 md:text-md">
          Artisan carreleur en Dordogne, nous mettons notre expertise au service
          de vos projets. Une équipe passionnée qui apporte solutions et
          conseils personnalisés pour sublimer vos espaces intérieurs et
          extérieurs.
        </p>
        <Link href="/contact">
          <button className="inline-flex items-center gap-2 border border-white/15 bg-zinc-800/95 text-neutral-50 px-6 h-12 rounded-xl cursor-pointer">
            <span>👋</span>
            <span className="font-semibold">Prenez Contact</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroAbout;
