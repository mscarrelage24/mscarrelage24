import Areas from '@/components/carrelage-bergerac/Areas';
import Faq from '@/components/carrelage-bergerac/Faq';
import Hero from '@/components/carrelage-bergerac/Hero';
import QualityServices from '@/components/carrelage-bergerac/QualityServices';
import Services from '@/components/carrelage-bergerac/Services';
import Sites from '@/components/carrelage-bergerac/Sites';
import React from 'react';
import Head from 'next/head';
import { faqStructuredData } from '@/components/carrelage-bergerac/Faq';
import { Metadata } from 'next';
import StructuredDataScript from '@/components/StructuredDataScript';

export const metadata: Metadata = {
  title: 'MS Carrelage 24 | Votre Carreleur Expert à Bergerac',
  description:
    'MS Carrelage 24, votre carreleur professionnel à Bergerac. Spécialiste de la pose de carrelage sur mesure. Devis gratuit, pose professionnelle et rénovation de sols.',
  keywords: [
    'carreleur Bergerac',
    'carrelage Dordogne',
    'carrelage Bergerac',
    'pose carrelage',
    'carrelage piscine',
    'rénovation carrelage',
    'carrelage intérieur',
    'carrelage extérieur',
    'carrelage espagnol',
    'artisan carreleur',
    'carreleur professionnel',
    'terrasse carrelée',
    'carrelage salle de bain',
    'carreleur certifié',
  ],
  openGraph: {
    title: 'MS Carrelage 24 | Votre Carreleur Expert à Bergerac',
    description:
      'MS Carrelage 24, votre carreleur professionnel à Bergerac. Spécialiste de la pose de carrelage sur mesure. Devis gratuit, pose professionnelle et rénovation de sols.',
    url: 'https://www.mscarrelage24.fr/carrelage-bergerac',
    siteName: 'MS Carrelage 24',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MS Carrelage 24 | Votre Carreleur Expert à Bergerac',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.mscarrelage24.fr/carrelage-bergerac',
    languages: {
      'fr-FR': 'https://www.mscarrelage24.fr/carrelage-bergerac',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  category: 'construction',
  creator: 'MS Carrelage 24',
  publisher: 'MS Carrelage 24',
  authors: [{ name: 'MS Carrelage 24' }],
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const page = () => {
  return (
    <main>
      <StructuredDataScript />

      {/* Contenu de la page */}
      <Hero />
      <Services />
      <QualityServices />
      <Areas />
      <Sites />
      <Faq />
    </main>
  );
};

export default page;
