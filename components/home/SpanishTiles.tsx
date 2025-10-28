import Image from 'next/image';
import { Lens } from '../ui/Lens';
import MotionText from '../animation/MotionText';

const SpanishTiles = () => {
  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center max-w-xl gap-8">
        <h2 className="flex-col-center sub-title">
          <MotionText>Spécialiste carrelage d'Espagne à Bergerac</MotionText>
        </h2>
        <p className="description">
          <MotionText>
            Passionnés par le carrelage espagnol, nous vous proposons des
            collections uniques à Bergerac. Des motifs traditionnels aux designs
            contemporains, découvrez des matériaux d'exception qui sublimeront
            votre intérieur.
          </MotionText>
        </p>

        <Image
          src="/spanishtiles.jpg"
          alt="carreaux d'espagne"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default SpanishTiles;
