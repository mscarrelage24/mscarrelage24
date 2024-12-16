import { Form } from '@/components/contact/Form';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | MS Carrelage 24 Bergerac',
  description:
    'Contactez votre artisan carreleur à Bergerac. Devis gratuit pour vos projets de carrelage. Intervention dans un rayon de 30km autour de Bergerac.',
  alternates: {
    canonical: 'https://www.mscarrelage24.fr/contact',
  },
};
const page = () => {
  return (
    <>
      <Form />
    </>
  );
};

export default page;
