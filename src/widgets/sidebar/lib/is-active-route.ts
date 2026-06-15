import { getCleanPathname } from '@/shared/lib/routing/getCleanPathname';

const normalize = (path: string) => path.replace(/\/$/, '');

export const isActiveRoute = (
  currentPath: string | null | undefined,
  href: string,
) => {
  const safeCurrent = currentPath ?? '/';

  const current = normalize(getCleanPathname(safeCurrent));
  const target = normalize(href);

  if (target === '/') return current === '/';

  return current === target || current.startsWith(target + '/');
};
