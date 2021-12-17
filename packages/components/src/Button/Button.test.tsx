import React from 'react';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsRef,
  itSupportsStyle,
  itSupportsOthers, shallowWithTheme, mountWithTheme,
} from '@kubed/tests';
import { Button } from './Button';

describe('@kubed/components/Button', () => {
  checkAccessibility([
    mountWithTheme(
      <Button>Kubed button</Button>
    ),
  ]);
  itSupportsOthers(Button, {});
  itRendersChildren(Button, {});
  itSupportsStyle(Button, {});
  itSupportsRef(Button, {}, HTMLButtonElement);
  itSupportsClassName(Button, {});

  it('has correct displayName', () => {
    expect(Button.displayName).toEqual('@kubed/components/Button');
  });

  it('passes type to button component', () => {
    const element = shallowWithTheme(
      <Button type="submit" />
    );
    expect(element.render().attr('type')).toBe('submit');
  });

  it('sets disabled attribute based on prop', () => {
    const disabled = shallowWithTheme(
      <Button disabled />
    );
    const notDisabled = shallowWithTheme(
      <Button />
    );

    expect(disabled.render().attr('disabled')).toBe('disabled');
    expect(notDisabled.render().attr('disabled')).toBe(undefined);
  });
});
