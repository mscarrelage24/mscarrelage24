import Hero from '@/components/home/Hero';
import { ProofBar } from '@/components/home/ProofBar';
import { Services } from '@/components/home/Services';
import { Gallery } from '@/components/services/Gallery';
import Image from 'next/image';
import Skills from '@/components/home/Skills';
import WhyUs from '@/components/home/WhyUs';
import SpanishTiles from '@/components/home/SpanishTiles';
import Portfolio from '@/components/home/Portfolio';

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
