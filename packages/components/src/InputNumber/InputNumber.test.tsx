import React from 'react';
import { InputNumber } from '@kubed/components';
import { shallowWithTheme } from '@kubed/tests';

describe('@kubed/components/InputNumber', () => {
  it('has correct displayName', () => {
    expect(InputNumber.displayName).toEqual('@kubed/components/InputNumber');
  });

  it('renders disabled and placeholder prop to component', () => {
    const wrapper = shallowWithTheme(<InputNumber disabled placeholder="请输入.." />);
    expect(wrapper.find(InputNumber).prop('disabled')).toBe(true);
    expect(wrapper.find(InputNumber).prop('placeholder')).toBe('请输入..');
  });

  it('renders min prop to component', () => {
    const wrapper = shallowWithTheme(<InputNumber min={-2} />);
    expect(wrapper.find(InputNumber).prop('min')).toBe(-2);
  });
});
