// https://github.com/ant-design/ant-design/blob/master/components/time-picker/index.tsx
import React from 'react';
import { Dayjs } from 'dayjs';
// eslint-disable-next-line import/no-cycle
import { DatePicker } from '../DatePicker/DatePicker';
// eslint-disable-next-line import/no-cycle
import { PickerTimeProps, RangePickerTimeProps } from '../DatePicker/generatePicker';
import { CommonPickerMethods } from '../DatePicker/generatePicker/interface';

const { TimePicker: InternalTimePicker, RangePicker: InternalRangePicker } = DatePicker;

export interface TimePickerLocale {
  placeholder?: string;
  rangePlaceholder?: [string, string];
}

export interface TimeRangePickerProps extends Omit<RangePickerTimeProps<Dayjs>, 'picker'> {
  popupClassName?: string;
}

const RangePicker = React.forwardRef<CommonPickerMethods, TimeRangePickerProps>((props, ref) => (
  <InternalRangePicker {...props} picker="time" mode={undefined} ref={ref} />
));

export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {
  popupClassName?: string;
}

const TimePicker = React.forwardRef<CommonPickerMethods, TimePickerProps>(
  ({ renderExtraFooter, ...restProps }, ref) => {
    const internalRenderExtraFooter = React.useMemo(() => {
      if (renderExtraFooter) {
        return renderExtraFooter;
      }
      return undefined;
    }, [renderExtraFooter]);

    return (
      <InternalTimePicker
        {...restProps}
        mode={undefined}
        ref={ref}
        renderExtraFooter={internalRenderExtraFooter}
      />
    );
  }
);

TimePicker.displayName = 'kubed/components/TimePicker';

type MergedTimePicker = typeof TimePicker & {
  RangePicker: typeof RangePicker;
};

(TimePicker as MergedTimePicker).RangePicker = RangePicker;

export default TimePicker as MergedTimePicker;
