import { itSupportsClassName, itSupportsStyle } from '@kubed/tests';
import { Empty } from './Empty';

const defaultProps = {};

describe('@kubed/components/Empty', () => {
  itSupportsClassName(Empty, defaultProps);
  itSupportsStyle(Empty, defaultProps);

  it('has correct displayName', () => {
    expect(Empty.displayName).toEqual('@kubed/components/Empty');
  });
});
