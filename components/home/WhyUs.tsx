import ResponsiveVideo from './ResponsiveVideo';

const WhyUs = () => {
  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center max-w-xl gap-8">
        <h2 className="sub-title">
          Pourquoi choisir <br /> MS Carrelage à Bergerac ?
        </h2>
        <p className="description">
          Artisan carreleur reconnu en Dordogne, notre équipe expérimentée
          intervient dans un rayon de 30 km autour de Bergerac. Nous créons pour
          vous des aménagements durables et élégants. Un savoir-faire reconnu
          pour des réalisations qui traversent le temps.
        </p>
        <ResponsiveVideo />
      </div>
    </section>
  );
};

export default WhyUs;
