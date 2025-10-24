'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex-col-center lg:flex-row lg:justify-around bg-cover bg-bottom bg-[url('/hero-mob.jpg')] md:bg-[url('/hero.jpg')] sm:px-8 lg:px-0">
      <div
        className="bg-black/80 md:bg-black/90 rounded-lg flex flex-col justify-center items-center max-w-3xl space-y-6 min-h-[450px] md:p-0 md:min-h-[500px] px-4 md:px-8 lg:px-12" // Ajoutez min-height
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 bg-opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Carreleurs à Bergerac -
          <br /> Pose & Rénovation de Carrelage
        </motion.h1>
        <motion.h2
          className="text-white text-sm inline-flex border border-[#f5f5f5]/20 px-3 py-1 rounded-lg tracking-tight my-6 md:my-8 w-fi"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          MS Carrelage 24
        </motion.h2>
        <motion.p
          className="text-center text-sm text-white/90 md:text-md h-[92px] md:h-[70px] max-w-2xl lg:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Installés à Bergerac, nous sublimons vos espaces intérieurs et
          extérieurs avec notre expertise artisanale. De la salle de bain à la
          terrasse, de la piscine au salon, nous créons des surfaces d'exception
          qui traversent le temps.
        </motion.p>
        <div
          className="flex-col-center md:flex-center space-y-4 h-[110px] 
        "
        >
          <Link href="/services">
            <motion.button
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="font-semibold">Mes services</span>
              <FaArrowDown className="size-4" />
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              className="inline-flex items-center gap-2 border border-white/15 bg-zinc-800/95 text-neutral-50 px-6 h-12 rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>👋</span>
              <span className="font-semibold">Prenez Contact</span>
            </motion.button>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
