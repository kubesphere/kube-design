import React from "react";
import Schema, { RuleItem, ValidateError } from "async-validator";
import {
  set,
  get,
  debounce,
  isFunction,
  isEmpty,
  isObject,
  isUndefined,
} from "lodash";
import classnames from "classnames";

import { FormContext, IFormContext } from "./Form";
import { GroupContext, IGroupContext } from "./Group";

export type ExtendRuleItem = RuleItem &
  Partial<{
    checkOnSubmit: boolean;
  }>;

interface FormItemError {
  message: string | { message: string };
}

export interface FormItemProps {
  className?: string,
  error?: FormItemError,
  rules?: ExtendRuleItem[],
  children: React.ReactElement,
  desc?: string,
  label?: string,
  formContext: IFormContext,
  groupContext: IGroupContext
}

export interface FormItemState {
  error?: ValidateError,
  componentError?: FormItemError,
  value: any,
}

class FormItem extends React.Component<FormItemProps, FormItemState> {
  state = {
    error: undefined,
    componentError: undefined,
    value: undefined,
  };

  schema: Schema | undefined = undefined;

  componentDidMount() {
    const { children, rules, formContext, groupContext } = this.props;
    if (rules) {
      formContext.registerValidate(children.props.name, rules);
      this.schema = new Schema({
        [children.props.name]: rules.filter((rule) => !rule.checkOnSubmit),
      });
    }
    groupContext.registerGroup(children.props.name);
  }

  componentWillUnmount() {
    const { children, rules, formContext, groupContext } = this.props;
    if (rules) {
      formContext.resetValidate(children.props.name);
      this.schema = undefined;
    }
    groupContext.unRegisterGroup(children.props.name);
  }

  handleValueChange = (
    name: string,
    onChange: Callback,
    value: any,
    ...rest: any
  ) => {
    value = get(value, "currentTarget.value", value);
    const { formContext } = this.props

    if (name) {
      const { formData, onFormChange } = formContext;
      set(formData, name, value);
      onFormChange && onFormChange(name, value);
    }

    if (isFunction(onChange)) {
      onChange(value, rest);
    }

    const { validateResults, resetValidateResults } = formContext;
    if (
      validateResults &&
      validateResults.find((item) => item.field === name)
    ) {
      resetValidateResults && resetValidateResults(name);
    }

    this.setState({ value });

    if (this.schema && !this.state.componentError) {
      this.validate({ [name]: value });
    }
  };

  handleError = (
    name: string,
    onError: Callback,
    error?: FormItemError,
    ...rest: any
  ) => {
    if (error !== this.state.componentError) {
      this.setState({ componentError: error });
    }

    if (isFunction(onError)) {
      onError(error, rest);
    }
  };

  validate = debounce((data) => {
    this.schema?.validate(data, { firstFields: true }, (errors) => {
      this.setState({ error: errors ? errors[0] : undefined });
    });
  }, 200);

  getValue = (
    name: string,
    { value: propsValue, defaultValue }: { value: any; defaultValue: any }
  ) => {
    const { formData = {} } = this.props.formContext;
    let value;

    if (isUndefined(formData) || isEmpty(name)) {
      value = propsValue;
    } else {
      value = get(formData, name);
    }

    if (!isUndefined(value)) {
      return value;
    }

    if (!isUndefined(defaultValue) && defaultValue !== "") {
      set(formData, name, defaultValue);
    }

    return defaultValue;
  };

  render() {
    const { children, error, className, desc, label, rules = [] } = this.props;
    const { validateResults } = this.props.formContext;
    const name = children.props.name;

    const childNode = React.cloneElement(children, {
      ...children.props,
      id: name,
      onChange: this.handleValueChange.bind(
        this,
        name,
        children.props.onChange
      ),
      onError: this.handleError.bind(this, name, children.props.onError),
      value: this.getValue(name, children.props),
    });

    const lastError =
      error ||
      this.state.componentError ||
      this.state.error ||
      (validateResults && validateResults.find((item) => item.field === name));

    const classNames = classnames(
      "form-item",
      { "error-item": !isEmpty(lastError) },
      className
    );

    const isRequired = rules.some((rule) => rule.required);

    return (
      <div className={classNames}>
        {label && (
          <label className="form-item-label" htmlFor={name}>
            {label}
            {isRequired ? <span className="form-item-required">*</span> : null}
          </label>
        )}
        <div className="form-item-control">
          {childNode}
          {!isEmpty(lastError) && (
            <div className="form-item-error">
              {isObject(lastError?.message)
                ? lastError?.message?.message
                : lastError?.message}
            </div>
          )}
          {isEmpty(lastError) && desc && (
            <div className="form-item-desc">{desc}</div>
          )}
        </div>
      </div>
    );
  }
}

export default function FormItemWrapper(props: Omit<FormItemProps, "formContext" | "groupContext">) {
  return (
    <FormContext.Consumer>
      {(formContext) =>
        <GroupContext.Consumer>
          {(groupContext) =>
            <FormItem
              {...props}
              formContext={formContext} groupContext={groupContext}
            />
          }
        </GroupContext.Consumer>
      }
    </FormContext.Consumer>
  );
}
