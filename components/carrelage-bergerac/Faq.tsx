'use client';
import React, { useState } from 'react';
import useMediaQuery, { BREAKPOINTS } from '@/hooks/useMediaQuery';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface FaqItem {
  id: string;
  title: string;
  answer: string;
}
const faq = [
  {
    id: '0',
    question: `Quel est le prix moyen de la pose de carrelage à Bergerac ?`,
    answer: `Le coût dépend du type de pose et des matériaux. Pour une terrasse ou un projet avec des contraintes techniques (découpes complexes, pente, etc.), le tarif peut varier. Nous proposons des devis gratuits et personnalisés pour évaluer précisément votre projet.`,
  },
  {
    id: '1',
    question: `Comment choisir son carrelage pour une terrasse à Bergerac ?`,
    answer: `Privilégiez un carrelage antidérapant (R10 minimum) et résistant au gel, essentiel sous le climat périgourdin. Le grès cérame émaillé ou la pierre reconstituée sont excellents pour les terrasses bergeracoises. Nous vous guidons vers les meilleurs matériaux adaptés à votre usage et à l’esthétique de votre maison.`,
  },
  {
    id: '2',
    question: `Faut-il prévoir un délai particulier pour la pose de carrelage en Dordogne ?`,
    answer: `Oui, surtout pour les chantiers extérieurs. Évitez les périodes de gel hivernal et privilégiez le printemps ou l’été pour les terrasses. À Bergerac, nous adaptons nos interventions aux conditions météorologiques pour garantir une pose durable.`,
  },
  {
    id: '3',
    question: `Intervenez-vous uniquement à Bergerac centre ?`,
    answer: `Non, nous couvrons Bergerac et toutes les communes dans un rayon de 30km (Prigonrieux, Creysse, Lamonzie-Montastruc, Monbazillac, Saint-Laurent-des-Vignes…). Les déplacements sont inclus dans nos devis pour toute la zone.`,
  },
  {
    id: '4',
    question: `Proposez-vous la rénovation de carrelage ancien ?`,
    answer: `Absolument. Nous rénovons et réparons les carrelages abîmés, les joints fissurés, et même les sols en tomettes typiques du Périgord. Nous preservons le charme de l’ancien avec des techniques modernes et durables.`,
  },
  {
    id: '5',
    question: `Quel carrelage choisir pour une salle de bain à Bergerac ?`,
    answer: `Optez pour un carrelage antidérapant (R9-R10) et imperméable. Le grès cérame est idéal pour les salles de bain bergeracoises grâce à sa résistance à l'humidité. Nous vous conseillons sur les finitions (mat, brillant, aspect pierre) selon vos goûts.`,
  },
  {
    id: '6',
    question: `Comment entretenir son carrelage extérieur à Bergerac ?`,
    answer: `Un nettoyage régulier à l'eau et au savon neutre suffit. Pour éviter la mousse, traitez annuellement avec un produit anti-mousse. Nous recommandons un jointement au ciment polymère pour une meilleure étanchéité face aux pluies périgourdines.`,
  },
  {
    id: '7',
    question: `Quelle est la différence entre carrelage et faïence ?`,
    answer: `Le carrelage est plus épais et résistant, idéal pour les sols et les pièces humides. La faïence est plus fragile et réservée aux murs. À Bergerac, nous utilisons majoritairement du carrelage pour sa durabilité face au climat local.`,
  },
  {
    id: '8',
    question: `Acceptez-vous les petits chantiers de carrelage ?`,
    answer: `Absolument ! Nous intervenons pour des projets de toutes tailles : réparation d'une douche, remplacement de quelques carreaux, ou création d'une terrasse complète. Chaque projet mérite notre expertise d'artisan carreleur.`,
  },
];

export const faqStructuredData = {
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    '@id': item.id,
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '0px',
  });
  // Utiliser le hook pour les media queries
  const isTablet = useMediaQuery(BREAKPOINTS.TABLET);
  const isMobile = useMediaQuery(BREAKPOINTS.MOBILE);
  const prefersReducedMotion = useMediaQuery(BREAKPOINTS.REDUCED_MOTION);

  // Vérifier si on doit désactiver les animations
  const shouldDisableAnimations = isMobile || isTablet || prefersReducedMotion;

  // Fonction pour générer les props d'animation avec délai optionnel
  const getAnimationProps = (delay?: number) => {
    if (shouldDisableAnimations) {
      return {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
      };
    }

    return {
      initial: { opacity: 0, y: 50 },
      animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        delay: delay || 0,
      },
    };
  };
  return (
    <section
      id="faq-carrelage-bergerac"
      className="section container mx-auto"
      ref={ref}
    >
      <motion.h2 {...getAnimationProps()} className="sub-title mb-12">
        Vos Questions sur
        <br className="hidden md:block" /> le Carrelage à Bergerac
      </motion.h2>

      {faq.map(({ id, question, answer }, index) => (
        <motion.div
          key={index}
          {...getAnimationProps(0.2)}
          className="p-4 border border-black-blue/30 mb-4 rounded-lg mx-auto xl:w-4/5"
        >
          <button
            className="flex justify-between w-full"
            onClick={() => toggleFaq(index)}
          >
            <h3 className="font-normal">{question}</h3>
            <svg
              className="fill-[#C68A37] shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  openIndex === index ? '!rotate-180' : ''
                }`}
              />
            </svg>
          </button>
          <div
            id={`answer-${id}`}
            role="region"
            aria-labelledby={`question-${id}`}
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-600 text-sm ${
              openIndex === index
                ? 'grid-rows-[1fr] opacity-100 mt-4 mb-2'
                : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <p className="overflow-hidden">{answer}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Faq;
