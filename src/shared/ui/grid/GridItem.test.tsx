import { screen } from '@testing-library/react';

import styles from '@/shared/ui/grid/ui/Grid.module.scss';
import { Box, GridItem } from '@/shared/ui/index';
import { createSetup } from '@/mocks';

const setup = createSetup(GridItem);

describe('GridItem', () => {
  it('should render children', () => {
    setup({
      children: <Box>item</Box>,
    });

    expect(screen.getByText('item')).toBeInTheDocument();
  });

  it('should use default span = 12', () => {
    const { container } = setup({
      children: <Box>Item</Box>,
    });

    const item = container.firstElementChild;

    expect(item).toHaveClass(styles.item);
    expect(item).toHaveClass(styles['col-span-12']);
  });

  it('should apply correct span class (span = 6)', () => {
    const { container } = setup({
      children: <Box>Item</Box>,
      span: 6,
    });

    const item = container.firstElementChild;

    expect(item).toHaveClass(styles['col-span-6']);
  });

  it('should apply correct span class (span = 1)', () => {
    const { container } = setup({
      children: <Box>Item</Box>,
      span: 1,
    });

    const item = container.firstElementChild;

    expect(item).toHaveClass(styles['col-span-1']);
  });

  it('should merge custom className', () => {
    const { container } = setup({
      children: <Box>Item</Box>,
      className: 'custom-class',
    });

    const item = container.firstElementChild;

    expect(item).toHaveClass(styles.item);
    expect(item).toHaveClass('custom-class');
  });
});
