import type { BaseSyntheticEvent, ReactNode } from 'react';

export type AuthWrapperProps = Partial<{
  children: ReactNode;
  onSubmit: (event?: BaseSyntheticEvent) => Promise<void>;
  header: ReactNode;
  footer: ReactNode;
}>;
