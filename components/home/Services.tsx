import { House, Sun, Waves, Hammer } from 'lucide-react';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import MotionText from '../animation/MotionText';

const services = [
  {
    title: 'Carrelage Intérieur',
    text: `De la cuisine au salon, nous créons des espaces élégants et
            durables. Expertise en pose de carrelage grand format.`,
    imgSrc: '/s1.jpg',
    icon: <House className="text-amber-4" />,
  },
  {
    title: 'Carrelage Extérieur',
    text: `Sublimez vos extérieurs avec des carrelages résistants aux intempéries. Terrasses, allées et plages de piscine.`,
    imgSrc: '/s3.jpg',
    icon: <Sun className="text-amber-4" />,
  },
  {
    title: 'Piscines',
    text: `Spécialiste des revêtements de piscine. Mosaïque, carrelage antidérapant et margelles sur mesure.`,
    imgSrc: '/s4.jpg',
    icon: <Waves className="text-amber-4" />,
  },
  {
    title: 'Rénovation',
    text: `Transformez vos espaces existants. Dépose, préparation des supports et pose dans les règles de l'art.`,
    imgSrc: '/s2.jpg',
    icon: <Hammer className="text-amber-4" />,
  },
];

export function Services() {
  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center max-w-xl gap-6">
        <h2 className="sub-title">
          <MotionText delay={0.1} y={15}>
            Notre expertise carrelage
          </MotionText>
        </h2>

        <p className="description">
          <MotionText delay={0.2} y={20}>
            Notre expertise au service de vos espaces.
            <Link href="/services" className="font-bold">
              Découvrez nos solutions de carrelage personnalisées
            </Link>{' '}
            pour tous vos projets d'aménagement à Bergerac.
          </MotionText>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap gap-6">
        {services.map((service, i) => (
          <ServiceCard {...service} key={i} />
        ))}
      </div>
    </section>
  );
}
