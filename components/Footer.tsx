import React from 'react';
import Link from 'next/link';
import { CiMail } from 'react-icons/ci';
import { MdOutlineSmartphone } from 'react-icons/md';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { cn } from '@/lib/utils';
import { links } from '@/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container h-full section flex flex-col items-center justify-center gap-6">
      <Link href="/">
        <AnimatedGradientText>
          <h2
            className={cn(
              `text-2xl md:text-4xl text-center tracking-wide inline animate-gradient bg-gradient-to-r from-[#E4A853] via-[#1B4B9B] to-[#E4A853] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            MS Carrelage 24
          </h2>
        </AnimatedGradientText>
      </Link>

      {/* links */}
      <div className="flex flex-col items-center md:flex-row gap-6">
        {links.map(({ link, href }, i) => (
          <Link
            key={i}
            href={href}
            className="hover:text-[#1B4B9B] text-[18px] text-center hover:font-bold transition-all duration-300"
          >
            {link}
          </Link>
        ))}
      </div>

      {/* legals */}

      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <span>93 Rue Valette 24100 Bergerac</span>
        <div className="flex gap-4 items-center justify-center ">
          <CiMail />
          <a href="mailto:mustaphatouay@hotmail.com" className="">
            mustaphatouay@hotmail.com
          </a>
        </div>

        <a
          href="tel:0753673439"
          className="cursor-pointer flex gap-4 items-center justify-center"
        >
          <MdOutlineSmartphone /> <span>07 53 67 34 39</span>
        </a>
      </div>
      <Link
        href="/mentions-legales"
        className="text-neutral-900 hover:text-blue-4 transition-all duration-300 hover:font-bold"
      >
        Mentions légales
      </Link>
      <p className="">© {currentYear} MS Carrelage 24. Tous droits réservés.</p>
      <p>
        Crée par{' '}
        <a
          className="text-[#1B4B9B] font-bold"
          href="https://pulsar-pixel.com/"
          target="_blank"
        >
          Pulsar Pixel
        </a>
      </p>
    </footer>
  );
};

export default Footer;
