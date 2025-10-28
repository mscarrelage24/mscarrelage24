'use client';
import { useState, useEffect } from 'react';

const ResponsiveVideo = () => {
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
    <video
      src={videoSrc}
      loop
      autoPlay
      playsInline
      muted
      className="rounded-lg"
    />
  );
};

export default ResponsiveVideo;
