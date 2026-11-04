import React, { useImperativeHandle, useRef } from 'react';
import cx from 'classnames';
import { Calendar, Clock, Close, Next } from '@kubed/icons';
import { RangePicker as RCRangePicker } from 'rc-picker';
import { GenerateConfig } from 'rc-picker/lib/generate';
import { RangePickerRef } from 'rc-picker/lib/interface';
import dayjs from 'dayjs';
import { getRangePlaceholder } from '../util';
import { RangePickerProps, Components } from '.';
import { CommonPickerMethods } from './interface';
import { PickerDropdown } from '../DatePicker.styles';
import forwardRef from '../../utils/forwardRef';
import { useLocales } from '../../ConfigProvider/LocaleProvider/LocaleContext';

export default function generateRangePicker<DateType extends object>(
  generateConfig: GenerateConfig<DateType>
) {
  const RangePicker = forwardRef<RangePickerProps<DateType>, any>((props, ref) => {
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
      dateRender,
      cellRender,
      ...restProps
    } = props;
    const { picker } = props;
    const prefixCls = 'kubed-picker';
    const pickerRef = useRef<RangePickerRef | null>(null);
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

    const { locales, locale } = useLocales();
    const { DatePicker: datePickerLocales } = locales;
    const mergedLocale = customizeLocale || datePickerLocales;
    dayjs.locale(locale);

    return (
      <>
        <PickerDropdown />
        <RCRangePicker<DateType>
          separator={<Next size={16} />}
          ref={pickerRef}
          placeholder={getRangePlaceholder(picker, mergedLocale, placeholder)}
          suffixIcon={picker === 'time' ? <Clock size={16} /> : <Calendar size={16} />}
          prevIcon={<span className={`${prefixCls}-prev-icon`} />}
          nextIcon={<span className={`${prefixCls}-next-icon`} />}
          superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
          superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
          {...restProps}
          cellRender={
            cellRender ||
            (dateRender
              ? (current, info) =>
                  info.type === 'date'
                    ? dateRender(current as DateType, info.today, { range: info.range! })
                    : info.originNode
              : undefined)
          }
          allowClear={
            allowClear
              ? { clearIcon, ...(typeof allowClear === 'object' ? allowClear : {}) }
              : false
          }
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
          locale={mergedLocale.lang}
          prefixCls={prefixCls}
          generateConfig={generateConfig}
          components={Components}
        />
      </>
    );
  });

  return RangePicker as React.ForwardRefExoticComponent<
    RangePickerProps<DateType> & React.RefAttributes<CommonPickerMethods>
  >;
}
