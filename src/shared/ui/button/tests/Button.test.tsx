import { screen } from '@testing-library/react';

import { createSetup } from '@/shared/tests/mocks/mocks';
import { Button } from '@/shared/ui/index';

const setup = createSetup(Button);

describe('Button', () => {
  it('renders children', () => {
    setup({ children: 'Click me' });

    expect(
      screen.getByRole('button', {
        name: 'Click me',
      }),
    ).toBeInTheDocument();
  });

  it('renders start icon', () => {
    setup({
      children: 'Click me',
      startIcon: <svg data-testid="start-icon" />,
    });

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
  });

  it('renders end icon', () => {
    setup({
      children: 'Click me',
      endIcon: <svg data-testid="end-icon" />,
    });

    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  it('renders both icons', () => {
    setup({
      children: 'Click me',
      startIcon: <svg data-testid="start-icon" />,
      endIcon: <svg data-testid="end-icon" />,
    });

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();

    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  it('applies disabled state', () => {
    setup({
      children: 'Click me',
      disabled: true,
    });

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('passes button type', () => {
    setup({
      children: 'Submit',
      type: 'submit',
    });

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('applies custom className', () => {
    setup({
      children: 'Click me',
      className: 'custom-class',
    });

    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();

    const { user } = setup({
      children: 'Click me',
      onClick: handleClick,
    });

    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not trigger click when disabled', async () => {
    const handleClick = jest.fn();

    const { user } = setup({
      children: 'Click me',
      disabled: true,
      onClick: handleClick,
    });

    await user.click(screen.getByRole('button'));

    expect(handleClick).not.toHaveBeenCalled();
  });
});
