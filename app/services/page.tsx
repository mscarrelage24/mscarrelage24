import { Gallery } from '@/components/services/Gallery';
import HeroServices from '@/components/services/HeroServices';
import Spanish from '@/components/services/Spanish';
import Tiles from '@/components/services/Tiles';

import React from 'react';

const page = () => {
  return (
    <>
      <HeroServices />
      <Tiles />
      <Spanish />
      <Gallery />
    </>
  );
};

export default page;
