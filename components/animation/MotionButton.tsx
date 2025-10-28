'use client';
import { motion } from 'motion/react';
import { FaArrowDown } from 'react-icons/fa6';

export default function MotionButton({
  children,
  delay = 0.4,
  primary = false,
}: {
  children: React.ReactNode;
  delay?: number;
  primary?: boolean;
}) {
  // Vérifier si children est une string avant d'utiliser includes
  const shouldShowArrow =
    typeof children === 'string' && children.includes('service');

  return (
    <motion.button
      className={`inline-flex items-center gap-2 px-6 h-12 rounded-xl cursor-pointer ${
        primary
          ? 'border border-white/15 bg-zinc-800/95 text-neutral-50'
          : 'border border-white/15 text-white'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {shouldShowArrow && <FaArrowDown className="size-4" />}
      <span className="font-semibold">{children}</span>
    </motion.button>
  );
}
