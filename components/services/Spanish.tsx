'use client';

import React, { useEffect, useRef } from 'react';
import { BentoServices } from './BentoServices';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Spanish = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      gsap.fromTo(
        sectionRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'sine.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isDesktop ? 'top bottom' : '-=100 bottom',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container section flex-col-center gap-10"
    >
      <div className="flex-col-center max-w-xl gap-6">
        <h2 className="sub-title">Nos Sélections Espagnoles</h2>
        <p className="description">
          Spécialiste du carrelage espagnol à Bergerac, nous vous proposons les
          plus belles collections ibériques. Des matériaux d'exception et des
          designs uniques pour transformer votre intérieur en un lieu
          remarquable.
        </p>
      </div>
      <BentoServices />
    </section>
  );
};

export default Spanish;
