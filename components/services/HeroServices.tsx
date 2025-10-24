'use client';
import { motion } from 'motion/react';
import { fadeInView } from '@/constants/motionVariants';
import GridPattern from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';

const HeroServices = () => {
  return (
    <section className="min-h-[70vh] md:min-h-[65vh] lg:min-h-[75vh] relative flex size-full items-center justify-center overflow-hidden rounded-lg p-8 md:p-20 mt-16 md:mt-0">
      <motion.div
        className="flex flex-col items-center justify-center gap-6 h-[300px] md:h-h-[350px] lg:h-[400px]"
        {...fadeInView}
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
      </motion.div>
    </section>
  );
};

export default HeroServices;
