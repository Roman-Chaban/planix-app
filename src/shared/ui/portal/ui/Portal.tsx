'use client';

import { type ReactNode, type FC, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
  containerId?: string;
};

export const Portal: FC<PortalProps> = ({
  children,
  containerId = 'portal-root',
}) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let portalElement = document.getElementById(containerId);

    if (!portalElement) {
      portalElement = document.createElement('div');
      portalElement.setAttribute('id', containerId);
      document.body.appendChild(portalElement);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setContainer(portalElement);
  }, [containerId]);

  return container ? createPortal(children, container) : null;
};
