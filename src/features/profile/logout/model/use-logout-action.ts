import { useTranslation } from 'react-i18next';

import { closeModal } from '@/entities/modal';
import { showToast } from '@/entities/toast';
import { ROUTES } from '@/shared/config';
import { NAMESPACE as NS } from '@/shared/i18n';
import { useLocalizedRouter } from '@/shared/lib/hooks';
import { useAppDispatch } from '@/shared/providers/store/model/hooks';

import { TOAST_VARIANT } from '@/shared/ui/toast';

import { useLogout } from './use-logout';

const { DASHBOARD } = ROUTES;
const { SUCCESS, ERROR } = TOAST_VARIANT;

export const useLogoutAction = () => {
  const { t } = useTranslation(NS.SETTINGS);

  const localizedRouter = useLocalizedRouter();
  const dispatch = useAppDispatch();

  const { logout, isLoading } = useLogout();

  const handleLogout = async () => {
    try {
      await logout();

      dispatch(closeModal());

      dispatch(
        showToast({
          variant: SUCCESS,
          description: t('logout.toast.logoutSuccess'),
        }),
      );

      localizedRouter.replace(DASHBOARD);
    } catch {
      dispatch(
        showToast({
          variant: ERROR,
          description: t('logout.toast.logoutError'),
        }),
      );
    }
  };

  return {
    handleLogout,
    isLoading,
  };
};
