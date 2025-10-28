'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import MenuSvg from './ui/MenuSvg';
import AnimatedGradientText from './ui/animated-gradient-text';
import { cn } from '@/lib/utils';

const links = [
  {
    link: 'Accueil',
    href: '/',
  },
  {
    link: 'Services',
    href: '/services',
  },

  {
    link: 'À propos',
    href: '/about',
  },
  {
    link: 'Contact',
    href: '/contact',
  },
];

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleLinkClick = () => {
    enablePageScroll();
    setOpenNavigation(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenNavigation(false);
        enablePageScroll();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full">
      <nav
        ref={navRef}
        className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-4xl m-4 py-4 px-6 lg:px-8 rounded-md bg-black/70 backdrop-blur-md"
      >
        {/* Logo */}

        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            <AnimatedGradientText>
              <p
                className={cn(
                  `font-bold md:text-lg text-center tracking-wide inline animate-gradient bg-gradient-to-r from-[#E4A853] via-[#336AAB] to-[#E4A853] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                MS Carrelage 24
              </p>
            </AnimatedGradientText>{' '}
          </Link>

          {/* Menu Button - Only visible on mobile */}
          <button
            className="md:hidden p-2 rounded-md border-2 border-slate-200 hover:border-amber-4 transition-colors duration-300"
            onClick={toggleNavigation}
            aria-label="Toggle menu"
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`
          md:flex md:items-center md:gap-8
          w-full md:w-auto
          ${openNavigation ? 'flex' : 'hidden'}
          flex-col md:flex-row
          absolute md:relative
          top-full md:top-auto
          left-0 md:left-auto
          mt-2 md:mt-0
          p-4 md:p-0
          bg-black md:bg-transparent
          rounded-md
          border md:border-0
          border-amber-4
          space-y-4 md:space-y-0
        `}
        >
          {links.map(({ link, href }) => (
            <Link
              key={link}
              href={href}
              onClick={handleLinkClick}
              className="text-white hover:text-amber-4 transition-all duration-300 hover:font-bold text-center md:text-left"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
