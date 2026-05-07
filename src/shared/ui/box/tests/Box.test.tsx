import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Box } from '@/shared/ui';

describe('Box', () => {
  it('renders children', () => {
    render(<Box>Content</Box>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders div by default', () => {
    const { container } = render(<Box>Content</Box>);

    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('renders custom element via as prop', () => {
    const { container } = render(<Box as="section">Content</Box>);

    expect(container.firstChild?.nodeName).toBe('SECTION');
  });

  it('passes className correctly', () => {
    render(<Box className="box">Content</Box>);

    expect(screen.getByText('Content')).toHaveClass('box');
  });

  it('passes native html props', () => {
    render(
      <Box id="box-id" data-testid="box">
        Content
      </Box>,
    );

    expect(screen.getByTestId('box')).toHaveAttribute('id', 'box-id');
  });

  it('handles events', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<Box onClick={handleClick}>Content</Box>);

    await user.click(screen.getByText('Content'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
