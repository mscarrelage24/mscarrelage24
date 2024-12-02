import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
const Skills = () => {
  return (
    <div className="container section">
      <h2 className="flex-col-center">
        <span className="sub-title">Artisan carreleur</span>

        <span className="sub-title">à Bergerac depuis 2008</span>
      </h2>

      {/* Section 1 */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {/* img */}
        <div className="flex justify-center items-center ">
          <Image
            src="/ms.jpg"
            alt="marie avocate"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* text */}
        <div className="flex flex-col items-center">
          <h3 className="sub-title-section mt-8 md:mt-12">
            Un savoir-faire artisanal
          </h3>
          <p className="py-8 px-4 description">
            Depuis plus de 15 ans, MS Carrelage 24 met son expertise au service
            de vos projets en Dordogne. Notre équipe de carreleurs qualifiés
            s'engage à transformer vos espaces avec précision et créativité. Du
            conseil à la réalisation, nous vous accompagnons dans chaque étape
            pour garantir un résultat à la hauteur de vos attentes.
          </p>
          <Link href="/">
            <button className="inline-flex items-center gap-2 border border-black/15 px-6 h-12 rounded-xl cursor-pointer">
              <span className="font-semibold">Mes services</span>
              <FaArrowRight className="size-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Section 2 */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {/* img */}
        <div className="flex justify-center items-center relative order-1 lg:order-2">
          <Image
            src="/ms-2.jpg"
            alt="marie avocate"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* text */}

        <div className="flex flex-col items-center order-2 lg:order-1">
          <h3 className="sub-title-section mt-8 md:mt-12">
            Notre engagement qualité
          </h3>
          <p className="py-8 px-4 description">
            Plus qu'un métier, le carrelage est notre passion. Nous combinons
            techniques traditionnelles et innovations modernes pour sublimer vos
            sols et murs. Chaque projet est unique et bénéficie de notre
            expertise reconnue en Dordogne, avec une garantie décennale pour
            votre tranquillité.
          </p>
          <Link href="/" className="">
            <button className="inline-flex items-center gap-2 border border-black/15 bg-neutral-900/95 text-neutral-50 px-6 h-12 rounded-xl cursor-pointer">
              <span>👋</span>
              <span className="font-semibold">Prenez Contact</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
