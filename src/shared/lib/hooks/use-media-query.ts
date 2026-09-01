'use client';

import type { Breakpoint } from '../common/constants';

import { useEffect, useState } from 'react';

export const useMediaQuery = (breakpoint: Breakpoint) => {
  const mediaQuery = `(max-width: ${breakpoint}px)`;

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', handleChange);

    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [mediaQuery]);

  return matches;
};
