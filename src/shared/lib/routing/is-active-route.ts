import { getCleanPathname } from '@/shared/lib/routing/get-clean-pathname';

const normalize = (path: string) => path.replace(/\/$/, '');

export const isActiveRoute = (currentPath: string, href: string) => {
  const current = normalize(getCleanPathname(currentPath));
  const target = normalize(href);

  if (target === '/') return current === '/';

  return current === target || current.startsWith(target + '/');
};
