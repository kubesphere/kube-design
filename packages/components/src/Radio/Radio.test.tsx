import React from 'react';
import {
  itSupportsClassName,
  itSupportsStyle,
  shallowWithTheme,
} from '@kubed/tests';
import { Radio } from './Radio';

const defaultProps = {
  value: 'test-radio',
  children: 'test-radio-label',
  label: 'test',
};

describe('@kubed/components/Radio', () => {

  it('connects input and label with given id', () => {
    const element = shallowWithTheme(<Radio {...defaultProps} id="test-id" disabled={true} defaultChecked={false}/>);
    expect(element.find(Radio).prop('id')).toBe('test-id');
    expect(element.find(Radio).prop('value')).toBe('test-radio');
    expect(element.find(Radio).prop('label')).toBe('test');
    expect(element.find(Radio).prop('disabled')).toBe(true);
    expect(element.find(Radio).prop('defaultChecked')).toBe(false);
  });

  it('has correct displayName', () => {
    expect(Radio.displayName).toEqual('@kubed/components/Radio');
  });
});
