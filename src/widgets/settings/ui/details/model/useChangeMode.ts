'use client';

import { useState } from 'react';

import { MODE, type Mode } from '../lib/constants';

const { VIEW, EDIT } = MODE;

export const useChangeMode = () => {
  const [mode, setMode] = useState<Mode>(VIEW);

  const toggleMode = () => {
    return setMode((prev) => (prev === VIEW ? EDIT : VIEW));
  };

  return { mode, toggleMode, isView: mode === VIEW, isEdit: mode === EDIT };
};
