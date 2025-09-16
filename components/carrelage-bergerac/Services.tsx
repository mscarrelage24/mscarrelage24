import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = () => {
  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center max-w-xl gap-8">
        <h2 className="flex-col-center sub-title">
          Nous sommes les carreleurs numéro 1 à Bergerac
        </h2>
        <div className="flex flex-col space-y-4">
          <p className="description">
            Grâce à notre savoir-faire artisanal et notre engagement pour un
            travail bien fait, nous donnons vie à vos projets. Que vous soyez un
            particulier ou un professionnel dans la région bergeracoise, nous
            vous garantissons 👇
          </p>
          <ul className="text-base md:text-lg text-neutral-700 flex flex-col space-y-2">
            <li className="flex space-x-4">
              <span>✅</span>
              <span>
                Des matériaux adaptés (grès cérame, pierre naturelle, etc.) pour
                résister au climat périgourdin.
              </span>
            </li>
            <li className="flex space-x-4">
              <span>✅</span>
              <span>
                Une pose précise et durable, forte de 15 ans d’expérience
                locale.
              </span>
            </li>
            <li className="flex space-x-4">
              <span>✅</span>
              <span>
                Un accompagnement, du choix du carrelage à la finition.
              </span>
            </li>
          </ul>
          <Image
            src="/tiles-page/carreau-bergerac-1.jpg"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
            alt="carreleurs à bergerac"
          />
          <p className="description">
            Notre sélection de matériaux inclut des produits adaptés au climat
            parfois capricieux du Périgord. Le grès cérame, par exemple, offre
            une résistance optimale au gel et aux intempéries, tandis que la
            pierre naturelle apporte un charme authentique et une longévité
            remarquable. Nous travaillons avec des fournisseurs reconnus pour
            leur qualité et leur durabilité.
          </p>

          <p className="description">
            Cette exigence nous vaut une réputation d'excellence auprès de nos
            clients. Vous aussi, profitez de notre expertise !
          </p>
        </div>
        <Link href="/contact">
          <button className="inline-flex items-center gap-2 border border-white/15 bg-zinc-800/95 text-neutral-50 px-6 h-12 rounded-xl cursor-pointer">
            <span>📞</span>
            <span className="font-semibold">Prenez Contact</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
