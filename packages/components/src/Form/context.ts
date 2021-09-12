// https://github.dev/ant-design/ant-design/blob/master/components/date-picker/index.tsx
import React from 'react';
import { FormProvider } from 'rc-field-form';
import { FormProviderProps as RcFormProviderProps } from 'rc-field-form/lib/FormContext';
import { FormLabelAlign } from './types';
import { ColProps } from '../Grid/Col';
import { KubedSizes } from '../theme';

export interface FormContextProps {
  layout: string;
  name?: string;
  colon?: boolean;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  itemRef?: (name: (string | number)[]) => (node: React.ReactElement) => void;
  size?: KubedSizes;
}

export const FormContext = React.createContext<FormContextProps>({
  labelAlign: 'right',
  layout: 'vertical',
  itemRef: (() => {}) as any,
});

/** Form Item Context. Used for Form noStyle Item error collection */
export interface FormItemContextProps {
  updateItemErrors: (name: string, errors: string[], originName?: string) => void;
}

export const FormItemContext = React.createContext<FormItemContextProps>({
  updateItemErrors: () => {},
});

/** Form Provider */
export interface FormProviderProps extends Omit<RcFormProviderProps, 'validateMessages'> {}

// @ts-ignore
export { FormProvider };
