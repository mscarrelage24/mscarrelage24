'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridOneRef = useRef<HTMLDivElement>(null);
  const gridSecondRef = useRef<HTMLDivElement>(null);
  const textRefOne = useRef<HTMLDivElement>(null);
  const textRefTwo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Configuration de base pour les animations
    const baseConfig = {
      duration: 1,
      scrollTrigger: {
        start: 'top 90%',
        end: 'bottom 10%',
      },
    };

    // Configuration des animations par type
    const animations = [
      {
        ref: sectionRef,
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      {
        ref: titleRef,
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
      },
      {
        ref: gridOneRef,
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      {
        ref: gridSecondRef,
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      {
        ref: textRefOne,
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, stagger: 0.3 },
        useChildren: true,
      },
      {
        ref: textRefTwo,
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, stagger: 0.3 },
        useChildren: true,
      },
    ];

    // Fonction pour créer les animations
    animations.forEach(({ ref, from, to, useChildren }) => {
      if (ref.current) {
        gsap.fromTo(useChildren ? ref.current.children : ref.current, from, {
          ...to,
          ...baseConfig,
          scrollTrigger: {
            ...baseConfig.scrollTrigger,
            trigger: ref.current,
          },
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="container section">
      <h2 ref={titleRef} className="flex-col-center">
        <span className="sub-title">Artisan carreleur</span>

        <span className="sub-title">à Bergerac depuis 2008</span>
      </h2>

      {/* Section 1 */}

      <div
        ref={gridOneRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16"
      >
        {/* img */}
        <div className="flex justify-center items-center ">
          <Image
            src="/ms.jpg"
            alt="carreleur bergerac"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* text */}
        <div ref={textRefOne} className="flex flex-col items-center">
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
          <Link href="/services">
            <button className="inline-flex items-center gap-2 border border-black/15 px-6 h-12 rounded-xl cursor-pointer">
              <span className="font-semibold">Mes services</span>
              <FaArrowRight className="size-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Section 2 */}

      <div
        ref={gridSecondRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16"
      >
        {/* img */}
        <div className="flex justify-center items-center relative order-1 lg:order-2">
          <Image
            src="/ms-2.jpg"
            alt="carrelage bergerac"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* text */}

        <div
          ref={textRefTwo}
          className="flex flex-col items-center order-2 lg:order-1"
        >
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
          <Link href="/contact" className="">
            <button className="inline-flex items-center gap-2 border border-black/15 bg-neutral-900/95 text-neutral-50 px-6 h-12 rounded-xl cursor-pointer">
              <span>👋</span>
              <span className="font-semibold">Prenez Contact</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;
