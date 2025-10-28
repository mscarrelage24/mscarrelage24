import Image from 'next/image';
import Link from 'next/link';
import MotionText from '../animation/MotionText';
import MotionButton from '../animation/MotionButton';

const Skills = () => {
  return (
    <section className="container section">
      <h2 className="sub-title">
        <MotionText>Artisan carreleur à Bergerac depuis 2008</MotionText>
      </h2>

      {/* Section 1 */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {/* img */}
        <div className="flex justify-center items-center">
          <Image
            src="/ms.jpg"
            alt="carreleur bergerac"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* text */}
        <div className="flex flex-col items-center">
          <h3 className="sub-title-section mt-8 md:mt-12">
            <MotionText>Un savoir-faire artisanal</MotionText>
          </h3>
          <p className="py-8 px-4 description">
            <MotionText>
              Depuis plus de 15 ans, MS Carrelage 24 met son expertise au
              service de vos projets en Dordogne. Notre équipe de carreleurs
              qualifiés s'engage à transformer vos espaces avec précision et
              créativité. Du conseil à la réalisation, nous vous accompagnons
              dans chaque étape pour garantir un résultat à la hauteur de vos
              attentes.
            </MotionText>
          </p>
          <Link href="/services">
            <MotionButton primary>Mes services</MotionButton>
          </Link>
        </div>
      </div>

      {/* Section 2 */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {/* img */}
        <div className="flex justify-center items-center relative order-1 lg:order-2">
          <Image
            src="/ms-2.jpg"
            alt="carrelage bergerac"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* text */}

        <div className="flex flex-col items-center order-2 lg:order-1">
          <h3 className="sub-title-section mt-8 md:mt-12">
            <MotionText>Notre engagement qualité</MotionText>
          </h3>
          <p className="py-8 px-4 description">
            <MotionText>
              Plus qu'un métier, le carrelage est notre passion. Nous combinons
              techniques traditionnelles et innovations modernes pour sublimer
              vos sols et murs. Chaque projet est unique et bénéficie de notre
              expertise reconnue en Dordogne, avec une garantie décennale pour
              votre tranquillité.{' '}
            </MotionText>
          </p>
          <Link href="/contact" className="">
            <MotionButton primary>👋 Prenez contact</MotionButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;
