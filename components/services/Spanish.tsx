import { BentoServices } from './BentoServices';

const Spanish = () => {
  return (
    <section className="container section flex-col-center gap-10">
      <div className="flex-col-center max-w-xl gap-6">
        <h2 className="sub-title">Nos Sélections Espagnoles</h2>
        <p className="description">
          Spécialiste du carrelage espagnol à Bergerac, nous vous proposons les
          plus belles collections ibériques. Des matériaux d'exception et des
          designs uniques pour transformer votre intérieur en un lieu
          remarquable.
        </p>
      </div>
      <BentoServices />
    </section>
  );
};

export default Spanish;
