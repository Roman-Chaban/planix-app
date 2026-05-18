import { screen } from '@testing-library/react';

import { Box } from '@/shared/ui';
import { createSetup } from '@/test/mocks/mocks';

const setup = createSetup(Box);

describe('Box', () => {
  it('renders children', () => {
    setup({ children: 'Content' });

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders div by default', () => {
    const { container } = setup({
      children: 'Content',
    });

    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('renders custom element via as prop', () => {
    const { container } = setup({
      as: 'section',
      children: 'Content',
    });

    expect(container.firstChild?.nodeName).toBe('SECTION');
  });

  it('passes className correctly', () => {
    setup({
      className: 'box',
      children: 'Content',
    });

    expect(screen.getByText('Content')).toHaveClass('box');
  });

  it('passes native html props', () => {
    setup({
      id: 'box-id',
      'data-testid': 'box',
      children: 'Content',
    });

    expect(screen.getByTestId('box')).toHaveAttribute('id', 'box-id');
  });

  it('handles events', async () => {
    const handleClick = jest.fn();

    const { user } = setup({
      onClick: handleClick,
      children: 'Content',
    });

    await user.click(screen.getByText('Content'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
