import type { GridProps } from '../model/types';

import { screen } from '@testing-library/react';

import styles from '@/shared/ui/grid/ui/grid.module.scss';
import { Grid } from '@/shared/ui/index';
import { createSetup } from '@/mocks';

const setup = createSetup(Grid);

const createProps = (overrides: Partial<GridProps> = {}): GridProps => ({
  children: 'Content',
  className: 'custom-class',
  ...overrides,
});

describe('Grid', () => {
  it('should render children', () => {
    setup(createProps());

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should apply default grid class', () => {
    const { container } = setup(createProps());

    expect(container.firstChild).toHaveClass(styles.grid);
  });

  it('should merge custom className', () => {
    const { container } = setup(createProps());

    expect(container.firstChild).toHaveClass(styles.grid);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should render without className', () => {
    const { container } = setup(createProps());

    expect(container.firstChild).toBeInTheDocument();
  });
});
