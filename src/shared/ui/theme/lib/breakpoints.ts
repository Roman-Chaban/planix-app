export const BREAKPOINTS = {
  MOBILE: 320,
  MOBILE_LARGE: 640,
  TABLET: 768,
  LAPTOP: 1024,
  DESKTOP: 1280,
  WIDE: 1536,
} as const;

export type Breakpoint = (typeof BREAKPOINTS)[keyof typeof BREAKPOINTS];
