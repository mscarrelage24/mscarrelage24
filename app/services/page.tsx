import { Gallery } from '@/components/services/Gallery';
import HeroServices from '@/components/services/HeroServices';
import Spanish from '@/components/services/Spanish';
import Tiles from '@/components/services/Tiles';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services et Solutions Carrelage | MS Carrelage 24 Bergerac',
  description:
    'Spécialiste du carrelage à Bergerac : grand format, faïence murale, mosaïque et carrelage effet parquet. Expert en carrelage espagnol, collections de Séville et Valence. Solutions personnalisées pour intérieur et extérieur.',
  keywords: [
    'carrelage grand format',
    'faïence murale',
    'mosaïque',
    'carrelage effet parquet',
    'carrelage espagnol Bergerac',
    'azulejos',
    'carrelage Séville',
    'carrelage Valence',
    'carrelage salle de bain',
    'carrelage cuisine',
    'carrelage piscine',
    'carrelage extérieur',
    'carrelage intérieur',
  ],
  openGraph: {
    title: 'Services et Solutions Carrelage | MS Carrelage 24 Bergerac',
    description:
      'Expert en carrelage à Bergerac : grand format, faïence, mosaïque et effet parquet. Collections espagnoles exclusives de Séville et Valence. Solutions sur mesure pour tous vos projets.',
    url: 'https://www.mscarrelage24.fr/services',
    siteName: 'MS Carrelage 24',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Services de carrelage MS Carrelage 24 - Collections espagnoles et solutions personnalisées',
      },
    ],
  },
  alternates: {
    canonical: '/services',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'Carreleur',
};

const page = () => {
  return (
    <>
      <main className="overflow-x-clip">
        <HeroServices />
        <Tiles />
        <Spanish />
        <Gallery />{' '}
      </main>
    </>
  );
};

export default page;
