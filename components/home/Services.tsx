'use client';

import { House, Sun, Waves, Hammer } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Opacity } from '@tsparticles/engine';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Carrelage Intérieur',
    text: `De la cuisine au salon, nous créons des espaces élégants et
            durables. Expertise en pose de carrelage grand format.`,
    imgSrc: '/s1.jpg',
    icon: <House className="text-amber-4" />,
  },
  {
    title: 'Carrelage Extérieur',
    text: `Sublimez vos extérieurs avec des carrelages résistants aux intempéries. Terrasses, allées et plages de piscine.`,
    imgSrc: '/s3.jpg',
    icon: <Sun className="text-amber-4" />,
  },
  {
    title: 'Piscines',
    text: `Spécialiste des revêtements de piscine. Mosaïque, carrelage antidérapant et margelles sur mesure.`,
    imgSrc: '/s4.jpg',
    icon: <Waves className="text-amber-4" />,
  },
  {
    title: 'Rénovation',
    text: `Transformez vos espaces existants. Dépose, préparation des supports et pose dans les règles de l'art.`,
    imgSrc: '/s2.jpg',
    icon: <Hammer className="text-amber-4" />,
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && containerRef.current && cardsRef.current) {
      // Animation de la section
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
          },
        }
      );

      // Animation des enfants du container (titre et description)
      const containerChildren = gsap.utils.toArray<HTMLElement>(
        containerRef.current.children
      );
      containerChildren.forEach((child) => {
        gsap.fromTo(
          child,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: child,
              start: 'top bottom-=100',
            },
          }
        );
      });

      // Animation des cartes de service
      const cards = gsap.utils.toArray<HTMLElement>(cardsRef.current.children);
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
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
      <div ref={containerRef} className="flex-col-center max-w-xl gap-6">
        <h2 className="sub-title">Notre expertise carrelage</h2>
        <p className="description">
          Notre expertise au service de vos espaces.{' '}
          <Link href="/services" className="text-amber-5 font-bold">
            Découvrez nos solutions de carrelage personnalisées
          </Link>{' '}
          pour tous vos projets d'aménagement.
        </p>
      </div>
      <div
        ref={cardsRef}
        className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap gap-6"
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
