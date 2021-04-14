import React, { Component } from "react";
import classNames from "classnames";
import { omit, isNumber } from "lodash";
import Icon from "./LoadingIcon";

const sizeObj = {
  small: 20,
  medium: 32,
  large: 48,
};

enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

interface LoadingProps {
  className?: string,
  wrapperClassName?: string,
  size: Size | number,
  spinning: boolean,
  children?: React.ReactElement
}

export default class Loading extends Component<LoadingProps, {}> {
  static defaultProps = {
    spinning: true,
    size: Size.Medium,
  };

  isNestedPattern() {
    const { children } = this.props;
    return children;
  }

  renderIndicator() {
    const { size } = this.props;

    return (
      <span className="spin-dot spin-dot-spin">
        <Icon
          name="loading"
          type="dark"
          size={isNumber(size) ? size : sizeObj[size]}
          style={{ display: "block", margin: "auto" }}
        />
      </span>
    );
  }

  render() {
    const {
      className,
      size,
      children,
      spinning,
      wrapperClassName,
      ...restProps
    } = this.props;

    const spinClassName = classNames(
      "spin",
      {
        "spin-sm": size === Size.Small,
        "spin-lg": size === Size.Large,
        "spin-spinning": spinning,
      },
      className
    );

    const divProps = omit(restProps, ["spinning"]);

    const spinElement = (
      <div {...divProps} className={spinClassName}>
        {this.renderIndicator()}
      </div>
    );

    if (this.isNestedPattern()) {
      let animateClassName = `spin-nested-loading`;
      if (wrapperClassName) {
        animateClassName += ` ${wrapperClassName}`;
      }
      const containerClassName = classNames({
        "spin-container": true,
        "spin-blur": spinning,
      });
      return (
        <div {...divProps} className={animateClassName}>
          {spinning && <div key="loading">{spinElement}</div>}
          <div className={containerClassName} key="container">
            {children}
          </div>
        </div>
      );
    }
    return spinning && spinElement;
  }
}
