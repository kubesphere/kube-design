import React, { createRef } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker, DatePickerProps, RangePickerProps } from '../src/DatePicker/DatePicker';
import TimePicker from '../src/TimePicker/TimePicker';
import { CommonPickerMethods } from '../src/DatePicker/generatePicker/interface';

const date = dayjs('2026-11-04');
const ref = createRef<CommonPickerMethods>();

const onChange: DatePickerProps['onChange'] = (value, text) => {
  const selected: Dayjs | null = value;
  const formatted: string = text;
  return selected?.format(formatted);
};
const onRangeChange: RangePickerProps['onChange'] = (values, text) => {
  const selected: [Dayjs | null, Dayjs | null] | null = values;
  const formatted: [string, string] = text;
  return selected?.[0]?.format(formatted[0]);
};

export const pickerContracts = (
  <>
    <DatePicker ref={ref} value={date} onChange={onChange} popupStyle={{ zIndex: 3000 }} />
    <DatePicker value={null} onChange={onChange} />
    <DatePicker.RangePicker
      ref={ref}
      value={[date, null]}
      allowEmpty={[false, true]}
      onChange={onRangeChange}
      dateRender={(current, today, info) => `${info.range}: ${current.diff(today, 'day')}`}
    />
    <TimePicker ref={ref} value={date} format="HH:mm" onChange={onChange} />
    <TimePicker.RangePicker ref={ref} value={[date, date]} onChange={onRangeChange} />
  </>
);

// @ts-expect-error Single selection does not accept a date array.
export const invalidSingle = <DatePicker value={[date, date]} />;
// @ts-expect-error Range selection requires a pair of dates.
export const invalidRange = <DatePicker.RangePicker value={date} />;
// @ts-expect-error Date values use Dayjs rather than formatted strings.
export const invalidTime = <TimePicker value="10:20" />;
