import React, { FC, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames';
import Calendar from '@kubed/icons/dist/calendar';
import Clock from '@kubed/icons/dist/clock';
import Close from '@kubed/icons/dist/close';
import Next from '@kubed/icons/dist/next';
import { RangePicker as RCRangePicker } from 'rc-picker';
import { GenerateConfig } from 'rc-picker/lib/generate';
import { getRangePlaceholder } from '../util';
import { RangePickerProps, getTimeProps, Components } from '.';
// import { CommonPickerMethods } from './interface';
import forwardRef from '../../utils/forwardRef';
import { useLocales } from '../../ConfigProvider/LocaleProvider/LocaleContext';

export default function generateRangePicker<DateType>(
  generateConfig: GenerateConfig<DateType>
): FC<RangePickerProps<DateType>> {
  // class RangePicker2 extends React.Component<RangePickerProps<DateType>> {
  //   static contextType = ConfigContext;
  //
  //   context: ConfigConsumerProps;
  //
  //   pickerRef = React.createRef<RCRangePicker<DateType>>();
  //
  //   focus = () => {
  //     if (this.pickerRef.current) {
  //       this.pickerRef.current.focus();
  //     }
  //   };
  //
  //   blur = () => {
  //     if (this.pickerRef.current) {
  //       this.pickerRef.current.blur();
  //     }
  //   };
  //
  //   renderPicker = (contextLocale: PickerLocale) => {
  //     const locale = { ...contextLocale, ...this.props.locale };
  //     const { getPrefixCls, direction, getPopupContainer } = this.context;
  //     const {
  //       prefixCls: customizePrefixCls,
  //       getPopupContainer: customGetPopupContainer,
  //       className,
  //       size: customizeSize,
  //       bordered = true,
  //       placeholder,
  //       ...restProps
  //     } = this.props;
  //     const { format, showTime, picker } = this.props as any;
  //     const prefixCls = getPrefixCls('picker', customizePrefixCls);
  //
  //     let additionalOverrideProps: any = {};
  //
  //     additionalOverrideProps = {
  //       ...additionalOverrideProps,
  //       ...(showTime ? getTimeProps({ format, picker, ...showTime }) : {}),
  //       ...(picker === 'time' ? getTimeProps({ format, ...this.props, picker }) : {}),
  //     };
  //     const rootPrefixCls = getPrefixCls();
  //
  //     return (
  //       <SizeContext.Consumer>
  //         {(size) => {
  //           const mergedSize = customizeSize || size;
  //
  //           return (
  //             <RCRangePicker<DateType>
  //               separator={
  //                 <span aria-label="to" className={`${prefixCls}-separator`}>
  //                   <Next />
  //                 </span>
  //               }
  //               ref={this.pickerRef}
  //               placeholder={getRangePlaceholder(picker, locale, placeholder)}
  //               suffixIcon={picker === 'time' ? <Clock /> : <Calendar />}
  //               clearIcon={<Close />}
  //               prevIcon={<span className={`${prefixCls}-prev-icon`} />}
  //               nextIcon={<span className={`${prefixCls}-next-icon`} />}
  //               superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
  //               superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
  //               allowClear
  //               transitionName={`${rootPrefixCls}-slide-up`}
  //               {...restProps}
  //               {...additionalOverrideProps}
  //               className={classNames(
  //                 {
  //                   [`${prefixCls}-${mergedSize}`]: mergedSize,
  //                   [`${prefixCls}-borderless`]: !bordered,
  //                 },
  //                 className
  //               )}
  //               locale={locale!.lang}
  //               prefixCls={prefixCls}
  //               getPopupContainer={customGetPopupContainer || getPopupContainer}
  //               generateConfig={generateConfig}
  //               components={Components}
  //               direction={direction}
  //             />
  //           );
  //         }}
  //       </SizeContext.Consumer>
  //     );
  //   };
  //
  //   render() {
  //     return (
  //       <LocaleReceiver componentName="DatePicker" defaultLocale={enUS}>
  //         {this.renderPicker}
  //       </LocaleReceiver>
  //     );
  //   }
  // }

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
    const rootPrefixCls = 'kubed-picker-root';

    let additionalOverrideProps: any = {};

    additionalOverrideProps = {
      ...additionalOverrideProps,
      ...(showTime ? getTimeProps({ format, picker, ...showTime }) : {}),
      ...(picker === 'time' ? getTimeProps({ format, ...this.props, picker }) : {}),
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
        separator={
          <span aria-label="to" className={`${prefixCls}-separator`}>
            <Next />
          </span>
        }
        ref={pickerRef}
        placeholder={getRangePlaceholder(picker, locales, placeholder)}
        suffixIcon={picker === 'time' ? <Clock /> : <Calendar />}
        clearIcon={<Close />}
        prevIcon={<span className={`${prefixCls}-prev-icon`} />}
        nextIcon={<span className={`${prefixCls}-next-icon`} />}
        superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
        superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
        allowClear
        transitionName={`${rootPrefixCls}-slide-up`}
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
