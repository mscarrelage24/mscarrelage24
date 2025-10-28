import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import Image from 'next/image';

export function BentoServices() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const SkeletonOne = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]   border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image
      src={'/grid/spanish.jpg'}
      alt="carrelage espagnol"
      width={1000}
      height={800}
      className="object-cover object-center rounded-lg "
    />
  </div>
);
const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]   border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image
      src="/grid/seville.jpg"
      alt="carrelage espagnol"
      width={1000}
      height={800}
      className="object-cover object-center rounded-lg"
    />
  </div>
);
const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]   border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image
      src="/grid/valence.jpg"
      alt="carrelage espagnol"
      width={1000}
      height={800}
      className="object-cover object-center rounded-lg"
    />
  </div>
);
const SkeletonFour = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image
      src="/grid/azulejo.jpg"
      alt="carrelage espagnol"
      width={1000}
      height={800}
      className="object-cover object-center rounded-lg"
    />
  </div>
);
const items = [
  {
    title: 'Carrelage espagnol',
    description: `L'excellence du carrelage espagnol. Des finitions luxueuses pour des espaces spectaculaires.`,
    header: <SkeletonOne />,
    className: 'md:col-span-2',
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Séville',
    description: `Des motifs géométriques aux couleurs intenses pour des intérieurs d'exception.`,
    header: <SkeletonTwo />,
    className: 'md:col-span-1',
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Mosaïques & Décoratifs',
    description: `L'art des azulejos. Des motifs traditionnels aux designs contemporains.`,
    header: <SkeletonFour />,
    className: 'md:col-span-1',
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Valence',
    description:
      'Des designs contemporains aux finitions brillantes pour un style moderne et raffiné.',
    header: <SkeletonThree />,
    className: 'md:col-span-2',
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
