import Image from 'next/image';

const Expertise = () => {
  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <h2 className="sub-title">Expertise & Savoir-faire</h2>
      <p className="description">
        Une équipe d'artisans qualifiés guidée par un processus éprouvé. De
        l'étude à la réception, chaque projet bénéficie de notre expertise
        technique et de notre rigueur professionnelle. Une méthode structurée en
        quatre étapes qui garantit des réalisations d'exception, portées par
        notre passion du détail et notre engagement qualité.
      </p>

      <Image
        src="/portfolio/r1.jpg"
        alt="ms carrelage 24"
        width={650}
        height={400}
        className="rounded-lg object-contain object-center"
      />
    </section>
  );
};

export default Expertise;
