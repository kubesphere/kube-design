import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Snippet } from './Snippet';

describe('@kubed/components/Snippet', () => {
  describe('Snippet basic functionality', () => {
    it('renders Snippet component correctly', () => {
      const { container } = renderWithTheme(<Snippet>npm install</Snippet>);

      expect(container.firstChild).toBeInTheDocument();
      expect(screen.getByText('npm install')).toBeInTheDocument();
    });

    it('renders with default symbol', () => {
      const { container } = renderWithTheme(<Snippet>command</Snippet>);

      expect(screen.getByText('command')).toBeInTheDocument();
      expect(container.querySelector('pre')).toBeInTheDocument();
    });

    it('renders with custom symbol', () => {
      const { container } = renderWithTheme(<Snippet symbol=">">{`echo "hello"`}</Snippet>);

      expect(screen.getByText('echo "hello"')).toBeInTheDocument();
      expect(container.querySelector('pre')).toBeInTheDocument();
    });

    it('renders with different custom symbols', () => {
      const { container } = renderWithTheme(<Snippet symbol="#">cd /home</Snippet>);

      expect(screen.getByText('cd /home')).toBeInTheDocument();
      expect(container.querySelector('pre')).toBeInTheDocument();
    });

    it('renders with empty symbol', () => {
      const { container } = renderWithTheme(<Snippet symbol="">ls -la</Snippet>);

      expect(screen.getByText('ls -la')).toBeInTheDocument();
      expect(container.querySelector('pre')).toBeInTheDocument();
    });
  });

  describe('Snippet width prop', () => {
    it('renders with default width', () => {
      const { container } = renderWithTheme(<Snippet>command</Snippet>);

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({ width: '300px' });
    });

    it('renders with custom width', () => {
      const { container } = renderWithTheme(<Snippet width={500}>command</Snippet>);

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({ width: '500px' });
    });

    it('renders with different width values', () => {
      const { container } = renderWithTheme(<Snippet width={150}>short</Snippet>);

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({ width: '150px' });
    });

    it('handles zero width as auto', () => {
      const { container } = renderWithTheme(<Snippet width={0}>command</Snippet>);

      const wrapper = container.firstChild as HTMLElement;
      // width={0} is falsy, so it defaults to 'auto'
      expect(wrapper).toHaveStyle({ width: 'auto' });
    });
  });

  describe('Snippet radius prop', () => {
    it('renders with default radius', () => {
      const { container } = renderWithTheme(<Snippet>command</Snippet>);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with custom radius', () => {
      const { container } = renderWithTheme(<Snippet radius="lg">command</Snippet>);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with numeric radius', () => {
      const { container } = renderWithTheme(<Snippet radius={10}>command</Snippet>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Snippet copy functionality', () => {
    it('does not show copy icon when valueToCopy is undefined', () => {
      renderWithTheme(<Snippet>npm install</Snippet>);

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('shows copy icon when valueToCopy is provided', () => {
      renderWithTheme(<Snippet valueToCopy="npm install">npm install</Snippet>);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('copies value to clipboard when copy icon is clicked', async () => {
      const user = userEvent.setup();
      const valueToCopy = 'npm install @kubed/components';

      renderWithTheme(<Snippet valueToCopy={valueToCopy}>{valueToCopy}</Snippet>);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      await waitFor(() => {
        // After copying, button should be replaced with check icon
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
      });
    });

    it('shows check icon after successful copy', async () => {
      const user = userEvent.setup();
      renderWithTheme(<Snippet valueToCopy="test">test</Snippet>);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      await waitFor(() => {
        // Check icon should be visible (no button)
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
      });
    });

    it('copies different valueToCopy than displayed content', async () => {
      const user = userEvent.setup();
      renderWithTheme(<Snippet valueToCopy="actual-command">displayed-command</Snippet>);

      expect(screen.getByText('displayed-command')).toBeInTheDocument();

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      await waitFor(() => {
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
      });
    });

    it('handles valueToCopy with special characters', async () => {
      const user = userEvent.setup();
      const specialValue = 'echo "Hello, World!" && ls -la';

      renderWithTheme(<Snippet valueToCopy={specialValue}>{specialValue}</Snippet>);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      await waitFor(() => {
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
      });
    });

    it('handles valueToCopy with multiline content', async () => {
      const user = userEvent.setup();
      const multilineValue = `line1
line2
line3`;

      renderWithTheme(<Snippet valueToCopy={multilineValue}>{multilineValue}</Snippet>);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      await waitFor(() => {
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
      });
    });
  });

  describe('Snippet children', () => {
    it('renders with string children', () => {
      renderWithTheme(<Snippet>Simple string</Snippet>);

      expect(screen.getByText('Simple string')).toBeInTheDocument();
    });

    it('renders with numeric children', () => {
      renderWithTheme(<Snippet>{12345}</Snippet>);

      expect(screen.getByText('12345')).toBeInTheDocument();
    });

    it('renders with React node children', () => {
      renderWithTheme(
        <Snippet>
          <span>Complex content</span>
        </Snippet>
      );

      expect(screen.getByText('Complex content')).toBeInTheDocument();
    });

    it('renders with empty children', () => {
      const { container } = renderWithTheme(<Snippet>{''}</Snippet>);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with very long content', () => {
      const longContent = 'npm install '.repeat(50);
      const { container } = renderWithTheme(<Snippet>{longContent}</Snippet>);

      const pre = container.querySelector('pre');
      expect(pre).toBeInTheDocument();
      expect(pre?.textContent).toContain('npm install');
    });
  });

  describe('Snippet styling', () => {
    it('supports custom className', () => {
      const { container } = renderWithTheme(<Snippet className="custom-snippet">test</Snippet>);

      expect(container.querySelector('.custom-snippet')).toBeInTheDocument();
    });

    it('supports custom style', () => {
      const { container } = renderWithTheme(
        <Snippet style={{ marginTop: '20px' }}>test</Snippet>
      );

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({ marginTop: '20px' });
    });

    it('applies border and background styles', () => {
      const { container } = renderWithTheme(<Snippet>test</Snippet>);

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({
        position: 'relative',
        boxSizing: 'border-box',
      });
    });

    it('applies different padding when valueToCopy is provided', () => {
      const { container: withCopy } = renderWithTheme(<Snippet valueToCopy="test">test</Snippet>);
      const wrapperWithCopy = withCopy.firstChild as HTMLElement;
      expect(wrapperWithCopy).toHaveStyle({ padding: '10px 40px 10px 10px' });
    });

    it('applies default padding when valueToCopy is not provided', () => {
      const { container: withoutCopy } = renderWithTheme(<Snippet>test</Snippet>);
      const wrapperWithoutCopy = withoutCopy.firstChild as HTMLElement;
      expect(wrapperWithoutCopy).toHaveStyle({ padding: '10px 10px 10px 10px' });
    });
  });

  describe('Snippet with combined props', () => {
    it('renders with symbol and width', () => {
      const { container } = renderWithTheme(
        <Snippet symbol=">" width={400}>
          command
        </Snippet>
      );

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle({ width: '400px' });
      expect(screen.getByText('command')).toBeInTheDocument();
    });

    it('renders with all props', () => {
      const { container } = renderWithTheme(
        <Snippet symbol="#" width={350} radius="md" valueToCopy="test-value">
          test content
        </Snippet>
      );

      expect(container.firstChild).toBeInTheDocument();
      expect(screen.getByText('test content')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders with symbol, width, and custom className', () => {
      const { container } = renderWithTheme(
        <Snippet symbol="$" width={250} className="custom-class">
          content
        </Snippet>
      );

      expect(container.querySelector('.custom-class')).toBeInTheDocument();
      expect(screen.getByText('content')).toBeInTheDocument();
    });
  });

  describe('Snippet edge cases', () => {
    it('handles null children', () => {
      const { container } = renderWithTheme(<Snippet>{null}</Snippet>);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('handles undefined children', () => {
      const { container } = renderWithTheme(<Snippet>{undefined}</Snippet>);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('handles valueToCopy as empty string', () => {
      renderWithTheme(<Snippet valueToCopy="">test</Snippet>);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles valueToCopy as number', async () => {
      const user = userEvent.setup();
      renderWithTheme(<Snippet valueToCopy={12345}>12345</Snippet>);

      const copyButton = screen.getByRole('button');
      await user.click(copyButton);

      await waitFor(() => {
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
      });
    });

    it('handles valueToCopy as boolean', () => {
      renderWithTheme(<Snippet valueToCopy={true}>true</Snippet>);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Snippet displayName', () => {
    it('has correct displayName', () => {
      expect(Snippet.displayName).toBe('@kubed/components/Snippet');
    });
  });
});
