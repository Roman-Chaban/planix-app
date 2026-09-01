'use client';

import type { UseResponsiveValueOptions } from './model/types';

import { useMediaQuery } from './use-media-query';

export const useResponsiveValue = <T>({
  largeScreenValue,
  smallScreenValue,
  breakpoint,
}: UseResponsiveValueOptions<T>): T => {
  const isSmallScreen = useMediaQuery(breakpoint);

  return isSmallScreen ? smallScreenValue : largeScreenValue;
};
