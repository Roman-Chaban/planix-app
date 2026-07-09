import { screen } from '@testing-library/react';

import { createSetup } from '@/shared/tests/mocks/mocks';
import { Checkbox } from '@/shared/ui/index';

const setup = createSetup(Checkbox);

describe('Checkbox', () => {
  it('renders checkbox', () => {
    setup({
      checked: false,
      onChange: jest.fn(),
    });

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders label', () => {
    setup({
      checked: false,
      onChange: jest.fn(),
      label: 'Accept terms',
    });

    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('renders checked state', () => {
    setup({
      checked: true,
      onChange: jest.fn(),
    });

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('renders unchecked state', () => {
    setup({
      checked: false,
      onChange: jest.fn(),
    });

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('calls onChange with true when checked', async () => {
    const handleChange = jest.fn();

    const { user } = setup({
      checked: false,
      onChange: handleChange,
    });

    await user.click(screen.getByRole('checkbox'));

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('calls onChange with false when unchecked', async () => {
    const handleChange = jest.fn();

    const { user } = setup({
      checked: true,
      onChange: handleChange,
    });

    await user.click(screen.getByRole('checkbox'));

    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('supports disabled state', () => {
    setup({
      checked: false,
      disabled: true,
      onChange: jest.fn(),
    });

    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('does not trigger onChange when disabled', async () => {
    const handleChange = jest.fn();

    const { user } = setup({
      checked: false,
      disabled: true,
      onChange: handleChange,
    });

    await user.click(screen.getByRole('checkbox'));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('toggles checkbox when clicking label', async () => {
    const handleChange = jest.fn();

    const { user } = setup({
      checked: false,
      label: 'Accept terms',
      onChange: handleChange,
    });

    await user.click(screen.getByText('Accept terms'));

    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
