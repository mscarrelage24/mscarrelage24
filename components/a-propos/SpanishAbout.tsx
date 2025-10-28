import { FocusCards } from '@/components/ui/FocusCards';
import { cardsAbout } from '@/constants';

const SpanishAbout = () => {
  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center gap-6">
        <h2 className="sub-title">Partenaires Espagnols</h2>
        <p className="description">
          Nous collaborons avec les meilleurs fabricants de carrelage espagnols,
          sélectionnés pour leur excellence et leur innovation. Des collections
          exclusives importées directement de Valence et Castellón, centres
          historiques du carrelage ibérique.
        </p>
      </div>
      <FocusCards cards={cardsAbout} />
    </section>
  );
};

export default SpanishAbout;
