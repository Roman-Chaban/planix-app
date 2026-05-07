import { screen } from '@testing-library/react';

import { createSetup } from '@/shared/tests/mocks/mocks';
import { Typography } from '@/shared/ui/typography/ui/Typography';

const setup = createSetup(Typography);

describe('Typography', () => {
  describe('rendering', () => {
    it('renders with default span', () => {
      setup({ children: 'Default text' });

      const element = screen.getByText('Default text');

      expect(element.tagName).toBe('SPAN');
    });

    it.each([
      { as: 'h1' as const, text: 'Main heading' },
      { as: 'h2' as const, text: 'Section heading' },
      { as: 'p' as const, text: 'Paragraph text' },
      { as: 'span' as const, text: 'Inline text' },
    ])('renders correctly as $as tag', ({ as, text }) => {
      setup({ as, children: text });

      const element = screen.getByText(text);

      expect(element.tagName).toBe(as.toUpperCase());
    });

    it('forwards props correctly', () => {
      setup({
        as: 'p',
        id: 'test-id',
        className: 'custom-class',
        title: 'Tooltip',
        'data-testid': 'typography-element',
        'aria-label': 'Styled typography',
        children: 'Content',
      });

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

      const { user } = setup({
        as: 'span',
        onClick: handleClick,
        children: 'Clickable Typography',
      });

      const element = screen.getByText('Clickable Typography');

      await user.click(element);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
