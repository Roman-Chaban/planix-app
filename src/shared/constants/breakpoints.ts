export const BREAKPOINTS = {
  MOBILE: '320',
  MOBILE_LARGE: '640',
  TABLET: '768',
  LAPTOP: '1024',
  DESKTOP: '1280',
  WIDE: '1536',
} as const;

export const MEDIA = {
  MOBILE: `(max-width: ${BREAKPOINTS.MOBILE}px)`,
  MOBILE_LARGE: `max-width: ${BREAKPOINTS.MOBILE_LARGE}px`,
  TABLET: `(max-width: ${BREAKPOINTS.TABLET}px)`,
  LAPTOP: `(max-width: ${BREAKPOINTS.LAPTOP}px)`,
  DESKTOP: `(max-width: ${BREAKPOINTS.DESKTOP}px)`,
  WIDE: `max-width: ${BREAKPOINTS.WIDE}px`,
};
