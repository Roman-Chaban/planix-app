'use client';

import type { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

type UseHeaderAnimationParams = {
  scopeRef: RefObject<HTMLElement | null>;
};

export const useHeaderAnimation = ({ scopeRef }: UseHeaderAnimationParams) => {
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from('[data-animate="title"]', {
        y: 12,
        opacity: 0,
        duration: 0.35,
        ease: 'power2.out',
      }).from(
        '[data-animate="actions"] > *',
        {
          x: 15,
          opacity: 0,
          stagger: 0.08,
          duration: 0.3,
          ease: 'power2.out',
        },
        '-=0.2',
      );
    },
    { scope: scopeRef },
  );
};
