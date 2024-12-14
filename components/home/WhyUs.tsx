'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const [videoSrc, setVideoSrc] = useState('video-mobile.mp4');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setVideoSrc(e.matches ? 'video1.mp4' : 'video-mobile.mp4');
    };

    handleResize(mediaQuery);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const animations = [
    {
      ref: sectionRef,
      from: { opacity: 0 },
      to: { opacity: 1 },
    },

    {
      ref: containerRef,
      from: { opacity: 0, y: 25 },
      to: { opacity: 1, y: 0 },
      stagger: 0.2,
      useChildren: true,
    },
  ];

  useEffect(() => {
    // Configuration mobile
    gsap.matchMedia().add('(max-width: 767px)', () => {
      animations.forEach(({ ref, from, to, useChildren, stagger }) => {
        if (ref.current) {
          gsap.fromTo(useChildren ? ref.current.children : ref.current, from, {
            ...to,
            duration: 1,
            ...(stagger && { stagger }),
            scrollTrigger: {
              trigger: ref.current,
              start: '-=400 bottom',
            },
          });
        }
      });
    });

    // Configuration desktop
    gsap.matchMedia().add('(min-width: 768px)', () => {
      animations.forEach(({ ref, from, to, useChildren, stagger }) => {
        if (ref.current) {
          gsap.fromTo(useChildren ? ref.current.children : ref.current, from, {
            ...to,
            duration: 1,
            ...(stagger && { stagger }),
            scrollTrigger: {
              trigger: ref.current,
              start: '-=300 bottom',
            },
          });
        }
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container section flex-col-center gap-8 md:gap-12"
    >
      <div ref={containerRef} className="flex-col-center max-w-xl gap-8">
        <h2 className="flex-col-center">
          <span className="sub-title-section md:sub-title">
            Pourquoi choisir
          </span>

          <span className="sub-title-section md:sub-title">
            MS Carrelage à Bergerac ?
          </span>
        </h2>
        <p className="description">
          Artisan carreleur reconnu en Dordogne, notre équipe expérimentée
          intervient dans un rayon de 30 km autour de Bergerac. Nous créons pour
          vous des aménagements durables et élégants. Un savoir-faire reconnu
          pour des réalisations qui traversent le temps.
        </p>
        <video
          src={videoSrc}
          loop
          autoPlay
          playsInline
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default WhyUs;
