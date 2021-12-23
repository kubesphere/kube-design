import React from 'react';
import { itSupportsClassName, itSupportsStyle, shallowWithTheme } from '@kubed/tests';
import { Switch } from './Switch';

const defaultProps = {
  checked: true,
  onChange: () => {},
  label: 'test-label',
};

describe('@kubed/components/Switch', () => {
  itSupportsClassName(Switch, defaultProps);
  itSupportsStyle(Switch, defaultProps);

  it('has correct displayName', () => {
    expect(Switch.displayName).toEqual('@kubed/components/Switch');
  });

  it('renders label based on label prop', () => {
    const withLabel = shallowWithTheme(<Switch label="test-label" />);
    const withoutLabel = shallowWithTheme(<Switch />);

    expect(withLabel.render().find('label').text()).toBe('test-label');
    expect(withoutLabel.render().find('label')).toHaveLength(0);
  });

  it('passes id from props to input and label', () => {
    const withLabel = shallowWithTheme(<Switch label="test-label" id="test-id-1" />);
    const withoutLabel = shallowWithTheme(<Switch id="test-id-2" />);

    expect(withLabel.render().find('label').attr('for')).toBe('test-id-1');
    expect(withLabel.render().find('input').attr('id')).toBe('test-id-1');
    expect(withoutLabel.render().find('input').attr('id')).toBe('test-id-2');
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    const disabledA = shallowWithTheme(<Switch disabled />);
    const notDisabled = shallowWithTheme(<Switch />);
    expect(disabledA.find(Switch).prop('disabled')).toBe(true);
    expect(notDisabled.find(Switch).prop('disabled')).toBe(undefined);
  });

  it('sets checked state based on checked prop', () => {
    const checked = shallowWithTheme(<Switch checked onChange={() => {}} />);
    const notChecked = shallowWithTheme(<Switch checked={false} onChange={() => {}} />);

    expect(checked.find(Switch).prop('checked')).toBe(true);
    expect(notChecked.find(Switch).prop('checked')).toBe(false);
  });

  it('spreads ...others to input element', () => {
    const element = shallowWithTheme(<Switch checked okText="开启" offText="关闭" />);

    expect(element.find(Switch).prop('checked')).toBe(true);
    expect(element.find(Switch).prop('okText')).toBe('开启');
    expect(element.find(Switch).prop('offText')).toBe('关闭');
  });
});
