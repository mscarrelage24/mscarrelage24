import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import FloatingPhoneButton from '@/components/FloatingPhoneButton';

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
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'MS Carrelage 24',
              image: 'https://www.mscarrelage24.fr/logo.png',
              description:
                'Expert carreleur à Bergerac depuis 2008. Spécialiste en carrelage intérieur, extérieur, piscines et rénovation.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bergerac',
                postalCode: '24100',
                addressRegion: 'Dordogne',
                addressCountry: 'FR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 44.8566198683203,
                longitude: 0.4767876394707024,
              },
              url: 'https://www.mscarrelage24.fr',
              telephone: '+33753673439',
              email: 'mustaphatouay@hotmail.com',
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 44.8566198683203,
                  longitude: 0.4767876394707024,
                },
                geoRadius: '30000', // 30km en mètres
              },
              openingHours: 'Mo-Fr 09:00-18:00',
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} ${openSans.variable} font-montserrat antialiased bg-slate-100`}
      >
        <Navbar />
        {children}
        <FloatingPhoneButton />
        <Footer />
      </body>
    </html>
  );
}
