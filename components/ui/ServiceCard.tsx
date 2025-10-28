'use client';
import Image from 'next/image';
import React from 'react';
import { Lens } from './Lens';
import { useState } from 'react';
import { motion } from 'motion/react';

const ServiceCard = ({
  title,
  text,
  imgSrc,
  icon,
}: {
  title: string;
  text: string;
  imgSrc: string;
  icon: React.ReactNode;
}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="w-full relative rounded-3xl overflow-hidden max-w-sm p-8 border">
      <div className="relative z-10">
        <div className="relative">
          <Lens hovering={hovering} setHovering={setHovering}>
            <Image
              src={imgSrc}
              alt="image"
              width={500}
              height={500}
              className="rounded-2xl object-contain object-center "
            />
          </Lens>
        </div>
        <motion.div
          animate={{
            filter: hovering ? 'blur(2px)' : 'blur(0px)',
          }}
          className="py-4 relative z-20"
        >
          <h3 className="text-xl text-left font-bold flex gap-4">
            <span>{icon}</span>
            <span>{title}</span>
          </h3>
          <p className="text-left mt-4 text-sm text-neutral-700 lg:text-base">
            {text}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCard;
