import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { omit, isNumber } from "lodash";
import Icon from "./LoadingIcon";

import "./styles.scss";

const sizeObj = {
  small: 20,
  medium: 32,
  large: 48,
};

class Loading extends Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    spinning: PropTypes.bool,
    children: PropTypes.element,
  };

  static defaultProps = {
    spinning: true,
    size: "medium",
  };

  constructor(props) {
    super(props);

    this.state = {
      spinning: props.spinning,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { spinning: prevSpinning } = prevState;
    const { spinning } = nextProps;

    if (prevSpinning !== spinning) {
      return { spinning };
    }

    return null;
  }

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
      wrapperClassName,
      ...restProps
    } = this.props;
    const { spinning } = this.state;

    const spinClassName = classNames(
      "spin",
      {
        "spin-sm": size === "small",
        "spin-lg": size === "large",
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

export default Loading;
