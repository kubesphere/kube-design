import * as React from 'react';
import DatePicker from './DatePicker';

const { RangePicker } = DatePicker;

export default {
  title: 'Components/DatePicker',
};

export const Basic = () => <DatePicker />;

export const Range = () => <RangePicker />;
