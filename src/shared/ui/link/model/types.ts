import type { AnchorHTMLAttributes } from 'react';

import type { WithChildren, WithClassName } from '@/shared/types/types';

export type AppLinkProps = WithChildren &
  WithClassName & {
    href: string;
    isUnderline?: boolean;
    external?: boolean;
  } & AnchorHTMLAttributes<HTMLAnchorElement>;
