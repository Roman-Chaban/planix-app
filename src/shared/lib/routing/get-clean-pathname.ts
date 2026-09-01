import { isLocale } from '@/shared/lib/routing/is-locale';

export const getCleanPathname = (pathname: string): string => {
  const path = pathname.split('?')[0];

  const segments = path.split('/');
  const maybeLocale = segments[1];

  const withoutLocale = isLocale(maybeLocale)
    ? segments.slice(2).join('/')
    : segments.slice(1).join('/');

  return '/' + (withoutLocale || '');
};
