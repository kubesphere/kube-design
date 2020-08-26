import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Checkbox } from "../Checkbox";
import { get, unset, isUndefined } from "lodash";

export default class Group extends React.Component {
  static propTypes = {
    keepDataWhenUnCheck: PropTypes.bool,
  };

  static defaultProps = {
    keepDataWhenUnCheck: false,
  };

  static contextTypes = {
    formData: PropTypes.object,
  };

  static childContextTypes = {
    registerGroup: PropTypes.func,
    unRegisterGroup: PropTypes.func,
  };

  getChildContext() {
    return {
      registerGroup: this.registerGroup,
      unRegisterGroup: this.unRegisterGroup,
    };
  }

  state = {
    isCheck: false,
  };

  items = new Set();

  componentDidMount() {
    const { checkable, keepDataWhenUnCheck } = this.props;
    const { formData } = this.context;
    if (
      checkable &&
      !keepDataWhenUnCheck &&
      formData &&
      this.items.size > 0 &&
      Array.from(this.items).some((item) => !isUndefined(get(formData, item)))
    ) {
      this.setState({ isCheck: true });
    }
  }

  registerGroup = (name) => {
    this.items.add(name);
  };

  unRegisterGroup = (name) => {
    this.items.delete(name);
  };

  handleCheck = (check) => {
    const { keepDataWhenUnCheck } = this.props;
    this.setState({ isCheck: check }, () => {
      if (!keepDataWhenUnCheck && !check) {
        const { formData } = this.context;
        if (formData && this.items.size > 0) {
          this.items.forEach((item) => unset(formData, item));
        }
      }
    });
  };

  render() {
    const { children, checkable, label, desc, noWrapper } = this.props;
    const { isCheck } = this.state;

    if (!children) {
      return null;
    }

    const hideChildren = checkable && !isCheck;

    return (
      <div
        className={classNames("form-group", {
          "form-group-checkable": checkable,
        })}
      >
        <div>
          <div className="form-group-title">
            {checkable ? (
              <Checkbox checked={isCheck} onChange={this.handleCheck}>
                {label}
              </Checkbox>
            ) : (
              label
            )}
          </div>
          {desc && <div className="form-group-desc">{desc}</div>}
        </div>
        {noWrapper ? (
          <div
            className={classNames({
              "form-group-hide": hideChildren,
            })}
          >
            {children}
          </div>
        ) : (
          <div
            className={classNames("form-group-content", {
              "form-group-hide": hideChildren,
            })}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
}
