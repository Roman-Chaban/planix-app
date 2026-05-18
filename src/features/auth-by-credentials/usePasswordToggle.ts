'use client';

import { useState } from 'react';

export const usePasswordToggle = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggle = () => setIsVisible((toggleable) => !toggleable);

  return {
    isVisible,
    toggle,
  };
};
