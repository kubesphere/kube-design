import React from 'react';
import { itRendersChildren, itSupportsClassName, itSupportsStyle } from '@kubed/tests';
import { shallow } from 'enzyme';
import { Col, isValidSpan } from './Col';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';

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
  //
  // it('does not render column if span prop set incorrectly', () => {
  //   const float = shallow(
  //     <ThemeProvider theme={themeUtils.getPresets()[0]}>
  //       <Col {...defaultProps} span={1.2} />
  //     </ThemeProvider>
  //     );
  //   const zero = shallow(
  //     <ThemeProvider theme={themeUtils.getPresets()[0]}>
  //       <Col {...defaultProps} span={0} />
  //     </ThemeProvider>
  //   );
  //   const negative = shallow(
  //     <ThemeProvider theme={themeUtils.getPresets()[0]}>
  //       <Col {...defaultProps} span={-4} />
  //     </ThemeProvider>
  //   );
  //   const overflow = shallow(
  //     <ThemeProvider theme={themeUtils.getPresets()[0]}>
  //       <Col {...defaultProps} span={500} />
  //     </ThemeProvider>
  //   );
  //   const regular = shallow(
  //     <ThemeProvider theme={themeUtils.getPresets()[0]}>
  //       <Col {...defaultProps} span={2} />
  //     </ThemeProvider>
  //   );
  //
  //   expect(regular.type()).toBe('div');
  //   expect(negative.type()).toBe(null);
  //   expect(zero.type()).toBe(null);
  //   expect(float.type()).toBe(null);
  //   expect(overflow.type()).toBe(null);
  // });

  it('has correct displayName', () => {
    expect(Col.displayName).toEqual('@kubed/components/Col');
  });
});
