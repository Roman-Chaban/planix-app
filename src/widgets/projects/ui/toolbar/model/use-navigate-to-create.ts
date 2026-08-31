import { ROUTES } from '@/shared/config';
import { useLocalizedRouter } from '@/shared/lib/hooks';

const { PROJECT_CREATE } = ROUTES;

export const useNavigateToCreate = () => {
  const localizedRouter = useLocalizedRouter();

  const navigateToCreate = () => {
    localizedRouter.push(PROJECT_CREATE);
  };

  return { navigateToCreate };
};
