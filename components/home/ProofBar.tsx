import React from 'react';
import {
  CalendarCheck,
  CheckCircle,
  MapPin,
  Users,
  Shield,
  MessageCircle,
  Medal,
} from 'lucide-react';
import Marquee from '@/components/ui/marquee';
import { cn } from '@/lib/utils';

const proof = [
  {
    title: '25 ans +',
    text: `d'expériences`,
    icon: <CalendarCheck className="text-2xl" color="url(#blue-gradient)" />,
  },
  {
    title: '100 +',
    text: `chantiers effectués`,
    icon: <CheckCircle className="text-2xl" color="url(#blue-gradient)" />,
  },
  {
    title: '30 km',
    text: `autour de Bergerac`,
    icon: <MapPin className="text-2xl" color="url(#blue-gradient)" />,
  },

  {
    title: '100%',
    text: 'projets garantis',
    icon: <Shield className="text-2xl" color="url(#blue-gradient)" />,
  },
  {
    title: '7/7',
    text: 'réponse rapide',
    icon: <MessageCircle className="text-2xl" color="url(#blue-gradient)" />,
  },
  {
    title: 'Conseils',
    text: 'personnalisés',
    icon: <Users className="text-2xl" color="url(#blue-gradient)" />,
  },
  {
    title: 'Artisan',
    text: 'certifié',
    icon: <Medal className="text-2xl" color="url(#blue-gradient)" />,
  },
];

const ProofBarCard = ({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative w-fit cursor-pointer overflow-hidden rounded-xl border p-4 flex items-center justify-center',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]'
      )}
    >
      <svg className="w-0 h-0">
        <defs>
          <linearGradient id="blue-gradient">
            <stop offset="0%" stopColor="#4D74B5" />
            <stop offset="100%" stopColor="#0F2F61" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-row justify-center items-center gap-4">
        {icon}
        <div className="flex gap-1 items-center justify-center">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-sm"> {text}</p>
        </div>
      </div>
    </div>
  );
};

export function ProofBar() {
  return (
    <section className="2xl:max-w-7xl flex flex-col justify-center items-center mx-auto">
      <div className="relative flex py-12 w-full flex-col items-center justify-center overflow-hidden ">
        <Marquee pauseOnHover className="[--duration:40s] ">
          {proof.map((review) => (
            <ProofBarCard key={review.title} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-100 dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-100 dark:from-background"></div>
      </div>
    </section>
  );
}
