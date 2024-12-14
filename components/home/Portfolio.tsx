'use client';
import React, { useEffect, useRef } from 'react';
import { Compare } from '@/components/ui/compare';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const divRefOne = useRef<HTMLDivElement>(null);
  const divRefTwo = useRef<HTMLDivElement>(null);

  const animations = [
    {
      ref: sectionRef,
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    {
      ref: divRefOne,
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    {
      ref: divRefTwo,
      from: { opacity: 0 },
      to: { opacity: 1 },
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
            start: '-=500 bottom',
          },
        });
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container section flex-col-center gap-16"
    >
      <div ref={divRefOne} className="flex-col-center max-w-xl gap-6">
        <h2 className="sub-title">Nos Dernières Réalisations</h2>
        <p className="description">
          Admirez nos dernières transformations en carrelage. Des projets tout
          juste livrés qui témoignent de notre passion pour le travail bien
          fait. Une collection de réalisations qui s'enrichit au fil de vos
          projets.
        </p>
      </div>
      <div ref={divRefTwo} className="flex-col-center gap-6 lg:flex-row">
        <Compare
          firstImage="/portfolio/pb-1.jpg"
          secondImage="/portfolio/pa-1.jpg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
          slideMode="hover"
        />
        <Compare
          firstImage="/portfolio/pb-2.jpg"
          secondImage="/portfolio/pa-2.jpg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
          slideMode="hover"
        />
      </div>
    </section>
  );
};

export default Portfolio;
