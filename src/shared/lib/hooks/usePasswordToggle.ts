'use client';

import { useState } from 'react';

export function usePasswordToggle() {
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  const toggle = (name: string) => {
    setVisible((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const getVisibility = (name: string) => !!visible[name];

  return { toggle, getVisibility };
}
