'use client';
import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour gérer les media queries
 * @param query - La media query à surveiller (ex: '(max-width: 768px)')
 * @returns boolean - True si la media query correspond, false sinon
 */
const useMediaQuery = (query: string): boolean => {
  // Par défaut, on suppose que c'est un appareil mobile pour le SSR
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Vérifier si window est disponible (côté client uniquement)
    if (typeof window !== 'undefined') {
      const media: MediaQueryList = window.matchMedia(query);

      // Définir l'état initial
      setMatches(media.matches);

      // Créer un gestionnaire d'événements pour les changements
      const listener = (e: MediaQueryListEvent): void => setMatches(e.matches);

      // Ajouter le listener
      media.addEventListener('change', listener);

      // Nettoyer
      return () => media.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;

// Types d'utilisation
type MediaQueryProps = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  prefersReducedMotion: boolean;
};

// Exemple d'utilisation avec des breakpoints constants
export const BREAKPOINTS = {
  MOBILE: '(max-width: 768px)',
  TABLET: '(min-width: 769px) and (max-width: 1024px)',
  DESKTOP: '(min-width: 1025px)',
  REDUCED_MOTION: '(prefers-reduced-motion: reduce)',
} as const;

// Hook composé pour gérer plusieurs media queries
export const useResponsive = (): MediaQueryProps => {
  const isMobile = useMediaQuery(BREAKPOINTS.MOBILE);
  const isTablet = useMediaQuery(BREAKPOINTS.TABLET);
  const isDesktop = useMediaQuery(BREAKPOINTS.DESKTOP);
  const prefersReducedMotion = useMediaQuery(BREAKPOINTS.REDUCED_MOTION);

  return {
    isMobile,
    isTablet,
    isDesktop,
    prefersReducedMotion,
  };
};
