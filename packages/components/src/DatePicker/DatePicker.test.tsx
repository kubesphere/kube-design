import React, { act, createRef, StrictMode } from 'react';
import dayjs from 'dayjs';
import { itSupportsClassName, itSupportsStyle, mountWithTheme } from '@kubed/tests';
import { DatePicker } from './DatePicker';
import TimePicker from '../TimePicker/TimePicker';
import { CommonPickerMethods } from './generatePicker/interface';
import en from './locales/en';

describe('@kubed/components/DatePicker', () => {
  itSupportsClassName(DatePicker, {});
  itSupportsStyle(DatePicker, {});

  it('has correct displayName', () => {
    expect(DatePicker.displayName).toEqual('@kubed/components/DatePicker');
  });

  it('selects and clears a single date while respecting disabled dates', async () => {
    const onChange = jest.fn();
    const wrapper = mountWithTheme(
      <DatePicker
        open
        defaultPickerValue={dayjs('2026-11-04')}
        disabledDate={(date) => date.date() === 6}
        onChange={onChange}
      />
    );

    const disabled = document.querySelector('[title="2026-11-06"]') as HTMLElement;
    expect(disabled.classList.contains('kubed-picker-cell-disabled')).toBe(true);
    await act(async () => disabled.click());
    expect(onChange).not.toHaveBeenCalled();
    await act(async () => {
      (document.querySelector('[title="2026-11-05"]') as HTMLElement).click();
    });
    expect(onChange.mock.calls[0][0].format('YYYY-MM-DD')).toBe('2026-11-05');
    expect(onChange.mock.calls[0][1]).toBe('2026-11-05');
    await act(async () => {
      (document.querySelector('.kubed-picker-clear') as HTMLElement).click();
    });
    expect(onChange).toHaveBeenLastCalledWith(null, '');
    wrapper.unmount();
  });

  it('keeps popup presentation, locale and container props', async () => {
    const popupContainer = document.createElement('div');
    document.body.appendChild(popupContainer);
    const locale = { ...en, lang: { ...en.lang, placeholder: 'Choose a date' } };
    const wrapper = mountWithTheme(
      <DatePicker
        open
        locale={locale}
        getPopupContainer={() => popupContainer}
        dropdownClassName="legacy-popup"
        popupClassName="custom-popup"
        popupStyle={{ zIndex: 4321 }}
      />
    );

    try {
      await act(async () => {});
      expect(wrapper.find('input').attr('placeholder')).toBe('Choose a date');
      const popup = popupContainer.querySelector('.kubed-picker-dropdown') as HTMLElement;
      expect(popup.classList.contains('legacy-popup')).toBe(true);
      expect(popup.classList.contains('custom-popup')).toBe(true);
      expect(popup.style.zIndex).toBe('4321');
    } finally {
      wrapper.unmount();
      popupContainer.remove();
    }
  });

  it('keeps range callbacks and clearing values', async () => {
    const onChange = jest.fn();
    const dateRender = jest.fn((date) => (
      <div className="kubed-picker-cell-inner">{date.date()}</div>
    ));
    const wrapper = mountWithTheme(
      <DatePicker.RangePicker
        open
        defaultPickerValue={[dayjs('2026-11-04'), dayjs('2026-11-04')]}
        onChange={onChange}
        dateRender={dateRender}
      />
    );

    await act(async () => {
      (wrapper.getDOMNode().querySelectorAll('input')[0] as HTMLInputElement).focus();
    });
    expect(dateRender).toHaveBeenLastCalledWith(expect.anything(), expect.anything(), {
      range: 'start',
    });
    await act(async () => {
      (document.querySelector('[title="2026-11-05"]') as HTMLElement).click();
    });
    await act(async () => {
      (wrapper.getDOMNode().querySelectorAll('input')[1] as HTMLInputElement).focus();
    });
    expect(dateRender).toHaveBeenLastCalledWith(expect.anything(), expect.anything(), {
      range: 'end',
    });
    await act(async () => {
      (document.querySelector('[title="2026-11-07"]') as HTMLElement).click();
    });
    expect(onChange.mock.calls[0][0].map((date) => date.format('YYYY-MM-DD'))).toEqual([
      '2026-11-05',
      '2026-11-07',
    ]);
    expect(onChange.mock.calls[0][1]).toEqual(['2026-11-05', '2026-11-07']);
    await act(async () => {
      (document.querySelector('.kubed-picker-clear') as HTMLElement).click();
    });
    expect(onChange).toHaveBeenLastCalledWith(null, ['', '']);
    wrapper.unmount();
  });

  it.each([
    ['date', DatePicker],
    ['date range', DatePicker.RangePicker],
    ['time', TimePicker],
    ['time range', TimePicker.RangePicker],
  ])('opens, focuses and unmounts the %s picker under StrictMode', async (_, Component) => {
    const ref = createRef<CommonPickerMethods>();
    const consoleError = jest.spyOn(console, 'error');
    const wrapper = mountWithTheme(
      <StrictMode>
        <Component ref={ref} open />
      </StrictMode>
    );

    try {
      await act(async () => {});
      expect(document.querySelector('.kubed-picker-dropdown')).not.toBeNull();
      act(() => ref.current.focus());
      expect(document.activeElement?.tagName).toBe('INPUT');
      act(() => ref.current.blur());
      wrapper.unmount();
      expect(ref.current).toBeNull();
      expect(document.querySelector('.kubed-picker-dropdown')).toBeNull();
      expect(consoleError.mock.calls.flat().join(' ')).not.toMatch(/element\.ref|findDOMNode/);
    } finally {
      wrapper.unmount();
      consoleError.mockRestore();
    }
  });
});
