import React, { useMemo } from 'react';
import cx from 'clsx';
import styled from 'styled-components';
import FieldForm, { List } from 'rc-field-form';
import { FormProps as RcFormProps } from 'rc-field-form/lib/Form';
import { Options } from 'scroll-into-view-if-needed';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { ColProps } from '../Grid/Col';
import { FormContext, FormContextProps } from './context';
import { FormLabelAlign } from './types';
import forwardRef from '../utils/forwardRef';
import { DefaultProps } from '../theme';
import { FormItem } from './FormItem/FormItem';
import useForm, { FormInstance } from './hooks/useForm';

export { List, FormItem };

export type FormLayout = 'horizontal' | 'inline' | 'vertical';

const StyledFieldForm = styled(FieldForm)`
  &.form-inline {
    display: flex;
    gap: 12px;
  }
`;

export interface FormProps<Values = any> extends Omit<RcFormProps<Values>, 'form'>, DefaultProps {
  name?: string;
  layout?: FormLayout;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  form?: FormInstance<Values>;
  scrollToFirstError?: Options | boolean;
}

export const Form = forwardRef<FormProps, null>(
  (
    {
      name,
      layout = 'vertical',
      labelAlign = 'right',
      labelCol = { span: 4 },
      wrapperCol = { span: 14 },
      onFinishFailed,
      scrollToFirstError,
      form,
      className,
      ...rest
    },
    ref
  ) => {
    const [wrapForm] = useForm(form);
    const { __INTERNAL__ } = wrapForm;
    __INTERNAL__.name = name;

    const formContextValue = useMemo<FormContextProps>(
      () => ({
        name,
        labelAlign,
        labelCol,
        wrapperCol,
        layout,
        itemRef: __INTERNAL__.itemRef,
      }),
      [name, labelAlign, labelCol, wrapperCol, layout]
    );

    React.useImperativeHandle(ref, () => wrapForm);

    const onInternalFinishFailed = (errorInfo: ValidateErrorEntity) => {
      onFinishFailed?.(errorInfo);

      let defaultScrollToFirstError: Options = { block: 'nearest' };

      if (scrollToFirstError && errorInfo.errorFields.length) {
        if (typeof scrollToFirstError === 'object') {
          defaultScrollToFirstError = scrollToFirstError;
        }
        wrapForm.scrollToField(errorInfo.errorFields[0].name, defaultScrollToFirstError);
      }
    };

    return (
      <FormContext.Provider value={formContextValue}>
        <StyledFieldForm
          ref={ref}
          id={name}
          form={wrapForm}
          className={cx(className, { [`form-${layout}`]: true })}
          {...rest}
          onFinishFailed={onInternalFinishFailed}
          name={name}
        />
      </FormContext.Provider>
    );
  }
);

Form.displayName = '@kubed/components/Form';
