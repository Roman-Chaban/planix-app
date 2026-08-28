'use client';

import type { WithChildren } from '@types';

import { createPortal } from 'react-dom';

import { usePortal } from '@/shared/lib/hooks';

type PortalProps = {
  containerId?: string;
} & WithChildren;

export const Portal = ({ children, containerId = 'portal-root' }: PortalProps) => {
  const portalContainer = usePortal(containerId);

  if (!portalContainer) return null;

  return portalContainer ? createPortal(children, portalContainer) : null;
};
