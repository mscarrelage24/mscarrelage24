import { KeyPoints } from './KeyPoints';

const Philosophy = () => {
  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center max-w-xl gap-6">
        <h2 className="flex-col-center">
          <span className="sub-title">Notre Philosophie :</span>
          <span className="sub-title">L'Excellence du Détail</span>
        </h2>
        <p className="description">
          Au-delà de la simple pose de carrelage, nous cultivons l'art du
          travail bien fait. Chaque projet bénéficie de notre expertise
          artisanale et d'un accompagnement personnalisé. De la sélection des
          matériaux aux finitions, nous garantissons des réalisations durables
          qui traversent le temps.
        </p>
        <KeyPoints />
      </div>
    </section>
  );
};

export default Philosophy;
