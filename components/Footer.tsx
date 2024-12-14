import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa6';
import { FaSquareInstagram, FaGithub } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';
import { MdOutlineSmartphone } from 'react-icons/md';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { cn } from '@/lib/utils';

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
        <Link
          href="/"
          className="mb-2 md:mb-0 hover:text-blue-4 transition-all duration-300 hover:font-bold"
        >
          Accueil
        </Link>
        <Link
          href="/services"
          className="mb-2 md:mb-0 hover:text-blue-4 transition-all duration-300 hover:font-bold"
        >
          Services
        </Link>

        <Link
          href="/about"
          className="mb-2 md:mb-0 hover:text-blue-4 transition-all duration-300 hover:font-bold"
        >
          À propos
        </Link>
        <Link
          href="/contact"
          className=" hover:text-blue-4 transition-all duration-300 hover:font-bold"
        >
          Contact
        </Link>
      </div>

      {/* legals */}

      <div className="flex flex-col gap-2 justify-around w-full">
        <div className="flex gap-4 items-center justify-center ">
          <CiMail />
          <a href="mailto:mustaphatouay@hotmail.com" className="">
            mustaphatouay@hotmail.com
          </a>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <MdOutlineSmartphone />
          <p className="">07 53 67 34 39</p>
        </div>
      </div>
      <Link
        href="/legals"
        className="text-neutral-900 hover:text-blue-4 transition-all duration-300 hover:font-bold"
      >
        Mentions légales
      </Link>
      <p className="">© {currentYear} MS Carrelage 24. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
