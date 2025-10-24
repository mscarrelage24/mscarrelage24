'use client';

import { cn } from '@/lib/utils';
import { AnimatedList } from '@/components/ui/animated-list';

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
}

let notifications = [
  {
    name: 'Expertise artisanale',
    description: 'MS Carrelage 24',

    icon: '👷‍♂️',
    color: '#00C9A7',
  },
  {
    name: 'Conseils personnalisés',
    description: 'MS Carrelage 24',

    icon: '👤',
    color: '#E4A853',
  },
  {
    name: 'Matériaux premium',
    description: 'MS Carrelage 24',

    icon: '💠',
    color: '#FF3D71',
  },
  {
    name: 'Service attentif',
    description: 'MS Carrelage 24',

    icon: '💬',
    color: '#1B4B9B',
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',

        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]'
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function KeyPoints({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-[400px] w-full flex-col p-6 overflow-hidden rounded-lg  bg-slate-100',
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
