import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
} from '@kubed/tests';
import DatePicker from './DatePicker';

describe('@kubed/components/DatePicker', () => {
  itSupportsClassName(DatePicker, {});
  itSupportsStyle(DatePicker, {});

  it('has correct displayName', () => {
    expect(DatePicker.displayName).toEqual('@kubed/components/DatePicker');
  });
});
