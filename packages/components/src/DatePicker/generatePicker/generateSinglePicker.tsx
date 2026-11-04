// https://github.com/ant-design/ant-design/blob/master/components/date-picker/generatePicker/generateSinglePicker.tsx
import React, { useImperativeHandle, useRef } from 'react';
import cx from 'classnames';
import { Close, Clock, Calendar } from '@kubed/icons';
import RCPicker from 'rc-picker';
import { PickerMode, PickerRef } from 'rc-picker/lib/interface';
import { GenerateConfig } from 'rc-picker/lib/generate';
import dayjs from 'dayjs';
import { getPlaceholder } from '../util';
import { useLocales } from '../../ConfigProvider/LocaleProvider/LocaleContext';
import { PickerProps, PickerDateProps, PickerTimeProps, Components } from '.';
import { CommonPickerMethods } from './interface';
import forwardRef from '../../utils/forwardRef';
import { PickerDropdown } from '../DatePicker.styles';

export default function generatePicker<DateType extends object>(
  generateConfig: GenerateConfig<DateType>
) {
  type DatePickerProps = PickerProps<DateType>;

  function getPicker<InnerPickerProps extends DatePickerProps>(
    picker?: PickerMode,
    displayName?: string
  ) {
    const Picker = forwardRef<InnerPickerProps, any>((props, ref) => {
      const prefixCls = 'kubed-picker';
      const {
        prefixCls: customizePrefixCls,
        className,
        size: customizeSize,
        bordered = true,
        placeholder,
        locale: customizeLocale,
        dropdownClassName,
        popupClassName,
        popupStyle,
        dropdownAlign,
        popupAlign,
        classNames,
        styles,
        allowClear = true,
        clearIcon = <Close size={16} />,
        showToday = true,
        showNow,
        ...restProps
      } = props;
      const mergedPicker = picker || props.picker;

      const { locales, locale } = useLocales();
      const { DatePicker: datePickerLocales } = locales;
      const mergedLocale = customizeLocale || datePickerLocales;
      dayjs.locale(locale);

      const pickerRef = useRef<PickerRef | null>(null);
      useImperativeHandle(ref, () => ({
        focus: () => {
          if (pickerRef.current) {
            pickerRef.current.focus();
          }
        },
        blur: () => {
          if (pickerRef.current) {
            pickerRef.current.blur();
          }
        },
      }));

      return (
        <>
          <PickerDropdown />
          <RCPicker<DateType>
            ref={pickerRef}
            placeholder={getPlaceholder(mergedPicker, mergedLocale, placeholder)}
            suffixIcon={mergedPicker === 'time' ? <Clock size={16} /> : <Calendar size={16} />}
            prevIcon={<span className={`${prefixCls}-prev-icon`} />}
            nextIcon={<span className={`${prefixCls}-next-icon`} />}
            superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
            superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
            {...restProps}
            picker={mergedPicker}
            multiple={false}
            showNow={showNow ?? (!mergedPicker || mergedPicker === 'date' ? showToday : undefined)}
            allowClear={
              allowClear
                ? { clearIcon, ...(typeof allowClear === 'object' ? allowClear : {}) }
                : false
            }
            locale={mergedLocale.lang}
            popupAlign={popupAlign || dropdownAlign}
            classNames={{
              ...classNames,
              popup: cx(dropdownClassName, popupClassName, classNames?.popup),
            }}
            styles={{ ...styles, popup: { ...popupStyle, ...styles?.popup } }}
            className={cx(
              {
                [`${prefixCls}-borderless`]: !bordered,
              },
              className
            )}
            prefixCls={prefixCls}
            generateConfig={generateConfig}
            components={Components}
          />
        </>
      );
    });

    if (displayName) {
      Picker.displayName = displayName;
    }

    return Picker as React.ForwardRefExoticComponent<
      React.PropsWithoutRef<InnerPickerProps> & React.RefAttributes<CommonPickerMethods>
    >;
  }

  const DatePicker = getPicker<DatePickerProps>();
  const WeekPicker = getPicker<Omit<PickerDateProps<DateType>, 'picker'>>('week', 'WeekPicker');
  const MonthPicker = getPicker<Omit<PickerDateProps<DateType>, 'picker'>>('month', 'MonthPicker');
  const YearPicker = getPicker<Omit<PickerDateProps<DateType>, 'picker'>>('year', 'YearPicker');
  const TimePicker = getPicker<Omit<PickerTimeProps<DateType>, 'picker'>>('time', 'TimePicker');
  const QuarterPicker = getPicker<Omit<PickerDateProps<DateType>, 'picker'>>(
    'quarter',
    'QuarterPicker'
  );

  return { DatePicker, WeekPicker, MonthPicker, YearPicker, TimePicker, QuarterPicker };
}
