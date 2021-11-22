import React from 'react';
import { mountWithTheme } from '@kubed/tests';
import { AutoComplete } from './AutoComplete';
import { Input } from '../input/Input';

describe('AutoComplete', () => {
  it('AutoComplete with custom Input render perfectly', () => {
    const wrapper = mountWithTheme(
      <AutoComplete dataSource={['12345', '23456', '34567']}>
        <textarea />
      </AutoComplete>
    );

    expect(wrapper.find('textarea').length).toBe(1);
    wrapper.find('textarea').simulate('change', { target: { value: '123' } });
  });

  it('AutoComplete should work when dataSource is object array', () => {
    const wrapper = mountWithTheme(
      <AutoComplete
        dataSource={[
          { text: 'text', value: 'value' },
          { text: 'abc', value: 'xxx' },
        ]}
      >
        <Input />
      </AutoComplete>
    );
    expect(wrapper.find('Input').length).toBe(1);
    wrapper.find('Input').simulate('change', { target: { value: 'a' } });
  });

  it('legacy dataSource should accept react element option', () => {
    const wrapper = mountWithTheme(
      <AutoComplete open dataSource={[<span key="key">ReactNode</span>]} />
    );
    expect(wrapper).toMatchInlineSnapshot;
  });

  it('should not warning when getInputElement is null', () => {
    jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    mountWithTheme(<AutoComplete placeholder="input here" allowClear />);
    // eslint-disable-next-line no-console
    expect(console.warn).not.toBeCalled();
    // eslint-disable-next-line no-console
    console.warn.mockRestore();
  });

  it('should not override custom input className', () => {
    const wrapper = mountWithTheme(
      <AutoComplete>
        <Input className="custom" />
      </AutoComplete>
    );
    expect(wrapper.find(Input).hasClass('custom')).toBe(true);
  });
});
