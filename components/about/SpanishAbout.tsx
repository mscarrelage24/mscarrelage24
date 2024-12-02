import React from 'react';
import { FocusCards } from '@/components/ui/FocusCards';

const SpanishAbout = () => {
  const cards = [
    {
      title: 'MS Carrelage 24',
      src: '/about-gallery/s1.jpg',
    },
    {
      title: 'MS Carrelage 24',
      src: '/about-gallery/s2.jpg',
    },
    {
      title: 'MS Carrelage 24',
      src: '/about-gallery/s3.jpg',
    },
    {
      title: 'MS Carrelage 24',
      src: '/about-gallery/s4.jpg',
    },
    {
      title: 'MS Carrelage 24',
      src: '/about-gallery/s5.jpg',
    },
    {
      title: 'MS Carrelage 24',
      src: '/about-gallery/s6.jpg',
    },
  ];

  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center gap-6">
        <h2 className="sub-title">Partenaires Espagnols</h2>
        <p className="description">
          Nous collaborons avec les meilleurs fabricants de carrelage espagnols,
          sélectionnés pour leur excellence et leur innovation. Des collections
          exclusives importées directement de Valence et Castellón, centres
          historiques du carrelage ibérique.
        </p>
      </div>
      <FocusCards cards={cards} />
    </section>
  );
};

export default SpanishAbout;
