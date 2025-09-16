import React from 'react';
import {
  House,
  Sun,
  Waves,
  Hammer,
  Lightbulb,
  Square,
  FileText,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const QualityServices = () => {
  const servicesTiles = [
    {
      title: 'Pose de carrelage intérieur',
      text: `Installation professionnelle pour vos salles de bain, cuisines et sols par des carreleurs experts.`,
      imgSrc: '/tiles-page/services/s1.jpg',
      icon: <House className="text-amber-400" />,
      altImage:
        'Artisan carreleur posant du carrelage dans une salle de bain à Bergerac',
    },
    {
      title: 'Sols extérieurs résistants',
      text: `Terrasses et balcons antidérapants spécialement conçus pour le climat périgourdin.`,
      imgSrc: '/tiles-page/services/s2.jpg',
      icon: <Sun className="text-amber-400" />,
      altImage:
        'Terrase en carrelage antidérapant résistante au gel, installée près de Bergerac',
    },
    {
      title: 'Rénovation de surfaces',
      text: `Remplacement de joints et réparation de carreaux cassés par nos artisans carreleurs.`,
      imgSrc: '/tiles-page/services/s3.jpg',
      icon: <Hammer className="text-amber-400" />,
      altImage: 'Rénovation de joints de carrelage par un artisan à Bergerac',
    },
    {
      title: 'Conseils personnalisés',
      text: `Guide complet pour sélectionner entre grès cérame, pierre naturelle et autres matériaux adaptés.`,
      imgSrc: '/tiles-page/services/s4.jpg',
      icon: <Lightbulb className="text-amber-400" />,
      altImage:
        'Consultation avec un carreleur expert pour le choix du carrelage à Bergerac',
    },
    {
      title: 'Travaux précis',
      text: `Découpes précises pour escaliers, angles et pièces complexes.`,
      imgSrc: '/tiles-page/services/s5.jpg',
      icon: <Square className="text-amber-400" />,
      altImage:
        'Découpe précise de carreaux pour un escalier sur-mesure à Bergerac',
    },
    {
      title: 'Devis gratuit',
      text: `Évaluation claire transparente de votre projet.`,
      imgSrc: '/tiles-page/services/s6.jpg',
      icon: <FileText className="text-amber-400" />,
      altImage: 'Devis détaillé pour un projet de pose de carrelage à Bergerac',
    },
  ];
  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center max-w-xl gap-8">
        <h2 className="flex-col-center sub-title">Notre expertise carrelage</h2>
        <div className="flex flex-col space-y-4">
          {' '}
          <p className="description text-center max-w-2xl">
            Il n'y a pas de hasard dans la satisfaction de nos clients : nos{' '}
            <strong>15 ans d'expertise</strong> et nos{' '}
            <strong>retours positifs</strong> témoignent d'une approche
            résolument professionnelle. Que ce soit pour une rénovation ou une
            pose neuve de carrelage, nous combinons savoir-faire artisanal et
            matériaux de qualité.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {servicesTiles.map(({ title, text, imgSrc, icon }, index) => (
          <div
            className="w-full rounded-3xl overflow-hidden max-w-sm p-8 border"
            key={index}
          >
            <Image
              src={imgSrc}
              alt="image"
              width={500}
              height={500}
              className="rounded-2xl object-contain object-center "
            />
            <div className="py-4 relative z-20">
              <h3 className="text-xl text-left font-bold flex gap-4">
                <span>{icon}</span>
                <span>{title}</span>
              </h3>
              <p className="text-left mt-4 text-sm text-neutral-700 lg:text-base">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="description text-center max-w-2xl">
        Que ce soit pour une salle de bain, une cuisine ou un salon, nous
        veillons à ce que le carrelage soit posé avec précision, en respectant
        les normes d’étanchéité et d’isolation. Nous utilisons des techniques de
        pose collée ou scellée selon les supports, et assurons un nivellement
        parfait pour éviter tout désordre futur.
      </p>
      <Link href="/contact">
        <button className="inline-flex items-center gap-2 border border-white/15 bg-zinc-800/95 text-neutral-50 px-6 h-12 rounded-xl cursor-pointer">
          <span>📞</span>
          <span className="font-semibold">Devis gratuit</span>
        </button>
      </Link>
    </section>
  );
};

export default QualityServices;
