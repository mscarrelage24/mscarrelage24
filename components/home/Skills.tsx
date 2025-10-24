'use client';
import { motion } from 'motion/react';
import { fadeInView } from '@/constants/motionVariants';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

const Skills = () => {
  return (
    <section className="container section">
      <motion.h2 className="flex-col-center" {...fadeInView}>
        <span className="sub-title">Artisan carreleur</span>

        <span className="sub-title">à Bergerac depuis 2008</span>
      </motion.h2>

      {/* Section 1 */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {/* img */}
        <motion.div
          className="flex justify-center items-center"
          {...fadeInView}
        >
          <Image
            src="/ms.jpg"
            alt="carreleur bergerac"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </motion.div>

        {/* text */}
        <div className="flex flex-col items-center">
          <motion.h3
            className="sub-title-section mt-8 md:mt-12"
            {...fadeInView}
          >
            Un savoir-faire artisanal
          </motion.h3>
          <motion.p className="py-8 px-4 description" {...fadeInView}>
            Depuis plus de 15 ans, MS Carrelage 24 met son expertise au service
            de vos projets en Dordogne. Notre équipe de carreleurs qualifiés
            s'engage à transformer vos espaces avec précision et créativité. Du
            conseil à la réalisation, nous vous accompagnons dans chaque étape
            pour garantir un résultat à la hauteur de vos attentes.
          </motion.p>
          <Link href="/services">
            <motion.button
              className="inline-flex items-center gap-2 border border-black/15 px-6 h-12 rounded-xl cursor-pointer"
              {...fadeInView}
            >
              <span className="font-semibold">Mes services</span>
              <FaArrowRight className="size-4" />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Section 2 */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {/* img */}
        <motion.div
          className="flex justify-center items-center relative order-1 lg:order-2"
          {...fadeInView}
        >
          <Image
            src="/ms-2.jpg"
            alt="carrelage bergerac"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </motion.div>

        {/* text */}

        <div className="flex flex-col items-center order-2 lg:order-1">
          <motion.h3
            className="sub-title-section mt-8 md:mt-12"
            {...fadeInView}
          >
            Notre engagement qualité
          </motion.h3>
          <motion.p className="py-8 px-4 description" {...fadeInView}>
            Plus qu'un métier, le carrelage est notre passion. Nous combinons
            techniques traditionnelles et innovations modernes pour sublimer vos
            sols et murs. Chaque projet est unique et bénéficie de notre
            expertise reconnue en Dordogne, avec une garantie décennale pour
            votre tranquillité.
          </motion.p>
          <Link href="/contact" className="">
            <motion.button
              className="inline-flex items-center gap-2 border border-black/15 bg-neutral-900/95 text-neutral-50 px-6 h-12 rounded-xl cursor-pointer"
              {...fadeInView}
            >
              <span>👋</span>
              <span className="font-semibold">Prenez Contact</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;
