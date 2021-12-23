import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
  shallowWithTheme,
} from '@kubed/tests';
import * as React from 'react';
import { Container } from './Container';

describe('@kubd/components/Container', () => {
  itSupportsClassName(Container, {});
  itRendersChildren(Container, {});
  itSupportsOthers(Container, {});
  itSupportsStyle(Container, {});

  it('renders given size,padding and fluid', () => {
    const wrapper = shallowWithTheme(
      <Container padding="xl" size="sm" fluid>
        To get the most out of this module, you should have worked your way through the previous
        JavaScript modules in the series. Those modules typically involve simple API usage, as it is
        often difficult to write client-side JavaScript examples without them.
      </Container>
    );
    expect(wrapper.find(Container).prop('padding')).toBe('xl');
    expect(wrapper.find(Container).prop('size')).toBe('sm');
    expect(wrapper.find(Container).prop('fluid')).toBe(true);
  });

  it('has correct displayName', () => {
    expect(Container.displayName).toEqual('@kubed/components/Container');
  });
});
