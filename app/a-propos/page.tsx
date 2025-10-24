import Expertise from '@/components/a-propos/Expertise';
import HeroAbout from '@/components/a-propos/HeroAbout';
import Philosophy from '@/components/a-propos/Philosophy';
import SpanishAbout from '@/components/a-propos/SpanishAbout';
import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "À Propos | Artisan Carreleur d'Exception à Bergerac - MS Carrelage 24",
  description:
    "Artisan carreleur passionné en Dordogne, expert en matériaux premium et partenaire des meilleurs fabricants espagnols. Une expertise artisanale et des conseils personnalisés pour des réalisations d'exception.",
  keywords: [
    'artisan carreleur Dordogne',
    'carrelage expertise Bergerac',
    'carreleur qualifié',
    'carrelage espagnol',
    'artisan carrelage',
    'expertise carrelage',
    'conseils carrelage',
    'carreleur professionnel Bergerac',
    'matériaux premium',
    'carrelage Valence',
    'carrelage Castellón',
    'artisan qualifié Dordogne',
  ],
  openGraph: {
    title:
      "À Propos | Artisan Carreleur d'Exception à Bergerac - MS Carrelage 24",
    description:
      "Découvrez notre expertise artisanale en carrelage. Partenaire des meilleurs fabricants espagnols, nous garantissons des réalisations d'exception en Dordogne.",
    url: 'https://www.mscarrelage24.fr/a-propos',
    siteName: 'MS Carrelage 24',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MS Carrelage 24 - Artisan carreleur en Dordogne',
      },
    ],
  },
  alternates: {
    canonical: '/a-propos',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'Carreleur',
  creator: 'MS Carrelage 24',
};

const page = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroAbout />
      <Philosophy />
      <Expertise />
      <SpanishAbout />
    </main>
  );
};

export default page;
