import type { WithChildren, WithClassName } from '@types';

import type { AnchorHTMLAttributes } from 'react';

export type AppLinkProps = WithChildren &
  WithClassName & {
    href: string;
    isUnderline?: boolean;
    external?: boolean;
  } & AnchorHTMLAttributes<HTMLAnchorElement>;
