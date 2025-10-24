'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeInView } from '@/constants/motionVariants';
import { Lens } from '../ui/Lens';

const SpanishTiles = () => {
  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center max-w-xl gap-8">
        <motion.h2 className="flex-col-center sub-title" {...fadeInView}>
          Spécialiste carrelage d'Espagne à Bergerac
        </motion.h2>
        <motion.p className="description" {...fadeInView}>
          Passionnés par le carrelage espagnol, nous vous proposons des
          collections uniques à Bergerac. Des motifs traditionnels aux designs
          contemporains, découvrez des matériaux d'exception qui sublimeront
          votre intérieur.
        </motion.p>
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
