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
            travail bien fait, nous transformons vos projets de carrelage en
            réalité. Que vous soyez un particulier ou un professionnel à
            Bergerac, nous vous garantissons 👇
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
                Une pose précise et durable, avec 15 ans d&nbsp;expérience sur
                Bergerac et ses alentours.
              </span>
            </li>
            <li className="flex space-x-4">
              <span>✅</span>
              <span>
                Un accompagnement, du choix du carrelage à la finition.
              </span>
            </li>
          </ul>
          <p className="description">
            Cette exigence nous vaut une réputation d&nbsp;excellence auprès de
            nos clients bergeracois. Vous aussi, profitez de notre expertise !
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
