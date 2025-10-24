'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FocusCards } from '@/components/ui/FocusCards';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: 'MS Carrelage 24',
    src: '/about-gallery/s1.jpg',
  },
  {
    title: 'MS Carrelage 24',
    src: '/about-gallery/s2.jpg',
  },
  {
    title: 'MS Carrelage 24',
    src: '/about-gallery/s3.jpg',
  },
  {
    title: 'MS Carrelage 24',
    src: '/about-gallery/s4.jpg',
  },
  {
    title: 'MS Carrelage 24',
    src: '/about-gallery/s5.jpg',
  },
  {
    title: 'MS Carrelage 24',
    src: '/about-gallery/s6.jpg',
  },
];

const SpanishAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
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
            start: 'top bottom',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container section flex-col-center gap-8 md:gap-12"
    >
      <div className="flex-col-center gap-6">
        <h2 className="sub-title">Partenaires Espagnols</h2>
        <p className="description">
          Nous collaborons avec les meilleurs fabricants de carrelage espagnols,
          sélectionnés pour leur excellence et leur innovation. Des collections
          exclusives importées directement de Valence et Castellón, centres
          historiques du carrelage ibérique.
        </p>
      </div>
      <FocusCards cards={cards} />
    </section>
  );
};

export default SpanishAbout;
