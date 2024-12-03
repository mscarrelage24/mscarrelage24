'use client';
import React, { useState, useRef } from 'react';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMediaQuery, { BREAKPOINTS } from '@/hooks/useMediaQuery';

// Types
interface LabelInputContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

const BottomGradient: React.FC = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};

export function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '0px',
  });

  // Utiliser le hook pour les media queries
  const isTablet = useMediaQuery(BREAKPOINTS.TABLET);
  const isMobile = useMediaQuery(BREAKPOINTS.MOBILE);
  const prefersReducedMotion = useMediaQuery(BREAKPOINTS.REDUCED_MOTION);

  // Vérifier si on doit désactiver les animations
  const shouldDisableAnimations = isMobile || isTablet || prefersReducedMotion;

  // Props d'animation conditionnels
  const animationProps = shouldDisableAnimations
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
      }
    : {
        initial: { opacity: 0, y: 50 },
        animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
        transition: { duration: 0.8, ease: 'easeInOut' },
      };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current!);
      //   à changer ici
      const response = await fetch('https://formspree.io/f/myzggwzz', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          alert(
            'Il y a eu un problème avec votre soumission: ' +
              JSON.stringify(data['errors'])
          );
        } else {
          alert('Il y a eu un problème avec votre soumission.');
        }
      }
    } catch (error) {
      alert(
        'Il y a eu une erreur en envoyant le formulaire: ' +
          (error as Error).message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setIsSubmitted(false);
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-[url('/hero-contact.jpg')] bg-center bg-cover bg-blend-darken bg-black/60"
    >
      <motion.div
        {...animationProps}
        className="max-w-md w-full mx-auto rounded-lg p-4 md:p-8 shadow-input bg-slate-100 border border-zinc-300"
      >
        <h2 className="font-bold text-xl text-neutral-800">Contactez-nous</h2>

        {isSubmitted ? (
          <div className="flex flex-col gap-4">
            <p className="text-purple font-bold mt-4">Message envoyé !</p>
            <button
              className={cn(
                'h-11 px-8 py-2 inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative group animate-rainbow cursor-pointer border-0 bg-[length:200%] text-primary-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] text-black',
                'before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]',
                'bg-[linear-gradient(#f5f5f5,#f5f5f5),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]'
              )}
              onClick={handleReset}
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form ref={formRef} className="mt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">Nom</Label>
                <Input
                  id="firstname"
                  name="firstname"
                  placeholder="Nom"
                  type="text"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Prénom</Label>
                <Input
                  id="lastname"
                  name="lastname"
                  placeholder="Prénom"
                  type="text"
                  required
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="exemple@gmail.com"
                type="email"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                placeholder=""
                className="h-24 w-full border-none dark:bg-zinc-800 dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] dark:focus-visible:ring-neutral-600"
                required
              />
            </LabelInputContainer>

            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-zinc-300 px-4 py-2 rounded-lg hover:bg-amber-2 transition-all duration-300"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'} &rarr;
              <BottomGradient />
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
