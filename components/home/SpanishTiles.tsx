'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lens } from '../ui/Lens';

gsap.registerPlugin(ScrollTrigger);

const SpanishTiles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Configuration mobile
    gsap.matchMedia().add('(max-width: 767px)', () => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current.children,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: '-=250 bottom',
              // markers: true,
            },
          }
        );
      }
    });

    // Configuration desktop
    gsap.matchMedia().add('(min-width: 768px)', () => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current.children,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              // markers: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div ref={containerRef} className="flex-col-center max-w-xl gap-8">
        <h2 className="flex-col-center sub-title">
          Spécialiste carrelage d'Espagne à Bergerac
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
