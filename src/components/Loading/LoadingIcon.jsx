import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isNumber, noop } from "lodash";

class LoadingIcon extends PureComponent {
  static propTypes = {
    prefix: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    style: PropTypes.object,
    changeable: PropTypes.bool,
    clickable: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    type: "dark",
    size: "small",
    prefix: "qicon",
    style: {},
    changeable: false,
    clickable: false,
    disabled: false,
    onClick: noop,
  };

  render() {
    const {
      prefix,
      name,
      type,
      size,
      className,
      onClick,
      style,
      clickable,
      changeable,
      disabled,
    } = this.props;

    let styles = style;
    if (isNumber(size)) {
      styles = Object.assign({}, style, {
        width: `${size}px`,
        height: `${size}px`,
      });
    }

    return (
      <span
        style={styles}
        className={classNames(
          "icon",
          {
            [`is-${size}`]: !isNumber(size),
            "icon-clickable": clickable,
            "icon-changeable": changeable && !disabled,
            "icon-disabled": disabled,
          },
          className
        )}
        onClick={onClick}
      >
        <svg
          className={`${prefix} ${prefix}-${name} ${prefix}-${type} loading`}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <defs>
            <linearGradient
              id="icon-line-spinner-a"
              x1="4.167%"
              x2="4.167%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#E4EBF1" />
              <stop offset="100%" stopColor="#86919C" />
            </linearGradient>
            <linearGradient
              id="icon-line-spinner-b"
              x1="95.833%"
              x2="95.833%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#324558" />
              <stop offset="100%" stopColor="#86919C" />
            </linearGradient>
          </defs>
          <g fillRule="evenodd" fill="none">
            <path d="M24,0 C37.254834,-2.4348735e-15 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 1.623249e-15,37.254834 0,24 C-1.623249e-15,10.745166 10.745166,2.4348735e-15 24,0 Z"></path>
            <path
              fill="url(#icon-line-spinner-a)"
              d="M24,48 L24,46 C36.1502645,46 46,36.1502645 46,24 C46,12.1554065 36.6396211,2.49704654 24.9125246,2.01858157 L24.9954814,0.0202708022 C37.7886803,0.542235439 48,11.078627 48,24 C48,37.254834 37.254834,48 24,48 Z"
            ></path>
            <path
              fill="url(#icon-line-spinner-b)"
              d="M24,46 L24,48 C10.745166,48 0,37.254834 0,24.0000001 C0,11.0786271 10.2113197,0.542235649 23.0045134,0.0202712255 L23.0874754,2.01858177 C11.3603789,2.49704674 2,12.1554066 2,24.0000001 C2,36.1502645 11.8497355,46 24,46 Z"
            ></path>
          </g>
        </svg>
      </span>
    );
  }
}

export default LoadingIcon;
