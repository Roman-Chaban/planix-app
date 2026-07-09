import type { ComponentType } from 'react';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

export const createSetup =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) => {
    const user = userEvent.setup();

    return {
      user,
      ...render(<Component {...props} />),
    };
  };
