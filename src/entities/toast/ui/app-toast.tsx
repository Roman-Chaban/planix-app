'use client';

import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/providers/store/model/hooks';
import { Portal } from '@/shared/ui';
import { Toast } from '@/shared/ui/toast';

import { selectToast } from '../model/selectors';
import { hideToast } from '../model/slice';

export const AppToast = () => {
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const toast = useAppSelector(selectToast);
  const dispatch = useAppDispatch();

  const startClosing = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (!toast) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClosing(false);

    const timer = setTimeout(startClosing, 2000);

    return () => clearTimeout(timer);
  }, [toast]);

  const handleAnimationEnd = () => {
    if (!isClosing) return;

    dispatch(hideToast());
  };

  if (!toast) return null;

  return (
    <Portal containerId="toast-root">
      <Toast
        variant={toast.variant}
        description={toast.description}
        isClosing={isClosing}
        onClose={startClosing}
        onAnimationEnd={handleAnimationEnd}
      />
    </Portal>
  );
};
