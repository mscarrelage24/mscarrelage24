import Link from 'next/link';
import MotionText from '../animation/MotionText';
import MotionButton from '../animation/MotionButton';

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex-col-center lg:flex-row lg:justify-around bg-cover bg-bottom bg-[url('/hero-mob.jpg')] md:bg-[url('/hero.jpg')] sm:px-8 lg:px-0">
      <div
        className="bg-black/80 md:bg-black/90 rounded-lg flex flex-col justify-center items-center max-w-3xl space-y-6 min-h-[450px] md:p-0 md:min-h-[500px] px-4 md:px-8 lg:px-12" // Ajoutez min-height
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 bg-opacity-50">
          <MotionText delay={0.2}>
            Carreleurs à Bergerac -
            <br /> Pose & Rénovation de Carrelage
          </MotionText>
        </h1>
        <h2 className="text-white text-sm inline-flex border border-[#f5f5f5]/20 px-3 py-1 rounded-lg tracking-tight my-6 md:my-8">
          <MotionText delay={0.25}>MS Carrelage 24</MotionText>
        </h2>

        <p className="text-center text-sm text-white/90 md:text-md h-[92px] md:h-[70px] max-w-2xl lg:max-w-3xl">
          <MotionText delay={0.3}>
            Installés à Bergerac, nous sublimons vos espaces intérieurs et
            extérieurs avec notre expertise artisanale. De la salle de bain à la
            terrasse, de la piscine au salon, nous créons des surfaces
            d'exception qui traversent le temps.
          </MotionText>
        </p>
        <div
          className="flex-col-center md:flex-center space-y-4 h-[110px] 
        "
        >
          <Link href="/services">
            <MotionButton delay={0.4}>Mes services</MotionButton>
          </Link>
          <Link href="/contact">
            <MotionButton delay={0.5} primary>
              👋 Prenez Contact
            </MotionButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
