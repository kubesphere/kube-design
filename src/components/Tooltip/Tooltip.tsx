import React, { Component } from "react";
import classNames from "classnames";
import Popper from "../Popper";
import { PopperProps } from "../Popper/Popper";

export interface TooltipProps extends PopperProps { }

class Tooltip extends Component<TooltipProps> {
  static defaultProps = {
    ...Popper.defaultProps,
    always: false,
    trigger: "hover",
    placement: "top",
  };

  render() {
    const { children, className, content, ...restProps } = this.props;

    if (!content) return children;

    return (
      <Popper
        {...restProps}
        content={content}
        className={classNames("tooltip", className)}
        type="tooltip"
      >
        {children}
      </Popper>
    );
  }
}

export default Tooltip;
