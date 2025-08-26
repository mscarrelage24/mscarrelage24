import Hero from '@/components/home/Hero';
import { ProofBar } from '@/components/home/ProofBar';
import { Services } from '@/components/home/Services';
import { Gallery } from '@/components/services/Gallery';
import Image from 'next/image';
import Skills from '@/components/home/Skills';
import WhyUs from '@/components/home/WhyUs';
import SpanishTiles from '@/components/home/SpanishTiles';
import Portfolio from '@/components/home/Portfolio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MS Carrelage 24 | Artisan Carreleur d'Exception à Bergerac",
  description:
    "Expert carreleur à Bergerac depuis 2008. Spécialiste en carrelage intérieur, extérieur, piscines et rénovation. Plus de 25 ans d'expérience en Dordogne, rayon de 30km. Spécialiste du carrelage espagnol.",
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
    'pose de carrelage grand format',
    'mosaïque piscine',
    'terrasse carrelée',
    'carrelage salle de bain',
    'carreleur certifié',
  ],
  openGraph: {
    title: "MS Carrelage 24 | Artisan Carreleur d'Exception à Bergerac",
    description:
      "Expert carreleur à Bergerac avec 25 ans d'expérience. Spécialiste en carrelage intérieur, extérieur, piscines et rénovation. Intervention dans un rayon de 30km autour de Bergerac.",
    url: 'https://www.mscarrelage24.fr',
    siteName: 'MS Carrelage 24',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MS Carrelage 24 - Artisan carreleur à Bergerac',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.mscarrelage24.fr',
    languages: {
      'fr-FR': 'https://www.mscarrelage24.fr',
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
  other: {
    'geo.region': 'FR-24',
    'geo.placename': 'Bergerac',
    'business:contact_data:street_address': 'Bergerac',
    'business:contact_data:locality': 'Bergerac',
    'business:contact_data:region': 'Dordogne',
    'business:contact_data:postal_code': '24100',
    'business:contact_data:country_name': 'France',
    'business:contact_data:email': 'mustaphatouay@hotmail.com',
    'business:contact_data:phone_number': '+33753673439',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofBar />
      <Services />
      <SpanishTiles />
      <Skills />
      <Portfolio />
      <WhyUs />
    </main>
  );
}
