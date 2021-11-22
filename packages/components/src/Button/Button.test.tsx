import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itRendersChildren,
  itSupportsRef,
  itSupportsStyle,
  itSupportsOthers,
} from '@kubed/tests';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';
import { Button } from './Button';

describe('@kubed/components/Button', () => {
  checkAccessibility([
    mount(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Button>Kubed button</Button>
      </ThemeProvider>
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
    const element = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Button type="submit" />
      </ThemeProvider>
    );
    expect(element.render().attr('type')).toBe('submit');
  });

  it('sets disabled attribute based on prop', () => {
    const disabled = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Button disabled />
      </ThemeProvider>
    );
    const notDisabled = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Button />
      </ThemeProvider>
    );

    expect(disabled.render().attr('disabled')).toBe('disabled');
    expect(notDisabled.render().attr('disabled')).toBe(undefined);
  });
});
