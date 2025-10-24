'use client';

import StructuredDataScript from '@/components/StructuredDataScript';

export default function LocalStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'TileContractor',
    name: 'MS Carrelage 24',
    image: 'https://mscarrelage24.fr/og-image.jpg',
    url: 'https://mscarrelage24.fr/',
    telephone: '+33 7 53 67 34 39',
    email: 'mailto:mustaphatouay@hotmail.com',
    description:
      'MS Carrelage 24, expert carreleur à Bergerac depuis 2008. Spécialiste en carrelage intérieur, extérieur, piscine et rénovation en Dordogne.',
    serviceType: 'Pose de carrelage intérieur, extérieur et piscine',
    hasMap:
      'https://www.google.com/maps/place/MS+Carrelage+24+-+Bergerac/@44.8513257,0.4745286,13.5z/data=!4m10!1m2!2m1!1scarreleur+bergerac!3m6!1s0x2a42c4fe0b1d18ef:0x49a8fa98000a7545!8m2!3d44.856483!4d0.4768091!15sChJjYXJyZWxldXIgYmVyZ2VyYWOSAQ90aWxlX2NvbnRyYWN0b3LgAQA!16s%2Fg%2F11wx053p7f',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '93 Rue Valette',
      addressLocality: 'Bergerac',
      postalCode: '24100',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.85713404284612,
      longitude: 0.4779273245678221,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.google.com/maps/place/MS+Carrelage+24+-+Bergerac/@44.8513257,0.4745286,13.5z/data=!4m10!1m2!2m1!1scarreleur+bergerac!3m6!1s0x2a42c4fe0b1d18ef:0x49a8fa98000a7545!8m2!3d44.856483!4d0.4768091!15sChJjYXJyZWxldXIgYmVyZ2VyYWOSAQ90aWxlX2NvbnRyYWN0b3LgAQA!16s%2Fg%2F11wx053p7f',
    ],
    founder: {
      '@type': 'Person',
      name: 'Mustapha Touay Charef',
    },
    legalName: 'MUSTAPHA TOUAY CHAREF',
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'SIRET',
        value: '91309906500017',
      },
      { '@type': 'PropertyValue', propertyID: 'SIREN', value: '913099065' },
      { '@type': 'PropertyValue', propertyID: 'Code NAF', value: '4333Z' },
    ],
    category: 'Carreleur',
    areaServed: {
      '@type': 'Place',
      name: 'Bergerac et environs',
    },
  };

  return <StructuredDataScript data={data} id="tilecontractor-jsonld" />;
}
