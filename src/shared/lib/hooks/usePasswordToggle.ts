'use client';

import { useState } from 'react';

export const usePasswordToggle = () => {
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  const toggleVisibility = (name: string, isVisible: boolean) => {
    setVisible((prev) => ({
      ...prev,
      [name]: isVisible,
    }));
  };

  const getVisibility = (name: string) => !!visible[name];

  return { toggleVisibility, getVisibility };
};
