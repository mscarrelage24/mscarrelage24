import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex-col-center lg:flex-row lg:justify-around bg-cover bg-bottom bg-[url('/hero-b-mob.jpg')] md:bg-[url('/carrelage-bergerac.jpg')] sm:px-8 lg:px-0">
      <div className="bg-black/80 md:bg-black/90 rounded-lg flex flex-col justify-center items-center max-w-3xl space-y-6 min-h-[500px] md:p-0 px-4 md:px-8 lg:px-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 bg-opacity-50 ">
          Carreleurs à Bergerac -
          <br /> Pose & Rénovation de Carrelage
        </h1>
        <p className="text-white text-sm inline-flex border border-[#f5f5f5]/20 px-3 py-1 rounded-lg tracking-tight my-6 md:my-8 w-fi">
          Pose de carrelage depuis 15 ans.
        </p>
        <p className="text-center text-sm text-white/90 md:text-md max-w-2xl lg:max-w-3xl">
          Nos artisans carreleurs accompagnent vos projets de pose et de
          rénovation, que ce soit dans la salle de bain, la cuisine ou sur la
          terrasse. Installés à Bergerac, nous privilégions des matériaux
          durables, un service personnalisé et un devis gratuit. Vous souhaitez
          un revêtement esthétique et robuste ? Contactez-nous dès aujourd’hui !
          👇
        </p>
        <Link href="/contact">
          <button className="inline-flex items-center gap-2 border border-white/15 bg-zinc-800/95 text-neutral-50 px-6 h-12 rounded-xl cursor-pointer">
            <span>👋</span>
            <span className="font-semibold">Prenez Contact</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
