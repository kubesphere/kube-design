import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  renderWithTheme,
} from '@kubed/tests';
import React from 'react';
import { Description } from './Description';

const defaultProps = {
  variant: 'default',
  label: 'test',
  children: 'test',
};

describe('@kubed/components/Description', () => {
  itSupportsClassName(Description, defaultProps);
  itRendersChildren(Description, defaultProps);
  itSupportsStyle(Description, defaultProps);

  const testId = 'test-id';
  it('to match snapshot', () => {
    const { asFragment } = renderWithTheme(
      <Description data-testid={testId} label="project" variant="unstyled">
        KubeSphere
      </Description>
    );
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-dSCufp jBYTda"
          data-testid="test-id"
        >
          <div
            class="sc-fxwrCY dqJpPm desc-label"
          >
            project
          </div>
          <div
            class="sc-hIUJlX fKsxPo desc-content"
          >
            KubeSphere
          </div>
        </div>
      </DocumentFragment>
    `);
  });

  it('has correct displayName', () => {
    expect(Description.displayName).toEqual('@kubed/components/Description');
  });
});
