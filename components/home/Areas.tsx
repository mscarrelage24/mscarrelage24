'use client';
import { motion } from 'motion/react';
import { fadeInView } from '@/constants/motionVariants';
import React from 'react';

const Areas = () => {
  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center max-w-xl gap-8">
        <motion.h2 className="flex-col-center sub-title" {...fadeInView}>
          Zones d'intervention
        </motion.h2>
        <div className="flex flex-col space-y-4">
          <motion.p className="description" {...fadeInView}>
            Notre équipe de carreleurs professionnels intervient dans tout
            Bergerac 🗺️ (centre-ville, La Madeleine, Les Récollets) et dans un
            rayon de 30km aux alentours. Nous couvrons notamment les communes de
            Creysse, Lamonzie-Montastruc, Prigonrieux, Saint-Laurent-des-Vignes,
            Lembras, Cours-de-Pile, Saint-Pierre-d'Eyraud et Monbazillac. Que
            vous soyez en plein cœur de Bergerac ou dans un village proche,
            bénéficiez du même savoir-faire artisanal et de la même qualité de
            pose de carrelage.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Areas;
