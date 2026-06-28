'use client';

import { useLocalStorage } from '@/shared/lib/hooks';

import { MODE, type Mode } from '../lib/constants';

const { VIEW, EDIT } = MODE;

export const useChangeMode = () => {
  const [mode, setMode, hydrated] = useLocalStorage<Mode>(`edit-mode`, VIEW);

  const toggleMode = () => {
    return setMode((prev) => (prev === VIEW ? EDIT : VIEW));
  };

  return {
    mode,
    toggleMode,
    isView: mode === VIEW,
    isEdit: mode === EDIT,
    hydrated,
  };
};
