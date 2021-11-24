import { itRendersChildren, itSupportsClassName, itSupportsStyle } from '@kubed/tests';
import { Col, isValidSpan } from './Col';

const defaultProps = {
  span: 1,
  columns: 12,
  offset: 0,
  gutter: [20, 30],
  grow: false,
};

describe('@kubed/components/Col', () => {
  itRendersChildren(Col, defaultProps);
  itSupportsClassName(Col, defaultProps);
  itSupportsStyle(Col, defaultProps);
  itRendersChildren(Col, defaultProps);

  it('correctly detects invalid spans', () => {
    expect(isValidSpan(2)).toBe(true);
    expect(isValidSpan(1.2)).toBe(false);
    expect(isValidSpan(-1.2)).toBe(false);
    expect(isValidSpan(-4)).toBe(false);
    expect(isValidSpan(0)).toBe(false);
  });

  it('has correct displayName', () => {
    expect(Col.displayName).toEqual('@kubed/components/Col');
  });
});
