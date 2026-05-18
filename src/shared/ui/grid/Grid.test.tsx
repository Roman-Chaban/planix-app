import { screen } from '@testing-library/react';

import styles from '@/shared/ui/grid/Grid.module.scss';
import { Grid } from '@/shared/ui/index';
import { createSetup } from '@/test/mocks/mocks';

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
