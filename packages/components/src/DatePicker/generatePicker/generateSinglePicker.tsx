import React, { FunctionComponent, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames';
import Calendar from '@kubed/icons/dist/calendar';
import Clock from '@kubed/icons/dist/clock';
import Close from '@kubed/icons/dist/close';
import RCPicker from 'rc-picker';
import { PickerMode } from 'rc-picker/lib/interface';
import { GenerateConfig } from 'rc-picker/lib/generate';
// eslint-disable-next-line import/no-cycle
import { getPlaceholder } from '../util';
// eslint-disable-next-line import/no-cycle
import { useLocales } from '../../ConfigProvider/LocaleProvider/LocaleContext';
// eslint-disable-next-line import/no-cycle
import { PickerProps, PickerDateProps, PickerTimeProps, getTimeProps, Components } from '.';
import { CommonPickerMethods } from './interface';
import forwardRef from '../../utils/forwardRef';
import { PickerDropdown } from '../DatePicker.styles';

// const getPopupContainer = (triggerNode) => triggerNode;

export default function generatePicker<DateType>(generateConfig: GenerateConfig<DateType>) {
  type DatePickerProps = PickerProps<DateType>;

  function getPicker<InnerPickerProps extends DatePickerProps>(
    picker?: PickerMode,
    displayName?: string
  ) {
    const Picker = forwardRef<InnerPickerProps, any>((props, ref) => {
      const prefixCls = 'kubed-picker';
      // const rootPrefixCls = 'kubed-picker-root';

      const {
        prefixCls: customizePrefixCls,
        getPopupContainer: customizeGetPopupContainer,
        className,
        size: customizeSize,
        bordered = true,
        placeholder,
        ...restProps
      } = props;
      const { format, showTime } = props as any;

      const additionalProps = {
        showToday: true,
      };

      let additionalOverrideProps: any = {};
      if (picker) {
        additionalOverrideProps.picker = picker;
      }
      const mergedPicker = picker || props.picker;

      additionalOverrideProps = {
        ...additionalOverrideProps,
        ...(showTime ? getTimeProps({ format, picker: mergedPicker, ...showTime }) : {}),
        ...(mergedPicker === 'time'
          ? getTimeProps({ format, ...props, picker: mergedPicker })
          : {}),
      };

      const locale = useLocales();
      const { DatePicker: locales } = locale;

      const pickerRef = useRef<CommonPickerMethods>();
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
          <RCPicker
            ref={pickerRef}
            placeholder={getPlaceholder(mergedPicker, locales, placeholder)}
            suffixIcon={mergedPicker === 'time' ? <Clock size={16} /> : <Calendar size={16} />}
            clearIcon={<Close size={16} />}
            prevIcon={<span className={`${prefixCls}-prev-icon`} />}
            nextIcon={<span className={`${prefixCls}-next-icon`} />}
            superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
            superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
            allowClear
            // transitionName={`${rootPrefixCls}-slide-up`}
            {...additionalProps}
            {...restProps}
            {...additionalOverrideProps}
            locale={locales!.lang}
            className={classNames(
              {
                [`${prefixCls}-borderless`]: !bordered,
              },
              className
            )}
            prefixCls={prefixCls}
            // getPopupContainer={customizeGetPopupContainer || getPopupContainer}
            generateConfig={generateConfig}
            components={Components}
          />
        </>
      );
    });

    if (displayName) {
      Picker.displayName = displayName;
    }

    return Picker as FunctionComponent<InnerPickerProps>;
  }

  const DatePicker = getPicker<DatePickerProps>();
  const WeekPicker = getPicker<Omit<PickerDateProps<DateType>, 'picker'>>('week', 'WeekPicker');
  const MonthPicker = getPicker<Omit<PickerDateProps<DateType>, 'picker'>>('month', 'MonthPicker');
  const YearPicker = getPicker<Omit<PickerDateProps<DateType>, 'picker'>>('year', 'YearPicker');
  const TimePicker = getPicker<Omit<PickerTimeProps<DateType>, 'picker'>>('time', 'TimePicker');
  const QuarterPicker = getPicker<Omit<PickerTimeProps<DateType>, 'picker'>>(
    'quarter',
    'QuarterPicker'
  );

  return { DatePicker, WeekPicker, MonthPicker, YearPicker, TimePicker, QuarterPicker };
}
