import React, { Component, cloneElement, isValidElement } from "react";
import classNames from "classnames";
import Popper from "../Popper";
import { PopperProps } from "../Popper/Popper";

export interface DropdownProps extends PopperProps {
  theme?: "dark" | "",
}

export default class Dropdown extends Component<DropdownProps, {}> {
  static defaultProps = {
    ...Popper.defaultProps,
    theme: "",
    trigger: "click",
    placement: "bottomLeft",
    showArrow: false,
  };

  render() {
    const { className, children, onClick, theme, ...restProps } = this.props;
    const isTriggerValid = isValidElement(children);

    return (
      <Popper
        {...restProps}
        type="dropdown"
        className={classNames("dropdown", `dropdown-${theme}`, className)}
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
