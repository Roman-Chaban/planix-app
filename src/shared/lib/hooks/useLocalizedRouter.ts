import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { buildHref } from '@/shared/lib/routing/buildHref';

export const useLocalizedRouter = () => {
  const router = useRouter();

  const { i18n } = useTranslation();

  const localizedPush = (path: string) => {
    router.push(buildHref(path, i18n.language));
  };

  return {
    ...router,
    push: localizedPush,
  };
};
