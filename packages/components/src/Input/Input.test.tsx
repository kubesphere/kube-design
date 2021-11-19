import React from 'react';
import {
  itSupportsClassName,
  shallowWithTheme,
} from '@kubed/tests';
import { Input } from './Input';

describe('@kubed/components/Input', () => {
  beforeAll(() => {
    window.getComputedStyle = jest.fn();
  });

  itSupportsClassName(Input, {});

  it('sets disabled attribute on input based on disabled prop', () => {
    const disabled = shallowWithTheme(
      <Input disabled />
    );

    const notDisabled = shallowWithTheme(
      <Input />
    );

    expect(disabled.render().find('input').attr('disabled')).toBe('disabled');
    expect(notDisabled.render().find('input').attr('disabled')).toBe(undefined);
  });

  it('renders given right section', () => {
    const withAddonBefore = shallowWithTheme(
      <Input addonBefore="$" />
    );
    const withoutAddonBefore = shallowWithTheme(
      <Input />
    );

    expect(withoutAddonBefore.find(Input).prop('addonBefore')).toBe(undefined);
    expect(withAddonBefore.find(Input).prop('addonBefore')).toBe('$');
  });
});



