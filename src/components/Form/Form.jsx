import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Schema from "async-validator";
import { set, get, isFunction } from "lodash";

export default class Form extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    defaultData: PropTypes.object,
    data: PropTypes.object,
    type: PropTypes.string,
  };

  static defaultProps = {
    defaultData: {},
    className: "",
    type: "",
  };

  static childContextTypes = {
    formData: PropTypes.object,
    registerValidate: PropTypes.func,
    resetValidate: PropTypes.func,
    validateResults: PropTypes.array,
    resetValidateResults: PropTypes.func,
  };

  getChildContext() {
    return {
      formData: this.state.formData,
      registerValidate: this.registerValidate,
      resetValidate: this.resetValidate,
      validateResults: this.state.errors,
      resetValidateResults: this.resetValidateResults,
    };
  }

  constructor(props) {
    super(props);
    this.descriptor = {};

    this.state = { errors: [], formData: props.data || {} };
    this.customValidator = null;
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.formData) {
      return { formData: props.data || {} };
    }
    return null;
  }

  handleSubmit = (e) => {
    const { onSubmit } = this.props;

    e.preventDefault();

    this.validate(() => {
      onSubmit && onSubmit(this.state.formData);
    });
  };

  validate = (callback) => {
    if (isFunction(this.customValidator)) {
      this.customValidator(() => {
        this.validator(callback);
      });
    } else {
      this.validator(callback);
    }
  };

  validator = (callback) => {
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

  registerValidate = (name, rules) => {
    this.descriptor[name] = rules;
  };

  resetValidate = (name) => {
    delete this.descriptor[name];
  };

  resetValidateResults = (name) => {
    this.setState(({ errors }) => ({
      errors: errors.filter((error) => error.field !== name),
    }));
  };

  getData() {
    return this.state.formData;
  }

  setData(name, value) {
    set(this.state.formData, name, value);
  }

  resetData() {
    this.setState({ formData: this.props.defaultData });
  }

  setCustomValidator(validator) {
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
        {children}
      </form>
    );
  }
}
