import type { ReactElement } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Typography } from '@/shared/ui/typography/ui/Typography';

const setup = (component: ReactElement) => {
  const user = userEvent.setup();

  return {
    user,
    ...render(component),
  };
};

describe('Typography', () => {
  describe('rendering', () => {
    it('renders with default span', () => {
      setup(<Typography>Default text</Typography>);

      const element = screen.getByText('Default text');

      expect(element.tagName).toBe('SPAN');
    });

    it.each([
      { as: 'h1' as const, text: 'Main heading' },
      { as: 'h2' as const, text: 'Section heading' },
      { as: 'p' as const, text: 'Paragraph text' },
      { as: 'span' as const, text: 'Inline text' },
    ])('renders correctly as $as tag', ({ as, text }) => {
      setup(<Typography as={as}>{text}</Typography>);

      const element = screen.getByText(text);

      expect(element.tagName).toBe(as.toUpperCase());
    });

    it('forwards props correctly', () => {
      setup(
        <Typography
          as="p"
          id="test-id"
          className="custom-class"
          title="Tooltip"
          data-testid="typography-element"
          aria-label="Styled typography"
        >
          Content
        </Typography>,
      );

      const element = screen.getByTestId('typography-element');

      expect(element).toHaveAttribute('id', 'test-id');

      expect(element).toHaveAttribute('title', 'Tooltip');

      expect(element).toHaveClass('custom-class');

      expect(element.tagName).toBe('P');
    });
  });

  describe('interactions', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = jest.fn();

      const { user } = setup(
        <Typography as="span" onClick={handleClick}>
          Clickable Typography
        </Typography>,
      );

      await user.click(screen.getByText('Clickable Typography'));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
