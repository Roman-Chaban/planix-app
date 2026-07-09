import { ROUTES } from '@shared/constants/common';

const { HOME } = ROUTES;

export const isActiveRoute = (currentPath: string, href: string) => {
  if (href === HOME) return currentPath === HOME;

  return currentPath === href || currentPath.startsWith(href + HOME);
};
