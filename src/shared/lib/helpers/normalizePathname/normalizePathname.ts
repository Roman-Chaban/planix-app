import { isLocale } from '@/shared/lib/helpers/isLocale/isLocale';

export const normalizePathname = (pathname: string): string => {
  const pathnameWithoutQuery = pathname.split('?')[0];
  const pathnameSegments = pathnameWithoutQuery.split('/');

  const maybeLocaleSegment = pathnameSegments[1];

  if (isLocale(maybeLocaleSegment)) {
    const pathWithoutLocale = pathnameSegments.slice(2).join('/');
    return '/' + pathWithoutLocale;
  }

  return pathnameWithoutQuery;
};
