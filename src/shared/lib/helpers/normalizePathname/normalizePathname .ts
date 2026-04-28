import { isLocale } from '@/shared/lib/helpers/isLocale/isLocale';

export const normalizePathname = (pathname: string) => {
  const clean = pathname.split('?')[0];
  const segments = clean.split('/');

  if (isLocale(segments[1])) {
    return '/' + segments.slice(2).join('/');
  }

  return clean;
};
