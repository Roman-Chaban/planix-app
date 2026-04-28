import { useState } from 'react';

export const usePasswordToggle = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggle = () => setVisible((toggleable) => !toggleable);

  return {
    visible,
    toggle,
  };
};
