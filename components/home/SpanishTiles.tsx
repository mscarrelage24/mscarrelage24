'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lens } from '../ui/Lens';

gsap.registerPlugin(ScrollTrigger);

const SpanishTiles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef) {
      gsap.fromTo(
        sectionRef,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            end: 'bottom 10%',
          },
        }
      );
    }

    if (containerRef.current) {
      // On précise le type d'élément
      const children = gsap.utils.toArray<HTMLElement>(
        containerRef.current.children
      );

      children.forEach((child) => {
        gsap.fromTo(
          child,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: child,
              start: 'top 90%',
              end: 'bottom 10%',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container section flex-col-center gap-8 md:gap-12"
    >
      <div ref={containerRef} className="flex-col-center max-w-xl gap-8">
        <h2 className="flex-col-center">
          <span className="sub-title">Spécialiste</span>
          <span className="sub-title"> carrelage d'Espagne</span>
        </h2>
        <p className="description">
          Passionnés par le carrelage espagnol, nous vous proposons des
          collections uniques à Bergerac. Des motifs traditionnels aux designs
          contemporains, découvrez des matériaux d'exception qui sublimeront
          votre intérieur.
        </p>
        <Lens>
          <Image
            src="/spanishtiles.jpg"
            alt="carreaux d'espagne"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </Lens>
      </div>
    </section>
  );
};

export default SpanishTiles;
