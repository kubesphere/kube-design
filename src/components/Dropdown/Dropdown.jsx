/* eslint-disable react/prefer-stateless-function */
import React, { Component, cloneElement, isValidElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { noop } from "lodash";
import Popper from "../Popper";

class Dropdown extends Component {
  static propTypes = {
    trigger: PropTypes.string,
    mode: PropTypes.oneOf(["dark", ""]),
    content: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
      PropTypes.func,
    ]),
    placement: PropTypes.string,
    showArrow: PropTypes.bool,
    className: PropTypes.string,
    visible: PropTypes.bool,
    closeAfterClick: PropTypes.bool,
    closeAfterMouseLeave: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    mode: "",
    trigger: "click",
    placement: "bottomLeft",
    showArrow: false,
    closeAfterClick: true,
    closeAfterMouseLeave: false,
    onClick: noop,
  };

  render() {
    const { className, children, onClick, mode, ...restProps } = this.props;
    const isTriggerValid = isValidElement(children);

    return (
      <Popper
        {...restProps}
        type="dropdown"
        className={classNames("dropdown", `dropdown-${mode}`, className)}
        onClick={onClick}
      >
        {isTriggerValid ? (
          cloneElement(children, {
            className: classNames("is-trigger", children.props.className),
          })
        ) : (
          <span className="is-trigger">{children}</span>
        )}
      </Popper>
    );
  }
}

export default Dropdown;
