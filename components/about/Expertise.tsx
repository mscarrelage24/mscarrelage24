'use client';
import React, { useEffect, useRef } from 'react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Lens } from '@/components/ui/Lens';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
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
          stagger: 0.3,
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
      <h2 className="sub-title">Expertise & Savoir-faire</h2>
      <p className="description">
        Une équipe d'artisans qualifiés guidée par un processus éprouvé. De
        l'étude à la réception, chaque projet bénéficie de notre expertise
        technique et de notre rigueur professionnelle. Une méthode structurée en
        quatre étapes qui garantit des réalisations d'exception, portées par
        notre passion du détail et notre engagement qualité.
      </p>
      <Lens>
        <Image
          src="/portfolio/r1.jpg"
          alt="ms carrelage 24"
          width={650}
          height={400}
          className="rounded-lg object-contain object-center"
        />
      </Lens>
    </section>
  );
};

export default Expertise;
