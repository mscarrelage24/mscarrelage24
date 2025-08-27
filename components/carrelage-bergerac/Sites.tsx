import React from 'react';
import { Compare } from '@/components/ui/compare';
const Sites = () => {
  return (
    <section className="container section flex-col-center gap-16">
      <div className="flex-col-center max-w-xl gap-6">
        <h2 className="sub-title">
          Nos réalisation
          <br className="hidden md:block" /> à Bergerac
        </h2>
        <p className="description">
          Besoin d’inspiration pour vos sols et revêtements muraux ?
          Inspirez-vous de nos réalisations pour des clients Bergeracois ! Ces
          photos montrent comment nous avons concrétisé leurs projets avec des
          solutions sur-mesure et des matériaux choisis pour durer. Votre
          imagination, notre expertise ✨.
        </p>
        <div className="flex-col-center gap-6 lg:flex-row">
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
        </div>
      </div>
    </section>
  );
};

export default Sites;
