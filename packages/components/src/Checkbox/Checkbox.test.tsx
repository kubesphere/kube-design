import React from 'react';
import { checkAccessibility, itSupportsRef, mountWithTheme, shallowWithTheme } from '@kubed/tests';
import { Checkbox } from './Checkbox';

const defaultProps = {
  checked: true,
  onChange: () => {},
  label: 'test-label',
};

describe('@kubed/components/Checkbox', () => {
  itSupportsRef(Checkbox, defaultProps, HTMLInputElement);
  checkAccessibility([
    mountWithTheme(<Checkbox aria-label="Checkbox without label" />),
    mountWithTheme(<Checkbox label="With label" />),
    mountWithTheme(<Checkbox id="with-id" label="With id" />),
  ]);

  it('renders label based on label prop', () => {
    const withLabel = shallowWithTheme(<Checkbox label="test-label" />);
    const withoutLabel = shallowWithTheme(<Checkbox />);

    expect(withLabel.render().find('label').text()).toBe('test-label');
    expect(withoutLabel.render().find('label')).toHaveLength(0);
  });

  it('passes id from props to input and label', () => {
    const withLabel = shallowWithTheme(<Checkbox label="test-label" id="test-id-1" />);
    const withoutLabel = shallowWithTheme(<Checkbox id="test-id-2" />);

    expect(withLabel.render().find('label').attr('for')).toBe('test-id-1');
    expect(withLabel.render().find('input').attr('id')).toBe('test-id-1');
    expect(withoutLabel.render().find('input').attr('id')).toBe('test-id-2');
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    const disabled = shallowWithTheme(<Checkbox disabled />);
    const notDisabled = shallowWithTheme(<Checkbox />);

    expect(disabled.render().find('input').attr('disabled')).toBe('disabled');
    expect(notDisabled.render().find('input').attr('disabled')).toBe(undefined);
  });

  it('sets checked state based on checked prop', () => {
    const checked = shallowWithTheme(<Checkbox checked onChange={() => {}} />);
    const notChecked = shallowWithTheme(<Checkbox checked={false} onChange={() => {}} />);

    expect(checked.render().find('input').attr('checked')).toBe('checked');
    expect(notChecked.render().find('input').attr('checked')).toBe(undefined);
  });

  it('sets checked state based on indeterminate prop', () => {
    const element = shallowWithTheme(
      <Checkbox indeterminate checked={false} onChange={() => {}} />
    );
    expect(element.find(Checkbox).prop('checked')).toBe(false);
    expect(element.find(Checkbox).prop('indeterminate')).toBe(true);
  });

  it('spreads ...others to input element', () => {
    const element = shallowWithTheme(<Checkbox checked width="30px" />);

    expect(element.find(Checkbox).prop('checked')).toBe(true);
    expect(element.find(Checkbox).prop('width')).toBe('30px');
  });

  it('has correct displayName', () => {
    expect(Checkbox.displayName).toEqual('@kubed/components/Checkbox');
  });
});
