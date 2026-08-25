export const buildHref = (path: string, locale: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `/${locale}${normalizedPath}`;
};
