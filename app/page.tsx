import Hero from '@/components/home/Hero';
import { ProofBar } from '@/components/home/ProofBar';
import { Services } from '@/components/home/Services';
import Skills from '@/components/home/Skills';
import WhyUs from '@/components/home/WhyUs';
import SpanishTiles from '@/components/home/SpanishTiles';
import Portfolio from '@/components/home/Portfolio';
import { Metadata } from 'next';
import Areas from '@/components/home/Areas';
import Faq from '@/components/home/Faq';
import StructuredDataScript from '@/components/StructuredDataScript';
import { faq } from '@/constants';
import LocalStructuredData from '@/components/LocalStructuredData';

export const metadata: Metadata = {
  title: "MS Carrelage 24 | Artisan Carreleur d'Exception à Bergerac",
  description:
    'MS Carrelage 24, expert carreleur à Bergerac depuis 2008. Spécialiste en carrelage intérieur, extérieur, piscine et rénovation en Dordogne',
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
    canonical: '/',
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
  category: 'carreleur',
  creator: 'MS Carrelage 24',
  publisher: 'MS Carrelage 24',
  authors: [{ name: 'MS Carrelage 24', url: 'https://www.mscarrelage24.fr' }],
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
    'business:contact_data:email': 'mailto:mustaphatouay@hotmail.com',
    'business:contact_data:phone_number': '0753673439',
  },
};
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <LocalStructuredData />
      <StructuredDataScript data={faqStructuredData} id="faq-jsonld" />
      <Hero />
      <ProofBar />
      <Services />
      <SpanishTiles />
      <Skills />
      <Portfolio />
      <Areas />
      <WhyUs />
      <Faq />
    </main>
  );
}
