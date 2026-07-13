import { type ChangeEvent, useRef } from 'react';

import { uploadProfileAvatar } from '@/entities/profile';

export const useUploadAvatar = () => {
  const uploadAvatarRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    uploadAvatarRef.current?.click();
  };

  const handleFileChange = async (userId: string, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    await uploadProfileAvatar(userId, file);

    event.target.value = '';
  };

  return {
    uploadAvatarRef,
    handleUploadClick,
    handleFileChange,
  };
};
