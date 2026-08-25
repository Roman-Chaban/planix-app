'use client';

import type { Breakpoint } from '@/shared/ui/theme';

import { useMediaQuery } from './useMediaQuery';

export const useResponsiveValue = <T>(
  largeScreenValue: T,
  smallScreenValue: T,
  breakpoint: Breakpoint,
): T => {
  const isLargeScreen = useMediaQuery(breakpoint);

  return isLargeScreen ? largeScreenValue : smallScreenValue;
};
