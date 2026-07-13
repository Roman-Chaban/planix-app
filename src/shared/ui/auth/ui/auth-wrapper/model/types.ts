import type { WithChildren } from '@types';

import type { BaseSyntheticEvent, ReactNode } from 'react';

export type AuthWrapperProps = Partial<
  WithChildren & {
    onSubmit: (event?: BaseSyntheticEvent) => Promise<void>;
    header: ReactNode;
    footer: ReactNode;
  }
>;
