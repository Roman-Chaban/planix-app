import { ROUTES } from '@/app/routes';
import { useLocalizedRouter } from '@/shared/lib/hooks';

export const useToolbar = () => {
  const localizedRouter = useLocalizedRouter();

  const handleCreateProject = () => {
    localizedRouter.push(ROUTES.PROJECT_CREATE);
  };

  return {
    handleCreateProject,
  };
};
