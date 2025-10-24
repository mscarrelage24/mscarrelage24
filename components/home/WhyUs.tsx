'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { fadeInView } from '@/constants/motionVariants';

const WhyUs = () => {
  const [videoSrc, setVideoSrc] = useState('video-mobile.mp4');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setVideoSrc(e.matches ? 'video1.mp4' : 'video-mobile.mp4');
    };

    handleResize(mediaQuery);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <section className="container section flex-col-center gap-8 md:gap-12">
      <div className="flex-col-center max-w-xl gap-8">
        <motion.h2 className="flex-col-center" {...fadeInView}>
          <span className="sub-title-section md:sub-title">
            Pourquoi choisir
          </span>

          <span className="sub-title-section md:sub-title">
            MS Carrelage à Bergerac ?
          </span>
        </motion.h2>
        <motion.p className="description" {...fadeInView}>
          Artisan carreleur reconnu en Dordogne, notre équipe expérimentée
          intervient dans un rayon de 30 km autour de Bergerac. Nous créons pour
          vous des aménagements durables et élégants. Un savoir-faire reconnu
          pour des réalisations qui traversent le temps.
        </motion.p>
        <motion.video
          src={videoSrc}
          loop
          autoPlay
          playsInline
          className="rounded-lg"
          {...fadeInView}
        />
      </div>
    </section>
  );
};

export default WhyUs;
