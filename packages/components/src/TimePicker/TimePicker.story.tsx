import * as React from 'react';
import TimePicker from './TimePicker';

const { RangePicker } = TimePicker;

export default {
  title: 'Components/TimePicker',
};

export const Basic = () => <TimePicker />;

export const Range = () => <RangePicker />;
