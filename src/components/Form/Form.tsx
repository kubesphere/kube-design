import React from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";
import Schema, { ErrorList, Rules, RuleItem } from "async-validator";
import { debounce, set, get, isFunction, DebouncedFunc } from "lodash";

import { ExtendRuleItem } from './Item'

export interface FormProps {
  className?: string,
  onChange: () => void,
  onSubmit: (data: object) => void,
  defaultData: object,
  data?: object,
  type: string,
}

export interface FormState {
  errors: ErrorList,
  formData: object,
}

export interface IFormContext {
  formData: object,
  onFormChange: DebouncedFunc<(name: string, value: any) => void> | null,
  registerValidate: (name: string, rules: ExtendRuleItem[]) => void,
  resetValidate: (name: string) => void,
  validateResults: ErrorList,
  resetValidateResults: (name: string) => void,
}

export const FormContext = React.createContext<IFormContext | null>(null)

export default class Form extends React.Component<FormProps, FormState> {
  static defaultProps = {
    defaultData: {},
    className: "",
    type: "",
  };

  static childContextTypes = {
    formData: PropTypes.object,
    onFormChange: PropTypes.func,
    registerValidate: PropTypes.func,
    resetValidate: PropTypes.func,
    validateResults: PropTypes.array,
    resetValidateResults: PropTypes.func,
  };

  getChildContext(): IFormContext {
    return {
      formData: this.state.formData,
      onFormChange: this.triggerFormChange,
      registerValidate: this.registerValidate,
      resetValidate: this.resetValidate,
      validateResults: this.state.errors,
      resetValidateResults: this.resetValidateResults,
    };
  }

  descriptor: Rules = {}

  state = { errors: [], formData: this.props.data || {} }

  triggerFormChange = this.props.onChange
    ? debounce(this.props.onChange, 500)
    : null

  customValidator: CallbackWrapper<Callback> | null = null

  static getDerivedStateFromProps(props: FormProps, state: FormState) {
    if (props.data !== state.formData) {
      return { formData: props.data || {} };
    }
    return null;
  }

  handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    const { onSubmit } = this.props;

    e.preventDefault();

    this.validate(() => {
      onSubmit && onSubmit(this.state.formData);
    });
  };

  validate = (callback?: Callback) => {
    if (isFunction(this.customValidator)) {
      this.customValidator(() => {
        this.validator(callback);
      });
    } else {
      this.validator(callback);
    }
  };

  validator = (callback?: Callback) => {
    const schema = new Schema(this.descriptor);
    const data = Object.keys(this.descriptor).reduce(
      (prev, cur) => ({
        ...prev,
        [cur]: get(this.state.formData, cur),
      }),
      {}
    );

    schema.validate(data, { firstFields: true }, (errors) => {
      if (errors) {
        return this.setState({ errors });
      }
      callback && callback();
    });
  };

  registerValidate = (name: string, rules: RuleItem[]) => {
    this.descriptor[name] = rules;
  };

  resetValidate = (name: string) => {
    delete this.descriptor[name];
  };

  resetValidateResults = (name: string) => {
    this.setState(({ errors }) => ({
      errors: errors.filter((error) => error.field !== name),
    }));
  };

  getData() {
    return this.state.formData;
  }

  setData(name: string, value: any) {
    set(this.state.formData, name, value);
  }

  resetData() {
    this.setState({ formData: this.props.defaultData });
  }

  setCustomValidator(validator: CallbackWrapper<Callback>) {
    this.customValidator = validator;
  }

  render() {
    const { className, children, type } = this.props;
    const classNames = classnames("form", className);

    if (type === "inner") {
      return <div className={classNames}>{children}</div>;
    }

    return (
      <form
        className={classNames}
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <FormContext.Provider value={this.getChildContext()}>
          {children}
        </FormContext.Provider>
      </form>
    );
  }
}
