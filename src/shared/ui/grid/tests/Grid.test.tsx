import { screen } from '@testing-library/react';

import { createSetup } from '@/shared/tests/mocks/mocks';
import styles from '@/shared/ui/grid/ui/styles.module.scss';
import { Grid } from '@/shared/ui/index';

const setup = createSetup(Grid);

describe('Grid', () => {
  it('should render children', () => {
    setup({ children: <Grid>Content</Grid> });

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should apply default grid class', () => {
    const { container } = setup({ children: <Grid>Content</Grid> });

    expect(container.firstChild).toHaveClass(styles.grid);
  });

  it('should merge custom className', () => {
    const { container } = setup({
      children: <Grid>Content</Grid>,
      className: 'custom-class',
    });

    expect(container.firstChild).toHaveClass(styles.grid);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should render without className', () => {
    const { container } = setup({
      children: <Grid>Content</Grid>,
    });

    expect(container.firstChild).toBeInTheDocument();
  });
});
