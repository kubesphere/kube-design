import React, { FC, useImperativeHandle, useRef } from 'react';
import cx from 'classnames';
import { Calendar, Clock, Close, Next } from '@kubed/icons';
import { RangePicker as RCRangePicker } from 'rc-picker';
import { GenerateConfig } from 'rc-picker/lib/generate';
import dayjs from 'dayjs';
import { getRangePlaceholder } from '../util';
import { RangePickerProps, getTimeProps, Components } from '.';
import forwardRef from '../../utils/forwardRef';
import { useLocales } from '../../ConfigProvider/LocaleProvider/LocaleContext';

export default function generateRangePicker<DateType>(
  generateConfig: GenerateConfig<DateType>
): FC<RangePickerProps<DateType>> {
  const RangePicker = forwardRef<RangePickerProps<DateType>, any>((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      getPopupContainer: customGetPopupContainer,
      className,
      size: customizeSize,
      bordered = true,
      placeholder,
      ...restProps
    } = props;
    const { format, showTime, picker } = props as any;
    const prefixCls = 'kubed-picker';
    // const rootPrefixCls = 'kubed-picker-root';

    let additionalOverrideProps: any = {};

    additionalOverrideProps = {
      ...additionalOverrideProps,
      ...(showTime ? getTimeProps({ format, picker, ...showTime }) : {}),
      // FIXME: remove any
      ...(picker === 'time' ? getTimeProps({ format, ...props, picker } as any) : {}),
    };

    const pickerRef = useRef<RCRangePicker<DateType>>();
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
    dayjs.locale(locale);

    return (
      <RCRangePicker<DateType>
        separator={<Next size={16} />}
        ref={pickerRef}
        placeholder={getRangePlaceholder(picker, datePickerLocales, placeholder)}
        suffixIcon={picker === 'time' ? <Clock size={16} /> : <Calendar size={16} />}
        clearIcon={<Close size={16} />}
        prevIcon={<span className={`${prefixCls}-prev-icon`} />}
        nextIcon={<span className={`${prefixCls}-next-icon`} />}
        superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
        superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
        allowClear
        // transitionName={`${rootPrefixCls}-slide-up`}
        {...restProps}
        {...additionalOverrideProps}
        className={cx(
          {
            // [`${prefixCls}-${mergedSize}`]: mergedSize,
            [`${prefixCls}-borderless`]: !bordered,
          },
          className
        )}
        locale={datePickerLocales!.lang}
        prefixCls={prefixCls}
        // getPopupContainer={customGetPopupContainer || getPopupContainer}
        generateConfig={generateConfig}
        components={Components}
        // direction={direction}
      />
    );
  });

  return RangePicker;
}
