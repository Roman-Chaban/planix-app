import type { GridItemProps } from '../model/types';

import { screen } from '@testing-library/react';

import { GridItem } from '@/shared/ui';
import styles from '@/shared/ui/grid/ui/grid.module.scss';
import { createSetup } from '@/mocks';

const setup = createSetup(GridItem);

const createProps = (overrides: Partial<GridItemProps> = {}): GridItemProps => ({
  children: 'Item',
  className: 'custom-class',
  ...overrides,
});

describe('GridItem', () => {
  it('should render children', () => {
    setup(createProps());

    expect(screen.getByText('Item')).toBeInTheDocument();
  });

  it('should use default span = 12', () => {
    const { container } = setup(createProps());

    const item = container.firstElementChild;

    expect(item).toHaveClass(styles.item);
    expect(item).toHaveClass(styles['col-span-12']);
  });

  it('should apply correct span class (span = 6)', () => {
    const { container } = setup(createProps({ span: 6 }));

    const item = container.firstElementChild;

    expect(item).toHaveClass(styles['col-span-6']);
  });

  it('should apply correct span class (span = 1)', () => {
    const { container } = setup(createProps({ span: 1 }));

    const item = container.firstElementChild;

    expect(item).toHaveClass(styles['col-span-1']);
  });

  it('should merge custom className', () => {
    const { container } = setup(createProps());

    const item = container.firstElementChild;

    expect(item).toHaveClass(styles.item);
    expect(item).toHaveClass('custom-class');
  });
});
