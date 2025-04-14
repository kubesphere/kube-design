import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
  renderWithTheme,
} from '@kubed/tests';
import * as React from 'react';
import { Container } from './Container';
import { screen } from '@testing-library/react';
import { themeUtils } from '../theme';
const { getSizeValue } = themeUtils;
import { sizes } from './Container';

describe('@kubd/components/Container', () => {
  itSupportsClassName(Container, {});
  itRendersChildren(Container, {});
  itSupportsOthers(Container, {});
  itSupportsStyle(Container, {});

  it('to match snapshot', () => {
    const { asFragment } = renderWithTheme(
      <Container padding="xl" size="sm" fluid>
        To get the most out of this module, you should have worked your way through the previous
        JavaScript modules in the series. Those modules typically involve simple API usage, as it is
        often difficult to write client-side JavaScript examples without them.
      </Container>
    );
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-gFqAkR evfHzS"
        >
          To get the most out of this module, you should have worked your way through the previous JavaScript modules in the series. Those modules typically involve simple API usage, as it is often difficult to write client-side JavaScript examples without them.
        </div>
      </DocumentFragment>
    `);
  });

  it('has correct displayName', () => {
    expect(Container.displayName).toEqual('@kubed/components/Container');
  });
});
