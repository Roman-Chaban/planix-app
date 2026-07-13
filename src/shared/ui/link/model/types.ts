import type { AnchorHTMLAttributes } from 'react';

import type { WithChildren, WithClassName } from '@types';

export type AppLinkProps = WithChildren &
  WithClassName & {
    href: string;
    isUnderline?: boolean;
    external?: boolean;
  } & AnchorHTMLAttributes<HTMLAnchorElement>;
