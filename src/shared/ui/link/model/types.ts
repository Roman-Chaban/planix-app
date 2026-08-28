import type { WithChildren, WithClassName } from '@types';

import type { AnchorHTMLAttributes } from 'react';

export type AppLinkProps = {
  href: string;
  isUnderline?: boolean;
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  WithChildren &
  WithClassName;
