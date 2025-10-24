'use client';
import { motion } from 'motion/react';
import { fadeInView } from '@/constants/motionVariants';

import { Compare } from '@/components/ui/compare';

const Portfolio = () => {
  return (
    <section className="container section flex-col-center gap-16">
      <div className="flex-col-center max-w-xl gap-6">
        <motion.h2 className="sub-title" {...fadeInView}>
          Nos Dernières Réalisations
        </motion.h2>
        <motion.p className="description" {...fadeInView}>
          Admirez nos dernières transformations en carrelage à Bergerac. Des
          projets tout juste livrés qui témoignent de notre passion pour le
          travail bien fait. Une collection de réalisations qui s'enrichit au
          fil de vos projets.
        </motion.p>
      </div>
      <motion.div className="flex-col-center gap-6 lg:flex-row" {...fadeInView}>
        <Compare
          firstImage="/portfolio/pb-1.jpg"
          secondImage="/portfolio/pa-1.jpg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
          slideMode="hover"
          firstImageAlt="Piscine à Bergerac avant carrelage"
          secondImageAlt="Piscine à Bergerac après carrelage"
        />
        <Compare
          firstImage="/portfolio/pb-2.jpg"
          secondImage="/portfolio/pa-2.jpg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
          slideMode="hover"
          firstImageAlt="Chantier avant la pose de carrelage à Bergerac"
          secondImageAlt="Chantier après la pose de carrelage à Bergerac"
        />
      </motion.div>
    </section>
  );
};

export default Portfolio;
