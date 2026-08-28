'use client';

import { useEffect, useRef, useState } from 'react';

export const usePortal = (containerId: string = 'portal-root'): HTMLElement | null => {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const portalRef = useRef<boolean>(false);

  useEffect(() => {
    portalRef.current = false;
    let element = document.getElementById(containerId);

    if (!element) {
      element = document.createElement('div');
      element.id = containerId;
      document.body.appendChild(element);
      portalRef.current = true;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPortalContainer(element);

    return () => {
      if (portalRef.current && element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [containerId]);

  return portalContainer;
};
