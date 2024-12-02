import React from 'react';
import { BrickWall, House, Waves, Bath } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';

const Tiles = () => {
  const services = [
    {
      title: 'Carreaux Grand Format',
      text: `La tendance moderne par excellence. Idéal pour : Salons, espaces ouverts, halls`,
      imgSrc: '/carreaux/grand-format.jpg',
      icon: <Bath className="text-amber-4" />,
    },
    {
      title: 'Faïence Murale',
      text: `Légèreté et élégance pour les murs. Idéal pour : Salles de bain, cuisines, crédences`,
      imgSrc: '/carreaux/murale.jpg',
      icon: <BrickWall className="text-amber-4" />,
    },
    {
      title: 'Mosaïque',
      text: `Finesse et personnalisation maximale. Idéal pour : Douches, piscines, décors`,
      imgSrc: '/carreaux/mosaique.jpg',
      icon: <Waves className="text-amber-4" />,
    },
    {
      title: 'Carrelage Effet Parquet',
      text: ` Reproduction fidèle du bois pour l'extérieur.`,
      imgSrc: '/carreaux/c1.jpg',
      icon: <House className="text-amber-4" />,
    },
  ];
  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center max-w-xl gap-6">
        <h2 className="sub-title">Nos Carrelages</h2>
        <p className="description">
          Notre expertise au service de vos espaces. Découvrez nos solutions de
          carrelage personnalisées pour tous vos projets d'aménagement.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Tiles;
