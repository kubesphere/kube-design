import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@kubed/tests';
import { Tag } from './Tag';

describe('@kubed/components/Tag', () => {
  const testContent = 'KubeSphere';
  const testClassName = 'test-classname';
  const testStyle = { marginTop: '10px' };

  it('supports className prop', () => {
    const { container } = renderWithTheme(<Tag className={testClassName}>{testContent}</Tag>);
    expect(container.firstChild).toHaveClass(testClassName);
  });

  it('supports style prop', () => {
    const { container } = renderWithTheme(<Tag style={testStyle}>{testContent}</Tag>);
    expect(container.firstChild).toHaveStyle(testStyle);
  });

  it('renders with correct color attribute or class', () => {
    const colorValue = 'warning';
    const testId = 'tag';
    renderWithTheme(
      <Tag data-testid={testId} color={colorValue}>
        {testContent}
      </Tag>
    );
    const tagElement = screen.getByTestId(testId);
    expect(tagElement).toHaveAttribute('color', colorValue);
  });

  it('renders with correct title attribute', () => {
    const titleValue = 'job-name';
    const testId = 'tag';
    renderWithTheme(
      <Tag data-testid={testId} title={titleValue}>
        {testContent}
      </Tag>
    );
    expect(screen.getByTestId(testId)).toHaveAttribute('title', titleValue);
  });

  it('has correct displayName', () => {
    expect(Tag.displayName).toEqual('@kubed/components/Tag');
  });

  it('to match snapshot', () => {
    const { asFragment } = renderWithTheme(<Tag>{testContent}</Tag>);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-aXZVg iCWTFz"
        >
          <span
            class="tag-content"
          >
            KubeSphere
          </span>
        </div>
      </DocumentFragment>
    `);
  });
});
