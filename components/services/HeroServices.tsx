'use client';

import React, { useEffect, useRef } from 'react';
import GridPattern from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

const HeroServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: 'sine.inOut',
        }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          delay: 0.5,
          ease: 'sine.inOut',
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[70vh] md:min-h-[65vh] lg:min-h-[75vh] relative flex size-full items-center justify-center overflow-hidden rounded-lg p-8 md:p-20 mt-16 md:mt-0"
    >
      <div
        ref={textRef}
        className="flex flex-col items-center justify-center gap-6 h-[300px] md:h-h-[350px] lg:h-[400px]"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 md:mt-12">
          Nos Solutions Carrelage
        </h1>
        <p className="tag">De la conception à la réalisation</p>
        <p className="description max-w-[300px] md:max-w-[500px] text-center">
          Découvrez notre gamme complète de services en carrelage pour vos
          projets intérieurs et extérieurs. Expertise artisanale et finitions
          soignées pour des réalisations qui traversent le temps.
        </p>
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={'4 2'}
          className={cn(
            '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
          )}
        />
      </div>
    </div>
  );
};

export default HeroServices;
