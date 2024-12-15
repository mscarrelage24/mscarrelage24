'use client';

import React, { useEffect, useRef } from 'react';
import { KeyPoints } from './KeyPoints';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const animations = [
    {
      ref: sectionRef,
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    {
      ref: textRef,
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
    },
  ];

  useEffect(() => {
    animations.forEach(({ ref, from, to }) => {
      if (ref.current) {
        gsap.fromTo(ref.current, from, {
          ...to,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
          },
        });
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container section flex-col-center gap-8 md:gap-12"
    >
      <div ref={textRef} className="flex-col-center max-w-xl gap-6">
        <h2 className="flex-col-center">
          <span className="sub-title">Notre Philosophie :</span>
          <span className="sub-title">L'Excellence du Détail</span>
        </h2>
        <p className="description">
          Au-delà de la simple pose de carrelage, nous cultivons l'art du
          travail bien fait. Chaque projet bénéficie de notre expertise
          artisanale et d'un accompagnement personnalisé. De la sélection des
          matériaux aux finitions, nous garantissons des réalisations durables
          qui traversent le temps.
        </p>
        <KeyPoints />
      </div>
    </section>
  );
};

export default Philosophy;
