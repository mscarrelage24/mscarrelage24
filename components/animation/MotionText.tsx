'use client';
import { motion } from 'motion/react';

interface MotionTextProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  duration?: number;
  amount?: number;
}

export default function MotionText({
  children,
  delay = 0,
  y = 0,
  once = true,
  duration = 0.8,
  amount = 0.15,
}: MotionTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.17, 0.55, 0.55, 1],
      }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.span>
  );
}
