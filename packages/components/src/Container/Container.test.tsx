import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
} from '@kubed/tests';
import { Container } from './Container';

describe('@kubd/components/Container', () => {
  itSupportsClassName(Container, {});
  itRendersChildren(Container, {});
  itSupportsOthers(Container, {});
  itSupportsStyle(Container, {});

  it('has correct displayName', () => {
    expect(Container.displayName).toEqual('@kubed/components/Container');
  });
});
