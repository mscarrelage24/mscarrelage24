import { Variants } from 'motion';

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.17, 0.55, 0.55, 1] as [number, number, number, number],
    },
  },
};

export const fadeInView = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1 },
  viewport: { once: true, amount: 0.15 },
};
