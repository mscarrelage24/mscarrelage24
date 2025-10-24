import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';

import StructuredDataScript from '@/components/StructuredDataScript';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap', // Ajoutez cette ligne
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap', // Ajoutez cette ligne
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mscarrelage24.fr'),
  title: {
    default: 'MS Carrelage 24 | Carreleur professionnel à Bergerac',
    template: '%s | MS Carrelage 24',
  },
  description:
    'MS Carrelage 24, artisan carreleur à Bergerac. Spécialiste du carrelage intérieur, extérieur, piscine et rénovation en Dordogne depuis 2008.',
  applicationName: 'MS Carrelage 24',
  generator: 'Next.js 14',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'carreleur Bergerac',
    'carrelage Dordogne',
    'carrelage intérieur',
    'carrelage extérieur',
    'carrelage piscine',
    'rénovation carrelage',
    'artisan carreleur',
  ],
  authors: [
    { name: 'MS Carrelage 24', url: 'https://www.mscarrelage24.fr' },
    { name: 'Mustapha Touay Charef' },
  ],
  creator: 'MS Carrelage 24',
  publisher: 'MS Carrelage 24',
  formatDetection: {
    telephone: true,
    email: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.mscarrelage24.fr',
    siteName: 'MS Carrelage 24',
    title: 'MS Carrelage 24 | Carreleur professionnel à Bergerac',
    description:
      "Expert carreleur à Bergerac avec plus de 25 ans d'expérience. Pose et rénovation de carrelage intérieur, extérieur et piscine en Dordogne.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MS Carrelage 24 - Artisan carreleur à Bergerac',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} ${openSans.variable} font-montserrat antialiased bg-slate-100`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
