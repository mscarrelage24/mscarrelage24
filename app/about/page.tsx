import Expertise from '@/components/about/Expertise';
import HeroAbout from '@/components/about/HeroAbout';
import Philosophy from '@/components/about/Philosophy';
import SpanishAbout from '@/components/about/SpanishAbout';
import React from 'react';

const page = () => {
  return (
    <>
      <HeroAbout />
      <Philosophy />
      <Expertise />
      <SpanishAbout />
    </>
  );
};

export default page;
