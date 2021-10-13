import React, { FC, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames';
import Calendar from '@kubed/icons/dist/calendar';
import Clock from '@kubed/icons/dist/clock';
import Close from '@kubed/icons/dist/close';
import Next from '@kubed/icons/dist/next';
import { RangePicker as RCRangePicker } from 'rc-picker';
import { GenerateConfig } from 'rc-picker/lib/generate';
// eslint-disable-next-line import/no-cycle
import { getRangePlaceholder } from '../util';
// eslint-disable-next-line import/no-cycle
import { RangePickerProps, getTimeProps, Components } from '.';
// import { CommonPickerMethods } from './interface';
import forwardRef from '../../utils/forwardRef';
// eslint-disable-next-line import/no-cycle
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
      ...(picker === 'time' ? getTimeProps({ format, ...props, picker }) : {}),
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

    const locale = useLocales();
    const { DatePicker: locales } = locale;

    return (
      <RCRangePicker<DateType>
        separator={<Next size={16} />}
        ref={pickerRef}
        placeholder={getRangePlaceholder(picker, locales, placeholder)}
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
        className={classNames(
          {
            // [`${prefixCls}-${mergedSize}`]: mergedSize,
            [`${prefixCls}-borderless`]: !bordered,
          },
          className
        )}
        locale={locales!.lang}
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
