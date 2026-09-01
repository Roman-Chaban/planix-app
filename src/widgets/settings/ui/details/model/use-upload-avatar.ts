import { type ChangeEvent, useRef } from 'react';

import { useTranslation } from 'react-i18next';

import { uploadProfileAvatar } from '@/entities/profile';
import { showToast } from '@/entities/toast';
import { NAMESPACE as NS } from '@/shared/i18n';
import { useAppDispatch } from '@/shared/providers/store/model/hooks';
import { TOAST_VARIANT } from '@/shared/ui/toast';

const { SUCCESS, ERROR } = TOAST_VARIANT;

export const useUploadAvatar = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation(NS.SETTINGS);

  const uploadAvatarRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    uploadAvatarRef.current?.click();
  };

  const handleFileChange = async (userId: string, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      await uploadProfileAvatar(userId, file);

      dispatch(
        showToast({
          variant: SUCCESS,
          description: t('profileDetails.toast.success'),
        }),
      );
    } catch (error) {
      dispatch(
        showToast({
          variant: ERROR,
          description: t('profileDetails.toast.error'),
        }),
      );

      console.error(error);
    }

    event.target.value = '';
  };

  return {
    uploadAvatarRef,
    handleUploadClick,
    handleFileChange,
  };
};
