import Image from 'next/image';
import React from 'react';

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
  return (
    <div className="w-full relative rounded-3xl overflow-hidden max-w-sm p-8 border">
      <div className="relative z-10">
        <div className="relative">
          <Image
            src={imgSrc}
            alt="image"
            width={500}
            height={500}
            className="rounded-2xl object-contain object-center "
          />
        </div>
        <div className="py-4 relative z-20">
          <h3 className="text-xl text-left font-bold flex gap-4">
            <span>{icon}</span>
            <span>{title}</span>
          </h3>
          <p className="text-left mt-4 text-sm text-neutral-700 lg:text-base">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
