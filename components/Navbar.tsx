'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import MenuSvg from './ui/MenuSvg';
import AnimatedGradientText from './ui/animated-gradient-text';
import { cn } from '@/lib/utils';
import { links } from '@/constants';

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
        aria-label="Navigation principale"
        className="relative flex flex-col justify-between items-center w-full max-w-xl m-4 p-2 rounded-xl
        bg-neutral-800/80 backdrop-blur-lg shadow-xl border border-[#E4A853]/25"
      >
        {/* Logo + bouton menu toujours visible */}
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="hidden sm:block">
            <AnimatedGradientText>
              <p
                className={cn(
                  `font-bold md:text-lg text-center tracking-wide inline animate-gradient bg-gradient-to-r from-[#E4A853] via-[#336AAB] to-[#E4A853] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                MS Carrelage 24
              </p>
            </AnimatedGradientText>
          </Link>
          <a
            href="tel:0753673439"
            className="font-bold cursor-pointer text-neutral-100 text-lg"
          >
            📞 07 53 67 34 39
          </a>

          <button
            className="p-2 rounded-lg border-2 border-[#E4A853] cursor-pointer"
            onClick={toggleNavigation}
            aria-label="Menu principal"
            aria-expanded={openNavigation}
            aria-controls="main-menu"
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>

        {/* Menu mobile (même sur desktop) */}
        <div
          id="main-menu"
          className={`${
            openNavigation
              ? 'flex bg-[#f5f5f5]/90 border border-[#E4A853]/25 backdrop-blur-xl mt-4'
              : 'hidden'
          } flex-col w-full rounded-xl gap-6 p-4 transition-all duration-300`}
        >
          {links.map(({ link, href }, i) => (
            <Link
              key={i}
              href={href}
              onClick={handleLinkClick}
              className="text-neutral-800 text-[18px] text-center hover:font-bold transition-all duration-300"
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
